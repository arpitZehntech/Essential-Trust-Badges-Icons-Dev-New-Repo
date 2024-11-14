// working code for single icons page dont delete this page until the whole app is not created 

// import React from 'react';
// import {
// TextField,
// Button,
// LegacyStack,
// Select,
// Thumbnail,
// LegacyCard,
// Link,
// Text,
// Badge,
// Stack,
// } from '@shopify/polaris';
// import IconSelector from './IconSelector';
// import ProductPicker from './ProductPicker';
// import CollectionPicker from './CollectionPicker';
// import './BadgeEditor.css';
// import './IconBlock.css';

// function IconBlock({
// title,
// subheading,
// buttonText,
// linkType,
// externalUrl,
// selectedIcon,
// cta,
// selectedProduct,
// selectedCollection,
// iconModalActive,
// isProductPickerOpen,
// isCollectionPickerOpen,
// setTitle,
// setSubheading,
// setButtonText,
// setLinkType,
// setExternalUrl,
// setSelectedIcon,
// setCta,
// setSelectedProduct,
// setSelectedCollection,
// toggleIconModal,
// setIconModalActive,
// setIsProductPickerOpen,
// setIsCollectionPickerOpen,
// }) {
// const removeIcon = () => {
// setSelectedIcon(null);
// };

// const handleIconSelect = (icon) => {
// setSelectedIcon(icon);
// setIconModalActive(false);
// };

// return (

// <div>
//     <div className='mainIconCard'>
//         <div class="Polaris-FormLayout__Item">
//             <div class="Polaris-LegacyStack Polaris-LegacyStack--alignmentCenter">
//                 <div class="Polaris-LegacyStack__Item">
//                     <div class="iconHeading">Page #1</div>
//                 </div>
//             </div>
//         </div>

//         <div className='Polaris-FormLayout__Item'>
//             <TextField label="Title" value={title} onChange={(value)=> setTitle(value)}
//                 autoComplete="off"
//                 />
//         </div>


//         <div className='Polaris-FormLayout__Item'>
//             <TextField label="Subheading" value={subheading} onChange={(value)=> setSubheading(value)}
//                 autoComplete="off"
//                 />
//         </div>

//         <LegacyStack vertical spacing="tight">
//             <LegacyStack.Item>
//                 <p className="Polaris-Text--root Polaris-FormLayout__Item">Icon</p>
//             </LegacyStack.Item>
//             <LegacyStack.Item>
//                 <LegacyStack spacing="baseTight" distribution="leading">
//                     <LegacyStack.Item>
//                         <div className={`icon-preview ${selectedIcon ? 'selected' : '' }`} onClick={toggleIconModal}
//                             style={{ cursor: 'pointer' }}>
//                             {selectedIcon ? (
//                             <span className="Polaris-Thumbnail Polaris-Thumbnail--sizeLarge">
//                                 {selectedIcon.icon}
//                             </span>
//                             ) : (
//                             <span className="Polaris-Icon Polaris-Icon--colorSubdued Polaris-Icon--applyColor">
//                                 <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
//                                 <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg" focusable="false"
//                                     aria-hidden="true">
//                                     <path
//                                         d="M19 2.5a1.5 1.5 0 0 0-1.5-1.5h-15a1.5 1.5 0 0 0-1.5 1.5v15a1.5 1.5 0 0 0 1.5 1.5h7.5v-2h-6.503c-.41 0-.64-.46-.4-.79l3.553-4.051c.19-.21.52-.21.72-.01l1.63 1.851 3.06-4.781a.5.5 0 0 1 .84.02l.72 1.251a5.98 5.98 0 0 1 2.38-.49h3v-7.5zm-11.5 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm12.207 10.793a1 1 0 0 0-.707-.293h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 0 0 .707-1.707z">
//                                     </path>
//                                 </svg>
//                             </span>
//                             )}
//                         </div>
//                     </LegacyStack.Item>
//                     <LegacyStack.Item fill>
//                         <LegacyStack vertical spacing="extraTight" distribution="center">
//                             <div className="Polaris-LegacyStack__Item Polaris-LegacyStack__Item--fill">
//                                 <Button onClick={selectedIcon ? removeIcon : toggleIconModal} fullWidth>
//                                     {selectedIcon ? 'Remove Icon' : 'Select Icon'}
//                                 </Button>
//                             </div>
//                             <LegacyStack.Item>
//                                 <Button fullWidth outline disabled>
//                                     Upload Icon
//                                 </Button>
//                             </LegacyStack.Item>
//                             <LegacyStack.Item>
//                                 <Text variant="bodySm" color="subdued">
//                                     Available with Starter plan.
//                                     <Link>Upgrade now.</Link>
//                                 </Text>
//                             </LegacyStack.Item>
//                         </LegacyStack>
//                     </LegacyStack.Item>
//                 </LegacyStack>
//             </LegacyStack.Item>
//         </LegacyStack>
//         <IconSelector active={iconModalActive} toggleModal={toggleIconModal} onIconSelect={handleIconSelect} />
//         <Select label="Call to action" value={cta} onChange={(value)=> {
//             setCta(value);
//             setButtonText('Shop Now');
//             setLinkType('');
//             setSelectedProduct(null);
//             setSelectedCollection(null);
//             setExternalUrl('');
//             }}
//             options={[
//             { label: 'No call to action', value: 'no-cta' },
//             { label: 'Button', value: 'button-cta' },
//             { label: 'Whole banner clickable', value: 'clickable-banner-cta' },
//             ]}
//             />
//             {cta === 'button-cta' || cta === 'clickable-banner-cta' ? (
//             <>
//                 {cta !== 'clickable-banner-cta' && (
//                 <div className='Polaris-FormLayout__Item'>
//                     <TextField className="button-text-field" label="Button text" value={buttonText} onChange={(value)=>
//                         setButtonText(value)}
//                         />
//                 </div>
//                 )}
//                 <div className="Polaris-FormLayout__Item">
//                     <fieldset className="Polaris-VerticalStack Polaris-VerticalStack--fieldsetReset"
//                         aria-invalid="false" style={{ "--pc-vertical-stack-order" : "column"
//                         , "--pc-vertical-stack-gap-xs" : "var(--p-space-4)" , "--pc-vertical-stack-gap-md"
//                         : "var(--p-space-0)" }}>
//                         <legend className="Polaris-Box" style={{ "--pc-box-padding-block-end-xs" : "var(--p-space-5)"
//                             , "--pc-box-padding-block-end-md" : "var(--p-space-1)" }}>
//                             Link to
//                         </legend>
//                         <ul className="Polaris-VerticalStack Polaris-VerticalStack--listReset"
//                             style={{ "--pc-vertical-stack-order" : "column" , "--pc-vertical-stack-gap-xs"
//                             : "var(--p-space-4)" , "--pc-vertical-stack-gap-md" : "var(--p-space-0)" }}>
//                             <li>
//                                 <div className="Polaris-Bleed" style={{ "--pc-bleed-margin-block-end-xs"
//                                     : "var(--p-space-0)" }}>
//                                     <label className="Polaris-Choice" htmlFor="PolarisRadioButton50">
//                                         <span className="Polaris-Choice__Control">
//                                             <span className="Polaris-RadioButton">
//                                                 <input id="PolarisRadioButton50" name="PolarisChoiceList13" type="radio"
//                                                     className="Polaris-RadioButton__Input" value="product"
//                                                     checked={linkType==='product' } onChange={()=>
//                                                 setLinkType('product')}
//                                                 />
//                                                 <span className="Polaris-RadioButton__Backdrop"></span>
//                                             </span>
//                                         </span>
//                                         <span className="Polaris-Choice__Label">
//                                             <span>Product page</span>
//                                         </span>
//                                     </label>
//                                 </div>
//                             </li>
//                             <li>
//                                 <div className="Polaris-Bleed" style={{ "--pc-bleed-margin-block-end-xs"
//                                     : "var(--p-space-0)" }}>
//                                     <label className="Polaris-Choice" htmlFor="PolarisRadioButton51">
//                                         <span className="Polaris-Choice__Control">
//                                             <span className="Polaris-RadioButton">
//                                                 <input id="PolarisRadioButton51" name="PolarisChoiceList13" type="radio"
//                                                     className="Polaris-RadioButton__Input" value="collection"
//                                                     checked={linkType==='collection' } onChange={()=>
//                                                 setLinkType('collection')}
//                                                 />
//                                                 <span className="Polaris-RadioButton__Backdrop"></span>
//                                             </span>
//                                         </span>
//                                         <span className="Polaris-Choice__Label">
//                                             <span>Collection page</span>
//                                         </span>
//                                     </label>
//                                 </div>
//                             </li>
//                             <li>
//                                 <div className="Polaris-Bleed" style={{ "--pc-bleed-margin-block-end-xs"
//                                     : "var(--p-space-0)" }}>
//                                     <label className="Polaris-Choice" htmlFor="PolarisRadioButton52">
//                                         <span className="Polaris-Choice__Control">
//                                             <span className="Polaris-RadioButton">
//                                                 <input id="PolarisRadioButton52" name="PolarisChoiceList13" type="radio"
//                                                     className="Polaris-RadioButton__Input" value="external"
//                                                     checked={linkType==='external' } onChange={()=>
//                                                 setLinkType('external')}
//                                                 />
//                                                 <span className="Polaris-RadioButton__Backdrop"></span>
//                                             </span>
//                                         </span>
//                                         <span className="Polaris-Choice__Label">
//                                             <span>External page</span>
//                                         </span>
//                                     </label>
//                                 </div>
//                             </li>
//                         </ul>
//                     </fieldset>
//                 </div>
//                 <div className="Polaris-FormLayout__Item">
//                     {linkType === 'product' && (
//                     <Button onClick={()=> setIsProductPickerOpen(true)} fullWidth>
//                         <span className="Polaris-Button__Content">
//                             <span className="Polaris-Button__Icon">
//                                 <span className="Polaris-Icon">
//                                     <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
//                                     <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg" focusable="false"
//                                         aria-hidden="true">
//                                         <path fillRule="evenodd"
//                                             d="m2.606 5.434 3-2.876a2.019 2.019 0 0 1 2.788 0l3 2.876c.387.372.606.883.606 1.416v2.15c-2.838.47-5 3.104-5 6.038v2.962h-3c-1.105 0-2-.884-2-1.974v-9.176c0-.533.219-1.044.606-1.416Zm4.394 1.566a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z">
//                                         </path>
//                                         <path
//                                             d="M13.793 8.793a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1 0 1.415l-2.5 2.5a1 1 0 0 1-1.414-1.415l.793-.793h-1.586c-1.105 0-2 .482-2 1.429v2.714c0 .473-.448.857-1 .857s-1-.384-1-.857v-2.714c0-1.894 1.79-3.429 4-3.429h1.586l-.793-.793a1 1 0 0 1 0-1.414Z">
//                                         </path>
//                                     </svg>
//                                 </span>
//                             </span>
//                             <span className="Polaris-Button__Text">Select Product</span>
//                         </span>
//                     </Button>
//                     )}
//                     {linkType === 'collection' && (
//                     <Button onClick={()=> setIsCollectionPickerOpen(true)} fullWidth>
//                         <span className="Polaris-Button__Content">
//                             <span className="Polaris-Button__Icon">
//                                 <span className="Polaris-Icon">
//                                     <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
//                                     <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg" focusable="false"
//                                         aria-hidden="true">
//                                         <path
//                                             d="m6.172 3.171-2 2a4 4 0 0 0-1.172 2.829v7.171a2 2 0 0 1-2-2v-7.171a2 2 0 0 1 .586-1.414l2-2a2 2 0 0 1 2.828 0l.202.201a4.034 4.034 0 0 0-.444.384Zm8.621 4.794a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1 0 1.415l-2.5 2.499a1 1 0 0 1-1.414-1.414l.793-.793h-1.586c-1.105 0-2 .482-2 1.428v2.715c0 .473-.448.857-1 .857s-1-.384-1-.857v-2.715c0-1.893 1.79-3.428 4-3.428h1.586l-.793-.793a1 1 0 0 1 0-1.414Z">
//                                         </path>
//                                         <path fillRule="evenodd"
//                                             d="m5.586 6.586 2-2a2 2 0 0 1 2.828 0l2 2a2 2 0 0 1 .586 1.414v.255a6.002 6.002 0 0 0-5 5.917v3h-1a2 2 0 0 1-2-2v-7.172a2 2 0 0 1 .586-1.414Zm4.121 1.293a1 1 0 1 0-1.414-1.414 1 1 0 0 0 1.414 1.414Z">
//                                         </path>
//                                     </svg>
//                                 </span>
//                             </span>
//                             <span className="Polaris-Button__Text">Select Collection</span>
//                         </span>
//                     </Button>
//                     )}
//                     {linkType === 'external' && (
//                     <TextField label="URL" value={externalUrl} onChange={(value)=> setExternalUrl(value)}
//                         />
//                         )}
//                 </div>
//                 <ProductPicker isOpen={isProductPickerOpen} onSelectProduct={setSelectedProduct} onClose={()=>
//                     setIsProductPickerOpen(false)}
//                     />
//                     <CollectionPicker isOpen={isCollectionPickerOpen} onSelectCollection={setSelectedCollection}
//                         onClose={()=> setIsCollectionPickerOpen(false)}
//                         />
//             </>
//             ) : null}
//             {linkType === 'product' && selectedProduct && (
//             <div className="Polaris-FormLayout__Item">
//                 <div className="Polaris-LegacyCard">
//                     <div className="Polaris-LegacyCard__Section">
//                         <div className="Polaris-LegacyStack">
//                             <div className="Polaris-LegacyStack__Item">
//                                 <span className="Polaris-Thumbnail Polaris-Thumbnail--sizeMedium">
//                                     <img className="productImgCls" alt={selectedProduct.title}
//                                         src={selectedProduct.images[0]?.originalSrc} />
//                                 </span>
//                             </div>
//                             <div className="Polaris-LegacyStack__Item">
//                                 <div
//                                     className="Polaris-LegacyStack Polaris-LegacyStack--vertical Polaris-LegacyStack--spacingExtraTight Polaris-LegacyStack--distributionLeading Polaris-LegacyStack--alignmentLeading">
//                                     <div className="Polaris-LegacyStack__Item">
//                                         <p className="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--semibold">
//                                             {selectedProduct.title}
//                                         </p>
//                                     </div>
//                                     <div className="Polaris-LegacyStack__Item">
//                                         <p className="Polaris-Text--root Polaris-Text--bodySm">
//                                             {selectedProduct.handle}
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="Polaris-LegacyCard__Footer">
//                         <div className="Polaris-ButtonGroup">
//                             <div className="Polaris-ButtonGroup__Item">
//                                 <button
//                                     className="Polaris-Button Polaris-Button--primary Polaris-Button--outline Polaris-Button--destructive"
//                                     type="button" onClick={()=> setSelectedProduct(null)}
//                                     >
//                                     <span className="Polaris-Button__Content">
//                                         <span className="Polaris-Button__Text">Remove</span>
//                                     </span>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             )}
//             {linkType === 'collection' && selectedCollection && (
//             <div className="Polaris-FormLayout__Item">
//                 <div className="Polaris-LegacyCard">
//                     <div className="Polaris-LegacyCard__Section">
//                         <div className="Polaris-LegacyStack">
//                             <div className="Polaris-LegacyStack__Item">
//                                 <span className="Polaris-Thumbnail Polaris-Thumbnail--sizeMedium">
//                                     <img className="collectionImgCls" alt={selectedCollection.title}
//                                         src={selectedCollection.image?.originalSrc} />
//                                 </span>
//                             </div>
//                             <div className="Polaris-LegacyStack__Item">
//                                 <div
//                                     className="Polaris-LegacyStack Polaris-LegacyStack--vertical Polaris-LegacyStack--spacingExtraTight Polaris-LegacyStack--distributionLeading Polaris-LegacyStack--alignmentLeading">
//                                     <div className="Polaris-LegacyStack__Item">
//                                         <p className="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--semibold">
//                                             {selectedCollection.title}
//                                         </p>
//                                     </div>
//                                     <div className="Polaris-LegacyStack__Item">
//                                         <p className="Polaris-Text--root Polaris-Text--bodySm">
//                                             {selectedCollection.handle}
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="Polaris-LegacyCard__Footer">
//                         <div className="Polaris-ButtonGroup">
//                             <div className="Polaris-ButtonGroup__Item">
//                                 <button
//                                     className="Polaris-Button Polaris-Button--primary Polaris-Button--outline Polaris-Button--destructive"
//                                     type="button" onClick={()=> setSelectedCollection(null)}
//                                     >
//                                     <span className="Polaris-Button__Content">
//                                         <span className="Polaris-Button__Text">Remove</span>
//                                     </span>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             )}
//             <div class="Polaris-FormLayout__Item">
//                 <div class="Polaris-LegacyStack">
//                     <div class="Polaris-LegacyStack__Item Polaris-LegacyStack__Item--fill">
//                         <div class="removeIconBtn"><button type="button"
//                                 class="Polaris-Link Polaris-Link--monochrome">Remove page</button></div>
//                     </div>
//                 </div>
//             </div>




