<?php

// namespace App\Http\Controllers;

// use App\Models\Session;
// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Http;
// use Shopify\Clients\Rest;
// use Illuminate\Support\Facades\Log;

// class ProductListController extends Controller
// {
//     public function getProductById(Request $request, $productId)
//     {
//         $session = Session::where('shop', $request->shop)->first();
//         // return $session->access_token;
//         // GraphQL query
//         $query = "
//         {
//             node(id: \"gid://shopify/Product/{$productId}\") {
//                 id
//                 ... on Product {
//                     title
//                     descriptionHtml
//                     createdAt
//                     updatedAt
//                     productType
//                     vendor
//                     handle
//                     tags
//                     collections(first: 10) {
//                         edges {
//                             node {
//                                 id
//                                 title
//                                 handle
//                                 description
//                                 updatedAt
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//         ";

//         // Send the request to the Shopify GraphQL API
//         $response = Http::withHeaders([
//             'X-Shopify-Access-Token' => $session->access_token,
//             'Content-Type' => 'application/json'
//         ])
//             ->post("https://{$request->shop}/admin/api/2024-07/graphql.json", [
//                 'query' => $query,
//             ]);

//         // Return the decoded JSON response
//         return response()->json([
//             'data' => $response->json() // Use the 'json()' method to decode the response
//         ]);
//     }
//     // public function getProducts(Request $request)
//     // {
//     //     /** @var AuthSession */
//     //     $session = $request->get('shopifySession'); // Provided by the shopify.auth middleware, guaranteed to be active

//     //     // Create a new REST client with the shop URL and access token
//     //     $client = new Rest($session->getShop(), $session->getAccessToken());

//     //     try {
//     //         // Get products from the Shopify store using the correct API endpoint
//     //         $result = $client->get('admin/api/2024-01/products.json');

//     //         // Return the products list as a JSON response
//     //         return response()->json($result->getDecodedBody());
//     //     } catch (\Exception $e) {
//     //         // Handle any errors that occur during the API request
//     //         return response()->json([
//     //             'error' => 'Failed to fetch products from Shopify',
//     //             'message' => $e->getMessage(),
//     //         ], 500);
//     //     }
//     // }

//     // public function getProductCollections(Request $request, $productId)
//     // {
//     //     /** @var AuthSession */
//     //     $session = $request->get('shopifySession'); // Provided by the shopify.auth middleware, guaranteed to be active

//     //     // Create a new REST client with the shop URL and access token
//     //     $client = new Rest($session->getShop(), $session->getAccessToken());

//     //     try {
//     //         // Get all collections from the Shopify store
//     //         $collectionsResult = $client->get('admin/api/2024-01/collections.json');
//     //         $collections = $collectionsResult->getDecodedBody()['collections'];

//     //         $collectionIds = [];

//     //         // Iterate through each collection and check if the product is included
//     //         foreach ($collections as $collection) {
//     //             $collectionId = $collection['id'];
//     //             $productsResult = $client->get("admin/api/2024-01/collections/{$collectionId}/products.json");
//     //             $products = $productsResult->getDecodedBody()['products'];

//     //             // Check if the product is in the collection
//     //             foreach ($products as $product) {
//     //                 if ($product['id'] == $productId) {
//     //                     $collectionIds[] = $collectionId;
//     //                     break;
//     //                 }
//     //             }
//     //         }

//     //         // Return the collection IDs as a JSON response
//     //         return response()->json($collectionIds);
//     //     } catch (\Exception $e) {
//     //         // Log the error for debugging
//     //         Log::error('Failed to fetch collections for the product from Shopify', ['error' => $e->getMessage()]);

//     //         // Handle any errors that occur during the API request
//     //         return response()->json([
//     //             'error' => 'Failed to fetch collections for the product from Shopify',
//     //             'message' => $e->getMessage(),
//     //         ], 500);
//     //     }
//     // }

// }




namespace App\Http\Controllers;

use App\Models\Session;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Shopify\Clients\Rest;
use Illuminate\Support\Facades\Log;

class ProductListController extends Controller
{
    public function getProductById(Request $request, $productId)
    {
        $session = Session::where('shop', $request->shop)->first();

        // GraphQL query
        $query = "
        {
            node(id: \"gid://shopify/Product/{$productId}\") {
                id
                ... on Product {
                    collections(first: 10) {
                        edges {
                            node {
                                id
                            }
                        }
                    }
                }
            }
        }
        ";

        // Send the request to the Shopify GraphQL API
        $response = Http::withHeaders([
            'X-Shopify-Access-Token' => $session->access_token,
            'Content-Type' => 'application/json'
        ])
            ->post("https://{$request->shop}/admin/api/2024-07/graphql.json", [
                'query' => $query,
            ]);

        // Extract the collection ID and remove the "gid://shopify/Collection/" prefix
        $collectionId = $response->json()['data']['node']['collections']['edges'][0]['node']['id'] ?? null;
        if ($collectionId) {
            // Extract only the numeric part
            $collectionId = basename($collectionId); // This removes the "gid://shopify/Collection/" prefix
        }

        // Return only the numeric collection ID
        return response()->json([
            $collectionId,
        ]);
    }
}
