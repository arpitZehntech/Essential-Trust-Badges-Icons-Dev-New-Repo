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

document.addEventListener("DOMContentLoaded", function () {

    // Function to fetch published badges
    function fetchPublishedBadges() {
        fetch(`${APP_URL}api/front-end/badges/published`)
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
                        const badgeContainer = document.createElement('div');
                        badgeContainer.style.marginBottom = '40px';

                        // Badge Type
                        const badgeType = document.createElement('p');
                        badgeType.innerText = `Badge Type: ${badge.badge_type || 'No Type'}`;
                        badgeContainer.appendChild(badgeType);

                        // Add badge container to the page
                        const productForm = document.querySelector('.product-form');
                        if (productForm) {
                            productForm.appendChild(badgeContainer); // Append badge container to the product form
                        }

                        if (badgePages && badgePages.length > 0) {
                            badgePages.forEach(page => {
                                console.log("Processing page:", page); // Log each page

                                // Create the main container div
                                const containerDiv = document.createElement('div');
                                containerDiv.style.width = '100%';
                                containerDiv.style.padding = '16px';
                                containerDiv.style.border = '1px solid rgb(197, 200, 209)';
                                containerDiv.style.borderRadius = '8px';
                                containerDiv.style.display = 'flex';
                                containerDiv.style.justifyContent = 'space-between';
                                containerDiv.style.alignItems = 'center';
                                containerDiv.style.gap = '10px';
                                containerDiv.style.position = 'relative';
                                containerDiv.style.marginTop = '20px';
                                containerDiv.style.marginBottom = '20px';
                                containerDiv.style.background = 'rgb(255, 255, 255)';

                                // Create the icon container div
                                const iconContainer = document.createElement('div');
                                iconContainer.innerHTML = page.icon_svg;  // Inject the SVG string as HTML
                                containerDiv.appendChild(iconContainer);

                                // Create the text container div
                                const textContainer = document.createElement('div');
                                textContainer.id = 'text_container';
                                textContainer.style.display = 'flex';
                                textContainer.style.flexDirection = 'column';
                                textContainer.style.justifyContent = 'flex-start';
                                textContainer.style.alignItems = 'flex-start';
                                textContainer.style.flex = '1';
                                textContainer.style.gap = '2px';

                                // Create the title span
                                const title = document.createElement('span');
                                title.id = 'title';
                                title.style.display = 'block';
                                title.style.fontWeight = '600';
                                title.style.fontSize = '16px';
                                title.style.color = '#202223';
                                title.style.margin = '0';
                                title.style.lineHeight = '1';
                                title.style.wordWrap = 'break-word';
                                title.style.maxWidth = '100%';
                                title.innerText = page.title || 'No Title';

                                // Create the subheading span
                                const subheading = document.createElement('span');
                                subheading.id = 'subheading';
                                subheading.style.display = 'block';
                                subheading.style.fontSize = '14px';
                                subheading.style.color = '#96a4b6';
                                subheading.style.fontWeight = '400';
                                subheading.style.margin = '0';
                                subheading.style.textAlign = 'left';
                                subheading.style.lineHeight = '1';
                                subheading.style.wordWrap = 'break-word';
                                subheading.style.maxWidth = '100%';
                                subheading.innerText = page.subheading || 'No Subheading';

                                // Append the title and subheading to the text container
                                textContainer.appendChild(title);
                                textContainer.appendChild(subheading);

                                // Create the CTA button
                                const ctaButton = document.createElement('a');
                                ctaButton.href = '#';
                                ctaButton.id = 'cta-button';
                                ctaButton.target = '_blank';
                                ctaButton.style.textDecoration = 'none';
                                ctaButton.style.flexShrink = '0';
                                ctaButton.style.margin = '0';
                                ctaButton.style.border = 'none';
                                ctaButton.style.fontWeight = '600';
                                ctaButton.style.padding = '10px 16px';
                                ctaButton.style.display = 'flex';
                                ctaButton.style.alignItems = 'center';
                                ctaButton.style.justifyContent = 'center';
                                ctaButton.style.fontSize = '14px';
                                ctaButton.style.backgroundColor = '#202223';
                                ctaButton.style.color = '#fafafa';
                                ctaButton.style.borderRadius = '4px';
                                ctaButton.style.cursor = 'pointer';
                                ctaButton.style.transition = 'background-color 0.2s ease-in-out';
                                ctaButton.innerText = page.button_text || 'Shop Now';

                                // Append the icon container, text container, and CTA button to the main container
                                containerDiv.appendChild(iconContainer);
                                containerDiv.appendChild(textContainer);
                                containerDiv.appendChild(ctaButton);

                                // Append the container to the badge container
                                badgeContainer.appendChild(containerDiv);

                                if (badge.badge_type.includes('icon-block') || badge.badge_type.includes('payment-icons')) {
                                    renderIconsBlock(badgeContainer, page);
                                }
                            });
                        } else {
                            console.log("No badge pages found for badge:", badge); // Log if no badge pages
                        }
                    });
                } else {
                    console.log("No published badges found."); // Log if no badges are found
                    alert('No published badges found.');
                }
            })
            .catch(error => {
                console.error('Error fetching badge data:', error);
                alert('Error fetching badge data: ' + error.message);
            });
    }

    // Combined render function for icon-block and payment-icons badge types
    function renderIconsBlock(container, page) {
        if (page.badge_pages && Array.isArray(page.badge_pages)) {
            const containerDiv = document.createElement('div');
            containerDiv.style.width = '100%';
            containerDiv.style.padding = '20px';
            containerDiv.style.backgroundColor = '#f7f7f7';
            containerDiv.style.borderRadius = '10px';
            containerDiv.style.display = 'flex';
            containerDiv.style.justifyContent = 'space-around';
            containerDiv.style.alignItems = 'center';
            containerDiv.style.margin = '20px 0';
            containerDiv.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

            page.badge_pages.forEach(badge => {
                // Create the badge container
                const badgeContainer = document.createElement('div');
                badgeContainer.style.textAlign = 'center';
                badgeContainer.style.padding = '10px';

                // Create the icon
                const icon = document.createElement('img');
                icon.src = badge.icon_svg;
                icon.style.width = '50px';
                icon.style.height = '50px';
                icon.style.marginBottom = '10px';

                // Create the title
                const title = document.createElement('h3');
                title.innerText = badge.title || 'No Title';
                title.style.fontSize = '18px';
                title.style.fontWeight = 'bold';
                title.style.margin = '10px 0';

                // Create the subheading
                const subheading = document.createElement('p');
                subheading.innerText = badge.subheading || 'No Subheading';
                subheading.style.fontSize = '14px';
                subheading.style.color = '#888';
                subheading.style.marginBottom = '15px';

                // Create the CTA button
                const button = document.createElement('a');
                button.href = '#';
                button.innerText = 'Shop now';
                button.style.display = 'inline-block';
                button.style.padding = '10px 20px';
                button.style.backgroundColor = '#202223';
                button.style.color = '#fff';
                button.style.textDecoration = 'none';
                button.style.borderRadius = '5px';
                button.style.fontWeight = 'bold';
                button.style.transition = 'background-color 0.3s';

                button.addEventListener('mouseenter', () => {
                    button.style.backgroundColor = '#333';
                });

                button.addEventListener('mouseleave', () => {
                    button.style.backgroundColor = '#202223';
                });

                // Append all elements to the badge container
                badgeContainer.appendChild(icon);
                badgeContainer.appendChild(title);
                badgeContainer.appendChild(subheading);
                badgeContainer.appendChild(button);

                // Append the badge container to the main container
                containerDiv.appendChild(badgeContainer);
            });

            // Append the main container to the badge container
            container.appendChild(containerDiv);
        }
    }

    // Call the function to fetch and display badges
    fetchPublishedBadges();
});



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
