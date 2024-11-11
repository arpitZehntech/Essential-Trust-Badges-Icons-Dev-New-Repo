<?php

// // namespace App\Http\Controllers;

// // use Illuminate\Http\Request;
// // use App\Models\Badge;


// // class BadgeController extends Controller
// // {
// //     public function index()
// //     {
// //         // Retrieve all reviews from the database
// //         $badge = Badge::all();
// //         return response()->json($badge);
// //     }
// // }
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
//             \Log::info('Fetched badges:', $badges->toArray());  // Log badge data to see structure
//             return response()->json($badges);
//         } catch (\Exception $e) {
//             \Log::error('Error fetching badges: ' . $e->getMessage());
//             return response()->json(['error' => 'Unable to fetch badges'], 500);
//         }
//     }

//     public function show($id)
//     {
//         try {
//             $badge = Badge::with('badgePages')->findOrFail($id);
//             Log::info('Fetched badge:', $badge->toArray());  // Log badge data to see structure
//             return response()->json($badge);
//         } catch (\Exception $e) {
//             Log::error('Error fetching badge: ' . $e->getMessage());
//             return response()->json(['error' => 'Unable to fetch badge'], 500);
//         }
//     }

//     // public function store(Request $request)
//     // {
//     //     $validatedData = $request->validate([
//     //         'badge_name' => 'nullable|string|max:255',
//     //         'badge_type' => 'nullable|string|max:255',
//     //         'status' => 'nullable|string|max:255',
//     //         'badge_pages' => 'array',
//     //         'badge_pages.*.title' => 'string|nullable',
//     //         'badge_pages.*.subheading' => 'string|nullable',
//     //         'badge_pages.*.icon_name' => 'string|nullable',
//     //         'badge_pages.*.call_to_action' => 'string|nullable',
//     //         'badge_pages.*.button_text' => 'string|nullable',
//     //     ]);

//     //     $badge = Badge::create([
//     //         'badge_name' => $validatedData['badge_name'],
//     //         'badge_type' => $validatedData['badge_type'],
//     //         'status' => $validatedData['status'],
//     //     ]);

//     //     foreach ($validatedData['badge_pages'] as $pageData) {
//     //         $badge->badgePages()->create($pageData);
//     //     }

//     //     return response()->json(['message' => 'Badge created successfully'], 201);
//     // }

//     // public function update(Request $request, $id)
//     // {
//     //     $validatedData = $request->validate([
//     //         'badge_name' => 'nullable|string|max:255',
//     //         'badge_type' => 'nullable|string|max:255',
//     //         'status' => 'nullable|string|max:255',
//     //         'badge_pages' => 'array',
//     //         'badge_pages.*.title' => 'string|nullable',
//     //         'badge_pages.*.subheading' => 'string|nullable',
//     //         'badge_pages.*.icon_name' => 'string|nullable',
//     //         'badge_pages.*.call_to_action' => 'string|nullable',
//     //         'badge_pages.*.button_text' => 'string|nullable',
//     //     ]);

//     //     try {
//     //         $badge = Badge::with('badgePages')->findOrFail($id); // Retrieve the badge by ID
//     //         $badge->update([
//     //             'badge_name' => $validatedData['badge_name'],
//     //             'badge_type' => $validatedData['badge_type'],
//     //             'status' => $validatedData['status'],
//     //         ]);

//     //         // Update badge pages
//     //         if (isset($validatedData['badge_pages'])) {
//     //             // Remove existing badge pages
//     //             $badge->badgePages()->delete();

//     //             // Create new badge pages
//     //             foreach ($validatedData['badge_pages'] as $pageData) {
//     //                 $badge->badgePages()->create($pageData);
//     //             }
//     //         }

//     //         return response()->json(['message' => 'Badge updated successfully'], 200);
//     //     } catch (\Exception $e) {
//     //         \Log::error('Error updating badge: ' . $e->getMessage());
//     //         return response()->json(['error' => 'Unable to update badge'], 500);
//     //     }
//     // }

//     public function store(Request $request)
//     {
//         $validatedData = $request->validate([
//             'badge_name' => 'nullable|string|max:255',
//             'badge_type' => 'nullable|string|max:255',
//             'status' => 'nullable|string|in:Draft,Publish', // Ensure status is either 'Draft' or 'Publish'
//             'badge_pages' => 'array',
//             'badge_pages.*.title' => 'string|nullable',
//             'badge_pages.*.subheading' => 'string|nullable',
//             'badge_pages.*.icon_name' => 'string|nullable',
//             'badge_pages.*.call_to_action' => 'string|nullable',
//             'badge_pages.*.button_text' => 'string|nullable',
//         ]);

