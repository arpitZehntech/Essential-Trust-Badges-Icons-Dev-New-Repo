<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ShopifyController extends Controller
{
    public function getProductById(Request $request, $productId)
    {
        // Get the shopifyApiUrl from the request
        $shopifyApiUrl = $request->input('shopifyApiUrl'); // Ensure this is passed in the request

        // The REST API endpoint for fetching a product by ID
        $productApiUrl = "{$shopifyApiUrl}/products/{$productId}.json";

        try {
            // Send the request to the Shopify REST API using GET
            $response = Http::withHeaders([
                'Content-Type' => 'application/json',
            ])
            ->get($productApiUrl);

            // Return the JSON response containing the product data
            return response()->json([
                'data' => $response->json() // Ensure to return the data from the response
            ]);
        } catch (\Exception $e) {
            // Handle any exceptions and return an error message
            return response()->json([
                'message' => 'Error fetching product data',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
