// working code


// import { Card, Page, Layout } from "@shopify/polaris";
// import { TitleBar } from "@shopify/app-bridge-react";
// import { useTranslation } from "react-i18next";
// import React, { useState } from 'react';
// import MainPage from "../components/mainPage"; // Import the MainPage component
// import BadgeTypePage from "../components/BadgeTypePage"; // Import the BadgeTypePage component

// export default function HomePage() {
//   const { t } = useTranslation();
//   const [showBadgeTypePage, setShowBadgeTypePage] = useState(false);

//   // Function to handle "Create new badge" button click
//   const handleCreateBadgeClick = () => {
//     setShowBadgeTypePage(true); // Show the BadgeTypePage when button is clicked
//   };

//   // Function to handle "Back" button click
//   const handleBackClick = () => {
//     setShowBadgeTypePage(false); // Go back to the MainPage when Back is clicked
//   };

//   return (
//     <Page narrowWidth>
//       <TitleBar title={t("HomePage.title")} primaryAction={null} />
//       <Layout>
//         <Layout.Section>
//           {/* Toggle between MainPage and BadgeTypePage based on showBadgeTypePage state */}
//           {!showBadgeTypePage ? (
//             <MainPage onCreateBadgeClick={handleCreateBadgeClick} /> // Pass the click handler as a prop
//           ) : (
//             <BadgeTypePage onBackClick={handleBackClick} /> // Pass the back handler as a prop
//           )}
//         </Layout.Section>
//       </Layout>
//     </Page>
//   );
// }



// Working code at 22/10/2024

// import { Card, Page, Layout } from "@shopify/polaris";
// import { TitleBar } from "@shopify/app-bridge-react";
// import { useTranslation } from "react-i18next";
// import React, { useState } from 'react';
// import MainPage from "../components/mainPage"; // Import the MainPage component
// import BadgeTypePage from "../components/BadgeTypePage"; // Import the BadgeTypePage component
// import BadgeEditor from "../components/BadgeEditor"; // Import the BadgeEditor component

// export default function HomePage() {
//   const { t } = useTranslation();
//   const [showBadgeTypePage, setShowBadgeTypePage] = useState(false);
//   const [showBadgeEditor, setShowBadgeEditor] = useState(false);

//   // Function to handle "Create new badge" button click in MainPage
//   const handleCreateBadgeClick = () => {
//     setShowBadgeTypePage(true); // Show BadgeTypePage when Create new badge is clicked
//   };

//   // Function to handle the next step after selecting badge type in BadgeTypePage
//   const handleBadgeTypeSelection = () => {
//     setShowBadgeTypePage(false); // Hide BadgeTypePage
//     setShowBadgeEditor(true);    // Show BadgeEditor page
//   };

//   // Function to handle "Back" button click in BadgeTypePage
//   const handleBackFromBadgeType = () => {
//     setShowBadgeTypePage(false); // Go back to MainPage
//   };

//   // Function to handle "Back" button click in BadgeEditor
//   const handleBackFromBadgeEditor = () => {
//     setShowBadgeEditor(false);    // Go back to BadgeTypePage
//     setShowBadgeTypePage(true);
//   };

//   return (
//     <Page narrowWidth>
//       <TitleBar title={t("HomePage.title")} primaryAction={null} />
//       <Layout>
//         <Layout.Section>
//           {/* Toggle between MainPage, BadgeTypePage, and BadgeEditor */}
//           {!showBadgeTypePage && !showBadgeEditor ? (
//             <MainPage onCreateBadgeClick={handleCreateBadgeClick} /> // Pass the click handler to MainPage
//           ) : showBadgeTypePage && !showBadgeEditor ? (
//             <BadgeTypePage onBackClick={handleBackFromBadgeType} onSelectBadgeType={handleBadgeTypeSelection} /> // Pass the click handler and back handler to BadgeTypePage
//           ) : (
//             <BadgeEditor onBackClick={handleBackFromBadgeEditor} /> // Pass the back handler to BadgeEditor
//           )}
//         </Layout.Section>
//       </Layout>

//     </Page>
//   );
// }