//     </div>
//     <div class="addBtnMain"> <Button fullWidth>
//             <span className="Polaris-Button__Content">
//                 <span className="Polaris-Button__Icon">
//                     <span className="Polaris-Icon">
//                         <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>

//                     </span>
//                 </span>
//                 <span className="Polaris-Button__Text">Add New page</span>
//             </span>
//         </Button></div>
//     <div className="translations-section">
//         <Stack>
//             <Stack.Item>
//                 <span className="Polaris-TextStyle--variationStrong">Translations</span>
//             </Stack.Item>
//             <Stack.Item>
//                 <Badge status="info">
//                     <span className="Polaris-Text--root Polaris-Text--bodySm">Essential plan</span>
//                 </Badge>
//             </Stack.Item>
//         </Stack>
//     </div>
//     <Button fullWidth onClick={()=> { }}>
//         Add translation
//     </Button>

// </div>
// );
// }

// export default IconBlock;




// Working code Testing on Saturday ,  19/10/2024 (this code is prfectly create the multiple  page layout with add and remove functionality)


// import React from 'react';
// import {
//   TextField,
//   Button,
//   LegacyStack,
//   Select,
//   Thumbnail,
//   LegacyCard,
//   Link,
//   Text,
//   Badge,
//   Stack,
// } from '@shopify/polaris';
// import IconSelector from './IconSelector';
// import ProductPicker from './ProductPicker';
// import CollectionPicker from './CollectionPicker';
// // import './BadgeEditor.css';
// import './IconBlock.css';
// import * as icons from 'react-icons/lia';

// function IconBlock({
//   title,
//   subheading,
//   buttonText,
//   linkType,
//   externalUrl,
//   selectedIcon,
//   cta,
//   selectedProduct,
//   selectedCollection,
//   iconModalActive,
//   isProductPickerOpen,
//   isCollectionPickerOpen,
//   setTitle,
//   setSubheading,
//   setButtonText,
//   setLinkType,
//   setExternalUrl,
//   setSelectedIcon,
//   setCta,
//   setSelectedProduct,
//   setSelectedCollection,
//   toggleIconModal,
//   setIconModalActive,
//   setIsProductPickerOpen,
//   setIsCollectionPickerOpen,
//   onRemove,
//   pageIndex,
//   iconBlockPages,
//   addIconBlockPage
// }) {
//   const removeIcon = () => {
//     setSelectedIcon(null);
//   };

//   const handleIconSelect = (icon) => {
//     setSelectedIcon(icon);
//     setIconModalActive(false);
//   };
//   const getIconComponent = (iconName) => {
//     try {
//       return icons[iconName];
//     } catch (error) {
//       console.error(`Error importing icon ${iconName}:`, error);
//       return null; // Default return null if the icon is not found
//     }
//   };

//   const IconComponent = selectedIcon ? getIconComponent(selectedIcon.name) : null;

//   return (
//     <div>
//       <div className='mainIconCard'>
//         <div className="Polaris-FormLayout__Item">
//           <div className="Polaris-LegacyStack Polaris-LegacyStack--alignmentCenter">
//             <div className="Polaris-LegacyStack__Item">
//               <div className="iconHeading">Page #{pageIndex + 1}</div>
//             </div>
//           </div>
//         </div>

//         <div className='Polaris-FormLayout__Item'>
//           <TextField label="Title" value={title} onChange={(value) => setTitle(value)}
//             autoComplete="off"
//           />
//         </div>

//         <div className='Polaris-FormLayout__Item'>
//           <TextField label="Subheading" value={subheading} onChange={(value) => setSubheading(value)}
//             autoComplete="off"
//           />
//         </div>

//         <LegacyStack vertical spacing="tight">
//           <LegacyStack.Item>
//             <p className="Polaris-Text--root Polaris-FormLayout__Item">Icon</p>
//           </LegacyStack.Item>
//           <LegacyStack.Item>
//             <LegacyStack spacing="baseTight" distribution="leading">
//               <LegacyStack.Item>
//                 {/* <div className={`icon-preview ${selectedIcon ? 'selected' : ''}`} onClick={toggleIconModal}
//                   style={{ cursor: 'pointer' }}>
//                   {selectedIcon ? (
//                     <span className="Polaris-Thumbnail Polaris-Thumbnail--sizeLarge">
//                       {selectedIcon.icon}
//                     </span>
//                   ) : (
//                     <span className="Polaris-Icon Polaris-Icon--colorSubdued Polaris-Icon--applyColor">
//                       <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
//                       <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg" focusable="false"
//                         aria-hidden="true">
//                         <path
//                           d="M19 2.5a1.5 1.5 0 0 0-1.5-1.5h-15a1.5 1.5 0 0 0-1.5 1.5v15a1.5 1.5 0 0 0 1.5 1.5h7.5v-2h-6.503c-.41 0-.64-.46-.4-.79l3.553-4.051c.19-.21.52-.21.72-.01l1.63 1.851 3.06-4.781a.5.5 0 0 1 .84.02l.72 1.251a5.98 5.98 0 0 1 2.38-.49h3v-7.5zm-11.5 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm12.207 10.793a1 1 0 0 0-.707-.293h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 0 0 .707-1.707z">
//                         </path>
//                       </svg>
//                     </span>
//                   )}
//                 </div> */}

