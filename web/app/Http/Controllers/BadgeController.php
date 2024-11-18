<?php

// working code 16-11-2024

// namespace App\Http\Controllers;

// use Illuminate\Http\Request;
// use App\Models\Badge;
// use App\Models\BadgePage;
// use Illuminate\Support\Facades\Log;

// class BadgeController extends Controller
// {
//     public function index()
//     {
//         try {
//             $badges = Badge::with('badgePages')->get();
//             return response()->json($badges);
//         } catch (\Exception $e) {
//             return response()->json(['error' => 'Unable to fetch badges'], 500);
//         }
//     }

//     public function show($id)
//     {
//         try {
//             $badge = Badge::with('badgePages')->findOrFail($id);
//             return response()->json($badge);
//         } catch (\Exception $e) {
//             return response()->json(['error' => 'Unable to fetch badge'], 500);
//         }
//     }

//     public function store(Request $request)
//     {
//         $validatedData = $request->validate([
//             'badge_name' => 'nullable|string|max:255',
//             'badge_type' => 'nullable|string|max:255',
//             'status' => 'nullable|string|in:Draft,Publish',
//             'badge_pages' => 'array',
//             'badge_pages.*.title' => 'string|nullable',
//             'badge_pages.*.subheading' => 'string|nullable',
//             'badge_pages.*.icon_name' => 'string|nullable',
//             'badge_pages.*.icon_svg' => 'string|nullable',
//             'badge_pages.*.call_to_action' => 'string|nullable',
//             'badge_pages.*.button_text' => 'string|nullable',
//             'badge_pages.*.product_json' => 'nullable|string',
//             'badge_pages.*.collection_json' => 'nullable|string',
//             'badge_pages.*.external_url' => 'nullable|string',
//             'badge_pages.*.placement_product_type' => 'nullable|string',
//             'badge_pages.*.placement_product_json' => 'nullable|string',
//             'badge_pages.*.placement_collection_json' => 'nullable|string',
//             'badge_pages.*.placement_tags_json' => 'nullable|string',
//         ]);

//         try {

      
//             $badge = Badge::create([
             
//                 // 'shop' => $shop,
//                 'badge_name' => $validatedData['badge_name'],
//                 'badge_type' => $validatedData['badge_type'],
//                 'status' => $validatedData['status'],
//             ]);

//             foreach ($validatedData['badge_pages'] as $pageData) {
//                 $badge->badgePages()->create($pageData);
//             }

//             return response()->json(['message' => 'Badge created successfully'], 201);
//         } catch (\Exception $e) {
//             return response()->json(['error' => 'Unable to create badge'], 500);
//         }
//     }

//     public function update(Request $request, $id)
//     {
//         $validatedData = $request->validate([
//             'badge_name' => 'nullable|string|max:255',
//             'badge_type' => 'nullable|string|max:255',
//             'status' => 'nullable|string|in:Draft,Publish',
//             'badge_pages' => 'array',
//             'badge_pages.*.title' => 'string|nullable',
//             'badge_pages.*.subheading' => 'string|nullable',
//             'badge_pages.*.icon_name' => 'string|nullable',
//             'badge_pages.*.icon_svg' => 'string|nullable',
//             'badge_pages.*.call_to_action' => 'string|nullable',
//             'badge_pages.*.button_text' => 'string|nullable',
//             'badge_pages.*.product_json' => 'nullable|string',
//             'badge_pages.*.collection_json' => 'nullable|string',
//             'badge_pages.*.external_url' => 'nullable|string',
//             'badge_pages.*.placement_product_type' => 'nullable|string',
//             'badge_pages.*.placement_product_json' => 'nullable|string',
//             'badge_pages.*.placement_collection_json' => 'nullable|string',
//             'badge_pages.*.placement_tags_json' => 'nullable|string',
//         ]);

//         try {

//             $badge = Badge::with('badgePages')->findOrFail($id);
//             $badge->update([
       
//                 // 'shop' => $shop,
//                 'badge_name' => $validatedData['badge_name'],
//                 'badge_type' => $validatedData['badge_type'],
//                 'status' => $validatedData['status'],
//             ]);

//             if (isset($validatedData['badge_pages'])) {
//                 $badge->badgePages()->delete();
//                 foreach ($validatedData['badge_pages'] as $pageData) {
//                     $badge->badgePages()->create($pageData);
//                 }
//             }

//             return response()->json(['message' => 'Badge updated successfully'], 200);
//         } catch (\Exception $e) {
//             return response()->json(['error' => 'Unable to update badge'], 500);
//         }
//     }

