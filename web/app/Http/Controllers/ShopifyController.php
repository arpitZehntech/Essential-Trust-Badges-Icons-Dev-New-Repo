<?php

// namespace App\Http\Controllers;

// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Http;

// class ShopifyController extends Controller
// {
//     public function getProductById(Request $request, $productId)
//     {
//         // Get the shopifyApiUrl from the request
//         $shopifyApiUrl = $request->input('shopifyApiUrl'); // Ensure this is passed in the request

//         // GraphQL query to fetch the product by ID
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

//         try {
//             // Send the request to the Shopify GraphQL API using POST
//             $response = Http::withHeaders([
//                 'Content-Type' => 'application/json',
//             ])
//             ->post($shopifyApiUrl, [
//                 'query' => $query,
//             ]);

//             // Return the JSON response containing the product data
//             return response()->json([
//                 'data' => $response->json() // Ensure to return the data from the response
//             ]);
//         } catch (\Exception $e) {
//             // Handle any exceptions and return an error message
//             return response()->json([
//                 'message' => 'Error fetching product data',
//                 'error' => $e->getMessage(),
//             ], 500);
//         }
//     }
// }