//                 <div
//                   className={`icon-preview ${selectedIcon ? 'selected' : ''}`}
//                   onClick={toggleIconModal}
//                   style={{ cursor: 'pointer' }}
//                 >
//                   {IconComponent ? (
//                     <span className="Polaris-Thumbnail Polaris-Thumbnail--sizeLarge">
//                       <IconComponent size={32} />
//                     </span>
//                   ) : (
//                     !selectedIcon ? (
//                       <span className="Polaris-Icon Polaris-Icon--colorSubdued Polaris-Icon--applyColor">
//                         <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
//                         <svg
//                           viewBox="0 0 20 20"
//                           className="Polaris-Icon__Svg"
//                           focusable="false"
//                           aria-hidden="true"
//                         >
//                           <path d="M19 2.5a1.5 1.5 0 0 0-1.5-1.5h-15a1.5 1.5 0 0 0-1.5 1.5v15a1.5 1.5 0 0 0 1.5 1.5h7.5v-2h-6.503c-.41 0-.64-.46-.4-.79l3.553-4.051c.19-.21.52-.21.72-.01l1.63 1.851 3.06-4.781a.5.5 0 0 1 .84.02l.72 1.251a5.98 5.98 0 0 1 2.38-.49h3v-7.5zm-11.5 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm12.207 10.793a1 1 0 0 0-.707-.293h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 0 0 .707-1.707z"></path>
//                         </svg>
//                       </span>
//                     ) : (
//                       selectedIcon && (
//                         <span className="Polaris-Thumbnail Polaris-Thumbnail--sizeLarge">
//                           {selectedIcon.icon}
//                         </span>
//                       )
//                     )
//                   )}
//                 </div>
//               </LegacyStack.Item>
//               <LegacyStack.Item fill>
//                 <LegacyStack vertical spacing="extraTight" distribution="center">
//                   <div className="Polaris-LegacyStack__Item Polaris-LegacyStack__Item--fill">
//                     <Button onClick={selectedIcon ? removeIcon : toggleIconModal} fullWidth>
//                       {selectedIcon ? 'Remove Icon' : 'Select Icon'}
//                     </Button>
//                   </div>
//                   <LegacyStack.Item>
//                     <Button fullWidth outline disabled>
//                       Upload Icon
//                     </Button>
//                   </LegacyStack.Item>
//                   <LegacyStack.Item>
//                     <Text variant="bodySm" color="subdued">
//                       Available with Starter plan.
//                       <Link>Upgrade now.</Link>
//                     </Text>
//                   </LegacyStack.Item>
//                 </LegacyStack>
//               </LegacyStack.Item>
//             </LegacyStack>
//           </LegacyStack.Item>
//         </LegacyStack>
//         <IconSelector active={iconModalActive} toggleModal={toggleIconModal} onIconSelect={handleIconSelect} />
//         <Select label="Call to action" value={cta} onChange={(value) => {
//           setCta(value);
//           setButtonText('Shop Now');
//           setLinkType('');
//           setSelectedProduct(null);
//           setSelectedCollection(null);
//           setExternalUrl('');
//         }}
//           options={[
//             { label: 'No call to action', value: 'no-cta' },
//             { label: 'Button', value: 'button-cta' },
//             { label: 'Whole banner clickable', value: 'clickable-banner-cta' },
//           ]}
//         />
//         {cta === 'button-cta' || cta === 'clickable-banner-cta' ? (
//           <>
//             {cta !== 'clickable-banner-cta' && (
//               <div className='Polaris-FormLayout__Item'>
//                 <TextField className="button-text-field" label="Button text" value={buttonText} onChange={(value) =>
//                   setButtonText(value)}
//                 />
//               </div>
//             )}
//             <div className="Polaris-FormLayout__Item">
//               <fieldset className="Polaris-VerticalStack Polaris-VerticalStack--fieldsetReset"
//                 aria-invalid="false" style={{
//                   "--pc-vertical-stack-order": "column"
//                   , "--pc-vertical-stack-gap-xs": "var(--p-space-4)", "--pc-vertical-stack-gap-md"
//                     : "var(--p-space-0)"
//                 }}>
//                 <legend className="Polaris-Box" style={{
//                   "--pc-box-padding-block-end-xs": "var(--p-space-5)"
//                   , "--pc-box-padding-block-end-md": "var(--p-space-1)"
//                 }}>
//                   Link to
//                 </legend>
//                 <ul className="Polaris-VerticalStack Polaris-VerticalStack--listReset"
//                   style={{
//                     "--pc-vertical-stack-order": "column", "--pc-vertical-stack-gap-xs"
//                       : "var(--p-space-4)", "--pc-vertical-stack-gap-md": "var(--p-space-0)"
//                   }}>
//                   <li>
//                     <div className="Polaris-Bleed" style={{
//                       "--pc-bleed-margin-block-end-xs"
//                         : "var(--p-space-0)"
//                     }}>
//                       <label className="Polaris-Choice" htmlFor="PolarisRadioButton50">
//                         <span className="Polaris-Choice__Control">
//                           <span className="Polaris-RadioButton">
//                             <input id="PolarisRadioButton50" name="PolarisChoiceList13" type="radio"
//                               className="Polaris-RadioButton__Input" value="product"
//                               checked={linkType === 'product'} onChange={() =>
//                                 setLinkType('product')}
//                             />
//                             <span className="Polaris-RadioButton__Backdrop"></span>
//                           </span>
//                         </span>
//                         <span className="Polaris-Choice__Label">
//                           <span>Product page</span>
//                         </span>
//                       </label>
//                     </div>
//                   </li>
//                   <li>
//                     <div className="Polaris-Bleed" style={{
//                       "--pc-bleed-margin-block-end-xs"
//                         : "var(--p-space-0)"
//                     }}>
//                       <label className="Polaris-Choice" htmlFor="PolarisRadioButton51">
//                         <span className="Polaris-Choice__Control">
//                           <span className="Polaris-RadioButton">
//                             <input id="PolarisRadioButton51" name="PolarisChoiceList13" type="radio"
//                               className="Polaris-RadioButton__Input" value="collection"
//                               checked={linkType === 'collection'} onChange={() =>
//                                 setLinkType('collection')}
//                             />
//                             <span className="Polaris-RadioButton__Backdrop"></span>
//                           </span>
//                         </span>
//                         <span className="Polaris-Choice__Label">
//                           <span>Collection page</span>
//                         </span>
//                       </label>
//                     </div>
//                   </li>
//                   <li>
//                     <div className="Polaris-Bleed" style={{
//                       "--pc-bleed-margin-block-end-xs"
//                         : "var(--p-space-0)"
//                     }}>
//                       <label className="Polaris-Choice" htmlFor="PolarisRadioButton52">
//                         <span className="Polaris-Choice__Control">
//                           <span className="Polaris-RadioButton">
//                             <input id="PolarisRadioButton52" name="PolarisChoiceList13" type="radio"
//                               className="Polaris-RadioButton__Input" value="external"
//                               checked={linkType === 'external'} onChange={() =>
//                                 setLinkType('external')}
//                             />
//                             <span className="Polaris-RadioButton__Backdrop"></span>
//                           </span>
//                         </span>
//                         <span className="Polaris-Choice__Label">
//                           <span>External page</span>
//                         </span>
//                       </label>
//                     </div>
//                   </li>
//                 </ul>
//               </fieldset>
//             </div>
//             <div className="Polaris-FormLayout__Item">
//               {linkType === 'product' && (
//                 <Button onClick={() => setIsProductPickerOpen(true)} fullWidth>
//                   <span className="Polaris-Button__Content">
//                     <span className="Polaris-Button__Icon">
//                       <span className="Polaris-Icon">
//                         <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
//                         <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg" focusable="false"
//                           aria-hidden="true">
//                           <path fillRule="evenodd"
//                             d="m2.606 5.434 3-2.876a2.019 2.019 0 0 1 2.788 0l3 2.876c.387.372.606.883.606 1.416v2.15c-2.838.47-5 3.104-5 6.038v2.962h-3c-1.105 0-2-.884-2-1.974v-9.176c0-.533.219-1.044.606-1.416Zm4.394 1.566a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z">
//                           </path>
//                           <path
//                             d="M13.793 8.793a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1 0 1.415l-2.5 2.5a1 1 0 0 1-1.414-1.415l.793-.793h-1.586c-1.105 0-2 .482-2 1.429v2.714c0 .473-.448.857-1 .857s-1-.384-1-.857v-2.714c0-1.894 1.79-3.429 4-3.429h1.586l-.793-.793a1 1 0 0 1 0-1.414Z">
//                           </path>
//                         </svg>
//                       </span>
//                     </span>
//                     <span className="Polaris-Button__Text">Select Product</span>
//                   </span>
//                 </Button>
//               )}
//               {linkType === 'collection' && (
//                 <Button onClick={() => setIsCollectionPickerOpen(true)} fullWidth>
//                   <span className="Polaris-Button__Content">
//                     <span className="Polaris-Button__Icon">
//                       <span className="Polaris-Icon">
//                         <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
//                         <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg" focusable="false"
//                           aria-hidden="true">
//                           <path
//                             d="m6.172 3.171-2 2a4 4 0 0 0-1.172 2.829v7.171a2 2 0 0 1-2-2v-7.171a2 2 0 0 1 .586-1.414l2-2a2 2 0 0 1 2.828 0l.202.201a4.034 4.034 0 0 0-.444.384Zm8.621 4.794a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1 0 1.415l-2.5 2.499a1 1 0 0 1-1.414-1.414l.793-.793h-1.586c-1.105 0-2 .482-2 1.428v2.715c0 .473-.448.857-1 .857s-1-.384-1-.857v-2.715c0-1.893 1.79-3.428 4-3.428h1.586l-.793-.793a1 1 0 0 1 0-1.414Z">
//                           </path>
//                           <path fillRule="evenodd"
//                             d="m5.586 6.586 2-2a2 2 0 0 1 2.828 0l2 2a2 2 0 0 1 .586 1.414v.255a6.002 6.002 0 0 0-5 5.917v3h-1a2 2 0 0 1-2-2v-7.172a2 2 0 0 1 .586-1.414Zm4.121 1.293a1 1 0 1 0-1.414-1.414 1 1 0 0 0 1.414 1.414Z">
//                           </path>
//                         </svg>
//                       </span>
//                     </span>
//                     <span className="Polaris-Button__Text">Select Collection</span>
//                   </span>
//                 </Button>
//               )}
//               {linkType === 'external' && (
//                 <TextField label="URL" value={externalUrl} onChange={(value) => setExternalUrl(value)}
//                 />
//               )}
//             </div>
//             <ProductPicker isOpen={isProductPickerOpen} onSelectProduct={setSelectedProduct} onClose={() =>
//               setIsProductPickerOpen(false)}
//             />
//             <CollectionPicker isOpen={isCollectionPickerOpen} onSelectCollection={setSelectedCollection}
//               onClose={() => setIsCollectionPickerOpen(false)}
//             />
//           </>
//         ) : null}
//         {linkType === 'product' && selectedProduct && (
//           <div className="Polaris-FormLayout__Item">
//             <div className="Polaris-LegacyCard">
//               <div className="Polaris-LegacyCard__Section">
//                 <div className="Polaris-LegacyStack">
//                   <div className="Polaris-LegacyStack__Item">
//                     <span className="Polaris-Thumbnail Polaris-Thumbnail--sizeMedium">
//                       <img className="productImgCls" alt={selectedProduct.title}
//                         src={selectedProduct.images[0]?.originalSrc} />
//                     </span>
//                   </div>
//                   <div className="Polaris-LegacyStack__Item">
//                     <div
//                       className="Polaris-LegacyStack Polaris-LegacyStack--vertical Polaris-LegacyStack--spacingExtraTight Polaris-LegacyStack--distributionLeading Polaris-LegacyStack--alignmentLeading">
//                       <div className="Polaris-LegacyStack__Item">
//                         <p className="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--semibold">
//                           {selectedProduct.title}
//                         </p>
//                       </div>
//                       <div className="Polaris-LegacyStack__Item">
//                         <p className="Polaris-Text--root Polaris-Text--bodySm">
//                           {selectedProduct.handle}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="Polaris-LegacyCard__Footer">
//                 <div className="Polaris-ButtonGroup">
//                   <div className="Polaris-ButtonGroup__Item">
//                     <button
//                       className="Polaris-Button Polaris-Button--primary Polaris-Button--outline Polaris-Button--destructive"
//                       type="button" onClick={() => setSelectedProduct(null)}
//                     >
//                       <span className="Polaris-Button__Content">
//                         <span className="Polaris-Button__Text">Remove</span>
//                       </span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//         {linkType === 'collection' && selectedCollection && (
//           <div className="Polaris-FormLayout__Item">
//             <div className="Polaris-LegacyCard">
//               <div className="Polaris-LegacyCard__Section">
//                 <div className="Polaris-LegacyStack">
//                   <div className="Polaris-LegacyStack__Item">
//                     <span className="Polaris-Thumbnail Polaris-Thumbnail--sizeMedium">
//                       <img className="collectionImgCls" alt={selectedCollection.title}
//                         src={selectedCollection.image?.originalSrc} />
//                     </span>
//                   </div>
//                   <div className="Polaris-LegacyStack__Item">
//                     <div
//                       className="Polaris-LegacyStack Polaris-LegacyStack--vertical Polaris-LegacyStack--spacingExtraTight Polaris-LegacyStack--distributionLeading Polaris-LegacyStack--alignmentLeading">
//                       <div className="Polaris-LegacyStack__Item">
//                         <p className="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--semibold">
//                           {selectedCollection.title}
//                         </p>
//                       </div>
//                       <div className="Polaris-LegacyStack__Item">
//                         <p className="Polaris-Text--root Polaris-Text--bodySm">
//                           {selectedCollection.handle}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="Polaris-LegacyCard__Footer">
//                 <div className="Polaris-ButtonGroup">
//                   <div className="Polaris-ButtonGroup__Item">
//                     <button
//                       className="Polaris-Button Polaris-Button--primary Polaris-Button--outline Polaris-Button--destructive"
//                       type="button" onClick={() => setSelectedCollection(null)}
//                     >
//                       <span className="Polaris-Button__Content">
//                         <span className="Polaris-Button__Text">Remove</span>
//                       </span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//         <div className="Polaris-FormLayout__Item">
//           <div className="Polaris-LegacyStack">
//             <div className="Polaris-LegacyStack__Item Polaris-LegacyStack__Item--fill">
//               <div className="removeIconBtn"><button type="button"
//                 className="Polaris-Link Polaris-Link--monochrome" onClick={onRemove}>Remove page</button></div>
//             </div>
//           </div>
//         </div>