//     public function getPublishedBadges()
//     {
//         try {
//             // Fetch badges with status 'publish' and their associated pages
//             $badges = Badge::with(['badgePages' => function ($query) {
//             }])->where('status', 'publish')->get();

//             // Return the badges as JSON response
//             return response()->json($badges);
//         } catch (\Exception $e) {
//             return response()->json(['error' => 'Unable to fetch badges: ' . $e->getMessage()], 500);
//         }
//     }

//     public function destroy($id)
//     {
//         try {
//             $badge = Badge::findOrFail($id); // Find the badge by ID
//             $badge->badgePages()->delete(); // Delete associated badge pages
//             $badge->delete(); // Delete the badge itself

//             return response()->json(['message' => 'Badge deleted successfully'], 200);
//         } catch (\Exception $e) {
//             return response()->json(['error' => 'Unable to delete badge'], 500);
//         }
//     }
// }



// working code 16-11-2024  adding comments 


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Badge;
use App\Models\BadgePage;
use Illuminate\Support\Facades\Log;

class BadgeController extends Controller
{
    /**
     * Fetch all badges with their associated pages.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        try {
            $badges = Badge::with('badgePages')->get(); // Fetch all badges with their associated pages
            return response()->json($badges); // Return the badges as a JSON response
        } catch (\Exception $e) {
            return response()->json(['error' => 'Unable to fetch badges'], 500); // Return an error response if fetching fails
        }
    }

    /**
     * Fetch a single badge by ID with its associated pages.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        try {
            $badge = Badge::with('badgePages')->findOrFail($id); // Fetch the badge by ID with its associated pages
            return response()->json($badge); // Return the badge as a JSON response
        } catch (\Exception $e) {
            return response()->json(['error' => 'Unable to fetch badge'], 500); // Return an error response if fetching fails
        }
    }

    // /**
    //  * Create a new badge with its associated pages.
    //  *
    //  * @param \Illuminate\Http\Request $request
    //  * @return \Illuminate\Http\JsonResponse
    //  */
    // public function store(Request $request)
    // {
    //     $validatedData = $request->validate([
    //         'badge_name' => 'nullable|string|max:255',
    //         'badge_type' => 'nullable|string|max:255',
    //         'status' => 'nullable|string|in:Draft,Publish',
    //         'badge_pages' => 'array',
    //         'badge_pages.*.title' => 'string|nullable',
    //         'badge_pages.*.subheading' => 'string|nullable',
    //         'badge_pages.*.icon_name' => 'string|nullable',
    //         'badge_pages.*.icon_svg' => 'string|nullable',
    //         'badge_pages.*.call_to_action' => 'string|nullable',
    //         'badge_pages.*.button_text' => 'string|nullable',
    //         'badge_pages.*.product_json' => 'nullable|string',
    //         'badge_pages.*.collection_json' => 'nullable|string',
    //         'badge_pages.*.external_url' => 'nullable|string',
    //         'badge_pages.*.placement_product_type' => 'nullable|string',
    //         'badge_pages.*.placement_product_json' => 'nullable|string',
    //         'badge_pages.*.placement_collection_json' => 'nullable|string',
    //         'badge_pages.*.placement_tags_json' => 'nullable|string',
    //     ]);

    //     try {
    //         $badge = Badge::create([
    //             'badge_name' => $validatedData['badge_name'],
    //             'badge_type' => $validatedData['badge_type'],
    //             'status' => $validatedData['status'],
    //         ]);

    //         foreach ($validatedData['badge_pages'] as $pageData) {
    //             $badge->badgePages()->create($pageData); // Create associated badge pages
    //         }

    //         return response()->json(['message' => 'Badge created successfully'], 201); // Return a success response
    //     } catch (\Exception $e) {
    //         return response()->json(['error' => 'Unable to create badge'], 500); // Return an error response if creation fails
    //     }
    // }