//working code at 27/101/2024



// import { Card, Page, Layout } from "@shopify/polaris";
// import { TitleBar } from "@shopify/app-bridge-react";
// import { useTranslation } from "react-i18next";
// import React, { useState } from 'react';
// import MainPage from "../components/mainPage";
// import BadgeTypePage from "../components/BadgeTypePage";
// import BadgeEditor from "../components/BadgeEditor";

// export default function HomePage() {
//   const { t } = useTranslation();
//   const [showBadgeTypePage, setShowBadgeTypePage] = useState(false);
//   const [showBadgeEditor, setShowBadgeEditor] = useState(false);
//   const [badgeType, setBadgeType] = useState(null);
//   const [badgeId, setBadgeId] = useState(null);

//   // Function to handle "Create new badge" button click in MainPage
//   const handleCreateBadgeClick = () => {
//     setShowBadgeTypePage(true);
//   };

//   // Function to handle the next step after selecting badge type in BadgeTypePage
//   const handleBadgeTypeSelection = (type) => {
//     setBadgeType(type);
//     setShowBadgeTypePage(false);
//     setShowBadgeEditor(true);
//   };

//   // Function to handle "Back" button click in BadgeTypePage
//   const handleBackFromBadgeType = () => {
//     setShowBadgeTypePage(false);
//   };

//   // Function to handle "Back" button click in BadgeEditor
//   const handleBackFromBadgeEditor = () => {
//     setShowBadgeEditor(false);
//     setShowBadgeTypePage(true);
//   };

//   // Function to handle saving badge data in BadgeEditor
//   const handleBadgeSave = (id) => {
//     setBadgeId(id);
//   };

//   return (
//     <Page narrowWidth>
//       <TitleBar title={t("HomePage.title")} primaryAction={null} />
//       <Layout>
//         <Layout.Section>
//           {!showBadgeTypePage && !showBadgeEditor ? (
//             <MainPage onCreateBadgeClick={handleCreateBadgeClick} />
//           ) : showBadgeTypePage && !showBadgeEditor ? (
//             <BadgeTypePage onBackClick={handleBackFromBadgeType} onSelectBadgeType={handleBadgeTypeSelection} />
//           ) : (
//             <BadgeEditor onBackClick={handleBackFromBadgeEditor} onBadgeSave={handleBadgeSave} badgeType={badgeType} badgeId={badgeId} />
//           )}
          
//         </Layout.Section>
//       </Layout>
//     </Page>
//   );
// }


// working code for all the  operations at 29/10/2024

// import { Card, Page, Layout } from "@shopify/polaris";
// import { TitleBar } from "@shopify/app-bridge-react";
// import { useTranslation } from "react-i18next";
// import React, { useState } from 'react';
// import MainPage from "../components/mainPage";
// import BadgeTypePage from "../components/BadgeTypePage";
// import BadgeEditor from "../components/BadgeEditor";

// export default function HomePage() {
//   const { t } = useTranslation();
//   const [showBadgeTypePage, setShowBadgeTypePage] = useState(false);
//   const [showBadgeEditor, setShowBadgeEditor] = useState(false);
//   const [badgeType, setBadgeType] = useState(null);
//   const [badgeId, setBadgeId] = useState(null);
//   const [badgeData, setBadgeData] = useState(null);
//   const [isCreationMode, setIsCreationMode] = useState(false);

//   // Function to handle "Create new badge" button click in MainPage
//   const handleCreateBadgeClick = () => {
//     setShowBadgeTypePage(true);
//     setIsCreationMode(true);
//   };

//   // Function to handle the next step after selecting badge type in BadgeTypePage
//   const handleBadgeTypeSelection = (type) => {
//     setBadgeType(type);
//     setShowBadgeTypePage(false);
//     setShowBadgeEditor(true);
//   };

//   // Function to handle "Back" button click in BadgeTypePage
//   const handleBackFromBadgeType = () => {
//     setShowBadgeTypePage(false);
//   };

//   // Function to handle "Back" button click in BadgeEditor
//   const handleBackFromBadgeEditor = () => {
//     setShowBadgeEditor(false);
//     setShowBadgeTypePage(false); // Ensure this is set to false to go back to the main page
//   };

