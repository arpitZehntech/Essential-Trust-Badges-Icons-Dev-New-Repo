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
// use Illuminate\Support\Facades\Log;

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
        try {
            $validatedData = $request->validate([
                'badge_name' => 'nullable|string|max:255',
                'badge_type' => 'nullable|string|in:single-banner,icon-block,payment-icons', // Ensure badge_type is one of the enum values
                'status' => 'nullable|string|in:Draft,Publish', // Ensure status is either 'Draft' or 'Publish'
                'badge_pages' => 'array',
                'badge_pages.*.title' => 'string|nullable',
                'badge_pages.*.subheading' => 'string|nullable',
                'badge_pages.*.icon_name' => 'string|nullable',
                'badge_pages.*.icon_svg' => 'string|nullable',
                'badge_pages.*.call_to_action' => 'nullable|string|in:no-cta,button-cta,clickable-banner-cta', // Ensure call_to_action is one of the enum values
                'badge_pages.*.button_text' => 'string|nullable',
                'badge_pages.*.product_json' => 'nullable|string',
                'badge_pages.*.collection_json' => 'nullable|string',
                'badge_pages.*.external_url' => 'nullable|string',
                'badge_pages.*.placement_product_type' => 'nullable|string',
                'badge_pages.*.placement_product_json' => 'nullable|string',
                'badge_pages.*.placement_collection_json' => 'nullable|string',
                'badge_pages.*.placement_tags_json' => 'nullable|string',
            ]);
    
            // Convert the badge_type value to match the enum values
            $badgeTypeMap = [
                'single-banner' => 'Single Banner',
                'icon-block' => 'Icon Block',
                'payment-icons' => 'Payment Icons',
            ];
    
            $badgeType = $badgeTypeMap[$validatedData['badge_type']] ?? null;
    
            if (!$badgeType) {
                return response()->json(['error' => 'Invalid badge type'], 400);
            }
    
            $badge = Badge::create([
                'badge_name' => $validatedData['badge_name'],
                'badge_type' => $badgeType,
                
                'status' => $validatedData['status'],
            ]);
    
            // Convert the call_to_action values to match the enum values
            $callToActionMap = [
                'no-cta' => 'No Call To Action',
                'button-cta' => 'Button',
                'clickable-banner-cta' => 'Whole Banner Clickable',
            ];
    
            foreach ($validatedData['badge_pages'] as $pageData) {
                $pageData['call_to_action'] = $callToActionMap[$pageData['call_to_action']] ?? null;
                if (!$pageData['call_to_action']) {
                    return response()->json(['error' => 'Invalid call to action'], 400);
                }
                $badge->badgePages()->create($pageData);
            }
    
            return response()->json(['message' => 'Badge created successfully'], 201);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['error' => $e->errors()], 422);
        } catch (\Exception $e) {
            // Log::error('Error creating badge: ' . $e->getMessage());
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }


public function update(Request $request, $id)
{
    $validatedData = $request->validate([
        'badge_name' => 'nullable|string|max:255',
        'badge_type' => 'nullable|string|in:single-banner,icon-block,payment-icons', // Ensure badge_type is one of the enum values
        'status' => 'nullable|string|in:Draft,Publish', // Ensure status is either 'Draft' or 'Publish'
        'badge_pages' => 'array',
        'badge_pages.*.title' => 'string|nullable',
        'badge_pages.*.subheading' => 'string|nullable',
        'badge_pages.*.icon_name' => 'string|nullable',
        'badge_pages.*.icon_svg' => 'string|nullable',
        'badge_pages.*.call_to_action' => 'nullable|string|in:no-cta,button-cta,clickable-banner-cta', // Ensure call_to_action is one of the enum values
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
        $badge = Badge::with('badgePages')->findOrFail($id); // Retrieve the badge by ID

        // Convert the badge_type value to match the enum values
        $badgeTypeMap = [
            'single-banner' => 'Single Banner',
            'icon-block' => 'Icon Block',
            'payment-icons' => 'Payment Icons',
        ];

        $badgeType = null;
        if (isset($validatedData['badge_type'])) {
            $badgeType = $badgeTypeMap[$validatedData['badge_type']] ?? null;
            if (!$badgeType) {
                return response()->json(['error' => 'Invalid badge type'], 400);
            }
        }

        $badge->update([
            'badge_name' => $validatedData['badge_name'] ?? $badge->badge_name,
            'badge_type' => $badgeType ?? $badge->badge_type,
            'status' => $validatedData['status'] ?? $badge->status,
        ]);

        // Convert the call_to_action values to match the enum values
        $callToActionMap = [
            'no-cta' => 'No Call To Action',
            'button-cta' => 'Button',
            'clickable-banner-cta' => 'Whole Banner Clickable',
        ];

        // Update badge pages
        if (isset($validatedData['badge_pages'])) {
            // Remove existing badge pages
            $badge->badgePages()->delete();

            // Create new badge pages
            foreach ($validatedData['badge_pages'] as $pageData) {
                $pageData['call_to_action'] = $callToActionMap[$pageData['call_to_action']] ?? null;
                if (!$pageData['call_to_action']) {
                    return response()->json(['error' => 'Invalid call to action'], 400);
                }
                $badge->badgePages()->create($pageData);
            }
        }

        return response()->json(['message' => 'Badge updated successfully'], 200);
    } catch (\Illuminate\Validation\ValidationException $e) {
        return response()->json(['error' => $e->errors()], 422);
    } catch (\Exception $e) {
        // Log::error('Error updating badge: ' . $e->getMessage());
        return response()->json(['error' => $e->getMessage()], 500);
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

