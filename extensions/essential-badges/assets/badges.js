// document.addEventListener("DOMContentLoaded", function () {
//     // Create the main container div
//     const container = document.createElement('div');
//     container.setAttribute('data-banner', '');
//     container.setAttribute('data-type', 'product-page');
//     container.setAttribute('data-id', '6f141c86-dabc-445d-88ab-9b354f0b0740');
//     container.style.width = '100%';
//     container.style.padding = '16px calc(16px)';
//     container.style.border = '0px solid rgb(197, 200, 209)';
//     container.style.borderRadius = '8px';
//     container.style.display = 'flex';
//     container.style.justifyContent = 'space-between';
//     container.style.alignItems = 'center';
//     container.style.gap = '10px';
//     container.style.position = 'relative';
//     container.style.marginTop = '20px';
//     container.style.marginBottom = '20px';
//     container.style.background = 'rgb(255, 255, 255)';

//     // Create the icon container div
//     const iconContainer = document.createElement('div');
//     iconContainer.id = 'icon_container';
//     iconContainer.style.display = 'flex';
//     iconContainer.style.alignItems = 'center';
//     iconContainer.style.justifyContent = 'center';
//     iconContainer.style.padding = '4px';
//     iconContainer.style.marginRight = '4px';
//     iconContainer.style.borderRadius = '4px';
//     iconContainer.style.backgroundColor = '#ffffff';
//     iconContainer.style.backgroundImage = 'url(https://rivmorkxomnwzdlytbgv.supabase.co/storage/v1/object/public/public/ecom-icons/delivery2.svg)';
//     iconContainer.style.backgroundRepeat = 'no-repeat';
//     iconContainer.style.backgroundPosition = 'center';
//     iconContainer.style.backgroundSize = '32px';

//     // Create the icon div
//     const icon = document.createElement('div');
//     icon.id = 'icon';
//     icon.style.height = '32px';
//     icon.style.width = '32px';
//     icon.style.display = 'flex';

//     // Append the icon to the icon container
//     iconContainer.appendChild(icon);

//     // Create the text container div
//     const textContainer = document.createElement('div');
//     textContainer.id = 'text_container';
//     textContainer.style.display = 'flex';
//     textContainer.style.flexDirection = 'column';
//     textContainer.style.justifyContent = 'flex-start';
//     textContainer.style.alignItems = 'flex-start';
//     textContainer.style.flex = '1';
//     textContainer.style.gap = '2px';

//     // Create the title span
//     const title = document.createElement('span');
//     title.id = 'title';
//     title.style.display = 'block';
//     title.style.fontWeight = '600';
//     title.style.fontSize = '16px';
//     title.style.color = '#202223';
//     title.style.margin = '0';
//     title.style.lineHeight = '1';
//     title.style.wordWrap = 'break-word';
//     title.style.maxWidth = '100%';
//     title.innerText = 'Free Shipping';

//     // Create the subheading span
//     const subheading = document.createElement('span');
//     subheading.id = 'subheading';
//     subheading.style.display = 'block';
//     subheading.style.fontSize = '14px';
//     subheading.style.color = '#96a4b6';
//     subheading.style.fontWeight = '400';
//     subheading.style.margin = '0';
//     subheading.style.textAlign = 'left';
//     subheading.style.lineHeight = '1';
//     subheading.style.wordWrap = 'break-word';
//     subheading.style.maxWidth = '100%';
//     subheading.innerText = 'Delivered to Your doorstep, on us!';

//     // Append the title and subheading to the text container
//     textContainer.appendChild(title);
//     textContainer.appendChild(subheading);

//     // Create the CTA button
//     const ctaButton = document.createElement('a');
//     ctaButton.href = 'https://zehntech-store1.myshopify.com';
//     ctaButton.id = 'cta-button';
//     ctaButton.target = '_blank';
//     ctaButton.style.textDecoration = 'none';
//     ctaButton.style.flexShrink = '0';
//     ctaButton.style.margin = '0';
//     ctaButton.style.border = 'none';
//     ctaButton.style.fontWeight = '600';
//     ctaButton.style.padding = '10px 16px';
//     ctaButton.style.display = 'flex';
//     ctaButton.style.alignItems = 'center';
//     ctaButton.style.justifyContent = 'center';
//     ctaButton.style.fontSize = '14px';
//     ctaButton.style.backgroundColor = '#202223';
//     ctaButton.style.color = '#fafafa';
//     ctaButton.style.borderRadius = '4px';
//     ctaButton.style.cursor = 'pointer';
//     ctaButton.style.transition = 'background-color 0.2s ease-in-out';
//     ctaButton.innerText = 'Shop now';

//     // Append the icon container, text container, and CTA button to the main container
//     container.appendChild(iconContainer);
//     container.appendChild(textContainer);
//     container.appendChild(ctaButton);

//     // Select the product-form class
//     const productForm = document.querySelector('.product-form');
//     if (productForm) {
//         productForm.appendChild(container); // Append the container to the product form
//     }
// });



// //////////////////////////////////////////////    mistral code at 7/11/2024  /////////////////////

// document.addEventListener("DOMContentLoaded", function () {

//     // Function to fetch published badges
//     function fetchPublishedBadges() {
//         fetch(`${APP_URL}api/front-end/badges/published`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok: ' + response.statusText);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log("Fetched data:", data); // Log the fetched data
//                 if (data && data.length > 0) {
//                     data.forEach(badge => {
//                         const badgePages = badge.badge_pages; // Ensure correct property name
//                         console.log("Badge pages:", badgePages); // Log the badge pages

//                         // Create badge container
//                         const badgeContainer = document.createElement('div');
//                         badgeContainer.style.marginBottom = '40px';

//                         // Badge Type
//                         const badgeType = document.createElement('p');
//                         badgeType.innerText = `Badge Type: ${badge.badge_type || 'No Type'}`;
//                         badgeContainer.appendChild(badgeType);

              

//                         // Add badge container to the page
//                         const productForm = document.querySelector('.product-form');
//                         if (productForm) {
//                             productForm.appendChild(badgeContainer); // Append badge container to the product form
//                         }

//                         if (badgePages && badgePages.length > 0) {
//                             badgePages.forEach(page => {
//                                 console.log("Processing page:", page); // Log each page

//                                 // Create the main container div
//                                 const containerDiv = document.createElement('div');
//                                 containerDiv.style.width = '100%';
//                                 containerDiv.style.padding = '16px';
//                                 containerDiv.style.border = '1px solid rgb(197, 200, 209)';
//                                 containerDiv.style.borderRadius = '8px';
//                                 containerDiv.style.display = 'flex';
//                                 containerDiv.style.justifyContent = 'space-between';
//                                 containerDiv.style.alignItems = 'center';
//                                 containerDiv.style.gap = '10px';
//                                 containerDiv.style.position = 'relative';
//                                 containerDiv.style.marginTop = '20px';
//                                 containerDiv.style.marginBottom = '20px';
//                                 containerDiv.style.background = 'rgb(255, 255, 255)';

//                                 // Create the icon container div
//                                 const iconContainer = document.createElement('div');
//                                 iconContainer.innerHTML = page.icon_svg;  // Inject the SVG string as HTML
//                                 containerDiv.appendChild(iconContainer);

//                                 // Create the text container div
//                                 const textContainer = document.createElement('div');
//                                 textContainer.id = 'text_container';
//                                 textContainer.style.display = 'flex';
//                                 textContainer.style.flexDirection = 'column';
//                                 textContainer.style.justifyContent = 'flex-start';
//                                 textContainer.style.alignItems = 'flex-start';
//                                 textContainer.style.flex = '1';
//                                 textContainer.style.gap = '2px';

//                                 // Create the title span
//                                 const title = document.createElement('span');
//                                 title.id = 'title';
//                                 title.style.display = 'block';
//                                 title.style.fontWeight = '600';
//                                 title.style.fontSize = '16px';
//                                 title.style.color = '#202223';
//                                 title.style.margin = '0';
//                                 title.style.lineHeight = '1';
//                                 title.style.wordWrap = 'break-word';
//                                 title.style.maxWidth = '100%';
//                                 title.innerText = page.title || 'No Title';

//                                 // Create the subheading span
//                                 const subheading = document.createElement('span');
//                                 subheading.id = 'subheading';
//                                 subheading.style.display = 'block';
//                                 subheading.style.fontSize = '14px';
//                                 subheading.style.color = '#96a4b6';
//                                 subheading.style.fontWeight = '400';
//                                 subheading.style.margin = '0';
//                                 subheading.style.textAlign = 'left';
//                                 subheading.style.lineHeight = '1';
//                                 subheading.style.wordWrap = 'break-word';
//                                 subheading.style.maxWidth = '100%';
//                                 subheading.innerText = page.subheading || 'No Subheading';

//                                 // Append the title and subheading to the text container
//                                 textContainer.appendChild(title);
//                                 textContainer.appendChild(subheading);

//                                 // Create the CTA button
//                                 const ctaButton = document.createElement('a');
//                                 ctaButton.href = '#';
//                                 ctaButton.id = 'cta-button';
//                                 ctaButton.target = '_blank';
//                                 ctaButton.style.textDecoration = 'none';
//                                 ctaButton.style.flexShrink = '0';
//                                 ctaButton.style.margin = '0';
//                                 ctaButton.style.border = 'none';
//                                 ctaButton.style.fontWeight = '600';
//                                 ctaButton.style.padding = '10px 16px';
//                                 ctaButton.style.display = 'flex';
//                                 ctaButton.style.alignItems = 'center';
//                                 ctaButton.style.justifyContent = 'center';
//                                 ctaButton.style.fontSize = '14px';
//                                 ctaButton.style.backgroundColor = '#202223';
//                                 ctaButton.style.color = '#fafafa';
//                                 ctaButton.style.borderRadius = '4px';
//                                 ctaButton.style.cursor = 'pointer';
//                                 ctaButton.style.transition = 'background-color 0.2s ease-in-out';
//                                 ctaButton.innerText = page.button_text || 'Shop Now';

//                                 // Append the icon container, text container, and CTA button to the main container
//                                 containerDiv.appendChild(iconContainer);
//                                 containerDiv.appendChild(textContainer);
//                                 containerDiv.appendChild(ctaButton);

//                                 // Append the container to the badge container
//                                 badgeContainer.appendChild(containerDiv);

//                                 if (badge.badge_type.includes('icon-block') || badge.badge_type.includes('payment-icons')) {
//                                     renderIconsBlock(badgeContainer, page);
//                                 }
//                             });
//                         } else {
//                             console.log("No badge pages found for badge:", badge); // Log if no badge pages
//                         }
//                     });
//                 } else {
//                     console.log("No published badges found."); // Log if no badges are found
//                     alert('No published badges found.');
//                 }
//             })
//             .catch(error => {
//                 console.error('Error fetching badge data:', error);
//                 alert('Error fetching badge data: ' + error.message);
//             });
//     }

//     // Combined render function for icon-block and payment-icons badge types
//     function renderIconsBlock(container, page) {
//         if (page.badge_pages && Array.isArray(page.badge_pages)) {
//             const containerDiv = document.createElement('div');
//             containerDiv.style.width = '100%';
//             containerDiv.style.padding = '20px';
//             containerDiv.style.backgroundColor = '#f7f7f7';
//             containerDiv.style.borderRadius = '10px';
//             containerDiv.style.display = 'flex';
//             containerDiv.style.justifyContent = 'space-around';
//             containerDiv.style.alignItems = 'center';
//             containerDiv.style.margin = '20px 0';
//             containerDiv.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

//             page.badge_pages.forEach(badge => {
//                 // Create the badge container
//                 const badgeContainer = document.createElement('div');
//                 badgeContainer.style.textAlign = 'center';
//                 badgeContainer.style.padding = '10px';

//                 // Create the icon
//                 const icon = document.createElement('img');
//                 icon.src = badge.icon_svg;
//                 icon.style.width = '50px';
//                 icon.style.height = '50px';
//                 icon.style.marginBottom = '10px';

//                 // Create the title
//                 const title = document.createElement('h3');
//                 title.innerText = badge.title || 'No Title';
//                 title.style.fontSize = '18px';
//                 title.style.fontWeight = 'bold';
//                 title.style.margin = '10px 0';

//                 // Create the subheading
//                 const subheading = document.createElement('p');
//                 subheading.innerText = badge.subheading || 'No Subheading';
//                 subheading.style.fontSize = '14px';
//                 subheading.style.color = '#888';
//                 subheading.style.marginBottom = '15px';

//                 // Create the CTA button
//                 const button = document.createElement('a');
//                 button.href = '#';
//                 button.innerText = 'Shop now';
//                 button.style.display = 'inline-block';
//                 button.style.padding = '10px 20px';
//                 button.style.backgroundColor = '#202223';
//                 button.style.color = '#fff';
//                 button.style.textDecoration = 'none';
//                 button.style.borderRadius = '5px';
//                 button.style.fontWeight = 'bold';
//                 button.style.transition = 'background-color 0.3s';

//                 button.addEventListener('mouseenter', () => {
//                     button.style.backgroundColor = '#333';
//                 });

//                 button.addEventListener('mouseleave', () => {
//                     button.style.backgroundColor = '#202223';
//                 });

//                 // Append all elements to the badge container
//                 badgeContainer.appendChild(icon);
//                 badgeContainer.appendChild(title);
//                 badgeContainer.appendChild(subheading);
//                 badgeContainer.appendChild(button);

//                 // Append the badge container to the main container
//                 containerDiv.appendChild(badgeContainer);
//             });

//             // Append the main container to the badge container
//             container.appendChild(containerDiv);
//         }
//     }

//     // Call the function to fetch and display badges
//     fetchPublishedBadges();
// });




// document.addEventListener("DOMContentLoaded", function () {
// var prodIds = [];


//     // Function to fetch published badges
//     function fetchPublishedBadges() {
//         fetch(`${APP_URL}api/front-end/badges/published`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok: ' + response.statusText);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log("Fetched data:", data); // Log the fetched data
//                 if (data && data.length > 0) {
//                     data.forEach(badge => {
//                         const badgePages = badge.badge_pages; // Ensure correct property name
//                         console.log("Badge pages:", badgePages); // Log the badge pages

//                         // Create badge container
//                         const badgeContainer = document.createElement('div');
//                         badgeContainer.style.marginBottom = '40px';

//                         // Badge Type
//                         const badgeType = document.createElement('p');
//                         badgeType.innerText = `Badge Type: ${badge.badge_type || 'No Type'}`;
//                         badgeContainer.appendChild(badgeType);

//                         // Loop through each page and display additional fields
//                         if (badgePages && badgePages.length > 0) {

//                             badgePages.forEach(page => {
//                                 console.log("Processing page:", page); // Log each page

//                                 // Create the main container div
//                                 const containerDiv = document.createElement('div');
//                                 containerDiv.style.width = '100%';
//                                 containerDiv.style.padding = '16px';
//                                 containerDiv.style.border = '1px solid rgb(197, 200, 209)';
//                                 containerDiv.style.borderRadius = '8px';
//                                 containerDiv.style.display = 'flex';
//                                 containerDiv.style.justifyContent = 'space-between';
//                                 containerDiv.style.alignItems = 'center';
//                                 containerDiv.style.gap = '10px';
//                                 containerDiv.style.position = 'relative';
//                                 containerDiv.style.marginTop = '20px';
//                                 containerDiv.style.marginBottom = '20px';
//                                 containerDiv.style.background = 'rgb(255, 255, 255)';

//                                 // Create the icon container div
//                                 const iconContainer = document.createElement('div');
//                                 iconContainer.innerHTML = page.icon_svg;  // Inject the SVG string as HTML
//                                 containerDiv.appendChild(iconContainer);

//                                 // Create the text container div
//                                 const textContainer = document.createElement('div');
//                                 textContainer.id = 'text_container';
//                                 textContainer.style.display = 'flex';
//                                 textContainer.style.flexDirection = 'column';
//                                 textContainer.style.justifyContent = 'flex-start';
//                                 textContainer.style.alignItems = 'flex-start';
//                                 textContainer.style.flex = '1';
//                                 textContainer.style.gap = '2px';

//                                 // Create the title span
//                                 const title = document.createElement('span');
//                                 title.id = 'title';
//                                 title.style.display = 'block';
//                                 title.style.fontWeight = '600';
//                                 title.style.fontSize = '16px';
//                                 title.style.color = '#202223';
//                                 title.style.margin = '0';
//                                 title.style.lineHeight = '1';
//                                 title.style.wordWrap = 'break-word';
//                                 title.style.maxWidth = '100%';
//                                 title.innerText = page.title || 'No Title';

//                                 // Create the subheading span
//                                 const subheading = document.createElement('span');
//                                 subheading.id = 'subheading';
//                                 subheading.style.display = 'block';
//                                 subheading.style.fontSize = '14px';
//                                 subheading.style.color = '#96a4b6';
//                                 subheading.style.fontWeight = '400';
//                                 subheading.style.margin = '0';
//                                 subheading.style.textAlign = 'left';
//                                 subheading.style.lineHeight = '1';
//                                 subheading.style.wordWrap = 'break-word';
//                                 subheading.style.maxWidth = '100%';
//                                 subheading.innerText = page.subheading || 'No Subheading';

//                                 // Append the title and subheading to the text container
//                                 textContainer.appendChild(title);
//                                 textContainer.appendChild(subheading);

//                                 // Create the new badgeType for placement_product_type
//                                 const placementProductType = document.createElement('p');
//                                 placementProductType.innerText = `Placement Product Type: ${page.placement_product_type || 'No Type'}`;
                         


//                                 // Assuming 'page.placement_product_json' and 'page.placement_collection_json' contain dynamic JSON data
//                                 const placementProductJson = document.createElement('p');
//                                 const placementCollectionJson = document.createElement('p');

//                                 // Function to unescape and parse JSON
//                                 function parseJson(jsonString) {
//                                     try {
//                                         // First, unescape the string twice and remove the outer quotes
//                                         let unescapedJson = jsonString.replace(/\\"/g, '"').replace(/\\"/g, '"');
//                                         unescapedJson = unescapedJson.slice(1, -1); // Remove the outer quotes

//                                         // Now try to parse the unescaped JSON
//                                         return JSON.parse(unescapedJson);
//                                     } catch (error) {
//                                         console.error('Error parsing JSON:', error); // Log the error for debugging
//                                         return null;
//                                     }
//                                 }

//                                 // Check if the product data exists
//                                 if (page.placement_product_json) {
//                                     const productData = parseJson(page.placement_product_json);
//                                     if (productData) {
//                                         // Extract product IDs (if available)
//                                         const productIds = productData.map(product => product.id.split('/').pop());

//                                         // Display the IDs or a fallback message if no IDs exist
//                                         placementProductJson.innerText = `From Placement Product JSON ID(s): ${productIds.join(', ') || 'No ID'}`;
//                                     } else {
//                                         placementProductJson.innerText = 'Error parsing JSON: Invalid format';
//                                     }
//                                 } else {
//                                     placementProductJson.innerText = 'From Placement Product JSON ID: No data available';
//                                 }

//                                 // Check if the collection data exists
//                                 if (page.placement_collection_json) {
//                                     const collectionData = parseJson(page.placement_collection_json);
//                                     if (collectionData) {
//                                         // Extract collection IDs (if available)
//                                         const collectionIds = collectionData.map(collection => collection.id.split('/').pop());

//                                         // Display the IDs or a fallback message if no IDs exist
//                                         placementCollectionJson.innerText = `From Placement Collection JSON ID(s): ${collectionIds.join(', ') || 'No ID'}`;
//                                     } else {
//                                         placementCollectionJson.innerText = 'Error parsing JSON: Invalid format';
//                                     }
//                                 } else {
//                                     placementCollectionJson.innerText = 'From Placement Collection JSON ID: No data available';
//                                 }



//                                 // Create the CTA button
//                                 const ctaButton = document.createElement('a');
//                                 ctaButton.href = '#';
//                                 ctaButton.id = 'cta-button';
//                                 ctaButton.target = '_blank';
//                                 ctaButton.style.textDecoration = 'none';
//                                 ctaButton.style.flexShrink = '0';
//                                 ctaButton.style.margin = '0';
//                                 ctaButton.style.border = 'none';
//                                 ctaButton.style.fontWeight = '600';
//                                 ctaButton.style.padding = '10px 16px';
//                                 ctaButton.style.display = 'flex';
//                                 ctaButton.style.alignItems = 'center';
//                                 ctaButton.style.justifyContent = 'center';
//                                 ctaButton.style.fontSize = '14px';
//                                 ctaButton.style.backgroundColor = '#202223';
//                                 ctaButton.style.color = '#fafafa';
//                                 ctaButton.style.borderRadius = '4px';
//                                 ctaButton.style.cursor = 'pointer';
//                                 ctaButton.style.transition = 'background-color 0.2s ease-in-out';
//                                 ctaButton.innerText = page.button_text || 'Shop Now';

//                                 // Append the icon container, text container, and CTA button to the main container
//                                 containerDiv.appendChild(iconContainer);
//                                 containerDiv.appendChild(textContainer);
//                                 containerDiv.appendChild(ctaButton);

//                                 // Append the container to the badge container
//                                 badgeContainer.appendChild(containerDiv);
//                             });
//                         } else {
//                             console.log("No badge pages found for badge:", badge); // Log if no badge pages
//                         }

//                         // Add badge container to the page
//                         const productForm = document.querySelector('.product-form');
//                         if (productForm) {
//                             productForm.appendChild(badgeContainer); // Append badge container to the product form
//                         }
//                     });
//                 } else {
//                     console.log("No published badges found."); // Log if no badges are found
//                     alert('No published badges found.');
//                 }
//             })
//             .catch(error => {
//                 console.error('Error fetching badge data:', error);
//                 alert('Error fetching badge data: ' + error.message);
//             });
//     }

//     // Call the function to fetch and display badges
//     fetchPublishedBadges();
//     console.log("prodIds ",prodIds);
// });




// working code for fetch the product , collection id and placement_product_type at 11-11-2024


// document.addEventListener("DOMContentLoaded", function () {
//     var prodIds = [];
//     var collIds = [];
//     var placeProdTypes = [];

//     // Function to fetch published badges
//     function fetchPublishedBadges() {
//         fetch(`${APP_URL}api/front-end/badges/published`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok: ' + response.statusText);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log("Fetched data:", data); // Log the fetched data
//                 if (data && data.length > 0) {
//                     data.forEach(badge => {
//                         const badgePages = badge.badge_pages; // Ensure correct property name
//                         console.log("Badge pages:", badgePages); // Log the badge pages

//                         // Create badge container
//                         const badgeContainer = document.createElement('div');
//                         badgeContainer.style.marginBottom = '40px';

//                         // Badge Type
//                         const badgeType = document.createElement('p');
//                         badgeType.innerText = `Badge Type: ${badge.badge_type || 'No Type'}`;
//                         badgeContainer.appendChild(badgeType);

//                         // Loop through each page and display additional fields
//                         if (badgePages && badgePages.length > 0) {
//                             badgePages.forEach(page => {
//                                 console.log("Processing page:", page); // Log each page

//                                 // Create the main container div
//                                 const containerDiv = document.createElement('div');
//                                 containerDiv.style.width = '100%';
//                                 containerDiv.style.padding = '16px';
//                                 containerDiv.style.border = '1px solid rgb(197, 200, 209)';
//                                 containerDiv.style.borderRadius = '8px';
//                                 containerDiv.style.display = 'flex';
//                                 containerDiv.style.justifyContent = 'space-between';
//                                 containerDiv.style.alignItems = 'center';
//                                 containerDiv.style.gap = '10px';
//                                 containerDiv.style.position = 'relative';
//                                 containerDiv.style.marginTop = '20px';
//                                 containerDiv.style.marginBottom = '20px';
//                                 containerDiv.style.background = 'rgb(255, 255, 255)';

//                                 // Create the icon container div
//                                 const iconContainer = document.createElement('div');
//                                 iconContainer.innerHTML = page.icon_svg;  // Inject the SVG string as HTML
//                                 containerDiv.appendChild(iconContainer);

//                                 // Create the text container div
//                                 const textContainer = document.createElement('div');
//                                 textContainer.id = 'text_container';
//                                 textContainer.style.display = 'flex';
//                                 textContainer.style.flexDirection = 'column';
//                                 textContainer.style.justifyContent = 'flex-start';
//                                 textContainer.style.alignItems = 'flex-start';
//                                 textContainer.style.flex = '1';
//                                 textContainer.style.gap = '2px';

//                                 // Create the title span
//                                 const title = document.createElement('span');
//                                 title.id = 'title';
//                                 title.style.display = 'block';
//                                 title.style.fontWeight = '600';
//                                 title.style.fontSize = '16px';
//                                 title.style.color = '#202223';
//                                 title.style.margin = '0';
//                                 title.style.lineHeight = '1';
//                                 title.style.wordWrap = 'break-word';
//                                 title.style.maxWidth = '100%';
//                                 title.innerText = page.title || 'No Title';

//                                 // Create the subheading span
//                                 const subheading = document.createElement('span');
//                                 subheading.id = 'subheading';
//                                 subheading.style.display = 'block';
//                                 subheading.style.fontSize = '14px';
//                                 subheading.style.color = '#96a4b6';
//                                 subheading.style.fontWeight = '400';
//                                 subheading.style.margin = '0';
//                                 subheading.style.textAlign = 'left';
//                                 subheading.style.lineHeight = '1';
//                                 subheading.style.wordWrap = 'break-word';
//                                 subheading.style.maxWidth = '100%';
//                                 subheading.innerText = page.subheading || 'No Subheading';

//                                 // Append the title and subheading to the text container
//                                 textContainer.appendChild(title);
//                                 textContainer.appendChild(subheading);

//                                 // Create the new badgeType for placement_product_type
//                                 const placementProductType = document.createElement('p');
//                                 placementProductType.innerText = `Placement Product Type: ${page.placement_product_type || 'No Type'}`;

//                                 // Function to unescape and parse JSON
//                                 function parseJson(jsonString) {
//                                     try {
//                                         // First, unescape the string twice and remove the outer quotes
//                                         let unescapedJson = jsonString.replace(/\\"/g, '"').replace(/\\"/g, '"');
//                                         unescapedJson = unescapedJson.slice(1, -1); // Remove the outer quotes

//                                         // Now try to parse the unescaped JSON
//                                         return JSON.parse(unescapedJson);
//                                     } catch (error) {
//                                         console.error('Error parsing JSON:', error); // Log the error for debugging
//                                         return null;
//                                     }
//                                 }

//                                 // Check if the product data exists
//                                 if (page.placement_product_json) {
//                                     const productData = parseJson(page.placement_product_json);
//                                     if (productData) {
//                                         // Extract product IDs (if available)
//                                         const productIds = productData.map(product => product.id.split('/').pop());
//                                         prodIds.push(...productIds);

//                                         // Log the IDs or a fallback message if no IDs exist
//                                         console.log(`From Placement Product JSON ID(s): ${productIds.join(', ') || 'No ID'}`);
//                                     } else {
//                                         console.log('Error parsing JSON: Invalid format');
//                                     }
//                                 } else {
//                                     console.log('From Placement Product JSON ID: No data available');
//                                 }

//                                 // Check if the collection data exists
//                                 if (page.placement_collection_json) {
//                                     const collectionData = parseJson(page.placement_collection_json);
//                                     if (collectionData) {
//                                         // Extract collection IDs (if available)
//                                         const collectionIds = collectionData.map(collection => collection.id.split('/').pop());
//                                         collIds.push(...collectionIds);

//                                         // Log the IDs or a fallback message if no IDs exist
//                                         console.log(`From Placement Collection JSON ID(s): ${collectionIds.join(', ') || 'No ID'}`);
//                                     } else {
//                                         console.log('Error parsing JSON: Invalid format');
//                                     }
//                                 } else {
//                                     console.log('From Placement Collection JSON ID: No data available');
//                                 }

//                                 // Log the placement product type
//                                 const placeProdType = page.placement_product_type || 'No Type';
//                                 placeProdTypes.push(placeProdType);
//                                 console.log(`Placement Product Type: ${placeProdType}`);

//                                 // Create the CTA button
//                                 const ctaButton = document.createElement('a');
//                                 ctaButton.href = '#';
//                                 ctaButton.id = 'cta-button';
//                                 ctaButton.target = '_blank';
//                                 ctaButton.style.textDecoration = 'none';
//                                 ctaButton.style.flexShrink = '0';
//                                 ctaButton.style.margin = '0';
//                                 ctaButton.style.border = 'none';
//                                 ctaButton.style.fontWeight = '600';
//                                 ctaButton.style.padding = '10px 16px';
//                                 ctaButton.style.display = 'flex';
//                                 ctaButton.style.alignItems = 'center';
//                                 ctaButton.style.justifyContent = 'center';
//                                 ctaButton.style.fontSize = '14px';
//                                 ctaButton.style.backgroundColor = '#202223';
//                                 ctaButton.style.color = '#fafafa';
//                                 ctaButton.style.borderRadius = '4px';
//                                 ctaButton.style.cursor = 'pointer';
//                                 ctaButton.style.transition = 'background-color 0.2s ease-in-out';
//                                 ctaButton.innerText = page.button_text || 'Shop Now';

//                                 // Append the icon container, text container, and CTA button to the main container
//                                 containerDiv.appendChild(iconContainer);
//                                 containerDiv.appendChild(textContainer);
//                                 containerDiv.appendChild(ctaButton);

//                                 // Append the container to the badge container
//                                 badgeContainer.appendChild(containerDiv);
//                             });
//                         } else {
//                             console.log("No badge pages found for badge:", badge); // Log if no badge pages
//                         }

//                         // Add badge container to the page
//                         const productForm = document.querySelector('.product-form');
//                         if (productForm) {
//                             productForm.appendChild(badgeContainer); // Append badge container to the product form
//                         }
//                     });
//                 } else {
//                     console.log("No published badges found."); // Log if no badges are found
//                     alert('No published badges found.');
//                 }
//             })
//             .catch(error => {
//                 console.error('Error fetching badge data:', error);
//                 alert('Error fetching badge data: ' + error.message);
//             });
//     }

//     // Call the function to fetch and process badges
//     fetchPublishedBadges();

//     // Log the collected product and collection IDs
//     console.log("Product IDs:", prodIds);
//     console.log("Collection IDs:", collIds);
//     console.log("Placement Product Types:", placeProdTypes);
// });





// working at 12-11-2024

// document.addEventListener("DOMContentLoaded", function () {

//     var prodIds = [];
//     var collIds = [];
//     var placeProdTypes = [];

//     // Function to fetch published badges
//     function fetchPublishedBadges() {
//         return fetch(`${APP_URL}api/front-end/badges/published`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok: ' + response.statusText);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log("Fetched data:", data); // Log the fetched data
//                 if (data && data.length > 0) {
//                     data.forEach(badge => {
//                         const badgePages = badge.badge_pages; // Ensure correct property name
//                         console.log("Badge pages:", badgePages); // Log the badge pages

//                         // Create badge container
//                         const badgeContainer = document.createElement('div');
//                         badgeContainer.style.marginBottom = '40px';

//                         // Badge Type
//                         const badgeType = document.createElement('p');
//                         badgeType.innerText = `Badge Type: ${badge.badge_type || 'No Type'}`;
//                         badgeContainer.appendChild(badgeType);

//                         // Loop through each page and display additional fields
//                         if (badgePages && badgePages.length > 0) {
//                             badgePages.forEach(page => {
//                                 console.log("Processing page:", page); // Log each page

//                                 // Create the main container div
//                                 const containerDiv = document.createElement('div');
//                                 containerDiv.style.width = '100%';
//                                 containerDiv.style.padding = '16px';
//                                 containerDiv.style.border = '1px solid rgb(197, 200, 209)';
//                                 containerDiv.style.borderRadius = '8px';
//                                 containerDiv.style.display = 'flex';
//                                 containerDiv.style.justifyContent = 'space-between';
//                                 containerDiv.style.alignItems = 'center';
//                                 containerDiv.style.gap = '10px';
//                                 containerDiv.style.position = 'relative';
//                                 containerDiv.style.marginTop = '20px';
//                                 containerDiv.style.marginBottom = '20px';
//                                 containerDiv.style.background = 'rgb(255, 255, 255)';

//                                 // Create the icon container div
//                                 const iconContainer = document.createElement('div');
//                                 iconContainer.innerHTML = page.icon_svg;  // Inject the SVG string as HTML
//                                 containerDiv.appendChild(iconContainer);

//                                 // Create the text container div
//                                 const textContainer = document.createElement('div');
//                                 textContainer.id = 'text_container';
//                                 textContainer.style.display = 'flex';
//                                 textContainer.style.flexDirection = 'column';
//                                 textContainer.style.justifyContent = 'flex-start';
//                                 textContainer.style.alignItems = 'flex-start';
//                                 textContainer.style.flex = '1';
//                                 textContainer.style.gap = '2px';

//                                 // Create the title span
//                                 const title = document.createElement('span');
//                                 title.id = 'title';
//                                 title.style.display = 'block';
//                                 title.style.fontWeight = '600';
//                                 title.style.fontSize = '16px';
//                                 title.style.color = '#202223';
//                                 title.style.margin = '0';
//                                 title.style.lineHeight = '1';
//                                 title.style.wordWrap = 'break-word';
//                                 title.style.maxWidth = '100%';
//                                 title.innerText = page.title || 'No Title';

//                                 // Create the subheading span
//                                 const subheading = document.createElement('span');
//                                 subheading.id = 'subheading';
//                                 subheading.style.display = 'block';
//                                 subheading.style.fontSize = '14px';
//                                 subheading.style.color = '#96a4b6';
//                                 subheading.style.fontWeight = '400';
//                                 subheading.style.margin = '0';
//                                 subheading.style.textAlign = 'left';
//                                 subheading.style.lineHeight = '1';
//                                 subheading.style.wordWrap = 'break-word';
//                                 subheading.style.maxWidth = '100%';
//                                 subheading.innerText = page.subheading || 'No Subheading';

//                                 // Append the title and subheading to the text container
//                                 textContainer.appendChild(title);
//                                 textContainer.appendChild(subheading);

//                                 // Function to unescape and parse JSON
//                                 function parseJson(jsonString) {
//                                     try {
//                                         // First, unescape the string twice and remove the outer quotes
//                                         let unescapedJson = jsonString.replace(/\\"/g, '"').replace(/\\"/g, '"');
//                                         unescapedJson = unescapedJson.slice(1, -1); // Remove the outer quotes

//                                         // Now try to parse the unescaped JSON
//                                         return JSON.parse(unescapedJson);
//                                     } catch (error) {
//                                         console.error('Error parsing JSON:', error); // Log the error for debugging
//                                         return null;
//                                     }
//                                 }

//                                 // Check if the product data exists
//                                 if (page.placement_product_json) {
//                                     const productData = parseJson(page.placement_product_json);
//                                     if (productData) {
//                                         // Extract product IDs (if available)
//                                         const productIds = productData.map(product => product.id.split('/').pop());
//                                         prodIds.push(...productIds);

