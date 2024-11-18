<?php

// namespace App\Http\Controllers;

// use App\Models\Session;
// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Http;
// use Shopify\Clients\Rest;
// use Illuminate\Support\Facades\Log;

// class ProductListController extends Controller
// {
//     
    // public function getProducts(Request $request)
    // {
    //     /** @var AuthSession */
    //     $session = $request->get('shopifySession'); // Provided by the shopify.auth middleware, guaranteed to be active

    //     // Create a new REST client with the shop URL and access token
    //     $client = new Rest($session->getShop(), $session->getAccessToken());

    //     try {
    //         // Get products from the Shopify store using the correct API endpoint
    //         $result = $client->get('admin/api/2024-01/products.json');

    //         // Return the products list as a JSON response
    //         return response()->json($result->getDecodedBody());
    //     } catch (\Exception $e) {
    //         // Handle any errors that occur during the API request
    //         return response()->json([
    //             'error' => 'Failed to fetch products from Shopify',
    //             'message' => $e->getMessage(),
    //         ], 500);
    //     }
    // }

//     

// }



// working code 16-11-2024


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

//         // GraphQL query
//         $query = "
//         {
//             node(id: \"gid://shopify/Product/{$productId}\") {
//                 id
//                 ... on Product {
//                     collections(first: 10) {
//                         edges {
//                             node {
//                                 id
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

//         // Extract the collection ID and remove the "gid://shopify/Collection/" prefix
//         $collectionId = $response->json()['data']['node']['collections']['edges'][0]['node']['id'] ?? null;
//         if ($collectionId) {
//             // Extract only the numeric part
//             $collectionId = basename($collectionId); // This removes the "gid://shopify/Collection/" prefix
//         }

//         // Return only the numeric collection ID
//         return response()->json([
//             $collectionId,
//         ]);
//     }
// }


// working code 16-11-2024  adding comments 


namespace App\Http\Controllers;

use App\Models\Session;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Shopify\Clients\Rest;
use Illuminate\Support\Facades\Log;

class ProductListController extends Controller
{
    /**
     * Fetch a product by its ID and return the associated collection ID.
     *
     * @param \Illuminate\Http\Request $request
     * @param string $productId
     * @return \Illuminate\Http\JsonResponse
     */
    public function getProductById(Request $request, $productId)
    {
        // Fetch the session associated with the shop
        $session = Session::where('shop', $request->shop)->first();

        // GraphQL query to fetch the product and its associated collections
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
            'X-Shopify-Access-Token' => $session->access_token, // Include the access token in the headers
            'Content-Type' => 'application/json' // Set the content type to JSON
        ])
            ->post("https://{$request->shop}/admin/api/2024-07/graphql.json", [
                'query' => $query, // Include the GraphQL query in the request body
            ]);

        // Extract the collection ID from the response and remove the "gid://shopify/Collection/" prefix
        $collectionId = $response->json()['data']['node']['collections']['edges'][0]['node']['id'] ?? null;
        if ($collectionId) {
            // Extract only the numeric part of the collection ID
            $collectionId = basename($collectionId); // This removes the "gid://shopify/Collection/" prefix
        }

        // Return only the numeric collection ID as a JSON response
        return response()->json([
            $collectionId,
        ]);
    }
}
