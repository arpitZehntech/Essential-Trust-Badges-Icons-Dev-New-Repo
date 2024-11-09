// Working code Testing on Saturday ,  19/10/2024 

// import React, { useState } from 'react';
// import * as icons from 'react-icons/lia';
// import { Modal, TextField } from '@shopify/polaris';
// import './IconSelector.css'; // Import the CSS file

// const IconSelector = ({ active, toggleModal, onIconSelect }) => {
//   const [search, setSearch] = useState('');

//   // Categorize icons based on the naming convention
//   const categorizeIcons = () => {
//     const categories = {};

//     Object.keys(icons).forEach((key) => {
//       const category = getCategoryFromName(key);
//       if (!categories[category]) {
//         categories[category] = [];
//       }
//       categories[category].push({
//         name: key.replace('Lia', ''), // Remove 'Fa' prefix
//         icon: React.createElement(icons[key], { size: 32 }), // Icon size
//         // icon: React.createElement(icons[key], { size: 32, color: "red" }), // Icon size and color

//       });
//     });

//     return categories;
//   };

//   const getCategoryFromName = (iconName) => {
//     if (iconName.includes('Shop') || iconName.includes('Cart')) return 'ECOMMERCE';
//     if (iconName.includes('Pay') || iconName.includes('Credit')) return 'PAYMENT';
//     if (iconName.includes('card') || iconName.includes('Card')) return 'PAYMENT';
//     if (iconName.includes('Music') || iconName.includes('Headphone')) return 'MUSIC';
//     if (iconName.includes('Gift') || iconName.includes('Tree')) return 'CHRISTMAS';
//     if (iconName.includes('Heart') || iconName.includes('Wedding')) return 'WEDDINGS';
//     return 'ECOMMERCE'; // Default category
//   };

//   const categorizedIcons = categorizeIcons();

//   // Handle icon selection
//   const handleIconSelect = (icon) => {
//     onIconSelect(icon); // Pass selected icon back to parent
//     toggleModal(); // Close modal
//   };

//   return (
//     <Modal
//       open={active}
//       onClose={toggleModal}
//       title="Select Icon"
//       primaryAction={{
//         content: 'Close',
//         onAction: toggleModal,
//       }}
//     >
//       <Modal.Section>
//         <TextField
//           label="Search Icons"
//           value={search}
//           onChange={setSearch}
//           placeholder="Search by name..."
//           autoComplete="off"
//         />
//         {/* Loop through dynamically categorized icons */}
//         {Object.keys(categorizedIcons).map((category) => (
//           <div key={category}>
//             <h3 className="icon-title">{category}</h3> {/* Category Title */}
//             <div className="icon-grid">
//               {categorizedIcons[category]
//                 .filter((icon) =>
//                   icon.name.toLowerCase().includes(search.toLowerCase())
//                 )
//                 .map((icon) => (
//                   <div
                    
//                     key={icon.name}
//                     className="icon-container tooltip"
//                     onClick={() => handleIconSelect(icon)}>
//                     <span className="Polaris-Thumbnail">{icon.icon}</span>
//                     <span className="tooltiptext">{icon.name}</span>
//                   </div>
//                 ))}
//             </div>
//           </div>
//         ))}
//       </Modal.Section>
//     </Modal>
//   );
// };

// export default IconSelector;










// NEW CODE  but old code from gpt 8/11/2024 before this above is working code

import React, { useState } from 'react';
import * as icons from 'react-icons/lia';
import { Modal, TextField } from '@shopify/polaris';
import './IconSelector.css'; // Import the CSS file

const IconSelector = ({ active, toggleModal, onIconSelect }) => {
  const [search, setSearch] = useState('');

  // Categorize icons based on the naming convention
  const categorizeIcons = () => {
    const categories = {};

    Object.keys(icons).forEach((key) => {
      const category = getCategoryFromName(key);
      if (!categories[category]) {
        categories[category] = [];
      }
      categories[category].push({
        name: key.replace('Lia', ''), // Remove 'Fa' prefix
        icon: React.createElement(icons[key], { size: 32 }), // Icon size
        // icon: React.createElement(icons[key], { size: 32, color: "red" }), // Icon size and color

      });
    });

    return categories;
  };

  const getCategoryFromName = (iconName) => {
    if (iconName.includes('Shop') || iconName.includes('Cart')) return 'ECOMMERCE';
    if (iconName.includes('Pay') || iconName.includes('Credit')) return 'PAYMENT';
    if (iconName.includes('card') || iconName.includes('Card')) return 'PAYMENT';
    if (iconName.includes('Music') || iconName.includes('Headphone')) return 'MUSIC';
    if (iconName.includes('Gift') || iconName.includes('Tree')) return 'CHRISTMAS';
    if (iconName.includes('Heart') || iconName.includes('Wedding')) return 'WEDDINGS';
    return 'ECOMMERCE'; // Default category
  };

  const categorizedIcons = categorizeIcons();

  // Handle icon selection
  const handleIconSelect = (icon) => {
    onIconSelect(icon); // Pass selected icon back to parent
    toggleModal(); // Close modal
  };

  return (
    <Modal
      open={active}
      onClose={toggleModal}
      title="Select Icon"
      primaryAction={{
        content: 'Close',
        onAction: toggleModal,
      }}
    >
      <Modal.Section>
        <TextField
          label="Search Icons"
          value={search}
          onChange={setSearch}
          placeholder="Search by name..."
          autoComplete="off"
        />
        {/* Loop through dynamically categorized icons */}
        {Object.keys(categorizedIcons).map((category) => (
          <div key={category}>
            <h3 className="icon-title">{category}</h3> {/* Category Title */}
            <div className="icon-grid">
              {categorizedIcons[category]
                .filter((icon) =>
                  icon.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((icon) => (
                  <div
                    
                    key={icon.name}
                    className="icon-container tooltip"
                    onClick={() => handleIconSelect(icon)}>
                    <span className="Polaris-Thumbnail">{icon.icon}</span>
                    <span className="tooltiptext">{icon.name}</span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </Modal.Section>
    </Modal>
  );
};

export default IconSelector;