//   // Function to handle saving badge data in BadgeEditor
//   const handleBadgeSave = (id) => {
//     setBadgeId(id);
//     setIsCreationMode(false);
//   };

//   // Function to handle "Edit" button click in MainPage
//   // const handleEditBadgeClick = async (badgeId) => {
//   //   try {
//   //     const response = await fetch(`/api/badges/${badgeId}`);
//   //     const data = await response.json();
//   //     setBadgeData(data);
//   //     setBadgeId(badgeId);
//   //     setShowBadgeEditor(true);
//   //     setIsCreationMode(false);
//   //   } catch (error) {
//   //     console.error('Error fetching badge data:', error);
//   //   }
//   // };

//   const handleEditBadgeClick = async (badgeId) => {
//   try {
//     const response = await fetch(`/api/badges/${badgeId}`);
//     const data = await response.json();
//     console.log("Fetched badge data:", data); // Log the fetched data for debugging
//     setBadgeData(data);
//     setBadgeId(badgeId);
//     setShowBadgeEditor(true);
//     setIsCreationMode(false);
//   } catch (error) {
//     console.error('Error fetching badge data:', error);
//   }
// };


//   return (
//     <Page narrowWidth>
//       <TitleBar title={t("HomePage.title")} primaryAction={null} />
//       <Layout>
//         <Layout.Section>
//           {!showBadgeTypePage && !showBadgeEditor ? (
//             <MainPage onCreateBadgeClick={handleCreateBadgeClick} onEditBadgeClick={handleEditBadgeClick} />
//           ) : showBadgeTypePage && !showBadgeEditor ? (
//             <BadgeTypePage onBackClick={handleBackFromBadgeType} onSelectBadgeType={handleBadgeTypeSelection} />
//           ) : (
//             <BadgeEditor
//               onBackClick={handleBackFromBadgeEditor}
//               onBadgeSave={handleBadgeSave}
//               badgeType={badgeType}
//               badgeId={badgeId}
//               badgeData={badgeData}
//               isCreationMode={isCreationMode}
//             />
//           )}
//         </Layout.Section>
//       </Layout>
//     </Page>
//   );
// }



// NEW CODE  but old code from gpt 8/11/2024 before this above is working code


// import { Card, Page, Layout } from "@shopify/polaris";
// import { TitleBar } from "@shopify/app-bridge-react";
// import { useTranslation } from "react-i18next";
// import React, { useState } from 'react';
// import MainPage from "../components/mainPage";
// import BadgeTypePage from "../components/BadgeTypePage";
// import BadgeEditor from "../components/BadgeEditor";

// export default function HomePage() {
//   const { t } = useTranslation();
//   const [showBadgeTypePage, setShowBadgeTypePage] = useState(false);
//   const [showBadgeEditor, setShowBadgeEditor] = useState(false);
//   const [badgeType, setBadgeType] = useState(null);
//   const [badgeId, setBadgeId] = useState(null);
//   const [badgeData, setBadgeData] = useState(null);
//   const [isCreationMode, setIsCreationMode] = useState(false);

//   // Function to handle "Create new badge" button click in MainPage
//   const handleCreateBadgeClick = () => {
//     setShowBadgeTypePage(true);
//     setIsCreationMode(true);
//   };

//   // Function to handle the next step after selecting badge type in BadgeTypePage
//   const handleBadgeTypeSelection = (type) => {
//     setBadgeType(type);
//     setShowBadgeTypePage(false);
//     setShowBadgeEditor(true);
//   };

//   // Function to handle "Back" button click in BadgeTypePage
//   const handleBackFromBadgeType = () => {
//     setShowBadgeTypePage(false);
//   };

//   // Function to handle "Back" button click in BadgeEditor
//   const handleBackFromBadgeEditor = () => {
//     setShowBadgeEditor(false);
//     setShowBadgeTypePage(false); // Ensure this is set to false to go back to the main page
//   };

