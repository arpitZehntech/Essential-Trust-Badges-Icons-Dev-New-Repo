// working code at 16-11-2024

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
//                         const badgeContainer = createBadgeContainer(badge);

//                         // Loop through each page and display additional fields
//                         if (badgePages && badgePages.length > 0) {
//                             badgePages.forEach(page => {
//                                 console.log("Processing page:", page); // Log each page

//                                 // Create the main container div
//                                 const containerDiv = createIconBlock(badge, page);

//                                 // Append the container to the badge container
//                                 badgeContainer.appendChild(containerDiv);
//                             });
//                         } else {
//                             console.log("No badge pages found for badge:", badge); // Log if no badge pages
//                         }
//                     });
//                 } else {
//                     console.log("No published badges found."); // Log if no badges are found
//                 }

//                 // Return the fetched data for further processing
//                 return data;
//             })
//             .catch(error => {
//                 console.error('Error fetching badge data:', error);
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
//                 const productIds = page.placement_product_json ? parseJson(page.placement_product_json).map(product => product.id.split('/').pop()) : [];
//                 const collectionIdsMatch = page.placement_collection_json ? parseJson(page.placement_collection_json).map(collection => collection.id.split('/').pop()) : [];
//                 const tagsMatch = productTags.some(tag => {
//                     const pageTags = page.placement_tags_json ? page.placement_tags_json.split(',').map(tag => tag.trim()) : [];
//                     return pageTags.includes(tag);
//                 });

//                 return (placeProdType === 'allProducts') ||
//                        (placeProdType === 'specificProducts' && productIds.includes(productId)) ||
//                        (placeProdType === 'specificCollections' && collectionIdsMatch.some(collectionId => collectionIds.includes(collectionId))) ||
//                        (placeProdType === 'specificTags' && tagsMatch);
//             });
//         });

//         console.log("Filtered badges:", filteredBadges);

//         // Clear existing badges
//         const productForm = document.querySelector('.product-form');
//         if (productForm) {
//             // Remove only the badge containers, not the entire content
//             const badgeContainers = productForm.querySelectorAll('.badge-container, .badge-container1');
//             badgeContainers.forEach(container => container.remove());
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
//         if (badge.badge_type.includes('icon-block') || badge.badge_type.includes('payment-icons')) {
//             badgeContainer.classList.add('badge-container');
//         } else {
//             badgeContainer.classList.add('badge-container1');
//         }
//         return badgeContainer;
//     }

//     // Function to create the main container div for icons
//     function createIconBlock(badge, page) {
//         const containerDiv = document.createElement('div');
//         if (badge.badge_type.includes('icon-block') || badge.badge_type.includes('payment-icons')) {
//             containerDiv.classList.add('container-div');
//         } else {
//             containerDiv.classList.add('container-div1');
//         }

//         // Create the icon container div
//         const iconContainer = document.createElement('div');
//         iconContainer.classList.add('icon-container');
//         iconContainer.innerHTML = page.icon_svg;
//         containerDiv.appendChild(iconContainer);

//         // Create the text container div
//         const textContainer = createTextContainer(badge, page);
//         containerDiv.appendChild(textContainer);

//         // Create the CTA button
//         const ctaButton = createCtaButton(page);
//         containerDiv.appendChild(ctaButton);

//         return containerDiv;
//     }

//     // Function to create the text container
//     function createTextContainer(badge, page) {
//         const textContainer = document.createElement('div');
//         textContainer.classList.add('text-container');
//         textContainer.id = 'text_container';

//         // Create the title span
//         const title = document.createElement('span');
//         title.classList.add('title');
//         title.innerText = page.title || 'No Title';

//         // Create the subheading span
//         const subheading = document.createElement('span');
//         if (badge.badge_type.includes('icon-block') || badge.badge_type.includes('payment-icons')) {
//             subheading.classList.add('subheading');
//         } else {
//             subheading.classList.add('subheading1');
//         }
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

//     // Function to unescape and parse JSON
//     function parseJson(jsonString) {
//         try {
//             // First, unescape the string twice and remove the outer quotes
//             let unescapedJson = jsonString.replace(/\\"/g, '"').replace(/\\"/g, '"');
//             unescapedJson = unescapedJson.slice(1, -1); // Remove the outer quotes

//             // Now try to parse the unescaped JSON
//             return JSON.parse(unescapedJson);
//         } catch (error) {
//             console.error('Error parsing JSON:', error); // Log the error for debugging
//             return null;
//         }
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
//     padding: 10px;
//     text-align: center;
//     border-radius: 8px;
//     margin-top: 10px;
//     margin-bottom: 10px;
//     background: rgb(255, 255, 255);
// }

// .badge-container1 {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     gap: 10px;
// }

// .container-div1 {
//     padding: 10px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     gap: 5px;
//     margin-top: 10px;
//     margin-bottom: 10px;
//     background: rgb(255, 255, 255);
// }

// .container-div:only-child, .container-div1:only-child {
//     grid-column: 1 / -1;
// }

// .icon-container {
//     /* Add any specific styles for the icon container if needed */
// }
// .text-container {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     flex: 1;
//     gap: 5px;
//     padding: 8px;
// }
// .title {
//     display: block;
//     font-weight: 600;
//     font-size: 16px;
//     color: #202223;
//     margin: 0;
//     line-height: 1;
//     word-wrap: break-word;
//     max-width: 100%;
// }
// .subheading {
//     display: block;
//     font-size: 14px;
//     color: #96a4b6;
//     font-weight: 400;
//     margin: 0;
//     text-align: left;
//     line-height: 1;
//     word-wrap: break-word;
//     max-width: 100%;
// }
// .subheading1 {
//     display: block;
//     font-size: 14px;
//     color: #96a4b6;
//     font-weight: 400;
//     margin: 0;

//     line-height: 1;
//     word-wrap: break-word;
//     max-width: 100%;
// }
// .cta-button {
//     text-decoration: none;
//     flex-shrink: 0;
//     margin: 0;
//     border: none;
//     font-weight: 600;
//     padding: 10px 16px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 14px;
//     background-color: #202223;
//     color: #fafafa;
//     border-radius: 4px;
//     cursor: pointer;
//     transition: background-color 0.2s ease-in-out;
// }
// `;
// document.head.appendChild(style);





// working code at 19/11/2024