//                                         // Log the IDs or a fallback message if no IDs exist
//                                         console.log(`From Placement Product JSON ID(s): ${productIds.join(', ') || 'No ID'}`);
//                                     } else {
//                                         console.log('Error parsing JSON: Invalid format');
//                                     }
//                                 } else {
//                                     console.log('From Placement Product JSON ID: No data available');
//                                 }

//                                 // Check if the collection data exists
//                                 if (page.placement_collection_json) {
//                                     const collectionData = parseJson(page.placement_collection_json);
//                                     if (collectionData) {
//                                         // Extract collection IDs (if available)
//                                         const collectionIds = collectionData.map(collection => collection.id.split('/').pop());
//                                         collIds.push(...collectionIds);

//                                         // Log the IDs or a fallback message if no IDs exist
//                                         console.log(`From Placement Collection JSON ID(s): ${collectionIds.join(', ') || 'No ID'}`);
//                                     } else {
//                                         console.log('Error parsing JSON: Invalid format');
//                                     }
//                                 } else {
//                                     console.log('From Placement Collection JSON ID: No data available');
//                                 }

//                                 // Log the placement product type
//                                 const placeProdType = page.placement_product_type || 'No Type';
//                                 placeProdTypes.push(placeProdType);
//                                 console.log(`Placement Product Type: ${placeProdType}`);

//                                 // Create the CTA button
//                                 const ctaButton = document.createElement('a');
//                                 ctaButton.href = '#';
//                                 ctaButton.id = 'cta-button';
//                                 ctaButton.target = '_blank';
//                                 ctaButton.style.textDecoration = 'none';
//                                 ctaButton.style.flexShrink = '0';
//                                 ctaButton.style.margin = '0';
//                                 ctaButton.style.border = 'none';
//                                 ctaButton.style.fontWeight = '600';
//                                 ctaButton.style.padding = '10px 16px';
//                                 ctaButton.style.display = 'flex';
//                                 ctaButton.style.alignItems = 'center';
//                                 ctaButton.style.justifyContent = 'center';
//                                 ctaButton.style.fontSize = '14px';
//                                 ctaButton.style.backgroundColor = '#202223';
//                                 ctaButton.style.color = '#fafafa';
//                                 ctaButton.style.borderRadius = '4px';
//                                 ctaButton.style.cursor = 'pointer';
//                                 ctaButton.style.transition = 'background-color 0.2s ease-in-out';
//                                 ctaButton.innerText = page.button_text || 'Shop Now';

//                                 // Append the icon container, text container, and CTA button to the main container
//                                 containerDiv.appendChild(iconContainer);
//                                 containerDiv.appendChild(textContainer);
//                                 containerDiv.appendChild(ctaButton);

//                                 // Append the container to the badge container
//                                 badgeContainer.appendChild(containerDiv);
//                             });
//                         } else {
//                             console.log("No badge pages found for badge:", badge); // Log if no badge pages
//                         }

//                     });
//                 } else {
//                     console.log("No published badges found."); // Log if no badges are found
//                     // alert('No published badges found.');
//                 }

//                 // Return the fetched data for further processing
//                 return data;
//             })
//             .catch(error => {
//                 console.error('Error fetching badge data:', error);
//                 // alert('Error fetching badge data: ' + error.message);
//             });
//     }

//     // Function to get the current product ID
//     function getProductId() {
//         const productElement = document.querySelector('[data-product-id]');
//         return productElement ? productElement.getAttribute('data-product-id') : null;
//     }

//     // Function to filter and display badges based on product ID and placement type
//     function filterAndDisplayBadges(data) {
//         const productId = getProductId();
//         console.log("Current product ID:", productId);

//         // Filter badges based on product ID and placement type
//         const filteredBadges = data.filter(badge => {
//             const badgePages = badge.badge_pages;
//             return badgePages.some(page => {
//                 const placeProdType = page.placement_product_type;
//                 const productIds = prodIds.includes(productId);
//                 const collectionIds = collIds.includes(productId);

//                 return (placeProdType === 'allProducts') ||
//                        (placeProdType === 'specificProducts' && productIds) ||
//                        (placeProdType === 'specificCollections' && collectionIds);
//             });
//         });

//         console.log("Filtered badges:", filteredBadges);

//         // Clear existing badges
//         // const productForm = document.querySelector('.product-form');
//         // if (productForm) {
//         //     productForm.innerHTML = ''; // Clear existing content
//         // }

//         // Display the filtered badges
//         if (filteredBadges.length > 0) {
//             filteredBadges.forEach(badge => {
//                 const badgePages = badge.badge_pages;
//                 const productForm = document.querySelector('.product-form');

//                 if (productForm) {
//                     const badgeContainer = createBadgeContainer(badge);
//                     productForm.appendChild(badgeContainer);

//                     if (badgePages && badgePages.length > 0) {
//                         badgePages.forEach(page => {
//                             const containerDiv = createIconBlock(badge, page);
//                             badgeContainer.appendChild(containerDiv);

//                             if (badge.badge_type.includes('icon-block') || badge.badge_type.includes('payment-icons')) {
//                                 renderIconsBlock(badgeContainer, page);
//                             }
//                         });
//                     }
//                 }
//             });
//         } else {
//             // alert('No published badges found for the current product.');
//         }
//     }

//     // Function to create the badge container
//     function createBadgeContainer(badge) {
//         const badgeContainer = document.createElement('div');
//         badgeContainer.style.marginBottom = '40px';

//         // Badge Type
//         const badgeType = document.createElement('p');
//         badgeType.innerText = `Badge Type: ${badge.badge_type || 'No Type'}`;
//         badgeContainer.appendChild(badgeType);

//         return badgeContainer;
//     }

//     // Function to create the main container div for icons
//     function createIconBlock(badge, page) {
//         const containerDiv = document.createElement('div');
//         containerDiv.style.width = '100%';
//         containerDiv.style.padding = '16px';
//         containerDiv.style.border = '1px solid rgb(197, 200, 209)';
//         containerDiv.style.borderRadius = '8px';
//         containerDiv.style.display = 'flex';
//         containerDiv.style.justifyContent = 'space-between';
//         containerDiv.style.alignItems = 'center';
//         containerDiv.style.gap = '10px';
//         containerDiv.style.position = 'relative';
//         containerDiv.style.marginTop = '20px';
//         containerDiv.style.marginBottom = '20px';
//         containerDiv.style.background = 'rgb(255, 255, 255)';

//         const iconContainer = document.createElement('div');
//         iconContainer.innerHTML = page.icon_svg;
//         containerDiv.appendChild(iconContainer);

//         const textContainer = createTextContainer(page);
//         containerDiv.appendChild(textContainer);

//         const ctaButton = createCtaButton(page);
//         containerDiv.appendChild(ctaButton);

//         return containerDiv;
//     }

//     // url?shop=SHOP_URL

//     // Function to create the text container
//     function createTextContainer(page) {
//         const textContainer = document.createElement('div');
//         textContainer.id = 'text_container';
//         textContainer.style.display = 'flex';
//         textContainer.style.flexDirection = 'column';
//         textContainer.style.justifyContent = 'flex-start';
//         textContainer.style.alignItems = 'flex-start';
//         textContainer.style.flex = '1';
//         textContainer.style.gap = '2px';

//         const title = document.createElement('span');
//         title.id = 'title';
//         title.style.display = 'block';
//         title.style.fontWeight = '600';
//         title.style.fontSize = '16px';
//         title.style.color = '#202223';
//         title.style.margin = '0';
//         title.style.lineHeight = '1';
//         title.style.wordWrap = 'break-word';
//         title.style.maxWidth = '100%';
//         title.innerText = page.title || 'No Title';

//         const subheading = document.createElement('span');
//         subheading.id = 'subheading';
//         subheading.style.display = 'block';
//         subheading.style.fontSize = '14px';
//         subheading.style.color = '#96a4b6';
//         subheading.style.fontWeight = '400';
//         subheading.style.margin = '0';
//         subheading.style.textAlign = 'left';
//         subheading.style.lineHeight = '1';
//         subheading.style.wordWrap = 'break-word';
//         subheading.style.maxWidth = '100%';
//         subheading.innerText = page.subheading || 'No Subheading';

//         textContainer.appendChild(title);
//         textContainer.appendChild(subheading);

//         return textContainer;
//     }

//     // Function to create the CTA button
//     function createCtaButton(page) {
//         const ctaButton = document.createElement('a');
//         ctaButton.href = '#';
//         ctaButton.id = 'cta-button';
//         ctaButton.target = '_blank';
//         ctaButton.style.textDecoration = 'none';
//         ctaButton.style.flexShrink = '0';
//         ctaButton.style.margin = '0';
//         ctaButton.style.border = 'none';
//         ctaButton.style.fontWeight = '600';
//         ctaButton.style.padding = '10px 16px';
//         ctaButton.style.display = 'flex';
//         ctaButton.style.alignItems = 'center';
//         ctaButton.style.justifyContent = 'center';
//         ctaButton.style.fontSize = '14px';
//         ctaButton.style.backgroundColor = '#202223';
//         ctaButton.style.color = '#fafafa';
//         ctaButton.style.borderRadius = '4px';
//         ctaButton.style.cursor = 'pointer';
//         ctaButton.style.transition = 'background-color 0.2s ease-in-out';
//         ctaButton.innerText = page.button_text || 'Shop Now';

//         return ctaButton;
//     }

//     // Function to render icons block for 'icon-block' or 'payment-icons' types
//     function renderIconsBlock(container, page) {
//         const containerDiv = document.createElement('div');
//         containerDiv.style.width = '100%';
//         containerDiv.style.padding = '20px';
//         containerDiv.style.backgroundColor = '#f7f7f7';
//         containerDiv.style.borderRadius = '10px';
//         containerDiv.style.display = 'flex';
//         containerDiv.style.justifyContent = 'space-around';
//         containerDiv.style.alignItems = 'center';
//         containerDiv.style.margin = '20px 0';
//         containerDiv.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

//         page.badge_pages.forEach(badge => {
//             const badgeContainer = document.createElement('div');
//             badgeContainer.style.textAlign = 'center';

//             const icon = document.createElement('img');
//             icon.src = badge.icon_svg;
//             icon.style.width = '50px';
//             icon.style.marginBottom = '10px';
//             badgeContainer.appendChild(icon);

//             const title = document.createElement('h3');
//             title.innerText = badge.title || 'No Title';
//             badgeContainer.appendChild(title);

//             const subheading = document.createElement('p');
//             subheading.innerText = badge.subheading || 'No Subheading';
//             badgeContainer.appendChild(subheading);

//             const button = document.createElement('a');
//             button.innerText = 'Shop now';
//             button.href = '#';
//             badgeContainer.appendChild(button);

//             containerDiv.appendChild(badgeContainer);
//         });

//         container.appendChild(containerDiv);
//     }

//     // Call the function to fetch and process badges
//     fetchPublishedBadges().then(data => {
//         filterAndDisplayBadges(data);
//     });

//     // Log the collected product and collection IDs
//     console.log("Product IDs database:", prodIds);
//     console.log("Collection IDs database:", collIds);
//     console.log("Placement Product Types database:", placeProdTypes);
// });





// document.addEventListener("DOMContentLoaded", function () {

//     var prodIds = [];
//     var collIds = [];
//     var placeProdTypes = [];

//     // Function to fetch published badges
//     function fetchPublishedBadges() {
//         return fetch(`${APP_URL}api/front-end/badges/published`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok: ' + response.statusText);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log("Fetched data:", data); // Log the fetched data
//                 if (data && data.length > 0) {
//                     data.forEach(badge => {
//                         const badgePages = badge.badge_pages; // Ensure correct property name
//                         console.log("Badge pages:", badgePages); // Log the badge pages

//                         // Create badge container
//                         const badgeContainer = document.createElement('div');
//                         badgeContainer.style.marginBottom = '40px';

//                         // Badge Type
//                         const badgeType = document.createElement('p');
//                         badgeType.innerText = `Badge Type: ${badge.badge_type || 'No Type'}`;
//                         badgeContainer.appendChild(badgeType);

//                         // Loop through each page and display additional fields
//                         if (badgePages && badgePages.length > 0) {
//                             badgePages.forEach(page => {
//                                 console.log("Processing page:", page); // Log each page

//                                 // Create the main container div
//                                 const containerDiv = document.createElement('div');
//                                 containerDiv.style.width = '100%';
//                                 containerDiv.style.padding = '16px';
//                                 containerDiv.style.border = '1px solid rgb(197, 200, 209)';
//                                 containerDiv.style.borderRadius = '8px';
//                                 containerDiv.style.display = 'flex';
//                                 containerDiv.style.justifyContent = 'space-between';
//                                 containerDiv.style.alignItems = 'center';
//                                 containerDiv.style.gap = '10px';
//                                 containerDiv.style.position = 'relative';
//                                 containerDiv.style.marginTop = '20px';
//                                 containerDiv.style.marginBottom = '20px';
//                                 containerDiv.style.background = 'rgb(255, 255, 255)';

//                                 // Create the icon container div
//                                 const iconContainer = document.createElement('div');
//                                 iconContainer.innerHTML = page.icon_svg;  // Inject the SVG string as HTML
//                                 containerDiv.appendChild(iconContainer);

//                                 // Create the text container div
//                                 const textContainer = document.createElement('div');
//                                 textContainer.id = 'text_container';
//                                 textContainer.style.display = 'flex';
//                                 textContainer.style.flexDirection = 'column';
//                                 textContainer.style.justifyContent = 'flex-start';
//                                 textContainer.style.alignItems = 'flex-start';
//                                 textContainer.style.flex = '1';
//                                 textContainer.style.gap = '2px';

//                                 // Create the title span
//                                 const title = document.createElement('span');
//                                 title.id = 'title';
//                                 title.style.display = 'block';
//                                 title.style.fontWeight = '600';
//                                 title.style.fontSize = '16px';
//                                 title.style.color = '#202223';
//                                 title.style.margin = '0';
//                                 title.style.lineHeight = '1';
//                                 title.style.wordWrap = 'break-word';
//                                 title.style.maxWidth = '100%';
//                                 title.innerText = page.title || 'No Title';

//                                 // Create the subheading span
//                                 const subheading = document.createElement('span');
//                                 subheading.id = 'subheading';
//                                 subheading.style.display = 'block';
//                                 subheading.style.fontSize = '14px';
//                                 subheading.style.color = '#96a4b6';
//                                 subheading.style.fontWeight = '400';
//                                 subheading.style.margin = '0';
//                                 subheading.style.textAlign = 'left';
//                                 subheading.style.lineHeight = '1';
//                                 subheading.style.wordWrap = 'break-word';
//                                 subheading.style.maxWidth = '100%';
//                                 subheading.innerText = page.subheading || 'No Subheading';

//                                 // Append the title and subheading to the text container
//                                 textContainer.appendChild(title);
//                                 textContainer.appendChild(subheading);

//                                 // Function to unescape and parse JSON
//                                 function parseJson(jsonString) {
//                                     try {
//                                         // First, unescape the string twice and remove the outer quotes
//                                         let unescapedJson = jsonString.replace(/\\"/g, '"').replace(/\\"/g, '"');
//                                         unescapedJson = unescapedJson.slice(1, -1); // Remove the outer quotes

//                                         // Now try to parse the unescaped JSON
//                                         return JSON.parse(unescapedJson);
//                                     } catch (error) {
//                                         console.error('Error parsing JSON:', error); // Log the error for debugging
//                                         return null;
//                                     }
//                                 }

//                                 // Check if the product data exists
//                                 if (page.placement_product_json) {
//                                     const productData = parseJson(page.placement_product_json);
//                                     if (productData) {
//                                         // Extract product IDs (if available)
//                                         const productIds = productData.map(product => product.id.split('/').pop());
//                                         prodIds.push(...productIds);

//                                         // Log the IDs or a fallback message if no IDs exist
//                                         console.log(`From Placement Product JSON ID(s): ${productIds.join(', ') || 'No ID'}`);
//                                     } else {
//                                         console.log('Error parsing JSON: Invalid format');
//                                     }
//                                 } else {
//                                     console.log('From Placement Product JSON ID: No data available');
//                                 }

//                                 // Check if the collection data exists
//                                 if (page.placement_collection_json) {
//                                     const collectionData = parseJson(page.placement_collection_json);
//                                     if (collectionData) {
//                                         // Extract collection IDs (if available)
//                                         const collectionIds = collectionData.map(collection => collection.id.split('/').pop());
//                                         collIds.push(...collectionIds);

//                                         // Log the IDs or a fallback message if no IDs exist
//                                         console.log(`From Placement Collection JSON ID(s): ${collectionIds.join(', ') || 'No ID'}`);
//                                     } else {
//                                         console.log('Error parsing JSON: Invalid format');
//                                     }
//                                 } else {
//                                     console.log('From Placement Collection JSON ID: No data available');
//                                 }

//                                 // Log the placement product type
//                                 const placeProdType = page.placement_product_type || 'No Type';
//                                 placeProdTypes.push(placeProdType);
//                                 console.log(`Placement Product Type: ${placeProdType}`);

//                                 // Create the CTA button
//                                 const ctaButton = document.createElement('a');
//                                 ctaButton.href = '#';
//                                 ctaButton.id = 'cta-button';
//                                 ctaButton.target = '_blank';
//                                 ctaButton.style.textDecoration = 'none';
//                                 ctaButton.style.flexShrink = '0';
//                                 ctaButton.style.margin = '0';
//                                 ctaButton.style.border = 'none';
//                                 ctaButton.style.fontWeight = '600';
//                                 ctaButton.style.padding = '10px 16px';
//                                 ctaButton.style.display = 'flex';
//                                 ctaButton.style.alignItems = 'center';
//                                 ctaButton.style.justifyContent = 'center';
//                                 ctaButton.style.fontSize = '14px';
//                                 ctaButton.style.backgroundColor = '#202223';
//                                 ctaButton.style.color = '#fafafa';
//                                 ctaButton.style.borderRadius = '4px';
//                                 ctaButton.style.cursor = 'pointer';
//                                 ctaButton.style.transition = 'background-color 0.2s ease-in-out';
//                                 ctaButton.innerText = page.button_text || 'Shop Now';

//                                 // Append the icon container, text container, and CTA button to the main container
//                                 containerDiv.appendChild(iconContainer);
//                                 containerDiv.appendChild(textContainer);
//                                 containerDiv.appendChild(ctaButton);

//                                 // Append the container to the badge container
//                                 badgeContainer.appendChild(containerDiv);
//                             });
//                         } else {
//                             console.log("No badge pages found for badge:", badge); // Log if no badge pages
//                         }

               
//                     });
//                 } else {
//                     console.log("No published badges found."); // Log if no badges are found
//                     // alert('No published badges found.');
//                 }

//                 // Return the fetched data for further processing
//                 return data;
//             })
//             .catch(error => {
//                 console.error('Error fetching badge data:', error);
//                 // alert('Error fetching badge data: ' + error.message);
//             });
//     }

//     // Function to get the current product ID
//     function getProductId() {
//         const productElement = document.querySelector('[data-product-id]');
//         return productElement ? productElement.getAttribute('data-product-id') : null;
//     }

//     // Function to filter and display badges based on product ID and placement type
//     function filterAndDisplayBadges(data) {
//         const productId = getProductId();
//         console.log("Current product ID:", productId);

//         // Filter badges based on product ID and placement type
//         const filteredBadges = data.filter(badge => {
//             const badgePages = badge.badge_pages;
//             return badgePages.some(page => {
//                 const placeProdType = page.placement_product_type;
//                 const productIds = prodIds.includes(productId);
//                 const collectionIds = collIds.includes(productId);

//                 return (placeProdType === 'allProducts') ||
//                        (placeProdType === 'specificProducts' && productIds) ||
//                        (placeProdType === 'specificCollections' && collectionIds);
//             });
//         });

//         console.log("Filtered badges:", filteredBadges);

//         // Clear existing badges
//         const productForm = document.querySelector('.product-form');
//         if (productForm) {
//             // Remove only the badge containers, not the entire content
//             const badgeContainers = productForm.querySelectorAll('.badge-container');
//             badgeContainers.forEach(container => container.remove());
//         }

//         // Display the filtered badges
//         if (filteredBadges.length > 0) {
//             filteredBadges.forEach(badge => {
//                 const badgePages = badge.badge_pages;
//                 const productForm = document.querySelector('.product-form');

//                 if (productForm) {
//                     const badgeContainer = createBadgeContainer(badge);
//                     badgeContainer.classList.add('badge-container'); // Add a class for easy removal later
//                     productForm.appendChild(badgeContainer);

//                     if (badgePages && badgePages.length > 0) {
//                         badgePages.forEach(page => {
//                             const containerDiv = createIconBlock(badge, page);
//                             badgeContainer.appendChild(containerDiv);

//                             if (badge.badge_type.includes('icon-block') || badge.badge_type.includes('payment-icons')) {
//                                 renderIconsBlock(badgeContainer, page);
//                             }
//                         });
//                     }
//                 }
//             });
//         } else {
//             // alert('No published badges found for the current product.');
//         }
//     }

//     // Function to create the badge container
//     function createBadgeContainer(badge) {
//         const badgeContainer = document.createElement('div');
//         badgeContainer.style.marginBottom = '40px';

//         // Badge Type
//         const badgeType = document.createElement('p');
//         badgeType.innerText = `Badge Type: ${badge.badge_type || 'No Type'}`;
//         badgeContainer.appendChild(badgeType);

//         return badgeContainer;
//     }

//     // Function to create the main container div for icons
//     function createIconBlock(badge, page) {
//         const containerDiv = document.createElement('div');
//         containerDiv.style.width = '100%';
//         containerDiv.style.padding = '16px';
//         containerDiv.style.border = '1px solid rgb(197, 200, 209)';
//         containerDiv.style.borderRadius = '8px';
//         containerDiv.style.display = 'flex';
//         containerDiv.style.justifyContent = 'space-between';
//         containerDiv.style.alignItems = 'center';
//         containerDiv.style.gap = '10px';
//         containerDiv.style.position = 'relative';
//         containerDiv.style.marginTop = '20px';
//         containerDiv.style.marginBottom = '20px';
//         containerDiv.style.background = 'rgb(255, 255, 255)';

//         const iconContainer = document.createElement('div');
//         iconContainer.innerHTML = page.icon_svg;
//         containerDiv.appendChild(iconContainer);

//         const textContainer = createTextContainer(page);
//         containerDiv.appendChild(textContainer);

//         const ctaButton = createCtaButton(page);
//         containerDiv.appendChild(ctaButton);

//         return containerDiv;
//     }

//     // Function to create the text container
//     function createTextContainer(page) {
//         const textContainer = document.createElement('div');
//         textContainer.id = 'text_container';
//         textContainer.style.display = 'flex';
//         textContainer.style.flexDirection = 'column';
//         textContainer.style.justifyContent = 'flex-start';
//         textContainer.style.alignItems = 'flex-start';
//         textContainer.style.flex = '1';
//         textContainer.style.gap = '2px';

//         const title = document.createElement('span');
//         title.id = 'title';
//         title.style.display = 'block';
//         title.style.fontWeight = '600';
//         title.style.fontSize = '16px';
//         title.style.color = '#202223';
//         title.style.margin = '0';
//         title.style.lineHeight = '1';
//         title.style.wordWrap = 'break-word';
//         title.style.maxWidth = '100%';
//         title.innerText = page.title || 'No Title';

//         const subheading = document.createElement('span');
//         subheading.id = 'subheading';
//         subheading.style.display = 'block';
//         subheading.style.fontSize = '14px';
//         subheading.style.color = '#96a4b6';
//         subheading.style.fontWeight = '400';
//         subheading.style.margin = '0';
//         subheading.style.textAlign = 'left';
//         subheading.style.lineHeight = '1';
//         subheading.style.wordWrap = 'break-word';
//         subheading.style.maxWidth = '100%';
//         subheading.innerText = page.subheading || 'No Subheading';

//         textContainer.appendChild(title);
//         textContainer.appendChild(subheading);

//         return textContainer;
//     }

//     // Function to create the CTA button
//     function createCtaButton(page) {
//         const ctaButton = document.createElement('a');
//         ctaButton.href = '#';
//         ctaButton.id = 'cta-button';
//         ctaButton.target = '_blank';
//         ctaButton.style.textDecoration = 'none';
//         ctaButton.style.flexShrink = '0';
//         ctaButton.style.margin = '0';
//         ctaButton.style.border = 'none';
//         ctaButton.style.fontWeight = '600';
//         ctaButton.style.padding = '10px 16px';
//         ctaButton.style.display = 'flex';
//         ctaButton.style.alignItems = 'center';
//         ctaButton.style.justifyContent = 'center';
//         ctaButton.style.fontSize = '14px';
//         ctaButton.style.backgroundColor = '#202223';
//         ctaButton.style.color = '#fafafa';
//         ctaButton.style.borderRadius = '4px';
//         ctaButton.style.cursor = 'pointer';
//         ctaButton.style.transition = 'background-color 0.2s ease-in-out';
//         ctaButton.innerText = page.button_text || 'Shop Now';

//         return ctaButton;
//     }

//     // Function to render icons block for 'icon-block' or 'payment-icons' types
//     function renderIconsBlock(container, page) {
//         const containerDiv = document.createElement('div');
//         containerDiv.style.width = '100%';
//         containerDiv.style.padding = '20px';
//         containerDiv.style.backgroundColor = '#f7f7f7';
//         containerDiv.style.borderRadius = '10px';
//         containerDiv.style.display = 'flex';
//         containerDiv.style.justifyContent = 'space-around';
//         containerDiv.style.alignItems = 'center';
//         containerDiv.style.margin = '20px 0';
//         containerDiv.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

//         page.badge_pages.forEach(badge => {
//             const badgeContainer = document.createElement('div');
//             badgeContainer.style.textAlign = 'center';

//             const icon = document.createElement('img');
//             icon.src = badge.icon_svg;
//             icon.style.width = '50px';
//             icon.style.marginBottom = '10px';
//             badgeContainer.appendChild(icon);

//             const title = document.createElement('h3');
//             title.innerText = badge.title || 'No Title';
//             badgeContainer.appendChild(title);

//             const subheading = document.createElement('p');
//             subheading.innerText = badge.subheading || 'No Subheading';
//             badgeContainer.appendChild(subheading);

//             const button = document.createElement('a');
//             button.innerText = 'Shop now';
//             button.href = '#';
//             badgeContainer.appendChild(button);

//             containerDiv.appendChild(badgeContainer);
//         });

//         container.appendChild(containerDiv);
//     }

//     // Call the function to fetch and process badges
//     fetchPublishedBadges().then(data => {
//         filterAndDisplayBadges(data);
//     });

//     // Log the collected product and collection IDs
//     console.log("Product IDs database:", prodIds);
//     console.log("Collection IDs database:", collIds);
//     console.log("Placement Product Types database:", placeProdTypes);
// });

// document.addEventListener("DOMContentLoaded", function () {

//     var prodIds = [];
//     var collIds = [];
//     var placeProdTypes = [];

//     // Function to fetch published badges
//     function fetchPublishedBadges() {
//         return fetch(`${APP_URL}api/front-end/badges/published`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok: ' + response.statusText);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log("Fetched data:", data); // Log the fetched data
//                 if (data && data.length > 0) {
//                     data.forEach(badge => {
//                         const badgePages = badge.badge_pages; // Ensure correct property name
//                         console.log("Badge pages:", badgePages); // Log the badge pages

//                         // Create badge container
//                         const badgeContainer = document.createElement('div');
//                         badgeContainer.style.marginBottom = '40px';

//                         // Badge Type
//                         const badgeType = document.createElement('p');
//                         badgeType.innerText = `Badge Type: ${badge.badge_type || 'No Type'}`;
//                         badgeContainer.appendChild(badgeType);

//                         // Loop through each page and display additional fields
//                         if (badgePages && badgePages.length > 0) {
//                             badgePages.forEach(page => {
//                                 console.log("Processing page:", page); // Log each page

//                                 // Create the main container div
//                                 const containerDiv = document.createElement('div');
//                                 containerDiv.style.width = '100%';
//                                 containerDiv.style.padding = '16px';
//                                 containerDiv.style.border = '1px solid rgb(197, 200, 209)';
//                                 containerDiv.style.borderRadius = '8px';
//                                 containerDiv.style.display = 'flex';
//                                 containerDiv.style.justifyContent = 'space-between';
//                                 containerDiv.style.alignItems = 'center';
//                                 containerDiv.style.gap = '10px';
//                                 containerDiv.style.position = 'relative';
//                                 containerDiv.style.marginTop = '20px';
//                                 containerDiv.style.marginBottom = '20px';
//                                 containerDiv.style.background = 'rgb(255, 255, 255)';

//                                 // Create the icon container div
//                                 const iconContainer = document.createElement('div');
//                                 iconContainer.innerHTML = page.icon_svg;  // Inject the SVG string as HTML
//                                 containerDiv.appendChild(iconContainer);

//                                 // Create the text container div
//                                 const textContainer = document.createElement('div');
//                                 textContainer.id = 'text_container';
//                                 textContainer.style.display = 'flex';
//                                 textContainer.style.flexDirection = 'column';
//                                 textContainer.style.justifyContent = 'flex-start';
//                                 textContainer.style.alignItems = 'flex-start';
//                                 textContainer.style.flex = '1';
//                                 textContainer.style.gap = '2px';

//                                 // Create the title span
//                                 const title = document.createElement('span');
//                                 title.id = 'title';
//                                 title.style.display = 'block';
//                                 title.style.fontWeight = '600';
//                                 title.style.fontSize = '16px';
//                                 title.style.color = '#202223';
//                                 title.style.margin = '0';
//                                 title.style.lineHeight = '1';
//                                 title.style.wordWrap = 'break-word';
//                                 title.style.maxWidth = '100%';
//                                 title.innerText = page.title || 'No Title';

//                                 // Create the subheading span
//                                 const subheading = document.createElement('span');
//                                 subheading.id = 'subheading';
//                                 subheading.style.display = 'block';
//                                 subheading.style.fontSize = '14px';
//                                 subheading.style.color = '#96a4b6';
//                                 subheading.style.fontWeight = '400';
//                                 subheading.style.margin = '0';
//                                 subheading.style.textAlign = 'left';
//                                 subheading.style.lineHeight = '1';
//                                 subheading.style.wordWrap = 'break-word';
//                                 subheading.style.maxWidth = '100%';
//                                 subheading.innerText = page.subheading || 'No Subheading';

//                                 // Append the title and subheading to the text container
//                                 textContainer.appendChild(title);
//                                 textContainer.appendChild(subheading);

//                                 // Function to unescape and parse JSON
//                                 function parseJson(jsonString) {
//                                     try {
//                                         // First, unescape the string twice and remove the outer quotes
//                                         let unescapedJson = jsonString.replace(/\\"/g, '"').replace(/\\"/g, '"');
//                                         unescapedJson = unescapedJson.slice(1, -1); // Remove the outer quotes

//                                         // Now try to parse the unescaped JSON
//                                         return JSON.parse(unescapedJson);
//                                     } catch (error) {
//                                         console.error('Error parsing JSON:', error); // Log the error for debugging
//                                         return null;
//                                     }
//                                 }

//                                 // Check if the product data exists
//                                 if (page.placement_product_json) {
//                                     const productData = parseJson(page.placement_product_json);
//                                     if (productData) {
//                                         // Extract product IDs (if available)
//                                         const productIds = productData.map(product => product.id.split('/').pop());
//                                         prodIds.push(...productIds);

//                                         // Log the IDs or a fallback message if no IDs exist
//                                         console.log(`From Placement Product JSON ID(s): ${productIds.join(', ') || 'No ID'}`);
//                                     } else {
//                                         console.log('Error parsing JSON: Invalid format');
//                                     }
//                                 } else {
//                                     console.log('From Placement Product JSON ID: No data available');
//                                 }

//                                 // Check if the collection data exists
//                                 if (page.placement_collection_json) {
//                                     const collectionData = parseJson(page.placement_collection_json);
//                                     if (collectionData) {
//                                         // Extract collection IDs (if available)
//                                         const collectionIds = collectionData.map(collection => collection.id.split('/').pop());
//                                         collIds.push(...collectionIds);

//                                         // Log the IDs or a fallback message if no IDs exist
//                                         console.log(`From Placement Collection JSON ID(s): ${collectionIds.join(', ') || 'No ID'}`);
//                                     } else {
//                                         console.log('Error parsing JSON: Invalid format');
//                                     }
//                                 } else {
//                                     console.log('From Placement Collection JSON ID: No data available');
//                                 }

//                                 // Log the placement product type
//                                 const placeProdType = page.placement_product_type || 'No Type';
//                                 placeProdTypes.push(placeProdType);
//                                 console.log(`Placement Product Type: ${placeProdType}`);

//                                 // Create the CTA button
//                                 const ctaButton = document.createElement('a');
//                                 ctaButton.href = '#';
//                                 ctaButton.id = 'cta-button';
//                                 ctaButton.target = '_blank';
//                                 ctaButton.style.textDecoration = 'none';
//                                 ctaButton.style.flexShrink = '0';
//                                 ctaButton.style.margin = '0';
//                                 ctaButton.style.border = 'none';
//                                 ctaButton.style.fontWeight = '600';
//                                 ctaButton.style.padding = '10px 16px';
//                                 ctaButton.style.display = 'flex';
//                                 ctaButton.style.alignItems = 'center';
//                                 ctaButton.style.justifyContent = 'center';
//                                 ctaButton.style.fontSize = '14px';
//                                 ctaButton.style.backgroundColor = '#202223';
//                                 ctaButton.style.color = '#fafafa';
//                                 ctaButton.style.borderRadius = '4px';
//                                 ctaButton.style.cursor = 'pointer';
//                                 ctaButton.style.transition = 'background-color 0.2s ease-in-out';
//                                 ctaButton.innerText = page.button_text || 'Shop Now';

//                                 // Append the icon container, text container, and CTA button to the main container
//                                 containerDiv.appendChild(iconContainer);
//                                 containerDiv.appendChild(textContainer);
//                                 containerDiv.appendChild(ctaButton);

//                                 // Append the container to the badge container
//                                 badgeContainer.appendChild(containerDiv);
//                             });
//                         } else {
//                             console.log("No badge pages found for badge:", badge); // Log if no badge pages
//                         }

//                     });
//                 } else {
//                     console.log("No published badges found."); // Log if no badges are found
//                     // alert('No published badges found.');
//                 }

//                 // Return the fetched data for further processing
//                 return data;
//             })
//             .catch(error => {
//                 console.error('Error fetching badge data:', error);
//                 // alert('Error fetching badge data: ' + error.message);
//             });
//     }

//     // Function to get the current product ID
//     function getProductId() {
//         const productElement = document.querySelector('[data-product-id]');
//         return productElement ? productElement.getAttribute('data-product-id') : null;
//     }

//     // Function to fetch collections for the given product ID
//     async function fetchCollectionsForProduct(productId) {
//         // Ensure APP_URL and SHOP_URL are properly defined globally
//         const endpoint = `${APP_URL}api/getProductCollectionId/${productId}?shop=${SHOP_URL}`;