    // /**
    //  * Update an existing badge with its associated pages.
    //  *
    //  * @param \Illuminate\Http\Request $request
    //  * @param int $id
    //  * @return \Illuminate\Http\JsonResponse
    //  */
    // public function update(Request $request, $id)
    // {
    //     $validatedData = $request->validate([
    //         'badge_name' => 'nullable|string|max:255',
    //         'badge_type' => 'nullable|string|max:255',
    //         'status' => 'nullable|string|in:Draft,Publish',
    //         'badge_pages' => 'array',
    //         'badge_pages.*.title' => 'string|nullable',
    //         'badge_pages.*.subheading' => 'string|nullable',
    //         'badge_pages.*.icon_name' => 'string|nullable',
    //         'badge_pages.*.icon_svg' => 'string|nullable',
    //         'badge_pages.*.call_to_action' => 'string|nullable',
    //         'badge_pages.*.button_text' => 'string|nullable',
    //         'badge_pages.*.product_json' => 'nullable|string',
    //         'badge_pages.*.collection_json' => 'nullable|string',
    //         'badge_pages.*.external_url' => 'nullable|string',
    //         'badge_pages.*.placement_product_type' => 'nullable|string',
    //         'badge_pages.*.placement_product_json' => 'nullable|string',
    //         'badge_pages.*.placement_collection_json' => 'nullable|string',
    //         'badge_pages.*.placement_tags_json' => 'nullable|string',
    //     ]);

    //     try {
    //         $badge = Badge::with('badgePages')->findOrFail($id); // Find the badge by ID with its associated pages
    //         $badge->update([
    //             'badge_name' => $validatedData['badge_name'],
    //             'badge_type' => $validatedData['badge_type'],
    //             'status' => $validatedData['status'],
    //         ]);

    //         if (isset($validatedData['badge_pages'])) {
    //             $badge->badgePages()->delete(); // Delete existing associated pages
    //             foreach ($validatedData['badge_pages'] as $pageData) {
    //                 $badge->badgePages()->create($pageData); // Create new associated pages
    //             }
    //         }

