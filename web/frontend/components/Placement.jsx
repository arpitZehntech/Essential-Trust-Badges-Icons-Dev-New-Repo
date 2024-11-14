// working code at 11-11-2024

// import React, { useState, useEffect } from 'react';
// import {
//   Card,
//   RadioButton,
//   Button,
//   Stack,
//   Badge,
//   TextContainer,
//   Tag,
//   TextField
// } from '@shopify/polaris';
// import AllProductPicker from './AllProductPicker';
// import AllCollectionPicker from './AllCollectionPicker';

// function Placement({ badgeType, placementData, setPlacementData }) {
//   const productTypeOptions = {
//     allProducts: 'All products',
//     specificProducts: 'Specific products',
//     specificCollections: 'All products in specific collections',
//     specificTags: 'All products with specific tags',
//     customPosition: 'Custom position'
//   };

//   const [selectedProduct, setSelectedProduct] = useState(placementData.placement_product_type || 'allProducts');
//   const [selectedProductName, setSelectedProductName] = useState(productTypeOptions[placementData.placement_product_type] || 'All products');
//   const [selectedGeolocation, setSelectedGeolocation] = useState('allWorld');
//   const [isAllProductPickerOpen, setIsAllProductPickerOpen] = useState(false);
//   const [isCollectionPickerOpen, setIsCollectionPickerOpen] = useState(false);
//   const [selectedProducts, setSelectedProducts] = useState(placementData.placement_product_json ? JSON.parse(placementData.placement_product_json) : []);
//   const [selectedCollections, setSelectedCollections] = useState(placementData.placement_collection_json ? JSON.parse(placementData.placement_collection_json) : []);
//   // const [placementTags, setPlacementTags] = useState(placementData.placement_tags_json ? JSON.parse(placementData.placement_tags_json) : []);
//   const [placementTags, setPlacementTags] = useState(Array.isArray(placementData.placement_tags_json) ? placementData.placement_tags_json : placementData.placement_tags_json.split(', ')); // Changed to array
//   const [newTag, setNewTag] = useState(''); // New state for adding tags

//   useEffect(() => {
//     setPlacementData({
//       placement_product_type: selectedProduct,
//       placement_product_name: selectedProductName,
//       placement_product_json: selectedProducts ? JSON.stringify(selectedProducts) : null,
//       placement_collection_json: selectedCollections ? JSON.stringify(selectedCollections) : null,
//       // placement_tags_json: placementTags ? JSON.stringify(placementTags) : null,
//       placement_tags_json: placementTags.join(', '), // Ensure it's a string
//     });
//   }, [selectedProduct, selectedProductName, selectedProducts, selectedCollections, placementTags]);

//   const handleProductSelection = (products) => {
//     setSelectedProducts(products); // Store selected products
//     setIsAllProductPickerOpen(false); // Close the product picker
//     console.log('Selected Products:', products); // Log the selected products
//   };

//   const handleCollectionSelection = (collections) => {
//     setSelectedCollections(collections);
//     setIsCollectionPickerOpen(false);
//   };

//   const handleTagsSelect = () => {
//     if (newTag && !placementTags.includes(newTag)) {
//       setPlacementTags([...placementTags, newTag]);
//       setNewTag(''); // Clear input field after adding a tag
//     }
//   };

//   const handleTagRemove = (tag) => {
//     setPlacementTags(placementTags.filter((t) => t !== tag));
//   };

//   const handleProductTypeChange = (productType) => {
//     setSelectedProduct(productType);
//     setSelectedProductName(productTypeOptions[productType]);
//   };

//   return (
//     <div>
//       <Card sectioned title="Select products">
//         <Stack vertical>
//           {Object.keys(productTypeOptions).map((productType) => (
//             <RadioButton
//               key={productType}
//               label={productTypeOptions[productType]}
//               checked={selectedProduct === productType}
//               id={productType}
//               name="products"
//               onChange={() => handleProductTypeChange(productType)}
//             />
//           ))}

