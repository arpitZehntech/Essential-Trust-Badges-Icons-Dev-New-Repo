<?php

namespace App\Http\Controllers;

use App\Models\Session;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class TagController extends Controller
{
  
    public function getAllTags(Request $request)
    {
        $session = Session::where('shop', $request->shop)->first();

        // GraphQL query to fetch all tags
        $query = "
        {
            tags(first: 250) {
                edges {
                    node {
                        id
                        name
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

        // Check if the response is successful
        if ($response->successful()) {
            $tags = $response->json()['data']['tags']['edges'];
            $tagsData = array_map(function ($edge) {
                return [
                    'id' => $edge['node']['id'],
                    'name' => $edge['node']['name']
                ];
            }, $tags);

            return response()->json($tagsData);
        }

        // Return an error response if the request fails
        return response()->json([
            'error' => 'Failed to fetch tags from Shopify',
            'message' => $response->json()['errors'][0]['message'] ?? 'Unknown error',
        ], $response->status());
    }
}