//         try {
//             const response = await fetch(endpoint);
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const collectionIds = await response.json();
//             console.log("Collection IDs:", collectionIds);
//             return collectionIds;
//         } catch (error) {
//             console.error('Failed to fetch collections:', error);
//             return [];
//         }
//     }

//     // Function to filter and display badges based on product ID and placement type
//     async function filterAndDisplayBadges(data) {
//         const productId = getProductId();
//         console.log("Current product ID:", productId);

//         // Fetch collections for the product
//         const collectionIds = await fetchCollectionsForProduct(productId);

//         // Fetch tags for the product
//         const tags = document.querySelector('[data-product-tags]')?.getAttribute('data-product-tags') || '';
//         const productTags = tags.split(',').map(tag => tag.trim());
//         console.log("Product Tags:", productTags);

//         // Filter badges based on product ID, collection IDs, and tags
//         const filteredBadges = data.filter(badge => {
//             const badgePages = badge.badge_pages;
//             return badgePages.some(page => {
//                 const placeProdType = page.placement_product_type;
//                 const productIds = prodIds.includes(productId);
//                 const collectionIdsMatch = collectionIds.some(collectionId => collIds.includes(collectionId));
//                 const tagsMatch = productTags.some(tag => page.tags.includes(tag));

//                 return (placeProdType === 'allProducts') ||
//                        (placeProdType === 'specificProducts' && productIds) ||
//                        (placeProdType === 'specificCollections' && collectionIdsMatch) ||
//                        (placeProdType === 'specificTags' && tagsMatch);
//             });
//         });

//         console.log("Filtered badges:", filteredBadges);

//         // Clear existing badges
//         const productForm = document.querySelector('.product-form');
//         if (productForm) {
//             // Remove only the badge containers, not the entire content
//             const badgeContainers = productForm.querySelectorAll('.badge-container');
//             badgeContainers.forEach(container => container.remove());
//         }

//         // Display the filtered badges
//         if (filteredBadges.length > 0) {
//             filteredBadges.forEach(badge => {
//                 const badgePages = badge.badge_pages;
//                 const productForm = document.querySelector('.product-form');

//                 if (productForm) {
//                     const badgeContainer = createBadgeContainer(badge);
//                     badgeContainer.classList.add('badge-container'); // Add a class for easy removal later
//                     productForm.appendChild(badgeContainer);

//                     if (badgePages && badgePages.length > 0) {
//                         badgePages.forEach(page => {
//                             const containerDiv = createIconBlock(badge, page);
//                             badgeContainer.appendChild(containerDiv);

//                             if (badge.badge_type.includes('icon-block') || badge.badge_type.includes('payment-icons')) {
//                                 renderIconsBlock(badgeContainer, page);
//                             }
//                         });
//                     }
//                 }
//             });
//         } else {
//             // alert('No published badges found for the current product.');
//         }
//     }

//     // Function to create the badge container
//     function createBadgeContainer(badge) {
//         const badgeContainer = document.createElement('div');
//         badgeContainer.style.marginBottom = '40px';

//         // Badge Type
//         const badgeType = document.createElement('p');
//         badgeType.innerText = `Badge Type: ${badge.badge_type || 'No Type'}`;
//         badgeContainer.appendChild(badgeType);

//         return badgeContainer;
//     }

//     // Function to create the main container div for icons
//     function createIconBlock(badge, page) {
//         const containerDiv = document.createElement('div');
//         containerDiv.style.width = '100%';
//         containerDiv.style.padding = '16px';
//         containerDiv.style.border = '1px solid rgb(197, 200, 209)';
//         containerDiv.style.borderRadius = '8px';
//         containerDiv.style.display = 'flex';
//         containerDiv.style.justifyContent = 'space-between';
//         containerDiv.style.alignItems = 'center';
//         containerDiv.style.gap = '10px';
//         containerDiv.style.position = 'relative';
//         containerDiv.style.marginTop = '20px';
//         containerDiv.style.marginBottom = '20px';
//         containerDiv.style.background = 'rgb(255, 255, 255)';

//         const iconContainer = document.createElement('div');
//         iconContainer.innerHTML = page.icon_svg;
//         containerDiv.appendChild(iconContainer);

//         const textContainer = createTextContainer(page);
//         containerDiv.appendChild(textContainer);

//         const ctaButton = createCtaButton(page);
//         containerDiv.appendChild(ctaButton);

//         return containerDiv;
//     }

//     // Function to create the text container
//     function createTextContainer(page) {
//         const textContainer = document.createElement('div');
//         textContainer.id = 'text_container';
//         textContainer.style.display = 'flex';
//         textContainer.style.flexDirection = 'column';
//         textContainer.style.justifyContent = 'flex-start';
//         textContainer.style.alignItems = 'flex-start';
//         textContainer.style.flex = '1';
//         textContainer.style.gap = '2px';

//         const title = document.createElement('span');
//         title.id = 'title';
//         title.style.display = 'block';
//         title.style.fontWeight = '600';
//         title.style.fontSize = '16px';
//         title.style.color = '#202223';
//         title.style.margin = '0';
//         title.style.lineHeight = '1';
//         title.style.wordWrap = 'break-word';
//         title.style.maxWidth = '100%';
//         title.innerText = page.title || 'No Title';

//         const subheading = document.createElement('span');
//         subheading.id = 'subheading';
//         subheading.style.display = 'block';
//         subheading.style.fontSize = '14px';
//         subheading.style.color = '#96a4b6';
//         subheading.style.fontWeight = '400';
//         subheading.style.margin = '0';
//         subheading.style.textAlign = 'left';
//         subheading.style.lineHeight = '1';
//         subheading.style.wordWrap = 'break-word';
//         subheading.style.maxWidth = '100%';
//         subheading.innerText = page.subheading || 'No Subheading';

//         textContainer.appendChild(title);
//         textContainer.appendChild(subheading);

//         return textContainer;
//     }

//     // Function to create the CTA button
//     function createCtaButton(page) {
//         const ctaButton = document.createElement('a');
//         ctaButton.href = '#';
//         ctaButton.id = 'cta-button';
//         ctaButton.target = '_blank';
//         ctaButton.style.textDecoration = 'none';
//         ctaButton.style.flexShrink = '0';
//         ctaButton.style.margin = '0';
//         ctaButton.style.border = 'none';
//         ctaButton.style.fontWeight = '600';
//         ctaButton.style.padding = '10px 16px';
//         ctaButton.style.display = 'flex';
//         ctaButton.style.alignItems = 'center';
//         ctaButton.style.justifyContent = 'center';
//         ctaButton.style.fontSize = '14px';
//         ctaButton.style.backgroundColor = '#202223';
//         ctaButton.style.color = '#fafafa';
//         ctaButton.style.borderRadius = '4px';
//         ctaButton.style.cursor = 'pointer';
//         ctaButton.style.transition = 'background-color 0.2s ease-in-out';
//         ctaButton.innerText = page.button_text || 'Shop Now';

//         return ctaButton;
//     }

//     // Function to render icons block for 'icon-block' or 'payment-icons' types
//     function renderIconsBlock(container, page) {
//         const containerDiv = document.createElement('div');
//         containerDiv.style.width = '100%';
//         containerDiv.style.padding = '20px';
//         containerDiv.style.backgroundColor = '#f7f7f7';
//         containerDiv.style.borderRadius = '10px';
//         containerDiv.style.display = 'flex';
//         containerDiv.style.justifyContent = 'space-around';
//         containerDiv.style.alignItems = 'center';
//         containerDiv.style.margin = '20px 0';
//         containerDiv.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

//         page.badge_pages.forEach(badge => {
//             const badgeContainer = document.createElement('div');
//             badgeContainer.style.textAlign = 'center';

//             const icon = document.createElement('img');
//             icon.src = badge.icon_svg;
//             icon.style.width = '50px';
//             icon.style.marginBottom = '10px';
//             badgeContainer.appendChild(icon);

//             const title = document.createElement('h3');
//             title.innerText = badge.title || 'No Title';
//             badgeContainer.appendChild(title);

//             const subheading = document.createElement('p');
//             subheading.innerText = badge.subheading || 'No Subheading';
//             badgeContainer.appendChild(subheading);

//             const button = document.createElement('a');
//             button.innerText = 'Shop now';
//             button.href = '#';
//             badgeContainer.appendChild(button);

//             containerDiv.appendChild(badgeContainer);
//         });

//         container.appendChild(containerDiv);
//     }

//     // Call the function to fetch and process badges
//     fetchPublishedBadges().then(data => {
//         filterAndDisplayBadges(data);
//     });

//     // Log the collected product and collection IDs
//     console.log("Product IDs database:", prodIds);
//     console.log("Collection IDs database:", collIds);
//     console.log("Placement Product Types database:", placeProdTypes);
// });

// document.addEventListener("DOMContentLoaded", function () {

//     var prodIds = [];
//     var collIds = [];
//     var placeProdTypes = [];

//     // Function to fetch published badges
//     function fetchPublishedBadges() {
//         return fetch(`${APP_URL}api/front-end/badges/published`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok: ' + response.statusText);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log("Fetched data:", data); // Log the fetched data
//                 if (data && data.length > 0) {
//                     data.forEach(badge => {
//                         const badgePages = badge.badge_pages; // Ensure correct property name
//                         console.log("Badge pages:", badgePages); // Log the badge pages

//                         // Create badge container
//                         const badgeContainer = document.createElement('div');
//                         badgeContainer.style.marginBottom = '40px';

//                         // Badge Type
//                         const badgeType = document.createElement('p');
//                         badgeType.innerText = `Badge Type: ${badge.badge_type || 'No Type'}`;
//                         badgeContainer.appendChild(badgeType);

//                         // Loop through each page and display additional fields
//                         if (badgePages && badgePages.length > 0) {
//                             badgePages.forEach(page => {
//                                 console.log("Processing page:", page); // Log each page

//                                                              // Create the main container div
//                                                              const containerDiv = document.createElement('div');
//                                                              containerDiv.style.width = '100%';
//                                                              containerDiv.style.padding = '16px';
//                                                              containerDiv.style.border = '1px solid rgb(197, 200, 209)';
//                                                              containerDiv.style.borderRadius = '8px';
//                                                              containerDiv.style.display = 'flex';
//                                                              containerDiv.style.justifyContent = 'space-between';
//                                                              containerDiv.style.alignItems = 'center';
//                                                              containerDiv.style.gap = '10px';
//                                                              containerDiv.style.position = 'relative';
//                                                              containerDiv.style.marginTop = '20px';
//                                                              containerDiv.style.marginBottom = '20px';
//                                                              containerDiv.style.background = 'rgb(255, 255, 255)';
                             
//                                                              // Create the icon container div
//                                                              const iconContainer = document.createElement('div');
//                                                              iconContainer.innerHTML = page.icon_svg;  // Inject the SVG string as HTML
//                                                              containerDiv.appendChild(iconContainer);
                             
//                                                              // Create the text container div
//                                                              const textContainer = document.createElement('div');
//                                                              textContainer.id = 'text_container';
//                                                              textContainer.style.display = 'flex';
//                                                              textContainer.style.flexDirection = 'column';
//                                                              textContainer.style.justifyContent = 'flex-start';
//                                                              textContainer.style.alignItems = 'flex-start';
//                                                              textContainer.style.flex = '1';
//                                                              textContainer.style.gap = '2px';
                             
//                                                              // Create the title span
//                                                              const title = document.createElement('span');
//                                                              title.id = 'title';
//                                                              title.style.display = 'block';
//                                                              title.style.fontWeight = '600';
//                                                              title.style.fontSize = '16px';
//                                                              title.style.color = '#202223';
//                                                              title.style.margin = '0';
//                                                              title.style.lineHeight = '1';
//                                                              title.style.wordWrap = 'break-word';
//                                                              title.style.maxWidth = '100%';
//                                                              title.innerText = page.title || 'No Title';
                             
//                                                              // Create the subheading span
//                                                              const subheading = document.createElement('span');
//                                                              subheading.id = 'subheading';
//                                                              subheading.style.display = 'block';
//                                                              subheading.style.fontSize = '14px';
//                                                              subheading.style.color = '#96a4b6';
//                                                              subheading.style.fontWeight = '400';
//                                                              subheading.style.margin = '0';
//                                                              subheading.style.textAlign = 'left';
//                                                              subheading.style.lineHeight = '1';
//                                                              subheading.style.wordWrap = 'break-word';
//                                                              subheading.style.maxWidth = '100%';
//                                                              subheading.innerText = page.subheading || 'No Subheading';
                             
//                                                              // Append the title and subheading to the text container
//                                                              textContainer.appendChild(title);
//                                                              textContainer.appendChild(subheading);
                             
//                                                              // Function to unescape and parse JSON
//                                                              function parseJson(jsonString) {
//                                                                  try {
//                                                                      // First, unescape the string twice and remove the outer quotes
//                                                                      let unescapedJson = jsonString.replace(/\\"/g, '"').replace(/\\"/g, '"');
//                                                                      unescapedJson = unescapedJson.slice(1, -1); // Remove the outer quotes
                             
//                                                                      // Now try to parse the unescaped JSON
//                                                                      return JSON.parse(unescapedJson);
//                                                                  } catch (error) {
//                                                                      console.error('Error parsing JSON:', error); // Log the error for debugging
//                                                                      return null;
//                                                                  }
//                                                              }
                             
//                                                              // Check if the product data exists
//                                                              if (page.placement_product_json) {
//                                                                  const productData = parseJson(page.placement_product_json);
//                                                                  if (productData) {
//                                                                      // Extract product IDs (if available)
//                                                                      const productIds = productData.map(product => product.id.split('/').pop());
//                                                                      prodIds.push(...productIds);
                             
//                                                                      // Log the IDs or a fallback message if no IDs exist
//                                                                      console.log(`From Placement Product JSON ID(s): ${productIds.join(', ') || 'No ID'}`);
//                                                                  } else {
//                                                                      console.log('Error parsing JSON: Invalid format');
//                                                                  }
//                                                              } else {
//                                                                  console.log('From Placement Product JSON ID: No data available');
//                                                              }
                             
//                                                              // Check if the collection data exists
//                                                              if (page.placement_collection_json) {
//                                                                  const collectionData = parseJson(page.placement_collection_json);
//                                                                  if (collectionData) {
//                                                                      // Extract collection IDs (if available)
//                                                                      const collectionIds = collectionData.map(collection => collection.id.split('/').pop());
//                                                                      collIds.push(...collectionIds);
                             
//                                                                      // Log the IDs or a fallback message if no IDs exist
//                                                                      console.log(`From Placement Collection JSON ID(s): ${collectionIds.join(', ') || 'No ID'}`);
//                                                                  } else {
//                                                                      console.log('Error parsing JSON: Invalid format');
//                                                                  }
//                                                              } else {
//                                                                  console.log('From Placement Collection JSON ID: No data available');
//                                                              }
                             
//                                                              // Log the placement product type
//                                                              const placeProdType = page.placement_product_type || 'No Type';
//                                                              placeProdTypes.push(placeProdType);
//                                                              console.log(`Placement Product Type: ${placeProdType}`);
                             
//                                                              // Create the CTA button
//                                                              const ctaButton = document.createElement('a');
//                                                              ctaButton.href = '#';
//                                                              ctaButton.id = 'cta-button';
//                                                              ctaButton.target = '_blank';
//                                                              ctaButton.style.textDecoration = 'none';
//                                                              ctaButton.style.flexShrink = '0';
//                                                              ctaButton.style.margin = '0';
//                                                              ctaButton.style.border = 'none';
//                                                              ctaButton.style.fontWeight = '600';
//                                                              ctaButton.style.padding = '10px 16px';
//                                                              ctaButton.style.display = 'flex';
//                                                              ctaButton.style.alignItems = 'center';
//                                                              ctaButton.style.justifyContent = 'center';
//                                                              ctaButton.style.fontSize = '14px';
//                                                              ctaButton.style.backgroundColor = '#202223';
//                                                              ctaButton.style.color = '#fafafa';
//                                                              ctaButton.style.borderRadius = '4px';
//                                                              ctaButton.style.cursor = 'pointer';
//                                                              ctaButton.style.transition = 'background-color 0.2s ease-in-out';
//                                                              ctaButton.innerText = page.button_text || 'Shop Now';
                             
//                                                              // Append the icon container, text container, and CTA button to the main container
//                                                              containerDiv.appendChild(iconContainer);
//                                                              containerDiv.appendChild(textContainer);
//                                                              containerDiv.appendChild(ctaButton);
                             
//                                                              // Append the container to the badge container
//                                                              badgeContainer.appendChild(containerDiv);
//                                                          });
//                                                      } else {
//                                                          console.log("No badge pages found for badge:", badge); // Log if no badge pages
//                                                      }
                             
//                                                  });
//                                              } else {
//                                                  console.log("No published badges found."); // Log if no badges are found
//                                                  // alert('No published badges found.');
//                                              }
                             
//                                              // Return the fetched data for further processing
//                                              return data;
//                                          })
//                                          .catch(error => {
//                                              console.error('Error fetching badge data:', error);
//                                              // alert('Error fetching badge data: ' + error.message);
//                                          });
//                                  }
                             
//                                  // Function to get the current product ID
//                                  function getProductId() {
//                                      const productElement = document.querySelector('[data-product-id]');
//                                      return productElement ? productElement.getAttribute('data-product-id') : null;
//                                  }
                             
//                                  // Function to fetch collections for the given product ID
//                                  async function fetchCollectionsForProduct(productId) {
//                                      // Ensure APP_URL and SHOP_URL are properly defined globally
//                                      const endpoint = `${APP_URL}api/getProductCollectionId/${productId}?shop=${SHOP_URL}`;
                             
//                                      try {
//                                          const response = await fetch(endpoint);
//                                          if (!response.ok) {
//                                              throw new Error('Network response was not ok');
//                                          }
//                                          const collectionIds = await response.json();
//                                          console.log("Collection IDs:", collectionIds);
//                                          return collectionIds;
//                                      } catch (error) {
//                                          console.error('Failed to fetch collections:', error);
//                                          return [];
//                                      }
//                                  }
                             
//                                  // Function to filter and display badges based on product ID and placement type
//                                  async function filterAndDisplayBadges(data) {
//                                      const productId = getProductId();
//                                      console.log("Current product ID:", productId);
                             
//                                      // Fetch collections for the product
//                                      const collectionIds = await fetchCollectionsForProduct(productId);
                             
//                                      // Fetch tags for the product
//                                      const tags = document.querySelector('[data-product-tags]')?.getAttribute('data-product-tags') || '';
//                                      const productTags = tags.split(',').map(tag => tag.trim());
//                                      console.log("Product Tags:", productTags);
                             
//                                      // Filter badges based on product ID, collection IDs, and tags
//                                      const filteredBadges = data.filter(badge => {
//                                          const badgePages = badge.badge_pages;
//                                          return badgePages.some(page => {
//                                              const placeProdType = page.placement_product_type;
//                                              const productIds = prodIds.includes(productId);
//                                              const collectionIdsMatch = collectionIds.some(collectionId => collIds.includes(collectionId));
//                                              const tagsMatch = productTags.some(tag => page.tags && page.tags.includes(tag));
                             
//                                              return (placeProdType === 'allProducts') ||
//                                                     (placeProdType === 'specificProducts' && productIds) ||
//                                                     (placeProdType === 'specificCollections' && collectionIdsMatch) ||
//                                                     (placeProdType === 'specificTags' && tagsMatch);
//                                          });
//                                      });
                             
//                                      console.log("Filtered badges:", filteredBadges);
                             
//                                      // Clear existing badges
//                                      const productForm = document.querySelector('.product-form');
//                                      if (productForm) {
//                                          // Remove only the badge containers, not the entire content
//                                          const badgeContainers = productForm.querySelectorAll('.badge-container');
//                                          badgeContainers.forEach(container => container.remove());
//                                      }
                             
//                                      // Display the filtered badges
//                                      if (filteredBadges.length > 0) {
//                                          filteredBadges.forEach(badge => {
//                                              const badgePages = badge.badge_pages;
//                                              const productForm = document.querySelector('.product-form');
                             
//                                              if (productForm) {
//                                                  const badgeContainer = createBadgeContainer(badge);
//                                                  badgeContainer.classList.add('badge-container'); // Add a class for easy removal later
//                                                  productForm.appendChild(badgeContainer);
                             
//                                                  if (badgePages && badgePages.length > 0) {
//                                                      badgePages.forEach(page => {
//                                                          const containerDiv = createIconBlock(badge, page);
//                                                          badgeContainer.appendChild(containerDiv);
                             
//                                                          if (badge.badge_type.includes('icon-block') || badge.badge_type.includes('payment-icons')) {
//                                                              renderIconsBlock(badgeContainer, page);
//                                                          }
//                                                      });
//                                                  }
//                                              }
//                                          });
//                                      } else {
//                                          // alert('No published badges found for the current product.');
//                                      }
//                                  }
                             
//                                  // Function to create the badge container
//                                  function createBadgeContainer(badge) {
//                                      const badgeContainer = document.createElement('div');
//                                      badgeContainer.style.marginBottom = '40px';
                             
//                                      // Badge Type
//                                      const badgeType = document.createElement('p');
//                                      badgeType.innerText = `Badge Type: ${badge.badge_type || 'No Type'}`;
//                                      badgeContainer.appendChild(badgeType);
                             
//                                      return badgeContainer;
//                                  }
                             
//                                  // Function to create the main container div for icons
//                                  function createIconBlock(badge, page) {
//                                      const containerDiv = document.createElement('div');
//                                      containerDiv.style.width = '100%';
//                                      containerDiv.style.padding = '16px';
//                                      containerDiv.style.border = '1px solid rgb(197, 200, 209)';
//                                      containerDiv.style.borderRadius = '8px';
//                                      containerDiv.style.display = 'flex';
//                                      containerDiv.style.justifyContent = 'space-between';
//                                      containerDiv.style.alignItems = 'center';
//                                      containerDiv.style.gap = '10px';
//                                      containerDiv.style.position = 'relative';
//                                      containerDiv.style.marginTop = '20px';
//                                      containerDiv.style.marginBottom = '20px';
//                                      containerDiv.style.background = 'rgb(255, 255, 255)';
                             
//                                      const iconContainer = document.createElement('div');
//                                      iconContainer.innerHTML = page.icon_svg;
//                                      containerDiv.appendChild(iconContainer);
                             
//                                      const textContainer = createTextContainer(page);
//                                      containerDiv.appendChild(textContainer);
                             
//                                      const ctaButton = createCtaButton(page);
//                                      containerDiv.appendChild(ctaButton);
                             
//                                      return containerDiv;
//                                  }
                             
//                                  // Function to create the text container
//                                  function createTextContainer(page) {
//                                      const textContainer = document.createElement('div');
//                                      textContainer.id = 'text_container';
//                                      textContainer.style.display = 'flex';
//                                      textContainer.style.flexDirection = 'column';
//                                      textContainer.style.justifyContent = 'flex-start';
//                                      textContainer.style.alignItems = 'flex-start';
//                                      textContainer.style.flex = '1';
//                                      textContainer.style.gap = '2px';
                             
//                                      const title = document.createElement('span');
//                                      title.id = 'title';
//                                      title.style.display = 'block';
//                                      title.style.fontWeight = '600';
//                                      title.style.fontSize = '16px';
//                                      title.style.color = '#202223';
//                                      title.style.margin = '0';
//                                      title.style.lineHeight = '1';
//                                      title.style.wordWrap = 'break-word';
//                                      title.style.maxWidth = '100%';
//                                      title.innerText = page.title || 'No Title';
                             
//                                      const subheading = document.createElement('span');
//                                      subheading.id = 'subheading';
//                                      subheading.style.display = 'block';
//                                      subheading.style.fontSize = '14px';
//                                      subheading.style.color = '#96a4b6';
//                                      subheading.style.fontWeight = '400';
//                                      subheading.style.margin = '0';
//                                      subheading.style.textAlign = 'left';
//                                      subheading.style.lineHeight = '1';
//                                      subheading.style.wordWrap = 'break-word';
//                                      subheading.style.maxWidth = '100%';
//                                      subheading.innerText = page.subheading || 'No Subheading';
                             
//                                      textContainer.appendChild(title);
//                                      textContainer.appendChild(subheading);
                             
//                                      return textContainer;
//                                  }
                             
//                                  // Function to create the CTA button
//                                  function createCtaButton(page) {
//                                      const ctaButton = document.createElement('a');
//                                      ctaButton.href = '#';
//                                      ctaButton.id = 'cta-button';
//                                      ctaButton.target = '_blank';
//                                      ctaButton.style.textDecoration = 'none';
//                                      ctaButton.style.flexShrink = '0';
//                                      ctaButton.style.margin = '0';
//                                      ctaButton.style.border = 'none';
//                                      ctaButton.style.fontWeight = '600';
//                                      ctaButton.style.padding = '10px 16px';
//                                      ctaButton.style.display = 'flex';
//                                      ctaButton.style.alignItems = 'center';
//                                      ctaButton.style.justifyContent = 'center';
//                                      ctaButton.style.fontSize = '14px';
//                                      ctaButton.style.backgroundColor = '#202223';
//                                      ctaButton.style.color = '#fafafa';
//                                      ctaButton.style.borderRadius = '4px';
//                                      ctaButton.style.cursor = 'pointer';
//                                      ctaButton.style.transition = 'background-color 0.2s ease-in-out';
//                                      ctaButton.innerText = page.button_text || 'Shop Now';
                             
//                                      return ctaButton;
//                                  }
                             
//                                  // Function to render icons block for 'icon-block' or 'payment-icons' types
//                                  function renderIconsBlock(container, page) {
//                                      const containerDiv = document.createElement('div');
//                                      containerDiv.style.width = '100%';
//                                      containerDiv.style.padding = '20px';
//                                      containerDiv.style.backgroundColor = '#f7f7f7';
//                                      containerDiv.style.borderRadius = '10px';
//                                      containerDiv.style.display = 'flex';
//                                      containerDiv.style.justifyContent = 'space-around';
//                                      containerDiv.style.alignItems = 'center';
//                                      containerDiv.style.margin = '20px 0';
//                                      containerDiv.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                             
//                                      page.badge_pages.forEach(badge => {
//                                          const badgeContainer = document.createElement('div');
//                                          badgeContainer.style.textAlign = 'center';
                             
//                                          const icon = document.createElement('img');
//                                          icon.src = badge.icon_svg;
//                                          icon.style.width = '50px';
//                                          icon.style.marginBottom = '10px';
//                                          badgeContainer.appendChild(icon);
                             
//                                          const title = document.createElement('h3');
//                                          title.innerText = badge.title || 'No Title';
//                                          badgeContainer.appendChild(title);
                             
//                                          const subheading = document.createElement('p');
//                                          subheading.innerText = badge.subheading || 'No Subheading';
//                                          badgeContainer.appendChild(subheading);
                             
//                                          const button = document.createElement('a');
//                                          button.innerText = 'Shop now';
//                                          button.href = '#';
//                                          badgeContainer.appendChild(button);
                             
//                                          containerDiv.appendChild(badgeContainer);
//                                      });
                             
//                                      container.appendChild(containerDiv);
//                                  }
                             
//                                  // Call the function to fetch and process badges
//                                  fetchPublishedBadges().then(data => {
//                                      filterAndDisplayBadges(data);
//                                  });
                             
//                                  // Log the collected product and collection IDs
//                                  console.log("Product IDs database:", prodIds);
//                                  console.log("Collection IDs database:", collIds);
//                                  console.log("Placement Product Types database:", placeProdTypes);
//                              });
   








// this is working code for get the collection id of selected product

// document.addEventListener("DOMContentLoaded", function () {
//     // Function to get the current product ID
//     function getProductId() {
//         const productElement = document.querySelector('[data-product-id]');
//         return productElement ? productElement.getAttribute('data-product-id') : null;
//     }

//     // Function to fetch collections for the given product ID
//     async function fetchCollectionsForProduct(productId) {
//         // Ensure APP_URL and SHOP_URL are properly defined globally
//         const endpoint = `${APP_URL}api/getProductCollectionId/${productId}?shop=${SHOP_URL}`;

//         try {
//             const response = await fetch(endpoint);
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const collectionIds = await response.json();
//             console.log("Collection IDs:", collectionIds);
//             // You can now use the collectionIds as needed, for example, display them or process further
//         } catch (error) {
//             console.error('Failed to fetch collections:', error);
//         }
//     }

//     // Get the product ID from the theme
//     const productId = getProductId();

//     if (productId) {
//         // Fetch collections for the product
//         fetchCollectionsForProduct(productId);
//     } else {
//         console.error('Product ID not found');
//     }
// });




// Working code on 14-11-2024  for complete the badge.js part of this app

// document.addEventListener("DOMContentLoaded", function () {

//     var prodIds = [];
//     var collIds = [];
//     var placeProdTypes = [];

//     // Function to fetch published badges
//     function fetchPublishedBadges() {
//         return fetch(`${APP_URL}api/front-end/badges/published`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok: ' + response.statusText);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log("Fetched data:", data); // Log the fetched data
//                 if (data && data.length > 0) {
//                     data.forEach(badge => {
//                         const badgePages = badge.badge_pages; // Ensure correct property name
//                         console.log("Badge pages:", badgePages); // Log the badge pages

//                         // Create badge container
//                         const badgeContainer = document.createElement('div');
//                         badgeContainer.style.marginBottom = '40px';

//                         // Badge Type
//                         const badgeType = document.createElement('p');
//                         badgeType.innerText = `Badge Type: ${badge.badge_type || 'No Type'}`;
//                         badgeContainer.appendChild(badgeType);

//                         // Loop through each page and display additional fields
//                         if (badgePages && badgePages.length > 0) {
//                             badgePages.forEach(page => {
//                                 console.log("Processing page:", page); // Log each page

//                                 // Create the main container div
//                                 const containerDiv = document.createElement('div');
//                                 containerDiv.style.width = '100%';
//                                 containerDiv.style.padding = '16px';
//                                 containerDiv.style.border = '1px solid rgb(197, 200, 209)';
//                                 containerDiv.style.borderRadius = '8px';
//                                 containerDiv.style.display = 'flex';
//                                 containerDiv.style.justifyContent = 'space-between';
//                                 containerDiv.style.alignItems = 'center';
//                                 containerDiv.style.gap = '10px';
//                                 containerDiv.style.position = 'relative';
//                                 containerDiv.style.marginTop = '20px';
//                                 containerDiv.style.marginBottom = '20px';
//                                 containerDiv.style.background = 'rgb(255, 255, 255)';

//                                 // Create the icon container div
//                                 const iconContainer = document.createElement('div');
//                                 iconContainer.innerHTML = page.icon_svg;  // Inject the SVG string as HTML
//                                 containerDiv.appendChild(iconContainer);

//                                 // Create the text container div
//                                 const textContainer = document.createElement('div');
//                                 textContainer.id = 'text_container';
//                                 textContainer.style.display = 'flex';
//                                 textContainer.style.flexDirection = 'column';
//                                 textContainer.style.justifyContent = 'flex-start';
//                                 textContainer.style.alignItems = 'flex-start';
//                                 textContainer.style.flex = '1';
//                                 textContainer.style.gap = '2px';

//                                 // Create the title span
//                                 const title = document.createElement('span');
//                                 title.id = 'title';
//                                 title.style.display = 'block';
//                                 title.style.fontWeight = '600';
//                                 title.style.fontSize = '16px';
//                                 title.style.color = '#202223';
//                                 title.style.margin = '0';
//                                 title.style.lineHeight = '1';
//                                 title.style.wordWrap = 'break-word';
//                                 title.style.maxWidth = '100%';
//                                 title.innerText = page.title || 'No Title';

//                                 // Create the subheading span
//                                 const subheading = document.createElement('span');
//                                 subheading.id = 'subheading';
//                                 subheading.style.display = 'block';
//                                 subheading.style.fontSize = '14px';
//                                 subheading.style.color = '#96a4b6';
//                                 subheading.style.fontWeight = '400';
//                                 subheading.style.margin = '0';
//                                 subheading.style.textAlign = 'left';
//                                 subheading.style.lineHeight = '1';
//                                 subheading.style.wordWrap = 'break-word';
//                                 subheading.style.maxWidth = '100%';
//                                 subheading.innerText = page.subheading || 'No Subheading';

//                                 // Append the title and subheading to the text container
//                                 textContainer.appendChild(title);
//                                 textContainer.appendChild(subheading);

//                                 // Function to unescape and parse JSON
//                                 function parseJson(jsonString) {
//                                     try {
//                                         // First, unescape the string twice and remove the outer quotes
//                                         let unescapedJson = jsonString.replace(/\\"/g, '"').replace(/\\"/g, '"');
//                                         unescapedJson = unescapedJson.slice(1, -1); // Remove the outer quotes

//                                         // Now try to parse the unescaped JSON
//                                         return JSON.parse(unescapedJson);
//                                     } catch (error) {
//                                         console.error('Error parsing JSON:', error); // Log the error for debugging
//                                         return null;
//                                     }
//                                 }

//                                 // Check if the product data exists
//                                 if (page.placement_product_json) {
//                                     const productData = parseJson(page.placement_product_json);
//                                     if (productData) {
//                                         // Extract product IDs (if available)
//                                         const productIds = productData.map(product => product.id.split('/').pop());
//                                         prodIds.push(...productIds);

//                                         // Log the IDs or a fallback message if no IDs exist
//                                         console.log(`From Placement Product JSON ID(s): ${productIds.join(', ') || 'No ID'}`);
//                                     } else {
//                                         console.log('Error parsing JSON: Invalid format');
//                                     }
//                                 } else {
//                                     console.log('From Placement Product JSON ID: No data available');
//                                 }

//                                 // Check if the collection data exists
//                                 if (page.placement_collection_json) {
//                                     const collectionData = parseJson(page.placement_collection_json);
//                                     if (collectionData) {
//                                         // Extract collection IDs (if available)
//                                         const collectionIds = collectionData.map(collection => collection.id.split('/').pop());
//                                         collIds.push(...collectionIds);

//                                         // Log the IDs or a fallback message if no IDs exist
//                                         console.log(`From Placement Collection JSON ID(s): ${collectionIds.join(', ') || 'No ID'}`);
//                                     } else {
//                                         console.log('Error parsing JSON: Invalid format');
//                                     }
//                                 } else {
//                                     console.log('From Placement Collection JSON ID: No data available');
//                                 }

//                                 // Log the placement product type
//                                 const placeProdType = page.placement_product_type || 'No Type';
//                                 placeProdTypes.push(placeProdType);
//                                 console.log(`Placement Product Type: ${placeProdType}`);