//       </div>

//     </div>
//   );
// }

// export default IconBlock;

// NEW CODE  but old code from gpt 4/11/2024 before this above is working code

// import React from 'react';
// import {
//   TextField,
//   Button,
//   LegacyStack,
//   Select,
//   Thumbnail,
//   LegacyCard,
//   Link,
//   Text,
//   Badge,
//   Stack,
// } from '@shopify/polaris';
// import IconSelector from './IconSelector';
// import ProductPicker from './ProductPicker';
// import CollectionPicker from './CollectionPicker';
// import './IconBlock.css';
// import * as icons from 'react-icons/lia';

// function IconBlock({
//   title,
//   subheading,
//   buttonText,
//   linkType,
//   externalUrl,
//   selectedIcon,
//   cta,
//   selectedProduct,
//   selectedCollection,
//   iconModalActive,
//   isProductPickerOpen,
//   isCollectionPickerOpen,
//   setTitle,
//   setSubheading,
//   setButtonText,
//   setLinkType,
//   setExternalUrl,
//   setSelectedIcon,
//   setCta,
//   setSelectedProduct,
//   setSelectedCollection,
//   toggleIconModal,
//   setIconModalActive,
//   setIsProductPickerOpen,
//   setIsCollectionPickerOpen,
//   onRemove,
//   pageIndex,
//   iconBlockPages,
//   addIconBlockPage
// }) {
//   const removeIcon = () => {
//     setSelectedIcon(null);
//   };

//   const handleIconSelect = (icon) => {
//     setSelectedIcon(icon);
//     setIconModalActive(false);
//   };

//   const getIconComponent = (iconName) => {
//     try {
//       return icons[iconName];
//     } catch (error) {
//       console.error(`Error importing icon ${iconName}:`, error);
//       return null; // Default return null if the icon is not found
//     }
//   };

//   const IconComponent = selectedIcon ? getIconComponent(selectedIcon.name) : null;

//   return (
//     <div>
//       <div className='mainIconCard'>
//         <div className="Polaris-FormLayout__Item">
//           <div className="Polaris-LegacyStack Polaris-LegacyStack--alignmentCenter">
//             <div className="Polaris-LegacyStack__Item">
//               <div className="iconHeading">Page #{pageIndex + 1}</div>
//             </div>
//           </div>
//         </div>

//         <div className='Polaris-FormLayout__Item'>
//           <TextField label="Title" value={title} onChange={(value) => setTitle(value)}
//             autoComplete="off"
//           />
//         </div>

//         <div className='Polaris-FormLayout__Item'>
//           <TextField label="Subheading" value={subheading} onChange={(value) => setSubheading(value)}
//             autoComplete="off"
//           />
//         </div>

//         <LegacyStack vertical spacing="tight">
//           <LegacyStack.Item>
//             <p className="Polaris-Text--root Polaris-FormLayout__Item">Icon</p>
//           </LegacyStack.Item>
//           <LegacyStack.Item>
//             <LegacyStack spacing="baseTight" distribution="leading">
//               <LegacyStack.Item>