//         $badge = Badge::create([
//             'badge_name' => $validatedData['badge_name'],
//             'badge_type' => $validatedData['badge_type'],
//             'status' => $validatedData['status'],
//         ]);

//         foreach ($validatedData['badge_pages'] as $pageData) {
//             $badge->badgePages()->create($pageData);
//         }

//         return response()->json(['message' => 'Badge created successfully'], 201);
//     }


//     public function update(Request $request, $id)
//     {
//         $validatedData = $request->validate([
//             'badge_name' => 'nullable|string|max:255',
//             'badge_type' => 'nullable|string|max:255',
//             'status' => 'nullable|string|in:Draft,Publish', // Ensure status is either 'Draft' or 'Publish'
//             'badge_pages' => 'array',
//             'badge_pages.*.title' => 'string|nullable',
//             'badge_pages.*.subheading' => 'string|nullable',
//             'badge_pages.*.icon_name' => 'string|nullable',
//             'badge_pages.*.call_to_action' => 'string|nullable',
//             'badge_pages.*.button_text' => 'string|nullable',
//         ]);

//         try {
//             $badge = Badge::with('badgePages')->findOrFail($id); // Retrieve the badge by ID
//             $badge->update([
//                 'badge_name' => $validatedData['badge_name'],
//                 'badge_type' => $validatedData['badge_type'],
//                 'status' => $validatedData['status'],
//             ]);

//             // Update badge pages
//             if (isset($validatedData['badge_pages'])) {
//                 // Remove existing badge pages
//                 $badge->badgePages()->delete();

//                 // Create new badge pages
//                 foreach ($validatedData['badge_pages'] as $pageData) {
//                     $badge->badgePages()->create($pageData);
//                 }
//             }

//             return response()->json(['message' => 'Badge updated successfully'], 200);
//         } catch (\Exception $e) {
//             \Log::error('Error updating badge: ' . $e->getMessage());
//             return response()->json(['error' => 'Unable to update badge'], 500);
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
//             \Log::error('Error deleting badge: ' . $e->getMessage());
//             return response()->json(['error' => 'Unable to delete badge'], 500);
//         }
//     }
// }


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
//             \Log::info('Fetched badges:', $badges->toArray());  // Log badge data to see structure
//             return response()->json($badges);
//         } catch (\Exception $e) {
//             \Log::error('Error fetching badges: ' . $e->getMessage());
//             return response()->json(['error' => 'Unable to fetch badges'], 500);
//         }
//     }


//     public function show($id)
//     {
//         try {
//             $badge = Badge::with('badgePages')->findOrFail($id);
//             Log::info('Fetched badge:', $badge->toArray());  // Log badge data to see structure
//             return response()->json($badge);
//         } catch (\Exception $e) {
//             Log::error('Error fetching badge: ' . $e->getMessage());
//             return response()->json(['error' => 'Unable to fetch badge'], 500);
//         }
//     }

//     public function store(Request $request)
//     {
//         $validatedData = $request->validate([
//             'badge_name' => 'nullable|string|max:255',
//             'badge_type' => 'nullable|string|max:255',
//             'status' => 'nullable|string|in:Draft,Publish', // Ensure status is either 'Draft' or 'Publish'
//             'badge_pages' => 'array',
//             'badge_pages.*.title' => 'string|nullable',
//             'badge_pages.*.subheading' => 'string|nullable',
//             'badge_pages.*.icon_name' => 'string|nullable',
//             'badge_pages.*.call_to_action' => 'string|nullable',
//             'badge_pages.*.button_text' => 'string|nullable',
//         ]);

//         $badge = Badge::create([
//             'badge_name' => $validatedData['badge_name'],
//             'badge_type' => $validatedData['badge_type'],
//             'status' => $validatedData['status'],
//         ]);

//         foreach ($validatedData['badge_pages'] as $pageData) {
//             $badge->badgePages()->create($pageData);
//         }

//         return response()->json(['message' => 'Badge created successfully'], 201);
//     }