//           {selectedProduct === 'specificProducts' && (
//             <div className="Polaris-FormLayout__Item">
//               <Button fullWidth onClick={() => setIsAllProductPickerOpen(true)}>
//                 Select Products
//               </Button>
//               {Array.isArray(selectedProducts) && selectedProducts.length > 0 && (
//                 <TextContainer>
//                   <ul>
//                     {selectedProducts.map((product) => (
//                       <li key={product.id}>{product.title}</li>
//                     ))}
//                   </ul>
//                 </TextContainer>
//               )}
//             </div>
//           )}

//           {selectedProduct === 'specificCollections' && (
//             <div className="Polaris-FormLayout__Item">
//               <Button fullWidth onClick={() => setIsCollectionPickerOpen(true)}>
//                 Select Collections
//               </Button>
//               {selectedCollections.length > 0 && (
//                 <TextContainer>
//                   <ul>
//                     {selectedCollections.map((collection) => (
//                       <li key={collection.id}>{collection.title}</li>
//                     ))}
//                   </ul>
//                 </TextContainer>
//               )}
//             </div>
//           )}

//           {selectedProduct === 'specificTags' && (
//             <div className="Polaris-Stack__Item">
//               <div className="Polaris-FormLayout__Item">
//                 <div className="Polaris-Labelled--hidden">
//                   <div className="Polaris-Labelled__LabelWrapper">
//                     <div className="Polaris-Label">
//                       <label id="PolarisComboboxTextField2Label" htmlFor="PolarisComboboxTextField2" className="Polaris-Label__Text">
//                         Add Tags
//                       </label>
//                     </div>
//                   </div>
//                   <div className="Polaris-Connected">
//                     <div className="Polaris-Connected__Item Polaris-Connected__Item--primary">
//                       <TextField
//                         value={newTag}
//                         onChange={(value) => setNewTag(value)}
//                         placeholder="Add Tags"
//                         connectedRight={<Button onClick={handleTagsSelect}>Add</Button>}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {placementTags.length > 0 && (
//                 <div className="Polaris-FormLayout__Item">
//                   <Stack spacing="tight">
//                     {placementTags.map((tag) => (
//                       <Tag key={tag} onRemove={() => handleTagRemove(tag)}>
//                         {tag}
//                       </Tag>
//                     ))}
//                   </Stack>
//                 </div>
//               )}

//             </div>
//           )}
//         </Stack>
//       </Card>

//       <Card sectioned title="Geolocation targeting">
//         <Stack vertical>
//           <RadioButton
//             label={
//               <span>
//                 All world{' '}
//                 <Badge status="info">Essential plan</Badge>
//               </span>
//             }
//             checked={selectedGeolocation === 'allWorld'}
//             id="allWorld"
//             name="geolocation"
//             onChange={() => setSelectedGeolocation('allWorld')}
//           />
//           <div className="Polaris-Choice__Descriptions">
//             <div className="Polaris-Choice__HelpText" id="PolarisRadioButton51HelpText">
//               <span className="Polaris-Text--root Polaris-Text--subdued">Excluding specific countries from other badges</span>
//             </div>
//           </div>
//           <RadioButton
//             label="Specific countries"
//             checked={selectedGeolocation === 'specificCountries'}
//             id="specificCountries"
//             name="geolocation"
//             onChange={() => setSelectedGeolocation('specificCountries')}
//           />
//           {selectedGeolocation === 'specificCountries' && (
//             <div className="Polaris-FormLayout__Item">
//               <Button fullWidth>
//                 Select Countries
//               </Button>
//             </div>
//           )}
//           {selectedGeolocation === 'allWorld' && (
//             <div className="Polaris-FormLayout__Item">
//               <Button fullWidth disabled>
//                 Select Countries
//               </Button>
//             </div>
//           )}
//         </Stack>
//       </Card>

//       {/* Product Picker */}
//       <AllProductPicker
//         onSelectProduct={handleProductSelection}
//         isOpen={isAllProductPickerOpen}
//         onClose={() => setIsAllProductPickerOpen(false)}
//         allowMultiple
//         selectedProducts={selectedProducts}
//       />

