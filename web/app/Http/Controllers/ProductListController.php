<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Shopify\Clients\Rest;

class ProductListController extends Controller
{
    public function getProducts(Request $request)
    {
        /** @var AuthSession */
        $session = $request->get('shopifySession'); // Provided by the shopify.auth middleware, guaranteed to be active

        // Create a new REST client with the shop URL and access token
        $client = new Rest($session->getShop(), $session->getAccessToken());

        try {
            // Get products from the Shopify store using the correct API endpoint
            $result = $client->get('admin/api/2024-01/products.json');

            // Return the products list as a JSON response
            return response()->json($result->getDecodedBody());
        } catch (\Exception $e) {
            // Handle any errors that occur during the API request
            return response()->json([
                'error' => 'Failed to fetch products from Shopify',
                'message' => $e->getMessage(),
            ], 500);
        }
    }
}