//                                 // Create the CTA button
//                                 const ctaButton = document.createElement('a');
//                                 ctaButton.href = '#';
//                                 ctaButton.id = 'cta-button';
//                                 ctaButton.target = '_blank';
//                                 ctaButton.style.textDecoration = 'none';
//                                 ctaButton.style.flexShrink = '0';
//                                 ctaButton.style.margin = '0';
//                                 ctaButton.style.border = 'none';
//                                 ctaButton.style.fontWeight = '600';
//                                 ctaButton.style.padding = '10px 16px';
//                                 ctaButton.style.display = 'flex';
//                                 ctaButton.style.alignItems = 'center';
//                                 ctaButton.style.justifyContent = 'center';
//                                 ctaButton.style.fontSize = '14px';
//                                 ctaButton.style.backgroundColor = '#202223';
//                                 ctaButton.style.color = '#fafafa';
//                                 ctaButton.style.borderRadius = '4px';
//                                 ctaButton.style.cursor = 'pointer';
//                                 ctaButton.style.transition = 'background-color 0.2s ease-in-out';
//                                 ctaButton.innerText = page.button_text || 'Shop Now';

//                                 // Append the icon container, text container, and CTA button to the main container
//                                 containerDiv.appendChild(iconContainer);
//                                 containerDiv.appendChild(textContainer);
//                                 containerDiv.appendChild(ctaButton);

//                                 // Append the container to the badge container
//                                 badgeContainer.appendChild(containerDiv);
//                             });
//                         } else {
//                             console.log("No badge pages found for badge:", badge); // Log if no badge pages
//                         }

//                     });
//                 } else {
//                     console.log("No published badges found."); // Log if no badges are found
//                     // alert('No published badges found.');
//                 }

//                 // Return the fetched data for further processing
//                 return data;
//             })
//             .catch(error => {
//                 console.error('Error fetching badge data:', error);
//                 // alert('Error fetching badge data: ' + error.message);
//             });
//     }

//     // Function to get the current product ID
//     function getProductId() {
//         const productElement = document.querySelector('[data-product-id]');
//         return productElement ? productElement.getAttribute('data-product-id') : null;
//     }

//     // Function to fetch collections for the given product ID
//     async function fetchCollectionsForProduct(productId) {
//         // Ensure APP_URL and SHOP_URL are properly defined globally
//         const endpoint = `${APP_URL}api/getProductCollectionId/${productId}?shop=${SHOP_URL}`;

//         try {
//             const response = await fetch(endpoint);
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const collectionIds = await response.json();
//             console.log("Collection IDs:", collectionIds);
//             return collectionIds;
//         } catch (error) {
//             console.error('Failed to fetch collections:', error);
//             return [];
//         }
//     }

//     // Function to filter and display badges based on product ID and placement type
//     async function filterAndDisplayBadges(data) {
//         const productId = getProductId();
//         console.log("Current product ID:", productId);

//         // Fetch collections for the product
//         const collectionIds = await fetchCollectionsForProduct(productId);

//         // Fetch tags for the product
//         const tags = document.querySelector('[data-product-tags]')?.getAttribute('data-product-tags') || '';
//         const productTags = tags.split(',').map(tag => tag.trim());
//         console.log("Product Tags:", productTags);

//         // Filter badges based on product ID, collection IDs, and tags
//         const filteredBadges = data.filter(badge => {
//             const badgePages = badge.badge_pages;
//             return badgePages.some(page => {
//                 const placeProdType = page.placement_product_type;
//                 const productIds = prodIds.includes(productId);
//                 const collectionIdsMatch = collectionIds.some(collectionId => collIds.includes(collectionId));
//                 const tagsMatch = productTags.some(tag => {
//                     const pageTags = page.placement_tags_json ? page.placement_tags_json.split(',').map(tag => tag.trim()) : [];
//                     return pageTags.includes(tag);
//                 });

//                 return (placeProdType === 'allProducts') ||
//                        (placeProdType === 'specificProducts' && productIds) ||
//                        (placeProdType === 'specificCollections' && collectionIdsMatch) ||
//                        (placeProdType === 'specificTags' && tagsMatch);
//             });
//         });

//         console.log("Filtered badges:", filteredBadges);

//         // Clear existing badges
//         const productForm = document.querySelector('.product-form');
//         if (productForm) {
//             // Remove only the badge containers, not the entire content
//             const badgeContainers = productForm.querySelectorAll('.badge-container');
//             badgeContainers.forEach(container => container.remove());
//         }

//         // Display the filtered badges
//         if (filteredBadges.length > 0) {
//             filteredBadges.forEach(badge => {
//                 const badgePages = badge.badge_pages;
//                 const productForm = document.querySelector('.product-form');

//                 if (productForm) {
//                     const badgeContainer = createBadgeContainer(badge);
//                     badgeContainer.classList.add('badge-container'); // Add a class for easy removal later
//                     productForm.appendChild(badgeContainer);

//                     if (badgePages && badgePages.length > 0) {
//                         badgePages.forEach(page => {
//                             const containerDiv = createIconBlock(badge, page);
//                             badgeContainer.appendChild(containerDiv);

//                             if (badge.badge_type.includes('icon-block') || badge.badge_type.includes('payment-icons')) {
//                                 renderIconsBlock(badgeContainer, page);
//                             }
//                         });
//                     }
//                 }
//             });
//         } else {
//             // alert('No published badges found for the current product.');
//         }
//     }

//     // Function to create the badge container
//     function createBadgeContainer(badge) {
//         const badgeContainer = document.createElement('div');
//         badgeContainer.style.marginBottom = '40px';

//         // Badge Type
//         const badgeType = document.createElement('p');
//         badgeType.innerText = `Badge Type: ${badge.badge_type || 'No Type'}`;
//         badgeContainer.appendChild(badgeType);

//         return badgeContainer;
//     }

//     // Function to create the main container div for icons
//     function createIconBlock(badge, page) {
//         const containerDiv = document.createElement('div');
//         containerDiv.style.width = '100%';
//         containerDiv.style.padding = '16px';
//         containerDiv.style.border = '1px solid rgb(197, 200, 209)';
//         containerDiv.style.borderRadius = '8px';
//         containerDiv.style.display = 'flex';
//         containerDiv.style.justifyContent = 'space-between';
//         containerDiv.style.alignItems = 'center';
//         containerDiv.style.gap = '10px';
//         containerDiv.style.position = 'relative';
//         containerDiv.style.marginTop = '20px';
//         containerDiv.style.marginBottom = '20px';
//         containerDiv.style.background = 'rgb(255, 255, 255)';

//         const iconContainer = document.createElement('div');
//         iconContainer.innerHTML = page.icon_svg;
//         containerDiv.appendChild(iconContainer);

//         const textContainer = createTextContainer(page);
//         containerDiv.appendChild(textContainer);

//         const ctaButton = createCtaButton(page);
//         containerDiv.appendChild(ctaButton);

//         return containerDiv;
//     }

//     // Function to create the text container
//     function createTextContainer(page) {
//         const textContainer = document.createElement('div');
//         textContainer.id = 'text_container';
//         textContainer.style.display = 'flex';
//         textContainer.style.flexDirection = 'column';
//         textContainer.style.justifyContent = 'flex-start';
//         textContainer.style.alignItems = 'flex-start';
//         textContainer.style.flex = '1';
//         textContainer.style.gap = '2px';

//         const title = document.createElement('span');
//         title.id = 'title';
//         title.style.display = 'block';
//         title.style.fontWeight = '600';
//         title.style.fontSize = '16px';
//         title.style.color = '#202223';
//         title.style.margin = '0';
//         title.style.lineHeight = '1';
//         title.style.wordWrap = 'break-word';
//         title.style.maxWidth = '100%';
//         title.innerText = page.title || 'No Title';

//         const subheading = document.createElement('span');
//         subheading.id = 'subheading';
//         subheading.style.display = 'block';
//         subheading.style.fontSize = '14px';
//         subheading.style.color = '#96a4b6';
//         subheading.style.fontWeight = '400';
//         subheading.style.margin = '0';
//         subheading.style.textAlign = 'left';
//         subheading.style.lineHeight = '1';
//         subheading.style.wordWrap = 'break-word';
//         subheading.style.maxWidth = '100%';
//         subheading.innerText = page.subheading || 'No Subheading';

//         textContainer.appendChild(title);
//         textContainer.appendChild(subheading);

//         return textContainer;
//     }

//     // Function to create the CTA button
//     function createCtaButton(page) {
//         const ctaButton = document.createElement('a');
//         ctaButton.href = '#';
//         ctaButton.id = 'cta-button';
//         ctaButton.target = '_blank';
//         ctaButton.style.textDecoration = 'none';
//         ctaButton.style.flexShrink = '0';
//         ctaButton.style.margin = '0';
//         ctaButton.style.border = 'none';
//         ctaButton.style.fontWeight = '600';
//         ctaButton.style.padding = '10px 16px';
//         ctaButton.style.display = 'flex';
//         ctaButton.style.alignItems = 'center';
//         ctaButton.style.justifyContent = 'center';
//         ctaButton.style.fontSize = '14px';
//         ctaButton.style.backgroundColor = '#202223';
//         ctaButton.style.color = '#fafafa';
//         ctaButton.style.borderRadius = '4px';
//         ctaButton.style.cursor = 'pointer';
//         ctaButton.style.transition = 'background-color 0.2s ease-in-out';
//         ctaButton.innerText = page.button_text || 'Shop Now';

//         return ctaButton;
//     }

//     // Function to render icons block for 'icon-block' or 'payment-icons' types
//     function renderIconsBlock(container, page) {
//         if (!page.badge_pages) {
//             console.error('Badge pages are undefined');
//             return;
//         }

//         const containerDiv = document.createElement('div');
//         containerDiv.style.width = '100%';
//         containerDiv.style.padding = '20px';
//         containerDiv.style.backgroundColor = '#f7f7f7';
//         containerDiv.style.borderRadius = '10px';
//         containerDiv.style.display = 'flex';
//         containerDiv.style.justifyContent = 'space-around';
//         containerDiv.style.alignItems = 'center';
//         containerDiv.style.margin = '20px 0';
//         containerDiv.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

//         page.badge_pages.forEach(badge => {
//             const badgeContainer = document.createElement('div');
//             badgeContainer.style.textAlign = 'center';

//             const icon = document.createElement('img');
//             icon.src = badge.icon_svg;
//             icon.style.width = '50px';
//             icon.style.marginBottom = '10px';
//             badgeContainer.appendChild(icon);

//             const title = document.createElement('h3');
//             title.innerText = badge.title || 'No Title';
//             badgeContainer.appendChild(title);

//             const subheading = document.createElement('p');
//             subheading.innerText = badge.subheading || 'No Subheading';
//             badgeContainer.appendChild(subheading);

//             const button = document.createElement('a');
//             button.innerText = 'Shop now';
//             button.href = '#';
//             badgeContainer.appendChild(button);

//             containerDiv.appendChild(badgeContainer);
//         });

//         container.appendChild(containerDiv);
//     }

//     // Call the function to fetch and process badges
//     fetchPublishedBadges().then(data => {
//         filterAndDisplayBadges(data);
//     });

//     // Log the collected product and collection IDs
//     console.log("Product IDs database:", prodIds);
//     console.log("Collection IDs database:", collIds);
//     console.log("Placement Product Types database:", placeProdTypes);
// });
// document.addEventListener("DOMContentLoaded", function () {

//     var prodIds = [];
//     var collIds = [];
//     var placeProdTypes = [];

//     // Function to fetch published badges
//     function fetchPublishedBadges() {
//         return fetch(`${APP_URL}api/front-end/badges/published`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok: ' + response.statusText);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log("Fetched data:", data); // Log the fetched data
//                 if (data && data.length > 0) {
//                     data.forEach(badge => {
//                         const badgePages = badge.badge_pages; // Ensure correct property name
//                         console.log("Badge pages:", badgePages); // Log the badge pages

//                         // Create badge container
//                         const badgeContainer = document.createElement('div');
//                         badgeContainer.style.marginBottom = '40px';

//                         // Badge Type
//                         const badgeType = document.createElement('p');
//                         badgeType.innerText = `Badge Type: ${badge.badge_type || 'No Type'}`;
//                         badgeContainer.appendChild(badgeType);

//                         // Loop through each page and display additional fields
//                         if (badgePages && badgePages.length > 0) {
//                             badgePages.forEach(page => {
//                                 console.log("Processing page:", page); // Log each page

//                                 // Create the main container div
//                                 const containerDiv = document.createElement('div');
//                                 containerDiv.style.width = '100%';
//                                 containerDiv.style.padding = '16px';
//                                 containerDiv.style.border = '1px solid rgb(197, 200, 209)';
//                                 containerDiv.style.borderRadius = '8px';
//                                 containerDiv.style.display = 'flex';
//                                 containerDiv.style.justifyContent = 'space-between';
//                                 containerDiv.style.alignItems = 'center';
//                                 containerDiv.style.gap = '10px';
//                                 containerDiv.style.position = 'relative';
//                                 containerDiv.style.marginTop = '20px';
//                                 containerDiv.style.marginBottom = '20px';
//                                 containerDiv.style.background = 'rgb(255, 255, 255)';

//                                 // Create the icon container div
//                                 const iconContainer = document.createElement('div');
//                                 iconContainer.innerHTML = page.icon_svg;  // Inject the SVG string as HTML
//                                 containerDiv.appendChild(iconContainer);

//                                 // Create the text container div
//                                 const textContainer = document.createElement('div');
//                                 textContainer.id = 'text_container';
//                                 textContainer.style.display = 'flex';
//                                 textContainer.style.flexDirection = 'column';
//                                 textContainer.style.justifyContent = 'flex-start';
//                                 textContainer.style.alignItems = 'flex-start';
//                                 textContainer.style.flex = '1';
//                                 textContainer.style.gap = '2px';

//                                 // Create the title span
//                                 const title = document.createElement('span');
//                                 title.id = 'title';
//                                 title.style.display = 'block';
//                                 title.style.fontWeight = '600';
//                                 title.style.fontSize = '16px';
//                                 title.style.color = '#202223';
//                                 title.style.margin = '0';
//                                 title.style.lineHeight = '1';
//                                 title.style.wordWrap = 'break-word';
//                                 title.style.maxWidth = '100%';
//                                 title.innerText = page.title || 'No Title';

//                                 // Create the subheading span
//                                 const subheading = document.createElement('span');
//                                 subheading.id = 'subheading';
//                                 subheading.style.display = 'block';
//                                 subheading.style.fontSize = '14px';
//                                 subheading.style.color = '#96a4b6';
//                                 subheading.style.fontWeight = '400';
//                                 subheading.style.margin = '0';
//                                 subheading.style.textAlign = 'left';
//                                 subheading.style.lineHeight = '1';
//                                 subheading.style.wordWrap = 'break-word';
//                                 subheading.style.maxWidth = '100%';
//                                 subheading.innerText = page.subheading || 'No Subheading';

//                                 // Append the title and subheading to the text container
//                                 textContainer.appendChild(title);
//                                 textContainer.appendChild(subheading);

//                                 // Function to unescape and parse JSON
//                                 function parseJson(jsonString) {
//                                     try {
//                                         // First, unescape the string twice and remove the outer quotes
//                                         let unescapedJson = jsonString.replace(/\\"/g, '"').replace(/\\"/g, '"');
//                                         unescapedJson = unescapedJson.slice(1, -1); // Remove the outer quotes

//                                         // Now try to parse the unescaped JSON
//                                         return JSON.parse(unescapedJson);
//                                     } catch (error) {
//                                         console.error('Error parsing JSON:', error); // Log the error for debugging
//                                         return null;
//                                     }
//                                 }

//                                 // Check if the product data exists
//                                 if (page.placement_product_json) {
//                                     const productData = parseJson(page.placement_product_json);
//                                     if (productData) {
//                                         // Extract product IDs (if available)
//                                         const productIds = productData.map(product => product.id.split('/').pop());
//                                         prodIds.push(...productIds);

//                                         // Log the IDs or a fallback message if no IDs exist
//                                         console.log(`From Placement Product JSON ID(s): ${productIds.join(', ') || 'No ID'}`);
//                                     } else {
//                                         console.log('Error parsing JSON: Invalid format');
//                                     }
//                                 } else {
//                                     console.log('From Placement Product JSON ID: No data available');
//                                 }

//                                 // Check if the collection data exists
//                                 if (page.placement_collection_json) {
//                                     const collectionData = parseJson(page.placement_collection_json);
//                                     if (collectionData) {
//                                         // Extract collection IDs (if available)
//                                         const collectionIds = collectionData.map(collection => collection.id.split('/').pop());
//                                         collIds.push(...collectionIds);

//                                         // Log the IDs or a fallback message if no IDs exist
//                                         console.log(`From Placement Collection JSON ID(s): ${collectionIds.join(', ') || 'No ID'}`);
//                                     } else {
//                                         console.log('Error parsing JSON: Invalid format');
//                                     }
//                                 } else {
//                                     console.log('From Placement Collection JSON ID: No data available');
//                                 }

//                                 // Log the placement product type
//                                 const placeProdType = page.placement_product_type || 'No Type';
//                                 placeProdTypes.push(placeProdType);
//                                 console.log(`Placement Product Type: ${placeProdType}`);

//                                 // Create the CTA button
//                                 const ctaButton = document.createElement('a');
//                                 ctaButton.href = '#';
//                                 ctaButton.id = 'cta-button';
//                                 ctaButton.target = '_blank';
//                                 ctaButton.style.textDecoration = 'none';
//                                 ctaButton.style.flexShrink = '0';
//                                 ctaButton.style.margin = '0';
//                                 ctaButton.style.border = 'none';
//                                 ctaButton.style.fontWeight = '600';
//                                 ctaButton.style.padding = '10px 16px';
//                                 ctaButton.style.display = 'flex';
//                                 ctaButton.style.alignItems = 'center';
//                                 ctaButton.style.justifyContent = 'center';
//                                 ctaButton.style.fontSize = '14px';
//                                 ctaButton.style.backgroundColor = '#202223';
//                                 ctaButton.style.color = '#fafafa';
//                                 ctaButton.style.borderRadius = '4px';
//                                 ctaButton.style.cursor = 'pointer';
//                                 ctaButton.style.transition = 'background-color 0.2s ease-in-out';
//                                 ctaButton.innerText = page.button_text || 'Shop Now';

//                                 // Append the icon container, text container, and CTA button to the main container
//                                 containerDiv.appendChild(iconContainer);
//                                 containerDiv.appendChild(textContainer);
//                                 containerDiv.appendChild(ctaButton);

//                                 // Append the container to the badge container
//                                 badgeContainer.appendChild(containerDiv);
//                             });
//                         } else {
//                             console.log("No badge pages found for badge:", badge); // Log if no badge pages
//                         }

//                     });
//                 } else {
//                     console.log("No published badges found."); // Log if no badges are found
//                     // alert('No published badges found.');
//                 }

//                 // Return the fetched data for further processing
//                 return data;
//             })
//             .catch(error => {
//                 console.error('Error fetching badge data:', error);
//                 // alert('Error fetching badge data: ' + error.message);
//             });
//     }

//     // Function to get the current product ID
//     function getProductId() {
//         const productElement = document.querySelector('[data-product-id]');
//         return productElement ? productElement.getAttribute('data-product-id') : null;
//     }

//     // Function to fetch collections for the given product ID
//     async function fetchCollectionsForProduct(productId) {
//         // Ensure APP_URL and SHOP_URL are properly defined globally
//         const endpoint = `${APP_URL}api/getProductCollectionId/${productId}?shop=${SHOP_URL}`;

//         try {
//             const response = await fetch(endpoint);
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const collectionIds = await response.json();
//             console.log("Collection IDs:", collectionIds);
//             return collectionIds;
//         } catch (error) {
//             console.error('Failed to fetch collections:', error);
//             return [];
//         }
//     }

//     // Function to filter and display badges based on product ID and placement type
//     async function filterAndDisplayBadges(data) {
//         const productId = getProductId();
//         console.log("Current product ID:", productId);

//         // Fetch collections for the product
//         const collectionIds = await fetchCollectionsForProduct(productId);

//         // Fetch tags for the product
//         const tags = document.querySelector('[data-product-tags]')?.getAttribute('data-product-tags') || '';
//         const productTags = tags.split(',').map(tag => tag.trim());
//         console.log("Product Tags:", productTags);

//         // Filter badges based on product ID, collection IDs, and tags
//         const filteredBadges = data.filter(badge => {
//             const badgePages = badge.badge_pages;
//             return badgePages.some(page => {
//                 const placeProdType = page.placement_product_type;
//                 const productIds = prodIds.includes(productId);
//                 const collectionIdsMatch = collectionIds.some(collectionId => collIds.includes(collectionId));
//                 const tagsMatch = productTags.some(tag => {
//                     const pageTags = page.placement_tags_json ? page.placement_tags_json.split(',').map(tag => tag.trim()) : [];
//                     return pageTags.includes(tag);
//                 });

//                 return (placeProdType === 'allProducts') ||
//                        (placeProdType === 'specificProducts' && productIds) ||
//                        (placeProdType === 'specificCollections' && collectionIdsMatch) ||
//                        (placeProdType === 'specificTags' && tagsMatch);
//             });
//         });

//         console.log("Filtered badges:", filteredBadges);

//         // Clear existing badges
//         const productForm = document.querySelector('.product-form');
//         if (productForm) {
//             // Remove only the badge containers, not the entire content
//             const badgeContainers = productForm.querySelectorAll('.badge-container');
//             badgeContainers.forEach(container => container.remove());
//         }

//         // Display the filtered badges
//         if (filteredBadges.length > 0) {
//             filteredBadges.forEach(badge => {
//                 const badgePages = badge.badge_pages;
//                 const productForm = document.querySelector('.product-form');

//                 if (productForm) {
//                     const badgeContainer = createBadgeContainer(badge);
//                     badgeContainer.classList.add('badge-container'); // Add a class for easy removal later
//                     productForm.appendChild(badgeContainer);

//                     if (badgePages && badgePages.length > 0) {
//                         badgePages.forEach(page => {
//                             const containerDiv = createIconBlock(badge, page);
//                             badgeContainer.appendChild(containerDiv);

//                             if (badge.badge_type.includes('icon-block') || badge.badge_type.includes('payment-icons')) {
//                                 renderIconsBlock(badgeContainer, page);
//                             }
//                         });
//                     }
//                 }
//             });
//         } else {
//             // alert('No published badges found for the current product.');
//         }
//     }

//     // Function to create the badge container
//     function createBadgeContainer(badge) {
//         const badgeContainer = document.createElement('div');
//         badgeContainer.style.marginBottom = '40px';

//         // Badge Type
//         const badgeType = document.createElement('p');
//         badgeType.innerText = `Badge Type: ${badge.badge_type || 'No Type'}`;
//         badgeContainer.appendChild(badgeType);

//         return badgeContainer;
//     }

//     // Function to create the main container div for icons
//     function createIconBlock(badge, page) {
//         const containerDiv = document.createElement('div');
//         containerDiv.style.width = '100%';
//         containerDiv.style.padding = '16px';
//         containerDiv.style.border = '1px solid rgb(197, 200, 209)';
//         containerDiv.style.borderRadius = '8px';
//         containerDiv.style.display = 'flex';
//         containerDiv.style.justifyContent = 'space-between';
//         containerDiv.style.alignItems = 'center';
//         containerDiv.style.gap = '10px';
//         containerDiv.style.position = 'relative';
//         containerDiv.style.marginTop = '20px';
//         containerDiv.style.marginBottom = '20px';
//         containerDiv.style.background = 'rgb(255, 255, 255)';

//         const iconContainer = document.createElement('div');
//         iconContainer.innerHTML = page.icon_svg;
//         containerDiv.appendChild(iconContainer);

//         const textContainer = createTextContainer(page);
//         containerDiv.appendChild(textContainer);

//         const ctaButton = createCtaButton(page);
//         containerDiv.appendChild(ctaButton);

//         return containerDiv;
//     }

//     // Function to create the text container
//     function createTextContainer(page) {
//         const textContainer = document.createElement('div');
//         textContainer.id = 'text_container';
//         textContainer.style.display = 'flex';
//         textContainer.style.flexDirection = 'column';
//         textContainer.style.justifyContent = 'flex-start';
//         textContainer.style.alignItems = 'flex-start';
//         textContainer.style.flex = '1';
//         textContainer.style.gap = '2px';

//         const title = document.createElement('span');
//         title.id = 'title';
//         title.style.display = 'block';
//         title.style.fontWeight = '600';
//         title.style.fontSize = '16px';
//         title.style.color = '#202223';
//         title.style.margin = '0';
//         title.style.lineHeight = '1';
//         title.style.wordWrap = 'break-word';
//         title.style.maxWidth = '100%';
//         title.innerText = page.title || 'No Title';

//         const subheading = document.createElement('span');
//         subheading.id = 'subheading';
//         subheading.style.display = 'block';
//         subheading.style.fontSize = '14px';
//         subheading.style.color = '#96a4b6';
//         subheading.style.fontWeight = '400';
//         subheading.style.margin = '0';
//         subheading.style.textAlign = 'left';
//         subheading.style.lineHeight = '1';
//         subheading.style.wordWrap = 'break-word';
//         subheading.style.maxWidth = '100%';
//         subheading.innerText = page.subheading || 'No Subheading';

//         textContainer.appendChild(title);
//         textContainer.appendChild(subheading);

//         return textContainer;
//     }

//     // Function to create the CTA button
//     function createCtaButton(page) {
//         const ctaButton = document.createElement('a');
//         ctaButton.href = '#';
//         ctaButton.id = 'cta-button';
//         ctaButton.target = '_blank';
//         ctaButton.style.textDecoration = 'none';
//         ctaButton.style.flexShrink = '0';
//         ctaButton.style.margin = '0';
//         ctaButton.style.border = 'none';
//         ctaButton.style.fontWeight = '600';
//         ctaButton.style.padding = '10px 16px';
//         ctaButton.style.display = 'flex';
//         ctaButton.style.alignItems = 'center';
//         ctaButton.style.justifyContent = 'center';
//         ctaButton.style.fontSize = '14px';
//         ctaButton.style.backgroundColor = '#202223';
//         ctaButton.style.color = '#fafafa';
//         ctaButton.style.borderRadius = '4px';
//         ctaButton.style.cursor = 'pointer';
//         ctaButton.style.transition = 'background-color 0.2s ease-in-out';
//         ctaButton.innerText = page.button_text || 'Shop Now';

//         return ctaButton;
//     }

//     // Function to render icons block for 'icon-block' or 'payment-icons' types
//     function renderIconsBlock(container, page) {
//         const containerDiv = document.createElement('div');
//         containerDiv.style.width = '100%';
//         containerDiv.style.padding = '20px';
//         containerDiv.style.backgroundColor = '#f7f7f7';
//         containerDiv.style.borderRadius = '10px';
//         containerDiv.style.display = 'flex';
//         containerDiv.style.justifyContent = 'space-around';
//         containerDiv.style.alignItems = 'center';
//         containerDiv.style.margin = '20px 0';
//         containerDiv.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

//         page.badge_pages.forEach(badge => {
//             const badgeContainer = document.createElement('div');
//             badgeContainer.style.textAlign = 'center';

//             const icon = document.createElement('img');
//             icon.src = badge.icon_svg;
//             icon.style.width = '50px';
//             icon.style.marginBottom = '10px';
//             badgeContainer.appendChild(icon);

//             const title = document.createElement('h3');
//             title.innerText = badge.title || 'No Title';
//             badgeContainer.appendChild(title);

//             const subheading = document.createElement('p');
//             subheading.innerText = badge.subheading || 'No Subheading';
//             badgeContainer.appendChild(subheading);

//             const button = document.createElement('a');
//             button.innerText = 'Shop now';
//             button.href = '#';
//             badgeContainer.appendChild(button);

//             containerDiv.appendChild(badgeContainer);
//         });

//         container.appendChild(containerDiv);
//     }

//     // Call the function to fetch and process badges
//     fetchPublishedBadges().then(data => {
//         filterAndDisplayBadges(data);
//     });

//     // Log the collected product and collection IDs
//     console.log("Product IDs database:", prodIds);
//     console.log("Collection IDs database:", collIds);
//     console.log("Placement Product Types database:", placeProdTypes);
// });




// testing code at 14-11-2024 for all design for diffrent badge type


// document.addEventListener("DOMContentLoaded", function () {

//     var prodIds = [];
//     var collIds = [];
//     var placeProdTypes = [];

//     // Function to fetch published badges
//     function fetchPublishedBadges() {
//         return fetch(`${APP_URL}api/front-end/badges/published`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok: ' + response.statusText);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log("Fetched data:", data); // Log the fetched data
//                 if (data && data.length > 0) {
//                     data.forEach(badge => {
//                         const badgePages = badge.badge_pages; // Ensure correct property name
//                         console.log("Badge pages:", badgePages); // Log the badge pages

//                         // Create badge container
//                         const badgeContainer = document.createElement('div');
//                         badgeContainer.style.marginBottom = '40px';

//                         // Badge Type
//                         const badgeType = document.createElement('p');
//                         badgeType.innerText = `Badge Type: ${badge.badge_type || 'No Type'}`;
//                         badgeContainer.appendChild(badgeType);

//                         // Loop through each page and display additional fields
//                         if (badgePages && badgePages.length > 0) {
//                             badgePages.forEach(page => {
//                                 console.log("Processing page:", page); // Log each page

//                                 // Create the main container div
//                                 const containerDiv = document.createElement('div');
//                                 containerDiv.style.width = '100%';
//                                 containerDiv.style.padding = '16px';
//                                 containerDiv.style.border = '1px solid rgb(197, 200, 209)';
//                                 containerDiv.style.borderRadius = '8px';
//                                 containerDiv.style.display = 'flex';
//                                 containerDiv.style.justifyContent = 'space-between';
//                                 containerDiv.style.alignItems = 'center';
//                                 containerDiv.style.gap = '10px';
//                                 containerDiv.style.position = 'relative';
//                                 containerDiv.style.marginTop = '20px';
//                                 containerDiv.style.marginBottom = '20px';
//                                 containerDiv.style.background = 'rgb(255, 255, 255)';

//                                 // Create the icon container div
//                                 const iconContainer = document.createElement('div');
//                                 iconContainer.innerHTML = page.icon_svg;  // Inject the SVG string as HTML
//                                 containerDiv.appendChild(iconContainer);

//                                 // Create the text container div
//                                 const textContainer = document.createElement('div');
//                                 textContainer.id = 'text_container';
//                                 textContainer.style.display = 'flex';
//                                 textContainer.style.flexDirection = 'column';
//                                 textContainer.style.justifyContent = 'flex-start';
//                                 textContainer.style.alignItems = 'flex-start';
//                                 textContainer.style.flex = '1';
//                                 textContainer.style.gap = '2px';

//                                 // Create the title span
//                                 const title = document.createElement('span');
//                                 title.id = 'title';
//                                 title.style.display = 'block';
//                                 title.style.fontWeight = '600';
//                                 title.style.fontSize = '16px';
//                                 title.style.color = '#202223';
//                                 title.style.margin = '0';
//                                 title.style.lineHeight = '1';
//                                 title.style.wordWrap = 'break-word';
//                                 title.style.maxWidth = '100%';
//                                 title.innerText = page.title || 'No Title';

//                                 // Create the subheading span
//                                 const subheading = document.createElement('span');
//                                 subheading.id = 'subheading';
//                                 subheading.style.display = 'block';
//                                 subheading.style.fontSize = '14px';
//                                 subheading.style.color = '#96a4b6';
//                                 subheading.style.fontWeight = '400';
//                                 subheading.style.margin = '0';
//                                 subheading.style.textAlign = 'left';
//                                 subheading.style.lineHeight = '1';
//                                 subheading.style.wordWrap = 'break-word';
//                                 subheading.style.maxWidth = '100%';
//                                 subheading.innerText = page.subheading || 'No Subheading';

//                                 // Append the title and subheading to the text container
//                                 textContainer.appendChild(title);
//                                 textContainer.appendChild(subheading);

//                                 // Function to unescape and parse JSON
//                                 function parseJson(jsonString) {
//                                     try {
//                                         // First, unescape the string twice and remove the outer quotes
//                                         let unescapedJson = jsonString.replace(/\\"/g, '"').replace(/\\"/g, '"');
//                                         unescapedJson = unescapedJson.slice(1, -1); // Remove the outer quotes

//                                         // Now try to parse the unescaped JSON
//                                         return JSON.parse(unescapedJson);
//                                     } catch (error) {
//                                         console.error('Error parsing JSON:', error); // Log the error for debugging
//                                         return null;
//                                     }
//                                 }

//                                 // Check if the product data exists
//                                 if (page.placement_product_json) {
//                                     const productData = parseJson(page.placement_product_json);
//                                     if (productData) {
//                                         // Extract product IDs (if available)
//                                         const productIds = productData.map(product => product.id.split('/').pop());
//                                         prodIds.push(...productIds);

//                                         // Log the IDs or a fallback message if no IDs exist
//                                         console.log(`From Placement Product JSON ID(s): ${productIds.join(', ') || 'No ID'}`);
//                                     } else {
//                                         console.log('Error parsing JSON: Invalid format');
//                                     }
//                                 } else {
//                                     console.log('From Placement Product JSON ID: No data available');
//                                 }

//                                 // Check if the collection data exists
//                                 if (page.placement_collection_json) {
//                                     const collectionData = parseJson(page.placement_collection_json);
//                                     if (collectionData) {
//                                         // Extract collection IDs (if available)
//                                         const collectionIds = collectionData.map(collection => collection.id.split('/').pop());
//                                         collIds.push(...collectionIds);

//                                         // Log the IDs or a fallback message if no IDs exist
//                                         console.log(`From Placement Collection JSON ID(s): ${collectionIds.join(', ') || 'No ID'}`);
//                                     } else {
//                                         console.log('Error parsing JSON: Invalid format');
//                                     }
//                                 } else {
//                                     console.log('From Placement Collection JSON ID: No data available');
//                                 }

//                                 // Log the placement product type
//                                 const placeProdType = page.placement_product_type || 'No Type';
//                                 placeProdTypes.push(placeProdType);
//                                 console.log(`Placement Product Type: ${placeProdType}`);

//                                 // Create the CTA button
//                                 const ctaButton = document.createElement('a');
//                                 ctaButton.href = '#';
//                                 ctaButton.id = 'cta-button';
//                                 ctaButton.target = '_blank';
//                                 ctaButton.style.textDecoration = 'none';
//                                 ctaButton.style.flexShrink = '0';
//                                 ctaButton.style.margin = '0';
//                                 ctaButton.style.border = 'none';
//                                 ctaButton.style.fontWeight = '600';
//                                 ctaButton.style.padding = '10px 16px';
//                                 ctaButton.style.display = 'flex';
//                                 ctaButton.style.alignItems = 'center';
//                                 ctaButton.style.justifyContent = 'center';
//                                 ctaButton.style.fontSize = '14px';
//                                 ctaButton.style.backgroundColor = '#202223';
//                                 ctaButton.style.color = '#fafafa';
//                                 ctaButton.style.borderRadius = '4px';
//                                 ctaButton.style.cursor = 'pointer';
//                                 ctaButton.style.transition = 'background-color 0.2s ease-in-out';
//                                 ctaButton.innerText = page.button_text || 'Shop Now';