// document.addEventListener("DOMContentLoaded", function () {
//     var prodIds = [];
//     var collIds = [];
//     var placeProdTypes = [];

//     // Function to fetch published badges
//     function fetchPublishedBadges() {
//         return fetch(`${APP_URL}api/front-end/badges/published`)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error(
//                         "Network response was not ok: " + response.statusText,
//                     );
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 console.log("Fetched data:", data); // Log the fetched data
//                 if (data && data.length > 0) {
//                     data.forEach((badge) => {
//                         const badgePages = badge.badge_pages; // Ensure correct property name
//                         console.log("Badge pages:", badgePages); // Log the badge pages

//                         // Create badge container
//                         const badgeContainer = createBadgeContainer(badge);

//                         // Loop through each page and display additional fields
//                         if (badgePages && badgePages.length > 0) {
//                             badgePages.forEach((page) => {
//                                 console.log("Processing page:", page); // Log each page

//                                 // Create the main container div
//                                 const containerDiv = createIconBlock(
//                                     badge,
//                                     page,
//                                 );

//                                 // Append the container to the badge container
//                                 badgeContainer.appendChild(containerDiv);
//                             });
//                         } else {
//                             console.log(
//                                 "No badge pages found for badge:",
//                                 badge,
//                             ); // Log if no badge pages
//                         }
//                     });
//                 } else {
//                     console.log("No published badges found."); // Log if no badges are found
//                 }

//                 // Return the fetched data for further processing
//                 return data;
//             })
//             .catch((error) => {
//                 console.error("Error fetching badge data:", error);
//             });
//     }

//     // Function to get the current product ID
//     function getProductId() {
//         const productElement = document.querySelector("[data-product-id]");
//         return productElement
//             ? productElement.getAttribute("data-product-id")
//             : null;
//     }

//     // Function to fetch collections for the given product ID
//     async function fetchCollectionsForProduct(productId) {
//         // Ensure APP_URL and SHOP_URL are properly defined globally
//         const endpoint = `${APP_URL}api/getProductCollectionId/${productId}?shop=${SHOP_URL}`;

//         try {
//             const response = await fetch(endpoint);
//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }
//             const collectionIds = await response.json();
//             console.log("Collection IDs:", collectionIds);
//             return collectionIds;
//         } catch (error) {
//             console.error("Failed to fetch collections:", error);
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
//         const tags =
//             document
//                 .querySelector("[data-product-tags]")
//                 ?.getAttribute("data-product-tags") || "";
//         const productTags = tags.split(",").map((tag) => tag.trim());
//         console.log("Product Tags:", productTags);

//         // Filter badges based on product ID, collection IDs, and tags
//         const filteredBadges = data.filter((badge) => {
//             const badgePages = badge.badge_pages;
//             return badgePages.some((page) => {
//                 const placeProdType = page.placement_product_type;
//                 const productIds = page.placement_product_json
//                     ? parseJson(page.placement_product_json).map((product) =>
//                         product.id.split("/").pop(),
//                     )
//                     : [];
//                 const collectionIdsMatch = page.placement_collection_json
//                     ? parseJson(page.placement_collection_json).map(
//                         (collection) => collection.id.split("/").pop(),
//                     )
//                     : [];
//                 const tagsMatch = productTags.some((tag) => {
//                     const pageTags = page.placement_tags_json
//                         ? page.placement_tags_json
//                             .split(",")
//                             .map((tag) => tag.trim())
//                         : [];
//                     return pageTags.includes(tag);
//                 });

//                 return (
//                     placeProdType === "allProducts" ||
//                     (placeProdType === "specificProducts" &&
//                         productIds.includes(productId)) ||
//                     (placeProdType === "specificCollections" &&
//                         collectionIdsMatch.some((collectionId) =>
//                             collectionIds.includes(collectionId),
//                         )) ||
//                     (placeProdType === "specificTags" && tagsMatch)
//                 );
//             });
//         });

//         console.log("Filtered badges:", filteredBadges);

//         // Clear existing badges
//         const productForm = document.querySelector(".product-form");
//         if (productForm) {
//             // Remove only the badge containers, not the entire content
//             const badgeContainers = productForm.querySelectorAll(
//                 ".badge-container, .badge-container1",
//             );
//             badgeContainers.forEach((container) => container.remove());
//         }

//         // Display the filtered badges
//         if (filteredBadges.length > 0) {
//             filteredBadges.forEach((badge) => {
//                 const badgePages = badge.badge_pages;
//                 const productForm = document.querySelector(".product-form");

//                 if (productForm) {
//                     const badgeContainer = createBadgeContainer(badge);
//                     productForm.appendChild(badgeContainer);

//                     if (badgePages && badgePages.length > 0) {
//                         badgePages.forEach((page) => {
//                             const containerDiv = createIconBlock(badge, page);
//                             badgeContainer.appendChild(containerDiv);
//                         });
//                     }
//                 }
//             });
//         } else {
//             // alert('No published badges found for the current product.');
//         }
//     }

//     function formatBorderStyle(borderSize, borderColor) {
//         return `${borderSize}px solid ${borderColor}`;
//     }

//     // Function to create the badge container
//     function createBadgeContainer(badge) {
//         const badgeContainer = document.createElement("div");
//         const borderStyle = formatBorderStyle(
//             badge.border_size,
//             badge.border_color,
//         );

//         if (
//             badge.badge_type.includes("icon-block") ||
//             badge.badge_type.includes("payment-icons")
//         ) {
//             badgeContainer.classList.add("badge-container");
//             applyDynamicStyles(badgeContainer, {
//                 display: "grid",
//                 "grid-template-columns":
//                     "repeat(auto-fill, minmax(150px, 1fr))",
//                 backgroundColor: badge.background_color,
//                 border: borderStyle,
//                 borderRadius: `${badge.corner_radius}px`,
//                 padding: "10px",
//                 marginTop: "20px",
//                 gap: "10px",
//                 padding: "16px calc(16px)",
//                 marginBottom: "20px",
//             });
//         } else {
//             badgeContainer.classList.add("badge-container1");
//             applyDynamicStyles(badgeContainer, {
//                 display: "flex",
//                 "flex-direction": "column",
//                 gap: "10px",
//                 backgroundColor: badge.background_color,
//                 border: borderStyle,
//                 borderRadius: `${badge.corner_radius}px`,
//                 marginTop: "20px",
//                 marginBottom: "20px",
//                 padding: "16px calc(16px)",
//             });
//         }
//         return badgeContainer;
//     }

