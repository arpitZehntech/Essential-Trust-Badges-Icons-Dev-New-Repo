// this code is working foe like any button and the Product both requried

// import React, { useState, useCallback } from 'react';
// import { ResourcePicker } from '@shopify/app-bridge-react';
// import { Button, Modal, TextContainer } from '@shopify/polaris';

// function ProductPicker() {
//   const [open, setOpen] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const handleSelection = (resources) => {
//     const product = resources.selection[0]; // Since only one product is allowed, take the first one
//     setSelectedProduct(product);
//     setOpen(false); // Close modal after selection
//   };

//   const handleOpen = useCallback(() => setOpen(true), []);
//   const handleClose = useCallback(() => setOpen(false), []);

//   return (
//     <div>
//       <Button onClick={handleOpen}>Select Product</Button>
//       <ResourcePicker
//         resourceType="Product"
//         open={open}
//         onSelection={handleSelection}
//         onCancel={handleClose}
//         allowMultiple={false} // Only one product can be selected
//         showVariants={false} // If you don't want to show variants
//       />

//       {selectedProduct && (
//         <Modal
//           open={true}
//           onClose={() => setSelectedProduct(null)}
//           title="Selected Product"
//         >
//           <Modal.Section>
//             <TextContainer>
//               <img
//                 src={selectedProduct.images[0]?.originalSrc}
//                 alt={selectedProduct.title}
//                 width="50"
//               />
//               <p>{selectedProduct.title}</p>
//             </TextContainer>
//           </Modal.Section>
//         </Modal>
//       )}
//     </div>
//   );
// }

// export default ProductPicker;



// Working code Testing on Saturday ,  19/10/2024 

import React, { useState, useCallback } from 'react';
import { ResourcePicker } from '@shopify/app-bridge-react';
import { Modal, TextContainer } from '@shopify/polaris';

function ProductPicker({ onSelectProduct, isOpen, onClose }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelection = (resources) => {
    const product = resources.selection[0]; // Since only one product is allowed, take the first one
    setSelectedProduct(product);
    onSelectProduct(product); // Pass the selected product to the parent component
    onClose(); // Close modal after selection
  };

  return (
    <>
      <ResourcePicker
        resourceType="Product"
        open={isOpen}
        onSelection={handleSelection}
        onCancel={onClose}
        allowMultiple={false} // Only one product can be selected
        showVariants={false} // If you don't want to show variants
       
      />
    </>
  );
}

export default ProductPicker;