//                                 // Append the icon container, text container, and CTA button to the main container
//                                 containerDiv.appendChild(iconContainer);
//                                 containerDiv.appendChild(textContainer);
//                                 containerDiv.appendChild(ctaButton);

//                                 // Append the container to the badge container
//                                 badgeContainer.appendChild(containerDiv);
//                             });
//                         } else {
//                             console.log("No badge pages found for badge:", badge); // Log if no badge pages
//                         }

//                     });
//                 } else {
//                     console.log("No published badges found."); // Log if no badges are found
//                     // alert('No published badges found.');
//                 }

//                 // Return the fetched data for further processing
//                 return data;
//             })
//             .catch(error => {
//                 console.error('Error fetching badge data:', error);
//                 // alert('Error fetching badge data: ' + error.message);
//             });
//     }

//     // Function to get the current product ID
//     function getProductId() {
//         const productElement = document.querySelector('[data-product-id]');
//         return productElement ? productElement.getAttribute('data-product-id') : null;
//     }

//     // Function to fetch collections for the given product ID
//     async function fetchCollectionsForProduct(productId) {
//         // Ensure APP_URL and SHOP_URL are properly defined globally
//         const endpoint = `${APP_URL}api/getProductCollectionId/${productId}?shop=${SHOP_URL}`;

//         try {
//             const response = await fetch(endpoint);
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const collectionIds = await response.json();
//             console.log("Collection IDs:", collectionIds);
//             return collectionIds;
//         } catch (error) {
//             console.error('Failed to fetch collections:', error);
//             return [];
//         }
//     }

//     // Function to filter and display badges based on product ID and placement type
//     async function filterAndDisplayBadges(data) {
//         const productId = getProductId();
//         console.log("Current product ID:", productId);

//         // Fetch collections for the product
//         const collectionIds = await fetchCollectionsForProduct(productId);

//         // Fetch tags for the product
//         const tags = document.querySelector('[data-product-tags]')?.getAttribute('data-product-tags') || '';
//         const productTags = tags.split(',').map(tag => tag.trim());
//         console.log("Product Tags:", productTags);

//         // Filter badges based on product ID, collection IDs, and tags
//         const filteredBadges = data.filter(badge => {
//             const badgePages = badge.badge_pages;
//             return badgePages.some(page => {
//                 const placeProdType = page.placement_product_type;
//                 const productIds = prodIds.includes(productId);
//                 const collectionIdsMatch = collectionIds.some(collectionId => collIds.includes(collectionId));
//                 const tagsMatch = productTags.some(tag => {
//                     const pageTags = page.placement_tags_json ? page.placement_tags_json.split(',').map(tag => tag.trim()) : [];
//                     return pageTags.includes(tag);
//                 });

//                 return (placeProdType === 'allProducts') ||
//                        (placeProdType === 'specificProducts' && productIds) ||
//                        (placeProdType === 'specificCollections' && collectionIdsMatch) ||
//                        (placeProdType === 'specificTags' && tagsMatch);
//             });
//         });

//         console.log("Filtered badges:", filteredBadges);

//         // Clear existing badges
//         const productForm = document.querySelector('.product-form');
//         if (productForm) {
//             // Remove only the badge containers, not the entire content
//             const badgeContainers = productForm.querySelectorAll('.badge-container');
//             badgeContainers.forEach(container => container.remove());
//         }

//         // Display the filtered badges
//         if (filteredBadges.length > 0) {
//             filteredBadges.forEach(badge => {
//                 const badgePages = badge.badge_pages;
//                 const productForm = document.querySelector('.product-form');

//                 if (productForm) {
//                     const badgeContainer = createBadgeContainer(badge);
//                     badgeContainer.classList.add('badge-container'); // Add a class for easy removal later
//                     productForm.appendChild(badgeContainer);

//                     if (badgePages && badgePages.length > 0) {
//                         badgePages.forEach(page => {
//                             const containerDiv = createIconBlock(badge, page);
//                             badgeContainer.appendChild(containerDiv);

//                             if (badge.badge_type.includes('icon-block') || badge.badge_type.includes('payment-icons')) {
//                                 renderIconsBlock(badgeContainer, page);
//                             }
//                         });
//                     }
//                 }
//             });
//         } else {
//             // alert('No published badges found for the current product.');
//         }
//     }

//     // Function to create the badge container
//     function createBadgeContainer(badge) {
//         const badgeContainer = document.createElement('div');
//         badgeContainer.style.marginBottom = '40px';

//         // Badge Type
//         const badgeType = document.createElement('p');
//         badgeType.innerText = `Badge Type: ${badge.badge_type || 'No Type'}`;
//         badgeContainer.appendChild(badgeType);

//         return badgeContainer;
//     }

//     // Function to create the main container div for icons
//     function createIconBlock(badge, page) {
//         const containerDiv = document.createElement('div');
//         containerDiv.style.width = '100%';
//         containerDiv.style.padding = '16px';
//         containerDiv.style.border = '1px solid rgb(197, 200, 209)';
//         containerDiv.style.borderRadius = '8px';
//         containerDiv.style.display = 'flex';
//         containerDiv.style.justifyContent = 'space-between';
//         containerDiv.style.alignItems = 'center';
//         containerDiv.style.gap = '10px';
//         containerDiv.style.position = 'relative';
//         containerDiv.style.marginTop = '20px';
//         containerDiv.style.marginBottom = '20px';
//         containerDiv.style.background = 'rgb(255, 255, 255)';

//         const iconContainer = document.createElement('div');
//         iconContainer.innerHTML = page.icon_svg;
//         containerDiv.appendChild(iconContainer);

//         const textContainer = createTextContainer(page);
//         containerDiv.appendChild(textContainer);

//         const ctaButton = createCtaButton(page);
//         containerDiv.appendChild(ctaButton);

//         return containerDiv;
//     }

//     // Function to create the text container
//     function createTextContainer(page) {
//         const textContainer = document.createElement('div');
//         textContainer.id = 'text_container';
//         textContainer.style.display = 'flex';
//         textContainer.style.flexDirection = 'column';
//         textContainer.style.justifyContent = 'flex-start';
//         textContainer.style.alignItems = 'flex-start';
//         textContainer.style.flex = '1';
//         textContainer.style.gap = '2px';

//         const title = document.createElement('span');
//         title.id = 'title';
//         title.style.display = 'block';
//         title.style.fontWeight = '600';
//         title.style.fontSize = '16px';
//         title.style.color = '#202223';
//         title.style.margin = '0';
//         title.style.lineHeight = '1';
//         title.style.wordWrap = 'break-word';
//         title.style.maxWidth = '100%';
//         title.innerText = page.title || 'No Title';

//         const subheading = document.createElement('span');
//         subheading.id = 'subheading';
//         subheading.style.display = 'block';
//         subheading.style.fontSize = '14px';
//         subheading.style.color = '#96a4b6';
//         subheading.style.fontWeight = '400';
//         subheading.style.margin = '0';
//         subheading.style.textAlign = 'left';
//         subheading.style.lineHeight = '1';
//         subheading.style.wordWrap = 'break-word';
//         subheading.style.maxWidth = '100%';
//         subheading.innerText = page.subheading || 'No Subheading';

//         textContainer.appendChild(title);
//         textContainer.appendChild(subheading);

//         return textContainer;
//     }

//     // Function to create the CTA button
//     function createCtaButton(page) {
//         const ctaButton = document.createElement('a');
//         ctaButton.href = '#';
//         ctaButton.id = 'cta-button';
//         ctaButton.target = '_blank';
//         ctaButton.style.textDecoration = 'none';
//         ctaButton.style.flexShrink = '0';
//         ctaButton.style.margin = '0';
//         ctaButton.style.border = 'none';
//         ctaButton.style.fontWeight = '600';
//         ctaButton.style.padding = '10px 16px';
//         ctaButton.style.display = 'flex';
//         ctaButton.style.alignItems = 'center';
//         ctaButton.style.justifyContent = 'center';
//         ctaButton.style.fontSize = '14px';
//         ctaButton.style.backgroundColor = '#202223';
//         ctaButton.style.color = '#fafafa';
//         ctaButton.style.borderRadius = '4px';
//         ctaButton.style.cursor = 'pointer';
//         ctaButton.style.transition = 'background-color 0.2s ease-in-out';
//         ctaButton.innerText = page.button_text || 'Shop Now';

//         return ctaButton;
//     }

//     // Function to render icons block for 'icon-block' or 'payment-icons' types
//     function renderIconsBlock(container, page) {
//         if (!page.badge_pages) {
//             console.error('Badge pages are undefined');
//             return;
//         }

//         const containerDiv = document.createElement('div');
//         containerDiv.style.width = '100%';
//         containerDiv.style.padding = '20px';
//         containerDiv.style.backgroundColor = '#f7f7f7';
//         containerDiv.style.borderRadius = '10px';
//         containerDiv.style.display = 'flex';
//         containerDiv.style.justifyContent = 'space-around';
//         containerDiv.style.alignItems = 'center';
//         containerDiv.style.margin = '20px 0';
//         containerDiv.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

//         page.badge_pages.forEach(badge => {
//             const badgeContainer = document.createElement('div');
//             badgeContainer.style.textAlign = 'center';

//             const icon = document.createElement('img');
//             icon.src = badge.icon_svg;
//             icon.style.width = '50px';
//             icon.style.marginBottom = '10px';
//             badgeContainer.appendChild(icon);

//             const title = document.createElement('h3');
//             title.innerText = badge.title || 'No Title';
//             badgeContainer.appendChild(title);

//             const subheading = document.createElement('p');
//             subheading.innerText = badge.subheading || 'No Subheading';
//             badgeContainer.appendChild(subheading);

//             const button = document.createElement('a');
//             button.innerText = 'Shop now';
//             button.href = '#';
//             badgeContainer.appendChild(button);

//             containerDiv.appendChild(badgeContainer);
//         });

//         container.appendChild(containerDiv);
//     }

//     // Call the function to fetch and process badges
//     fetchPublishedBadges().then(data => {
//         filterAndDisplayBadges(data);
//     });

//     // Log the collected product and collection IDs
//     console.log("Product IDs database:", prodIds);
//     console.log("Collection IDs database:", collIds);
//     console.log("Placement Product Types database:", placeProdTypes);
// });




// document.addEventListener("DOMContentLoaded", function () {

//     var prodIds = [];
//     var collIds = [];
//     var placeProdTypes = [];

//     // Function to fetch published badges
//     function fetchPublishedBadges() {
//         return fetch(`${APP_URL}api/front-end/badges/published`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok: ' + response.statusText);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log("Fetched data:", data); // Log the fetched data
//                 if (data && data.length > 0) {
//                     data.forEach(badge => {
//                         const badgePages = badge.badge_pages; // Ensure correct property name
//                         console.log("Badge pages:", badgePages); // Log the badge pages

//                         // Create badge container
//                         const badgeContainer = document.createElement('div');
//                         badgeContainer.classList.add('badge-container');

//                         // Badge Type
//                         const badgeType = document.createElement('p');
//                         badgeType.classList.add('badge-type');
//                         badgeType.innerText = `Badge Type: ${badge.badge_type || 'No Type'}`;
//                         badgeContainer.appendChild(badgeType);

//                         // Loop through each page and display additional fields
//                         if (badgePages && badgePages.length > 0) {
//                             badgePages.forEach(page => {
//                                 console.log("Processing page:", page); // Log each page

//                                 // Create the main container div
//                                 const containerDiv = document.createElement('div');
//                                 containerDiv.classList.add('container-div');

//                                 // Create the icon container div
//                                 const iconContainer = document.createElement('div');
//                                 iconContainer.classList.add('icon-container');
//                                 iconContainer.innerHTML = page.icon_svg;  // Inject the SVG string as HTML
//                                 containerDiv.appendChild(iconContainer);

//                                 // Create the text container div
//                                 const textContainer = document.createElement('div');
//                                 textContainer.classList.add('text-container');
//                                 textContainer.id = 'text_container';

//                                 // Create the title span
//                                 const title = document.createElement('span');
//                                 title.classList.add('title');
//                                 title.innerText = page.title || 'No Title';

//                                 // Create the subheading span
//                                 const subheading = document.createElement('span');
//                                 subheading.classList.add('subheading');
//                                 subheading.innerText = page.subheading || 'No Subheading';

//                                 // Append the title and subheading to the text container
//                                 textContainer.appendChild(title);
//                                 textContainer.appendChild(subheading);

//                                 // Function to unescape and parse JSON
//                                 function parseJson(jsonString) {
//                                     try {
//                                         // First, unescape the string twice and remove the outer quotes
//                                         let unescapedJson = jsonString.replace(/\\"/g, '"').replace(/\\"/g, '"');
//                                         unescapedJson = unescapedJson.slice(1, -1); // Remove the outer quotes

//                                         // Now try to parse the unescaped JSON
//                                         return JSON.parse(unescapedJson);
//                                     } catch (error) {
//                                         console.error('Error parsing JSON:', error); // Log the error for debugging
//                                         return null;
//                                     }
//                                 }

//                                 // Check if the product data exists
//                                 if (page.placement_product_json) {
//                                     const productData = parseJson(page.placement_product_json);
//                                     if (productData) {
//                                         // Extract product IDs (if available)
//                                         const productIds = productData.map(product => product.id.split('/').pop());
//                                         prodIds.push(...productIds);

//                                         // Log the IDs or a fallback message if no IDs exist
//                                         console.log(`From Placement Product JSON ID(s): ${productIds.join(', ') || 'No ID'}`);
//                                     } else {
//                                         console.log('Error parsing JSON: Invalid format');
//                                     }
//                                 } else {
//                                     console.log('From Placement Product JSON ID: No data available');
//                                 }

//                                 // Check if the collection data exists
//                                 if (page.placement_collection_json) {
//                                     const collectionData = parseJson(page.placement_collection_json);
//                                     if (collectionData) {
//                                         // Extract collection IDs (if available)
//                                         const collectionIds = collectionData.map(collection => collection.id.split('/').pop());
//                                         collIds.push(...collectionIds);

//                                         // Log the IDs or a fallback message if no IDs exist
//                                         console.log(`From Placement Collection JSON ID(s): ${collectionIds.join(', ') || 'No ID'}`);
//                                     } else {
//                                         console.log('Error parsing JSON: Invalid format');
//                                     }
//                                 } else {
//                                     console.log('From Placement Collection JSON ID: No data available');
//                                 }

//                                 // Log the placement product type
//                                 const placeProdType = page.placement_product_type || 'No Type';
//                                 placeProdTypes.push(placeProdType);
//                                 console.log(`Placement Product Type: ${placeProdType}`);

//                                 // Create the CTA button
//                                 const ctaButton = document.createElement('a');
//                                 ctaButton.classList.add('cta-button');
//                                 ctaButton.href = '#';
//                                 ctaButton.target = '_blank';
//                                 ctaButton.innerText = page.button_text || 'Shop Now';

//                                 // Append the icon container, text container, and CTA button to the main container
//                                 containerDiv.appendChild(iconContainer);
//                                 containerDiv.appendChild(textContainer);
//                                 containerDiv.appendChild(ctaButton);

//                                 // Append the container to the badge container
//                                 badgeContainer.appendChild(containerDiv);
//                             });
//                         } else {
//                             console.log("No badge pages found for badge:", badge); // Log if no badge pages
//                         }

//                     });
//                 } else {
//                     console.log("No published badges found."); // Log if no badges are found
//                     // alert('No published badges found.');
//                 }

//                 // Return the fetched data for further processing
//                 return data;
//             })
//             .catch(error => {
//                 console.error('Error fetching badge data:', error);
//                 // alert('Error fetching badge data: ' + error.message);
//             });
//     }

//     // Function to get the current product ID
//     function getProductId() {
//         const productElement = document.querySelector('[data-product-id]');
//         return productElement ? productElement.getAttribute('data-product-id') : null;
//     }

//     // Function to fetch collections for the given product ID
//     async function fetchCollectionsForProduct(productId) {
//         // Ensure APP_URL and SHOP_URL are properly defined globally
//         const endpoint = `${APP_URL}api/getProductCollectionId/${productId}?shop=${SHOP_URL}`;

//         try {
//             const response = await fetch(endpoint);
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const collectionIds = await response.json();
//             console.log("Collection IDs:", collectionIds);
//             return collectionIds;
//         } catch (error) {
//             console.error('Failed to fetch collections:', error);
//             return [];
//         }
//     }

//     // Function to filter and display badges based on product ID and placement type
//     async function filterAndDisplayBadges(data) {
//         const productId = getProductId();
//         console.log("Current product ID:", productId);

//         // Fetch collections for the product
//         const collectionIds = await fetchCollectionsForProduct(productId);

//         // Fetch tags for the product
//         const tags = document.querySelector('[data-product-tags]')?.getAttribute('data-product-tags') || '';
//         const productTags = tags.split(',').map(tag => tag.trim());
//         console.log("Product Tags:", productTags);

//         // Filter badges based on product ID, collection IDs, and tags
//         const filteredBadges = data.filter(badge => {
//             const badgePages = badge.badge_pages;
//             return badgePages.some(page => {
//                 const placeProdType = page.placement_product_type;
//                 const productIds = prodIds.includes(productId);
//                 const collectionIdsMatch = collectionIds.some(collectionId => collIds.includes(collectionId));
//                 const tagsMatch = productTags.some(tag => {
//                     const pageTags = page.placement_tags_json ? page.placement_tags_json.split(',').map(tag => tag.trim()) : [];
//                     return pageTags.includes(tag);
//                 });

//                 return (placeProdType === 'allProducts') ||
//                        (placeProdType === 'specificProducts' && productIds) ||
//                        (placeProdType === 'specificCollections' && collectionIdsMatch) ||
//                        (placeProdType === 'specificTags' && tagsMatch);
//             });
//         });

//         console.log("Filtered badges:", filteredBadges);

//         // Clear existing badges
//         const productForm = document.querySelector('.product-form');
//         if (productForm) {
//             // Remove only the badge containers, not the entire content
//             const badgeContainers = productForm.querySelectorAll('.badge-container');
//             badgeContainers.forEach(container => container.remove());
//         }

//         // Display the filtered badges
//         if (filteredBadges.length > 0) {
//             filteredBadges.forEach(badge => {
//                 const badgePages = badge.badge_pages;
//                 const productForm = document.querySelector('.product-form');

//                 if (productForm) {
//                     const badgeContainer = createBadgeContainer(badge);
//                     badgeContainer.classList.add('badge-container'); // Add a class for easy removal later
//                     productForm.appendChild(badgeContainer);

//                     if (badgePages && badgePages.length > 0) {
//                         badgePages.forEach(page => {
//                             const containerDiv = createIconBlock(badge, page);
//                             badgeContainer.appendChild(containerDiv);

//                             if (badge.badge_type.includes('icon-block') || badge.badge_type.includes('payment-icons')) {
//                                 renderIconsBlock(badgeContainer, page);
//                             }
//                         });
//                     }
//                 }
//             });
//         } else {
//             // alert('No published badges found for the current product.');
//         }
//     }

//     // Function to create the badge container
//     function createBadgeContainer(badge) {
//         const badgeContainer = document.createElement('div');
//         badgeContainer.classList.add('badge-container');

//         // Badge Type
//         const badgeType = document.createElement('p');
//         badgeType.classList.add('badge-type');
//         badgeType.innerText = `Badge Type: ${badge.badge_type || 'No Type'}`;
//         badgeContainer.appendChild(badgeType);

//         return badgeContainer;
//     }

//     // Function to create the main container div for icons
//     function createIconBlock(badge, page) {
//         const containerDiv = document.createElement('div');
//         containerDiv.classList.add('container-div');

//         // Create the icon container div
//         const iconContainer = document.createElement('div');
//         iconContainer.classList.add('icon-container');
//         iconContainer.innerHTML = page.icon_svg;
//         containerDiv.appendChild(iconContainer);

//         // Create the text container div
//         const textContainer = createTextContainer(page);
//         containerDiv.appendChild(textContainer);

//         // Create the CTA button
//         const ctaButton = createCtaButton(page);
//         containerDiv.appendChild(ctaButton);

//         return containerDiv;
//     }

//     // Function to create the text container
//     function createTextContainer(page) {
//         const textContainer = document.createElement('div');
//         textContainer.classList.add('text-container');
//         textContainer.id = 'text_container';

//         // Create the title span
//         const title = document.createElement('span');
//         title.classList.add('title');
//         title.innerText = page.title || 'No Title';

//         // Create the subheading span
//         const subheading = document.createElement('span');
//         subheading.classList.add('subheading');
//         subheading.innerText = page.subheading || 'No Subheading';

//         // Append the title and subheading to the text container
//         textContainer.appendChild(title);
//         textContainer.appendChild(subheading);

//         return textContainer;
//     }

//     // Function to create the CTA button
//     function createCtaButton(page) {
//         const ctaButton = document.createElement('a');
//         ctaButton.classList.add('cta-button');
//         ctaButton.href = '#';
//         ctaButton.target = '_blank';
//         ctaButton.innerText = page.button_text || 'Shop Now';

//         return ctaButton;
//     }

//     // Function to render icons block for 'icon-block' or 'payment-icons' types
//     function renderIconsBlock(container, page) {
//         if (!page.badge_pages) {
//             console.error('Badge pages are undefined');
//             return;
//         }

//         const containerDiv = document.createElement('div');
//         containerDiv.classList.add('icons-block');

//         page.badge_pages.forEach(badge => {
//             const badgeContainer = document.createElement('div');
//             badgeContainer.classList.add('badge-icon-container');

//             const icon = document.createElement('img');
//             icon.src = badge.icon_svg;
//             icon.classList.add('badge-icon');
//             badgeContainer.appendChild(icon);

//             const title = document.createElement('h3');
//             title.classList.add('badge-title');
//             title.innerText = badge.title || 'No Title';
//             badgeContainer.appendChild(title);

//             const subheading = document.createElement('p');
//             subheading.classList.add('badge-subheading');
//             subheading.innerText = badge.subheading || 'No Subheading';
//             badgeContainer.appendChild(subheading);

//             const button = document.createElement('a');
//             button.classList.add('badge-cta-button');
//             button.innerText = 'Shop now';
//             button.href = '#';
//             badgeContainer.appendChild(button);

//             containerDiv.appendChild(badgeContainer);
//         });

//         container.appendChild(containerDiv);
//     }

//     // Call the function to fetch and process badges
//     fetchPublishedBadges().then(data => {
//         filterAndDisplayBadges(data);
//     });

//     // Log the collected product and collection IDs
//     console.log("Product IDs database:", prodIds);
//     console.log("Collection IDs database:", collIds);
//     console.log("Placement Product Types database:", placeProdTypes);
// });

// // Add CSS styles dynamically
// const style = document.createElement('style');
// style.innerHTML = `
// .badge-container {
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
 
// }

// .container-div {
//     width: 100%;
//     padding: 16px;
//     text-align: center;
//     border-radius: 8px;
//     position: relative;
//     margin-top: 20px;
//     margin-bottom: 20px;
//     background: rgb(255, 255, 255);
// }

// .container-div:only-child {
//     grid-column: 1 / -1;
// }

//     .icon-container {
//         /* Add any specific styles for the icon container if needed */
//     }
//     .text-container {
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//             align-items: center;

//         flex: 1;
//         gap: 5px;
//             padding: 8px;
//     }
//     .title {
//         display: block;
//         font-weight: 600;
//         font-size: 16px;
//         color: #202223;
//         margin: 0;
//         line-height: 1;
//         word-wrap: break-word;
//         max-width: 100%;
//     }
//     .subheading {
//         display: block;
//         font-size: 14px;
//         color: #96a4b6;
//         font-weight: 400;
//         margin: 0;
//         text-align: left;
//         line-height: 1;
//         word-wrap: break-word;
//         max-width: 100%;
//     }
//     .cta-button {
//         text-decoration: none;
//         flex-shrink: 0;
//         margin: 0;
//         border: none;
//         font-weight: 600;
//         padding: 10px 16px;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         font-size: 14px;
//         background-color: #202223;
//         color: #fafafa;
//         border-radius: 4px;
//         cursor: pointer;
//         transition: background-color 0.2s ease-in-out;
//     }
//     .icons-block {
//         width: 100%;
//         padding: 20px;
//         background-color: #f7f7f7;
//         border-radius: 10px;
//         display: flex;
//         justify-content: space-around;
//         align-items: center;
//         margin: 20px 0;
//         box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//     }
//     .badge-icon-container {
//         text-align: center;
//     }
//     .badge-icon {
//         width: 50px;
//         margin-bottom: 10px;
//     }
//     .badge-title {
//         font-size: 16px;
//         font-weight: bold;
//         margin: 0;
//     }
//     .badge-subheading {
//         font-size: 14px;
//         color: #96a4b6;
//         margin: 0;
//     }
//     .badge-cta-button {
//         font-size: 14px;
//         background-color: #202223;
//         color: #fafafa;
//         border-radius: 4px;
//         cursor: pointer;
//         transition: background-color 0.2s ease-in-out;
//     }
// `;
// document.head.appendChild(style);



document.addEventListener("DOMContentLoaded", function () {

    var prodIds = [];
    var collIds = [];
    var placeProdTypes = [];

    // Function to fetch published badges
    function fetchPublishedBadges() {
        return fetch(`${APP_URL}api/front-end/badges/published`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log("Fetched data:", data); // Log the fetched data
                if (data && data.length > 0) {
                    data.forEach(badge => {
                        const badgePages = badge.badge_pages; // Ensure correct property name
                        console.log("Badge pages:", badgePages); // Log the badge pages

                        // Create badge container
                        const badgeContainer = createBadgeContainer(badge);

                        // Loop through each page and display additional fields
                        if (badgePages && badgePages.length > 0) {
                            badgePages.forEach(page => {
                                console.log("Processing page:", page); // Log each page

                                // Create the main container div
                                const containerDiv = createIconBlock(badge, page);

                                // Append the container to the badge container
                                badgeContainer.appendChild(containerDiv);
                            });
                        } else {
                            console.log("No badge pages found for badge:", badge); // Log if no badge pages
                        }

                    });
                } else {
                    console.log("No published badges found."); // Log if no badges are found
                    // alert('No published badges found.');
                }

                // Return the fetched data for further processing
                return data;
            })
            .catch(error => {
                console.error('Error fetching badge data:', error);
                // alert('Error fetching badge data: ' + error.message);
            });
    }

    // Function to get the current product ID
    function getProductId() {
        const productElement = document.querySelector('[data-product-id]');
        return productElement ? productElement.getAttribute('data-product-id') : null;
    }

    // Function to fetch collections for the given product ID
    async function fetchCollectionsForProduct(productId) {
        // Ensure APP_URL and SHOP_URL are properly defined globally
        const endpoint = `${APP_URL}api/getProductCollectionId/${productId}?shop=${SHOP_URL}`;

        try {
            const response = await fetch(endpoint);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const collectionIds = await response.json();
            console.log("Collection IDs:", collectionIds);
            return collectionIds;
        } catch (error) {
            console.error('Failed to fetch collections:', error);
            return [];
        }
    }

    // Function to filter and display badges based on product ID and placement type
    async function filterAndDisplayBadges(data) {
        const productId = getProductId();
        console.log("Current product ID:", productId);

        // Fetch collections for the product
        const collectionIds = await fetchCollectionsForProduct(productId);

        // Fetch tags for the product
        const tags = document.querySelector('[data-product-tags]')?.getAttribute('data-product-tags') || '';
        const productTags = tags.split(',').map(tag => tag.trim());
        console.log("Product Tags:", productTags);

        // Filter badges based on product ID, collection IDs, and tags
        const filteredBadges = data.filter(badge => {
            const badgePages = badge.badge_pages;
            return badgePages.some(page => {
                const placeProdType = page.placement_product_type;
                const productIds = prodIds.includes(productId);
                const collectionIdsMatch = collectionIds.some(collectionId => collIds.includes(collectionId));
                const tagsMatch = productTags.some(tag => {
                    const pageTags = page.placement_tags_json ? page.placement_tags_json.split(',').map(tag => tag.trim()) : [];
                    return pageTags.includes(tag);
                });

                return (placeProdType === 'allProducts') ||
                       (placeProdType === 'specificProducts' && productIds) ||
                       (placeProdType === 'specificCollections' && collectionIdsMatch) ||
                       (placeProdType === 'specificTags' && tagsMatch);
            });
        });

        console.log("Filtered badges:", filteredBadges);

        // Clear existing badges
        const productForm = document.querySelector('.product-form');
        if (productForm) {
            // Remove only the badge containers, not the entire content
            const badgeContainers = productForm.querySelectorAll('.badge-container, .badge-container1');
            badgeContainers.forEach(container => container.remove());
        }

        // Display the filtered badges
        if (filteredBadges.length > 0) {
            filteredBadges.forEach(badge => {
                const badgePages = badge.badge_pages;
                const productForm = document.querySelector('.product-form');

                if (productForm) {
                    const badgeContainer = createBadgeContainer(badge);
                    productForm.appendChild(badgeContainer);

                    if (badgePages && badgePages.length > 0) {
                        badgePages.forEach(page => {
                            const containerDiv = createIconBlock(badge, page);
                            badgeContainer.appendChild(containerDiv);

                            if (badge.badge_type.includes('icon-block') || badge.badge_type.includes('payment-icons')) {
                                renderIconsBlock(badgeContainer, page);
                            }
                        });
                    }
                }
            });
        } else {
            // alert('No published badges found for the current product.');
        }
    }

    // Function to create the badge container
    function createBadgeContainer(badge) {
        const badgeContainer = document.createElement('div');
        if (badge.badge_type.includes('icon-block') || badge.badge_type.includes('payment-icons')) {
            badgeContainer.classList.add('badge-container');
        } else {
            badgeContainer.classList.add('badge-container1');
        }

        return badgeContainer;
    }

    // Function to create the main container div for icons
    function createIconBlock(badge, page) {
        const containerDiv = document.createElement('div');
        if (badge.badge_type.includes('icon-block') || badge.badge_type.includes('payment-icons')) {
            containerDiv.classList.add('container-div');
        } else {
            containerDiv.classList.add('container-div1');
        }

        // Create the icon container div
        const iconContainer = document.createElement('div');
        iconContainer.classList.add('icon-container');
        iconContainer.innerHTML = page.icon_svg;
        containerDiv.appendChild(iconContainer);

        // Create the text container div
        const textContainer = createTextContainer(page);
        containerDiv.appendChild(textContainer);

        // Create the CTA button
        const ctaButton = createCtaButton(page);
        containerDiv.appendChild(ctaButton);

        return containerDiv;
    }

    // Function to create the text container
    function createTextContainer(page) {
        const textContainer = document.createElement('div');
        textContainer.classList.add('text-container');
        textContainer.id = 'text_container';

        // Create the title span
        const title = document.createElement('span');
        title.classList.add('title');
        title.innerText = page.title || 'No Title';

        // Create the subheading span
        const subheading = document.createElement('span');
        subheading.classList.add('subheading');
        subheading.innerText = page.subheading || 'No Subheading';

        // Append the title and subheading to the text container
        textContainer.appendChild(title);
        textContainer.appendChild(subheading);

        return textContainer;
    }

    // Function to create the CTA button
    function createCtaButton(page) {
        const ctaButton = document.createElement('a');
        ctaButton.classList.add('cta-button');
        ctaButton.href = '#';
        ctaButton.target = '_blank';
        ctaButton.innerText = page.button_text || 'Shop Now';

        return ctaButton;
    }

    // Function to render icons block for 'icon-block' or 'payment-icons' types
    function renderIconsBlock(container, page) {
        if (!page.badge_pages) {
            console.error('Badge pages are undefined');
            return;
        }

        const containerDiv = document.createElement('div');
        containerDiv.classList.add('icons-block');

        page.badge_pages.forEach(badge => {
            const badgeContainer = document.createElement('div');
            badgeContainer.classList.add('badge-icon-container');

            const icon = document.createElement('img');
            icon.src = badge.icon_svg;
            icon.classList.add('badge-icon');
            badgeContainer.appendChild(icon);

            const title = document.createElement('h3');
            title.classList.add('badge-title');
            title.innerText = badge.title || 'No Title';
            badgeContainer.appendChild(title);

            const subheading = document.createElement('p');
            subheading.classList.add('badge-subheading');
            subheading.innerText = badge.subheading || 'No Subheading';
            badgeContainer.appendChild(subheading);

            const button = document.createElement('a');
            button.classList.add('badge-cta-button');
            button.innerText = 'Shop now';
            button.href = '#';
            badgeContainer.appendChild(button);

            containerDiv.appendChild(badgeContainer);
        });

        container.appendChild(containerDiv);
    }

    // Call the function to fetch and process badges
    fetchPublishedBadges().then(data => {
        filterAndDisplayBadges(data);
    });

    // Log the collected product and collection IDs
    console.log("Product IDs database:", prodIds);
    console.log("Collection IDs database:", collIds);
    console.log("Placement Product Types database:", placeProdTypes);
});

// Add CSS styles dynamically
const style = document.createElement('style');
style.innerHTML = `
.badge-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}

.container-div {
    width: 100%;
    padding: 16px;
    text-align: center;
    border-radius: 8px;
    position: relative;
    margin-top: 20px;
    margin-bottom: 20px;
    background: rgb(255, 255, 255);
}

.badge-container1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.container-div1 {
    width: 100%;
    padding: 10px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    position: relative;
    margin-top: 20px;
    margin-bottom: 20px;
    background: rgb(255, 255, 255);
}

.container-div:only-child, .container-div1:only-child {
    grid-column: 1 / -1;
}

.icon-container {
    /* Add any specific styles for the icon container if needed */
}
.text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    gap: 5px;
    padding: 8px;
}
.title {
    display: block;
    font-weight: 600;
    font-size: 16px;
    color: #202223;
    margin: 0;
    line-height: 1;
    word-wrap: break-word;
    max-width: 100%;
}
.subheading {
    display: block;
    font-size: 14px;
    color: #96a4b6;
    font-weight: 400;
    margin: 0;
    text-align: left;
    line-height: 1;
    word-wrap: break-word;
    max-width: 100%;
}
.cta-button {
    text-decoration: none;
    flex-shrink: 0;
    margin: 0;
    border: none;
    font-weight: 600;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    background-color: #202223;
    color: #fafafa;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
}
.icons-block {
    width: 100%;
    padding: 20px;
    background-color: #f7f7f7;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 20px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.badge-icon-container {
    text-align: center;
}
.badge-icon {
    width: 50px;
    margin-bottom: 10px;
}
.badge-title {
    font-size: 16px;
    font-weight: bold;
    margin: 0;
}
.badge-subheading {
    font-size: 14px;
    color: #96a4b6;
    margin: 0;
}
.badge-cta-button {
    font-size: 14px;
    background-color: #202223;
    color: #fafafa;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
}
`;
document.head.appendChild(style);







// document.addEventListener("DOMContentLoaded", function () {

//     var prodIds = [];
//     var collIds = [];
//     var placeProdTypes = [];