//     // Function to create the main container div for icons
//     function createIconBlock(badge, page) {
//         const containerDiv = document.createElement("div");
//         if (
//             badge.badge_type.includes("icon-block") ||
//             badge.badge_type.includes("payment-icons")
//         ) {
//             containerDiv.classList.add("container-div");
//             applyDynamicStyles(containerDiv, {
//                 display: "grid",
//                 alignContent: "start",
//                 rowGap: "4px",
//                 padding: "0",
//                 "text-align": "center",
//                 "border-radius": "8px",
//                 color: badge.icon_color,
//                 fontSize: `${badge.title_size}px`,
//             });
//         } else {
//             containerDiv.classList.add("container-div1");
//             applyDynamicStyles(containerDiv, {
//                 display: "flex",
//                 "justify-content": "space-between",
//                 "align-items": "center",
//                 gap: "10px",
//                 color: badge.icon_color,
//                 fontSize: `${badge.title_size}px`,
//             });
//         }

//         // Create the icon container div
//         const iconContainer = document.createElement("div");
//         iconContainer.classList.add("icon-container");
//         iconContainer.innerHTML = page.icon_svg;
//         containerDiv.appendChild(iconContainer);

//         // Create the text container div
//         const textContainer = createTextContainer(badge, page);
//         containerDiv.appendChild(textContainer);

//         // Create the CTA button
//         const ctaButton = createCtaButton(badge, page);
//         containerDiv.appendChild(ctaButton);

//         return containerDiv;
//     }

//     // Function to create the text container
//     function createTextContainer(badge, page) {
//         const textContainer = document.createElement("div");
//         textContainer.classList.add("text-container");
//         textContainer.id = "text_container";
//         applyDynamicStyles(textContainer, {
//             display: "flex",
//             "flex-direction": "column",
//             "justify-content": "center",
//             "align-items": "center",
//             flex: "1",
//             gap: "2px",
//             color: badge.subheading_color,
//             fontSize: `${badge.subheading_size}px`,
//         });

//         // Create the title span
//         const title = document.createElement("span");
//         title.classList.add("title");
//         applyDynamicStyles(title, {
//             display: "block",
//             "font-weight": "600",
//             "font-size": `${badge.title_size}px`,
//             color: badge.title_color,
//             margin: "0",
//             "line-height": "1",
//             "word-wrap": "break-word",
//             "max-width": "100%",
//         });
//         title.innerText = page.title || "No Title";

//         // Create the subheading span
//         const subheading = document.createElement("span");
//         if (
//             badge.badge_type.includes("icon-block") ||
//             badge.badge_type.includes("payment-icons")
//         ) {
//             subheading.classList.add("subheading");
//         } else {
//             subheading.classList.add("subheading1");
//         }
//         applyDynamicStyles(subheading, {
//             display: "block",
//             "font-size": `${badge.subheading_size}px`,
//             color: badge.subheading_color,
//             "font-weight": "400",
//             margin: "0",
//             "line-height": "1",
//             "word-wrap": "break-word",
//             "max-width": "100%",
//         });
//         subheading.innerText = page.subheading || "No Subheading";

//         // Append the title and subheading to the text container
//         textContainer.appendChild(title);
//         textContainer.appendChild(subheading);

//         return textContainer;
//     }

//     // Function to create the CTA button
//     // function createCtaButton(badge, page) {
//     //     const ctaButton = document.createElement("a");
//     //     ctaButton.classList.add("cta-button");
//     //     ctaButton.href = "#";
//     //     ctaButton.target = "_blank";
//     //     applyDynamicStyles(ctaButton, {
//     //         "text-decoration": "none",
//     //         "flex-shrink": "0",
//     //         margin: "0",
//     //         border: "none",
//     //         "font-weight": "600",
//     //         padding: "10px 16px",
//     //         display: "flex",
//     //         "align-items": "center",
//     //         "justify-content": "center",
//     //         "font-size": `${badge.button_text_size}px`,
//     //         "background-color": badge.button_color,
//     //         color: badge.button_text_color,
//     //         "border-radius": `${badge.button_border_radius}px`,
//     //         cursor: "pointer",
//     //         transition: "background-color 0.2s ease-in-out",
//     //     });
//     //     ctaButton.innerText = page.button_text || "Shop Now";

//     //     return ctaButton;
//     // }


//     // Function to create the CTA button
//     function createCtaButton(badge, page) {
//         const ctaButton = document.createElement("a");
//         ctaButton.classList.add("cta-button");
//         ctaButton.target = "_blank"; // Correct target attribute
//         applyDynamicStyles(ctaButton, {
//             "text-decoration": "none",
//             "flex-shrink": "0",
//             margin: "0",
//             border: "none",
//             "font-weight": "600",
//             padding: "10px 16px",
//             display: "flex",
//             "align-items": "center",
//             "justify-content": "center",
//             "font-size": `${badge.button_text_size}px`,
//             "background-color": badge.button_color,
//             color: badge.button_text_color,
//             "border-radius": `${badge.button_border_radius}px`,
//             cursor: "pointer",
//             transition: "background-color 0.2s ease-in-out",
//         });
//         ctaButton.innerText = page.button_text || "Shop Now";

//         // Determine the URL based on call_to_action and the available JSON data
//         let url = "";
//         if (page.call_to_action === "button-cta") {
//             if (page.product_json) {
//                 const productData = JSON.parse(page.product_json);
//                 url = `/products/${productData.handle}`; // Remove the SHOP_URL prefix
//             } else if (page.collection_json) {
//                 const collectionData = JSON.parse(page.collection_json);
//                 url = `/collections/${collectionData.handle}`; // Remove the SHOP_URL prefix
//             } else if (page.external_url) {
//                 url = page.external_url; // Use the external URL directly
//                 // Ensure the URL is properly formatted
//                 if (!url.startsWith("http://") && !url.startsWith("https://")) {
//                     url = "https://" + url;
//                 }
//             }
//         } else if (page.call_to_action === "clickable-banner-cta") {
//             const bannerContainer = document.createElement("div");
//             bannerContainer.classList.add("clickable-banner");
//             applyDynamicStyles(bannerContainer, {
//                 cursor: "pointer",
//                 display: "flex",
//                 "flex-direction": "column",
//                 "align-items": "center",
//                 "justify-content": "center",
//                 padding: "16px",
//                 "background-color": badge.background_color,
//                 "border-radius": `${badge.corner_radius}px`,
//                 border: `${badge.border_size}px solid ${badge.border_color}`,
//             });

