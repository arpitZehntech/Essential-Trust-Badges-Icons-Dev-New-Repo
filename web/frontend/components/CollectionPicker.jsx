// this code is working foe like any buuton and the collection both requried

// import React, { useState, useCallback } from 'react';
// import { ResourcePicker } from '@shopify/app-bridge-react';
// import { Button, Modal, TextContainer } from '@shopify/polaris';

// function CollectionPicker({ onSelectCollection }) {
//   const [open, setOpen] = useState(false);

//   const handleSelection = (resources) => {
//     const collection = resources.selection[0]; // Since only one collection is allowed, take the first one
//     onSelectCollection(collection);
//     setOpen(false); // Close modal after selection
//   };

//   const handleOpen = useCallback(() => setOpen(true), []);
//   const handleClose = useCallback(() => setOpen(false), []);

//   return (
//     <div>
//       <Button onClick={handleOpen}>Select Collection</Button>
//       <ResourcePicker
//         resourceType="Collection"
//         open={open}
//         onSelection={handleSelection}
//         onCancel={handleClose}
//         allowMultiple={false} // Only one collection can be selected
//       />
//     </div>
//   );
// }

// export default CollectionPicker;



// Working code Testing on Saturday ,  19/10/2024 

import React, { useState, useCallback } from 'react';
import { ResourcePicker } from '@shopify/app-bridge-react';

function CollectionPicker({ onSelectCollection, isOpen, onClose }) {
  const handleSelection = (resources) => {
    const collection = resources.selection[0]; // Since only one collection is allowed, take the first one
    onSelectCollection(collection);
    onClose(); // Close modal after selection
  };

  return (
    <>
      <ResourcePicker
        resourceType="Collection"
        open={isOpen}
        onSelection={handleSelection}
        onCancel={onClose}
        allowMultiple={false} // Only one collection can be selected
      />
    </>
  );
}

export default CollectionPicker;