//     // Function to fetch published badges
//     function fetchPublishedBadges() {
//         return fetch(`${APP_URL}api/front-end/badges/published`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok: ' + response.statusText);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log("Fetched data:", data); // Log the fetched data
//                 if (data && data.length > 0) {
//                     data.forEach(badge => {
//                         const badgePages = badge.badge_pages; // Ensure correct property name
//                         console.log("Badge pages:", badgePages); // Log the badge pages

//                         // Create badge container
//                         const badgeContainer = document.createElement('div');
//                         badgeContainer.style.marginBottom = '40px';

//                         // Badge Type
//                         const badgeType = document.createElement('p');
//                         badgeType.innerText = `Badge Type: ${badge.badge_type || 'No Type'}`;
//                         badgeContainer.appendChild(badgeType);

//                         // Loop through each page and display additional fields
//                         if (badgePages && badgePages.length > 0) {
//                             badgePages.forEach(page => {
//                                 console.log("Processing page:", page); // Log each page

//                                 // Create the main container div
//                                 const containerDiv = document.createElement('div');
//                                 containerDiv.style.width = '100%';
//                                 containerDiv.style.padding = '16px';
//                                 containerDiv.style.border = '1px solid rgb(197, 200, 209)';
//                                 containerDiv.style.borderRadius = '8px';
//                                 containerDiv.style.display = 'flex';
//                                 containerDiv.style.justifyContent = 'space-between';
//                                 containerDiv.style.alignItems = 'center';
//                                 containerDiv.style.gap = '10px';
//                                 containerDiv.style.position = 'relative';
//                                 containerDiv.style.marginTop = '20px';
//                                 containerDiv.style.marginBottom = '20px';
//                                 containerDiv.style.background = 'rgb(255, 255, 255)';

//                                 // Create the icon container div
//                                 const iconContainer = document.createElement('div');
//                                 iconContainer.innerHTML = page.icon_svg;  // Inject the SVG string as HTML
//                                 containerDiv.appendChild(iconContainer);

//                                 // Create the text container div
//                                 const textContainer = document.createElement('div');
//                                 textContainer.id = 'text_container';
//                                 textContainer.style.display = 'flex';
//                                 textContainer.style.flexDirection = 'column';
//                                 textContainer.style.justifyContent = 'flex-start';
//                                 textContainer.style.alignItems = 'flex-start';
//                                 textContainer.style.flex = '1';
//                                 textContainer.style.gap = '2px';

//                                 // Create the title span
//                                 const title = document.createElement('span');
//                                 title.id = 'title';
//                                 title.style.display = 'block';
//                                 title.style.fontWeight = '600';
//                                 title.style.fontSize = '16px';
//                                 title.style.color = '#202223';
//                                 title.style.margin = '0';
//                                 title.style.lineHeight = '1';
//                                 title.style.wordWrap = 'break-word';
//                                 title.style.maxWidth = '100%';
//                                 title.innerText = page.title || 'No Title';

//                                 // Create the subheading span
//                                 const subheading = document.createElement('span');
//                                 subheading.id = 'subheading';
//                                 subheading.style.display = 'block';
//                                 subheading.style.fontSize = '14px';
//                                 subheading.style.color = '#96a4b6';
//                                 subheading.style.fontWeight = '400';
//                                 subheading.style.margin = '0';
//                                 subheading.style.textAlign = 'left';
//                                 subheading.style.lineHeight = '1';
//                                 subheading.style.wordWrap = 'break-word';
//                                 subheading.style.maxWidth = '100%';
//                                 subheading.innerText = page.subheading || 'No Subheading';

//                                 // Append the title and subheading to the text container
//                                 textContainer.appendChild(title);
//                                 textContainer.appendChild(subheading);

//                                 // Function to unescape and parse JSON
//                                 function parseJson(jsonString) {
//                                     try {
//                                         // First, unescape the string twice and remove the outer quotes
//                                         let unescapedJson = jsonString.replace(/\\"/g, '"').replace(/\\"/g, '"');
//                                         unescapedJson = unescapedJson.slice(1, -1); // Remove the outer quotes

//                                         // Now try to parse the unescaped JSON
//                                         return JSON.parse(unescapedJson);
//                                     } catch (error) {
//                                         console.error('Error parsing JSON:', error); // Log the error for debugging
//                                         return null;
//                                     }
//                                 }

//                                 // Check if the product data exists
//                                 if (page.placement_product_json) {
//                                     const productData = parseJson(page.placement_product_json);
//                                     if (productData) {
//                                         // Extract product IDs (if available)
//                                         const productIds = productData.map(product => product.id.split('/').pop());
//                                         prodIds.push(...productIds);

//                                         // Log the IDs or a fallback message if no IDs exist
//                                         console.log(`From Placement Product JSON ID(s): ${productIds.join(', ') || 'No ID'}`);
//                                     } else {
//                                         console.log('Error parsing JSON: Invalid format');
//                                     }
//                                 } else {
//                                     console.log('From Placement Product JSON ID: No data available');
//                                 }

//                                 // Check if the collection data exists
//                                 if (page.placement_collection_json) {
//                                     const collectionData = parseJson(page.placement_collection_json);
//                                     if (collectionData) {
//                                         // Extract collection IDs (if available)
//                                         const collectionIds = collectionData.map(collection => collection.id.split('/').pop());
//                                         collIds.push(...collectionIds);

//                                         // Log the IDs or a fallback message if no IDs exist
//                                         console.log(`From Placement Collection JSON ID(s): ${collectionIds.join(', ') || 'No ID'}`);
//                                     } else {
//                                         console.log('Error parsing JSON: Invalid format');
//                                     }
//                                 } else {
//                                     console.log('From Placement Collection JSON ID: No data available');
//                                 }

//                                 // Log the placement product type
//                                 const placeProdType = page.placement_product_type || 'No Type';
//                                 placeProdTypes.push(placeProdType);
//                                 console.log(`Placement Product Type: ${placeProdType}`);

//                                 // Create the CTA button
//                                 const ctaButton = document.createElement('a');
//                                 ctaButton.href = '#';
//                                 ctaButton.id = 'cta-button';
//                                 ctaButton.target = '_blank';
//                                 ctaButton.style.textDecoration = 'none';
//                                 ctaButton.style.flexShrink = '0';
//                                 ctaButton.style.margin = '0';
//                                 ctaButton.style.border = 'none';
//                                 ctaButton.style.fontWeight = '600';
//                                 ctaButton.style.padding = '10px 16px';
//                                 ctaButton.style.display = 'flex';
//                                 ctaButton.style.alignItems = 'center';
//                                 ctaButton.style.justifyContent = 'center';
//                                 ctaButton.style.fontSize = '14px';
//                                 ctaButton.style.backgroundColor = '#202223';
//                                 ctaButton.style.color = '#fafafa';
//                                 ctaButton.style.borderRadius = '4px';
//                                 ctaButton.style.cursor = 'pointer';
//                                 ctaButton.style.transition = 'background-color 0.2s ease-in-out';
//                                 ctaButton.innerText = page.button_text || 'Shop Now';

//                                 // Append the icon container, text container, and CTA button to the main container
//                                 containerDiv.appendChild(iconContainer);
//                                 containerDiv.appendChild(textContainer);
//                                 containerDiv.appendChild(ctaButton);

//                                 // Append the container to the badge container
//                                 badgeContainer.appendChild(containerDiv);
//                             });
//                         } else {
//                             console.log("No badge pages found for badge:", badge); // Log if no badge pages
//                         }

//                     });
//                 } else {
//                     console.log("No published badges found."); // Log if no badges are found
//                     // alert('No published badges found.');
//                 }

//                 // Return the fetched data for further processing
//                 return data;
//             })
//             .catch(error => {
//                 console.error('Error fetching badge data:', error);
//                 // alert('Error fetching badge data: ' + error.message);
//             });
//     }

//     // Function to get the current product ID
//     function getProductId() {
//         const productElement = document.querySelector('[data-product-id]');
//         return productElement ? productElement.getAttribute('data-product-id') : null;
//     }

//     // Function to fetch collections for the given product ID
//     async function fetchCollectionsForProduct(productId) {
//         // Ensure APP_URL and SHOP_URL are properly defined globally
//         const endpoint = `${APP_URL}api/getProductCollectionId/${productId}?shop=${SHOP_URL}`;

//         try {
//             const response = await fetch(endpoint);
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const collectionIds = await response.json();
//             console.log("Collection IDs:", collectionIds);
//             return collectionIds;
//         } catch (error) {
//             console.error('Failed to fetch collections:', error);
//             return [];
//         }
//     }

//     // Function to filter and display badges based on product ID and placement type
//     async function filterAndDisplayBadges(data) {
//         const productId = getProductId();
//         console.log("Current product ID:", productId);

//         // Fetch collections for the product
//         const collectionIds = await fetchCollectionsForProduct(productId);

//         // Fetch tags for the product
//         const tags = document.querySelector('[data-product-tags]')?.getAttribute('data-product-tags') || '';
//         const productTags = tags.split(',').map(tag => tag.trim());
//         console.log("Product Tags:", productTags);

//         // Filter badges based on product ID, collection IDs, and tags
//         const filteredBadges = data.filter(badge => {
//             const badgePages = badge.badge_pages;
//             return badgePages.some(page => {
//                 const placeProdType = page.placement_product_type;
//                 const productIds = prodIds.includes(productId);
//                 const collectionIdsMatch = collectionIds.some(collectionId => collIds.includes(collectionId));
//                 const tagsMatch = productTags.some(tag => {
//                     const pageTags = page.placement_tags_json ? page.placement_tags_json.split(',').map(tag => tag.trim()) : [];
//                     return pageTags.includes(tag);
//                 });

//                 return (placeProdType === 'allProducts') ||
//                        (placeProdType === 'specificProducts' && productIds) ||
//                        (placeProdType === 'specificCollections' && collectionIdsMatch) ||
//                        (placeProdType === 'specificTags' && tagsMatch);
//             });
//         });

//         console.log("Filtered badges:", filteredBadges);

//         // Clear existing badges
//         const productForm = document.querySelector('.product-form');
//         if (productForm) {
//             // Remove only the badge containers, not the entire content
//             const badgeContainers = productForm.querySelectorAll('.badge-container');
//             badgeContainers.forEach(container => container.remove());
//         }

//         // Display the filtered badges
//         if (filteredBadges.length > 0) {
//             filteredBadges.forEach(badge => {
//                 const badgePages = badge.badge_pages;
//                 const productForm = document.querySelector('.product-form');

//                 if (productForm) {
//                     const badgeContainer = createBadgeContainer(badge);
//                     badgeContainer.classList.add('badge-container'); // Add a class for easy removal later
//                     productForm.appendChild(badgeContainer);

//                     if (badgePages && badgePages.length > 0) {
//                         badgePages.forEach(page => {
//                             const containerDiv = createIconBlock(badge, page);
//                             badgeContainer.appendChild(containerDiv);

//                             if (badge.badge_type.includes('icon-block') || badge.badge_type.includes('payment-icons')) {
//                                 renderIconsBlock(badgeContainer, page);
//                             }
//                         });
//                     }
//                 }
//             });
//         } else {
//             // alert('No published badges found for the current product.');
//         }
//     }

//     // Function to create the badge container
//     function createBadgeContainer(badge) {
//         const badgeContainer = document.createElement('div');
//         badgeContainer.style.marginBottom = '40px';

//         // Badge Type
//         const badgeType = document.createElement('p');
//         badgeType.innerText = `Badge Type: ${badge.badge_type || 'No Type'}`;
//         badgeContainer.appendChild(badgeType);

//         return badgeContainer;
//     }

//     // Function to create the main container div for icons
//     function createIconBlock(badge, page) {
//         const containerDiv = document.createElement('div');
//         containerDiv.style.width = '100%';
//         containerDiv.style.padding = '16px';
//         containerDiv.style.border = '1px solid rgb(197, 200, 209)';
//         containerDiv.style.borderRadius = '8px';
//         containerDiv.style.display = 'flex';
//         containerDiv.style.justifyContent = 'space-between';
//         containerDiv.style.alignItems = 'center';
//         containerDiv.style.gap = '10px';
//         containerDiv.style.position = 'relative';
//         containerDiv.style.marginTop = '20px';
//         containerDiv.style.marginBottom = '20px';
//         containerDiv.style.background = 'rgb(255, 255, 255)';

//         const iconContainer = document.createElement('div');
//         iconContainer.innerHTML = page.icon_svg;
//         containerDiv.appendChild(iconContainer);

//         const textContainer = createTextContainer(page);
//         containerDiv.appendChild(textContainer);

//         const ctaButton = createCtaButton(page);
//         containerDiv.appendChild(ctaButton);

//         return containerDiv;
//     }

//     // Function to create the text container
//     function createTextContainer(page) {
//         const textContainer = document.createElement('div');
//         textContainer.id = 'text_container';
//         textContainer.style.display = 'flex';
//         textContainer.style.flexDirection = 'column';
//         textContainer.style.justifyContent = 'flex-start';
//         textContainer.style.alignItems = 'flex-start';
//         textContainer.style.flex = '1';
//         textContainer.style.gap = '2px';

//         const title = document.createElement('span');
//         title.id = 'title';
//         title.style.display = 'block';
//         title.style.fontWeight = '600';
//         title.style.fontSize = '16px';
//         title.style.color = '#202223';
//         title.style.margin = '0';
//         title.style.lineHeight = '1';
//         title.style.wordWrap = 'break-word';
//         title.style.maxWidth = '100%';
//         title.innerText = page.title || 'No Title';

//         const subheading = document.createElement('span');
//         subheading.id = 'subheading';
//         subheading.style.display = 'block';
//         subheading.style.fontSize = '14px';
//         subheading.style.color = '#96a4b6';
//         subheading.style.fontWeight = '400';
//         subheading.style.margin = '0';
//         subheading.style.textAlign = 'left';
//         subheading.style.lineHeight = '1';
//         subheading.style.wordWrap = 'break-word';
//         subheading.style.maxWidth = '100%';
//         subheading.innerText = page.subheading || 'No Subheading';

//         textContainer.appendChild(title);
//         textContainer.appendChild(subheading);

//         return textContainer;
//     }

//     // Function to create the CTA button
//     function createCtaButton(page) {
//         const ctaButton = document.createElement('a');
//         ctaButton.href = '#';
//         ctaButton.id = 'cta-button';
//         ctaButton.target = '_blank';
//         ctaButton.style.textDecoration = 'none';
//         ctaButton.style.flexShrink = '0';
//         ctaButton.style.margin = '0';
//         ctaButton.style.border = 'none';
//         ctaButton.style.fontWeight = '600';
//         ctaButton.style.padding = '10px 16px';
//         ctaButton.style.display = 'flex';
//         ctaButton.style.alignItems = 'center';
//         ctaButton.style.justifyContent = 'center';
//         ctaButton.style.fontSize = '14px';
//         ctaButton.style.backgroundColor = '#202223';
//         ctaButton.style.color = '#fafafa';
//         ctaButton.style.borderRadius = '4px';
//         ctaButton.style.cursor = 'pointer';
//         ctaButton.style.transition = 'background-color 0.2s ease-in-out';
//         ctaButton.innerText = page.button_text || 'Shop Now';

//         return ctaButton;
//     }

//     // Function to render icons block for 'icon-block' or 'payment-icons' types
//     function renderIconsBlock(container, page) {
//         const containerDiv = document.createElement('div');
//         containerDiv.style.width = '100%';
//         containerDiv.style.padding = '20px';
//         containerDiv.style.backgroundColor = '#f7f7f7';
//         containerDiv.style.borderRadius = '10px';
//         containerDiv.style.display = 'flex';
//         containerDiv.style.justifyContent = 'space-around';
//         containerDiv.style.alignItems = 'center';
//         containerDiv.style.margin = '20px 0';
//         containerDiv.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

//         page.badge_pages.forEach(badge => {
//             const badgeContainer = document.createElement('div');
//             badgeContainer.style.textAlign = 'center';

//             const icon = document.createElement('img');
//             icon.src = badge.icon_svg;
//             icon.style.width = '50px';
//             icon.style.marginBottom = '10px';
//             badgeContainer.appendChild(icon);

//             const title = document.createElement('h3');
//             title.innerText = badge.title || 'No Title';
//             badgeContainer.appendChild(title);

//             const subheading = document.createElement('p');
//             subheading.innerText = badge.subheading || 'No Subheading';
//             badgeContainer.appendChild(subheading);

//             const button = document.createElement('a');
//             button.innerText = 'Shop now';
//             button.href = '#';
//             badgeContainer.appendChild(button);

//             containerDiv.appendChild(badgeContainer);
//         });

//         container.appendChild(containerDiv);
//     }

//     // Call the function to fetch and process badges
//     fetchPublishedBadges().then(data => {
//         filterAndDisplayBadges(data);
//     });

//     // Log the collected product and collection IDs
//     console.log("Product IDs database:", prodIds);
//     console.log("Collection IDs database:", collIds);
//     console.log("Placement Product Types database:", placeProdTypes);
// });





// document.addEventListener("DOMContentLoaded", function () {

//     var prodIds = [];
//     var collIds = [];
//     var placeProdTypes = [];

//     // Function to fetch published badges
//     function fetchPublishedBadges() {
//         return fetch(`${APP_URL}api/front-end/badges/published`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok: ' + response.statusText);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log("Fetched data:", data); // Log the fetched data
//                 if (data && data.length > 0) {
//                     data.forEach(badge => {
//                         const badgePages = badge.badge_pages; // Ensure correct property name
//                         console.log("Badge pages:", badgePages); // Log the badge pages

//                         // Create badge container
//                         const badgeContainer = document.createElement('div');
//                         badgeContainer.style.marginBottom = '40px';

//                         // Badge Type
//                         const badgeType = document.createElement('p');
//                         badgeType.innerText = `Badge Type: ${badge.badge_type || 'No Type'}`;
//                         badgeContainer.appendChild(badgeType);

//                         // Loop through each page and display additional fields
//                         if (badgePages && badgePages.length > 0) {
//                             badgePages.forEach(page => {
//                                 console.log("Processing page:", page); // Log each page

//                                 // Create the main container div
//                                 const containerDiv = document.createElement('div');
//                                 containerDiv.style.width = '100%';
//                                 containerDiv.style.padding = '16px';
//                                 containerDiv.style.border = '1px solid rgb(197, 200, 209)';
//                                 containerDiv.style.borderRadius = '8px';
//                                 containerDiv.style.display = 'flex';
//                                 containerDiv.style.justifyContent = 'space-between';
//                                 containerDiv.style.alignItems = 'center';
//                                 containerDiv.style.gap = '10px';
//                                 containerDiv.style.position = 'relative';
//                                 containerDiv.style.marginTop = '20px';
//                                 containerDiv.style.marginBottom = '20px';
//                                 containerDiv.style.background = 'rgb(255, 255, 255)';

//                                 // Create the icon container div
//                                 const iconContainer = document.createElement('div');
//                                 iconContainer.innerHTML = page.icon_svg;  // Inject the SVG string as HTML
//                                 containerDiv.appendChild(iconContainer);

//                                 // Create the text container div
//                                 const textContainer = document.createElement('div');
//                                 textContainer.id = 'text_container';
//                                 textContainer.style.display = 'flex';
//                                 textContainer.style.flexDirection = 'column';
//                                 textContainer.style.justifyContent = 'flex-start';
//                                 textContainer.style.alignItems = 'flex-start';
//                                 textContainer.style.flex = '1';
//                                 textContainer.style.gap = '2px';

//                                 // Create the title span
//                                 const title = document.createElement('span');
//                                 title.id = 'title';
//                                 title.style.display = 'block';
//                                 title.style.fontWeight = '600';
//                                 title.style.fontSize = '16px';
//                                 title.style.color = '#202223';
//                                 title.style.margin = '0';
//                                 title.style.lineHeight = '1';
//                                 title.style.wordWrap = 'break-word';
//                                 title.style.maxWidth = '100%';
//                                 title.innerText = page.title || 'No Title';

//                                 // Create the subheading span
//                                 const subheading = document.createElement('span');
//                                 subheading.id = 'subheading';
//                                 subheading.style.display = 'block';
//                                 subheading.style.fontSize = '14px';
//                                 subheading.style.color = '#96a4b6';
//                                 subheading.style.fontWeight = '400';
//                                 subheading.style.margin = '0';
//                                 subheading.style.textAlign = 'left';
//                                 subheading.style.lineHeight = '1';
//                                 subheading.style.wordWrap = 'break-word';
//                                 subheading.style.maxWidth = '100%';
//                                 subheading.innerText = page.subheading || 'No Subheading';

//                                 // Append the title and subheading to the text container
//                                 textContainer.appendChild(title);
//                                 textContainer.appendChild(subheading);

//                                 // Function to unescape and parse JSON
//                                 function parseJson(jsonString) {
//                                     try {
//                                         // First, unescape the string twice and remove the outer quotes
//                                         let unescapedJson = jsonString.replace(/\\"/g, '"').replace(/\\"/g, '"');
//                                         unescapedJson = unescapedJson.slice(1, -1); // Remove the outer quotes

//                                         // Now try to parse the unescaped JSON
//                                         return JSON.parse(unescapedJson);
//                                     } catch (error) {
//                                         console.error('Error parsing JSON:', error); // Log the error for debugging
//                                         return null;
//                                     }
//                                 }

//                                 // Check if the product data exists
//                                 if (page.placement_product_json) {
//                                     const productData = parseJson(page.placement_product_json);
//                                     if (productData) {
//                                         // Extract product IDs (if available)
//                                         const productIds = productData.map(product => product.id.split('/').pop());
//                                         prodIds.push(...productIds);

//                                         // Log the IDs or a fallback message if no IDs exist
//                                         console.log(`From Placement Product JSON ID(s): ${productIds.join(', ') || 'No ID'}`);
//                                     } else {
//                                         console.log('Error parsing JSON: Invalid format');
//                                     }
//                                 } else {
//                                     console.log('From Placement Product JSON ID: No data available');
//                                 }

//                                 // Check if the collection data exists
//                                 if (page.placement_collection_json) {
//                                     const collectionData = parseJson(page.placement_collection_json);
//                                     if (collectionData) {
//                                         // Extract collection IDs (if available)
//                                         const collectionIds = collectionData.map(collection => collection.id.split('/').pop());
//                                         collIds.push(...collectionIds);

//                                         // Log the IDs or a fallback message if no IDs exist
//                                         console.log(`From Placement Collection JSON ID(s): ${collectionIds.join(', ') || 'No ID'}`);
//                                     } else {
//                                         console.log('Error parsing JSON: Invalid format');
//                                     }
//                                 } else {
//                                     console.log('From Placement Collection JSON ID: No data available');
//                                 }

//                                 // Log the placement product type
//                                 const placeProdType = page.placement_product_type || 'No Type';
//                                 placeProdTypes.push(placeProdType);
//                                 console.log(`Placement Product Type: ${placeProdType}`);

//                                 // Create the CTA button
//                                 const ctaButton = document.createElement('a');
//                                 ctaButton.href = '#';
//                                 ctaButton.id = 'cta-button';
//                                 ctaButton.target = '_blank';
//                                 ctaButton.style.textDecoration = 'none';
//                                 ctaButton.style.flexShrink = '0';
//                                 ctaButton.style.margin = '0';
//                                 ctaButton.style.border = 'none';
//                                 ctaButton.style.fontWeight = '600';
//                                 ctaButton.style.padding = '10px 16px';
//                                 ctaButton.style.display = 'flex';
//                                 ctaButton.style.alignItems = 'center';
//                                 ctaButton.style.justifyContent = 'center';
//                                 ctaButton.style.fontSize = '14px';
//                                 ctaButton.style.backgroundColor = '#202223';
//                                 ctaButton.style.color = '#fafafa';
//                                 ctaButton.style.borderRadius = '4px';
//                                 ctaButton.style.cursor = 'pointer';
//                                 ctaButton.style.transition = 'background-color 0.2s ease-in-out';
//                                 ctaButton.innerText = page.button_text || 'Shop Now';

//                                 // Append the icon container, text container, and CTA button to the main container
//                                 containerDiv.appendChild(iconContainer);
//                                 containerDiv.appendChild(textContainer);
//                                 containerDiv.appendChild(ctaButton);

//                                 // Append the container to the badge container
//                                 badgeContainer.appendChild(containerDiv);
//                             });
//                         } else {
//                             console.log("No badge pages found for badge:", badge); // Log if no badge pages
//                         }

//                     });
//                 } else {
//                     console.log("No published badges found."); // Log if no badges are found
//                     // alert('No published badges found.');
//                 }

//                 // Return the fetched data for further processing
//                 return data;
//             })
//             .catch(error => {
//                 console.error('Error fetching badge data:', error);
//                 // alert('Error fetching badge data: ' + error.message);
//             });
//     }

//     // Function to get the current product ID
//     function getProductId() {
//         const productElement = document.querySelector('[data-product-id]');
//         return productElement ? productElement.getAttribute('data-product-id') : null;
//     }

//     // Function to fetch collections for the given product ID
//     async function fetchCollectionsForProduct(productId) {
//         // Ensure APP_URL and SHOP_URL are properly defined globally
//         const endpoint = `${APP_URL}api/getProductCollectionId/${productId}?shop=${SHOP_URL}`;

//         try {
//             const response = await fetch(endpoint);
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const collectionIds = await response.json();
//             console.log("Collection IDs:", collectionIds);
//             return collectionIds;
//         } catch (error) {
//             console.error('Failed to fetch collections:', error);
//             return [];
//         }
//     }

//     // Function to filter and display badges based on product ID and placement type
//     async function filterAndDisplayBadges(data) {
//         const productId = getProductId();
//         console.log("Current product ID:", productId);

//         // Fetch collections for the product
//         const collectionIds = await fetchCollectionsForProduct(productId);

//         // Filter badges based on product ID and placement type
//         const filteredBadges = data.filter(badge => {
//             const badgePages = badge.badge_pages;
//             return badgePages.some(page => {
//                 const placeProdType = page.placement_product_type;
//                 const productIds = prodIds.includes(productId);
//                 const collectionIdsMatch = collectionIds.some(collectionId => collIds.includes(collectionId));

//                 return (placeProdType === 'allProducts') ||
//                        (placeProdType === 'specificProducts' && productIds) ||
//                        (placeProdType === 'specificCollections' && collectionIdsMatch);
//             });
//         });

//         console.log("Filtered badges:", filteredBadges);

//         // Clear existing badges
//         const productForm = document.querySelector('.product-form');
//         if (productForm) {
//             // Remove only the badge containers, not the entire content
//             const badgeContainers = productForm.querySelectorAll('.badge-container');
//             badgeContainers.forEach(container => container.remove());
//         }

//         // Display the filtered badges
//         if (filteredBadges.length > 0) {
//             filteredBadges.forEach(badge => {
//                 const badgePages = badge.badge_pages;
//                 const productForm = document.querySelector('.product-form');

//                 if (productForm) {
//                     const badgeContainer = createBadgeContainer(badge);
//                     badgeContainer.classList.add('badge-container'); // Add a class for easy removal later
//                     productForm.appendChild(badgeContainer);

//                     if (badgePages && badgePages.length > 0) {
//                         badgePages.forEach(page => {
//                             const containerDiv = createIconBlock(badge, page);
//                             badgeContainer.appendChild(containerDiv);

//                             if (badge.badge_type.includes('icon-block') || badge.badge_type.includes('payment-icons')) {
//                                 renderIconsBlock(badgeContainer, page);
//                             }
//                         });
//                     }
//                 }
//             });
//         } else {
//             // alert('No published badges found for the current product.');
//         }
//     }

//     // Function to create the badge container
//     function createBadgeContainer(badge) {
//         const badgeContainer = document.createElement('div');
//         badgeContainer.style.marginBottom = '40px';

//         // Badge Type
//         const badgeType = document.createElement('p');
//         badgeType.innerText = `Badge Type: ${badge.badge_type || 'No Type'}`;
//         badgeContainer.appendChild(badgeType);

//         return badgeContainer;
//     }

//     // Function to create the main container div for icons
//     function createIconBlock(badge, page) {
//         const containerDiv = document.createElement('div');
//         containerDiv.style.width = '100%';
//         containerDiv.style.padding = '16px';
//         containerDiv.style.border = '1px solid rgb(197, 200, 209)';
//         containerDiv.style.borderRadius = '8px';
//         containerDiv.style.display = 'flex';
//         containerDiv.style.justifyContent = 'space-between';
//         containerDiv.style.alignItems = 'center';
//         containerDiv.style.gap = '10px';
//         containerDiv.style.position = 'relative';
//         containerDiv.style.marginTop = '20px';
//         containerDiv.style.marginBottom = '20px';
//         containerDiv.style.background = 'rgb(255, 255, 255)';

//         const iconContainer = document.createElement('div');
//         iconContainer.innerHTML = page.icon_svg;
//         containerDiv.appendChild(iconContainer);

//         const textContainer = createTextContainer(page);
//         containerDiv.appendChild(textContainer);

//         const ctaButton = createCtaButton(page);
//         containerDiv.appendChild(ctaButton);

//         return containerDiv;
//     }

//     // Function to create the text container
//     function createTextContainer(page) {
//         const textContainer = document.createElement('div');
//         textContainer.id = 'text_container';
//         textContainer.style.display = 'flex';
//         textContainer.style.flexDirection = 'column';
//         textContainer.style.justifyContent = 'flex-start';
//         textContainer.style.alignItems = 'flex-start';
//         textContainer.style.flex = '1';
//         textContainer.style.gap = '2px';

//         const title = document.createElement('span');
//         title.id = 'title';
//         title.style.display = 'block';
//         title.style.fontWeight = '600';
//         title.style.fontSize = '16px';
//         title.style.color = '#202223';
//         title.style.margin = '0';
//         title.style.lineHeight = '1';
//         title.style.wordWrap = 'break-word';
//         title.style.maxWidth = '100%';
//         title.innerText = page.title || 'No Title';

//         const subheading = document.createElement('span');
//         subheading.id = 'subheading';
//         subheading.style.display = 'block';
//         subheading.style.fontSize = '14px';
//         subheading.style.color = '#96a4b6';
//         subheading.style.fontWeight = '400';
//         subheading.style.margin = '0';
//         subheading.style.textAlign = 'left';
//         subheading.style.lineHeight = '1';
//         subheading.style.wordWrap = 'break-word';
//         subheading.style.maxWidth = '100%';
//         subheading.innerText = page.subheading || 'No Subheading';

//         textContainer.appendChild(title);
//         textContainer.appendChild(subheading);

//         return textContainer;
//     }

//     // Function to create the CTA button
//     function createCtaButton(page) {
//         const ctaButton = document.createElement('a');
//         ctaButton.href = '#';
//         ctaButton.id = 'cta-button';
//         ctaButton.target = '_blank';
//         ctaButton.style.textDecoration = 'none';
//         ctaButton.style.flexShrink = '0';
//         ctaButton.style.margin = '0';
//         ctaButton.style.border = 'none';
//         ctaButton.style.fontWeight = '600';
//         ctaButton.style.padding = '10px 16px';
//         ctaButton.style.display = 'flex';
//         ctaButton.style.alignItems = 'center';
//         ctaButton.style.justifyContent = 'center';
//         ctaButton.style.fontSize = '14px';
//         ctaButton.style.backgroundColor = '#202223';
//         ctaButton.style.color = '#fafafa';
//         ctaButton.style.borderRadius = '4px';
//         ctaButton.style.cursor = 'pointer';
//         ctaButton.style.transition = 'background-color 0.2s ease-in-out';
//         ctaButton.innerText = page.button_text || 'Shop Now';

//         return ctaButton;
//     }

//     // Function to render icons block for 'icon-block' or 'payment-icons' types
//     function renderIconsBlock(container, page) {
//         const containerDiv = document.createElement('div');
//         containerDiv.style.width = '100%';
//         containerDiv.style.padding = '20px';
//         containerDiv.style.backgroundColor = '#f7f7f7';
//         containerDiv.style.borderRadius = '10px';
//         containerDiv.style.display = 'flex';
//         containerDiv.style.justifyContent = 'space-around';
//         containerDiv.style.alignItems = 'center';
//         containerDiv.style.margin = '20px 0';
//         containerDiv.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

//         page.badge_pages.forEach(badge => {
//             const badgeContainer = document.createElement('div');
//             badgeContainer.style.textAlign = 'center';

//             const icon = document.createElement('img');
//             icon.src = badge.icon_svg;
//             icon.style.width = '50px';
//             icon.style.marginBottom = '10px';
//             badgeContainer.appendChild(icon);

//             const title = document.createElement('h3');
//             title.innerText = badge.title || 'No Title';
//             badgeContainer.appendChild(title);

//             const subheading = document.createElement('p');
//             subheading.innerText = badge.subheading || 'No Subheading';
//             badgeContainer.appendChild(subheading);

//             const button = document.createElement('a');
//             button.innerText = 'Shop now';
//             button.href = '#';
//             badgeContainer.appendChild(button);

//             containerDiv.appendChild(badgeContainer);
//         });

//         container.appendChild(containerDiv);
//     }

//     // Call the function to fetch and process badges
//     fetchPublishedBadges().then(data => {
//         filterAndDisplayBadges(data);
//     });

//     // Log the collected product and collection IDs
//     console.log("Product IDs database:", prodIds);
//     console.log("Collection IDs database:", collIds);
//     console.log("Placement Product Types database:", placeProdTypes);
// });













// document.addEventListener("DOMContentLoaded", function () {
//     var prodIds = [];
//     var collIds = [];
//     var placeProdTypes = [];

//     // Function to fetch published badges
//     async function fetchPublishedBadges() {
//         try {
//             const response = await fetch(`${APP_URL}api/front-end/badges/published`);
//             if (!response.ok) {
//                 throw new Error('Network response was not ok: ' + response.statusText);
//             }
//             const data = await response.json();
//             console.log("Fetched data:", data);
//             return data;
//         } catch (error) {
//             console.error('Error fetching badge data:', error);
//             return [];
//         }
//     }

//     // Function to get the current product ID
//     function getProductId() {
//         const productElement = document.querySelector('[data-product-id]');
//         return productElement ? productElement.getAttribute('data-product-id') : null;
//     }

//     // Function to fetch collections for the given product ID
//     async function fetchCollectionsForProduct(productId) {    
//         const endpoint = `${APP_URL}api/getProductCollectionId/${productId}?shop=${SHOP_URL}`;
//         try {
//             const response = await fetch(endpoint);
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const collectionIds = await response.json();
//             console.log("Collection IDs:", collectionIds);
//             return collectionIds;
//         } catch (error) {
//             console.error('Failed to fetch collections:', error);
//             return [];
//         }
//     }

//     // Function to filter and display badges based on product ID and placement type
//     async function filterAndDisplayBadges(data) {
//         const productId = getProductId();
//         console.log("Current product ID:", productId);

//         if (!productId) {
//             console.error('Product ID not found');
//             return;
//         }

//         const collectionIds = await fetchCollectionsForProduct(productId);