//             if (page.product_json) {
//                 const productData = JSON.parse(page.product_json);
//                 url = `/products/${productData.handle}`; // Remove the SHOP_URL prefix
//             } else if (page.collection_json) {
//                 const collectionData = JSON.parse(page.collection_json);
//                 url = `/collections/${collectionData.handle}`; // Remove the SHOP_URL prefix
//             } else if (page.external_url) {
//                 url = page.external_url; // Use the external URL directly
//                 // Ensure the URL is properly formatted
//                 if (!url.startsWith("http://") && !url.startsWith("https://")) {
//                     url = "https://" + url;
//                 }
//             }

//             bannerContainer.setAttribute("data-url", url);

//             bannerContainer.addEventListener("click", function () {
//                 const url = bannerContainer.getAttribute("data-url");
//                 if (url) {
//                     window.open(url, "_blank"); // Open in a new tab
//                 }
//             });

//             // Append the banner container to the badge container
//             const badgeContainer = document.querySelector(".badge-container, .badge-container1");
//             if (badgeContainer) {
//                 badgeContainer.appendChild(bannerContainer);
//             }

//             return bannerContainer;
//         }

//         ctaButton.href = url;
//         return ctaButton;
//     }



//     // Function to unescape and parse JSON
//     function parseJson(jsonString) {
//         try {
//             // First, unescape the string twice and remove the outer quotes
//             let unescapedJson = jsonString
//                 .replace(/\\"/g, '"')
//                 .replace(/\\"/g, '"');
//             unescapedJson = unescapedJson.slice(1, -1); // Remove the outer quotes

//             // Now try to parse the unescaped JSON
//             return JSON.parse(unescapedJson);
//         } catch (error) {
//             console.error("Error parsing JSON:", error); // Log the error for debugging
//             return null;
//         }
//     }

//     // Function to apply dynamic styles
//     function applyDynamicStyles(element, styles) {
//         if (styles) {
//             Object.keys(styles).forEach((key) => {
//                 element.style[key] = styles[key];
//             });
//         }
//     }

//     // Call the function to fetch and process badges
//     fetchPublishedBadges().then((data) => {
//         filterAndDisplayBadges(data);
//     });

//     // Log the collected product and collection IDs
//     console.log("Product IDs database:", prodIds);
//     console.log("Collection IDs database:", collIds);
//     console.log("Placement Product Types database:", placeProdTypes);

//     // Add dynamic CSS styles for specific cases
//     document.addEventListener("DOMContentLoaded", function () {
//         const containerDivs = document.querySelectorAll(
//             ".container-div, .container-div1",
//         );
//         containerDivs.forEach((containerDiv) => {
//             if (
//                 containerDiv.classList.contains("container-div") ||
//                 containerDiv.classList.contains("container-div1")
//             ) {
//                 applyDynamicStyles(containerDiv, {
//                     "grid-column": "1 / -1",
//                 });
//             }
//         });
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     var prodIds = [];
//     var collIds = [];
//     var placeProdTypes = [];

//     // Function to fetch published badges
//     function fetchPublishedBadges() { 
//         return fetch(`${APP_URL}api/front-end/badges/published`)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error(
//                         "Network response was not ok: " + response.statusText,
//                     );
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 console.log("Fetched data:", data); // Log the fetched data
//                 if (data && data.length > 0) {
//                     data.forEach((badge) => {
//                         const badgePages = badge.badge_pages; // Ensure correct property name
//                         console.log("Badge pages:", badgePages); // Log the badge pages

//                         // Create badge container
//                         const badgeContainer = createBadgeContainer(badge, badgePages[0]);

//                         // Loop through each page and display additional fields
//                         if (badgePages && badgePages.length > 0) {
//                             badgePages.forEach((page) => {
//                                 console.log("Processing page:", page); // Log each page

//                                 // Create the main container div
//                                 const containerDiv = createIconBlock(
//                                     badge,
//                                     page,
//                                 );

//                                 // Append the container to the badge container
//                                 badgeContainer.appendChild(containerDiv);
//                             });
//                         } else {
//                             console.log(
//                                 "No badge pages found for badge:",
//                                 badge,
//                             ); // Log if no badge pages
//                         }
//                     });
//                 } else {
//                     console.log("No published badges found."); // Log if no badges are found
//                 }

//                 // Return the fetched data for further processing
//                 return data;
//             })
//             .catch((error) => {
//                 console.error("Error fetching badge data:", error);
//             });
//     }

//     // Function to get the current product ID
//     function getProductId() {
//         const productElement = document.querySelector("[data-product-id]");
//         return productElement
//             ? productElement.getAttribute("data-product-id")
//             : null;
//     }

//     // Function to fetch collections for the given product ID
//     async function fetchCollectionsForProduct(productId) {
//         // Ensure APP_URL and SHOP_URL are properly defined globally
//         const endpoint = `${APP_URL}api/getProductCollectionId/${productId}?shop=${SHOP_URL}`;

//         try {
//             const response = await fetch(endpoint);
//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }
//             const collectionIds = await response.json();
//             console.log("Collection IDs:", collectionIds);
//             return collectionIds;
//         } catch (error) {
//             console.error("Failed to fetch collections:", error);
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
//         const tags =
//             document
//                 .querySelector("[data-product-tags]")
//                 ?.getAttribute("data-product-tags") || "";
//         const productTags = tags.split(",").map((tag) => tag.trim());
//         console.log("Product Tags:", productTags);

//         // Filter badges based on product ID, collection IDs, and tags
//         const filteredBadges = data.filter((badge) => {
//             const badgePages = badge.badge_pages;
//             return badgePages.some((page) => {
//                 const placeProdType = page.placement_product_type;
//                 const productIds = page.placement_product_json
//                     ? parseJson(page.placement_product_json).map((product) => product.id.split("/").pop())
//                     : [];
//                 const collectionIdsMatch = page.placement_collection_json
//                     ? parseJson(page.placement_collection_json).map(
//                           (collection) => collection.id.split("/").pop(),
//                       )
//                     : [];
//                 const tagsMatch = productTags.some((tag) => {
//                     const pageTags = page.placement_tags_json
//                         ? page.placement_tags_json
//                               .split(",")
//                               .map((tag) => tag.trim())
//                         : [];
//                     return pageTags.includes(tag);
//                 });