//   // Function to handle saving badge data in BadgeEditor
//   const handleBadgeSave = (id) => {
//     setBadgeId(id);
//     setIsCreationMode(false);
//   };

//   const handleEditBadgeClick = async (badgeId) => {
//   try {
//     const response = await fetch(`/api/badges/${badgeId}`);
//     const data = await response.json();
//     console.log("Fetched badge data:", data); // Log the fetched data for debugging
//     setBadgeData(data);
//     setBadgeId(badgeId);
//     setShowBadgeEditor(true);
//     setIsCreationMode(false);
//   } catch (error) {
//     console.error('Error fetching badge data:', error);
//   }
// };


//   return (
//     <Page narrowWidth>
//       <TitleBar title={t("HomePage.title")} primaryAction={null} />
//       <Layout>
//         <Layout.Section>
//           {!showBadgeTypePage && !showBadgeEditor ? (
//             <MainPage onCreateBadgeClick={handleCreateBadgeClick} onEditBadgeClick={handleEditBadgeClick} />
//           ) : showBadgeTypePage && !showBadgeEditor ? (
//             <BadgeTypePage onBackClick={handleBackFromBadgeType} onSelectBadgeType={handleBadgeTypeSelection} />
//           ) : (
//             <BadgeEditor
//               onBackClick={handleBackFromBadgeEditor}
//               onBadgeSave={handleBadgeSave}
//               badgeType={badgeType}
//               badgeId={badgeId}
//               badgeData={badgeData}
//               isCreationMode={isCreationMode}
//             />
//           )}
//         </Layout.Section>
//       </Layout>
//     </Page>
//   );
// }


// working code at 11-11-2024

// import { Card, Page, Layout } from "@shopify/polaris";
// import { TitleBar } from "@shopify/app-bridge-react";
// import { useTranslation } from "react-i18next";
// import React, { useState } from 'react';
// import MainPage from "../components/mainPage";
// import BadgeTypePage from "../components/BadgeTypePage";
// import BadgeEditor from "../components/BadgeEditor";

// export default function HomePage() {
//   const { t } = useTranslation();
//   const [showBadgeTypePage, setShowBadgeTypePage] = useState(false);
//   const [showBadgeEditor, setShowBadgeEditor] = useState(false);
//   const [badgeType, setBadgeType] = useState(null);
//   const [badgeId, setBadgeId] = useState(null);
//   const [badgeData, setBadgeData] = useState(null);
//   const [isCreationMode, setIsCreationMode] = useState(false);

//   // Function to handle "Create new badge" button click in MainPage
//   const handleCreateBadgeClick = () => {
//     setShowBadgeTypePage(true);
//     setIsCreationMode(true);
//   };

//   // Function to handle the next step after selecting badge type in BadgeTypePage
//   const handleBadgeTypeSelection = (type) => {
//     setBadgeType(type);
//     setShowBadgeTypePage(false);
//     setShowBadgeEditor(true);
//   };

//   // Function to handle "Back" button click in BadgeTypePage
//   const handleBackFromBadgeType = () => {
//     setShowBadgeTypePage(false);
//   };

//   // Function to handle "Back" button click in BadgeEditor
//   const handleBackFromBadgeEditor = () => {
//     setShowBadgeEditor(false);
//     setShowBadgeTypePage(false); // Ensure this is set to false to go back to the main page
//   };

//   // Function to handle saving badge data in BadgeEditor
//   const handleBadgeSave = (id) => {
//     setBadgeId(id);
//     setIsCreationMode(false);
//   };

//   const handleEditBadgeClick = async (badgeId) => {
//   try {
//     const response = await fetch(`/api/badges/${badgeId}`);
//     const data = await response.json();
//     console.log("Fetched badge data:", data); // Log the fetched data for debugging
//     setBadgeData(data);
//     setBadgeId(badgeId);
//     setShowBadgeEditor(true);
//     setIsCreationMode(false);
//   } catch (error) {
//     console.error('Error fetching badge data:', error);
//   }
// };