//         // Filter badges based on product ID and placement type
//         const filteredBadges = data.filter(badge => {
//             const badgePages = badge.badge_pages;
//             return badgePages.some(page => {
//                 const placeProdType = page.placement_product_type;
//                 const productIds = prodIds.includes(productId);
//                 const collIdsMatch = collectionIds.some(id => collIds.includes(id));

//                 return (placeProdType === 'allProducts') ||
//                        (placeProdType === 'specificProducts' && productIds) ||
//                        (placeProdType === 'specificCollections' && collIdsMatch);
//             });
//         });

//         console.log("Filtered badges:", filteredBadges);

//         // Clear existing badges
//         const productForm = document.querySelector('.product-form');
//         if (productForm) {
//             productForm.innerHTML = ''; // Clear existing content
//         }

//         // Display the filtered badges
//         if (filteredBadges.length > 0) {
//             filteredBadges.forEach(badge => {
//                 const badgePages = badge.badge_pages;
//                 const productForm = document.querySelector('.product-form');

//                 if (productForm) {
//                     const badgeContainer = createBadgeContainer(badge);
//                     productForm.appendChild(badgeContainer);

//                     if (badgePages && badgePages.length > 0) {
//                         badgePages.forEach(page => {
//                             const containerDiv = createIconBlock(badge, page);
//                             badgeContainer.appendChild(containerDiv);

//                             if (badge.badge_type.includes('icon-block') || badge.badge_type.includes('payment-icons')) {
//                                 renderIconsBlock(badgeContainer, page);
//                             }
//                         });
//                     }
//                 }
//             });
//         } else {
//             console.log('No published badges found for the current product.');
//         }
//     }

//     // Function to create the badge container
//     function createBadgeContainer(badge) {
//         const badgeContainer = document.createElement('div');
//         badgeContainer.style.marginBottom = '40px';

//         // Badge Type
//         const badgeType = document.createElement('p');
//         badgeType.innerText = `Badge Type: ${badge.badge_type || 'No Type'}`;
//         badgeContainer.appendChild(badgeType);

//         return badgeContainer;
//     }

//     // Function to create the main container div for icons
//     function createIconBlock(badge, page) {
//         const containerDiv = document.createElement('div');
//         containerDiv.style.width = '100%';
//         containerDiv.style.padding = '16px';
//         containerDiv.style.border = '1px solid rgb(197, 200, 209)';
//         containerDiv.style.borderRadius = '8px';
//         containerDiv.style.display = 'flex';
//         containerDiv.style.justifyContent = 'space-between';
//         containerDiv.style.alignItems = 'center';
//         containerDiv.style.gap = '10px';
//         containerDiv.style.position = 'relative';
//         containerDiv.style.marginTop = '20px';
//         containerDiv.style.marginBottom = '20px';
//         containerDiv.style.background = 'rgb(255, 255, 255)';

//         const iconContainer = document.createElement('div');
//         iconContainer.innerHTML = page.icon_svg;
//         containerDiv.appendChild(iconContainer);

//         const textContainer = createTextContainer(page);
//         containerDiv.appendChild(textContainer);

//         const ctaButton = createCtaButton(page);
//         containerDiv.appendChild(ctaButton);

//         return containerDiv;
//     }

//     // Function to create the text container
//     function createTextContainer(page) {
//         const textContainer = document.createElement('div');
//         textContainer.id = 'text_container';
//         textContainer.style.display = 'flex';
//         textContainer.style.flexDirection = 'column';
//         textContainer.style.justifyContent = 'flex-start';
//         textContainer.style.alignItems = 'flex-start';
//         textContainer.style.flex = '1';
//         textContainer.style.gap = '2px';

//         const title = document.createElement('span');
//         title.id = 'title';
//         title.style.display = 'block';
//         title.style.fontWeight = '600';
//         title.style.fontSize = '16px';
//         title.style.color = '#202223';
//         title.style.margin = '0';
//         title.style.lineHeight = '1';
//         title.style.wordWrap = 'break-word';
//         title.style.maxWidth = '100%';
//         title.innerText = page.title || 'No Title';

//         const subheading = document.createElement('span');
//         subheading.id = 'subheading';
//         subheading.style.display = 'block';
//         subheading.style.fontSize = '14px';
//         subheading.style.color = '#96a4b6';
//         subheading.style.fontWeight = '400';
//         subheading.style.margin = '0';
//         subheading.style.textAlign = 'left';
//         subheading.style.lineHeight = '1';
//         subheading.style.wordWrap = 'break-word';
//         subheading.style.maxWidth = '100%';
//         subheading.innerText = page.subheading || 'No Subheading';

//         textContainer.appendChild(title);
//         textContainer.appendChild(subheading);

//         return textContainer;
//     }

//     // Function to create the CTA button
//     function createCtaButton(page) {
//         const ctaButton = document.createElement('a');
//         ctaButton.href = '#';
//         ctaButton.id = 'cta-button';
//         ctaButton.target = '_blank';
//         ctaButton.style.textDecoration = 'none';
//         ctaButton.style.flexShrink = '0';
//         ctaButton.style.margin = '0';
//         ctaButton.style.border = 'none';
//         ctaButton.style.fontWeight = '600';
//         ctaButton.style.padding = '10px 16px';
//         ctaButton.style.display = 'flex';
//         ctaButton.style.alignItems = 'center';
//         ctaButton.style.justifyContent = 'center';
//         ctaButton.style.fontSize = '14px';
//         ctaButton.style.backgroundColor = '#202223';
//         ctaButton.style.color = '#fafafa';
//         ctaButton.style.borderRadius = '4px';
//         ctaButton.style.cursor = 'pointer';
//         ctaButton.style.transition = 'background-color 0.2s ease-in-out';
//         ctaButton.innerText = page.button_text || 'Shop Now';

//         return ctaButton;
//     }

//     // Function to render icons block for 'icon-block' or 'payment-icons' types
//     function renderIconsBlock(container, page) {
//         const containerDiv = document.createElement('div');
//         containerDiv.style.width = '100%';
//         containerDiv.style.padding = '20px';
//         containerDiv.style.backgroundColor = '#f7f7f7';
//         containerDiv.style.borderRadius = '10px';
//         containerDiv.style.display = 'flex';
//         containerDiv.style.justifyContent = 'space-around';
//         containerDiv.style.alignItems = 'center';
//         containerDiv.style.margin = '20px 0';
//         containerDiv.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

//         page.badge_pages.forEach(badge => {
//             const badgeContainer = document.createElement('div');
//             badgeContainer.style.textAlign = 'center';

//             const icon = document.createElement('img');
//             icon.src = badge.icon_svg;
//             icon.style.width = '50px';
//             icon.style.marginBottom = '10px';
//             badgeContainer.appendChild(icon);

//             const title = document.createElement('h3');
//             title.innerText = badge.title || 'No Title';
//             badgeContainer.appendChild(title);

//             const subheading = document.createElement('p');
//             subheading.innerText = badge.subheading || 'No Subheading';
//             badgeContainer.appendChild(subheading);

//             const button = document.createElement('a');
//             button.innerText = 'Shop now';
//             button.href = '#';
//             badgeContainer.appendChild(button);

//             containerDiv.appendChild(badgeContainer);
//         });

//         container.appendChild(containerDiv);
//     }

//     // Call the function to fetch and process badges
//     fetchPublishedBadges().then(data => {
//         filterAndDisplayBadges(data);
//     });

//     // Log the collected product and collection IDs
//     console.log("Product IDs database:", prodIds);
//     console.log("Collection IDs database:", collIds);
//     console.log("Placement Product Types database:", placeProdTypes);
// });



// document.addEventListener("DOMContentLoaded", function () {
//     // Function to get the current product ID
//     function getProductId() {
//         const productElement = document.querySelector('[data-product-id]');
//         return productElement ? productElement.getAttribute('data-product-id') : null;
//     }

//     // Function to fetch collections for the given product ID
//     async function fetchCollectionsForProduct(productId) {
//         // Ensure APP_URL and SHOP_URL are properly defined globally
//         const endpoint = `${APP_URL}api/getProductCollectionId/${productId}?shop=${SHOP_URL}`;

//         try {
//             const response = await fetch(endpoint);
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const data = await response.json();
//             console.log("Response data:", data); // Log the entire response data for debugging
//             const collectionIds = extractCollectionIds(data);
//             console.log("Collection IDs:", collectionIds);
//             // You can now use the collectionIds as needed, for example, display them or process further
//         } catch (error) {
//             console.error('Failed to fetch collections:', error);
//         }
//     }

//     // Function to extract collection IDs from the response
//     function extractCollectionIds(data) {
//         if (!data || !data.data || !data.data.node || !data.data.node.collections || !data.data.node.collections.edges) {
//             console.error('Unexpected response structure:', data);
//             return [];
//         }

//         const collections = data.data.node.collections.edges;
//         return collections.map(edge => {
//             const id = edge.node.id;
//             return id.split('/').pop(); // Extract the numeric part of the ID
//         });
//     }

//     // Get the product ID from the theme
//     const productId = getProductId();

//     if (productId) {
//         // Fetch collections for the product
//         fetchCollectionsForProduct(productId);
//     } else {
//         console.error('Product ID not found');
//     }
// });

// document.addEventListener("DOMContentLoaded", function () {
//     var prodIds = [];
//     var collIds = [];
//     var placeProdTypes = [];

//     // Function to fetch published badges
//     function fetchPublishedBadges() {
//         return fetch(`${APP_URL}api/front-end/badges/published`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok: ' + response.statusText);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log("Fetched data:", data); // Log the fetched data
//                 if (data && data.length > 0) {
//                     data.forEach(badge => {
//                         const badgePages = badge.badge_pages; // Ensure correct property name
//                         console.log("Badge pages:", badgePages); // Log the badge pages

//                         // Create badge container
//                         const badgeContainer = document.createElement('div');
//                         badgeContainer.style.marginBottom = '40px';

//                         // Badge Type
//                         const badgeType = document.createElement('p');
//                         badgeType.innerText = `Badge Type: ${badge.badge_type || 'No Type'}`;
//                         badgeContainer.appendChild(badgeType);

//                         // Loop through each page and display additional fields
//                         if (badgePages && badgePages.length > 0) {
//                             badgePages.forEach(page => {
//                                 console.log("Processing page:", page); // Log each page

//                                 // Create the main container div
//                                 const containerDiv = document.createElement('div');
//                                 containerDiv.style.width = '100%';
//                                 containerDiv.style.padding = '16px';
//                                 containerDiv.style.border = '1px solid rgb(197, 200, 209)';
//                                 containerDiv.style.borderRadius = '8px';
//                                 containerDiv.style.display = 'flex';
//                                 containerDiv.style.justifyContent = 'space-between';
//                                 containerDiv.style.alignItems = 'center';
//                                 containerDiv.style.gap = '10px';
//                                 containerDiv.style.position = 'relative';
//                                 containerDiv.style.marginTop = '20px';
//                                 containerDiv.style.marginBottom = '20px';
//                                 containerDiv.style.background = 'rgb(255, 255, 255)';

//                                 // Create the icon container div
//                                 const iconContainer = document.createElement('div');
//                                 iconContainer.innerHTML = page.icon_svg;  // Inject the SVG string as HTML
//                                 containerDiv.appendChild(iconContainer);

//                                 // Create the text container div
//                                 const textContainer = document.createElement('div');
//                                 textContainer.id = 'text_container';
//                                 textContainer.style.display = 'flex';
//                                 textContainer.style.flexDirection = 'column';
//                                 textContainer.style.justifyContent = 'flex-start';
//                                 textContainer.style.alignItems = 'flex-start';
//                                 textContainer.style.flex = '1';
//                                 textContainer.style.gap = '2px';

//                                 // Create the title span
//                                 const title = document.createElement('span');
//                                 title.id = 'title';
//                                 title.style.display = 'block';
//                                 title.style.fontWeight = '600';
//                                 title.style.fontSize = '16px';
//                                 title.style.color = '#202223';
//                                 title.style.margin = '0';
//                                 title.style.lineHeight = '1';
//                                 title.style.wordWrap = 'break-word';
//                                 title.style.maxWidth = '100%';
//                                 title.innerText = page.title || 'No Title';

//                                 // Create the subheading span
//                                 const subheading = document.createElement('span');
//                                 subheading.id = 'subheading';
//                                 subheading.style.display = 'block';
//                                 subheading.style.fontSize = '14px';
//                                 subheading.style.color = '#96a4b6';
//                                 subheading.style.fontWeight = '400';
//                                 subheading.style.margin = '0';
//                                 subheading.style.textAlign = 'left';
//                                 subheading.style.lineHeight = '1';
//                                 subheading.style.wordWrap = 'break-word';
//                                 subheading.style.maxWidth = '100%';
//                                 subheading.innerText = page.subheading || 'No Subheading';

//                                 // Append the title and subheading to the text container
//                                 textContainer.appendChild(title);
//                                 textContainer.appendChild(subheading);

//                                 // Function to unescape and parse JSON
//                                 function parseJson(jsonString) {
//                                     try {
//                                         // First, unescape the string twice and remove the outer quotes
//                                         let unescapedJson = jsonString.replace(/\\"/g, '"').replace(/\\"/g, '"');
//                                         unescapedJson = unescapedJson.slice(1, -1); // Remove the outer quotes

//                                         // Now try to parse the unescaped JSON
//                                         return JSON.parse(unescapedJson);
//                                     } catch (error) {
//                                         console.error('Error parsing JSON:', error); // Log the error for debugging
//                                         return null;
//                                     }
//                                 }

//                                 // Check if the product data exists
//                                 if (page.placement_product_json) {
//                                     const productData = parseJson(page.placement_product_json);
//                                     if (productData) {
//                                         // Extract product IDs (if available)
//                                         const productIds = productData.map(product => product.id.split('/').pop());
//                                         prodIds.push(...productIds);

//                                         // Log the IDs or a fallback message if no IDs exist
//                                         console.log(`From Placement Product JSON ID(s): ${productIds.join(', ') || 'No ID'}`);
//                                     } else {
//                                         console.log('Error parsing JSON: Invalid format');
//                                     }
//                                 } else {
//                                     console.log('From Placement Product JSON ID: No data available');
//                                 }

//                                 // Check if the collection data exists
//                                 if (page.placement_collection_json) {
//                                     const collectionData = parseJson(page.placement_collection_json);
//                                     if (collectionData) {
//                                         // Extract collection IDs (if available)
//                                         const collectionIds = collectionData.map(collection => collection.id.split('/').pop());
//                                         collIds.push(...collectionIds);

//                                         // Log the IDs or a fallback message if no IDs exist
//                                         console.log(`From Placement Collection JSON ID(s): ${collectionIds.join(', ') || 'No ID'}`);
//                                     } else {
//                                         console.log('Error parsing JSON: Invalid format');
//                                     }
//                                 } else {
//                                     console.log('From Placement Collection JSON ID: No data available');
//                                 }

//                                 // Log the placement product type
//                                 const placeProdType = page.placement_product_type || 'No Type';
//                                 placeProdTypes.push(placeProdType);
//                                 console.log(`Placement Product Type: ${placeProdType}`);

//                                 // Create the CTA button
//                                 const ctaButton = document.createElement('a');
//                                 ctaButton.href = '#';
//                                 ctaButton.id = 'cta-button';
//                                 ctaButton.target = '_blank';
//                                 ctaButton.style.textDecoration = 'none';
//                                 ctaButton.style.flexShrink = '0';
//                                 ctaButton.style.margin = '0';
//                                 ctaButton.style.border = 'none';
//                                 ctaButton.style.fontWeight = '600';
//                                 ctaButton.style.padding = '10px 16px';
//                                 ctaButton.style.display = 'flex';
//                                 ctaButton.style.alignItems = 'center';
//                                 ctaButton.style.justifyContent = 'center';
//                                 ctaButton.style.fontSize = '14px';
//                                 ctaButton.style.backgroundColor = '#202223';
//                                 ctaButton.style.color = '#fafafa';
//                                 ctaButton.style.borderRadius = '4px';
//                                 ctaButton.style.cursor = 'pointer';
//                                 ctaButton.style.transition = 'background-color 0.2s ease-in-out';
//                                 ctaButton.innerText = page.button_text || 'Shop Now';

//                                 // Append the icon container, text container, and CTA button to the main container
//                                 containerDiv.appendChild(iconContainer);
//                                 containerDiv.appendChild(textContainer);
//                                 containerDiv.appendChild(ctaButton);

//                                 // Append the container to the badge container
//                                 badgeContainer.appendChild(containerDiv);
//                             });
//                         } else {
//                             console.log("No badge pages found for badge:", badge); // Log if no badge pages
//                         }

//                         // Add badge container to the page
//                         const productForm = document.querySelector('.product-form');
//                         if (productForm) {
//                             productForm.appendChild(badgeContainer); // Append badge container to the product form
//                         }
//                     });
//                 } else {
//                     console.log("No published badges found."); // Log if no badges are found
//                     alert('No published badges found.');
//                 }

//                 // Return the fetched data for further processing
//                 return data;
//             })
//             .catch(error => {
//                 console.error('Error fetching badge data:', error);
//                 alert('Error fetching badge data: ' + error.message);
//             });
//     }

//     // Function to get the current product ID
//     function getProductId() {
//         const productElement = document.querySelector('[data-product-id]');
//         return productElement ? productElement.getAttribute('data-product-id') : null;
//     }

//     // Function to fetch collections from the theme
//     function fetchCollections() {
//         // const shop_url = 'https://zehntech-store1.myshopify.com'; // Ensure the URL is correct
//         return fetch(`${shop_url}/collections.json`)
//             .then(response => response.json())
//             .then(data => {
//                 console.log('Collections:', data);
//                 if (data && data.collections && Array.isArray(data.collections)) {
//                     return data.collections;
//                 } else {
//                     console.error('Unexpected data format:', data);
//                     return [];
//                 }
//             })
//             .catch(error => {
//                 console.error('Error fetching collections:', error);
//                 return [];
//             });
//     }

//     // Function to filter and display badges based on product ID and placement type
//     function filterAndDisplayBadges(data) {
//         const productId = getProductId();
//         console.log("Current product ID:", productId);

//         // Fetch collections from the theme
//         fetchCollections().then(collections => {
//             const collectionIds = collections.map(collection => collection.id);
//             console.log("Fetched collection IDs:", collectionIds);

//             // Filter badges based on product ID and placement type
//             const filteredBadges = data.filter(badge => {
//                 const badgePages = badge.badge_pages;
//                 return badgePages.some(page => {
//                     const placeProdType = page.placement_product_type;
//                     const productIds = prodIds.includes(productId);
//                     const collectionIdsMatch = collIds.some(collId => collectionIds.includes(collId));

//                     console.log(`Checking badge page:`, {
//                         placeProdType,
//                         productIds,
//                         collectionIdsMatch,
//                         productId,
//                         collIds,
//                         collectionIds
//                     });

//                     return (placeProdType === 'allProducts') ||
//                            (placeProdType === 'specificProducts' && productIds) ||
//                            (placeProdType === 'specificCollections' && collectionIdsMatch);
//                 });
//             });

//             console.log("Filtered badges:", filteredBadges);

//             // Clear existing badges
//             const productForm = document.querySelector('.product-form');
//             if (productForm) {
//                 productForm.innerHTML = ''; // Clear existing content
//             }

//             // Display the filtered badges
//             if (filteredBadges.length > 0) {
//                 filteredBadges.forEach(badge => {
//                     const badgePages = badge.badge_pages;
//                     const productForm = document.querySelector('.product-form');

//                     if (productForm) {
//                         const badgeContainer = createBadgeContainer(badge);
//                         productForm.appendChild(badgeContainer);

//                         if (badgePages && badgePages.length > 0) {
//                             badgePages.forEach(page => {
//                                 const containerDiv = createIconBlock(badge, page);
//                                 badgeContainer.appendChild(containerDiv);

//                                 if (badge.badge_type.includes('icon-block') || badge.badge_type.includes('payment-icons')) {
//                                     renderIconsBlock(badgeContainer, page);
//                                 }
//                             });
//                         }
//                     }
//                 });
//             } else {
//                 alert('No published badges found for the current product.');
//             }
//         });
//     }

//     // Function to create the badge container
//     function createBadgeContainer(badge) {
//         const badgeContainer = document.createElement('div');
//         badgeContainer.style.marginBottom = '40px';

//         // Badge Type
//         const badgeType = document.createElement('p');
//         badgeType.innerText = `Badge Type: ${badge.badge_type || 'No Type'}`;
//         badgeContainer.appendChild(badgeType);

//         return badgeContainer;
//     }

//     // Function to create the main container div for icons
//     function createIconBlock(badge, page) {
//         const containerDiv = document.createElement('div');
//         containerDiv.style.width = '100%';
//         containerDiv.style.padding = '16px';
//         containerDiv.style.border = '1px solid rgb(197, 200, 209)';
//         containerDiv.style.borderRadius = '8px';
//         containerDiv.style.display = 'flex';
//         containerDiv.style.justifyContent = 'space-between';
//         containerDiv.style.alignItems = 'center';
//         containerDiv.style.gap = '10px';
//         containerDiv.style.position = 'relative';
//         containerDiv.style.marginTop = '20px';
//         containerDiv.style.marginBottom = '20px';
//         containerDiv.style.background = 'rgb(255, 255, 255)';

//         const iconContainer = document.createElement('div');
//         iconContainer.innerHTML = page.icon_svg;
//         containerDiv.appendChild(iconContainer);

//         const textContainer = createTextContainer(page);
//         containerDiv.appendChild(textContainer);

//         const ctaButton = createCtaButton(page);
//         containerDiv.appendChild(ctaButton);

//         return containerDiv;
//     }

//     // Function to create the text container
//     function createTextContainer(page) {
//         const textContainer = document.createElement('div');
//         textContainer.id = 'text_container';
//         textContainer.style.display = 'flex';
//         textContainer.style.flexDirection = 'column';
//         textContainer.style.justifyContent = 'flex-start';
//         textContainer.style.alignItems = 'flex-start';
//         textContainer.style.flex = '1';
//         textContainer.style.gap = '2px';

//         const title = document.createElement('span');
//         title.id = 'title';
//         title.style.display = 'block';
//         title.style.fontWeight = '600';
//         title.style.fontSize = '16px';
//         title.style.color = '#202223';
//         title.style.margin = '0';
//         title.style.lineHeight = '1';
//         title.style.wordWrap = 'break-word';
//         title.style.maxWidth = '100%';
//         title.innerText = page.title || 'No Title';

//         const subheading = document.createElement('span');
//         subheading.id = 'subheading';
//         subheading.style.display = 'block';
//         subheading.style.fontSize = '14px';
//         subheading.style.color = '#96a4b6';
//         subheading.style.fontWeight = '400';
//         subheading.style.margin = '0';
//         subheading.style.textAlign = 'left';
//         subheading.style.lineHeight = '1';
//         subheading.style.wordWrap = 'break-word';
//         subheading.style.maxWidth = '100%';
//         subheading.innerText = page.subheading || 'No Subheading';

//         textContainer.appendChild(title);
//         textContainer.appendChild(subheading);

//         return textContainer;
//     }

//     // Function to create the CTA button
//     function createCtaButton(page) {
//         const ctaButton = document.createElement('a');
//         ctaButton.href = '#';
//         ctaButton.id = 'cta-button';
//         ctaButton.target = '_blank';
//         ctaButton.style.textDecoration = 'none';
//         ctaButton.style.flexShrink = '0';
//         ctaButton.style.margin = '0';
//         ctaButton.style.border = 'none';
//         ctaButton.style.fontWeight = '600';
//         ctaButton.style.padding = '10px 16px';
//         ctaButton.style.display = 'flex';
//         ctaButton.style.alignItems = 'center';
//         ctaButton.style.justifyContent = 'center';
//         ctaButton.style.fontSize = '14px';
//         ctaButton.style.backgroundColor = '#202223';
//         ctaButton.style.color = '#fafafa';
//         ctaButton.style.borderRadius = '4px';
//         ctaButton.style.cursor = 'pointer';
//         ctaButton.style.transition = 'background-color 0.2s ease-in-out';
//         ctaButton.innerText = page.button_text || 'Shop Now';

//         return ctaButton;
//     }

//     // Function to render icons block for 'icon-block' or 'payment-icons' types
//     function renderIconsBlock(container, page) {
//         const containerDiv = document.createElement('div');
//         containerDiv.style.width = '100%';
//         containerDiv.style.padding = '20px';
//         containerDiv.style.backgroundColor = '#f7f7f7';
//         containerDiv.style.borderRadius = '10px';
//         containerDiv.style.display = 'flex';
//         containerDiv.style.justifyContent = 'space-around';
//         containerDiv.style.alignItems = 'center';
//         containerDiv.style.margin = '20px 0';
//         containerDiv.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

//         page.badge_pages.forEach(badge => {
//             const badgeContainer = document.createElement('div');
//             badgeContainer.style.textAlign = 'center';

//             const icon = document.createElement('img');
//             icon.src = badge.icon_svg;
//             icon.style.width = '50px';
//             icon.style.marginBottom = '10px';
//             badgeContainer.appendChild(icon);

//             const title = document.createElement('h3');
//             title.innerText = badge.title || 'No Title';
//             badgeContainer.appendChild(title);

//             const subheading = document.createElement('p');
//             subheading.innerText = badge.subheading || 'No Subheading';
//             badgeContainer.appendChild(subheading);

//             const button = document.createElement('a');
//             button.innerText = 'Shop now';
//             button.href = '#';
//             badgeContainer.appendChild(button);

//             containerDiv.appendChild(badgeContainer);
//         });

//         container.appendChild(containerDiv);
//     }

//     // Call the function to fetch and process badges
//     fetchPublishedBadges().then(data => {
//         filterAndDisplayBadges(data);
//     });

//     // Log the collected product and collection IDs
//     console.log("Product IDs database:", prodIds);
//     console.log("Collection IDs database:", collIds);
//     console.log("Placement Product Types database:", placeProdTypes);
// });


// document.addEventListener("DOMContentLoaded", function () {
//     alert("hello");
//     var prodIds = [];
//     var collIds = [];
//     var placeProdTypes = [];

//     // Function to fetch published badges
//     function fetchPublishedBadges() {
//         return fetch(`${APP_URL}api/front-end/badges/published`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok: ' + response.statusText);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log("Fetched data:", data); // Log the fetched data
//                 if (data && data.length > 0) {
//                     data.forEach(badge => {
//                         const badgePages = badge.badge_pages; // Ensure correct property name
//                         console.log("Badge pages:", badgePages); // Log the badge pages

//                         // Create badge container
//                         const badgeContainer = document.createElement('div');
//                         badgeContainer.style.marginBottom = '40px';

//                         // Badge Type
//                         const badgeType = document.createElement('p');
//                         badgeType.innerText = `Badge Type: ${badge.badge_type || 'No Type'}`;
//                         badgeContainer.appendChild(badgeType);

//                         // Loop through each page and display additional fields
//                         if (badgePages && badgePages.length > 0) {
//                             badgePages.forEach(page => {
//                                 console.log("Processing page:", page); // Log each page

//                                 // Create the main container div
//                                 const containerDiv = document.createElement('div');
//                                 containerDiv.style.width = '100%';
//                                 containerDiv.style.padding = '16px';
//                                 containerDiv.style.border = '1px solid rgb(197, 200, 209)';
//                                 containerDiv.style.borderRadius = '8px';
//                                 containerDiv.style.display = 'flex';
//                                 containerDiv.style.justifyContent = 'space-between';
//                                 containerDiv.style.alignItems = 'center';
//                                 containerDiv.style.gap = '10px';
//                                 containerDiv.style.position = 'relative';
//                                 containerDiv.style.marginTop = '20px';
//                                 containerDiv.style.marginBottom = '20px';
//                                 containerDiv.style.background = 'rgb(255, 255, 255)';

//                                 // Create the icon container div
//                                 const iconContainer = document.createElement('div');
//                                 iconContainer.innerHTML = page.icon_svg;  // Inject the SVG string as HTML
//                                 containerDiv.appendChild(iconContainer);

//                                 // Create the text container div
//                                 const textContainer = document.createElement('div');
//                                 textContainer.id = 'text_container';
//                                 textContainer.style.display = 'flex';
//                                 textContainer.style.flexDirection = 'column';
//                                 textContainer.style.justifyContent = 'flex-start';
//                                 textContainer.style.alignItems = 'flex-start';
//                                 textContainer.style.flex = '1';
//                                 textContainer.style.gap = '2px';

//                                 // Create the title span
//                                 const title = document.createElement('span');
//                                 title.id = 'title';
//                                 title.style.display = 'block';
//                                 title.style.fontWeight = '600';
//                                 title.style.fontSize = '16px';
//                                 title.style.color = '#202223';
//                                 title.style.margin = '0';
//                                 title.style.lineHeight = '1';
//                                 title.style.wordWrap = 'break-word';
//                                 title.style.maxWidth = '100%';
//                                 title.innerText = page.title || 'No Title';

//                                 // Create the subheading span
//                                 const subheading = document.createElement('span');
//                                 subheading.id = 'subheading';
//                                 subheading.style.display = 'block';
//                                 subheading.style.fontSize = '14px';
//                                 subheading.style.color = '#96a4b6';
//                                 subheading.style.fontWeight = '400';
//                                 subheading.style.margin = '0';
//                                 subheading.style.textAlign = 'left';
//                                 subheading.style.lineHeight = '1';
//                                 subheading.style.wordWrap = 'break-word';
//                                 subheading.style.maxWidth = '100%';
//                                 subheading.innerText = page.subheading || 'No Subheading';

//                                 // Append the title and subheading to the text container
//                                 textContainer.appendChild(title);
//                                 textContainer.appendChild(subheading);

//                                 // Function to unescape and parse JSON
//                                 function parseJson(jsonString) {
//                                     try {
//                                         // First, unescape the string twice and remove the outer quotes
//                                         let unescapedJson = jsonString.replace(/\\"/g, '"').replace(/\\"/g, '"');
//                                         unescapedJson = unescapedJson.slice(1, -1); // Remove the outer quotes

//                                         // Now try to parse the unescaped JSON
//                                         return JSON.parse(unescapedJson);
//                                     } catch (error) {
//                                         console.error('Error parsing JSON:', error); // Log the error for debugging
//                                         return null;
//                                     }
//                                 }

//                                 // Check if the product data exists
//                                 if (page.placement_product_json) {
//                                     const productData = parseJson(page.placement_product_json);
//                                     if (productData) {
//                                         // Extract product IDs (if available)
//                                         const productIds = productData.map(product => product.id.split('/').pop());
//                                         prodIds.push(...productIds);

//                                         // Log the IDs or a fallback message if no IDs exist
//                                         console.log(`From Placement Product JSON ID(s): ${productIds.join(', ') || 'No ID'}`);
//                                     } else {
//                                         console.log('Error parsing JSON: Invalid format');
//                                     }
//                                 } else {
//                                     console.log('From Placement Product JSON ID: No data available');
//                                 }

//                                 // Check if the collection data exists
//                                 if (page.placement_collection_json) {
//                                     const collectionData = parseJson(page.placement_collection_json);
//                                     if (collectionData) {
//                                         // Extract collection IDs (if available)
//                                         const collectionIds = collectionData.map(collection => collection.id.split('/').pop());
//                                         collIds.push(...collectionIds);

//                                         // Log the IDs or a fallback message if no IDs exist
//                                         console.log(`From Placement Collection JSON ID(s): ${collectionIds.join(', ') || 'No ID'}`);
//                                     } else {
//                                         console.log('Error parsing JSON: Invalid format');
//                                     }
//                                 } else {
//                                     console.log('From Placement Collection JSON ID: No data available');
//                                 }

//                                 // Log the placement product type
//                                 const placeProdType = page.placement_product_type || 'No Type';
//                                 placeProdTypes.push(placeProdType);
//                                 console.log(`Placement Product Type: ${placeProdType}`);

//                                 // Create the CTA button
//                                 const ctaButton = document.createElement('a');
//                                 ctaButton.href = '#';
//                                 ctaButton.id = 'cta-button';
//                                 ctaButton.target = '_blank';
//                                 ctaButton.style.textDecoration = 'none';
//                                 ctaButton.style.flexShrink = '0';
//                                 ctaButton.style.margin = '0';
//                                 ctaButton.style.border = 'none';
//                                 ctaButton.style.fontWeight = '600';
//                                 ctaButton.style.padding = '10px 16px';
//                                 ctaButton.style.display = 'flex';
//                                 ctaButton.style.alignItems = 'center';
//                                 ctaButton.style.justifyContent = 'center';
//                                 ctaButton.style.fontSize = '14px';
//                                 ctaButton.style.backgroundColor = '#202223';
//                                 ctaButton.style.color = '#fafafa';
//                                 ctaButton.style.borderRadius = '4px';
//                                 ctaButton.style.cursor = 'pointer';
//                                 ctaButton.style.transition = 'background-color 0.2s ease-in-out';
//                                 ctaButton.innerText = page.button_text || 'Shop Now';

//                                 // Append the icon container, text container, and CTA button to the main container
//                                 containerDiv.appendChild(iconContainer);
//                                 containerDiv.appendChild(textContainer);
//                                 containerDiv.appendChild(ctaButton);

//                                 // Append the container to the badge container
//                                 badgeContainer.appendChild(containerDiv);
//                             });
//                         } else {
//                             console.log("No badge pages found for badge:", badge); // Log if no badge pages
//                         }

//                         // Add badge container to the page
//                         const productForm = document.querySelector('.product-form');
//                         if (productForm) {
//                             productForm.appendChild(badgeContainer); // Append badge container to the product form
//                         }
//                     });
//                 } else {
//                     console.log("No published badges found."); // Log if no badges are found
//                     alert('No published badges found.');
//                 }

//                 // Return the fetched data for further processing
//                 return data;
//             })
//             .catch(error => {
//                 console.error('Error fetching badge data:', error);
//                 alert('Error fetching badge data: ' + error.message);
//             });
//     }

//     // Function to get the current product ID
//     function getProductId() {
//         const productElement = document.querySelector('[data-product-id]');
//         return productElement ? productElement.getAttribute('data-product-id') : null;
//     }

//     // Function to fetch product details using the GraphQL controller
//     function fetchProductDetails(productId) {
//         const shopifyApiUrl = `${APP_URL}api/shopify/product/${productId}`; // Dynamically insert shop_name
//         return fetch(`/api/shopify/product/${productId}?shopifyApiUrl=${encodeURIComponent(shopifyApiUrl)}`)
//             .then(response => response.json())
//             .then(data => {
//                 console.log('Product details:', data);
//                 if (data && data.data && data.data.node) {
//                     return data.data.node;
//                 } else {
//                     console.error('Unexpected data format:', data);
//                     return null;
//                 }
//             })
//             .catch(error => {
//                 console.error('Error fetching product details:', error);
//                 return null;
//             });
//     }

//     // Function to filter and display badges based on product ID and placement type
//     function filterAndDisplayBadges(data) {
//         const productId = getProductId();
//         console.log("Current product ID:", productId);