//                 <div
//                   className={`icon-preview ${selectedIcon ? 'selected' : ''}`}
//                   onClick={toggleIconModal}
//                   style={{ cursor: 'pointer' }}
//                 >
//                   {IconComponent ? (
//                     <span className="Polaris-Thumbnail Polaris-Thumbnail--sizeLarge">
//                       <IconComponent size={32} />
//                     </span>
//                   ) : (
//                     !selectedIcon ? (
//                       <span className="Polaris-Icon Polaris-Icon--colorSubdued Polaris-Icon--applyColor">
//                         <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
//                         <svg
//                           viewBox="0 0 20 20"
//                           className="Polaris-Icon__Svg"
//                           focusable="false"
//                           aria-hidden="true"
//                         >
//                           <path d="M19 2.5a1.5 1.5 0 0 0-1.5-1.5h-15a1.5 1.5 0 0 0-1.5 1.5v15a1.5 1.5 0 0 0 1.5 1.5h7.5v-2h-6.503c-.41 0-.64-.46-.4-.79l3.553-4.051c.19-.21.52-.21.72-.01l1.63 1.851 3.06-4.781a.5.5 0 0 1 .84.02l.72 1.251a5.98 5.98 0 0 1 2.38-.49h3v-7.5zm-11.5 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm12.207 10.793a1 1 0 0 0-.707-.293h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 0 0 .707-1.707z"></path>
//                         </svg>
//                       </span>
//                     ) : (
//                       selectedIcon && (
//                         <span className="Polaris-Thumbnail Polaris-Thumbnail--sizeLarge">
//                           {selectedIcon.icon}
//                         </span>
//                       )
//                     )
//                   )}
//                 </div>
//               </LegacyStack.Item>
//               <LegacyStack.Item fill>
//                 <LegacyStack vertical spacing="extraTight" distribution="center">
//                   <div className="Polaris-LegacyStack__Item Polaris-LegacyStack__Item--fill">
//                     <Button onClick={selectedIcon ? removeIcon : toggleIconModal} fullWidth>
//                       {selectedIcon ? 'Remove Icon' : 'Select Icon'}
//                     </Button>
//                   </div>
//                   <LegacyStack.Item>
//                     <Button fullWidth outline disabled>
//                       Upload Icon
//                     </Button>
//                   </LegacyStack.Item>
//                   <LegacyStack.Item>
//                     <Text variant="bodySm" color="subdued">
//                       Available with Starter plan.
//                       <Link>Upgrade now.</Link>
//                     </Text>
//                   </LegacyStack.Item>
//                 </LegacyStack>
//               </LegacyStack.Item>
//             </LegacyStack>
//           </LegacyStack.Item>
//         </LegacyStack>
//         <IconSelector active={iconModalActive} toggleModal={toggleIconModal} onIconSelect={handleIconSelect} />
//         <Select label="Call to action" value={cta} onChange={(value) => {
//           setCta(value);
//           setButtonText('Shop Now');
//           setLinkType('');
//           setSelectedProduct(null);
//           setSelectedCollection(null);
//           setExternalUrl('');
//         }}
//           options={[
//             { label: 'No call to action', value: 'no-cta' },
//             { label: 'Button', value: 'button-cta' },
//             { label: 'Whole banner clickable', value: 'clickable-banner-cta' },
//           ]}
//         />
//         {cta === 'button-cta' || cta === 'clickable-banner-cta' ? (
//           <>
//             {cta !== 'clickable-banner-cta' && (
//               <div className='Polaris-FormLayout__Item'>
//                 <TextField className="button-text-field" label="Button text" value={buttonText} onChange={(value) =>
//                   setButtonText(value)}
//                 />
//               </div>
//             )}
//             <div className="Polaris-FormLayout__Item">
//               <fieldset className="Polaris-VerticalStack Polaris-VerticalStack--fieldsetReset"
//                 aria-invalid="false" style={{
//                   "--pc-vertical-stack-order": "column"
//                   , "--pc-vertical-stack-gap-xs": "var(--p-space-4)", "--pc-vertical-stack-gap-md"
//                     : "var(--p-space-0)"
//                 }}>
//                 <legend className="Polaris-Box" style={{
//                   "--pc-box-padding-block-end-xs": "var(--p-space-5)"
//                   , "--pc-box-padding-block-end-md": "var(--p-space-1)"
//                 }}>
//                   Link to
//                 </legend>
//                 <ul className="Polaris-VerticalStack Polaris-VerticalStack--listReset"
//                   style={{
//                     "--pc-vertical-stack-order": "column", "--pc-vertical-stack-gap-xs"
//                       : "var(--p-space-4)", "--pc-vertical-stack-gap-md": "var(--p-space-0)"
//                   }}>
//                   <li>
//                     <div className="Polaris-Bleed" style={{
//                       "--pc-bleed-margin-block-end-xs"
//                         : "var(--p-space-0)"
//                     }}>
//                       <label className="Polaris-Choice" htmlFor="PolarisRadioButton50">
//                         <span className="Polaris-Choice__Control">
//                           <span className="Polaris-RadioButton">
//                             <input id="PolarisRadioButton50" name="PolarisChoiceList13" type="radio"
//                               className="Polaris-RadioButton__Input" value="product"
//                               checked={linkType === 'product'} onChange={() =>
//                                 setLinkType('product')}
//                             />
//                             <span className="Polaris-RadioButton__Backdrop"></span>
//                           </span>
//                         </span>
//                         <span className="Polaris-Choice__Label">
//                           <span>Product page</span>
//                         </span>
//                       </label>
//                     </div>
//                   </li>
//                   <li>
//                     <div className="Polaris-Bleed" style={{
//                       "--pc-bleed-margin-block-end-xs"
//                         : "var(--p-space-0)"
//                     }}>
//                       <label className="Polaris-Choice" htmlFor="PolarisRadioButton51">
//                         <span className="Polaris-Choice__Control">
//                           <span className="Polaris-RadioButton">
//                             <input id="PolarisRadioButton51" name="PolarisChoiceList13" type="radio"
//                               className="Polaris-RadioButton__Input" value="collection"
//                               checked={linkType === 'collection'} onChange={() =>
//                                 setLinkType('collection')}
//                             />
//                             <span className="Polaris-RadioButton__Backdrop"></span>
//                           </span>
//                         </span>
//                         <span className="Polaris-Choice__Label">
//                           <span>Collection page</span>
//                         </span>
//                       </label>
//                     </div>
//                   </li>
//                   <li>
//                     <div className="Polaris-Bleed" style={{
//                       "--pc-bleed-margin-block-end-xs"
//                         : "var(--p-space-0)"
//                     }}>
//                       <label className="Polaris-Choice" htmlFor="PolarisRadioButton52">
//                         <span className="Polaris-Choice__Control">
//                           <span className="Polaris-RadioButton">
//                             <input id="PolarisRadioButton52" name="PolarisChoiceList13" type="radio"
//                               className="Polaris-RadioButton__Input" value="external"
//                               checked={linkType === 'external'} onChange={() =>
//                                 setLinkType('external')}
//                             />
//                             <span className="Polaris-RadioButton__Backdrop"></span>
//                           </span>
//                         </span>
//                         <span className="Polaris-Choice__Label">
//                           <span>External page</span>
//                         </span>
//                       </label>
//                     </div>
//                   </li>
//                 </ul>
//               </fieldset>
//             </div>
//             <div className="Polaris-FormLayout__Item">
//               {linkType === 'product' && (
//                 <Button onClick={() => setIsProductPickerOpen(true)} fullWidth>
//                   <span className="Polaris-Button__Content">
//                     <span className="Polaris-Button__Icon">
//                       <span className="Polaris-Icon">
//                         <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
//                         <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg" focusable="false"
//                           aria-hidden="true">
//                           <path fillRule="evenodd"
//                             d="m2.606 5.434 3-2.876a2.019 2.019 0 0 1 2.788 0l3 2.876c.387.372.606.883.606 1.416v2.15c-2.838.47-5 3.104-5 6.038v2.962h-3c-1.105 0-2-.884-2-1.974v-9.176c0-.533.219-1.044.606-1.416Zm4.394 1.566a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z">
//                           </path>
//                           <path
//                             d="M13.793 8.793a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1 0 1.415l-2.5 2.5a1 1 0 0 1-1.414-1.415l.793-.793h-1.586c-1.105 0-2 .482-2 1.429v2.714c0 .473-.448.857-1 .857s-1-.384-1-.857v-2.714c0-1.894 1.79-3.429 4-3.429h1.586l-.793-.793a1 1 0 0 1 0-1.414Z">
//                           </path>
//                         </svg>
//                       </span>
//                     </span>
//                     <span className="Polaris-Button__Text">Select Product</span>
//                   </span>
//                 </Button>
//               )}
//               {linkType === 'collection' && (
//                 <Button onClick={() => setIsCollectionPickerOpen(true)} fullWidth>
//                   <span className="Polaris-Button__Content">
//                     <span className="Polaris-Button__Icon">
//                       <span className="Polaris-Icon">
//                         <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
//                         <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg" focusable="false"
//                           aria-hidden="true">
//                           <path
//                             d="M13.793 8.793a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1 0 1.415l-2.5 2.499a1 1 0 0 1-1.414-1.414l.793-.793h-1.586c-1.105 0-2 .482-2 1.428v2.715c0 .473-.448.857-1 .857s-1-.384-1-.857v-2.715c0-1.893 1.79-3.428 4-3.428h1.586l-.793-.793a1 1 0 0 1 0-1.414Z">
//                           </path>
//                           <path fillRule="evenodd"
//                             d="m5.586 6.586 2-2a2 2 0 0 1 2.828 0l2 2a2 2 0 0 1 .586 1.414v.255a6.002 6.002 0 0 0-5 5.917v3h-1a2 2 0 0 1-2-2v-7.172a2 2 0 0 1 .586-1.414Zm4.121 1.293a1 1 0 1 0-1.414-1.414 1 1 0 0 0 1.414 1.414Z">
//                           </path>
//                         </svg>
//                       </span>
//                     </span>
//                     <span className="Polaris-Button__Text">Select Collection</span>
//                   </span>
//                 </Button>
//               )}
//               {linkType === 'external' && (
//                 <TextField label="URL" value={externalUrl} onChange={(value) => setExternalUrl(value)}
//                 />
//               )}
//             </div>
//             <ProductPicker isOpen={isProductPickerOpen} onSelectProduct={setSelectedProduct} onClose={() =>
//               setIsProductPickerOpen(false)}
//             />
//             <CollectionPicker isOpen={isCollectionPickerOpen} onSelectCollection={setSelectedCollection}
//               onClose={() => setIsCollectionPickerOpen(false)}
//             />
//           </>
//         ) : null}
//         {linkType === 'product' && selectedProduct && (
//           <div className="Polaris-FormLayout__Item">
//             <div className="Polaris-LegacyCard">
//               <div className="Polaris-LegacyCard__Section">
//                 <div className="Polaris-LegacyStack">
//                   <div className="Polaris-LegacyStack__Item">
//                     <span className="Polaris-Thumbnail Polaris-Thumbnail--sizeMedium">
//                       <img className="productImgCls" alt={selectedProduct.title}
//                         src={selectedProduct.images[0]?.originalSrc} />
//                     </span>
//                   </div>
//                   <div className="Polaris-LegacyStack__Item">
//                     <div
//                       className="Polaris-LegacyStack Polaris-LegacyStack--vertical Polaris-LegacyStack--spacingExtraTight Polaris-LegacyStack--distributionLeading Polaris-LegacyStack--alignmentLeading">
//                       <div className="Polaris-LegacyStack__Item">
//                         <p className="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--semibold">
//                           {selectedProduct.title}
//                         </p>
//                       </div>
//                       <div className="Polaris-LegacyStack__Item">
//                         <p className="Polaris-Text--root Polaris-Text--bodySm">
//                           {selectedProduct.handle}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="Polaris-LegacyCard__Footer">
//                 <div className="Polaris-ButtonGroup">
//                   <div className="Polaris-ButtonGroup__Item">
//                     <button
//                       className="Polaris-Button Polaris-Button--primary Polaris-Button--outline Polaris-Button--destructive"
//                       type="button" onClick={() => setSelectedProduct(null)}
//                     >
//                       <span className="Polaris-Button__Content">
//                         <span className="Polaris-Button__Text">Remove</span>
//                       </span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//         {linkType === 'collection' && selectedCollection && (
//           <div className="Polaris-FormLayout__Item">
//             <div className="Polaris-LegacyCard">
//               <div className="Polaris-LegacyCard__Section">
//                 <div className="Polaris-LegacyStack">
//                   <div className="Polaris-LegacyStack__Item">
//                     <span className="Polaris-Thumbnail Polaris-Thumbnail--sizeMedium">
//                       <img className="collectionImgCls" alt={selectedCollection.title}
//                         src={selectedCollection.image?.originalSrc} />
//                     </span>
//                   </div>
//                   <div className="Polaris-LegacyStack__Item">
//                     <div
//                       className="Polaris-LegacyStack Polaris-LegacyStack--vertical Polaris-LegacyStack--spacingExtraTight Polaris-LegacyStack--distributionLeading Polaris-LegacyStack--alignmentLeading">
//                       <div className="Polaris-LegacyStack__Item">
//                         <p className="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--semibold">
//                           {selectedCollection.title}
//                         </p>
//                       </div>
//                       <div className="Polaris-LegacyStack__Item">
//                         <p className="Polaris-Text--root Polaris-Text--bodySm">
//                           {selectedCollection.handle}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="Polaris-LegacyCard__Footer">
//                 <div className="Polaris-ButtonGroup">
//                   <div className="Polaris-ButtonGroup__Item">
//                     <button
//                       className="Polaris-Button Polaris-Button--primary Polaris-Button--outline Polaris-Button--destructive"
//                       type="button" onClick={() => setSelectedCollection(null)}
//                     >
//                       <span className="Polaris-Button__Content">
//                         <span className="Polaris-Button__Text">Remove</span>
//                       </span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//         <div className="Polaris-FormLayout__Item">
//           <div className="Polaris-LegacyStack">
//             <div className="Polaris-LegacyStack__Item Polaris-LegacyStack__Item--fill">
//               <div className="removeIconBtn"><button type="button"
//                 className="Polaris-Link Polaris-Link--monochrome" onClick={onRemove}>Remove page</button></div>
//             </div>
//           </div>
//         </div>

//       </div>

//     </div>
//   );
// }

// export default IconBlock;



// testing code for select multiple product and colection for button shop now bu in this one issue it is not save the all the product and collection like when user click on select product then it clcik on collection selection then it remove the product 

// import React, { useState } from 'react';
// import {
//   TextField,
//   Button,
//   LegacyStack,
//   Select,
//   Thumbnail,
//   LegacyCard,
//   Link,
//   Text,
//   Badge,
//   Stack,
// } from '@shopify/polaris';
// import IconSelector from './IconSelector';
// import ProductPicker from './ProductPicker';
// import CollectionPicker from './CollectionPicker';
// import './IconBlock.css';
// import * as icons from 'react-icons/lia';