//       {/* Collection Picker */}
//       <AllCollectionPicker
//         onSelectCollection={handleCollectionSelection}
//         isOpen={isCollectionPickerOpen}
//         onClose={() => setIsCollectionPickerOpen(false)}
//         allowMultiple
//         selectedCollections={selectedCollections}
//       />
//     </div>
//   );
// }

// export default Placement;



// working code for placement type to string for multiple values  14-11-2024

import React, { useState, useEffect } from 'react';
import {
  Card,
  RadioButton,
  Button,
  Stack,
  Badge,
  TextContainer,
  Tag,
  TextField
} from '@shopify/polaris';
import AllProductPicker from './AllProductPicker';
import AllCollectionPicker from './AllCollectionPicker';

function Placement({ badgeType, placementData, setPlacementData }) {
  const productTypeOptions = {
    allProducts: 'All products',
    specificProducts: 'Specific products',
    specificCollections: 'All products in specific collections',
    specificTags: 'All products with specific tags',
    customPosition: 'Custom position'
  };

  const [selectedProduct, setSelectedProduct] = useState(placementData.placement_product_type || 'allProducts');
  const [selectedProductName, setSelectedProductName] = useState(productTypeOptions[placementData.placement_product_type] || 'All products');
  const [selectedGeolocation, setSelectedGeolocation] = useState('allWorld');
  const [isAllProductPickerOpen, setIsAllProductPickerOpen] = useState(false);
  const [isCollectionPickerOpen, setIsCollectionPickerOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState(placementData.placement_product_json ? JSON.parse(placementData.placement_product_json) : []);
  const [selectedCollections, setSelectedCollections] = useState(placementData.placement_collection_json ? JSON.parse(placementData.placement_collection_json) : []);
  const [placementTags, setPlacementTags] = useState(Array.isArray(placementData.placement_tags_json) ? placementData.placement_tags_json.filter(tag => tag.trim() !== '') : placementData.placement_tags_json.split(', ').filter(tag => tag.trim() !== ''));
  const [newTag, setNewTag] = useState(''); // New state for adding tags

  useEffect(() => {
    setPlacementData({
      placement_product_type: selectedProduct,
      placement_product_name: selectedProductName,
      placement_product_json: selectedProducts ? JSON.stringify(selectedProducts) : null,
      placement_collection_json: selectedCollections ? JSON.stringify(selectedCollections) : null,
      placement_tags_json: placementTags.join(', '), // Ensure it's a string
    });
  }, [selectedProduct, selectedProductName, selectedProducts, selectedCollections, placementTags]);

  const handleProductSelection = (products) => {
    setSelectedProducts(products); // Store selected products
    setIsAllProductPickerOpen(false); // Close the product picker
    console.log('Selected Products:', products); // Log the selected products
  };

  const handleCollectionSelection = (collections) => {
    setSelectedCollections(collections);
    setIsCollectionPickerOpen(false);
  };

  const handleTagsSelect = () => {
    if (newTag && !placementTags.includes(newTag)) {
      setPlacementTags([...placementTags, newTag]);
      setNewTag(''); // Clear input field after adding a tag
    }
  };

  const handleTagRemove = (tag) => {
    setPlacementTags(placementTags.filter((t) => t !== tag));
  };

  const handleProductTypeChange = (productType) => {
    setSelectedProduct(productType);
    setSelectedProductName(productTypeOptions[productType]);
  };

  return (
    <div>
      <Card sectioned title="Select products">
        <Stack vertical>
          {Object.keys(productTypeOptions).map((productType) => (
            <RadioButton
              key={productType}
              label={productTypeOptions[productType]}
              checked={selectedProduct === productType}
              id={productType}
              name="products"
              onChange={() => handleProductTypeChange(productType)}
            />
          ))}

          {selectedProduct === 'specificProducts' && (
            <div className="Polaris-FormLayout__Item">
              <Button fullWidth onClick={() => setIsAllProductPickerOpen(true)}>
                Select Products
              </Button>
              {Array.isArray(selectedProducts) && selectedProducts.length > 0 && (
                <TextContainer>
                  <ul>
                    {selectedProducts.map((product) => (
                      <li key={product.id}>{product.title}</li>
                    ))}
                  </ul>
                </TextContainer>
              )}
            </div>
          )}

          {selectedProduct === 'specificCollections' && (
            <div className="Polaris-FormLayout__Item">
              <Button fullWidth onClick={() => setIsCollectionPickerOpen(true)}>
                Select Collections
              </Button>
              {selectedCollections.length > 0 && (
                <TextContainer>
                  <ul>
                    {selectedCollections.map((collection) => (
                      <li key={collection.id}>{collection.title}</li>
                    ))}
                  </ul>
                </TextContainer>
              )}
            </div>
          )}

          {selectedProduct === 'specificTags' && (
            <div className="Polaris-Stack__Item">
              <div className="Polaris-FormLayout__Item">
                <div className="Polaris-Labelled--hidden">
                  <div className="Polaris-Labelled__LabelWrapper">
                    <div className="Polaris-Label">
                      <label id="PolarisComboboxTextField2Label" htmlFor="PolarisComboboxTextField2" className="Polaris-Label__Text">
                        Add Tags
                      </label>
                    </div>
                  </div>
                  <div className="Polaris-Connected">
                    <div className="Polaris-Connected__Item Polaris-Connected__Item--primary">
                      <TextField
                        value={newTag}
                        onChange={(value) => setNewTag(value)}
                        placeholder="Add Tags"
                        connectedRight={<Button onClick={handleTagsSelect}>Add</Button>}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {placementTags.length > 0 && (
                <div className="Polaris-FormLayout__Item">
                  <Stack spacing="tight">
                    {placementTags.map((tag) => (
                      <Tag key={tag} onRemove={() => handleTagRemove(tag)}>
                        {tag}
                      </Tag>
                    ))}
                  </Stack>
                </div>
              )}
            </div>
          )}
        </Stack>
      </Card>

      <Card sectioned title="Geolocation targeting">
        <Stack vertical>
          <RadioButton
            label={
              <span>
                All world{' '}
                <Badge status="info">Essential plan</Badge>
              </span>
            }
            checked={selectedGeolocation === 'allWorld'}
            id="allWorld"
            name="geolocation"
            onChange={() => setSelectedGeolocation('allWorld')}
          />
          <div className="Polaris-Choice__Descriptions">
            <div className="Polaris-Choice__HelpText" id="PolarisRadioButton51HelpText">
              <span className="Polaris-Text--root Polaris-Text--subdued">Excluding specific countries from other badges</span>
            </div>
          </div>
          <RadioButton
            label="Specific countries"
            checked={selectedGeolocation === 'specificCountries'}
            id="specificCountries"
            name="geolocation"
            onChange={() => setSelectedGeolocation('specificCountries')}
          />
          {selectedGeolocation === 'specificCountries' && (
            <div className="Polaris-FormLayout__Item">
              <Button fullWidth>
                Select Countries
              </Button>
            </div>
          )}
          {selectedGeolocation === 'allWorld' && (
            <div className="Polaris-FormLayout__Item">
              <Button fullWidth disabled>
                Select Countries
              </Button>
            </div>
          )}
        </Stack>
      </Card>

      {/* Product Picker */}
      <AllProductPicker
        onSelectProduct={handleProductSelection}
        isOpen={isAllProductPickerOpen}
        onClose={() => setIsAllProductPickerOpen(false)}
        allowMultiple
        selectedProducts={selectedProducts}
      />

      {/* Collection Picker */}
      <AllCollectionPicker
        onSelectCollection={handleCollectionSelection}
        isOpen={isCollectionPickerOpen}
        onClose={() => setIsCollectionPickerOpen(false)}
        allowMultiple
        selectedCollections={selectedCollections}
      />
    </div>
  );
}

export default Placement;