//     public function update(Request $request, $id)
//     {
//         $validatedData = $request->validate([
//             'badge_name' => 'nullable|string|max:255',
//             'badge_type' => 'nullable|string|max:255',
//             'status' => 'nullable|string|in:Draft,Publish', // Ensure status is either 'Draft' or 'Publish'
//             'badge_pages' => 'array',
//             'badge_pages.*.title' => 'string|nullable',
//             'badge_pages.*.subheading' => 'string|nullable',
//             'badge_pages.*.icon_name' => 'string|nullable',
//             'badge_pages.*.call_to_action' => 'string|nullable',
//             'badge_pages.*.button_text' => 'string|nullable',
//         ]);

//         try {
//             $badge = Badge::with('badgePages')->findOrFail($id); // Retrieve the badge by ID
//             $badge->update([
//                 'badge_name' => $validatedData['badge_name'],
//                 'badge_type' => $validatedData['badge_type'],
//                 'status' => $validatedData['status'],
//             ]);

//             // Update badge pages
//             if (isset($validatedData['badge_pages'])) {
//                 // Remove existing badge pages
//                 $badge->badgePages()->delete();

//                 // Create new badge pages
//                 foreach ($validatedData['badge_pages'] as $pageData) {
//                     $badge->badgePages()->create($pageData);
//                 }
//             }

//             return response()->json(['message' => 'Badge updated successfully'], 200);
//         } catch (\Exception $e) {
//             \Log::error('Error updating badge: ' . $e->getMessage());
//             return response()->json(['error' => 'Unable to update badge'], 500);
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
//             \Log::error('Error deleting badge: ' . $e->getMessage());
//             return response()->json(['error' => 'Unable to delete badge'], 500);
//         }
//     }
// }

// working code

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
//             \Log::info('Fetched badges:', $badges->toArray());  // Log badge data to see structure
//             return response()->json($badges);
//         } catch (\Exception $e) {
//             \Log::error('Error fetching badges: ' . $e->getMessage());
//             return response()->json(['error' => 'Unable to fetch badges'], 500);
//         }
//     }

//     public function show($id)
//     {
//         try {
//             $badge = Badge::with('badgePages')->findOrFail($id);
//             Log::info('Fetched badge:', $badge->toArray());  // Log badge data to see structure
//             return response()->json($badge);
//         } catch (\Exception $e) {
//             Log::error('Error fetching badge: ' . $e->getMessage());
//             return response()->json(['error' => 'Unable to fetch badge'], 500);
//         }
//     }

//     public function store(Request $request)
//     {
//         $validatedData = $request->validate([
//             'badge_name' => 'nullable|string|max:255',
//             'badge_type' => 'nullable|string|max:255',
//             'status' => 'nullable|string|in:Draft,Publish', // Ensure status is either 'Draft' or 'Publish'
//             'badge_pages' => 'array',
//             'badge_pages.*.title' => 'string|nullable',
//             'badge_pages.*.subheading' => 'string|nullable',
//             'badge_pages.*.icon_name' => 'string|nullable',
//             'badge_pages.*.call_to_action' => 'string|nullable',
//             'badge_pages.*.button_text' => 'string|nullable',
//         ]);

//         $badge = Badge::create([
//             'badge_name' => $validatedData['badge_name'],
//             'badge_type' => $validatedData['badge_type'],
//             'status' => $validatedData['status'],
//         ]);

//         foreach ($validatedData['badge_pages'] as $pageData) {
//             $badge->badgePages()->create($pageData);
//         }

//         return response()->json(['message' => 'Badge created successfully'], 201);
//     }

//     public function update(Request $request, $id)
//     {
//         $validatedData = $request->validate([
//             'badge_name' => 'nullable|string|max:255',
//             'badge_type' => 'nullable|string|max:255',
//             'status' => 'nullable|string|in:Draft,Publish', // Ensure status is either 'Draft' or 'Publish'
//             'badge_pages' => 'array',
//             'badge_pages.*.title' => 'string|nullable',
//             'badge_pages.*.subheading' => 'string|nullable',
//             'badge_pages.*.icon_name' => 'string|nullable',
//             'badge_pages.*.call_to_action' => 'string|nullable',
//             'badge_pages.*.button_text' => 'string|nullable',
//         ]);

//         try {
//             $badge = Badge::with('badgePages')->findOrFail($id); // Retrieve the badge by ID
//             $badge->update([
//                 'badge_name' => $validatedData['badge_name'],
//                 'badge_type' => $validatedData['badge_type'],
//                 'status' => $validatedData['status'],
//             ]);

//             // Update badge pages
//             if (isset($validatedData['badge_pages'])) {
//                 // Remove existing badge pages
//                 $badge->badgePages()->delete();