// function IconBlock({
//   pageId,
//   title,
//   subheading,
//   buttonText,
//   linkType,
//   externalUrl,
//   selectedIcon,
//   cta,
//   selectedProduct,
//   selectedCollection,
//   iconModalActive,
//   isProductPickerOpen,
//   isCollectionPickerOpen,
//   setTitle,
//   setSubheading,
//   setButtonText,
//   setLinkType,
//   setExternalUrl,
//   setSelectedIcon,
//   setCta,
//   setSelectedProduct,
//   setSelectedCollection,
//   toggleIconModal,
//   setIconModalActive,
//   setIsProductPickerOpen,
//   setIsCollectionPickerOpen,
//   onRemove,
//   pageIndex,
//   iconBlockPages,
// }) {
//   const removeIcon = () => {
//     setSelectedIcon(null);
//   };

//   const handleIconSelect = (icon) => {
//     setSelectedIcon(icon);
//     setIconModalActive(false);
//   };

//   const getIconComponent = (iconName) => {
//     try {
//       return icons[iconName];
//     } catch (error) {
//       console.error(`Error importing icon ${iconName}:`, error);
//       return null; // Default return null if the icon is not found
//     }
//   };

//   const IconComponent = selectedIcon ? getIconComponent(selectedIcon.name) : null;

//   const handleLinkTypeChange = (value) => {
//     setLinkType(value);
//     setSelectedProduct(null);
//     setSelectedCollection(null);
//     setExternalUrl('');
//   };

//   return (
//     <div>
//       <div className='mainIconCard'>
//         <div className="Polaris-FormLayout__Item">
//           <div className="Polaris-LegacyStack Polaris-LegacyStack--alignmentCenter">
//             <div className="Polaris-LegacyStack__Item">
//               <div className="iconHeading">Page #{pageIndex + 1}</div>
//             </div>
//           </div>
//         </div>

//         <div className='Polaris-FormLayout__Item'>
//           <TextField label="Title" value={title} onChange={(value) => setTitle(value)}
//             autoComplete="off"
//           />
//         </div>

//         <div className='Polaris-FormLayout__Item'>
//           <TextField label="Subheading" value={subheading} onChange={(value) => setSubheading(value)}
//             autoComplete="off"
//           />
//         </div>

//         <LegacyStack vertical spacing="tight">
//           <LegacyStack.Item>
//             <p className="Polaris-Text--root Polaris-FormLayout__Item">Icon</p>
//           </LegacyStack.Item>
//           <LegacyStack.Item>
//             <LegacyStack spacing="baseTight" distribution="leading">
//               <LegacyStack.Item>
//                 <div
//                   className={`icon-preview ${selectedIcon ? 'selected' : ''}`}
//                   onClick={toggleIconModal}
//                   style={{ cursor: 'pointer' }}
//                 >
//                   {IconComponent ? (
//                     <span className="Polaris-Thumbnail Polaris-Thumbnail--sizeLarge">
//                       <IconComponent size={32} />
//                     </span>
//                   ) : (
//                     !selectedIcon ? (
//                       <span className="Polaris-Icon Polaris-Icon--colorSubdued Polaris-Icon--applyColor">
//                         <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
//                         <svg
//                           viewBox="0 0 20 20"
//                           className="Polaris-Icon__Svg"
//                           focusable="false"
//                           aria-hidden="true"
//                         >
//                           <path d="M19 2.5a1.5 1.5 0 0 0-1.5-1.5h-15a1.5 1.5 0 0 0-1.5 1.5v15a1.5 1.5 0 0 0 1.5 1.5h7.5v-2h-6.503c-.41 0-.64-.46-.4-.79l3.553-4.051c.19-.21.52-.21.72-.01l1.63 1.851 3.06-4.781a.5.5 0 0 1 .84.02l.72 1.251a5.98 5.98 0 0 1 2.38-.49h3v-7.5zm-11.5 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm12.207 10.793a1 1 0 0 0-.707-.293h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 0 0 .707-1.707z"></path>
//                         </svg>
//                       </span>
//                     ) : (
//                       selectedIcon && (
//                         <span className="Polaris-Thumbnail Polaris-Thumbnail--sizeLarge">
//                           {selectedIcon.icon}
//                         </span>
//                       )
//                     )
//                   )}
//                 </div>
//               </LegacyStack.Item>
//               <LegacyStack.Item fill>
//                 <LegacyStack vertical spacing="extraTight" distribution="center">
//                   <div className="Polaris-LegacyStack__Item Polaris-LegacyStack__Item--fill">
//                     <Button onClick={selectedIcon ? removeIcon : toggleIconModal} fullWidth>
//                       {selectedIcon ? 'Remove Icon' : 'Select Icon'}
//                     </Button>
//                   </div>
//                   <LegacyStack.Item>
//                     <Button fullWidth outline disabled>
//                       Upload Icon
//                     </Button>
//                   </LegacyStack.Item>
//                   <LegacyStack.Item>
//                     <Text variant="bodySm" color="subdued">
//                       Available with Starter plan.
//                       <Link>Upgrade now.</Link>
//                     </Text>
//                   </LegacyStack.Item>
//                 </LegacyStack>
//               </LegacyStack.Item>
//             </LegacyStack>
//           </LegacyStack.Item>
//         </LegacyStack>
//         <IconSelector active={iconModalActive} toggleModal={toggleIconModal} onIconSelect={handleIconSelect} />
//         <Select label="Call to action" value={cta} onChange={(value) => {
//           setCta(value);
//           setButtonText('Shop Now');
//           handleLinkTypeChange('');
//         }}
//           options={[
//             { label: 'No call to action', value: 'no-cta' },
//             { label: 'Button', value: 'button-cta' },
//             { label: 'Whole banner clickable', value: 'clickable-banner-cta' },
//           ]}
//         />
//         {cta === 'button-cta' || cta === 'clickable-banner-cta' ? (
//           <>
//             {cta !== 'clickable-banner-cta' && (
//               <div className='Polaris-FormLayout__Item'>
//                 <TextField className="button-text-field" label="Button text" value={buttonText} onChange={(value) =>
//                   setButtonText(value)}
//                 />
//               </div>
//             )}
//             <div className="Polaris-FormLayout__Item">
//               <fieldset className="Polaris-VerticalStack Polaris-VerticalStack--fieldsetReset"
//                 aria-invalid="false" style={{
//                   "--pc-vertical-stack-order": "column"
//                   , "--pc-vertical-stack-gap-xs": "var(--p-space-4)", "--pc-vertical-stack-gap-md"
//                     : "var(--p-space-0)"
//                 }}>
//                 <legend className="Polaris-Box" style={{
//                   "--pc-box-padding-block-end-xs": "var(--p-space-5)"
//                   , "--pc-box-padding-block-end-md": "var(--p-space-1)"
//                 }}>
//                   Link to
//                 </legend>
//                 <ul className="Polaris-VerticalStack Polaris-VerticalStack--listReset"
//                   style={{
//                     "--pc-vertical-stack-order": "column", "--pc-vertical-stack-gap-xs"
//                       : "var(--p-space-4)", "--pc-vertical-stack-gap-md": "var(--p-space-0)"
//                   }}>
//                   <li>
//                     <div className="Polaris-Bleed" style={{
//                       "--pc-bleed-margin-block-end-xs"
//                         : "var(--p-space-0)"
//                     }}>
//                       <label className="Polaris-Choice" htmlFor={`PolarisRadioButton50-${pageId}`}>
//                         <span className="Polaris-Choice__Control">
//                           <span className="Polaris-RadioButton">
//                             <input id={`PolarisRadioButton50-${pageId}`} name={`PolarisChoiceList13-${pageId}`} type="radio"
//                               className="Polaris-RadioButton__Input" value="product"
//                               checked={linkType === 'product'} onChange={() =>
//                                 handleLinkTypeChange('product')}
//                             />
//                             <span className="Polaris-RadioButton__Backdrop"></span>
//                           </span>
//                         </span>
//                         <span className="Polaris-Choice__Label">
//                           <span>Product page</span>
//                         </span>
//                       </label>
//                     </div>
//                   </li>
//                   <li>
//                     <div className="Polaris-Bleed" style={{
//                       "--pc-bleed-margin-block-end-xs"
//                         : "var(--p-space-0)"
//                     }}>
//                       <label className="Polaris-Choice" htmlFor={`PolarisRadioButton51-${pageId}`}>
//                         <span className="Polaris-Choice__Control">
//                           <span className="Polaris-RadioButton">
//                             <input id={`PolarisRadioButton51-${pageId}`} name={`PolarisChoiceList13-${pageId}`} type="radio"
//                               className="Polaris-RadioButton__Input" value="collection"
//                               checked={linkType === 'collection'} onChange={() =>
//                                 handleLinkTypeChange('collection')}
//                             />
//                             <span className="Polaris-RadioButton__Backdrop"></span>
//                           </span>
//                         </span>
//                         <span className="Polaris-Choice__Label">
//                           <span>Collection page</span>
//                         </span>
//                       </label>
//                     </div>
//                   </li>
//                   <li>
//                     <div className="Polaris-Bleed" style={{
//                       "--pc-bleed-margin-block-end-xs"
//                         : "var(--p-space-0)"
//                     }}>
//                       <label className="Polaris-Choice" htmlFor={`PolarisRadioButton52-${pageId}`}>
//                         <span className="Polaris-Choice__Control">
//                           <span className="Polaris-RadioButton">
//                             <input id={`PolarisRadioButton52-${pageId}`} name={`PolarisChoiceList13-${pageId}`} type="radio"
//                               className="Polaris-RadioButton__Input" value="external"
//                               checked={linkType === 'external'} onChange={() =>
//                                 handleLinkTypeChange('external')}
//                             />
//                             <span className="Polaris-RadioButton__Backdrop"></span>
//                           </span>
//                         </span>
//                         <span className="Polaris-Choice__Label">
//                           <span>External page</span>
//                         </span>
//                       </label>
//                     </div>
//                   </li>
//                 </ul>
//               </fieldset>
//             </div>
//             <div className="Polaris-FormLayout__Item">
//               {linkType === 'product' && (
//                 <Button onClick={() => setIsProductPickerOpen(true)} fullWidth>
//                   <span className="Polaris-Button__Content">
//                     <span className="Polaris-Button__Icon">
//                       <span className="Polaris-Icon">
//                         <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
//                         <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg" focusable="false"
//                           aria-hidden="true">
//                           <path fillRule="evenodd"
//                             d="m2.606 5.434 3-2.876a2.019 2.019 0 0 1 2.788 0l3 2.876c.387.372.606.883.606 1.416v2.15c-2.838.47-5 3.104-5 6.038v2.962h-3c-1.105 0-2-.884-2-1.974v-9.176c0-.533.219-1.044.606-1.416Zm4.394 1.566a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z">
//                           </path>
//                           <path
//                             d="M13.793 8.793a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1 0 1.415l-2.5 2.5a1 1 0 0 1-1.414-1.415l.793-.793h-1.586c-1.105 0-2 .482-2 1.429v2.714c0 .473-.448.857-1 .857s-1-.384-1-.857v-2.714c0-1.894 1.79-3.429 4-3.429h1.586l-.793-.793a1 1 0 0 1 0-1.414Z">
//                           </path>
//                         </svg>
//                       </span>
//                     </span>
//                     <span className="Polaris-Button__Text">Select Product</span>
//                   </span>
//                 </Button>
//               )}
//               {linkType === 'collection' && (
//                 <Button onClick={() => setIsCollectionPickerOpen(true)} fullWidth>
//                   <span className="Polaris-Button__Content">
//                     <span className="Polaris-Button__Icon">
//                       <span className="Polaris-Icon">
//                         <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
//                         <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg" focusable="false"
//                           aria-hidden="true">
//                           <path
//                             d="M13.793 8.793a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1 0 1.415l-2.5 2.499a1 1 0 0 1-1.414-1.414l.793-.793h-1.586c-1.105 0-2 .482-2 1.428v2.715c0 .473-.448.857-1 .857s-1-.384-1-.857v-2.715c0-1.893 1.79-3.428 4-3.428h1.586l-.793-.793a1 1 0 0 1 0-1.414Z">
//                           </path>
//                           <path fillRule="evenodd"
//                             d="m5.586 6.586 2-2a2 2 0 0 1 2.828 0l2 2a2 2 0 0 1 .586 1.414v.255a6.002 6.002 0 0 0-5 5.917v3h-1a2 2 0 0 1-2-2v-7.172a2 2 0 0 1 .586-1.414Zm4.121 1.293a1 1 0 1 0-1.414-1.414 1 1 0 0 0 1.414 1.414Z">
//                           </path>
//                         </svg>
//                       </span>
//                     </span>
//                     <span className="Polaris-Button__Text">Select Collection</span>
//                   </span>
//                 </Button>
//               )}
//               {linkType === 'external' && (
//                 <TextField label="URL" value={externalUrl} onChange={(value) => setExternalUrl(value)}
//                 />
//               )}
//             </div>
//             <ProductPicker isOpen={isProductPickerOpen} onSelectProduct={setSelectedProduct} onClose={() =>
//               setIsProductPickerOpen(false)}
//             />
//             <CollectionPicker isOpen={isCollectionPickerOpen} onSelectCollection={setSelectedCollection}
//               onClose={() => setIsCollectionPickerOpen(false)}
//             />
//           </>
//         ) : null}
//         {linkType === 'product' && selectedProduct && (
//           <div className="Polaris-FormLayout__Item">
//             <div className="Polaris-LegacyCard">
//               <div className="Polaris-LegacyCard__Section">
//                 <div className="Polaris-LegacyStack">
//                   <div className="Polaris-LegacyStack__Item">
//                     <span className="Polaris-Thumbnail Polaris-Thumbnail--sizeMedium">
//                       <img className="productImgCls" alt={selectedProduct.title}
//                         src={selectedProduct.images[0]?.originalSrc} />
//                     </span>
//                   </div>
//                   <div className="Polaris-LegacyStack__Item">
//                     <div
//                       className="Polaris-LegacyStack Polaris-LegacyStack--vertical Polaris-LegacyStack--spacingExtraTight Polaris-LegacyStack--distributionLeading Polaris-LegacyStack--alignmentLeading">
//                       <div className="Polaris-LegacyStack__Item">
//                         <p className="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--semibold">
//                           {selectedProduct.title}
//                         </p>
//                       </div>
//                       <div className="Polaris-LegacyStack__Item">
//                         <p className="Polaris-Text--root Polaris-Text--bodySm">
//                           {selectedProduct.handle}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="Polaris-LegacyCard__Footer">
//                 <div className="Polaris-ButtonGroup">
//                   <div className="Polaris-ButtonGroup__Item">
//                     <button
//                       className="Polaris-Button Polaris-Button--primary Polaris-Button--outline Polaris-Button--destructive"
//                       type="button" onClick={() => setSelectedProduct(null)}
//                     >
//                       <span className="Polaris-Button__Content">
//                         <span className="Polaris-Button__Text">Remove</span>
//                       </span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//         {linkType === 'collection' && selectedCollection && (
//           <div className="Polaris-FormLayout__Item">
//             <div className="Polaris-LegacyCard">
//               <div className="Polaris-LegacyCard__Section">
//                 <div className="Polaris-LegacyStack">
//                   <div className="Polaris-LegacyStack__Item">
//                     <span className="Polaris-Thumbnail Polaris-Thumbnail--sizeMedium">
//                       <img className="collectionImgCls" alt={selectedCollection.title}
//                         src={selectedCollection.image?.originalSrc} />
//                     </span>
//                   </div>
//                   <div className="Polaris-LegacyStack__Item">
//                     <div
//                       className="Polaris-LegacyStack Polaris-LegacyStack--vertical Polaris-LegacyStack--spacingExtraTight Polaris-LegacyStack--distributionLeading Polaris-LegacyStack--alignmentLeading">
//                       <div className="Polaris-LegacyStack__Item">
//                         <p className="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--semibold">
//                           {selectedCollection.title}
//                         </p>
//                       </div>
//                       <div className="Polaris-LegacyStack__Item">
//                         <p className="Polaris-Text--root Polaris-Text--bodySm">
//                           {selectedCollection.handle}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="Polaris-LegacyCard__Footer">
//                 <div className="Polaris-ButtonGroup">
//                   <div className="Polaris-ButtonGroup__Item">
//                     <button
//                       className="Polaris-Button Polaris-Button--primary Polaris-Button--outline Polaris-Button--destructive"
//                       type="button" onClick={() => setSelectedCollection(null)}
//                     >
//                       <span className="Polaris-Button__Content">
//                         <span className="Polaris-Button__Text">Remove</span>
//                       </span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//         <div className="Polaris-FormLayout__Item">
//           <div className="Polaris-LegacyStack">
//             <div className="Polaris-LegacyStack__Item Polaris-LegacyStack__Item--fill">
//               <div className="removeIconBtn"><button type="button"
//                 className="Polaris-Link Polaris-Link--monochrome" onClick={onRemove}>Remove page</button></div>
//             </div>
//           </div>
//         </div>