//                 return (
//                     placeProdType === "allProducts" ||
//                     (placeProdType === "specificProducts" &&
//                         productIds.includes(productId)) ||
//                     (placeProdType === "specificCollections" &&
//                         collectionIdsMatch.some((collectionId) =>
//                             collectionIds.includes(collectionId),
//                         )) ||
//                     (placeProdType === "specificTags" && tagsMatch)
//                 );
//             });
//         });

//         console.log("Filtered badges:", filteredBadges);

//         // Clear existing badges
//         const productForm = document.querySelector(".product-form");
//         if (productForm) {
//             // Remove only the badge containers, not the entire content
//             const badgeContainers = productForm.querySelectorAll(
//                 ".badge-container, .badge-container1",
//             );
//             badgeContainers.forEach((container) => container.remove());
//         }

//         // Display the filtered badges
//         if (filteredBadges.length > 0) {
//             filteredBadges.forEach((badge) => {
//                 const badgePages = badge.badge_pages;
//                 const productForm = document.querySelector(".product-form");

//                 if (productForm) {
//                     const badgeContainer = createBadgeContainer(badge, badgePages[0]);
//                     productForm.appendChild(badgeContainer);

//                     if (badgePages && badgePages.length > 0) {
//                         badgePages.forEach((page) => {
//                             const containerDiv = createIconBlock(badge, page);
//                             badgeContainer.appendChild(containerDiv);
//                         });
//                     }
//                 }
//             });
//         } else {
//             // alert('No published badges found for the current product.');
//         }
//     }

//     function formatBorderStyle(borderSize, borderColor) {
//         return `${borderSize}px solid ${borderColor}`;
//     }

//     // Function to create the badge container
//     function createBadgeContainer(badge, page) {
//         const badgeContainer = document.createElement("div");
//         const borderStyle = formatBorderStyle(
//             badge.border_size,
//             badge.border_color,
//         );

//         if (
//             badge.badge_type.includes("icon-block") ||
//             badge.badge_type.includes("payment-icons")
//         ) {
//             badgeContainer.classList.add("badge-container");
//             applyDynamicStyles(badgeContainer, {
//                 display: "grid",
//                 "grid-template-columns":
//                     "repeat(auto-fill, minmax(150px, 1fr))",
//                 backgroundColor: badge.background_color,
//                 border: borderStyle,
//                 borderRadius: `${badge.corner_radius}px`,
//                 padding: "10px",
//                 marginTop: "20px",
//                 gap: "10px",
//                 padding: "16px calc(16px)",
//                 marginBottom: "20px",
//             });
//         } else {
//             badgeContainer.classList.add("badge-container1");
//             applyDynamicStyles(badgeContainer, {
//                 display: "flex",
//                 // "flex-direction": "column",
//                 gap: "10px",
//                 backgroundColor: badge.background_color,
//                 border: borderStyle,
//                 borderRadius: `${badge.corner_radius}px`,
//                 marginTop: "20px",
//                 marginBottom: "20px",
//                 padding: "16px calc(16px)",
//             });
//         }

//         // Make the entire badge clickable if call_to_action is clickable-banner-cta
//         if (page.call_to_action === "clickable-banner-cta") {
//             badgeContainer.style.cursor = "pointer";
//             let url = "";
//             if (page.product_json) {
//                 const productData = JSON.parse(page.product_json);
//                 url = `/products/${productData.handle}`; // Remove the SHOP_URL prefix
//             } else if (page.collection_json) {
//                 const collectionData = JSON.parse(page.collection_json);
//                 url = `/collections/${collectionData.handle}`; // Remove the SHOP_URL prefix
//             } else if (page.external_url) {
//                 url = page.external_url; // Use the external URL directly
//                 // Ensure the URL is properly formatted
//                 if (!url.startsWith("http://") && !url.startsWith("https://")) {
//                     url = "https://" + url;
//                 }
//             }

//             badgeContainer.addEventListener("click", function() {
//                 if (url) {
//                     window.open(url, "_blank"); // Open in a new tab
//                 }
//             });
//         }

//         return badgeContainer;
//     }

//     // Function to create the main container div for icons
//     function createIconBlock(badge, page) {
//         const containerDiv = document.createElement("div");
//         if (
//             badge.badge_type.includes("icon-block") ||
//             badge.badge_type.includes("payment-icons")
//         ) {
//             containerDiv.classList.add("container-div");
//             applyDynamicStyles(containerDiv, {
//                 display: "grid",
//                 alignContent: "start",
//                 rowGap: "4px",
//                 padding: "0",
//                 "text-align": "center",
//                 "border-radius": "8px",
//                 color: badge.icon_color,
//                 fontSize: `${badge.title_size}px`,
//             });
//         } else {
//             containerDiv.classList.add("container-div1");
//             applyDynamicStyles(containerDiv, {
//                 display: "flex",
//                 "justify-content": "space-between",
//                 "align-items": "center",
//                 gap: "10px",
//                 color: badge.icon_color,
//                 fontSize: `${badge.title_size}px`,
//             });
//         }

//         // Create the icon container div
//         const iconContainer = document.createElement("div");
//         iconContainer.classList.add("icon-container");
//         iconContainer.innerHTML = page.icon_svg;
//         containerDiv.appendChild(iconContainer);

//         // Create the text container div
//         const textContainer = createTextContainer(badge, page);
//         containerDiv.appendChild(textContainer);

//         // Create the CTA button (if applicable)
//         if (page.call_to_action === "button-cta") {
//             const ctaButton = createCtaButton(badge, page);
//             containerDiv.appendChild(ctaButton);
//         }

//         return containerDiv;
//     }

//     // Function to create the text container
//     function createTextContainer(badge, page) {
//         const textContainer = document.createElement("div");
//         textContainer.classList.add("text-container");
//         textContainer.id = "text_container";
//         applyDynamicStyles(textContainer, {
//             display: "flex",
//             "flex-direction": "column",
//             "justify-content": "center",
//             "align-items": "center",
//             flex: "1",
//             gap: "2px",
//             color: badge.subheading_color,
//             fontSize: `${badge.subheading_size}px`,
//         });