//                 // Create new badge pages
//                 foreach ($validatedData['badge_pages'] as $pageData) {
//                     $badge->badgePages()->create($pageData);
//                 }
//             }

//             return response()->json(['message' => 'Badge updated successfully'], 200);
//         } catch (\Exception $e) {
//             \Log::error('Error updating badge: ' . $e->getMessage());
//             return response()->json(['error' => 'Unable to update badge'], 500);
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
//             \Log::error('Error deleting badge: ' . $e->getMessage());
//             return response()->json(['error' => 'Unable to delete badge'], 500);
//         }
//     }
// }



// testing code for json inserting

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
//             \Log::info('Fetched badges:', $badges->toArray());  // Log badge data to see structure
//             return response()->json($badges);
//         } catch (\Exception $e) {
//             \Log::error('Error fetching badges: ' . $e->getMessage());
//             return response()->json(['error' => 'Unable to fetch badges'], 500);
//         }
//     }

//     public function show($id)
//     {
//         try {
//             $badge = Badge::with('badgePages')->findOrFail($id); 
//             Log::info('Fetched badge:', $badge->toArray());  // Log badge data to see structure
//             return response()->json($badge);
//         } catch (\Exception $e) {
//             Log::error('Error fetching badge: ' . $e->getMessage());
//             return response()->json(['error' => 'Unable to fetch badge'], 500);
//         }
//     }

//     public function store(Request $request)
//     {
//         $validatedData = $request->validate([
//             'badge_name' => 'nullable|string|max:255',
//             'badge_type' => 'nullable|string|max:255',
//             'status' => 'nullable|string|in:Draft,Publish', // Ensure status is either 'Draft' or 'Publish'
//             'badge_pages' => 'array',
//             'badge_pages.*.title' => 'string|nullable',
//             'badge_pages.*.subheading' => 'string|nullable',
//             'badge_pages.*.icon_name' => 'string|nullable',
//             'badge_pages.*.call_to_action' => 'string|nullable',
//             'badge_pages.*.button_text' => 'string|nullable',
//             'badge_pages.*.product_json' => 'nullable|string',
//             'badge_pages.*.collection_json' => 'nullable|string',
//             'badge_pages.*.external_url' => 'nullable|string',
//         ]);

//         $badge = Badge::create([
//             'badge_name' => $validatedData['badge_name'],
//             'badge_type' => $validatedData['badge_type'],
//             'status' => $validatedData['status'],
//         ]);

//         foreach ($validatedData['badge_pages'] as $pageData) {
//             $badge->badgePages()->create($pageData);
//         }

//         return response()->json(['message' => 'Badge created successfully'], 201);
//     }

//     public function update(Request $request, $id)
//     {
//         $validatedData = $request->validate([
//             'badge_name' => 'nullable|string|max:255',
//             'badge_type' => 'nullable|string|max:255',
//             'status' => 'nullable|string|in:Draft,Publish', // Ensure status is either 'Draft' or 'Publish'
//             'badge_pages' => 'array',
//             'badge_pages.*.title' => 'string|nullable',
//             'badge_pages.*.subheading' => 'string|nullable',
//             'badge_pages.*.icon_name' => 'string|nullable',
//             'badge_pages.*.call_to_action' => 'string|nullable',
//             'badge_pages.*.button_text' => 'string|nullable',
//             'badge_pages.*.product_json' => 'nullable|string',
//             'badge_pages.*.collection_json' => 'nullable|string',
//             'badge_pages.*.external_url' => 'nullable|string',
//         ]);

//         try {
//             $badge = Badge::with('badgePages')->findOrFail($id); // Retrieve the badge by ID
//             $badge->update([
//                 'badge_name' => $validatedData['badge_name'],
//                 'badge_type' => $validatedData['badge_type'],
//                 'status' => $validatedData['status'],
//             ]);

//             // Update badge pages
//             if (isset($validatedData['badge_pages'])) {
//                 // Remove existing badge pages
//                 $badge->badgePages()->delete();

//                 // Create new badge pages
//                 foreach ($validatedData['badge_pages'] as $pageData) {
//                     $badge->badgePages()->create($pageData);
//                 }
//             }

//             return response()->json(['message' => 'Badge updated successfully'], 200);
//         } catch (\Exception $e) {
//             \Log::error('Error updating badge: ' . $e->getMessage());
//             return response()->json(['error' => 'Unable to update badge'], 500);
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
//             \Log::error('Error deleting badge: ' . $e->getMessage());
//             return response()->json(['error' => 'Unable to delete badge'], 500);
//         }
//     }
// }