//       </div>

//     </div>
//   );
// }

// export default IconBlock;

import React from 'react';
import {
  TextField,
  Button,
  LegacyStack,
  Select,
  Thumbnail,
  LegacyCard,
  Link,
  Text,
  Badge,
  Stack,
} from '@shopify/polaris';
import IconSelector from './IconSelector';
import ProductPicker from './ProductPicker';
import CollectionPicker from './CollectionPicker';
import './IconBlock.css';
import * as icons from 'react-icons/lia';

function IconBlock({
  pageId,
  title,
  subheading,
  buttonText,
  linkType,
  externalUrl,
  selectedIcon,
  cta,
  selectedProduct,
  selectedCollection,
  iconModalActive,
  isProductPickerOpen,
  isCollectionPickerOpen,
  setTitle,
  setSubheading,
  setButtonText,
  setLinkType,
  setExternalUrl,
  setSelectedIcon,
  setCta,
  setSelectedProduct,
  setSelectedCollection,
  toggleIconModal,
  setIconModalActive,
  setIsProductPickerOpen,
  setIsCollectionPickerOpen,
  onRemove,
  pageIndex,
  iconBlockPages,
}) {
  const removeIcon = () => {
    setSelectedIcon(null);
  };

  const handleIconSelect = (icon) => {
    setSelectedIcon(icon);
    setIconModalActive(false);
  };

  const getIconComponent = (iconName) => {
    try {
      return icons[iconName];
    } catch (error) {
      console.error(`Error importing icon ${iconName}:`, error);
      return null; // Default return null if the icon is not found
    }
  };

  const IconComponent = selectedIcon ? getIconComponent(selectedIcon.name) : null;

  const handleLinkTypeChange = (value) => {
    setLinkType(value);
    // Preserve the state of selected products, collections, and external URLs
    if (value !== 'product') {
      setSelectedProduct(null);
    }
    if (value !== 'collection') {
      setSelectedCollection(null);
    }
    if (value !== 'external') {
      setExternalUrl('');
    }
  };

  return (
    <div>
      <div className='mainIconCard'>
        <div className="Polaris-FormLayout__Item">
          <div className="Polaris-LegacyStack Polaris-LegacyStack--alignmentCenter">
            <div className="Polaris-LegacyStack__Item">
              <div className="iconHeading">Page #{pageIndex + 1}</div>
            </div>
          </div>
        </div>

        <div className='Polaris-FormLayout__Item'>
          <TextField label="Title" value={title} onChange={(value) => setTitle(value)}
            autoComplete="off"
          />
        </div>

        <div className='Polaris-FormLayout__Item'>
          <TextField label="Subheading" value={subheading} onChange={(value) => setSubheading(value)}
            autoComplete="off"
          />
        </div>

        <LegacyStack vertical spacing="tight">
          <LegacyStack.Item>
            <p className="Polaris-Text--root Polaris-FormLayout__Item">Icon</p>
          </LegacyStack.Item>
          <LegacyStack.Item>
            <LegacyStack spacing="baseTight" distribution="leading">
              <LegacyStack.Item>
                <div
                  className={`icon-preview ${selectedIcon ? 'selected' : ''}`}
                  onClick={toggleIconModal}
                  style={{ cursor: 'pointer' }}
                >
                  {IconComponent ? (
                    <span className="Polaris-Thumbnail Polaris-Thumbnail--sizeLarge">
                      <IconComponent size={32} />
                    </span>
                  ) : (
                    !selectedIcon ? (
                      <span className="Polaris-Icon Polaris-Icon--colorSubdued Polaris-Icon--applyColor">
                        <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
                        <svg
                          viewBox="0 0 20 20"
                          className="Polaris-Icon__Svg"
                          focusable="false"
                          aria-hidden="true"
                        >
                          <path d="M19 2.5a1.5 1.5 0 0 0-1.5-1.5h-15a1.5 1.5 0 0 0-1.5 1.5v15a1.5 1.5 0 0 0 1.5 1.5h7.5v-2h-6.503c-.41 0-.64-.46-.4-.79l3.553-4.051c.19-.21.52-.21.72-.01l1.63 1.851 3.06-4.781a.5.5 0 0 1 .84.02l.72 1.251a5.98 5.98 0 0 1 2.38-.49h3v-7.5zm-11.5 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm12.207 10.793a1 1 0 0 0-.707-.293h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 0 0 .707-1.707z"></path>
                        </svg>
                      </span>
                    ) : (
                      selectedIcon && (
                        <span className="Polaris-Thumbnail Polaris-Thumbnail--sizeLarge">
                          {selectedIcon.icon}
                        </span>
                      )
                    )
                  )}
                </div>
              </LegacyStack.Item>
              <LegacyStack.Item fill>
                <LegacyStack vertical spacing="extraTight" distribution="center">
                  <div className="Polaris-LegacyStack__Item Polaris-LegacyStack__Item--fill">
                    <Button onClick={selectedIcon ? removeIcon : toggleIconModal} fullWidth>
                      {selectedIcon ? 'Remove Icon' : 'Select Icon'}
                    </Button>
                  </div>
                  <LegacyStack.Item>
                    <Button fullWidth outline disabled>
                      Upload Icon
                    </Button>
                  </LegacyStack.Item>
                  <LegacyStack.Item>
                    <Text variant="bodySm" color="subdued">
                      Available with Starter plan.
                      <Link>Upgrade now.</Link>
                    </Text>
                  </LegacyStack.Item>
                </LegacyStack>
              </LegacyStack.Item>
            </LegacyStack>
          </LegacyStack.Item>
        </LegacyStack>
        <IconSelector active={iconModalActive} toggleModal={toggleIconModal} onIconSelect={handleIconSelect} />
        <Select label="Call to action" value={cta} onChange={(value) => {
          setCta(value);
          setButtonText('Shop Now');
          handleLinkTypeChange('');
        }}
          options={[
            { label: 'No call to action', value: 'no-cta' },
            { label: 'Button', value: 'button-cta' },
            { label: 'Whole banner clickable', value: 'clickable-banner-cta' },
          ]}
        />
        {cta === 'button-cta' || cta === 'clickable-banner-cta' ? (
          <>
            {cta !== 'clickable-banner-cta' && (
              <div className='Polaris-FormLayout__Item'>
                <TextField className="button-text-field" label="Button text" value={buttonText} onChange={(value) =>
                  setButtonText(value)}
                />
              </div>
            )}
            <div className="Polaris-FormLayout__Item">
              <fieldset className="Polaris-VerticalStack Polaris-VerticalStack--fieldsetReset"
                aria-invalid="false" style={{
                  "--pc-vertical-stack-order": "column"
                  , "--pc-vertical-stack-gap-xs": "var(--p-space-4)", "--pc-vertical-stack-gap-md"
                    : "var(--p-space-0)"
                }}>
                <legend className="Polaris-Box" style={{
                  "--pc-box-padding-block-end-xs": "var(--p-space-5)"
                  , "--pc-box-padding-block-end-md": "var(--p-space-1)"
                }}>
                  Link to
                </legend>
                <ul className="Polaris-VerticalStack Polaris-VerticalStack--listReset"
                  style={{
                    "--pc-vertical-stack-order": "column", "--pc-vertical-stack-gap-xs"
                      : "var(--p-space-4)", "--pc-vertical-stack-gap-md": "var(--p-space-0)"
                  }}>
                  <li>
                    <div className="Polaris-Bleed" style={{
                      "--pc-bleed-margin-block-end-xs"
                        : "var(--p-space-0)"
                    }}>
                      <label className="Polaris-Choice" htmlFor={`PolarisRadioButton50-${pageId}`}>
                        <span className="Polaris-Choice__Control">
                          <span className="Polaris-RadioButton">
                            <input id={`PolarisRadioButton50-${pageId}`} name={`PolarisChoiceList13-${pageId}`} type="radio"
                              className="Polaris-RadioButton__Input" value="product"
                              checked={linkType === 'product'} onChange={() =>
                                handleLinkTypeChange('product')}
                            />
                            <span className="Polaris-RadioButton__Backdrop"></span>
                          </span>
                        </span>
                        <span className="Polaris-Choice__Label">
                          <span>Product page</span>
                        </span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="Polaris-Bleed" style={{
                      "--pc-bleed-margin-block-end-xs"
                        : "var(--p-space-0)"
                    }}>
                      <label className="Polaris-Choice" htmlFor={`PolarisRadioButton51-${pageId}`}>
                        <span className="Polaris-Choice__Control">
                          <span className="Polaris-RadioButton">
                            <input id={`PolarisRadioButton51-${pageId}`} name={`PolarisChoiceList13-${pageId}`} type="radio"
                              className="Polaris-RadioButton__Input" value="collection"
                              checked={linkType === 'collection'} onChange={() =>
                                handleLinkTypeChange('collection')}
                            />
                            <span className="Polaris-RadioButton__Backdrop"></span>
                          </span>
                        </span>
                        <span className="Polaris-Choice__Label">
                          <span>Collection page</span>
                        </span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="Polaris-Bleed" style={{
                      "--pc-bleed-margin-block-end-xs"
                        : "var(--p-space-0)"
                    }}>
                      <label className="Polaris-Choice" htmlFor={`PolarisRadioButton52-${pageId}`}>
                        <span className="Polaris-Choice__Control">
                          <span className="Polaris-RadioButton">
                            <input id={`PolarisRadioButton52-${pageId}`} name={`PolarisChoiceList13-${pageId}`} type="radio"
                              className="Polaris-RadioButton__Input" value="external"
                              checked={linkType === 'external'} onChange={() =>
                                handleLinkTypeChange('external')}
                            />
                            <span className="Polaris-RadioButton__Backdrop"></span>
                          </span>
                        </span>
                        <span className="Polaris-Choice__Label">
                          <span>External page</span>
                        </span>
                      </label>
                    </div>
                  </li>
                </ul>
              </fieldset>
            </div>
            <div className="Polaris-FormLayout__Item">
              {linkType === 'product' && (
                <Button onClick={() => setIsProductPickerOpen(true)} fullWidth>
                  <span className="Polaris-Button__Content">
                    <span className="Polaris-Button__Icon">
                      <span className="Polaris-Icon">
                        <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
                        <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg" focusable="false"
                          aria-hidden="true">
                          <path fillRule="evenodd"
                            d="m2.606 5.434 3-2.876a2.019 2.019 0 0 1 2.788 0l3 2.876c.387.372.606.883.606 1.416v2.15c-2.838.47-5 3.104-5 6.038v2.962h-3c-1.105 0-2-.884-2-1.974v-9.176c0-.533.219-1.044.606-1.416Zm4.394 1.566a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z">
                          </path>
                          <path
                            d="M13.793 8.793a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1 0 1.415l-2.5 2.5a1 1 0 0 1-1.414-1.415l.793-.793h-1.586c-1.105 0-2 .482-2 1.429v2.714c0 .473-.448.857-1 .857s-1-.384-1-.857v-2.714c0-1.894 1.79-3.429 4-3.429h1.586l-.793-.793a1 1 0 0 1 0-1.414Z">
                          </path>
                        </svg>
                      </span>
                    </span>
                    <span className="Polaris-Button__Text">Select Product</span>
                  </span>
                </Button>
              )}
              {linkType === 'collection' && (
                <Button onClick={() => setIsCollectionPickerOpen(true)} fullWidth>
                  <span className="Polaris-Button__Content">
                    <span className="Polaris-Button__Icon">
                      <span className="Polaris-Icon">
                        <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
                        <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg" focusable="false"
                          aria-hidden="true">
                          <path
                            d="M13.793 8.793a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1 0 1.415l-2.5 2.499a1 1 0 0 1-1.414-1.414l.793-.793h-1.586c-1.105 0-2 .482-2 1.428v2.715c0 .473-.448.857-1 .857s-1-.384-1-.857v-2.715c0-1.893 1.79-3.428 4-3.428h1.586l-.793-.793a1 1 0 0 1 0-1.414Z">
                          </path>
                          <path fillRule="evenodd"
                            d="m5.586 6.586 2-2a2 2 0 0 1 2.828 0l2 2a2 2 0 0 1 .586 1.414v.255a6.002 6.002 0 0 0-5 5.917v3h-1a2 2 0 0 1-2-2v-7.172a2 2 0 0 1 .586-1.414Zm4.121 1.293a1 1 0 1 0-1.414-1.414 1 1 0 0 0 1.414 1.414Z">
                          </path>
                        </svg>
                      </span>
                    </span>
                    <span className="Polaris-Button__Text">Select Collection</span>
                  </span>
                </Button>
              )}
              {linkType === 'external' && (
                <TextField label="URL" value={externalUrl} onChange={(value) => setExternalUrl(value)}
                />
              )}
            </div>
            <ProductPicker isOpen={isProductPickerOpen} onSelectProduct={setSelectedProduct} onClose={() =>
              setIsProductPickerOpen(false)}
            />
            <CollectionPicker isOpen={isCollectionPickerOpen} onSelectCollection={setSelectedCollection}
              onClose={() => setIsCollectionPickerOpen(false)}
            />
          </>
        ) : null}
        {linkType === 'product' && selectedProduct && (
          <div className="Polaris-FormLayout__Item">
            <div className="Polaris-LegacyCard">
              <div className="Polaris-LegacyCard__Section">
                <div className="Polaris-LegacyStack">
                  <div className="Polaris-LegacyStack__Item">
                    <span className="Polaris-Thumbnail Polaris-Thumbnail--sizeMedium">
                      <img className="productImgCls" alt={selectedProduct.title}
                        src={selectedProduct.images[0]?.originalSrc} />
                    </span>
                  </div>
                  <div className="Polaris-LegacyStack__Item">
                    <div
                      className="Polaris-LegacyStack Polaris-LegacyStack--vertical Polaris-LegacyStack--spacingExtraTight Polaris-LegacyStack--distributionLeading Polaris-LegacyStack--alignmentLeading">
                      <div className="Polaris-LegacyStack__Item">
                        <p className="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--semibold">
                          {selectedProduct.title}
                        </p>
                      </div>
                      <div className="Polaris-LegacyStack__Item">
                        <p className="Polaris-Text--root Polaris-Text--bodySm">
                          {selectedProduct.handle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Polaris-LegacyCard__Footer">
                <div className="Polaris-ButtonGroup">
                  <div className="Polaris-ButtonGroup__Item">
                    <button
                      className="Polaris-Button Polaris-Button--primary Polaris-Button--outline Polaris-Button--destructive"
                      type="button" onClick={() => setSelectedProduct(null)}
                    >
                      <span className="Polaris-Button__Content">
                        <span className="Polaris-Button__Text">Remove</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {linkType === 'collection' && selectedCollection && (
          <div className="Polaris-FormLayout__Item">
            <div className="Polaris-LegacyCard">
              <div className="Polaris-LegacyCard__Section">
                <div className="Polaris-LegacyStack">
                  <div className="Polaris-LegacyStack__Item">
                    <span className="Polaris-Thumbnail Polaris-Thumbnail--sizeMedium">
                      <img className="collectionImgCls" alt={selectedCollection.title}
                        src={selectedCollection.image?.originalSrc} />
                    </span>
                  </div>
                  <div className="Polaris-LegacyStack__Item">
                    <div
                      className="Polaris-LegacyStack Polaris-LegacyStack--vertical Polaris-LegacyStack--spacingExtraTight Polaris-LegacyStack--distributionLeading Polaris-LegacyStack--alignmentLeading">
                      <div className="Polaris-LegacyStack__Item">
                        <p className="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--semibold">
                          {selectedCollection.title}
                        </p>
                      </div>
                      <div className="Polaris-LegacyStack__Item">
                        <p className="Polaris-Text--root Polaris-Text--bodySm">
                          {selectedCollection.handle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Polaris-LegacyCard__Footer">
                <div className="Polaris-ButtonGroup">
                  <div className="Polaris-ButtonGroup__Item">
                    <button
                      className="Polaris-Button Polaris-Button--primary Polaris-Button--outline Polaris-Button--destructive"
                      type="button" onClick={() => setSelectedCollection(null)}
                    >
                      <span className="Polaris-Button__Content">
                        <span className="Polaris-Button__Text">Remove</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="Polaris-FormLayout__Item">
          <div className="Polaris-LegacyStack">
            <div className="Polaris-LegacyStack__Item Polaris-LegacyStack__Item--fill">
              <div className="removeIconBtn"><button type="button"
                className="Polaris-Link Polaris-Link--monochrome" onClick={onRemove}>Remove page</button></div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default IconBlock;