//         // Create the title span
//         const title = document.createElement("span");
//         title.classList.add("title");
//         applyDynamicStyles(title, {
//             display: "block",
//             "font-weight": "600",
//             "font-size": `${badge.title_size}px`,
//             color: badge.title_color,
//             margin: "0",
//             "line-height": "1",
//             "word-break": "break-word",
//             "max-width": "100%",

//         });
//         title.innerText = page.title || "No Title";

//         // Create the subheading span
//         const subheading = document.createElement("span");
//         if (
//             badge.badge_type.includes("icon-block") ||
//             badge.badge_type.includes("payment-icons")
//         ) {
//             subheading.classList.add("subheading");
//         } else {
//             subheading.classList.add("subheading1");
//         }
//         applyDynamicStyles(subheading, {
//             display: "block",
//             "font-size": `${badge.subheading_size}px`,
//             color: badge.subheading_color,
//             "font-weight": "400",
//             margin: "0",
//             "line-height": "1",
//             "word-break": "break-word",
//             "max-width": "100%",
//         });
//         subheading.innerText = page.subheading || "No Subheading";

//         // Append the title and subheading to the text container
//         textContainer.appendChild(title);
//         textContainer.appendChild(subheading);

//         return textContainer;
//     }

//     // Function to create the CTA button
//     function createCtaButton(badge, page) {
//         const ctaButton = document.createElement("a");
//         ctaButton.classList.add("cta-button");
//         ctaButton.target = "_blank"; // Correct target attribute
//         applyDynamicStyles(ctaButton, {
//             "text-decoration": "none",
//             "flex-shrink": "0",
//             margin: "0",
//             border: "none",
//             "font-weight": "600",
//             padding: "10px 16px",
//             display: "flex",
//             "align-items": "center",
//             "justify-content": "center",
//             "font-size": `${badge.button_text_size}px`,
//             "background-color": badge.button_color,
//             color: badge.button_text_color,
//             "border-radius": `${badge.button_border_radius}px`,
//             cursor: "pointer",
//             transition: "background-color 0.2s ease-in-out",
//         });
//         ctaButton.innerText = page.button_text || "Shop Now";

//         // Determine the URL based on call_to_action and the available JSON data
//         let url = "";
//         if (page.call_to_action === "button-cta") {
//             if (page.product_json) {
//                 const productData = JSON.parse(page.product_json);
//                 url = `/products/${productData.handle}`; // Remove the SHOP_URL prefix
//             } else if (page.collection_json) {
//                 const collectionData = JSON.parse(page.collection_json);
//                 url = `/collections/${collectionData.handle}`; // Remove the SHOP_URL prefix
//             } else if (page.external_url) {
//                 url = page.external_url; // Use the external URL directly
//                 // Ensure the URL is properly formatted
//                 if (!url.startsWith("http://") && !url.startsWith("https://")) {
//                     url = "https://" + url;
//                 }
//             }
//         }

//         ctaButton.href = url;
//         return ctaButton;
//     }

//     // Function to unescape and parse JSON
//     function parseJson(jsonString) {
//         try {
//             // First, unescape the string twice and remove the outer quotes
//             let unescapedJson = jsonString
//                 .replace(/\\"/g, '"')
//                 .replace(/\\"/g, '"');
//             unescapedJson = unescapedJson.slice(1, -1); // Remove the outer quotes

//             // Now try to parse the unescaped JSON
//             return JSON.parse(unescapedJson);
//         } catch (error) {
//             console.error("Error parsing JSON:", error); // Log the error for debugging
//             return null;
//         }
//     }

//     // Function to apply dynamic styles
//     function applyDynamicStyles(element, styles) {
//         if (styles) {
//             Object.keys(styles).forEach((key) => {
//                 element.style[key] = styles[key];
//             });
//         }
//     }

//     // Call the function to fetch and process badges
//     fetchPublishedBadges().then((data) => {
//         filterAndDisplayBadges(data);
//     });

//     // Log the collected product and collection IDs
//     console.log("Product IDs database:", prodIds);
//     console.log("Collection IDs database:", collIds);
//     console.log("Placement Product Types database:", placeProdTypes);