// NEW CODE  but old code from gpt 7/11/2024 before this above is working code

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Badge;
use App\Models\BadgePage;
use Illuminate\Support\Facades\Log;

class BadgeController extends Controller
{
    public function index()
    {
        try {
            $badges = Badge::with('badgePages')->get();
            // \Log::info('Fetched badges:', $badges->toArray());  // Log badge data to see structure
            return response()->json($badges);
        } catch (\Exception $e) {
            // \Log::error('Error fetching badges: ' . $e->getMessage());
            return response()->json(['error' => 'Unable to fetch badges'], 500);
        }
    }

    public function show($id)
    {
        try {
            $badge = Badge::with('badgePages')->findOrFail($id);
            // Log::info('Fetched badge:', $badge->toArray());  // Log badge data to see structure
            return response()->json($badge);
        } catch (\Exception $e) {
            // Log::error('Error fetching badge: ' . $e->getMessage());
            return response()->json(['error' => 'Unable to fetch badge'], 500);
        }
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'badge_name' => 'nullable|string|max:255',
            'badge_type' => 'nullable|string|max:255',
            'status' => 'nullable|string|in:Draft,Publish',
            'badge_pages' => 'array',
            'badge_pages.*.title' => 'string|nullable',
            'badge_pages.*.subheading' => 'string|nullable',
            'badge_pages.*.icon_name' => 'string|nullable',
            'badge_pages.*.icon_svg' => 'string|nullable', // Add validation for icon_svg
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
            ]);

            foreach ($validatedData['badge_pages'] as $pageData) {
                $badge->badgePages()->create($pageData);
            }

            return response()->json(['message' => 'Badge created successfully'], 201);
        } catch (\Exception $e) {
            // Log::error('Error creating badge: ' . $e->getMessage());
            return response()->json(['error' => 'Unable to create badge'], 500);
        }
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'badge_name' => 'nullable|string|max:255',
            'badge_type' => 'nullable|string|max:255',
            'status' => 'nullable|string|in:Draft,Publish',
            'badge_pages' => 'array',
            'badge_pages.*.title' => 'string|nullable',
            'badge_pages.*.subheading' => 'string|nullable',
            'badge_pages.*.icon_name' => 'string|nullable',
            'badge_pages.*.icon_svg' => 'string|nullable', // Add validation for icon_svg
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
            $badge = Badge::with('badgePages')->findOrFail($id);
            $badge->update([
                'badge_name' => $validatedData['badge_name'],
                'badge_type' => $validatedData['badge_type'],
                'status' => $validatedData['status'],
            ]);

            if (isset($validatedData['badge_pages'])) {
                $badge->badgePages()->delete();
                foreach ($validatedData['badge_pages'] as $pageData) {
                    $badge->badgePages()->create($pageData);
                }
            }

            return response()->json(['message' => 'Badge updated successfully'], 200);
        } catch (\Exception $e) {
            // Log::error('Error updating badge: ' . $e->getMessage());
            return response()->json(['error' => 'Unable to update badge'], 500);
        }
    }

    public function getPublishedBadges()
    {
        try {
            // Fetch badges with status 'publish' and their associated pages
            $badges = Badge::with(['badgePages' => function($query) {
                // $query->where('status', 'publish');
            }])->where('status', 'publish')->get();

            // Return the badges as JSON response
            return response()->json($badges);
        } catch (\Exception $e) {
            // Log the error and return a JSON response with the error message
            // Log::error('Error fetching published badges: ' . $e->getMessage());
            return response()->json(['error' => 'Unable to fetch badges: ' . $e->getMessage()], 500);
        }
    }

    // public function getPublishedBadges(Request $request)
    // {
    //     try {
    //         // Fetch badges with status 'publish' and their associated pages
    //         $badges = Badge::with('badgePages')->where('status', 'publish')->get();
    //         // return $badges;
    //         // Log the fetched badges
    //         Log::info('Fetched badges:', $badges->toArray());

    //         // Filter badges based on placement_product_type
    //         $filteredBadges = $badges->filter(function ($badge) use ($request) {
    //             $placementType = $badge->badgePages->first()->placement_product_type;

    //             // Log the placement type and request parameters
    //             Log::info('Placement type:', ['type' => $placementType, 'product_id' => $request->product_id, 'collection_id' => $request->collection_id]);

    //             if ($placementType === 'allProducts') {
    //                 return true; // Show on all products
    //             } elseif ($placementType === 'specificProducts') {
    //                 $productIds = $this->extractIds($badge->badgePages->first()->placement_product_json);
    //                 // Log the extracted product IDs
    //                 Log::info('Extracted product IDs:', $productIds);
    //                 return in_array($request->product_id, $productIds); // Show on specific products
    //             } elseif ($placementType === 'specificCollections') {
    //                 $collectionIds = $this->extractIds($badge->badgePages->first()->placement_collection_json);
    //                 // Log the extracted collection IDs
    //                 Log::info('Extracted collection IDs:', $collectionIds);
    //                 return in_array($request->collection_id, $collectionIds); // Show on specific collections
    //             }

    //             return false;
    //         });


    //         return $filteredBadges;

    //         // Log the filtered badges
    //         Log::info('Filtered badges:', $filteredBadges->toArray());

    //         // Return the filtered badges as JSON response
    //         return response()->json($filteredBadges);
    //     } catch (\Exception $e) {
    //         // Log the error and return a JSON response with the error message
    //         Log::error('Error fetching badges: ' . $e->getMessage());
    //         return response()->json(['error' => 'Unable to fetch badges: ' . $e->getMessage()], 500);
    //     }
    // }

    // // Helper function to extract IDs from JSON
    // private function extractIds($json)
    // {
    //     $data = json_decode($json, true);
    //     $ids = [];

    //     if (is_array($data)) {
    //         foreach ($data as $item) {
    //             if (isset($item['id'])) {
    //                 $ids[] = $this->extractIdFromGid($item['id']);
    //             }
    //         }
    //     }

    //     return $ids;
    // }

    // // Helper function to extract the ID from the GID
    // private function extractIdFromGid($gid)
    // {
    //     $parts = explode('/', $gid);
    //     return end($parts);
    // }

    // public function getPublishedBadges(Request $request)
    // {
    //     try {
    //         // Log the incoming request parameters
    //         Log::info('Incoming request parameters:', $request->all());
    
    //         // Fetch badges with status 'publish' and their associated pages
    //         $badgesQuery = Badge::with('badgePages')->where('status', 'publish');
    
    //         // Log the initial query
    //         Log::info('Initial badges query:', [$badgesQuery->toSql(), $badgesQuery->getBindings()]);
    
    //         // Filter badges based on placement_product_type
    //         if ($request->has('product_id')) {
    //             Log::info('Product ID present in request:', ['product_id' => $request->product_id]);
    
    //             $badgesQuery->whereHas('badgePages', function ($query) use ($request) {
    //                 $query->where(function ($query) use ($request) {
    //                     $query->where('placement_product_type', 'allProducts')
    //                         ->orWhere(function ($query) use ($request) {
    //                             $query->where('placement_product_type', 'specificProducts')
    //                                 ->whereJsonContains('placement_product_json', ['id' => 'gid://shopify/Product/' . $request->product_id]);
    //                         })
    //                         ->orWhere(function ($query) use ($request) {
    //                             $query->where('placement_product_type', 'specificCollections')
    //                                 ->whereJsonContains('placement_collection_json', ['id' => 'gid://shopify/Collection/' . $request->collection_id]);
    //                         });
    //                 });
    //             });
    
    //             // Log the filtered query
    //             Log::info('Filtered badges query:', [$badgesQuery->get(), $badgesQuery->getBindings()]);
    //         }
    
    //         $badges = $badgesQuery->get();
    
    //         // Log the fetched badges
    //         Log::info('Fetched badges:', $badges->toArray());
    
    //         // Check if any badges were fetched
    //         if ($badges->isEmpty()) {
    //             Log::info('No badges found for the given criteria.');
    //         }
    
    //         // Return the fetched badges as JSON response
    //         return response()->json($badges);
    //     } catch (\Exception $e) {
    //         // Log the error and return a JSON response with the error message
    //         Log::error('Error fetching badges: ' . $e->getMessage());
    //         return response()->json(['error' => 'Unable to fetch badges: ' . $e->getMessage()], 500);
    //     }
    // }
    
    



    public function destroy($id)
    {
        try {
            $badge = Badge::findOrFail($id); // Find the badge by ID
            $badge->badgePages()->delete(); // Delete associated badge pages
            $badge->delete(); // Delete the badge itself

            return response()->json(['message' => 'Badge deleted successfully'], 200);
        } catch (\Exception $e) {
            // \Log::error('Error deleting badge: ' . $e->getMessage());
            return response()->json(['error' => 'Unable to delete badge'], 500);
        }
    }
}