    //         return response()->json(['message' => 'Badge updated successfully'], 200); // Return a success response
    //     } catch (\Exception $e) {
    //         return response()->json(['error' => 'Unable to update badge'], 500); // Return an error response if update fails
    //     }
    // }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'badge_name' => 'nullable|string|max:255',
            'badge_type' => 'nullable|string|max:255',
            'status' => 'nullable|string|in:Draft,Publish',
            'background_color' => 'nullable|string',
            'border_color' => 'nullable|string',
            'title_color' => 'nullable|string',
            'subheading_color' => 'nullable|string',
            'icon_color' => 'nullable|string',
            'corner_radius' => 'nullable|integer',
            'border_size' => 'nullable|integer',
            'title_size' => 'nullable|integer',
            'subheading_size' => 'nullable|integer',
            'icon_size' => 'nullable|integer',
            'button_color' => 'nullable|string',
            'button_text_color' => 'nullable|string',
            'button_border_radius' => 'nullable|integer',
            'button_text_size' => 'nullable|integer',
            'badge_pages' => 'array',
            'badge_pages.*.title' => 'string|nullable',
            'badge_pages.*.subheading' => 'string|nullable',
            'badge_pages.*.icon_name' => 'string|nullable',
            'badge_pages.*.icon_svg' => 'string|nullable',
            'badge_pages.*.call_to_action' => 'string|nullable',
            'badge_pages.*.button_text' => 'string|nullable',
            'badge_pages.*.product_json' => 'nullable|string',
            'badge_pages.*.collection_json' => 'nullable|string',
            'badge_pages.*.external_url' => 'nullable|string',
            'badge_pages.*.placement_product_type' => 'nullable|string',
            'badge_pages.*.placement_product_json' => 'nullable|string',
            'badge_pages.*.placement_collection_json' => 'nullable|string',
            'badge_pages.*.placement_tags_json' => 'nullable|string',
        ]);
    
        try {
            $badge = Badge::create([
                'badge_name' => $validatedData['badge_name'],
                'badge_type' => $validatedData['badge_type'],
                'status' => $validatedData['status'],
                'background_color' => $validatedData['background_color'],
                'border_color' => $validatedData['border_color'],
                'title_color' => $validatedData['title_color'],
                'subheading_color' => $validatedData['subheading_color'],
                'icon_color' => $validatedData['icon_color'],
                'corner_radius' => $validatedData['corner_radius'],
                'border_size' => $validatedData['border_size'],
                'title_size' => $validatedData['title_size'],
                'subheading_size' => $validatedData['subheading_size'],
                'icon_size' => $validatedData['icon_size'],
                'button_color' => $validatedData['button_color'],
                'button_text_color' => $validatedData['button_text_color'],
                'button_border_radius' => $validatedData['button_border_radius'],
                'button_text_size' => $validatedData['button_text_size'],
            ]);
    
            foreach ($validatedData['badge_pages'] as $pageData) {
                $badge->badgePages()->create($pageData); // Create associated badge pages
            }
    
            return response()->json(['message' => 'Badge created successfully'], 201); // Return a success response
        } catch (\Exception $e) {
            return response()->json(['error' => 'Unable to create badge'], 500); // Return an error response if creation fails
        }
    }
    
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'badge_name' => 'nullable|string|max:255',
            'badge_type' => 'nullable|string|max:255',
            'status' => 'nullable|string|in:Draft,Publish',
            'background_color' => 'nullable|string',
            'border_color' => 'nullable|string',
            'title_color' => 'nullable|string',
            'subheading_color' => 'nullable|string',
            'icon_color' => 'nullable|string',
            'corner_radius' => 'nullable|integer',
            'border_size' => 'nullable|integer',
            'title_size' => 'nullable|integer',
            'subheading_size' => 'nullable|integer',
            'icon_size' => 'nullable|integer',
            'button_color' => 'nullable|string',
            'button_text_color' => 'nullable|string',
            'button_border_radius' => 'nullable|integer',
            'button_text_size' => 'nullable|integer',
            'badge_pages' => 'array',
            'badge_pages.*.title' => 'string|nullable',
            'badge_pages.*.subheading' => 'string|nullable',
            'badge_pages.*.icon_name' => 'string|nullable',
            'badge_pages.*.icon_svg' => 'string|nullable',
            'badge_pages.*.call_to_action' => 'string|nullable',
            'badge_pages.*.button_text' => 'string|nullable',
            'badge_pages.*.product_json' => 'nullable|string',
            'badge_pages.*.collection_json' => 'nullable|string',
            'badge_pages.*.external_url' => 'nullable|string',
            'badge_pages.*.placement_product_type' => 'nullable|string',
            'badge_pages.*.placement_product_json' => 'nullable|string',
            'badge_pages.*.placement_collection_json' => 'nullable|string',
            'badge_pages.*.placement_tags_json' => 'nullable|string',
        ]);
    
        try {
            $badge = Badge::with('badgePages')->findOrFail($id); // Find the badge by ID with its associated pages
            $badge->update([
                'badge_name' => $validatedData['badge_name'],
                'badge_type' => $validatedData['badge_type'],
                'status' => $validatedData['status'],
                'background_color' => $validatedData['background_color'],
                'border_color' => $validatedData['border_color'],
                'title_color' => $validatedData['title_color'],
                'subheading_color' => $validatedData['subheading_color'],
                'icon_color' => $validatedData['icon_color'],
                'corner_radius' => $validatedData['corner_radius'],
                'border_size' => $validatedData['border_size'],
                'title_size' => $validatedData['title_size'],
                'subheading_size' => $validatedData['subheading_size'],
                'icon_size' => $validatedData['icon_size'],
                'button_color' => $validatedData['button_color'],
                'button_text_color' => $validatedData['button_text_color'],
                'button_border_radius' => $validatedData['button_border_radius'],
                'button_text_size' => $validatedData['button_text_size'],
            ]);
    
            if (isset($validatedData['badge_pages'])) {
                $badge->badgePages()->delete(); // Delete existing associated pages
                foreach ($validatedData['badge_pages'] as $pageData) {
                    $badge->badgePages()->create($pageData); // Create new associated pages
                }
            }
    
            return response()->json(['message' => 'Badge updated successfully'], 200); // Return a success response
        } catch (\Exception $e) {
            return response()->json(['error' => 'Unable to update badge'], 500); // Return an error response if update fails
        }
    }
    

    /**
     * Fetch all published badges with their associated pages.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getPublishedBadges()
    {
        try {
            $badges = Badge::with(['badgePages' => function ($query) {
                // Additional query modifications can be added here if needed
            }])->where('status', 'publish')->get(); // Fetch badges with status 'publish' and their associated pages

            return response()->json($badges); // Return the badges as a JSON response
        } catch (\Exception $e) {
            return response()->json(['error' => 'Unable to fetch badges: ' . $e->getMessage()], 500); // Return an error response if fetching fails
        }
    }

    /**
     * Delete a badge and its associated pages.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        try {
            $badge = Badge::findOrFail($id); // Find the badge by ID
            $badge->badgePages()->delete(); // Delete associated badge pages
            $badge->delete(); // Delete the badge itself

            return response()->json(['message' => 'Badge deleted successfully'], 200); // Return a success response
        } catch (\Exception $e) {
            return response()->json(['error' => 'Unable to delete badge'], 500); // Return an error response if deletion fails
        }
    }
}