//     // Add dynamic CSS styles for specific cases
//     document.addEventListener("DOMContentLoaded", function () {
//         const containerDivs = document.querySelectorAll(
//             ".container-div, .container-div1",
//         );
//         containerDivs.forEach((containerDiv) => {
//             if (
//                 containerDiv.classList.contains("container-div") ||
//                 containerDiv.classList.contains("container-div1")
//             ) {
//                 applyDynamicStyles(containerDiv, {
//                     "grid-column": "1 / -1",
//                 });
//             }
//         });
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    var prodIds = [];
    var collIds = [];
    var placeProdTypes = [];

    // Function to fetch published badges
    function fetchPublishedBadges() {
        return fetch(`${APP_URL}api/front-end/badges/published`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        "Network response was not ok: " + response.statusText,
                    );
                }
                return response.json();
            })
            .then((data) => {
                console.log("Fetched data:", data); // Log the fetched data
                if (data && data.length > 0) {
                    data.forEach((badge) => {
                        const badgePages = badge.badge_pages; // Ensure correct property name
                        console.log("Badge pages:", badgePages); // Log the badge pages

                        // Create badge container
                        const badgeContainer = createBadgeContainer(badge, badgePages[0]);

                        // Loop through each page and display additional fields
                        if (badgePages && badgePages.length > 0) {
                            badgePages.forEach((page) => {
                                console.log("Processing page:", page); // Log each page

                                // Create the main container div
                                const containerDiv = createIconBlock(
                                    badge,
                                    page,
                                );

                                // Append the container to the badge container
                                badgeContainer.appendChild(containerDiv);
                            });
                        } else {
                            console.log(
                                "No badge pages found for badge:",
                                badge,
                            ); // Log if no badge pages
                        }
                    });
                } else {
                    console.log("No published badges found."); // Log if no badges are found
                }

                // Return the fetched data for further processing
                return data;
            })
            .catch((error) => {
                console.error("Error fetching badge data:", error);
            });
    }

    // Function to get the current product ID
    function getProductId() {
        const productElement = document.querySelector("[data-product-id]");
        return productElement
            ? productElement.getAttribute("data-product-id")
            : null;
    }

    // Function to fetch collections for the given product ID
    async function fetchCollectionsForProduct(productId) {
        // Ensure APP_URL and SHOP_URL are properly defined globally
        const endpoint = `${APP_URL}api/getProductCollectionId/${productId}?shop=${SHOP_URL}`;

        try {
            const response = await fetch(endpoint);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const collectionIds = await response.json();
            console.log("Collection IDs:", collectionIds);
            return collectionIds;
        } catch (error) {
            console.error("Failed to fetch collections:", error);
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
        const tags =
            document
                .querySelector("[data-product-tags]")
                ?.getAttribute("data-product-tags") || "";
        const productTags = tags.split(",").map((tag) => tag.trim());
        console.log("Product Tags:", productTags);

        // Filter badges based on product ID, collection IDs, and tags
        const filteredBadges = data.filter((badge) => {
            const badgePages = badge.badge_pages;
            return badgePages.some((page) => {
                const placeProdType = page.placement_product_type;
                const productIds = page.placement_product_json
                    ? parseJson(page.placement_product_json).map((product) => product.id.split("/").pop())
                    : [];
                const collectionIdsMatch = page.placement_collection_json
                    ? parseJson(page.placement_collection_json).map(
                        (collection) => collection.id.split("/").pop(),
                    )
                    : [];
                const tagsMatch = productTags.some((tag) => {
                    const pageTags = page.placement_tags_json
                        ? page.placement_tags_json
                            .split(",")
                            .map((tag) => tag.trim())
                        : [];
                    return pageTags.includes(tag);
                });

                return (
                    placeProdType === "allProducts" ||
                    (placeProdType === "specificProducts" &&
                        productIds.includes(productId)) ||
                    (placeProdType === "specificCollections" &&
                        collectionIdsMatch.some((collectionId) =>
                            collectionIds.includes(collectionId),
                        )) ||
                    (placeProdType === "specificTags" && tagsMatch)
                );
            });
        });

        console.log("Filtered badges:", filteredBadges);

        // Clear existing badges
        const productForm = document.querySelector(".product-form");
        if (productForm) {
            // Remove only the badge containers, not the entire content
            const badgeContainers = productForm.querySelectorAll(
                ".badge-container, .badge-container1",
            );
            badgeContainers.forEach((container) => container.remove());
        }

        // Display the filtered badges
        if (filteredBadges.length > 0) {
            filteredBadges.forEach((badge) => {
                const badgePages = badge.badge_pages;
                const productForm = document.querySelector(".product-form");

                if (productForm) {
                    const badgeContainer = createBadgeContainer(badge, badgePages[0]);
                    productForm.appendChild(badgeContainer);

                    if (badgePages && badgePages.length > 0) {
                        badgePages.forEach((page) => {
                            const containerDiv = createIconBlock(badge, page);
                            badgeContainer.appendChild(containerDiv);
                        });
                    }
                }
            });
        } else {
            // alert('No published badges found for the current product.');
        }
    }

    function formatBorderStyle(borderSize, borderColor) {
        return `${borderSize}px solid ${borderColor}`;
    }

    // Function to create the badge container
    function createBadgeContainer(badge, page) {
        const badgeContainer = document.createElement("div");
        const borderStyle = formatBorderStyle(
            badge.border_size,
            badge.border_color,
        );

        if (
            badge.badge_type.includes("icon-block") ||
            badge.badge_type.includes("payment-icons")
        ) {
            badgeContainer.classList.add("badge-container");
            applyDynamicStyles(badgeContainer, {
                display: "grid",
                "grid-template-columns":
                    "repeat(auto-fill, minmax(150px, 1fr))",
                backgroundColor: badge.background_color,
                border: borderStyle,
                borderRadius: `${badge.corner_radius}px`,
                padding: "10px",
                marginTop: "20px",
                gap: "10px",
                padding: "16px calc(16px)",
                marginBottom: "20px",
            });
        } else {
            badgeContainer.classList.add("badge-container1");
            applyDynamicStyles(badgeContainer, {
                display: "flex",
                // "flex-direction": "column",
                gap: "10px",
                backgroundColor: badge.background_color,
                border: borderStyle,
                borderRadius: `${badge.corner_radius}px`,
                marginTop: "20px",
                marginBottom: "20px",
                padding: "16px calc(16px)",
            });
        }

        // Make the entire badge clickable if call_to_action is clickable-banner-cta
        if (page.call_to_action === "clickable-banner-cta") {
            badgeContainer.style.cursor = "pointer";
            let url = "";
            if (page.product_json) {
                const productData = JSON.parse(page.product_json);
                url = `/products/${productData.handle}`; // Remove the SHOP_URL prefix
            } else if (page.collection_json) {
                const collectionData = JSON.parse(page.collection_json);
                url = `/collections/${collectionData.handle}`; // Remove the SHOP_URL prefix
            } else if (page.external_url) {
                url = page.external_url; // Use the external URL directly
                // Ensure the URL is properly formatted
                if (!url.startsWith("http://") && !url.startsWith("https://")) {
                    url = "https://" + url;
                }
            }

            badgeContainer.addEventListener("click", function () {
                if (url) {
                    window.open(url, "_blank"); // Open in a new tab
                }
            });
        }

        return badgeContainer;
    }

    // Function to create the main container div for icons

    function createIconBlock(badge, page) {
        const containerDiv = document.createElement("div");
        if (
            badge.badge_type.includes("icon-block") ||
            badge.badge_type.includes("payment-icons")
        ) {
            containerDiv.classList.add("container-div");
            applyDynamicStyles(containerDiv, {
                display: "grid",
                alignContent: "start",
                rowGap: "4px",
                padding: "0",
                "text-align": "center",
                "border-radius": "8px",
                color: badge.icon_color,
                fontSize: `${badge.title_size}px`,
            });

            // Make the container-div clickable if call_to_action is clickable-banner-cta
            if (page.call_to_action === "clickable-banner-cta") {
                containerDiv.style.cursor = "pointer";
                let url = "";
                if (page.product_json) {
                    const productData = JSON.parse(page.product_json);
                    url = `/products/${productData.handle}`; // Remove the SHOP_URL prefix
                } else if (page.collection_json) {
                    const collectionData = JSON.parse(page.collection_json);
                    url = `/collections/${collectionData.handle}`; // Remove the SHOP_URL prefix
                } else if (page.external_url) {
                    url = page.external_url; // Use the external URL directly
                    // Ensure the URL is properly formatted
                    if (!url.startsWith("http://") && !url.startsWith("https://")) {
                        url = "https://" + url;
                    }
                }

                containerDiv.addEventListener("click", function () {
                    if (url) {
                        window.open(url, "_blank"); // Open in a new tab
                    }
                });
            }
        } else {
            containerDiv.classList.add("container-div1");
            applyDynamicStyles(containerDiv, {
                display: "flex",
                "justify-content": "space-between",
                "align-items": "center",
                gap: "10px",
                color: badge.icon_color,
                fontSize: `${badge.title_size}px`,
            });
        }

        // Create the icon container div
        const iconContainer = document.createElement("div");
        iconContainer.classList.add("icon-container");
        iconContainer.innerHTML = page.icon_svg;
        containerDiv.appendChild(iconContainer);

        // Create the text container div
        const textContainer = createTextContainer(badge, page);
        containerDiv.appendChild(textContainer);

        // Create the CTA button (if applicable)
        if (page.call_to_action === "button-cta") {
            const ctaButton = createCtaButton(badge, page);
            ctaButton.style.cursor = "pointer"; // Apply cursor pointer to the button
            containerDiv.appendChild(ctaButton);
        }

        return containerDiv;
    }


    // Function to create the text container
    function createTextContainer(badge, page) {
        const textContainer = document.createElement("div");
        textContainer.classList.add("text-container");
        textContainer.id = "text_container";
        applyDynamicStyles(textContainer, {
            display: "flex",
            "flex-direction": "column",
            "justify-content": "center",
            "align-items": "center",
            flex: "1",
            gap: "2px",
            color: badge.subheading_color,
            fontSize: `${badge.subheading_size}px`,
        });

        // Create the title span
        const title = document.createElement("span");
        title.classList.add("title");
        applyDynamicStyles(title, {
            display: "block",
            "font-weight": "600",
            "font-size": `${badge.title_size}px`,
            color: badge.title_color,
            margin: "0",
            "line-height": "1",
            "word-break": "break-word",
            "max-width": "100%",

        });
        title.innerText = page.title || "No Title";

        // Create the subheading span
        const subheading = document.createElement("span");
        if (
            badge.badge_type.includes("icon-block") ||
            badge.badge_type.includes("payment-icons")
        ) {
            subheading.classList.add("subheading");
        } else {
            subheading.classList.add("subheading1");
        }
        applyDynamicStyles(subheading, {
            display: "block",
            "font-size": `${badge.subheading_size}px`,
            color: badge.subheading_color,
            "font-weight": "400",
            margin: "0",
            "line-height": "1",
            "word-break": "break-word",
            "max-width": "100%",
        });
        subheading.innerText = page.subheading || "No Subheading";

        // Append the title and subheading to the text container
        textContainer.appendChild(title);
        textContainer.appendChild(subheading);

        return textContainer;
    }

    // Function to create the CTA button
    function createCtaButton(badge, page) {
        const ctaButton = document.createElement("a");
        ctaButton.classList.add("cta-button");
        ctaButton.target = "_blank"; // Correct target attribute
        applyDynamicStyles(ctaButton, {
            "text-decoration": "none",
            "flex-shrink": "0",
            margin: "0",
            border: "none",
            "font-weight": "600",
            padding: "10px 16px",
            display: "flex",
            "align-items": "center",
            "justify-content": "center",
            "font-size": `${badge.button_text_size}px`,
            "background-color": badge.button_color,
            color: badge.button_text_color,
            "border-radius": `${badge.button_border_radius}px`,
            transition: "background-color 0.2s ease-in-out",
        });
        ctaButton.innerText = page.button_text || "Shop Now";

        // Determine the URL based on call_to_action and the available JSON data
        let url = "";
        if (page.call_to_action === "button-cta") {
            if (page.product_json) {
                const productData = JSON.parse(page.product_json);
                url = `/products/${productData.handle}`; // Remove the SHOP_URL prefix
            } else if (page.collection_json) {
                const collectionData = JSON.parse(page.collection_json);
                url = `/collections/${collectionData.handle}`; // Remove the SHOP_URL prefix
            } else if (page.external_url) {
                url = page.external_url; // Use the external URL directly
                // Ensure the URL is properly formatted
                if (!url.startsWith("http://") && !url.startsWith("https://")) {
                    url = "https://" + url;
                }
            }
        }

        ctaButton.href = url;
        return ctaButton;
    }
    // Function to unescape and parse JSON
    function parseJson(jsonString) {
        try {
            // First, unescape the string twice and remove the outer quotes
            let unescapedJson = jsonString
                .replace(/\\"/g, '"')
                .replace(/\\"/g, '"');
            unescapedJson = unescapedJson.slice(1, -1); // Remove the outer quotes

            // Now try to parse the unescaped JSON
            return JSON.parse(unescapedJson);
        } catch (error) {
            console.error("Error parsing JSON:", error); // Log the error for debugging
            return null;
        }
    }

    // Function to apply dynamic styles
    function applyDynamicStyles(element, styles) {
        if (styles) {
            Object.keys(styles).forEach((key) => {
                element.style[key] = styles[key];
            });
        }
    }

    // Call the function to fetch and process badges
    fetchPublishedBadges().then((data) => {
        filterAndDisplayBadges(data);
    });

    // Log the collected product and collection IDs
    console.log("Product IDs database:", prodIds);
    console.log("Collection IDs database:", collIds);
    console.log("Placement Product Types database:", placeProdTypes);

    // Add dynamic CSS styles for specific cases
    document.addEventListener("DOMContentLoaded", function () {
        const containerDivs = document.querySelectorAll(
            ".container-div, .container-div1",
        );
        containerDivs.forEach((containerDiv) => {
            if (
                containerDiv.classList.contains("container-div") ||
                containerDiv.classList.contains("container-div1")
            ) {
                applyDynamicStyles(containerDiv, {
                    "grid-column": "1 / -1",
                });
            }
        });
    });
});
