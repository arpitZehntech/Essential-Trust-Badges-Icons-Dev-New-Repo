// working code at 25/10/2024 for fetch the values from databse and show in table in main page

// import React, { useState, useEffect, useCallback } from 'react';
// import { Page, Card, Layout, Badge, Button, Icon, Popover, ActionList } from "@shopify/polaris";
// import { DragHandleMinor } from "@shopify/polaris-icons";
// import * as img from 'react-icons/lia'; // Example icon, replace with actual icon import
// import './mainPage.css';

// import { LiaTruckMovingSolid } from "react-icons/lia";

// const MainPage = ({ onCreateBadgeClick }) => {
//   const [badges, setBadges] = useState([]); // State for badges
//   const [activePopoverId, setActivePopoverId] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // Function to toggle popover
//   const togglePopoverActive = useCallback(
//     (popoverId) => () => setActivePopoverId((active) => (active === popoverId ? null : popoverId)),
//     []
//   );

//   // Actions for the popover
//   const actions = [
//     { content: 'Copy Badge ID' },
//     { content: 'Edit' },
//     { content: 'Delete', destructive: true },
//     { content: 'Move up' },
//     { content: 'Move down' },
//   ];

//   // Fetch badges from API on component mount
//   useEffect(() => {
//     const fetchBadges = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch('/api/badges'); // Adjust the API endpoint as needed
//         const data = await response.json();
//         console.log("Fetched badges data:", data);
//         setBadges(data);
//       } catch (error) {
//         console.error('Error fetching badges:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBadges();
//   }, []);

//   // Function to get the icon component based on icon_name
//   const getIconComponent = (iconName) => {
//     try {
//       return img[iconName];
//     } catch (error) {
//       console.error(`Error importing icon ${iconName}:`, error);
//       return null; // Default return null if the icon is not found
//     }
//   };

