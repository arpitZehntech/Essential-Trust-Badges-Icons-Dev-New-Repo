// // export default AllProductPicker;
// import React, { useState, useCallback, useEffect } from 'react';
// import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
// import { Modal, TextContainer } from '@shopify/polaris';

// function AllProductPicker({ onSelectProduct, isOpen, onClose, allowMultiple, selectedProducts }) {
//   const [resources, setResources] = useState([]);

//   useEffect(() => {
//     setResources(selectedProducts);
//   }, [selectedProducts]);

//   const handleSelection = useCallback((resources) => {
//     const selectedResources = resources.selection;
//     setResources(selectedResources);
//     onSelectProduct(selectedResources);
//     onClose();
//   }, [onSelectProduct, onClose]);

//   const handleCancel = () => {
//     onClose();
//   };

//   return (
//     <>

//       <ResourcePicker
//         resourceType="Product"
//         open={isOpen}
//         onSelection={handleSelection}
//         onCancel={handleCancel}
//         allowMultiple={allowMultiple}
//         selectedResources={resources.map(resource => resource.id)}
//       />

//     </>
//   );
// }

// export default AllProductPicker;

import React, { useState, useCallback, useEffect } from 'react';
import { ResourcePicker } from '@shopify/app-bridge-react';

function AllProductPicker({ onSelectProduct, isOpen, onClose, allowMultiple, selectedProducts }) {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    setResources(selectedProducts);
  }, [selectedProducts]);

  const handleSelection = useCallback((resources) => {
    const selectedResources = resources.selection;
    setResources(selectedResources);
    onSelectProduct(selectedResources);
    onClose();
  }, [onSelectProduct, onClose]);

  return (
    <ResourcePicker
      resourceType="Product"
      open={isOpen}
      onSelection={handleSelection}
      onCancel={onClose}
      allowMultiple={allowMultiple}
      initialSelectionIds={resources.map(resource => ({ id: resource.id }))}
    />
  );
}

export default AllProductPicker;