//   return (
//     <Page narrowWidth>
//       <TitleBar title={t("HomePage.title")} primaryAction={null} />
//       <Layout>
//         <Layout.Section>
//           {!showBadgeTypePage && !showBadgeEditor ? (
//             <MainPage onCreateBadgeClick={handleCreateBadgeClick} onEditBadgeClick={handleEditBadgeClick} />
//           ) : showBadgeTypePage && !showBadgeEditor ? (
//             <BadgeTypePage onBackClick={handleBackFromBadgeType} onSelectBadgeType={handleBadgeTypeSelection} />
//           ) : (
//             <BadgeEditor
//               onBackClick={handleBackFromBadgeEditor}
//               onBadgeSave={handleBadgeSave}
//               badgeType={badgeType}
//               badgeId={badgeId}
//               badgeData={badgeData}
//               isCreationMode={isCreationMode}
//             />
//           )}
//         </Layout.Section>
//       </Layout>
//     </Page>
//   );
// }

import { Card, Page, Layout } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation } from "react-i18next";
import React, { useState } from 'react';
import MainPage from "../components/mainPage";
import BadgeTypePage from "../components/BadgeTypePage";
import BadgeEditor from "../components/BadgeEditor";

export default function HomePage() {
  const { t } = useTranslation();
  const [showBadgeTypePage, setShowBadgeTypePage] = useState(false);
  const [showBadgeEditor, setShowBadgeEditor] = useState(false);
  const [badgeType, setBadgeType] = useState(null);
  const [badgeId, setBadgeId] = useState(null);
  const [badgeData, setBadgeData] = useState(null);
  const [isCreationMode, setIsCreationMode] = useState(false);

  // Function to handle "Create new badge" button click in MainPage
  const handleCreateBadgeClick = () => {
    setShowBadgeTypePage(true);
    setIsCreationMode(true);
    setBadgeId(null); // Reset badgeId
    setBadgeData(null); // Reset badgeData
  };

  // Function to handle the next step after selecting badge type in BadgeTypePage
  const handleBadgeTypeSelection = (type) => {
    setBadgeType(type);
    setShowBadgeTypePage(false);
    setShowBadgeEditor(true);
  };

  // Function to handle "Back" button click in BadgeTypePage
  const handleBackFromBadgeType = () => {
    setShowBadgeTypePage(false);
  };

  // Function to handle "Back" button click in BadgeEditor
  const handleBackFromBadgeEditor = () => {
    setShowBadgeEditor(false);
    setShowBadgeTypePage(false); // Ensure this is set to false to go back to the main page
    setBadgeId(null); // Reset badgeId
    setBadgeData(null); // Reset badgeData
  };

  // Function to handle saving badge data in BadgeEditor
  const handleBadgeSave = (id) => {
    setBadgeId(id);
    setIsCreationMode(false);
  };

  const handleEditBadgeClick = async (badgeId) => {
    try {
      const response = await fetch(`/api/badges/${badgeId}`);
      const data = await response.json();
      console.log("Fetched badge data:", data); // Log the fetched data for debugging
      setBadgeData(data);
      setBadgeId(badgeId);
      setShowBadgeEditor(true);
      setIsCreationMode(false);
    } catch (error) {
      console.error('Error fetching badge data:', error);
    }
  };

  return (
    <Page narrowWidth>
      <TitleBar title={t("HomePage.title")} primaryAction={null} />
      <Layout>
      {/* <Layout.Section>
     
      </Layout.Section> */}
        <Layout.Section>
          {!showBadgeTypePage && !showBadgeEditor ? (
            <MainPage onCreateBadgeClick={handleCreateBadgeClick} onEditBadgeClick={handleEditBadgeClick} />
          ) : showBadgeTypePage && !showBadgeEditor ? (
            <BadgeTypePage onBackClick={handleBackFromBadgeType} onSelectBadgeType={handleBadgeTypeSelection} />
          ) : (
            <BadgeEditor
              onBackClick={handleBackFromBadgeEditor}
              onBadgeSave={handleBadgeSave}
              badgeType={badgeType}
              badgeId={badgeId}
              badgeData={badgeData}
              isCreationMode={isCreationMode}
            />
          )}
        </Layout.Section>
      </Layout>
    </Page>
  );
}