//         // Fetch product details using the GraphQL controller
//         fetchProductDetails(productId).then(product => {
//             if (product) {
//                 const collectionIds = product.collections.edges.map(edge => edge.node.id);
//                 console.log("Fetched collection IDs:", collectionIds);

//                 // Filter badges based on product ID and placement type
//                 const filteredBadges = data.filter(badge => {
//                     const badgePages = badge.badge_pages;
//                     return badgePages.some(page => {
//                         const placeProdType = page.placement_product_type;
//                         const productIds = prodIds.includes(productId);
//                         const collectionIdsMatch = collIds.some(collId => collectionIds.includes(collId));

//                         console.log(`Checking badge page:`, {
//                             placeProdType,
//                             productIds,
//                             collectionIdsMatch,
//                             productId,
//                             collIds,
//                             collectionIds
//                         });

//                         return (placeProdType === 'allProducts') ||
//                                (placeProdType === 'specificProducts' && productIds) ||
//                                (placeProdType === 'specificCollections' && collectionIdsMatch);
//                     });
//                 });

//                 console.log("Filtered badges:", filteredBadges);

//                 // Clear existing badges
//                 const productForm = document.querySelector('.product-form');
//                 if (productForm) {
//                     productForm.innerHTML = ''; // Clear existing content
//                 }

//                 // Display the filtered badges
//                 if (filteredBadges.length > 0) {
//                     filteredBadges.forEach(badge => {
//                         const badgePages = badge.badge_pages;
//                         const productForm = document.querySelector('.product-form');

//                         if (productForm) {
//                             const badgeContainer = createBadgeContainer(badge);
//                             productForm.appendChild(badgeContainer);

//                             if (badgePages && badgePages.length > 0) {
//                                 badgePages.forEach(page => {
//                                     const containerDiv = createIconBlock(badge, page);
//                                     badgeContainer.appendChild(containerDiv);

//                                     if (badge.badge_type.includes('icon-block') || badge.badge_type.includes('payment-icons')) {
//                                         renderIconsBlock(badgeContainer, page);
//                                     }
//                                 });
//                             }
//                         }
//                     });
//                 } else {
//                     alert('No published badges found for the current product.');
//                 }
//             } else {
//                 alert('No product details found.');
//             }
//         });
//     }

//     // Function to create the badge container
//     function createBadgeContainer(badge) {
//         const badgeContainer = document.createElement('div');
//         badgeContainer.style.marginBottom = '40px';

//         // Badge Type
//         const badgeType = document.createElement('p');
//         badgeType.innerText = `Badge Type: ${badge.badge_type || 'No Type'}`;
//         badgeContainer.appendChild(badgeType);

//         return badgeContainer;
//     }

//     // Function to create the main container div for icons
//     function createIconBlock(badge, page) {
//         const containerDiv = document.createElement('div');
//         containerDiv.style.width = '100%';
//         containerDiv.style.padding = '16px';
//         containerDiv.style.border = '1px solid rgb(197, 200, 209)';
//         containerDiv.style.borderRadius = '8px';
//         containerDiv.style.display = 'flex';
//         containerDiv.style.justifyContent = 'space-between';
//         containerDiv.style.alignItems = 'center';
//         containerDiv.style.gap = '10px';
//         containerDiv.style.position = 'relative';
//         containerDiv.style.marginTop = '20px';
//         containerDiv.style.marginBottom = '20px';
//         containerDiv.style.background = 'rgb(255, 255, 255)';

//         const iconContainer = document.createElement('div');
//         iconContainer.innerHTML = page.icon_svg;
//         containerDiv.appendChild(iconContainer);

//         const textContainer = createTextContainer(page);
//         containerDiv.appendChild(textContainer);

//         const ctaButton = createCtaButton(page);
//         containerDiv.appendChild(ctaButton);

//         return containerDiv;
//     }

//     // Function to create the text container
//     function createTextContainer(page) {
//         const textContainer = document.createElement('div');
//         textContainer.id = 'text_container';
//         textContainer.style.display = 'flex';
//         textContainer.style.flexDirection = 'column';
//         textContainer.style.justifyContent = 'flex-start';
//         textContainer.style.alignItems = 'flex-start';
//         textContainer.style.flex = '1';
//         textContainer.style.gap = '2px';

//         const title = document.createElement('span');
//         title.id = 'title';
//         title.style.display = 'block';
//         title.style.fontWeight = '600';
//         title.style.fontSize = '16px';
//         title.style.color = '#202223';
//         title.style.margin = '0';
//         title.style.lineHeight = '1';
//         title.style.wordWrap = 'break-word';
//         title.style.maxWidth = '100%';
//         title.innerText = page.title || 'No Title';

//         const subheading = document.createElement('span');
//         subheading.id = 'subheading';
//         subheading.style.display = 'block';
//         subheading.style.fontSize = '14px';
//         subheading.style.color = '#96a4b6';
//         subheading.style.fontWeight = '400';
//         subheading.style.margin = '0';
//         subheading.style.textAlign = 'left';
//         subheading.style.lineHeight = '1';
//         subheading.style.wordWrap = 'break-word';
//         subheading.style.maxWidth = '100%';
//         subheading.innerText = page.subheading || 'No Subheading';

//         textContainer.appendChild(title);
//         textContainer.appendChild(subheading);

//         return textContainer;
//     }

//     // Function to create the CTA button
//     function createCtaButton(page) {
//         const ctaButton = document.createElement('a');
//         ctaButton.href = '#';
//         ctaButton.id = 'cta-button';
//         ctaButton.target = '_blank';
//         ctaButton.style.textDecoration = 'none';
//         ctaButton.style.flexShrink = '0';
//         ctaButton.style.margin = '0';
//         ctaButton.style.border = 'none';
//         ctaButton.style.fontWeight = '600';
//         ctaButton.style.padding = '10px 16px';
//         ctaButton.style.display = 'flex';
//         ctaButton.style.alignItems = 'center';
//         ctaButton.style.justifyContent = 'center';
//         ctaButton.style.fontSize = '14px';
//         ctaButton.style.backgroundColor = '#202223';
//         ctaButton.style.color = '#fafafa';
//         ctaButton.style.borderRadius = '4px';
//         ctaButton.style.cursor = 'pointer';
//         ctaButton.style.transition = 'background-color 0.2s ease-in-out';
//         ctaButton.innerText = page.button_text || 'Shop Now';

//         return ctaButton;
//     }

//     // Function to render icons block for 'icon-block' or 'payment-icons' types
//     function renderIconsBlock(container, page) {
//         const containerDiv = document.createElement('div');
//         containerDiv.style.width = '100%';
//         containerDiv.style.padding = '20px';
//         containerDiv.style.backgroundColor = '#f7f7f7';
//         containerDiv.style.borderRadius = '10px';
//         containerDiv.style.display = 'flex';
//         containerDiv.style.justifyContent = 'space-around';
//         containerDiv.style.alignItems = 'center';
//         containerDiv.style.margin = '20px 0';
//         containerDiv.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

//         page.badge_pages.forEach(badge => {
//             const badgeContainer = document.createElement('div');
//             badgeContainer.style.textAlign = 'center';

//             const icon = document.createElement('img');
//             icon.src = badge.icon_svg;
//             icon.style.width = '50px';
//             icon.style.marginBottom = '10px';
//             badgeContainer.appendChild(icon);

//             const title = document.createElement('h3');
//             title.innerText = badge.title || 'No Title';
//             badgeContainer.appendChild(title);

//             const subheading = document.createElement('p');
//             subheading.innerText = badge.subheading || 'No Subheading';
//             badgeContainer.appendChild(subheading);

//             const button = document.createElement('a');
//             button.innerText = 'Shop now';
//             button.href = '#';
//             badgeContainer.appendChild(button);

//             containerDiv.appendChild(badgeContainer);
//         });

//         container.appendChild(containerDiv);
//     }

//     // Call the function to fetch and process badges
//     fetchPublishedBadges().then(data => {
//         filterAndDisplayBadges(data);
//     });

//     // Log the collected product and collection IDs
//     console.log("Product IDs database:", prodIds);
//     console.log("Collection IDs database:", collIds);
//     console.log("Placement Product Types database:", placeProdTypes);
// });














// document.addEventListener("DOMContentLoaded", function () {

//     // Function to fetch published badges
//     function fetchPublishedBadges() {
//         fetch(`${APP_URL}api/front-end/badges/published`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok: ' + response.statusText);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 if (data && data.length > 0) {
//                     data.forEach(badge => {
//                         const badgePages = badge.badge_pages; 
//                         const productForm = document.querySelector('.product-form');
                        
//                         if (productForm) {
//                             const badgeContainer = createBadgeContainer(badge);
//                             productForm.appendChild(badgeContainer); 

//                             if (badgePages && badgePages.length > 0) {
//                                 badgePages.forEach(page => {
//                                     const containerDiv = createIconBlock(badge, page);
//                                     badgeContainer.appendChild(containerDiv);

//                                     if (badge.badge_type.includes('icon-block') || badge.badge_type.includes('payment-icons')) {
//                                         renderIconsBlock(badgeContainer, page);
//                                     }
//                                 });
//                             }
//                         }
//                     });
//                 } else {
//                     alert('No published badges found.');
//                 }
//             })
//             .catch(error => {
//                 console.error('Error fetching badge data:', error);
//                 alert('Error fetching badge data: ' + error.message);
//             });
//     }

//     // Function to create the badge container
//     function createBadgeContainer(badge) {
//         const badgeContainer = document.createElement('div');
//         badgeContainer.style.marginBottom = '40px';

//         const badgeType = document.createElement('p');
//         badgeType.innerText = `Badge Type: ${badge.badge_type || 'No Type'}`;
//         badgeContainer.appendChild(badgeType);

//         return badgeContainer;
//     }

//     // Function to create the main container div for icons
//     function createIconBlock(badge, page) {
//         const containerDiv = document.createElement('div');
//         containerDiv.style.width = '100%';
//         containerDiv.style.padding = '20px';
//         containerDiv.style.backgroundColor = '#f7f7f7';
//         containerDiv.style.borderRadius = '10px';
//         containerDiv.style.display = 'flex';
//         containerDiv.style.justifyContent = 'space-between';
//         containerDiv.style.alignItems = 'center';
//         containerDiv.style.margin = '20px 0';
//         containerDiv.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

//         const iconContainer = document.createElement('div');
//         iconContainer.innerHTML = badge.icon_svg;
//         containerDiv.appendChild(iconContainer);

//         const textContainer = createTextContainer(badge);
//         containerDiv.appendChild(textContainer);

//         const ctaButton = createCtaButton(badge);
//         containerDiv.appendChild(ctaButton);

//         return containerDiv;
//     }

//     // Function to create the text container
//     function createTextContainer(badge) {
//         const textContainer = document.createElement('div');
//         textContainer.style.display = 'flex';
//         textContainer.style.flexDirection = 'column';
//         textContainer.style.gap = '2px';

//         const title = document.createElement('span');
//         title.style.fontWeight = '600';
//         title.style.fontSize = '16px';
//         title.innerText = badge.title || 'No Title';
//         textContainer.appendChild(title);

//         const subheading = document.createElement('span');
//         subheading.style.fontSize = '14px';
//         subheading.style.color = '#96a4b6';
//         subheading.innerText = badge.subheading || 'No Subheading';
//         textContainer.appendChild(subheading);

//         return textContainer;
//     }

//     // Function to create the CTA button
//     function createCtaButton(badge) {
//         const ctaButton = document.createElement('a');
//         ctaButton.href = '#';
//         ctaButton.target = '_blank';
//         ctaButton.style.textDecoration = 'none';
//         ctaButton.style.fontWeight = '600';
//         ctaButton.style.padding = '10px 16px';
//         ctaButton.style.backgroundColor = '#202223';
//         ctaButton.style.color = '#fafafa';
//         ctaButton.style.borderRadius = '4px';
//         ctaButton.innerText = badge.button_text || 'Shop Now';

//         ctaButton.addEventListener('mouseenter', () => {
//             ctaButton.style.backgroundColor = '#333';
//         });
//         ctaButton.addEventListener('mouseleave', () => {
//             ctaButton.style.backgroundColor = '#202223';
//         });

//         return ctaButton;
//     }

//     // Function to render icons block for 'icon-block' or 'payment-icons' types
//     function renderIconsBlock(container, page) {
//         const containerDiv = document.createElement('div');
//         containerDiv.style.width = '100%';
//         containerDiv.style.padding = '20px';
//         containerDiv.style.backgroundColor = '#f7f7f7';
//         containerDiv.style.borderRadius = '10px';
//         containerDiv.style.display = 'flex';
//         containerDiv.style.justifyContent = 'space-around';
//         containerDiv.style.alignItems = 'center';
//         containerDiv.style.margin = '20px 0';
//         containerDiv.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

//         page.badge_pages.forEach(badge => {
//             const badgeContainer = document.createElement('div');
//             badgeContainer.style.textAlign = 'center';

//             const icon = document.createElement('img');
//             icon.src = badge.icon_svg;
//             icon.style.width = '50px';
//             icon.style.marginBottom = '10px';
//             badgeContainer.appendChild(icon);

//             const title = document.createElement('h3');
//             title.innerText = badge.title || 'No Title';
//             badgeContainer.appendChild(title);

//             const subheading = document.createElement('p');
//             subheading.innerText = badge.subheading || 'No Subheading';
//             badgeContainer.appendChild(subheading);

//             const button = document.createElement('a');
//             button.innerText = 'Shop now';
//             button.href = '#';
//             badgeContainer.appendChild(button);

//             containerDiv.appendChild(badgeContainer);
//         });

//         container.appendChild(containerDiv);
//     }

//     // Call the function to fetch and display badges
//     fetchPublishedBadges();
// });


// document.addEventListener("DOMContentLoaded", function () {
//     // Function to fetch published badges
//     function fetchPublishedBadges() {
//         const productId = getProductId(); // Implement this function to get the current product ID
//         const collectionId = getCollectionId(); // Implement this function to get the current collection ID

//         // Log the request parameters
//         console.log('Fetching badges with product_id:', productId, 'and collection_id:', collectionId);

//         fetch(`${APP_URL}api/front-end/badges/published?product_id=${productId}&collection_id=${collectionId}`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok: ' + response.statusText);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 // Log the response data
//                 console.log('Fetched badges:', data);

//                 if (data && data.length > 0) {
//                     data.forEach(badge => {
//                         const badgePages = badge.badge_pages;
//                         const productForm = document.querySelector('.product-form');

//                         if (productForm) {
//                             const badgeContainer = createBadgeContainer(badge);
//                             productForm.appendChild(badgeContainer);

//                             if (badgePages && badgePages.length > 0) {
//                                 badgePages.forEach(page => {
//                                     const containerDiv = createIconBlock(badge, page);
//                                     badgeContainer.appendChild(containerDiv);

//                                     if (badge.badge_type.includes('icon-block') || badge.badge_type.includes('payment-icons')) {
//                                         renderIconsBlock(badgeContainer, page);
//                                     }
//                                 });
//                             }
//                         }
//                     });
//                 } else {
//                     alert('No published badges found.');
//                 }
//             })
//             .catch(error => {
//                 console.error('Error fetching badge data:', error);
//                 alert('Error fetching badge data: ' + error.message);
//             });
//     }

//     // Function to get the current product ID
//     function getProductId() {
//         const productElement = document.querySelector('[data-product-id]');
//         return productElement ? productElement.getAttribute('data-product-id') : null;
//     }

//     // Function to get the current collection ID
//     function getCollectionId() {
//         const collectionElement = document.querySelector('[data-collection-id]');
//         return collectionElement ? collectionElement.getAttribute('data-collection-id') : null;
//     }

//     // Function to create the badge container
//     function createBadgeContainer(badge) {
//         const badgeContainer = document.createElement('div');
//         badgeContainer.style.marginBottom = '40px';

//         const badgeType = document.createElement('p');
//         badgeType.innerText = `Badge Type: ${badge.badge_type || 'No Type'}`;
//         badgeContainer.appendChild(badgeType);

//         return badgeContainer;
//     }

//     // Function to create the main container div for icons
//     function createIconBlock(badge, page) {
//         const containerDiv = document.createElement('div');
//         containerDiv.style.width = '100%';
//         containerDiv.style.padding = '20px';
//         containerDiv.style.backgroundColor = '#f7f7f7';
//         containerDiv.style.borderRadius = '10px';
//         containerDiv.style.display = 'flex';
//         containerDiv.style.justifyContent = 'space-between';
//         containerDiv.style.alignItems = 'center';
//         containerDiv.style.margin = '20px 0';
//         containerDiv.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

//         const iconContainer = document.createElement('div');
//         iconContainer.innerHTML = badge.icon_svg;
//         containerDiv.appendChild(iconContainer);

//         const textContainer = createTextContainer(badge);
//         containerDiv.appendChild(textContainer);

//         const ctaButton = createCtaButton(badge);
//         containerDiv.appendChild(ctaButton);

//         return containerDiv;
//     }

//     // Function to create the text container
//     function createTextContainer(badge) {
//         const textContainer = document.createElement('div');
//         textContainer.style.display = 'flex';
//         textContainer.style.flexDirection = 'column';
//         textContainer.style.gap = '2px';

//         const title = document.createElement('span');
//         title.style.fontWeight = '600';
//         title.style.fontSize = '16px';
//         title.innerText = badge.title || 'No Title';
//         textContainer.appendChild(title);

//         const subheading = document.createElement('span');
//         subheading.style.fontSize = '14px';
//         subheading.style.color = '#96a4b6';
//         subheading.innerText = badge.subheading || 'No Subheading';
//         textContainer.appendChild(subheading);

//         return textContainer;
//     }

//     // Function to create the CTA button
//     function createCtaButton(badge) {
//         const ctaButton = document.createElement('a');
//         ctaButton.href = '#';
//         ctaButton.target = '_blank';
//         ctaButton.style.textDecoration = 'none';
//         ctaButton.style.fontWeight = '600';
//         ctaButton.style.padding = '10px 16px';
//         ctaButton.style.backgroundColor = '#202223';
//         ctaButton.style.color = '#fafafa';
//         ctaButton.style.borderRadius = '4px';
//         ctaButton.innerText = badge.button_text || 'Shop Now';

//         ctaButton.addEventListener('mouseenter', () => {
//             ctaButton.style.backgroundColor = '#333';
//         });
//         ctaButton.addEventListener('mouseleave', () => {
//             ctaButton.style.backgroundColor = '#202223';
//         });

//         return ctaButton;
//     }

//     // Function to render icons block for 'icon-block' or 'payment-icons' types
//     function renderIconsBlock(container, page) {
//         const containerDiv = document.createElement('div');
//         containerDiv.style.width = '100%';
//         containerDiv.style.padding = '20px';
//         containerDiv.style.backgroundColor = '#f7f7f7';
//         containerDiv.style.borderRadius = '10px';
//         containerDiv.style.display = 'flex';
//         containerDiv.style.justifyContent = 'space-around';
//         containerDiv.style.alignItems = 'center';
//         containerDiv.style.margin = '20px 0';
//         containerDiv.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

//         page.badge_pages.forEach(badge => {
//             const badgeContainer = document.createElement('div');
//             badgeContainer.style.textAlign = 'center';

//             const icon = document.createElement('img');
//             icon.src = badge.icon_svg;
//             icon.style.width = '50px';
//             icon.style.marginBottom = '10px';
//             badgeContainer.appendChild(icon);

//             const title = document.createElement('h3');
//             title.innerText = badge.title || 'No Title';
//             badgeContainer.appendChild(title);

//             const subheading = document.createElement('p');
//             subheading.innerText = badge.subheading || 'No Subheading';
//             badgeContainer.appendChild(subheading);

//             const button = document.createElement('a');
//             button.innerText = 'Shop now';
//             button.href = '#';
//             badgeContainer.appendChild(button);

//             containerDiv.appendChild(badgeContainer);
//         });

//         container.appendChild(containerDiv);
//     }

//     // Call the function to fetch and display badges
//     fetchPublishedBadges();
// });
// document.addEventListener("DOMContentLoaded", function () {
//     // Function to fetch published badges
//     function fetchPublishedBadges() {
//         const productId = getProductId(); // Implement this function to get the current product ID

//         // Log the request parameters
//         console.log('Fetching badges with product_id:', productId);

//         fetch(`${APP_URL}api/front-end/badges/published?product_id=${productId}`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok: ' + response.statusText);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 // Log the response data
//                 console.log('Fetched badges data:', data);

//                 if (data && data.length > 0) {
//                     data.forEach(badge => {
//                         const badgePages = badge.badge_pages;
//                         const productForm = document.querySelector('.product-form');

//                         if (productForm) {
//                             const badgeContainer = createBadgeContainer(badge);
//                             productForm.appendChild(badgeContainer);

//                             if (badgePages && badgePages.length > 0) {
//                                 badgePages.forEach(page => {
//                                     const containerDiv = createIconBlock(badge, page);
//                                     badgeContainer.appendChild(containerDiv);

//                                     if (badge.badge_type.includes('icon-block') || badge.badge_type.includes('payment-icons')) {
//                                         renderIconsBlock(badgeContainer, page);
//                                     }
//                                 });
//                             }
//                         }
//                     });
//                 } else {
//                     alert('No published badges found.');
//                 }
//             })
//             .catch(error => {
//                 console.error('Error fetching badge data:', error);
//                 alert('Error fetching badge data: ' + error.message);
//             });
//     }

//     // Function to get the current product ID
//     function getProductId() {
//         const productElement = document.querySelector('[data-product-id]');
//         return productElement ? productElement.getAttribute('data-product-id') : null;
//     }

//     // Function to create the badge container
//     function createBadgeContainer(badge) {
//         const badgeContainer = document.createElement('div');
//         badgeContainer.style.marginBottom = '40px';

//         const badgeType = document.createElement('p');
//         badgeType.innerText = `Badge Type: ${badge.badge_type || 'No Type'}`;
//         badgeContainer.appendChild(badgeType);

//         return badgeContainer;
//     }

//     // Function to create the main container div for icons
//     function createIconBlock(badge, page) {
//         const containerDiv = document.createElement('div');
//         containerDiv.style.width = '100%';
//         containerDiv.style.padding = '20px';
//         containerDiv.style.backgroundColor = '#f7f7f7';
//         containerDiv.style.borderRadius = '10px';
//         containerDiv.style.display = 'flex';
//         containerDiv.style.justifyContent = 'space-between';
//         containerDiv.style.alignItems = 'center';
//         containerDiv.style.margin = '20px 0';
//         containerDiv.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

//         const iconContainer = document.createElement('div');
//         iconContainer.innerHTML = badge.icon_svg;
//         containerDiv.appendChild(iconContainer);

//         const textContainer = createTextContainer(badge);
//         containerDiv.appendChild(textContainer);

//         const ctaButton = createCtaButton(badge);
//         containerDiv.appendChild(ctaButton);

//         return containerDiv;
//     }

//     // Function to create the text container
//     function createTextContainer(badge) {
//         const textContainer = document.createElement('div');
//         textContainer.style.display = 'flex';
//         textContainer.style.flexDirection = 'column';
//         textContainer.style.gap = '2px';

//         const title = document.createElement('span');
//         title.style.fontWeight = '600';
//         title.style.fontSize = '16px';
//         title.innerText = badge.title || 'No Title';
//         textContainer.appendChild(title);

//         const subheading = document.createElement('span');
//         subheading.style.fontSize = '14px';
//         subheading.style.color = '#96a4b6';
//         subheading.innerText = badge.subheading || 'No Subheading';
//         textContainer.appendChild(subheading);

//         return textContainer;
//     }

//     // Function to create the CTA button
//     function createCtaButton(badge) {
//         const ctaButton = document.createElement('a');
//         ctaButton.href = '#';
//         ctaButton.target = '_blank';
//         ctaButton.style.textDecoration = 'none';
//         ctaButton.style.fontWeight = '600';
//         ctaButton.style.padding = '10px 16px';
//         ctaButton.style.backgroundColor = '#202223';
//         ctaButton.style.color = '#fafafa';
//         ctaButton.style.borderRadius = '4px';
//         ctaButton.innerText = badge.button_text || 'Shop Now';

//         ctaButton.addEventListener('mouseenter', () => {
//             ctaButton.style.backgroundColor = '#333';
//         });
//         ctaButton.addEventListener('mouseleave', () => {
//             ctaButton.style.backgroundColor = '#202223';
//         });

//         return ctaButton;
//     }

//     // Function to render icons block for 'icon-block' or 'payment-icons' types
//     function renderIconsBlock(container, page) {
//         const containerDiv = document.createElement('div');
//         containerDiv.style.width = '100%';
//         containerDiv.style.padding = '20px';
//         containerDiv.style.backgroundColor = '#f7f7f7';
//         containerDiv.style.borderRadius = '10px';
//         containerDiv.style.display = 'flex';
//         containerDiv.style.justifyContent = 'space-around';
//         containerDiv.style.alignItems = 'center';
//         containerDiv.style.margin = '20px 0';
//         containerDiv.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

//         page.badge_pages.forEach(badge => {
//             const badgeContainer = document.createElement('div');
//             badgeContainer.style.textAlign = 'center';

//             const icon = document.createElement('img');
//             icon.src = badge.icon_svg;
//             icon.style.width = '50px';
//             icon.style.marginBottom = '10px';
//             badgeContainer.appendChild(icon);

//             const title = document.createElement('h3');
//             title.innerText = badge.title || 'No Title';
//             badgeContainer.appendChild(title);

//             const subheading = document.createElement('p');
//             subheading.innerText = badge.subheading || 'No Subheading';
//             badgeContainer.appendChild(subheading);

//             const button = document.createElement('a');
//             button.innerText = 'Shop now';
//             button.href = '#';
//             badgeContainer.appendChild(button);

//             containerDiv.appendChild(badgeContainer);
//         });

//         container.appendChild(containerDiv);
//     }

//     // Call the function to fetch and display badges
//     fetchPublishedBadges();
// });


// this is last code updated in mistral at 7:30pm

// document.addEventListener("DOMContentLoaded", function () {

//     // Function to fetch published badges
//     function fetchPublishedBadges() {
//         fetch(`${APP_URL}api/front-end/badges/published`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok: ' + response.statusText);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log("Fetched data:", data); // Log the fetched data
//                 if (data && data.length > 0) {
//                     data.forEach(badge => {
//                         const badgePages = badge.badge_pages; // Ensure correct property name
//                         console.log("Badge pages:", badgePages); // Log the badge pages

//                         // Create badge container
//                         const badgeContainer = document.createElement('div');
//                         badgeContainer.style.marginBottom = '40px';

//                         // Badge Type
//                         const badgeType = document.createElement('p');
//                         badgeType.innerText = `Badge Type: ${badge.badge_type || 'No Type'}`;
//                         badgeContainer.appendChild(badgeType);

//                         // Add badge container to the page
//                         const productForm = document.querySelector('.product-form');
//                         if (productForm) {
//                             productForm.appendChild(badgeContainer); // Append badge container to the product form
//                         }

//                         if (badgePages && badgePages.length > 0) {
//                             badgePages.forEach(page => {
//                                 console.log("Processing page:", page); // Log each page

//                                 // Determine container type
//                                 const containerType = badge.badge_type.includes('icon-block') || badge.badge_type.includes('payment-icons') ? 'icon-block' : 'normal';

//                                 // Create the main container div
//                                 const containerDiv = containerType === 'normal' ? createContainerDiv1() : createContainerDiv2();

//                                 // Create the icon container div
//                                 const iconContainer = document.createElement('div');
//                                 iconContainer.innerHTML = page.icon_svg;  // Inject the SVG string as HTML
//                                 containerDiv.appendChild(iconContainer);

//                                 // Create the text container div
//                                 const textContainer = document.createElement('div');
//                                 textContainer.id = 'text_container';
//                                 textContainer.style.display = 'flex';
//                                 textContainer.style.flexDirection = 'column';
//                                 textContainer.style.justifyContent = 'flex-start';
//                                 textContainer.style.alignItems = 'flex-start';
//                                 textContainer.style.flex = '1';
//                                 textContainer.style.gap = '2px';

//                                 // Create the title span
//                                 const title = document.createElement('span');
//                                 title.id = 'title';
//                                 title.style.display = 'block';
//                                 title.style.fontWeight = '600';
//                                 title.style.fontSize = '16px';
//                                 title.style.color = '#202223';
//                                 title.style.margin = '0';
//                                 title.style.lineHeight = '1';
//                                 title.style.wordWrap = 'break-word';
//                                 title.style.maxWidth = '100%';
//                                 title.innerText = page.title || 'No Title';

//                                 // Create the subheading span
//                                 const subheading = document.createElement('span');
//                                 subheading.id = 'subheading';
//                                 subheading.style.display = 'block';
//                                 subheading.style.fontSize = '14px';
//                                 subheading.style.color = '#96a4b6';
//                                 subheading.style.fontWeight = '400';
//                                 subheading.style.margin = '0';
//                                 subheading.style.textAlign = 'left';
//                                 subheading.style.lineHeight = '1';
//                                 subheading.style.wordWrap = 'break-word';
//                                 subheading.style.maxWidth = '100%';
//                                 subheading.innerText = page.subheading || 'No Subheading';

//                                 // Append the title and subheading to the text container
//                                 textContainer.appendChild(title);
//                                 textContainer.appendChild(subheading);

//                                 // Create the CTA button
//                                 const ctaButton = document.createElement('a');
//                                 ctaButton.href = '#';
//                                 ctaButton.id = 'cta-button';
//                                 ctaButton.target = '_blank';
//                                 ctaButton.style.textDecoration = 'none';
//                                 ctaButton.style.flexShrink = '0';
//                                 ctaButton.style.margin = '0';
//                                 ctaButton.style.border = 'none';
//                                 ctaButton.style.fontWeight = '600';
//                                 ctaButton.style.padding = '10px 16px';
//                                 ctaButton.style.display = 'flex';
//                                 ctaButton.style.alignItems = 'center';
//                                 ctaButton.style.justifyContent = 'center';
//                                 ctaButton.style.fontSize = '14px';
//                                 ctaButton.style.backgroundColor = '#202223';
//                                 ctaButton.style.color = '#fafafa';
//                                 ctaButton.style.borderRadius = '4px';
//                                 ctaButton.style.cursor = 'pointer';
//                                 ctaButton.style.transition = 'background-color 0.2s ease-in-out';
//                                 ctaButton.innerText = page.button_text || 'Shop Now';

//                                 // Append the icon container, text container, and CTA button to the main container
//                                 containerDiv.appendChild(iconContainer);
//                                 containerDiv.appendChild(textContainer);
//                                 containerDiv.appendChild(ctaButton);

//                                 // Append the container to the badge container
//                                 badgeContainer.appendChild(containerDiv);

//                                 if (containerType === 'icon-block') {
//                                     renderIconsBlock(badgeContainer, page);
//                                 }
//                             });
//                         } else {
//                             console.log("No badge pages found for badge:", badge); // Log if no badge pages
//                         }
//                     });
//                 } else {
//                     console.log("No published badges found."); // Log if no badges are found
//                     alert('No published badges found.');
//                 }
//             })
//             .catch(error => {
//                 console.error('Error fetching badge data:', error);
//                 alert('Error fetching badge data: ' + error.message);
//             });
//     }

//     // Function to create containerDiv1 for normal data
//     function createContainerDiv1() {
//         const containerDiv1 = document.createElement('div');
//         containerDiv1.style.width = '100%';
//         containerDiv1.style.padding = '16px';
//         containerDiv1.style.border = '1px solid rgb(197, 200, 209)';
//         containerDiv1.style.borderRadius = '8px';
//         containerDiv1.style.display = 'flex';
//         containerDiv1.style.justifyContent = 'space-between';
//         containerDiv1.style.alignItems = 'center';
//         containerDiv1.style.gap = '10px';
//         containerDiv1.style.position = 'relative';
//         containerDiv1.style.marginTop = '20px';
//         containerDiv1.style.marginBottom = '20px';
//         containerDiv1.style.background = 'rgb(255, 255, 255)';
//         return containerDiv1;
//     }

//     // Function to create containerDiv2 for icon-block and payment-icons data
//     function createContainerDiv2() {
//         const containerDiv2 = document.createElement('div');
//         containerDiv2.style.width = '100%';
//         containerDiv2.style.padding = '20px';
//         containerDiv2.style.backgroundColor = '#f7f7f7';
//         containerDiv2.style.borderRadius = '10px';
//         containerDiv2.style.display = 'flex';
//         containerDiv2.style.justifyContent = 'space-around';
//         containerDiv2.style.alignItems = 'center';
//         containerDiv2.style.margin = '20px 0';
//         containerDiv2.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
//         return containerDiv2;
//     }

//     // Combined render function for icon-block and payment-icons badge types
//     function renderIconsBlock(container, page) {
//         if (page.badge_pages && Array.isArray(page.badge_pages)) {
//             const containerDiv2 = createContainerDiv2();

//             page.badge_pages.forEach(badge => {
//                 // Create the badge container
//                 const badgeContainer = document.createElement('div');
//                 badgeContainer.style.textAlign = 'center';
//                 badgeContainer.style.padding = '10px';

//                 // Create the icon
//                 const icon = document.createElement('img');
//                 icon.src = badge.icon_svg;
//                 icon.style.width = '50px';
//                 icon.style.height = '50px';
//                 icon.style.marginBottom = '10px';

//                 // Create the title
//                 const title = document.createElement('h3');
//                 title.innerText = badge.title || 'No Title';
//                 title.style.fontSize = '18px';
//                 title.style.fontWeight = 'bold';
//                 title.style.margin = '10px 0';

//                 // Create the subheading
//                 const subheading = document.createElement('p');
//                 subheading.innerText = badge.subheading || 'No Subheading';
//                 subheading.style.fontSize = '14px';
//                 subheading.style.color = '#888';
//                 subheading.style.marginBottom = '15px';

//                 // Create the CTA button
//                 const button = document.createElement('a');
//                 button.href = '#';
//                 button.innerText = 'Shop now';
//                 button.style.display = 'inline-block';
//                 button.style.padding = '10px 20px';
//                 button.style.backgroundColor = '#202223';
//                 button.style.color = '#fff';
//                 button.style.textDecoration = 'none';
//                 button.style.borderRadius = '5px';
//                 button.style.fontWeight = 'bold';
//                 button.style.transition = 'background-color 0.3s';

//                 button.addEventListener('mouseenter', () => {
//                     button.style.backgroundColor = '#333';
//                 });

//                 button.addEventListener('mouseleave', () => {
//                     button.style.backgroundColor = '#202223';
//                 });

//                 // Append all elements to the badge container
//                 badgeContainer.appendChild(icon);
//                 badgeContainer.appendChild(title);
//                 badgeContainer.appendChild(subheading);
//                 badgeContainer.appendChild(button);

//                 // Append the badge container to the main container
//                 containerDiv2.appendChild(badgeContainer);
//             });

//             // Append the main container to the badge container
//             container.appendChild(containerDiv2);
//         }
//     }

//     // Call the function to fetch and display badges
//     fetchPublishedBadges();
// });