//   return (
//     <Page>
//       <div className="Polaris-Box mainBox" style={{ padding: 'var(--p-space-4) var(--p-space-0)' }}>
//         <div className="Polaris-Page-Header--noBreadcrumbs Polaris-Page-Header--mediumTitle">
//           <div className="Polaris-Page-Header__Row">
//             <div className="Polaris-Page-Header__TitleWrapper">
//               <h1 className="Polaris-Header-Title">Your Badges</h1>
//             </div>
//             <div className="Polaris-Page-Header__RightAlign">
//               <div className="Polaris-Page-Header__PrimaryActionWrapper">
//                 <div className="Polaris-Box Polaris-Box--printHidden">
//                   <button
//                     className="Polaris-Button Polaris-Button--primary"
//                     type="button"
//                     onClick={onCreateBadgeClick}
//                   >
//                     <span className="Polaris-Button__Content">
//                       <span className="Polaris-Button__Text">Create new badge</span>
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {badges.length > 0 ? (
//         <Layout>
//           <Layout.Section>
//             <Card>
//               <table className="polaris-table" style={{ width: '100%' }}>
//                 <thead>
//                   <tr className="header-row">
//                     <th className="left-header">Badge name & priority</th>
//                     <th className="left-header">Placement</th>
//                     <th className="right-header">Status</th>
//                     <th className="right-header">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {badges.map((badge, badgeIndex) => (
//                     badge.badge_pages && badge.badge_pages.length > 0 ? (
//                       badge.badge_pages.map((page, pageIndex) => {
//                         const IconComponent = getIconComponent(page.icon_name);
//                         const popoverId = `${badgeIndex}-${pageIndex}`; // Unique ID for each popover
//                         return (
//                           <tr className="body-row" key={popoverId}>
//                             <td className="left-data">
//                               <div className="custom-row">
//                                 <span className="drag-icon">
//                                   <Icon source={DragHandleMinor} />
//                                 </span>
//                                 {IconComponent ? (
//                                   <span className="Polaris-Thumbnail icon-wrapper">
//                                     <IconComponent />
//                                   </span>
//                                 ) : (
//                                   <span className="Polaris-Thumbnail icon-wrapper">
//                                 <LiaTruckMovingSolid />
//                                 </span>
//                                 )}
//                                 <span className="title1">{badge.badge_name}</span>
//                                 <span className="title1">{badge.id}</span>
//                               </div>
//                             </td>
//                             <td className="left-data">{page.placement || 'All Products'}</td>
//                             <td className="right-data">
//                               <Badge status={badge.status === 'Publish' ? 'success' : 'warning'}>
//                                 {badge.status}
//                               </Badge>
//                             </td>
//                             <td className="right-data">
//                               <Popover
//                                 active={activePopoverId === popoverId}
//                                 activator={
//                                   <Button plain onClick={togglePopoverActive(popoverId)}>
//                                     <svg viewBox="0 0 20 20" height="16" color="#202223">
//                                       <path d="M6 10a2 2 0 1 1-4.001-.001 2 2 0 0 1 4.001.001zm6 0a2 2 0 1 1-4.001-.001 2 2 0 0 1 4.001.001zm6 0a2 2 0 1 1-4.001-.001 2 2 0 0 1 4.001.001z"></path>
//                                     </svg>
//                                   </Button>
//                                 }
//                                 onClose={togglePopoverActive(popoverId)}
//                               >
//                                 <ActionList items={actions} />
//                               </Popover>
//                             </td>
//                           </tr>
//                         );
//                       })
//                     ) : (
//                       <tr key={`no-pages-${badgeIndex}`}>
//                         <td colSpan={4}>No Pages Available for {badge.badge_name}</td>
//                       </tr>
//                     )
//                   ))}
//                 </tbody>
//               </table>
//             </Card>
//           </Layout.Section>
//         </Layout>
//       ) : (
//         <Layout>
//           <Layout.Section>
//             <Card sectioned>
//               <div className="Polaris-Box">
//                 <div
//                   className="Polaris-Box"
//                   style={{
//                     '--pc-box-padding-block-end-xs': 'var(--p-space-10)',
//                     '--pc-box-padding-block-start-xs': 'var(--p-space-5)',
//                     '--pc-box-padding-inline-start-xs': 'var(--p-space-0)',
//                     '--pc-box-padding-inline-end-xs': 'var(--p-space-0)',
//                   }}
//                 >
//                   <div
//                     className="Polaris-VerticalStack"
//                     style={{
//                       '--pc-vertical-stack-inline-align': 'center',
//                       '--pc-vertical-stack-order': 'column',
//                     }}
//                   >
//                     <img
//                       src="https://rivmorkxomnwzdlytbgv.supabase.co/storage/v1/object/public/empty-state-icon.png"
//                       alt="Badge icon"
//                       className="badgeIcon"
//                     />
//                     <div className="emptyStateMargin">
//                       <h2 className="Polaris-Text--root Polaris-Text--headingLg Polaris-Text--block Polaris-Text--center heading">
//                         This is where you'll manage your badges
//                       </h2>
//                       <p className="Polaris-Text--root Polaris-Text--block Polaris-Text--center Polaris-Text--subdued">
//                         Start by creating your first badge and publishing it to your store.
//                       </p>
//                       <div
//                         className="Polaris-HorizontalStack"
//                         style={{
//                           '--pc-horizontal-stack-align': 'center',
//                           '--pc-horizontal-stack-wrap': 'wrap',
//                           '--pc-horizontal-stack-gap-xs': 'var(--p-space-2)',
//                         }}
//                       >
//                         <button
//                           className="Polaris-Button Polaris-Button--primary"
//                           type="button"
//                           onClick={onCreateBadgeClick}
//                         >
//                           <span className="Polaris-Button__Content">
//                             <span className="Polaris-Button__Text">Create new badge</span>
//                           </span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Card>
//           </Layout.Section>
//         </Layout>
//       )}
//     </Page>
//   );
// };

// export default MainPage;







// working  code for  29/10/2024





// import React, { useState, useEffect, useCallback } from 'react';
// import { Page, Card, Layout, Badge, Button, Icon, Popover, ActionList, Modal, Toast, Frame } from "@shopify/polaris";
// import { DragHandleMinor } from "@shopify/polaris-icons";
// import * as img from 'react-icons/lia'; // Example icon, replace with actual icon import
// import * as paymentImg from 'react-icons/fc'; // Example icon, replace with actual icon import
// import './mainPage.css';

// import { LiaTruckMovingSolid } from "react-icons/lia";

// const MainPage = ({ onCreateBadgeClick, onEditBadgeClick }) => {
//   const [badges, setBadges] = useState([]); // State for badges
//   const [activePopoverId, setActivePopoverId] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [deleteBadgeId, setDeleteBadgeId] = useState(null);
//   const [copyToastActive, setCopyToastActive] = useState(false);

//   // Function to toggle popover
//   const togglePopoverActive = useCallback(
//     (popoverId) => () => setActivePopoverId((active) => (active === popoverId ? null : popoverId)),
//     []
//   );

//   //this  Actions is on testing
//   const actions = (badgeId) => [
//     { content: 'Copy Badge ID', onAction: () => copyBadgeIdToClipboard(badgeId) },
//     {
//       content: 'Edit',
//       onAction: () => {
//         const selectedBadge = badges.find(badge => badge.id === badgeId);
//         if (selectedBadge) {
//           const badgePage = selectedBadge.badge_pages[0]; // Access the first badge page
//           console.log(`Editing badge: 
//           ID: ${selectedBadge.id}, 
//           Name: ${selectedBadge.badge_name}, 
//           Button Text: ${badgePage?.button_text ?? 'N/A'}, 
//           Call to Action: ${badgePage?.call_to_action ?? 'N/A'}, 
//           Collection ID: ${badgePage?.collection_id ?? 'N/A'}, 
//           ExternalUrl: ${badgePage?.external_url ?? 'N/A'}, 
//           Icon Name: ${badgePage?.icon_name ?? 'N/A'}, 
//           Product ID: ${badgePage?.product_id ?? 'N/A'}, 
//           Product-Json: ${badgePage?.product_json ?? 'N/A'},
//           Colection-Json: ${badgePage?.collection_json ?? 'N/A'},
//           Created At: ${selectedBadge.created_at}, 
//           Updated At: ${selectedBadge.updated_at}, 
//           Subheading: ${badgePage?.subheading ?? 'N/A'}, 
//           Title: ${badgePage?.title ?? 'N/A'}`);

//           // Call the edit function with just the badgeId or the required data
//           onEditBadgeClick(selectedBadge.id); // Change this to pass only the ID
//         }
//       }
//     },
//     { content: 'Delete', destructive: true, onAction: () => openDeleteModal(badgeId) },
//   ];


//   // Function to open the delete confirmation modal
//   const openDeleteModal = (badgeId) => {
//     setDeleteBadgeId(badgeId);
//     setModalOpen(true);
//   };

//   // Function to close the delete confirmation modal
//   const closeModal = () => setModalOpen(false);

//   // Function to handle badge deletion
//   const handleDelete = async () => {
//     try {
//       const response = await fetch(`/api/badges/${deleteBadgeId}`, {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         // Remove the deleted badge from the state
//         setBadges(badges.filter(badge => badge.id !== deleteBadgeId));
//         closeModal();
//       } else {
//         console.error('Failed to delete badge');
//       }
//     } catch (error) {
//       console.error('Error deleting badge:', error);
//     }
//   };

//   // Function to copy badge ID to clipboard
//   const copyBadgeIdToClipboard = (badgeId) => {
//     navigator.clipboard.writeText(badgeId)
//       .then(() => {
//         setCopyToastActive(true);
//         setTimeout(() => setCopyToastActive(false), 3000);
//       })
//       .catch(err => {
//         console.error('Failed to copy badge ID: ', err);
//       });
//   };

//   // Fetch badges from API on component mount
//   useEffect(() => {
//     const fetchBadges = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch('/api/badges'); // Adjust the API endpoint as needed
//         const data = await response.json();
//         console.log("Fetched badges data:", data);
//         setBadges(data);
//       } catch (error) {
//         console.error('Error fetching badges:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBadges();
//   }, []);

//   // Function to get the icon component based on icon_name
//   // const getIconComponent = (iconName) => {
//   //   try {
//   //     return img[iconName];
//   //   } catch (error) {
//   //     console.error(`Error importing icon ${iconName}:`, error);
//   //     return null; // Default return null if the icon is not found
//   //   }
//   // };
//   // Function to get the icon component based on icon_name
//   const getIconComponent = (iconName) => {
//     try {
//       if (img[iconName]) {
//         return img[iconName];
//       } else if (paymentImg[iconName]) {
//         return paymentImg[iconName];
//       } else {
//         console.error(`Icon ${iconName} not found.`);
//         return null;
//       }
//     } catch (error) {
//       console.error(`Error importing icon ${iconName}:`, error);
//       return null; // Default to null if icon is not found
//     }
//   };


//   // Function to get the icon component based on icon_name
//   const getIconComponent1 = (iconName) => {
//     try {
//       return paymentImg[iconName];
//     } catch (error) {
//       console.error(`Error importing icon ${iconName}:`, error);
//       return null; // Default return null if the icon is not found
//     }
//   };

//   return (
//     <Frame>
//       <Page>
//         <div className="Polaris-Box mainBox" style={{ padding: 'var(--p-space-4) var(--p-space-0)' }}>
//           <div className="Polaris-Page-Header--noBreadcrumbs Polaris-Page-Header--mediumTitle">
//             <div className="Polaris-Page-Header__Row">
//               <div className="Polaris-Page-Header__TitleWrapper">
//                 <h1 className="Polaris-Header-Title">Your Badges</h1>
//               </div>
//               <div className="Polaris-Page-Header__RightAlign">
//                 <div className="Polaris-Page-Header__PrimaryActionWrapper">
//                   <div className="Polaris-Box Polaris-Box--printHidden">
//                     <button
//                       className="Polaris-Button Polaris-Button--primary"
//                       type="button"
//                       onClick={onCreateBadgeClick}
//                     >
//                       <span className="Polaris-Button__Content">
//                         <span className="Polaris-Button__Text">Create new badge</span>
//                       </span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {badges.length > 0 ? (
//           <Layout>
//             <Layout.Section>
//               <Card>
//                 <table className="polaris-table" style={{ width: '100%' }}>
//                   <thead>
//                     <tr className="header-row">
//                       <th className="left-header">Badge name & priority</th>
//                       <th className="left-header">Placement</th>
//                       <th className="right-header">Status</th>
//                       <th className="right-header">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {badges.map((badge, badgeIndex) => (
//                       badge.badge_pages && badge.badge_pages.length > 0 ? (
//                         badge.badge_pages.map((page, pageIndex) => {
//                           const IconComponent = getIconComponent(page.icon_name);
//                           const IconComponent1 = getIconComponent1(page.icon_name);

//                           const popoverId = `${badgeIndex}-${pageIndex}`; // Unique ID for each popover
//                           return (
//                             <tr className="body-row" key={popoverId}>
//                               <td className="left-data">
//                                 <div className="custom-row">
//                                   <span className="drag-icon">
//                                     <Icon source={DragHandleMinor} />
//                                   </span>
//                                   {/* 
//                                   {IconComponent ? (
//                                     <span className="Polaris-Thumbnail icon-wrapper">
//                                       <IconComponent />
//                                     </span>
//                                   ) : IconComponent1 ? (
//                                     <span className="Polaris-Thumbnail icon-wrapper">
//                                       <IconComponent1 />
//                                     </span>
//                                   ) : (
//                                     <span className="Polaris-Thumbnail icon-wrapper">
//                                       <LiaTruckMovingSolid />
//                                     </span>
//                                   )} */}

//                                   {IconComponent ? (
//                                     <span className="Polaris-Thumbnail icon-wrapper">
//                                       <IconComponent />
//                                     </span>
//                                   ) : (
//                                     <span className="Polaris-Thumbnail icon-wrapper">
//                                       <LiaTruckMovingSolid /> {/* Default icon if no match found */}
//                                     </span>
//                                   )}


//                                   <span className="title1">{badge.badge_name}</span>
//                                   <span className="title1">{badge.id}</span>
//                                 </div>

//                               </td>
//                               <td className="left-data">{page.placement || 'All Products'}</td>
//                               <td className="right-data">
//                                 <Badge status={badge.status === 'Publish' ? 'success' : 'warning'}>
//                                   {badge.status}
//                                 </Badge>
//                               </td>
//                               <td className="right-data">
//                                 <Popover
//                                   active={activePopoverId === popoverId}
//                                   activator={
//                                     <Button plain onClick={togglePopoverActive(popoverId)}>
//                                       <svg viewBox="0 0 20 20" height="16" color="#202223">
//                                         <path d="M6 10a2 2 0 1 1-4.001-.001 2 2 0 0 1 4.001.001zm6 0a2 2 0 1 1-4.001-.001 2 2 0 0 1 4.001.001zm6 0a2 2 0 1 1-4.001-.001 2 2 0 0 1 4.001.001z"></path>
//                                       </svg>
//                                     </Button>
//                                   }
//                                   onClose={togglePopoverActive(popoverId)}
//                                 >
//                                   <ActionList items={actions(badge.id)} />
//                                 </Popover>
//                               </td>
//                             </tr>
//                           );
//                         })
//                       ) : (
//                         <tr key={`no-pages-${badgeIndex}`}>
//                           <td colSpan={4}>No Pages Available for {badge.badge_name}</td>
//                         </tr>
//                       )
//                     ))}
//                   </tbody>
//                 </table>
//               </Card>
//             </Layout.Section>
//           </Layout>
//         ) : (
//           <Layout>
//             <Layout.Section>
//               <Card sectioned>
//                 <div className="Polaris-Box">
//                   <div
//                     className="Polaris-Box"
//                     style={{
//                       '--pc-box-padding-block-end-xs': 'var(--p-space-10)',
//                       '--pc-box-padding-block-start-xs': 'var(--p-space-5)',
//                       '--pc-box-padding-inline-start-xs': 'var(--p-space-0)',
//                       '--pc-box-padding-inline-end-xs': 'var(--p-space-0)',
//                     }}
//                   >
//                     <div
//                       className="Polaris-VerticalStack"
//                       style={{
//                         '--pc-vertical-stack-inline-align': 'center',
//                         '--pc-vertical-stack-order': 'column',
//                       }}
//                     >
//                       <img
//                         src="https://rivmorkxomnwzdlytbgv.supabase.co/storage/v1/object/public/empty-state-icon.png"
//                         alt="Badge icon"
//                         className="badgeIcon"
//                       />
//                       <div className="emptyStateMargin">
//                         <h2 className="Polaris-Text--root Polaris-Text--headingLg Polaris-Text--block Polaris-Text--center heading">
//                           This is where you'll manage your badges
//                         </h2>
//                         <p className="Polaris-Text--root Polaris-Text--block Polaris-Text--center Polaris-Text--subdued">
//                           Start by creating your first badge and publishing it to your store.
//                         </p>
//                         <div
//                           className="Polaris-HorizontalStack"
//                           style={{
//                             '--pc-horizontal-stack-align': 'center',
//                             '--pc-horizontal-stack-wrap': 'wrap',
//                             '--pc-horizontal-stack-gap-xs': 'var(--p-space-2)',
//                           }}
//                         >
//                           <button
//                             className="Polaris-Button Polaris-Button--primary"
//                             type="button"
//                             onClick={onCreateBadgeClick}
//                           >
//                             <span className="Polaris-Button__Content">
//                               <span className="Polaris-Button__Text">Create new badge</span>
//                             </span>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Card>
//             </Layout.Section>
//           </Layout>
//         )}
//       </Page>

//       {modalOpen && (
//         <Modal
//           open={modalOpen}
//           onClose={closeModal}
//           title="Delete Badge"
//           primaryAction={{
//             content: 'Delete',
//             destructive: true,
//             onAction: handleDelete,
//           }}
//           secondaryActions={[
//             {
//               content: 'Cancel',
//               onAction: closeModal,
//             },
//           ]}
//         >
//           <p className='warnigText'>Are you sure you want to delete the Your badge badge? This can’t be undone.</p>
//         </Modal>
//       )}

//       {copyToastActive && (
//         <Toast content="Copied to Clipboard" onDismiss={() => setCopyToastActive(false)} />
//       )}
//     </Frame>
//   );
// };

// export default MainPage;





// NEW CODE  but old code from gpt 8/11/2024 before this above is working code


import React, { useState, useEffect, useCallback } from 'react';
import { Page, Card, Layout, Badge, Button, Icon, Popover, ActionList, Modal, Toast, Frame } from "@shopify/polaris";
import { DragHandleMinor } from "@shopify/polaris-icons";
import * as liaIcons from 'react-icons/lia'; // Import Lia icons
import * as fcIcons from 'react-icons/fc'; // Import Fc icons
import { FcApproval } from "react-icons/fc"; // Import specific Fc icon for fallback
import './mainPage.css';

import { LiaTruckMovingSolid } from "react-icons/lia";

const MainPage = ({ onCreateBadgeClick, onEditBadgeClick }) => {
  const [badges, setBadges] = useState([]); // State for badges
  const [activePopoverId, setActivePopoverId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteBadgeId, setDeleteBadgeId] = useState(null);
  const [copyToastActive, setCopyToastActive] = useState(false);

  // Function to toggle popover
  const togglePopoverActive = useCallback(
    (popoverId) => () => setActivePopoverId((active) => (active === popoverId ? null : popoverId)),
    []
  );

  // Actions for the popover
  const actions = (badgeId) => [
    { content: 'Copy Badge ID', onAction: () => copyBadgeIdToClipboard(badgeId) },
    {
      content: 'Edit',
      onAction: () => {
        const selectedBadge = badges.find(badge => badge.id === badgeId);
        if (selectedBadge) {
          const badgePage = selectedBadge.badge_pages[0]; // Access the first badge page
          console.log(`Editing badge:
          ID: ${selectedBadge.id},
          Name: ${selectedBadge.badge_name},
          Button Text: ${badgePage?.button_text ?? 'N/A'},
          Call to Action: ${badgePage?.call_to_action ?? 'N/A'},
          Collection ID: ${badgePage?.collection_id ?? 'N/A'},
          ExternalUrl: ${badgePage?.external_url ?? 'N/A'},
          Icon Name: ${badgePage?.icon_name ?? 'N/A'},
          Product ID: ${badgePage?.product_id ?? 'N/A'},
          Product-Json: ${badgePage?.product_json ?? 'N/A'},
          Colection-Json: ${badgePage?.collection_json ?? 'N/A'},
          Created At: ${selectedBadge.created_at},
          Updated At: ${selectedBadge.updated_at},
          Subheading: ${badgePage?.subheading ?? 'N/A'},
          placement product type: ${badgePage?.placement_product_type ?? 'N/A'},
          placement product json: ${badgePage?.placement_product_json ?? 'N/A'},
          placement collection json: ${badgePage?.placement_collection_json ?? 'N/A'},
          placement tags json: ${badgePage?.placement_tags_json ?? 'N/A'},
          Title: ${badgePage?.title ?? 'N/A'}`);

          // Call the edit function with just the badgeId or the required data
          onEditBadgeClick(selectedBadge.id); // Change this to pass only the ID
        }
      }
    },
    { content: 'Delete', destructive: true, onAction: () => openDeleteModal(badgeId) },
  ];

  // Function to open the delete confirmation modal
  const openDeleteModal = (badgeId) => {
    setDeleteBadgeId(badgeId);
    setModalOpen(true);
  };

  // Function to close the delete confirmation modal
  const closeModal = () => setModalOpen(false);

  // Function to handle badge deletion
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/badges/${deleteBadgeId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Remove the deleted badge from the state
        setBadges(badges.filter(badge => badge.id !== deleteBadgeId));
        closeModal();
      } else {
        console.error('Failed to delete badge');
      }
    } catch (error) {
      console.error('Error deleting badge:', error);
    }
  };

  // Function to copy badge ID to clipboard
  const copyBadgeIdToClipboard = (badgeId) => {
    navigator.clipboard.writeText(badgeId)
      .then(() => {
        setCopyToastActive(true);
        setTimeout(() => setCopyToastActive(false), 3000);
      })
      .catch(err => {
        console.error('Failed to copy badge ID: ', err);
      });
  };

  // Fetch badges from API on component mount
  useEffect(() => {
    const fetchBadges = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/badges'); // Adjust the API endpoint as needed
        const data = await response.json();
        console.log("Fetched badges data:", data);
        setBadges(data);
      } catch (error) {
        console.error('Error fetching badges:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBadges();
  }, []);

  // Function to get the icon component based on icon_name
  const getIconComponent = (iconName) => {
    try {
      if (liaIcons[iconName]) {
        return liaIcons[iconName];
      } else if (fcIcons[iconName]) {
        return fcIcons[iconName];
      } else {
        console.error(`Icon ${iconName} not found.`);
        return FcApproval; // Fallback to FcApproval if no icon is found
      }
    } catch (error) {
      console.error(`Error importing icon ${iconName}:`, error);
      return null; // Default to null if icon is not found
    }
  };

  return (
    <Frame>
      <Page>
        <div className="Polaris-Box mainBox" style={{ padding: 'var(--p-space-4) var(--p-space-0)' }}>
          <div className="Polaris-Page-Header--noBreadcrumbs Polaris-Page-Header--mediumTitle">
            <div className="Polaris-Page-Header__Row">
              <div className="Polaris-Page-Header__TitleWrapper">
                <h1 className="Polaris-Header-Title">Your Badges</h1>
              </div>
              <div className="Polaris-Page-Header__RightAlign">
                <div className="Polaris-Page-Header__PrimaryActionWrapper">
                  <div className="Polaris-Box Polaris-Box--printHidden">
                    <button
                      className="Polaris-Button Polaris-Button--primary"
                      type="button"
                      onClick={onCreateBadgeClick}
                    >
                      <span className="Polaris-Button__Content">
                        <span className="Polaris-Button__Text">Create new badge</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {badges.length > 0 ? (
          <Layout>
            <Layout.Section>
              <Card>
                <table className="polaris-table" style={{ width: '100%' }}>
                  <thead>
                    <tr className="header-row">
                      <th className="left-header">Badge name & priority</th>
                      <th className="left-header">Placement</th>
                      <th className="right-header">Status</th>
                      <th className="right-header">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {badges.map((badge, badgeIndex) => (
                      badge.badge_pages && badge.badge_pages.length > 0 ? (
                        <React.Fragment key={badge.id}>
                          <tr className="body-row">
                            <td className="left-data">
                              <div className="custom-row">
                                <span className="drag-icon">
                                  <Icon source={DragHandleMinor} />
                                </span>

                                {getIconComponent(badge.badge_pages[0].icon_name) ? (
                                  <span className="Polaris-Thumbnail icon-wrapper">
                                    {React.createElement(getIconComponent(badge.badge_pages[0].icon_name))}
                                  </span>
                                ) : (
                                  <span className="Polaris-Thumbnail icon-wrapper">
                                    <LiaTruckMovingSolid />
                                  </span>
                                )}

                                <span className="title1">{badge.badge_name}</span>
                                <span className="title1">{badge.id}</span>
                              </div>
                            </td>
                            <td className="left-data">{badge.badge_pages[0].placement_product_type || 'All Products'}</td>
                            <td className="right-data">
                              <Badge status={badge.status === 'Publish' ? 'success' : 'warning'}>
                                {badge.status}
                              </Badge>
                            </td>
                            <td className="right-data">
                              <Popover
                                active={activePopoverId === badge.id}
                                activator={
                                  <Button plain onClick={togglePopoverActive(badge.id)}>
                                    <svg viewBox="0 0 20 20" height="16" color="#202223">
                                      <path d="M6 10a2 2 0 1 1-4.001-.001 2 2 0 0 1 4.001.001zm6 0a2 2 0 1 1-4.001-.001 2 2 0 0 1 4.001.001zm6 0a2 2 0 1 1-4.001-.001 2 2 0 0 1 4.001.001z"></path>
                                    </svg>
                                  </Button>
                                }
                                onClose={togglePopoverActive(badge.id)}
                              >
                                <ActionList items={actions(badge.id)} />
                              </Popover>
                            </td>
                          </tr>
                        </React.Fragment>
                      ) : (
                        <tr key={`no-pages-${badgeIndex}`}>
                          <td colSpan={4}>No Pages Available for {badge.badge_name}</td>
                        </tr>
                      )
                    ))}
                  </tbody>
                </table>
              </Card>
            </Layout.Section>
          </Layout>
        ) : (
          <Layout>
            <Layout.Section>
              <Card sectioned>
                <div className="Polaris-Box">
                  <div
                    className="Polaris-Box"
                    style={{
                      '--pc-box-padding-block-end-xs': 'var(--p-space-10)',
                      '--pc-box-padding-block-start-xs': 'var(--p-space-5)',
                      '--pc-box-padding-inline-start-xs': 'var(--p-space-0)',
                      '--pc-box-padding-inline-end-xs': 'var(--p-space-0)',
                    }}
                  >
                    <div
                      className="Polaris-VerticalStack"
                      style={{
                        '--pc-vertical-stack-inline-align': 'center',
                        '--pc-vertical-stack-order': 'column',
                      }}
                    >
                      <img
                        src="https://rivmorkxomnwzdlytbgv.supabase.co/storage/v1/object/public/empty-state-icon.png"
                        alt="Badge icon"
                        className="badgeIcon"
                      />
                      <div className="emptyStateMargin">
                        <h2 className="Polaris-Text--root Polaris-Text--headingLg Polaris-Text--block Polaris-Text--center heading">
                          This is where you'll manage your badges
                        </h2>
                        <p className="Polaris-Text--root Polaris-Text--block Polaris-Text--center Polaris-Text--subdued">
                          Start by creating your first badge and publishing it to your store.
                        </p>
                        <div
                          className="Polaris-HorizontalStack"
                          style={{
                            '--pc-horizontal-stack-align': 'center',
                            '--pc-horizontal-stack-wrap': 'wrap',
                            '--pc-horizontal-stack-gap-xs': 'var(--p-space-2)',
                          }}
                        >
                          <button
                            className="Polaris-Button Polaris-Button--primary"
                            type="button"
                            onClick={onCreateBadgeClick}
                          >
                            <span className="Polaris-Button__Content">
                              <span className="Polaris-Button__Text">Create new badge</span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Layout.Section>
          </Layout>
        )}
      </Page>

      {modalOpen && (
        <Modal
          open={modalOpen}
          onClose={closeModal}
          title="Delete Badge"
          primaryAction={{
            content: 'Delete',
            destructive: true,
            onAction: handleDelete,
          }}
          secondaryActions={[
            {
              content: 'Cancel',
              onAction: closeModal,
            },
          ]}
        >
          <p className='warnigText'>Are you sure you want to delete the Your badge badge? This can’t be undone.</p>
        </Modal>
      )}

      {copyToastActive && (
        <Toast content="Copied to Clipboard" onDismiss={() => setCopyToastActive(false)} />
      )}
    </Frame>
  );
};

export default MainPage;









// this code is working for  dragble up and down

// import React, { useState, useEffect, useCallback } from 'react';
// import { Page, Card, Layout, Badge, Button, Icon, Popover, ActionList, Modal, Toast, Frame } from "@shopify/polaris";
// import { DragHandleMinor  } from "@shopify/polaris-icons";
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import * as img from 'react-icons/lia'; // Example icon, replace with actual icon import
// import './mainPage.css';

// import { LiaTruckMovingSolid } from "react-icons/lia";

// const MainPage = ({ onCreateBadgeClick, onEditBadgeClick }) => {
//   const [badges, setBadges] = useState([]); // State for badges
//   const [modalOpen, setModalOpen] = useState(false);
//   const [deleteBadgeId, setDeleteBadgeId] = useState(null);
//   const [copyToastActive, setCopyToastActive] = useState(false);

//   // Function to open the delete confirmation modal
//   const openDeleteModal = (badgeId) => {
//     setDeleteBadgeId(badgeId);
//     setModalOpen(true);
//   };

//   // Function to close the delete confirmation modal
//   const closeModal = () => setModalOpen(false);

//   // Function to handle badge deletion
//   const handleDelete = async () => {
//     try {
//       const response = await fetch(`/api/badges/${deleteBadgeId}`, {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         // Remove the deleted badge from the state
//         setBadges(badges.filter(badge => badge.id !== deleteBadgeId));
//         closeModal();
//       } else {
//         console.error('Failed to delete badge');
//       }
//     } catch (error) {
//       console.error('Error deleting badge:', error);
//     }
//   };

//   // Function to copy badge ID to clipboard
//   const copyBadgeIdToClipboard = (badgeId) => {
//     navigator.clipboard.writeText(badgeId)
//       .then(() => {
//         setCopyToastActive(true);
//         setTimeout(() => setCopyToastActive(false), 3000);
//       })
//       .catch(err => {
//         console.error('Failed to copy badge ID: ', err);
//       });
//   };

//   // Fetch badges from API on component mount
//   useEffect(() => {
//     const fetchBadges = async () => {
//       try {
//         const response = await fetch('/api/badges'); // Adjust the API endpoint as needed
//         const data = await response.json();
//         console.log("Fetched badges data:", data);
//         setBadges(data);
//       } catch (error) {
//         console.error('Error fetching badges:', error);
//       }
//     };

//     fetchBadges();
//   }, []);

//   // Function to get the icon component based on icon_name
//   const getIconComponent = (iconName) => {
//     try {
//       return img[iconName];
//     } catch (error) {
//       console.error(`Error importing icon ${iconName}:`, error);
//       return null; // Default return null if the icon is not found
//     }
//   };

//   // Function to handle reordering of badges
//   const handleDragEnd = (result) => {
//     if (!result.destination) {
//       return;
//     }

//     const items = Array.from(badges);
//     const [reorderedItem] = items.splice(result.source.index, 1);
//     items.splice(result.destination.index, 0, reorderedItem);

//     setBadges(items);

//     // Update the order of badges in the backend
//     updateBadgeOrder(items);
//   };

//   // Function to update the order of badges in the backend
//   const updateBadgeOrder = async (badges) => {
//     try {
//       const response = await fetch('/api/badges/order', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(badges.map((badge, index) => ({ id: badge.id, order: index }))),
//       });

//       if (!response.ok) {
//         console.error('Failed to update badge order');
//       }
//     } catch (error) {
//       console.error('Error updating badge order:', error);
//     }
//   };

//   // Actions for the popover
//   const actions = (badgeId) => [
//     { content: 'Copy Badge ID', onAction: () => copyBadgeIdToClipboard(badgeId) },
//     { content: 'Edit', onAction: () => onEditBadgeClick(badgeId) },
//     { content: 'Delete', destructive: true, onAction: () => openDeleteModal(badgeId) },
//   ];

//   return (
//     <Frame>
//       <Page>
//         <div className="Polaris-Box mainBox" style={{ padding: 'var(--p-space-4) var(--p-space-0)' }}>
//           <div className="Polaris-Page-Header--noBreadcrumbs Polaris-Page-Header--mediumTitle">
//             <div className="Polaris-Page-Header__Row">
//               <div className="Polaris-Page-Header__TitleWrapper">
//                 <h1 className="Polaris-Header-Title">Your Badges</h1>
//               </div>
//               <div className="Polaris-Page-Header__RightAlign">
//                 <div className="Polaris-Page-Header__PrimaryActionWrapper">
//                   <div className="Polaris-Box Polaris-Box--printHidden">
//                     <button
//                       className="Polaris-Button Polaris-Button--primary"
//                       type="button"
//                       onClick={onCreateBadgeClick}
//                     >
//                       <span className="Polaris-Button__Content">
//                         <span className="Polaris-Button__Text">Create new badge</span>
//                       </span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {badges.length > 0 ? (
//           <Layout>
//             <Layout.Section>
//               <Card>
//                 <DragDropContext onDragEnd={handleDragEnd}>
//                   <Droppable droppableId="badges">
//                     {(provided) => (
//                       <div
//                         className="draggable-container"
//                         ref={provided.innerRef}
//                         {...provided.droppableProps}
//                       >
//                         <table className="polaris-table" style={{ width: '100%' }}>
//                           <thead>
//                             <tr className="header-row">
//                               <th className="left-header">Badge name & priority</th>
//                               <th className="left-header">Placement</th>
//                               <th className="right-header">Status</th>
//                               <th className="right-header">Actions</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {badges.map((badge, index) => (
//                               <Draggable key={badge.id} draggableId={badge.id.toString()} index={index}>
//                                 {(provided) => (
//                                   <tr
//                                     className="body-row"
//                                     ref={provided.innerRef}
//                                     {...provided.draggableProps}
//                                     {...provided.dragHandleProps}
//                                   >
//                                     <td className="left-data">
//                                       <div className="custom-row">
//                                         <span className="drag-icon">
//                                           <Icon source={DragHandleMinor} />
//                                         </span>
//                                         {getIconComponent(badge.icon_name) ? (
//                                           <span className="Polaris-Thumbnail icon-wrapper">
//                                             {getIconComponent(badge.icon_name)}
//                                           </span>
//                                         ) : (
//                                           <span className="Polaris-Thumbnail icon-wrapper">
//                                             <LiaTruckMovingSolid />
//                                           </span>
//                                         )}
//                                         <span className="title1">{badge.badge_name}</span>
//                                         <span className="title1">{badge.id}</span>
//                                       </div>
//                                     </td>
//                                     <td className="left-data">{badge.placement || 'All Products'}</td>
//                                     <td className="right-data">
//                                       <Badge status={badge.status === 'Publish' ? 'success' : 'warning'}>
//                                         {badge.status}
//                                       </Badge>
//                                     </td>
//                                     <td className="right-data">
//                                       <Popover
//                                         activator={
//                                           <Button plain>
//                                             <svg viewBox="0 0 20 20" height="16" color="#202223">
//                                               <path d="M6 10a2 2 0 1 1-4.001-.001 2 2 0 0 1 4.001.001zm6 0a2 2 0 1 1-4.001-.001 2 2 0 0 1 4.001.001zm6 0a2 2 0 1 1-4.001-.001 2 2 0 0 1 4.001.001z"></path>
//                                           </svg>
//                                         </Button>
//                                       }
//                                       >
//                                         <ActionList items={actions(badge.id)} />
//                                       </Popover>
//                                     </td>
//                                   </tr>
//                                 )}
//                               </Draggable>
//                             ))}
//                             {provided.placeholder}
//                           </tbody>
//                         </table>
//                       </div>
//                     )}
//                   </Droppable>
//                 </DragDropContext>
//               </Card>
//             </Layout.Section>
//           </Layout>
//         ) : (
//           <Layout>
//             <Layout.Section>
//               <Card sectioned>
//                 <div className="Polaris-Box">
//                   <div
//                     className="Polaris-Box"
//                     style={{
//                       '--pc-box-padding-block-end-xs': 'var(--p-space-10)',
//                       '--pc-box-padding-block-start-xs': 'var(--p-space-5)',
//                       '--pc-box-padding-inline-start-xs': 'var(--p-space-0)',
//                       '--pc-box-padding-inline-end-xs': 'var(--p-space-0)',
//                     }}
//                   >
//                     <div
//                       className="Polaris-VerticalStack"
//                       style={{
//                         '--pc-vertical-stack-inline-align': 'center',
//                         '--pc-vertical-stack-order': 'column',
//                       }}
//                     >
//                       <img
//                         src="https://rivmorkxomnwzdlytbgv.supabase.co/storage/v1/object/public/empty-state-icon.png"
//                         alt="Badge icon"
//                         className="badgeIcon"
//                       />
//                       <div className="emptyStateMargin">
//                         <h2 className="Polaris-Text--root Polaris-Text--headingLg Polaris-Text--block Polaris-Text--center heading">
//                           This is where you'll manage your badges
//                         </h2>
//                         <p className="Polaris-Text--root Polaris-Text--block Polaris-Text--center Polaris-Text--subdued">
//                           Start by creating your first badge and publishing it to your store.
//                         </p>
//                         <div
//                           className="Polaris-HorizontalStack"
//                           style={{
//                             '--pc-horizontal-stack-align': 'center',
//                             '--pc-horizontal-stack-wrap': 'wrap',
//                             '--pc-horizontal-stack-gap-xs': 'var(--p-space-2)',
//                           }}
//                         >
//                           <button
//                             className="Polaris-Button Polaris-Button--primary"
//                             type="button"
//                             onClick={onCreateBadgeClick}
//                           >
//                             <span className="Polaris-Button__Content">
//                               <span className="Polaris-Button__Text">Create new badge</span>
//                             </span>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Card>
//             </Layout.Section>
//           </Layout>
//         )}
//       </Page>

//       {modalOpen && (
//         <Modal
//           open={modalOpen}
//           onClose={closeModal}
//           title="Delete Badge"
//           primaryAction={{
//             content: 'Delete',
//             destructive: true,
//             onAction: handleDelete,
//           }}
//           secondaryActions={[
//             {
//               content: 'Cancel',
//               onAction: closeModal,
//             },
//           ]}
//         >
//           <p>Are you sure you want to delete the badge? This action cannot be undone.</p>
//         </Modal>
//       )}

//       {copyToastActive && (
//         <Toast content="Badge ID copied to clipboard" onDismiss={() => setCopyToastActive(false)} />
//       )}
//     </Frame>
//   );
// };

// export default MainPage;


