// Testing code 15/10/2024 for call to action button  now it is workking code at 15/10/2024[ DONT DELETE THIS CODE UNTIL THE WHOLE APp is not created]

// import {
//   Page,
//   Card,
//   Tabs,
//   Button,
//   FormLayout,
//   TextField,
//   Badge,
//   RadioButton,
//   Stack,
//   Select,
//   Thumbnail,
//   Grid,
//   LegacyCard,
//   Link,
//   LegacyStack,
//   Text,
// } from "@shopify/polaris";
// import { useState } from "react";
// import IconSelector from "./IconSelector"; // Import the IconSelector component
// import "./BadgeEditor.css";
// import Design from "./Design"; // Import the Design component
// import Placement from "./Placement"; // Import the Placement component

// import ProductPicker from "./ProductPicker";
// import CollectionPicker from "./CollectionPicker";

// import IconBlock from './IconBlock'; // Import the IconBlock component
// import PaymentIcons from './PaymentIcons'; // Import the PaymentIcons component


// function BadgeEditor({ onBackClick }) {
//   const [selectedTab, setSelectedTab] = useState(0);
//   const [badgeType, setBadgeType] = useState("icon-block");
//   const [badgeName, setBadgeName] = useState("Your badge");
//   const [title, setTitle] = useState("Free Shipping");
//   const [subheading, setSubheading] = useState("Delivered to Your doorstep, on us!");
//   const [selectedIcon, setSelectedIcon] = useState(null);
//   const [cta, setCta] = useState("no-cta");
//   const [buttonText, setButtonText] = useState("Shop Now");
//   const [linkType, setLinkType] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [selectedCollection, setSelectedCollection] = useState(null);
//   const [externalUrl, setExternalUrl] = useState("");
//   const [iconModalActive, setIconModalActive] = useState(false);
//   const [isProductPickerOpen, setIsProductPickerOpen] = useState(false);
//   const [isCollectionPickerOpen, setIsCollectionPickerOpen] = useState(false);

//   const handleTabChange = (selectedTabIndex) => setSelectedTab(selectedTabIndex);

//   const tabs = [
//     { id: "content", content: "Content", accessibilityLabel: "Content Tab" },
//     { id: "design", content: "Design", accessibilityLabel: "Design Tab" },
//     { id: "placement", content: "Placement", accessibilityLabel: "Placement Tab" },
//   ];

//   // Toggle the icon selector modal
//   const toggleIconModal = () => setIconModalActive(!iconModalActive);

//   // Handle icon selection
//   const handleIconSelect = (icon) => {
//     setSelectedIcon(icon); // Set the selected icon
//     setIconModalActive(false); // Close modal after selecting an icon
//   };

//   // Remove the selected icon
//   const removeIcon = () => {
//     setSelectedIcon(null);
//   };

//   // Redirect to the Design tab
//   const handleContinueToDesign = () => {
//     setSelectedTab(1); // Change to Design tab
//   };

//   return (
//     <Page
//       title={
//         <div className="Polaris-Box topBox">
//           <div className="breadcrumbs">
//             <button
//               className="Polaris-Button"
//               type="button"
//               onClick={onBackClick}
//               style={{
//                 border: '1px solid #c4cdd5',
//                 borderRadius: '4px',
//                 padding: '5px',
//                 backgroundColor: '#f4f6f8',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//               }}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 style={{
//                   fill: 'rgb(97, 106, 117)',
//                   transition: 'fill 0.3s ease',
//                 }}
//                 className="back-arrow"
//               >
//                 <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path>
//               </svg>
//             </button>
//           </div>
//           <h1 className="Polaris-Text--root Polaris-Text--headingLg title" style={{ marginRight: 8 }}>
//             {badgeName}
//           </h1>
//           <Badge status="new">Draft</Badge>
//         </div>
//       }
//       primaryAction={<Button primary>Publish</Button>}
//     >
//       {/* Tabs Section */}
//       <div style={{ marginBottom: "20px" }}>
//         <Tabs tabs={tabs} selected={selectedTab} onSelect={handleTabChange} />
//       </div>

//       <Grid>
//         <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 5, xl: 5 }}>

//           <LegacyCard>
//             {/* Left Side: Form Inputs */}
//             <div className="form-container">
//               <Card.Section>
//                 {selectedTab === 0 && (
//                   <FormLayout>
//                     <FormLayout.Group>
//                       <Stack vertical>
//                         <h1 className="BadgeCls">Badge type</h1>
//                         <RadioButton
//                           label="Single banner"
//                           checked={badgeType === "single-banner"}
//                           id="singleBanner"
//                           name="badgeType"
//                           onChange={() => setBadgeType("single-banner")}
//                         />

//                         <RadioButton
//                           label="Icon block"
//                           checked={badgeType === 'icon-block'}
//                           id="iconBlock"
//                           name="badgeType"
//                           onChange={() => setBadgeType('icon-block')}
//                         />
//                         <RadioButton
//                           label="Payment icons"
//                           checked={badgeType === 'payment-icons'}
//                           id="paymentIcons"
//                           name="badgeType"
//                           onChange={() => setBadgeType('payment-icons')}
//                         />
//                       </Stack>
//                     </FormLayout.Group>

//                     <TextField
//                       label="Badge name"
//                       value={badgeName}
//                       onChange={(value) => setBadgeName(value)}
//                       helpText="Only visible to you. For your own internal reference."
//                     />

//                     <TextField
//                       label="Title"
//                       value={title}
//                       onChange={(value) => setTitle(value)}
//                     />

//                     <TextField
//                       label="Subheading"
//                       value={subheading}
//                       onChange={(value) => setSubheading(value)}
//                     />

//                     <LegacyStack vertical spacing="tight">
//                       {/* Icon Label */}
//                       <LegacyStack.Item>
//                         <p className="Polaris-Text--root">Icon</p>
//                       </LegacyStack.Item>

//                       {/* Icon Preview and Action Buttons */}
//                       <LegacyStack.Item>
//                         <LegacyStack spacing="baseTight" distribution="leading">
//                           {/* Icon Placeholder or Selected Icon */}
//                           <LegacyStack.Item>
//                             <div
//                               className={`icon-preview ${selectedIcon ? 'selected' : ''}`}
//                               onClick={toggleIconModal}
//                               style={{ cursor: 'pointer' }}
//                             >
//                               {selectedIcon ? (
//                                 <span className="Polaris-Thumbnail Polaris-Thumbnail--sizeLarge">{selectedIcon.icon}</span>
//                               ) : (
//                                 <span className="Polaris-Icon Polaris-Icon--colorSubdued Polaris-Icon--applyColor">
//                                   <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
//                                   <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
//                                     <path d="M19 2.5a1.5 1.5 0 0 0-1.5-1.5h-15a1.5 1.5 0 0 0-1.5 1.5v15a1.5 1.5 0 0 0 1.5 1.5h7.5v-2h-6.503c-.41 0-.64-.46-.4-.79l3.553-4.051c.19-.21.52-.21.72-.01l1.63 1.851 3.06-4.781a.5.5 0 0 1 .84.02l.72 1.251a5.98 5.98 0 0 1 2.38-.49h3v-7.5zm-11.5 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm12.207 10.793a1 1 0 0 0-.707-.293h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 0 0 .707-1.707z"></path>
//                                   </svg>
//                                 </span>
//                               )}
//                             </div>
//                           </LegacyStack.Item>

//                           {/* Buttons Section */}
//                           <LegacyStack.Item fill>
//                             <LegacyStack vertical spacing="extraTight" distribution="center">
//                               {/* Select or remove button */}
//                               <div className="Polaris-LegacyStack__Item Polaris-LegacyStack__Item--fill">
//                                 <Button
//                                   onClick={selectedIcon ? removeIcon : toggleIconModal}
//                                   fullWidth
//                                 >
//                                   {selectedIcon ? 'Remove Icon' : 'Select Icon'}
//                                 </Button>
//                               </div>

//                               {/* Disabled Upload Button */}
//                               <LegacyStack.Item>
//                                 <Button fullWidth outline disabled>
//                                   Upload Icon
//                                 </Button>
//                               </LegacyStack.Item>

//                               {/* Upgrade Plan Info */}
//                               <LegacyStack.Item>
//                                 <Text variant="bodySm" color="subdued">
//                                   Available with Starter plan. <Link>Upgrade now.</Link>
//                                 </Text>
//                               </LegacyStack.Item>
//                             </LegacyStack>
//                           </LegacyStack.Item>
//                         </LegacyStack>
//                       </LegacyStack.Item>
//                     </LegacyStack>

//                     {/* Modal for Icon Selector */}
//                     <IconSelector
//                       active={iconModalActive}
//                       toggleModal={toggleIconModal}
//                       onIconSelect={handleIconSelect}
//                     />

//                     <Select
//                       label="Call to action"
//                       value={cta}
//                       onChange={(value) => {
//                         setCta(value);
//                         setButtonText("Shop Now");
//                         setLinkType("");
//                         setSelectedProduct(null);
//                         setSelectedCollection(null);
//                         setExternalUrl("");
//                       }}
//                       options={[
//                         { label: "No call to action", value: "no-cta" },
//                         { label: "Button", value: "button-cta" },
//                         { label: "Whole banner clickable", value: "clickable-banner-cta" },
//                       ]}
//                     />

//                     {cta === "button-cta" || cta === "clickable-banner-cta" ? (
//                       <>
//                         {cta !== "clickable-banner-cta" && (
//                           <TextField
//                             className="button-text-field"
//                             label="Button text"
//                             value={buttonText}
//                             onChange={(value) => setButtonText(value)}
//                           />
//                         )}

//                         <div className="Polaris-FormLayout__Item">
//                           <fieldset className="Polaris-VerticalStack Polaris-VerticalStack--fieldsetReset" aria-invalid="false" style={{ "--pc-vertical-stack-order": "column", "--pc-vertical-stack-gap-xs": "var(--p-space-4)", "--pc-vertical-stack-gap-md": "var(--p-space-0)" }}>
//                             <legend className="Polaris-Box" style={{ "--pc-box-padding-block-end-xs": "var(--p-space-5)", "--pc-box-padding-block-end-md": "var(--p-space-1)" }}>
//                               Link to
//                             </legend>
//                             <ul className="Polaris-VerticalStack Polaris-VerticalStack--listReset" style={{ "--pc-vertical-stack-order": "column", "--pc-vertical-stack-gap-xs": "var(--p-space-4)", "--pc-vertical-stack-gap-md": "var(--p-space-0)" }}>
//                               <li>
//                                 <div className="Polaris-Bleed" style={{ "--pc-bleed-margin-block-end-xs": "var(--p-space-0)" }}>
//                                   <label className="Polaris-Choice" htmlFor="PolarisRadioButton50">
//                                     <span className="Polaris-Choice__Control">
//                                       <span className="Polaris-RadioButton">
//                                         <input
//                                           id="PolarisRadioButton50"
//                                           name="PolarisChoiceList13"
//                                           type="radio"
//                                           className="Polaris-RadioButton__Input"
//                                           value="product"
//                                           checked={linkType === "product"}
//                                           onChange={() => setLinkType("product")}
//                                         />
//                                         <span className="Polaris-RadioButton__Backdrop"></span>
//                                       </span>
//                                     </span>
//                                     <span className="Polaris-Choice__Label">
//                                       <span>Product page</span>
//                                     </span>
//                                   </label>
//                                 </div>
//                               </li>
//                               <li>
//                                 <div className="Polaris-Bleed" style={{ "--pc-bleed-margin-block-end-xs": "var(--p-space-0)" }}>
//                                   <label className="Polaris-Choice" htmlFor="PolarisRadioButton51">
//                                     <span className="Polaris-Choice__Control">
//                                       <span className="Polaris-RadioButton">
//                                         <input
//                                           id="PolarisRadioButton51"
//                                           name="PolarisChoiceList13"
//                                           type="radio"
//                                           className="Polaris-RadioButton__Input"
//                                           value="collection"
//                                           checked={linkType === "collection"}
//                                           onChange={() => setLinkType("collection")}
//                                         />
//                                         <span className="Polaris-RadioButton__Backdrop"></span>
//                                       </span>
//                                     </span>
//                                     <span className="Polaris-Choice__Label">
//                                       <span>Collection page</span>
//                                     </span>
//                                   </label>
//                                 </div>
//                               </li>
//                               <li>
//                                 <div className="Polaris-Bleed" style={{ "--pc-bleed-margin-block-end-xs": "var(--p-space-0)" }}>
//                                   <label className="Polaris-Choice" htmlFor="PolarisRadioButton52">
//                                     <span className="Polaris-Choice__Control">
//                                       <span className="Polaris-RadioButton">
//                                         <input
//                                           id="PolarisRadioButton52"
//                                           name="PolarisChoiceList13"
//                                           type="radio"
//                                           className="Polaris-RadioButton__Input"
//                                           value="external"
//                                           checked={linkType === "external"}
//                                           onChange={() => setLinkType("external")}
//                                         />
//                                         <span className="Polaris-RadioButton__Backdrop"></span>
//                                       </span>
//                                     </span>
//                                     <span className="Polaris-Choice__Label">
//                                       <span>External page</span>
//                                     </span>
//                                   </label>
//                                 </div>
//                               </li>
//                             </ul>
//                           </fieldset>
//                         </div>

//                         <div className="Polaris-FormLayout__Item">
//                           {linkType === "product" && (
//                             <Button onClick={() => setIsProductPickerOpen(true)} fullWidth>
//                               <span className="Polaris-Button__Content">
//                                 <span className="Polaris-Button__Icon">
//                                   <span className="Polaris-Icon">
//                                     <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
//                                     <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path fill-rule="evenodd" d="m2.606 5.434 3-2.876a2.019 2.019 0 0 1 2.788 0l3 2.876c.387.372.606.883.606 1.416v2.15c-2.838.47-5 3.104-5 6.038v2.962h-3c-1.105 0-2-.884-2-1.974v-9.176c0-.533.219-1.044.606-1.416Zm4.394 1.566a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path><path d="M13.793 8.793a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1 0 1.415l-2.5 2.5a1 1 0 0 1-1.414-1.415l.793-.793h-1.586c-1.105 0-2 .482-2 1.429v2.714c0 .473-.448.857-1 .857s-1-.384-1-.857v-2.714c0-1.894 1.79-3.429 4-3.429h1.586l-.793-.793a1 1 0 0 1 0-1.414Z"></path></svg>
//                                   </span>
//                                 </span>
//                                 <span className="Polaris-Button__Text">Select Product</span>
//                               </span>
//                             </Button>
//                           )}
//                           {linkType === "collection" && (
//                             <Button onClick={() => setIsCollectionPickerOpen(true)} fullWidth>
//                               <span className="Polaris-Button__Content">
//                                 <span className="Polaris-Button__Icon">
//                                   <span className="Polaris-Icon">
//                                     <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
//                                     <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path d="m6.172 3.171-2 2a4 4 0 0 0-1.172 2.829v7.171a2 2 0 0 1-2-2v-7.171a2 2 0 0 1 .586-1.414l2-2a2 2 0 0 1 2.828 0l.202.201a4.034 4.034 0 0 0-.444.384Zm8.621 4.794a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1 0 1.415l-2.5 2.499a1 1 0 0 1-1.414-1.414l.793-.793h-1.586c-1.105 0-2 .482-2 1.428v2.715c0 .473-.448.857-1 .857s-1-.384-1-.857v-2.715c0-1.893 1.79-3.428 4-3.428h1.586l-.793-.793a1 1 0 0 1 0-1.414Z"></path><path fill-rule="evenodd" d="m5.586 6.586 2-2a2 2 0 0 1 2.828 0l2 2a2 2 0 0 1 .586 1.414v.255a6.002 6.002 0 0 0-5 5.917v3h-1a2 2 0 0 1-2-2v-7.172a2 2 0 0 1 .586-1.414Zm4.121 1.293a1 1 0 1 0-1.414-1.414 1 1 0 0 0 1.414 1.414Z"></path></svg>
//                                   </span>
//                                 </span>
//                                 <span className="Polaris-Button__Text">Select Collection</span>
//                               </span>
//                             </Button>
//                           )}
//                           {linkType === "external" && (
//                             <TextField
//                               label="URL"
//                               value={externalUrl}
//                               onChange={(value) => setExternalUrl(value)}
//                             />
//                           )}
//                         </div>

//                         <ProductPicker
//                           isOpen={isProductPickerOpen}
//                           onSelectProduct={setSelectedProduct}
//                           onClose={() => setIsProductPickerOpen(false)}
//                         />
//                         <CollectionPicker
//                           isOpen={isCollectionPickerOpen}
//                           onSelectCollection={setSelectedCollection}
//                           onClose={() => setIsCollectionPickerOpen(false)}
//                         />
//                       </>
//                     ) : null}

//                     {selectedProduct && (
//                       <div className="Polaris-FormLayout__Item">
//                         <div className="Polaris-LegacyCard">
//                           <div className="Polaris-LegacyCard__Section">
//                             <div className="Polaris-LegacyStack">
//                               <div className="Polaris-LegacyStack__Item">
//                                 <span className="Polaris-Thumbnail Polaris-Thumbnail--sizeMedium">
//                                   <img className="productImgCls"
//                                     alt={selectedProduct.title}
//                                     src={selectedProduct.images[0]?.originalSrc}
//                                   />
//                                 </span>
//                               </div>
//                               <div className="Polaris-LegacyStack__Item">
//                                 <div className="Polaris-LegacyStack Polaris-LegacyStack--vertical Polaris-LegacyStack--spacingExtraTight Polaris-LegacyStack--distributionLeading Polaris-LegacyStack--alignmentLeading">
//                                   <div className="Polaris-LegacyStack__Item">
//                                     <p className="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--semibold">
//                                       {selectedProduct.title}
//                                     </p>
//                                   </div>
//                                   <div className="Polaris-LegacyStack__Item">
//                                     <p className="Polaris-Text--root Polaris-Text--bodySm">
//                                       {selectedProduct.handle}
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="Polaris-LegacyCard__Footer">
//                             <div className="Polaris-ButtonGroup">
//                               <div className="Polaris-ButtonGroup__Item">
//                                 <button
//                                   className="Polaris-Button Polaris-Button--primary Polaris-Button--outline Polaris-Button--destructive"
//                                   type="button"
//                                   onClick={() => setSelectedProduct(null)}
//                                 >
//                                   <span className="Polaris-Button__Content">
//                                     <span className="Polaris-Button__Text">Remove</span>
//                                   </span>
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     )}

//                     {selectedCollection && (
//                       <div className="Polaris-FormLayout__Item">
//                         <div className="Polaris-LegacyCard">
//                           <div className="Polaris-LegacyCard__Section">
//                             <div className="Polaris-LegacyStack">
//                               <div className="Polaris-LegacyStack__Item">
//                                 <span className="Polaris-Thumbnail Polaris-Thumbnail--sizeMedium">
//                                   <img className="collectionImgCls"
//                                     alt={selectedCollection.title}
//                                     src={selectedCollection.image?.originalSrc}
//                                   />
//                                 </span>
//                               </div>
//                               <div className="Polaris-LegacyStack__Item">
//                                 <div className="Polaris-LegacyStack Polaris-LegacyStack--vertical Polaris-LegacyStack--spacingExtraTight Polaris-LegacyStack--distributionLeading Polaris-LegacyStack--alignmentLeading">
//                                   <div className="Polaris-LegacyStack__Item">
//                                     <p className="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--semibold">
//                                       {selectedCollection.title}
//                                     </p>
//                                   </div>
//                                   <div className="Polaris-LegacyStack__Item">
//                                     <p className="Polaris-Text--root Polaris-Text--bodySm">
//                                       {selectedCollection.handle}
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="Polaris-LegacyCard__Footer">
//                             <div className="Polaris-ButtonGroup">
//                               <div className="Polaris-ButtonGroup__Item">
//                                 <button
//                                   className="Polaris-Button Polaris-Button--primary Polaris-Button--outline Polaris-Button--destructive"
//                                   type="button"
//                                   onClick={() => setSelectedCollection(null)}
//                                 >
//                                   <span className="Polaris-Button__Content">
//                                     <span className="Polaris-Button__Text">Remove</span>
//                                   </span>
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     )}

//                     <div className="translations-section">
//                       <Stack>
//                         <Stack.Item>
//                           <span className="Polaris-TextStyle--variationStrong">Translations</span>
//                         </Stack.Item>
//                         <Stack.Item>
//                           <Badge status="info">
//                             <span className="Polaris-Text--root Polaris-Text--bodySm">Essential plan</span>
//                           </Badge>
//                         </Stack.Item>
//                       </Stack>
//                     </div>

//                     <Button fullWidth onClick={() => { }}>
//                       Add translation
//                     </Button>

//                     {/* Continue to Design Tab Button */}
//                     <div style={{ textAlign: "center", marginTop: "20px" }}>
//                       <button
//                         className="Polaris-Button Polaris-Button--outline Polaris-Button--fullWidth"
//                         type="button"
//                         onClick={handleContinueToDesign}
//                       >
//                         <span className="Polaris-Button__Content">
//                           <span className="Polaris-Button__Icon">
//                             <span className="Polaris-Icon">
//                               <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
//                               <svg
//                                 viewBox="0 0 20 20"
//                                 className="Polaris-Icon__Svg"
//                                 focusable="false"
//                                 aria-hidden="true"
//                               >
//                                 <path d="m17.707 9.293-5-5a.999.999 0 1 0-1.414 1.414l3.293 3.293h-11.586a1 1 0 1 0 0 2h11.586l-3.293 3.293a.999.999 0 1 0 1.414 1.414l5-5a.999.999 0 0 0 0-1.414z"></path>
//                               </svg>
//                             </span>
//                           </span>
//                           <span className="Polaris-Button__Text">Continue to design</span>
//                         </span>
//                       </button>
//                     </div>
//                   </FormLayout>
//                 )}
//                 {selectedTab === 1 && <Design />} {/* Render the Design component */}
//                 {selectedTab === 2 && <Placement />} {/* Render the Placement component */}
//               </Card.Section>
//             </div>
//           </LegacyCard>
//         </Grid.Cell>

//         <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 6, xl: 6 }}>
//           <LegacyCard>
//             {/* Output/Preview Section */}
//             <div className="badge-output-container">
//               {selectedIcon ? (
//                 <div className="badge-icon">{selectedIcon.icon}</div>
//               ) : (
//                 <div className="icon-placeholder"></div>
//               )}
//               <div className="badge-text">
//                 <h2 className="badge-title">{title}</h2>
//                 <h3 className="badge-subheading">{subheading}</h3>
//               </div>
//               {cta === "button-cta" && (
//                 <button className="badge-button">{buttonText}</button>
//               )}
//               {cta === "clickable-banner-cta" && (
//                 <div className="output-banner">
//                 </div>
//               )}
//             </div>

//           </LegacyCard>
//         </Grid.Cell>
//       </Grid>
//     </Page>
//   );
// }

// export default BadgeEditor;


// Testing code for edit the record from main page on 28/10/2204


// import React, { useState, useEffect } from "react";
// import {
//   Page,
//   Card,
//   Tabs,
//   Button,
//   FormLayout,
//   Badge,
//   RadioButton,
//   Stack,
//   Grid,
//   LegacyCard,
//   TextField,
//   Toast,
//   Frame
// } from "@shopify/polaris";
// import "./BadgeEditor.css";
// import SingleBanner from "./SingleBanner";
// import IconBlock from "./IconBlock";
// import PaymentIcons from "./PaymentIcons";
// import IconSelector from "./IconSelector";
// import ProductPicker from "./ProductPicker";
// import CollectionPicker from "./CollectionPicker";
// import Design from "./Design";
// import Placement from "./Placement";

// function BadgeEditor({ onBackClick, badgeId }) {
//   const [selectedTab, setSelectedTab] = useState(0);
//   const [badgeType, setBadgeType] = useState("single-banner");
//   const [badgeName, setBadgeName] = useState("Your badge");
//   const [isSaved, setIsSaved] = useState(false);
//   const [isPublished, setIsPublished] = useState(false);
//   const [toastActive, setToastActive] = useState(false);
//   const [isModified, setIsModified] = useState(false);
//   const [originalState, setOriginalState] = useState({});

//   const [singleBannerState, setSingleBannerState] = useState({
//     title: "Free Shipping",
//     subheading: "Delivered to Your doorstep, on us!",
//     buttonText: "Shop Now",
//     linkType: "",
//     externalUrl: "",
//     selectedIcon: null,
//     cta: "no-cta",
//     selectedProduct: null,
//     selectedCollection: null,
//     iconModalActive: false,
//     isProductPickerOpen: false,
//     isCollectionPickerOpen: false,
//   });

//   const [iconBlockPages, setIconBlockPages] = useState([{
//     id: 1,
//     title: "Free Shipping",
//     subheading: "No Extra Costs",
//     buttonText: "Shop Now",
//     linkType: "",
//     externalUrl: "",
//     selectedIcon: null,
//     cta: "no-cta",
//     selectedProduct: null,
//     selectedCollection: null,
//     iconModalActive: false,
//     isProductPickerOpen: false,
//     isCollectionPickerOpen: false,
//   }]);

//   const [paymentIconsPages, setPaymentIconsPages] = useState([{
//     id: 1,
//     title: "",
//     subheading: "",
//     buttonText: "Shop Now",
//     linkType: "",
//     externalUrl: "",
//     selectedIcon: null,
//     cta: "no-cta",
//     selectedProduct: null,
//     selectedCollection: null,
//     iconModalActive: false,
//     isProductPickerOpen: false,
//     isCollectionPickerOpen: false,
//   }]);

//   useEffect(() => {
//     const fetchBadgeData = async () => {
//       try {
//         const response = await fetch(`/api/badges/${badgeId}`);
//         if (response.ok) {
//           const badgeData = await response.json();
//           setBadgeDetails(badgeData);
//         } else {
//           console.error('Failed to fetch badge data');
//         }
//       } catch (error) {
//         console.error('Error fetching badge data:', error);
//       }
//     };

//     if (badgeId) {
//       fetchBadgeData();
//     } else {
//       setBadgeDetails({
//         badge_name: "Your badge",
//         badge_type: "single-banner",
//         status: "Draft",
//         badge_pages: [{
//           title: "Free Shipping",
//           subheading: "Delivered to Your doorstep, on us!",
//           buttonText: "Shop Now",
//           linkType: "",
//           externalUrl: "",
//           selectedIcon: null,
//           cta: "no-cta",
//           selectedProduct: null,
//           selectedCollection: null,
//         }]
//       });
//     }

//     setIsModified(false);
//     setOriginalState({
//       singleBannerState: { ...singleBannerState },
//       iconBlockPages: [...iconBlockPages],
//       paymentIconsPages: [...paymentIconsPages]
//     });
//   }, [badgeId]);

//   const setBadgeDetails = (badgeData) => {
//     setBadgeName(badgeData.badge_name);
//     setBadgeType(badgeData.badge_type);
//     setIsPublished(badgeData.status === "Publish");

//     if (badgeData.badge_type === "single-banner") {
//       setSingleBannerState({
//         title: badgeData.badge_pages[0]?.title || "Free Shipping",
//         subheading: badgeData.badge_pages[0]?.subheading || "Delivered to Your doorstep, on us!",
//         buttonText: badgeData.badge_pages[0]?.button_text || "Shop Now",
//         linkType: badgeData.badge_pages[0]?.linkType || "",
//         externalUrl: badgeData.badge_pages[0]?.external_url || "",
//         selectedIcon: badgeData.badge_pages[0]?.icon_name ? { name: badgeData.badge_pages[0].icon_name.replace("Lia", "") } : null,
//         cta: badgeData.badge_pages[0]?.call_to_action || "no-cta",
//         selectedProduct: null,
//         selectedCollection: null,
//         iconModalActive: false,
//         isProductPickerOpen: false,
//         isCollectionPickerOpen: false,
//       });
//     } else if (badgeData.badge_type === "icon-block") {
//       setIconBlockPages(badgeData.badge_pages.map((page, index) => ({
//         ...page,
//         id: index + 1,
//         selectedIcon: page.icon_name ? { name: page.icon_name.replace("Lia", "") } : null,
//       })));
//     } else if (badgeData.badge_type === "payment-icons") {
//       setPaymentIconsPages(badgeData.badge_pages.map((page, index) => ({
//         ...page,
//         id: index + 1,
//         selectedIcon: page.icon_name ? { name: page.icon_name.replace("Lia", "") } : null,
//       })));
//     }
//   };

//   const handleTabChange = (selectedTabIndex) => {
//     setSelectedTab(selectedTabIndex);
//   };

//   const tabs = [
//     { id: "content", content: "Content", accessibilityLabel: "Content Tab" },
//     { id: "design", content: "Design", accessibilityLabel: "Design Tab" },
//     { id: "placement", content: "Placement", accessibilityLabel: "Placement Tab" },
//   ];

//   const toggleIconModal = (component, pageId) => {
//     if (component === "singleBanner") {
//       setSingleBannerState((prevState) => ({
//         ...prevState,
//         iconModalActive: !prevState.iconModalActive,
//       }));
//       setIsModified(true);
//     } else if (component === "payment-icons") {
//       setPaymentIconsPages((prevPages) => {
//         const newPages = [...prevPages];
//         const pageIndex = newPages.findIndex(page => page.id === pageId);
//         newPages[pageIndex] = {
//           ...newPages[pageIndex],
//           iconModalActive: !newPages[pageIndex].iconModalActive,
//         };
//         setIsModified(true);
//         return newPages;
//       });
//     } else if (component === "icon-block") {
//       setIconBlockPages((prevPages) => {
//         const newPages = [...prevPages];
//         const pageIndex = newPages.findIndex(page => page.id === pageId);
//         newPages[pageIndex] = {
//           ...newPages[pageIndex],
//           iconModalActive: !newPages[pageIndex].iconModalActive,
//         };
//         setIsModified(true);
//         return newPages;
//       });
//     } else {
//       console.error("Unknown component:", component);
//     }
//   };

//   const handleIconSelect = (component, pageId, icon) => {
//     if (component === "singleBanner") {
//       setSingleBannerState((prevState) => ({
//         ...prevState,
//         selectedIcon: icon,
//         iconModalActive: false,
//       }));
//       setIsModified(true);
//     } else if (component === "payment-icons") {
//       setPaymentIconsPages((prevPages) => {
//         const newPages = [...prevPages];
//         const pageIndex = newPages.findIndex(page => page.id === pageId);
//         newPages[pageIndex] = {
//           ...newPages[pageIndex],
//           selectedIcon: icon,
//           iconModalActive: false,
//         };
//         setIsModified(true);
//         return newPages;
//       });
//     } else if (component === "icon-block") {
//       setIconBlockPages((prevPages) => {
//         const newPages = [...prevPages];
//         const pageIndex = newPages.findIndex(page => page.id === pageId);
//         newPages[pageIndex] = {
//           ...newPages[pageIndex],
//           selectedIcon: icon,
//           iconModalActive: false,
//         };
//         setIsModified(true);
//         return newPages;
//       });
//     } else {
//       console.error("Unknown component:", component);
//     }
//   };

//   const handleContinueToDesign = () => {
//     setSelectedTab(1);
//   };

//   const addIconBlockPage = () => {
//     setIconBlockPages((prevPages) => [
//       ...prevPages,
//       {
//         id: prevPages.length + 1,
//         title: "",
//         subheading: "",
//         buttonText: "Shop Now",
//         linkType: "",
//         externalUrl: "",
//         selectedIcon: null,
//         cta: "no-cta",
//         selectedProduct: null,
//         selectedCollection: null,
//         iconModalActive: false,
//         isProductPickerOpen: false,
//         isCollectionPickerOpen: false,
//       },
//     ]);
//     setIsModified(true);
//   };

//   const addPaymentIconsPage = () => {
//     setPaymentIconsPages((prevPages) => [
//       ...prevPages,
//       {
//         id: prevPages.length + 1,
//         title: "",
//         subheading: "",
//         buttonText: "Shop Now",
//         linkType: "",
//         externalUrl: "",
//         selectedIcon: null,
//         cta: "no-cta",
//         selectedProduct: null,
//         selectedCollection: null,
//         iconModalActive: false,
//         isProductPickerOpen: false,
//         isCollectionPickerOpen: false,
//       },
//     ]);
//     setIsModified(true);
//   };

//   const removeIconBlockPage = (pageId) => {
//     setIconBlockPages((prevPages) => prevPages.filter(page => page.id !== pageId));
//     setIsModified(true);
//   };

//   const removePaymentIconsPage = (pageId) => {
//     setPaymentIconsPages((prevPages) => prevPages.filter(page => page.id !== pageId));
//     setIsModified(true);
//   };
//   const handleSave = async () => {
//     const badgeDetails = getBadgeDetails();
//     badgeDetails.status = isPublished ? "Publish" : "Draft"; // Set the status dynamically

//     try {
//       const response = await fetch('/api/badges', {
//         method: badgeId ? 'PUT' : 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(badgeDetails)
//       });

//       if (response.ok) {
//         const savedBadge = await response.json(); // Get the saved badge data
//         setBadgeDetails(savedBadge); // Display the saved badge data
//         setIsSaved(true);
//         setToastActive(true);
//         setTimeout(() => setToastActive(false), 3000);
//         setIsModified(false);

//         // Delay the navigation back by 2 seconds
//         if (!badgeId) {
//           setTimeout(() => onBackClick(savedBadge.id), 2000);
//         }
//       } else {
//         console.error('Failed to save badge');
//       }
//     } catch (error) {
//       console.error('Error saving badge:', error);
//     }
//   };


//   const handlePublish = async () => {
//     const badgeDetails = getBadgeDetails();
//     badgeDetails.status = "Publish"; // Set the status to "Publish" statically

//     try {
//       const response = await fetch('/api/badges', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(badgeDetails)
//       });

//       if (response.ok) {
//         const savedBadge = await response.json(); // Get the saved badge data
//         setBadgeDetails(savedBadge); // Display the saved badge data
//         setIsSaved(true);
//         setToastActive(true);
//         setTimeout(() => setToastActive(false), 3000);
//         setIsModified(false);
//         setIsPublished(true); // Update the published state
//         onBackClick(savedBadge.id); // Refresh the page with the new badge ID
//       } else {
//         console.error('Failed to save badge');
//       }
//     } catch (error) {
//       console.error('Error saving badge:', error);
//     }
//   };

//   const handleUnpublish = () => {
//     setIsPublished(false);
//     setToastMessage("Badge Unpublished");
//     setToastActive(true);
//     setTimeout(() => setToastActive(false), 3000);
//   };

//   const handleRemove = () => {
//     setIsSaved(false);
//     setIsModified(false);
//   };

//   const handleProductSelection = (component, pageId, selectedProduct) => {
//     if (component === "singleBanner") {
//       setSingleBannerState((prevState) => ({
//         ...prevState,
//         selectedProduct,
//         isProductPickerOpen: false,
//       }));
//       setIsModified(true);
//     } else if (component === "payment-icons") {
//       setPaymentIconsPages((prevPages) => {
//         const newPages = [...prevPages];
//         const pageIndex = newPages.findIndex(page => page.id === pageId);
//         newPages[pageIndex] = {
//           ...newPages[pageIndex],
//           selectedProduct,
//           isProductPickerOpen: false,
//         };
//         setIsModified(true);
//         return newPages;
//       });
//     } else if (component === "icon-block") {
//       setIconBlockPages((prevPages) => {
//         const newPages = [...prevPages];
//         const pageIndex = newPages.findIndex(page => page.id === pageId);
//         newPages[pageIndex] = {
//           ...newPages[pageIndex],
//           selectedProduct,
//           isProductPickerOpen: false,
//         };
//         setIsModified(true);
//         return newPages;
//       });
//     } else {
//       console.error("Unknown component:", component);
//     }
//   };

//   const handleCollectionSelection = (component, pageId, selectedCollection) => {
//     if (component === "singleBanner") {
//       setSingleBannerState((prevState) => ({
//         ...prevState,
//         selectedCollection,
//         isCollectionPickerOpen: false,
//       }));
//       setIsModified(true);
//     } else if (component === "payment-icons") {
//       setPaymentIconsPages((prevPages) => {
//         const newPages = [...prevPages];
//         const pageIndex = newPages.findIndex(page => page.id === pageId);
//         newPages[pageIndex] = {
//           ...newPages[pageIndex],
//           selectedCollection,
//           isCollectionPickerOpen: false,
//         };
//         setIsModified(true);
//         return newPages;
//       });
//     } else if (component === "icon-block") {
//       setIconBlockPages((prevPages) => {
//         const newPages = [...prevPages];
//         const pageIndex = newPages.findIndex(page => page.id === pageId);
//         newPages[pageIndex] = {
//           ...newPages[pageIndex],
//           selectedCollection,
//           isCollectionPickerOpen: false,
//         };
//         setIsModified(true);
//         return newPages;
//       });
//     } else {
//       console.error("Unknown component:", component);
//     }
//   };

//   const handleUrlSelection = (component, pageId, linkType, externalUrl) => {
//     if (component === "singleBanner") {
//       setSingleBannerState((prevState) => ({
//         ...prevState,
//         linkType,
//         externalUrl,
//       }));
//       setIsModified(true);
//     } else if (component === "payment-icons") {
//       setPaymentIconsPages((prevPages) => {
//         const newPages = [...prevPages];
//         const pageIndex = newPages.findIndex(page => page.id === pageId);
//         newPages[pageIndex] = {
//           ...newPages[pageIndex],
//           linkType,
//           externalUrl,
//         };
//         setIsModified(true);
//         return newPages;
//       });
//     } else if (component === "icon-block") {
//       setIconBlockPages((prevPages) => {
//         const newPages = [...prevPages];
//         const pageIndex = newPages.findIndex(page => page.id === pageId);
//         newPages[pageIndex] = {
//           ...newPages[pageIndex],
//           linkType,
//           externalUrl,
//         };
//         setIsModified(true);
//         return newPages;
//       });
//     } else {
//       console.error("Unknown component:", component);
//     }
//   };

//   const handleCancel = () => {
//     if (badgeType === "single-banner") {
//       setSingleBannerState(originalState.singleBannerState);
//     } else if (badgeType === "icon-block") {
//       setIconBlockPages(originalState.iconBlockPages);
//     } else if (badgeType === "payment-icons") {
//       setPaymentIconsPages(originalState.paymentIconsPages);
//     }
//     setIsModified(false);
//   };

//   const getBadgeDetails = () => {
//     let badgeDetails = {};

//     const extractId = (gid) => {
//       const parts = gid.split('/');
//       return parts.length > 1 ? parts[parts.length - 1] : gid;
//     };

//     if (badgeType === "single-banner") {
//       badgeDetails = {
//         badge_name: badgeName,
//         badge_type: badgeType,
//         status: isPublished ? "Publish" : "Draft",
//         subheading: singleBannerState.subheading,
//         title: singleBannerState.title,
//         icon_name: singleBannerState.selectedIcon ? "Lia" + singleBannerState.selectedIcon.name : "",
//         call_to_action: singleBannerState.cta,
//         button_text: singleBannerState.buttonText,
//         product_id: singleBannerState.selectedProduct ? extractId(singleBannerState.selectedProduct.id) : "",
//         collection_id: singleBannerState.selectedCollection ? extractId(singleBannerState.selectedCollection.id) : "",
//         external_url: singleBannerState.externalUrl,
//         badge_pages: [
//           {
//             title: singleBannerState.title,
//             subheading: singleBannerState.subheading,
//             icon_name: singleBannerState.selectedIcon ? "Lia" + singleBannerState.selectedIcon.name : "",
//             call_to_action: singleBannerState.cta,
//             button_text: singleBannerState.buttonText,
//             product_id: singleBannerState.selectedProduct ? extractId(singleBannerState.selectedProduct.id) : "",
//             collection_id: singleBannerState.selectedCollection ? extractId(singleBannerState.selectedCollection.id) : "",
//             external_url: singleBannerState.externalUrl,
//           }
//         ]
//       };
//     } else if (badgeType === "icon-block") {
//       badgeDetails = {
//         badge_name: badgeName,
//         badge_type: badgeType,
//         status: isPublished ? "Publish" : "Draft",
//         badge_pages: iconBlockPages.map(page => ({
//           title: page.title,
//           subheading: page.subheading,
//           icon_name: page.selectedIcon ? "Lia" + page.selectedIcon.name : "",
//           call_to_action: page.cta,
//           button_text: page.buttonText,
//           product_id: page.selectedProduct ? extractId(page.selectedProduct.id) : "",
//           collection_id: page.selectedCollection ? extractId(page.selectedCollection.id) : "",
//           external_url: page.externalUrl,
//         }))
//       };
//     } else if (badgeType === "payment-icons") {
//       badgeDetails = {
//         badge_name: badgeName,
//         badge_type: badgeType,
//         status: isPublished ? "Publish" : "Draft",
//         badge_pages: paymentIconsPages.map(page => ({
//           title: page.title,
//           subheading: page.subheading,
//           icon_name: page.selectedIcon ? "Lia" + page.selectedIcon.name : "",
//           call_to_action: page.cta,
//           button_text: page.buttonText,
//           product_id: page.selectedProduct ? extractId(page.selectedProduct.id) : "",
//           collection_id: page.selectedCollection ? extractId(page.selectedCollection.id) : "",
//           external_url: page.externalUrl,
//         }))
//       };
//     }

//     return badgeDetails;
//   };

//   const handleDelete = async () => {
//     try {
//       const response = await fetch(`/api/badges/${badgeId}`, {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         setIsSaved(false);
//         setIsModified(false);
//         onBackClick(); // Optionally, redirect the user to the badge list page
//       } else {
//         console.error('Failed to delete badge');
//       }
//     } catch (error) {
//       console.error('Error deleting badge:', error);
//     }
//   };

//   return (
//     <Frame>
//       <Page
//         backAction={{ content: 'Products', onAction: onBackClick }}
//         title={badgeName}
//         subtitle={`Badge ID: ${badgeId || "New Badge"}`}
//         titleMetadata={isPublished ? <Badge status="success">Published</Badge> : <Badge tone="success">Draft</Badge>}
//         compactTitle
//         primaryAction={{
//           content: isPublished ? 'Unpublish' : 'Publish',
//           onAction: isPublished ? handleUnpublish : handlePublish,
//           destructive: isPublished,
//           primary: !isPublished,
//         }}
//         secondaryActions={[
//           {
//             content: isSaved && !isModified ? 'Delete' : 'Save',
//             onAction: isSaved && !isModified ? handleDelete : handleSave,
//             destructive: isSaved && !isModified,
//             plain: !isSaved && !isModified,
//             primary: !isSaved && !isModified,
//           },
//           isModified && {
//             content: 'Cancel',
//             onAction: handleCancel,
//             destructive: false,
//             plain: true,
//           },
//         ].filter(Boolean)} // Show Cancel button only if there are modifications
//       >
//         {toastActive && <Toast content={isSaved ? "Badge Saved" : "Badge Published"} />}
//         {/* Tabs Section */}
//         <div style={{ marginBottom: "20px" }}>
//           <Tabs tabs={tabs} selected={selectedTab} onSelect={handleTabChange} />
//         </div>

//         <Grid>
//           <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 5, xl: 5 }}>
//             <LegacyCard>

//               {selectedTab === 0 && (
//                 <Card.Section>
//                   <FormLayout>
//                     <FormLayout.Group>
//                       <Stack vertical>
//                         <h1 className="BadgeCls">Badge type</h1>
//                         <RadioButton
//                           label="Single banner"
//                           checked={badgeType === "single-banner"}
//                           id="singleBanner"
//                           name="badgeType"
//                           onChange={() => {
//                             console.log("Badge type changed to: Single banner");
//                             setBadgeType("single-banner");
//                             setIsModified(true); // Mark as modified
//                           }}
//                         />
//                         <RadioButton
//                           label="Icon block"
//                           checked={badgeType === "icon-block"}
//                           id="iconBlock"
//                           name="badgeType"
//                           onChange={() => {
//                             console.log("Badge type changed to: Icon block");
//                             setBadgeType("icon-block");
//                             setIsModified(true); // Mark as modified
//                           }}
//                         />
//                         <RadioButton
//                           label="Payment icons"
//                           checked={badgeType === "payment-icons"}
//                           id="paymentIcons"
//                           name="badgeType"
//                           onChange={() => {
//                             console.log("Badge type changed to: Payment icons");
//                             setBadgeType("payment-icons");
//                             setIsModified(true); // Mark as modified
//                           }}
//                         />
//                         <TextField
//                           label="Badge name"
//                           value={badgeName}
//                           onChange={(value) => {
//                             console.log("Badge name changed to:", value);
//                             setBadgeName(value);
//                             setIsModified(true); // Mark as modified
//                           }}
//                           helpText="Only visible to you. For your own internal reference."
//                         />
//                       </Stack>

//                       {badgeType === "single-banner" && (
//                         <SingleBanner
//                           {...singleBannerState}
//                           setTitle={(value) => {
//                             console.log("Title changed to:", value);
//                             setSingleBannerState((prevState) => ({ ...prevState, title: value }));
//                             setIsModified(true); // Mark as modified
//                           }}
//                           setSubheading={(value) => {
//                             console.log("Subheading changed to:", value);
//                             setSingleBannerState((prevState) => ({ ...prevState, subheading: value }));
//                             setIsModified(true); // Mark as modified
//                           }}
//                           setButtonText={(value) => {
//                             console.log("Button text changed to:", value);
//                             setSingleBannerState((prevState) => ({ ...prevState, buttonText: value }));
//                             setIsModified(true); // Mark as modified
//                           }}
//                           setLinkType={(value) => {
//                             console.log("Link type changed to:", value);
//                             setSingleBannerState((prevState) => ({ ...prevState, linkType: value }));
//                             setIsModified(true); // Mark as modified
//                           }}
//                           setExternalUrl={(value) => {
//                             console.log("External URL changed to:", value);
//                             setSingleBannerState((prevState) => ({ ...prevState, externalUrl: value }));
//                             setIsModified(true); // Mark as modified
//                           }}
//                           setSelectedIcon={(icon) => handleIconSelect("singleBanner", null, icon)}
//                           setCta={(value) => {
//                             console.log("CTA changed to:", value);
//                             setSingleBannerState((prevState) => ({ ...prevState, cta: value }));
//                             setIsModified(true); // Mark as modified
//                           }}
//                           setSelectedProduct={(value) => {
//                             console.log("Selected product changed to:", value);
//                             setSingleBannerState((prevState) => ({ ...prevState, selectedProduct: value }));
//                             setIsModified(true); // Mark as modified
//                           }}
//                           setSelectedCollection={(value) => {
//                             console.log("Selected collection changed to:", value);
//                             setSingleBannerState((prevState) => ({ ...prevState, selectedCollection: value }));
//                             setIsModified(true); // Mark as modified
//                           }}
//                           toggleIconModal={() => toggleIconModal("singleBanner")}
//                           setIconModalActive={() => toggleIconModal("singleBanner")}
//                           setIsProductPickerOpen={(value) => {
//                             console.log("Product picker open state changed to:", value);
//                             setSingleBannerState((prevState) => ({ ...prevState, isProductPickerOpen: value }));
//                             setIsModified(true); // Mark as modified
//                           }}
//                           setIsCollectionPickerOpen={(value) => {
//                             console.log("Collection picker open state changed to:", value);
//                             setSingleBannerState((prevState) => ({ ...prevState, isCollectionPickerOpen: value }));
//                             setIsModified(true); // Mark as modified
//                           }}
//                           onProductSelect={(product) => handleProductSelection("singleBanner", null, product)}
//                           onCollectionSelect={(collection) => handleCollectionSelection("singleBanner", null, collection)}
//                           onUrlSelect={(linkType, externalUrl) => handleUrlSelection("singleBanner", null, linkType, externalUrl)}
//                         />
//                       )}

//                       {badgeType === "icon-block" && (
//                         <>
//                           {iconBlockPages.map((page, index) => (
//                             <IconBlock
//                               key={page.id} // Ensure unique key
//                               pageId={page.id}
//                               {...page}
//                               setTitle={(value) => {
//                                 console.log("Title changed to:", value);
//                                 setIconBlockPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], title: value };
//                                   setIsModified(true); // Mark as modified
//                                   return newPages;
//                                 });
//                               }}
//                               setSubheading={(value) => {
//                                 console.log("Subheading changed to:", value);
//                                 setIconBlockPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], subheading: value };
//                                   setIsModified(true); // Mark as modified
//                                   return newPages;
//                                 });
//                               }}
//                               setButtonText={(value) => {
//                                 console.log("Button text changed to:", value);
//                                 setIconBlockPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], buttonText: value };
//                                   setIsModified(true); // Mark as modified
//                                   return newPages;
//                                 });
//                               }}
//                               setLinkType={(value) => {
//                                 console.log("Link type changed to:", value);
//                                 setIconBlockPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], linkType: value };
//                                   setIsModified(true); // Mark as modified
//                                   return newPages;
//                                 });
//                               }}
//                               setExternalUrl={(value) => {
//                                 console.log("External URL changed to:", value);
//                                 setIconBlockPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], externalUrl: value };
//                                   setIsModified(true); // Mark as modified
//                                   return newPages;
//                                 });
//                               }}
//                               setSelectedIcon={(icon) => handleIconSelect("icon-block", page.id, icon)}
//                               setCta={(value) => {
//                                 console.log("CTA changed to:", value);
//                                 setIconBlockPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], cta: value };
//                                   setIsModified(true); // Mark as modified
//                                   return newPages;
//                                 });
//                               }}
//                               setSelectedProduct={(value) => {
//                                 console.log("Selected product changed to:", value);
//                                 setIconBlockPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], selectedProduct: value };
//                                   setIsModified(true); // Mark as modified
//                                   return newPages;
//                                 });
//                               }}
//                               setSelectedCollection={(value) => {
//                                 console.log("Selected collection changed to:", value);
//                                 setIconBlockPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], selectedCollection: value };
//                                   setIsModified(true); // Mark as modified
//                                   return newPages;
//                                 });
//                               }}
//                               toggleIconModal={() => toggleIconModal("icon-block", page.id)}
//                               setIconModalActive={() => toggleIconModal("icon-block", page.id)}
//                               setIsProductPickerOpen={(value) => {
//                                 console.log("Product picker open state changed to:", value);
//                                 setIconBlockPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], isProductPickerOpen: value };
//                                   setIsModified(true); // Mark as modified
//                                   return newPages;
//                                 });
//                               }}
//                               setIsCollectionPickerOpen={(value) => {
//                                 console.log("Collection picker open state changed to:", value);
//                                 setIconBlockPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], isCollectionPickerOpen: value };
//                                   setIsModified(true); // Mark as modified
//                                   return newPages;
//                                 });
//                               }}
//                               onRemove={() => removeIconBlockPage(page.id)}
//                               pageIndex={index}
//                               iconBlockPages={iconBlockPages}
//                               onProductSelect={(product) => handleProductSelection("icon-block", page.id, product)}
//                               onCollectionSelect={(collection) => handleCollectionSelection("icon-block", page.id, collection)}
//                               onUrlSelect={(linkType, externalUrl) => handleUrlSelection("icon-block", page.id, linkType, externalUrl)}
//                             />
//                           ))}

//                           <div className="addBtnMain">
//                             <Button fullWidth onClick={addIconBlockPage}>
//                               Add New Page
//                             </Button>
//                           </div>
//                         </>
//                       )}

//                       {badgeType === "payment-icons" && (
//                         <>
//                           {paymentIconsPages.map((page, index) => (
//                             <PaymentIcons
//                               key={page.id} // Ensure unique key
//                               pageId={page.id}
//                               {...page}
//                               setTitle={(value) => {
//                                 console.log("Title changed to:", value);
//                                 setPaymentIconsPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], title: value };
//                                   setIsModified(true); // Mark as modified
//                                   return newPages;
//                                 });
//                               }}
//                               setSubheading={(value) => {
//                                 console.log("Subheading changed to:", value);
//                                 setPaymentIconsPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], subheading: value };
//                                   setIsModified(true); // Mark as modified
//                                   return newPages;
//                                 });
//                               }}
//                               setButtonText={(value) => {
//                                 console.log("Button text changed to:", value);
//                                 setPaymentIconsPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], buttonText: value };
//                                   setIsModified(true); // Mark as modified
//                                   return newPages;
//                                 });
//                               }}
//                               setLinkType={(value) => {
//                                 console.log("Link type changed to:", value);
//                                 setPaymentIconsPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], linkType: value };
//                                   setIsModified(true); // Mark as modified
//                                   return newPages;
//                                 });
//                               }}

//                               setExternalUrl={(value) => {
//                                 console.log("External URL changed to:", value);
//                                 setPaymentIconsPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], externalUrl: value };
//                                   setIsModified(true); // Mark as modified
//                                   return newPages;
//                                 });
//                               }}
//                               setSelectedIcon={(icon) => handleIconSelect("payment-icons", page.id, icon)}
//                               setCta={(value) => {
//                                 console.log("CTA changed to:", value);
//                                 setPaymentIconsPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], cta: value };
//                                   setIsModified(true); // Mark as modified
//                                   return newPages;
//                                 });
//                               }}
//                               setSelectedProduct={(value) => {
//                                 console.log("Selected product changed to:", value);
//                                 setPaymentIconsPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], selectedProduct: value };
//                                   setIsModified(true); // Mark as modified
//                                   return newPages;
//                                 });
//                               }}
//                               setSelectedCollection={(value) => {
//                                 console.log("Selected collection changed to:", value);
//                                 setPaymentIconsPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], selectedCollection: value };
//                                   setIsModified(true); // Mark as modified
//                                   return newPages;
//                                 });
//                               }}
//                               toggleIconModal={() => toggleIconModal("payment-icons", page.id)}
//                               setIconModalActive={() => toggleIconModal("payment-icons", page.id)}
//                               setIsProductPickerOpen={(value) => {
//                                 console.log("Product picker open state changed to:", value);
//                                 setPaymentIconsPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], isProductPickerOpen: value };
//                                   setIsModified(true); // Mark as modified
//                                   return newPages;
//                                 });
//                               }}

//                                   setIsCollectionPickerOpen={(value) => {
//                                     console.log("Collection picker open state changed to:", value);
//                                     setPaymentIconsPages((prevPages) => {
//                                       const newPages = [...prevPages];
//                                       const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                       newPages[pageIndex] = { ...newPages[pageIndex], isCollectionPickerOpen: value };
//                                       setIsModified(true); // Mark as modified
//                                       return newPages;
//                                     });
//                                   }}
//                                   onRemove={() => removePaymentIconsPage(page.id)}
//                                   pageIndex={index}
//                                   iconBlockPages={paymentIconsPages}
//                                   onProductSelect={(product) => handleProductSelection("payment-icons", page.id, product)}
//                                   onCollectionSelect={(collection) => handleCollectionSelection("payment-icons", page.id, collection)}
//                                   onUrlSelect={(linkType, externalUrl) => handleUrlSelection("payment-icons", page.id, linkType, externalUrl)}
//                                 />
//                               ))}

//                               <div className="addBtnMain">
//                                 <Button fullWidth onClick={addPaymentIconsPage}>
//                                   Add New Page
//                                 </Button>
//                               </div>
//                             </>
//                           )}
//                           <div className="translations-section">
//                             <Stack>
//                               <Stack.Item>
//                                 <span className="Polaris-TextStyle--variationStrong">Translations</span>
//                               </Stack.Item>
//                               <Stack.Item>
//                                 <Badge status="info">
//                                   <span className="Polaris-Text--root Polaris-Text--bodySm">Essential plan</span>
//                                 </Badge>
//                               </Stack.Item>
//                             </Stack>
//                           </div>
//                           <Button fullWidth onClick={() => { }}>
//                             Add translation
//                           </Button>
//                           {/* Continue to Design Tab Button */}
//                           <div style={{ textAlign: "center" }}>
//                             <button
//                               className="Polaris-Button Polaris-Button--outline Polaris-Button--fullWidth"
//                               type="button"
//                               onClick={handleContinueToDesign}
//                             >
//                               <span className="Polaris-Button__Content">
//                                 <span className="Polaris-Button__Icon">
//                                   <span className="Polaris-Icon">
//                                     <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
//                                     <svg
//                                       viewBox="0 0 20 20"
//                                       className="Polaris-Icon__Svg"
//                                       focusable="false"
//                                       aria-hidden="true"
//                                     >
//                                       <path d="m17.707 9.293-5-5a.999.999 0 0 0-1.414 1.414l3.293 3.293h-11.586a1 1 0 1 0 0 2h11.586l-3.293 3.293a.999.999 0 0 0 1.414 1.414l5-5a.999.999 0 0 0 0-1.414z"></path>
//                                     </svg>
//                                   </span>
//                                 </span>
//                                 <span className="Polaris-Button__Text">Continue to design</span>
//                               </span>
//                             </button>
//                           </div>
//                         </FormLayout.Group>
//                       </FormLayout>
//                     </Card.Section>
//                   )}

//                 </LegacyCard>

//                 {selectedTab === 1 && (
//                   <Card.Section>
//                     <Design
//                       title={badgeType === "single-banner" ? singleBannerState.title : badgeType === "icon-block" ? iconBlockPages[0].title : paymentIconsPages[0].title}
//                     />
//                   </Card.Section>
//                 )}

//                 {selectedTab === 2 && (
//                   <Placement
//                     badgeType={badgeType}
//                   />
//                 )}
//               </Grid.Cell>
//               <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 7, xl: 7 }}>
//                 <LegacyCard>             {/* Output/Preview Section */}

//                   {badgeType === "single-banner" && (
//                     <div className="badge-output-container">
//                       {singleBannerState.selectedIcon ? (
//                         <div className="badge-icon">{singleBannerState.selectedIcon.icon}</div>
//                       ) : (
//                         <div className="icon-placeholder"></div>
//                       )}
//                       <div className="badge-text">
//                         <h2 className="badge-title">{singleBannerState.title}</h2>
//                         <h3 className="badge-subheading">{singleBannerState.subheading}</h3>
//                       </div>
//                       {singleBannerState.cta === "button-cta" && (
//                         <button className="badge-button">{singleBannerState.buttonText}</button>
//                       )}
//                       {singleBannerState.cta === "clickable-banner-cta" && (
//                         <div className="output-banner">
//                         </div>
//                       )}
//                     </div>
//                   )}

//                   {badgeType === "icon-block" && (
//                     <div className="badge-output-container kdtYjY">
//                       {iconBlockPages.map((page, index) => (
//                         <div key={index} className="badge-output-page hVFYFW">
//                           {page.selectedIcon ? (
//                             <div className="badge-icon iubCKx">{page.selectedIcon.icon}</div>
//                           ) : (
//                             <div className="icon-placeholder"></div>
//                           )}
//                           <div className="badge-text">
//                             <h2 className="badge-title">{page.title}</h2>
//                             <h3 className="badge-subheading">{page.subheading}</h3>
//                           </div>
//                           {page.cta === "button-cta" && (
//                             <button className="badge-button">{page.buttonText}</button>
//                           )}
//                           {page.cta === "clickable-banner-cta" && (
//                             <div className="output-banner"></div>
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                   )}

//                   {badgeType === "payment-icons" && (
//                     <div className="badge-output-container kdtYjY">
//                       {paymentIconsPages.map((page, index) => (
//                         <div key={index} className="badge-output-page hVFYFW">
//                           {page.selectedIcon ? (
//                             <div className="badge-icon iubCKx">{page.selectedIcon.icon}</div>
//                           ) : (
//                             <div className="icon-placeholder"></div>
//                           )}
//                           <div className="badge-text">
//                             <h2 className="badge-title">{page.title}</h2>
//                             <h3 className="badge-subheading">{page.subheading}</h3>
//                           </div>
//                           {page.cta === "button-cta" && (
//                             <button className="badge-button">{page.buttonText}</button>
//                           )}
//                           {page.cta === "clickable-banner-cta" && (
//                             <div className="output-banner"></div>
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                   )}

//                 </LegacyCard>
//               </Grid.Cell>
//             </Grid>
//           </Page>
//         </Frame>
//       );
//     }

//     export default BadgeEditor;





// working on it

// import React, { useState, useEffect } from "react";
// import {
//   Page,
//   Card,
//   Tabs,
//   Button,
//   FormLayout,
//   Badge,
//   RadioButton,
//   Stack,
//   Grid,
//   LegacyCard,
//   TextField,
//   Toast,
//   Frame
// } from "@shopify/polaris";
// import "./BadgeEditor.css";
// import SingleBanner from "./SingleBanner";
// import IconBlock from "./IconBlock";
// import PaymentIcons from "./PaymentIcons";
// import IconSelector from "./IconSelector";
// import ProductPicker from "./ProductPicker";
// import CollectionPicker from "./CollectionPicker";
// import Design from "./Design";
// import Placement from "./Placement";

// function BadgeEditor({ onBackClick, badgeId, onBadgeSave, isCreationMode, badgeData }) {
//   const [selectedTab, setSelectedTab] = useState(0);
//   const [badgeType, setBadgeType] = useState("single-banner");
//   const [badgeName, setBadgeName] = useState("Your badge");
//   const [isSaved, setIsSaved] = useState(false);
//   const [isPublished, setIsPublished] = useState(false);
//   const [toastActive, setToastActive] = useState(false);
//   const [isModified, setIsModified] = useState(false);
//   const [originalState, setOriginalState] = useState({});

//   const [singleBannerState, setSingleBannerState] = useState({
//     title: "Free Shipping",
//     subheading: "Delivered to Your doorstep, on us!",
//     buttonText: "Shop Now",
//     linkType: "",
//     externalUrl: "",
//     selectedIcon: null,
//     cta: "no-cta",
//     selectedProduct: null,
//     selectedCollection: null,
//     iconModalActive: false,
//     isProductPickerOpen: false,
//     isCollectionPickerOpen: false,
//   });

//   const [iconBlockPages, setIconBlockPages] = useState([{
//     id: 1,
//     title: "Free Shipping",
//     subheading: "No Extra Costs",
//     buttonText: "Shop Now",
//     linkType: "",
//     externalUrl: "",
//     selectedIcon: null,
//     cta: "no-cta",
//     selectedProduct: null,
//     selectedCollection: null,
//     iconModalActive: false,
//     isProductPickerOpen: false,
//     isCollectionPickerOpen: false,
//   }]);

//   const [paymentIconsPages, setPaymentIconsPages] = useState([{
//     id: 1,
//     title: "",
//     subheading: "",
//     buttonText: "Shop Now",
//     linkType: "",
//     externalUrl: "",
//     selectedIcon: null,
//     cta: "no-cta",
//     selectedProduct: null,
//     selectedCollection: null,
//     iconModalActive: false,
//     isProductPickerOpen: false,
//     isCollectionPickerOpen: false,
//   }]);

//   useEffect(() => {
//     if (badgeId && !isCreationMode) {
//       const fetchBadgeData = async () => {
//         try {
//           const response = await fetch(`/api/badges/${badgeId}`);
//           const data = await response.json();
//           setBadgeType(data.badge_type);
//           setBadgeName(data.badge_name);
//           setIsPublished(data.status === "Publish");

//           if (data.badge_type === "single-banner") {
//             setSingleBannerState({
//               title: data.badge_pages[0].title,
//               subheading: data.badge_pages[0].subheading,
//               buttonText: data.badge_pages[0].button_text,
//               linkType: data.badge_pages[0].link_type,
//               externalUrl: data.badge_pages[0].external_url,
//               selectedIcon: data.badge_pages[0].icon_name ? { name: data.badge_pages[0].icon_name.replace("Lia", "") } : null,
//               cta: data.badge_pages[0].call_to_action,
//               selectedProduct: null,
//               selectedCollection: null,
//               iconModalActive: false,
//               isProductPickerOpen: false,
//               isCollectionPickerOpen: false,
//             });
//           } else if (data.badge_type === "icon-block") {
//             setIconBlockPages(data.badge_pages.map((page, index) => ({
//               ...page,
//               id: index + 1,
//               iconModalActive: false,
//               isProductPickerOpen: false,
//               isCollectionPickerOpen: false,
//             })));
//           } else if (data.badge_type === "payment-icons") {
//             setPaymentIconsPages(data.badge_pages.map((page, index) => ({
//               ...page,
//               id: index + 1,
//               iconModalActive: false,
//               isProductPickerOpen: false,
//               isCollectionPickerOpen: false,
//             })));
//           }

//           setOriginalState({
//             singleBannerState: { ...singleBannerState },
//             iconBlockPages: [...iconBlockPages],
//             paymentIconsPages: [...paymentIconsPages]
//           });

//         } catch (error) {
//           console.error('Error fetching badge data:', error);
//         }
//       };

//       fetchBadgeData();
//     } else if (isCreationMode) {
//       setBadgeName("New Badge");
//       setSingleBannerState({
//         title: "Sample Title",
//         subheading: "Sample Subheading",
//         buttonText: "Shop Now",
//         linkType: "",
//         externalUrl: "",
//         selectedIcon: null,
//         cta: "no-cta",
//         selectedProduct: null,
//         selectedCollection: null,
//         iconModalActive: false,
//         isProductPickerOpen: false,
//         isCollectionPickerOpen: false,
//       });
//       setIconBlockPages([{
//         id: 1,
//         title: "Sample Title",
//         subheading: "Sample Subheading",
//         buttonText: "Shop Now",
//         linkType: "",
//         externalUrl: "",
//         selectedIcon: null,
//         cta: "no-cta",
//         selectedProduct: null,
//         selectedCollection: null,
//         iconModalActive: false,
//         isProductPickerOpen: false,
//         isCollectionPickerOpen: false,
//       }]);
//       setPaymentIconsPages([{
//         id: 1,
//         title: "Sample Title",
//         subheading: "Sample Subheading",
//         buttonText: "Shop Now",
//         linkType: "",
//         externalUrl: "",
//         selectedIcon: null,
//         cta: "no-cta",
//         selectedProduct: null,
//         selectedCollection: null,
//         iconModalActive: false,
//         isProductPickerOpen: false,
//         isCollectionPickerOpen: false,
//       }]);
//     }
//   }, [badgeId, isCreationMode]);

//   const setBadgeDetails = (badgeData) => {
//     setBadgeName(badgeData.badge_name);
//     setBadgeType(badgeData.badge_type);
//     setIsPublished(badgeData.status === "Publish");

//     if (badgeData.badge_type === "single-banner") {
//       setSingleBannerState({
//         title: badgeData.badge_pages[0]?.title || "Free Shipping",
//         subheading: badgeData.badge_pages[0]?.subheading || "Delivered to Your doorstep, on us!",
//         buttonText: badgeData.badge_pages[0]?.button_text || "Shop Now",
//         linkType: badgeData.badge_pages[0]?.linkType || "",
//         externalUrl: badgeData.badge_pages[0]?.external_url || "",
//         selectedIcon: badgeData.badge_pages[0]?.icon_name ? { name: badgeData.badge_pages[0].icon_name.replace("Lia", "") } : null,
//         cta: badgeData.badge_pages[0]?.call_to_action || "no-cta",
//         selectedProduct: null,
//         selectedCollection: null,
//         iconModalActive: false,
//         isProductPickerOpen: false,
//         isCollectionPickerOpen: false,
//       });
//     } else if (badgeData.badge_type === "icon-block") {
//       setIconBlockPages(badgeData.badge_pages.map((page, index) => ({
//         ...page,
//         id: index + 1,
//         selectedIcon: page.icon_name ? { name: page.icon_name.replace("Lia", "") } : null,
//       })));
//     } else if (badgeData.badge_type === "payment-icons") {
//       setPaymentIconsPages(badgeData.badge_pages.map((page, index) => ({
//         ...page,
//         id: index + 1,
//         selectedIcon: page.icon_name ? { name: page.icon_name.replace("Lia", "") } : null,
//       })));
//     }
//   };

//   const handleTabChange = (selectedTabIndex) => {
//     setSelectedTab(selectedTabIndex);
//   };

//   const tabs = [
//     { id: "content", content: "Content", accessibilityLabel: "Content Tab" },
//     { id: "design", content: "Design", accessibilityLabel: "Design Tab" },
//     { id: "placement", content: "Placement", accessibilityLabel: "Placement Tab" },
//   ];

//   const toggleIconModal = (component, pageId) => {
//     if (component === "singleBanner") {
//       setSingleBannerState((prevState) => ({
//         ...prevState,
//         iconModalActive: !prevState.iconModalActive,
//       }));
//       setIsModified(true);
//     } else if (component === "payment-icons") {
//       setPaymentIconsPages((prevPages) => {
//         const newPages = [...prevPages];
//         const pageIndex = newPages.findIndex(page => page.id === pageId);
//         newPages[pageIndex] = {
//           ...newPages[pageIndex],
//           iconModalActive: !newPages[pageIndex].iconModalActive,
//         };
//         setIsModified(true);
//         return newPages;
//       });
//     } else if (component === "icon-block") {
//       setIconBlockPages((prevPages) => {
//         const newPages = [...prevPages];
//         const pageIndex = newPages.findIndex(page => page.id === pageId);
//         newPages[pageIndex] = {
//           ...newPages[pageIndex],
//           iconModalActive: !newPages[pageIndex].iconModalActive,
//         };
//         setIsModified(true);
//         return newPages;
//       });
//     } else {
//       console.error("Unknown component:", component);
//     }
//   };

//   const handleIconSelect = (component, pageId, icon) => {
//     if (component === "singleBanner") {
//       setSingleBannerState((prevState) => ({
//         ...prevState,
//         selectedIcon: icon,
//         iconModalActive: false,
//       }));
//       setIsModified(true);
//     } else if (component === "payment-icons") {
//       setPaymentIconsPages((prevPages) => {
//         const newPages = [...prevPages];
//         const pageIndex = newPages.findIndex(page => page.id === pageId);
//         newPages[pageIndex] = {
//           ...newPages[pageIndex],
//           selectedIcon: icon,
//           iconModalActive: false,
//         };
//         setIsModified(true);
//         return newPages;
//       });
//     } else if (component === "icon-block") {
//       setIconBlockPages((prevPages) => {
//         const newPages = [...prevPages];
//         const pageIndex = newPages.findIndex(page => page.id === pageId);
//         newPages[pageIndex] = {
//           ...newPages[pageIndex],
//           selectedIcon: icon,
//           iconModalActive: false,
//         };
//         setIsModified(true);
//         return newPages;
//       });
//     } else {
//       console.error("Unknown component:", component);
//     }
//   };

//   const handleContinueToDesign = () => {
//     setSelectedTab(1);
//   };

//   const addIconBlockPage = () => {
//     setIconBlockPages((prevPages) => [
//       ...prevPages,
//       {
//         id: prevPages.length + 1,
//         title: "",
//         subheading: "",
//         buttonText: "Shop Now",
//         linkType: "",
//         externalUrl: "",
//         selectedIcon: null,
//         cta: "no-cta",
//         selectedProduct: null,
//         selectedCollection: null,
//         iconModalActive: false,
//         isProductPickerOpen: false,
//         isCollectionPickerOpen: false,
//       },
//     ]);
//     setIsModified(true);
//   };

//   const addPaymentIconsPage = () => {
//     setPaymentIconsPages((prevPages) => [
//       ...prevPages,
//       {
//         id: prevPages.length + 1,
//         title: "",
//         subheading: "",
//         buttonText: "Shop Now",
//         linkType: "",
//         externalUrl: "",
//         selectedIcon: null,
//         cta: "no-cta",
//         selectedProduct: null,
//         selectedCollection: null,
//         iconModalActive: false,
//         isProductPickerOpen: false,
//         isCollectionPickerOpen: false,
//       },
//     ]);
//     setIsModified(true);
//   };

//   const removeIconBlockPage = (pageId) => {
//     setIconBlockPages((prevPages) => prevPages.filter(page => page.id !== pageId));
//     setIsModified(true);
//   };

//   const removePaymentIconsPage = (pageId) => {
//     setPaymentIconsPages((prevPages) => prevPages.filter(page => page.id !== pageId));
//     setIsModified(true);
//   };

//   // const handleSave = async () => {
//   //   const badgeDetails = getBadgeDetails();
//   //   badgeDetails.status = isPublished ? "Publish" : "Draft";

//   //   try {
//   //     const response = await fetch('/api/badges', {
//   //       method: badgeId ? 'PUT' : 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify(badgeDetails)
//   //     });

//   //     if (response.ok) {
//   //       const savedBadge = await response.json();
//   //       setBadgeDetails(savedBadge);
//   //       setIsSaved(true);
//   //       setToastActive(true);
//   //       setTimeout(() => setToastActive(false), 3000);
//   //       setIsModified(false);
//   //       setIsPublished(true);
//   //       onBackClick(savedBadge.id);
//   //     } else {
//   //       console.error('Failed to save badge');
//   //     }
//   //   } catch (error) {
//   //     console.error('Error saving badge:', error);
//   //   }
//   // };

//   const handleSave = async () => {
//     const badgeDetails = getBadgeDetails();
//     badgeDetails.status = isPublished ? "Publish" : "Draft";

//     try {
//       const response = await fetch(`/api/badges`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(badgeDetails)
//       });

//       if (response.ok) {
//         const savedBadge = await response.json();
//         setBadgeDetails(savedBadge);
//         setIsSaved(true);
//         setToastActive(true);
//         setTimeout(() => setToastActive(false), 3000);
//         setIsModified(false);
//         onBadgeSave(savedBadge.id); // Notify the parent component that the badge has been saved
//         onBackClick(); // Redirect back to the main page
//       } else {
//         console.error('Failed to save badge');
//       }
//     } catch (error) {
//       console.error('Error saving badge:', error);
//     }
//   };


//   const handlePublish = async () => {
//     const badgeDetails = getBadgeDetails();
//     badgeDetails.status = "Publish";

//     try {
//       const response = await fetch('/api/badges', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(badgeDetails)
//       });

//       if (response.ok) {
//         const savedBadge = await response.json();
//         setBadgeDetails(savedBadge);
//         setIsSaved(true);
//         setToastActive(true);
//         setTimeout(() => setToastActive(false), 3000);
//         setIsModified(false);
//         setIsPublished(true);
//         onBackClick(savedBadge.id);
//       } else {
//         console.error('Failed to save badge');
//       }
//     } catch (error) {
//       console.error('Error saving badge:', error);
//     }
//   };

//   // const handleUnpublish = () => {
//   //   setIsPublished(false);
//   //   setToastMessage("Badge Unpublished");
//   //   setToastActive(true);
//   //   setTimeout(() => setToastActive(false), 3000);
//   // };


//   const handleUnpublish = () => {
//     const badgeDetails = getBadgeDetails();
//     badgeDetails.status = "Draft";

//     try {
//       const response = fetch(`/api/badges/${badgeId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(badgeDetails)
//       });

//       if (response.ok) {
//         setIsPublished(false);
//         setToastActive(true);
//         setTimeout(() => setToastActive(false), 3000);

//       } else {
//         console.error('Failed to unpublish badge');
//       }
//     } catch (error) {
//       console.error('Error unpublishing badge:', error);
//     }
//   };



//   const handleRemove = () => {
//     setIsSaved(false);
//     setIsModified(false);
//   };

//   const handleProductSelection = (component, pageId, selectedProduct) => {
//     if (component === "singleBanner") {
//       setSingleBannerState((prevState) => ({
//         ...prevState,
//         selectedProduct,
//         isProductPickerOpen: false,
//       }));
//       setIsModified(true);
//     } else if (component === "payment-icons") {
//       setPaymentIconsPages((prevPages) => {
//         const newPages = [...prevPages];
//         const pageIndex = newPages.findIndex(page => page.id === pageId);
//         newPages[pageIndex] = {
//           ...newPages[pageIndex],
//           selectedProduct,
//           isProductPickerOpen: false,
//         };
//         setIsModified(true);
//         return newPages;
//       });
//     } else if (component === "icon-block") {
//       setIconBlockPages((prevPages) => {
//         const newPages = [...prevPages];
//         const pageIndex = newPages.findIndex(page => page.id === pageId);
//         newPages[pageIndex] = {
//           ...newPages[pageIndex],
//           selectedProduct,
//           isProductPickerOpen: false,
//         };
//         setIsModified(true);
//         return newPages;
//       });
//     } else {
//       console.error("Unknown component:", component);
//     }
//   };

//   const handleCollectionSelection = (component, pageId, selectedCollection) => {
//     if (component === "singleBanner") {
//       setSingleBannerState((prevState) => ({
//         ...prevState,
//         selectedCollection,
//         isCollectionPickerOpen: false,
//       }));
//       setIsModified(true);
//     } else if (component === "payment-icons") {
//       setPaymentIconsPages((prevPages) => {
//         const newPages = [...prevPages];
//         const pageIndex = newPages.findIndex(page => page.id === pageId);
//         newPages[pageIndex] = {
//           ...newPages[pageIndex],
//           selectedCollection,
//           isCollectionPickerOpen: false,
//         };
//         setIsModified(true);
//         return newPages;
//       });
//     } else if (component === "icon-block") {
//       setIconBlockPages((prevPages) => {
//         const newPages = [...prevPages];
//         const pageIndex = newPages.findIndex(page => page.id === pageId);
//         newPages[pageIndex] = {
//           ...newPages[pageIndex],
//           selectedCollection,
//           isCollectionPickerOpen: false,
//         };
//         setIsModified(true);
//         return newPages;
//       });
//     } else {
//       console.error("Unknown component:", component);
//     }
//   };

//   const handleUrlSelection = (component, pageId, linkType, externalUrl) => {
//     if (component === "singleBanner") {
//       setSingleBannerState((prevState) => ({
//         ...prevState,
//         linkType,
//         externalUrl,
//       }));
//       setIsModified(true);
//     } else if (component === "payment-icons") {
//       setPaymentIconsPages((prevPages) => {
//         const newPages = [...prevPages];
//         const pageIndex = newPages.findIndex(page => page.id === pageId);
//         newPages[pageIndex] = {
//           ...newPages[pageIndex],
//           linkType,
//           externalUrl,
//         };
//         setIsModified(true);
//         return newPages;
//       });
//     } else if (component === "icon-block") {
//       setIconBlockPages((prevPages) => {
//         const newPages = [...prevPages];
//         const pageIndex = newPages.findIndex(page => page.id === pageId);
//         newPages[pageIndex] = {
//           ...newPages[pageIndex],
//           linkType,
//           externalUrl,
//         };
//         setIsModified(true);
//         return newPages;
//       });
//     } else {
//       console.error("Unknown component:", component);
//     }
//   };

//   const handleCancel = () => {
//     if (badgeId) {
//       // If editing an existing badge, reset to the original state
//       setBadgeDetails(originalState);
//     }
//     setIsModified(false);
//     onBackClick(); // Redirect back to the main page
//   };


//   const getBadgeDetails = () => {
//     let badgeDetails = {};

//     const extractId = (gid) => {
//       const parts = gid.split('/');
//       return parts.length > 1 ? parts[parts.length - 1] : gid;
//     };

//     if (badgeType === "single-banner") {
//       badgeDetails = {
//         badge_name: badgeName,
//         badge_type: badgeType,
//         status: isPublished ? "Publish" : "Draft",
//         subheading: singleBannerState.subheading,
//         title: singleBannerState.title,
//         icon_name: singleBannerState.selectedIcon ? "Lia" + singleBannerState.selectedIcon.name : "",
//         call_to_action: singleBannerState.cta,
//         button_text: singleBannerState.buttonText,
//         product_id: singleBannerState.selectedProduct ? extractId(singleBannerState.selectedProduct.id) : "",
//         collection_id: singleBannerState.selectedCollection ? extractId(singleBannerState.selectedCollection.id) : "",
//         external_url: singleBannerState.externalUrl,
//         badge_pages: [
//           {
//             title: singleBannerState.title,
//             subheading: singleBannerState.subheading,
//             icon_name: singleBannerState.selectedIcon ? "Lia" + singleBannerState.selectedIcon.name : "",
//             call_to_action: singleBannerState.cta,
//             button_text: singleBannerState.buttonText,
//             product_id: singleBannerState.selectedProduct ? extractId(singleBannerState.selectedProduct.id) : "",
//             collection_id: singleBannerState.selectedCollection ? extractId(singleBannerState.selectedCollection.id) : "",
//             external_url: singleBannerState.externalUrl,
//           }
//         ]
//       };
//     } else if (badgeType === "icon-block") {
//       badgeDetails = {
//         badge_name: badgeName,
//         badge_type: badgeType,
//         status: isPublished ? "Publish" : "Draft",
//         badge_pages: iconBlockPages.map(page => ({
//           title: page.title,
//           subheading: page.subheading,
//           icon_name: page.selectedIcon ? "Lia" + page.selectedIcon.name : "",
//           call_to_action: page.cta,
//           button_text: page.buttonText,
//           product_id: page.selectedProduct ? extractId(page.selectedProduct.id) : "",
//           collection_id: page.selectedCollection ? extractId(page.selectedCollection.id) : "",
//           external_url: page.externalUrl,
//         }))
//       };
//     } else if (badgeType === "payment-icons") {
//       badgeDetails = {
//         badge_name: badgeName,
//         badge_type: badgeType,
//         status: isPublished ? "Publish" : "Draft",
//         badge_pages: paymentIconsPages.map(page => ({
//           title: page.title,
//           subheading: page.subheading,
//           icon_name: page.selectedIcon ? "Lia" + page.selectedIcon.name : "",
//           call_to_action: page.cta,
//           button_text: page.buttonText,
//           product_id: page.selectedProduct ? extractId(page.selectedProduct.id) : "",
//           collection_id: page.selectedCollection ? extractId(page.selectedCollection.id) : "",
//           external_url: page.externalUrl,
//         }))
//       };
//     }

//     return badgeDetails;
//   };

//   const handleDelete = async () => {
//     try {
//       const response = await fetch(`/api/badges/${badgeId}`, {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         setIsSaved(false);
//         setIsModified(false);
//         onBackClick();
//       } else {
//         console.error('Failed to delete badge');
//       }
//     } catch (error) {
//       console.error('Error deleting badge:', error);
//     }
//   };

//   return (
//     <Frame>
//       <Page
//         backAction={{ content: 'Products', onAction: onBackClick }}
//         title={badgeName}
//         subtitle={`Badge ID: ${badgeId || "New Badge Id"}`}
//         titleMetadata={isPublished ? <Badge status="success">Published</Badge> : <Badge tone="success">Draft</Badge>}
//         compactTitle
//         primaryAction={{
//           content: isPublished ? 'Unpublish' : 'Publish',
//           onAction: isPublished ? handleUnpublish : handlePublish,
//           destructive: isPublished,
//           primary: !isPublished,
//         }}
//         secondaryActions={[
//           {
//             content: isSaved && !isModified ? 'Delete' : 'Save',
//             onAction: isSaved && !isModified ? handleDelete : handleSave,
//             destructive: isSaved && !isModified,
//             plain: !isSaved && !isModified,
//             primary: !isSaved && !isModified,
//           },
//           isModified && {
//             content: 'Cancel',
//             onAction: handleCancel,
//             destructive: false,
//             plain: true,
//           },
//         ].filter(Boolean)}
//       >
//         {toastActive && <Toast content={isSaved ? "Badge Saved" : "Badge Published"} />}
//         <div style={{ marginBottom: "20px" }}>
//           <Tabs tabs={tabs} selected={selectedTab} onSelect={handleTabChange} />
//         </div>

//         <Grid>
//           <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 5, xl: 5 }}>
//             <LegacyCard>
//               {selectedTab === 0 && (
//                 <Card.Section>
//                   <FormLayout>
//                     <FormLayout.Group>
//                       <Stack vertical>
//                         <h1 className="BadgeCls">Badge type</h1>
//                         <RadioButton
//                           label="Single banner"
//                           checked={badgeType === "single-banner"}
//                           id="singleBanner"
//                           name="badgeType"
//                           onChange={() => {
//                             console.log("Badge type changed to: Single banner");
//                             setBadgeType("single-banner");
//                             setIsModified(true);
//                           }}
//                         />
//                         <RadioButton
//                           label="Icon block"
//                           checked={badgeType === "icon-block"}
//                           id="iconBlock"
//                           name="badgeType"
//                           onChange={() => {
//                             console.log("Badge type changed to: Icon block");
//                             setBadgeType("icon-block");
//                             setIsModified(true);
//                           }}
//                         />
//                         <RadioButton
//                           label="Payment icons"
//                           checked={badgeType === "payment-icons"}
//                           id="paymentIcons"
//                           name="badgeType"
//                           onChange={() => {
//                             console.log("Badge type changed to: Payment icons");
//                             setBadgeType("payment-icons");
//                             setIsModified(true);
//                           }}
//                         />
//                         <TextField
//                           label="Badge name"
//                           value={badgeName}
//                           onChange={(value) => {
//                             console.log("Badge name changed to:", value);
//                             setBadgeName(value);
//                             setIsModified(true);
//                           }}
//                           helpText="Only visible to you. For your own internal reference."
//                         />
//                       </Stack>

//                       {badgeType === "single-banner" && (
//                         <SingleBanner
//                           {...singleBannerState}
//                           setTitle={(value) => {
//                             console.log("Title changed to:", value);
//                             setSingleBannerState((prevState) => ({ ...prevState, title: value }));
//                             setIsModified(true);
//                           }}
//                           setSubheading={(value) => {
//                             console.log("Subheading changed to:", value);
//                             setSingleBannerState((prevState) => ({ ...prevState, subheading: value }));
//                             setIsModified(true);
//                           }}
//                           setButtonText={(value) => {
//                             console.log("Button text changed to:", value);
//                             setSingleBannerState((prevState) => ({ ...prevState, buttonText: value }));
//                             setIsModified(true);
//                           }}
//                           setLinkType={(value) => {
//                             console.log("Link type changed to:", value);
//                             setSingleBannerState((prevState) => ({ ...prevState, linkType: value }));
//                             setIsModified(true);
//                           }}
//                           setExternalUrl={(value) => {
//                             console.log("External URL changed to:", value);
//                             setSingleBannerState((prevState) => ({ ...prevState, externalUrl: value }));
//                             setIsModified(true);
//                           }}
//                           setSelectedIcon={(icon) => handleIconSelect("singleBanner", null, icon)}
//                           setCta={(value) => {
//                             console.log("CTA changed to:", value);
//                             setSingleBannerState((prevState) => ({ ...prevState, cta: value }));
//                             setIsModified(true);
//                           }}
//                           setSelectedProduct={(value) => {
//                             console.log("Selected product changed to:", value);
//                             setSingleBannerState((prevState) => ({ ...prevState, selectedProduct: value }));
//                             setIsModified(true);
//                           }}
//                           setSelectedCollection={(value) => {
//                             console.log("Selected collection changed to:", value);
//                             setSingleBannerState((prevState) => ({ ...prevState, selectedCollection: value }));
//                             setIsModified(true);
//                           }}
//                           toggleIconModal={() => toggleIconModal("singleBanner")}
//                           setIconModalActive={() => toggleIconModal("singleBanner")}
//                           setIsProductPickerOpen={(value) => {
//                             console.log("Product picker open state changed to:", value);
//                             setSingleBannerState((prevState) => ({ ...prevState, isProductPickerOpen: value }));
//                             setIsModified(true);
//                           }}
//                           setIsCollectionPickerOpen={(value) => {
//                             console.log("Collection picker open state changed to:", value);
//                             setSingleBannerState((prevState) => ({ ...prevState, isCollectionPickerOpen: value }));
//                             setIsModified(true);
//                           }}
//                           onProductSelect={(product) => handleProductSelection("singleBanner", null, product)}
//                           onCollectionSelect={(collection) => handleCollectionSelection("singleBanner", null, collection)}
//                           onUrlSelect={(linkType, externalUrl) => handleUrlSelection("singleBanner", null, linkType, externalUrl)}
//                         />
//                       )}

//                       {badgeType === "icon-block" && (
//                         <>
//                           {iconBlockPages.map((page, index) => (
//                             <IconBlock
//                               key={page.id}
//                               pageId={page.id}
//                               {...page}
//                               setTitle={(value) => {
//                                 console.log("Title changed to:", value);
//                                 setIconBlockPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], title: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               setSubheading={(value) => {
//                                 console.log("Subheading changed to:", value);
//                                 setIconBlockPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], subheading: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               setButtonText={(value) => {
//                                 console.log("Button text changed to:", value);
//                                 setIconBlockPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], buttonText: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               setLinkType={(value) => {
//                                 console.log("Link type changed to:", value);
//                                 setIconBlockPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], linkType: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               setExternalUrl={(value) => {
//                                 console.log("External URL changed to:", value);
//                                 setIconBlockPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], externalUrl: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               setSelectedIcon={(icon) => handleIconSelect("icon-block", page.id, icon)}
//                               setCta={(value) => {
//                                 console.log("CTA changed to:", value);
//                                 setIconBlockPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], cta: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               setSelectedProduct={(value) => {
//                                 console.log("Selected product changed to:", value);
//                                 setIconBlockPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], selectedProduct: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               setSelectedCollection={(value) => {
//                                 console.log("Selected collection changed to:", value);
//                                 setIconBlockPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], selectedCollection: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               toggleIconModal={() => toggleIconModal("icon-block", page.id)}
//                               setIconModalActive={() => toggleIconModal("icon-block", page.id)}
//                               setIsProductPickerOpen={(value) => {
//                                 console.log("Product picker open state changed to:", value);
//                                 setIconBlockPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], isProductPickerOpen: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               setIsCollectionPickerOpen={(value) => {
//                                 console.log("Collection picker open state changed to:", value);
//                                 setIconBlockPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], isCollectionPickerOpen: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               onRemove={() => removeIconBlockPage(page.id)}
//                               pageIndex={index}
//                               iconBlockPages={iconBlockPages}
//                               onProductSelect={(product) => handleProductSelection("icon-block", page.id, product)}
//                               onCollectionSelect={(collection) => handleCollectionSelection("icon-block", page.id, collection)}
//                               onUrlSelect={(linkType, externalUrl) => handleUrlSelection("icon-block", page.id, linkType, externalUrl)}
//                             />
//                           ))}

//                           <div className="addBtnMain">
//                             <Button fullWidth onClick={addIconBlockPage}>
//                               Add New Page
//                             </Button>
//                           </div>
//                         </>
//                       )}

//                       {badgeType === "payment-icons" && (
//                         <>
//                           {paymentIconsPages.map((page, index) => (
//                             <PaymentIcons
//                               key={page.id}
//                               pageId={page.id}
//                               {...page}
//                               setTitle={(value) => {
//                                 console.log("Title changed to:", value);
//                                 setPaymentIconsPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], title: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               setSubheading={(value) => {
//                                 console.log("Subheading changed to:", value);
//                                 setPaymentIconsPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], subheading: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               setButtonText={(value) => {
//                                 console.log("Button text changed to:", value);
//                                 setPaymentIconsPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], buttonText: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               setLinkType={(value) => {
//                                 console.log("Link type changed to:", value);
//                                 setPaymentIconsPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], linkType: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               setExternalUrl={(value) => {
//                                 console.log("External URL changed to:", value);
//                                 setPaymentIconsPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], externalUrl: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               setSelectedIcon={(icon) => handleIconSelect("payment-icons", page.id, icon)}
//                               setCta={(value) => {
//                                 console.log("CTA changed to:", value);
//                                 setPaymentIconsPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], cta: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               setSelectedProduct={(value) => {
//                                 console.log("Selected product changed to:", value);
//                                 setPaymentIconsPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], selectedProduct: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               setSelectedCollection={(value) => {
//                                 console.log("Selected collection changed to:", value);
//                                 setPaymentIconsPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], selectedCollection: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               toggleIconModal={() => toggleIconModal("payment-icons", page.id)}
//                               setIconModalActive={() => toggleIconModal("payment-icons", page.id)}
//                               setIsProductPickerOpen={(value) => {
//                                 console.log("Product picker open state changed to:", value);
//                                 setPaymentIconsPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], isProductPickerOpen: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               setIsCollectionPickerOpen={(value) => {
//                                 console.log("Collection picker open state changed to:", value);
//                                 setPaymentIconsPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], isCollectionPickerOpen: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               onRemove={() => removePaymentIconsPage(page.id)}
//                               pageIndex={index}
//                               iconBlockPages={paymentIconsPages}
//                               onProductSelect={(product) => handleProductSelection("payment-icons", page.id, product)}
//                               onCollectionSelect={(collection) => handleCollectionSelection("payment-icons", page.id, collection)}
//                               onUrlSelect={(linkType, externalUrl) => handleUrlSelection("payment-icons", page.id, linkType, externalUrl)}
//                             />
//                           ))}

//                           <div className="addBtnMain">
//                             <Button fullWidth onClick={addPaymentIconsPage}>
//                               Add New Page
//                             </Button>
//                           </div>
//                         </>
//                       )}
//                       <div className="translations-section">
//                         <Stack>
//                           <Stack.Item>
//                             <span className="Polaris-TextStyle--variationStrong">Translations</span>
//                           </Stack.Item>
//                           <Stack.Item>
//                             <Badge status="info">
//                               <span className="Polaris-Text--root Polaris-Text--bodySm">Essential plan</span>
//                             </Badge>
//                           </Stack.Item>
//                         </Stack>
//                       </div>
//                       <Button fullWidth onClick={() => { }}>
//                         Add translation
//                       </Button>
//                       <div style={{ textAlign: "center" }}>
//                         <button
//                           className="Polaris-Button Polaris-Button--outline Polaris-Button--fullWidth"
//                           type="button"
//                           onClick={handleContinueToDesign}
//                         >
//                           <span className="Polaris-Button__Content">
//                             <span className="Polaris-Button__Icon">
//                               <span className="Polaris-Icon">
//                                 <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
//                                 <svg
//                                   viewBox="0 0 20 20"
//                                   className="Polaris-Icon__Svg"
//                                   focusable="false"
//                                   aria-hidden="true"
//                                 >
//                                   <path d="m17.707 9.293-5-5a.999.999 0 0 0-1.414 1.414l3.293 3.293h-11.586a1 1 0 1 0 0 2h11.586l-3.293 3.293a.999.999 0 0 0 1.414 1.414l5-5a.999.999 0 0 0 0-1.414z"></path>
//                                 </svg>
//                               </span>
//                             </span>
//                             <span className="Polaris-Button__Text">Continue to design</span>
//                           </span>
//                         </button>
//                       </div>
//                     </FormLayout.Group>
//                   </FormLayout>
//                 </Card.Section>
//               )}
//             </LegacyCard>

//             {selectedTab === 1 && (
//               <Card.Section>
//                 <Design
//                   title={badgeType === "single-banner" ? singleBannerState.title : badgeType === "icon-block" ? iconBlockPages[0].title : paymentIconsPages[0].title}
//                 />
//               </Card.Section>
//             )}

//             {selectedTab === 2 && (
//               <Placement
//                 badgeType={badgeType}
//               />
//             )}
//           </Grid.Cell>
//           <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 7, xl: 7 }}>
//             <LegacyCard>
//               {badgeType === "single-banner" && (
//                 <div className="badge-output-container">
//                   {singleBannerState.selectedIcon ? (
//                     <div className="badge-icon">{singleBannerState.selectedIcon.icon}</div>
//                   ) : (
//                     <div className="icon-placeholder"></div>
//                   )}
//                   <div className="badge-text">
//                     <h2 className="badge-title">{singleBannerState.title}</h2>
//                     <h3 className="badge-subheading">{singleBannerState.subheading}</h3>
//                   </div>
//                   {singleBannerState.cta === "button-cta" && (
//                     <button className="badge-button">{singleBannerState.buttonText}</button>
//                   )}
//                   {singleBannerState.cta === "clickable-banner-cta" && (
//                     <div className="output-banner">
//                     </div>
//                   )}
//                 </div>
//               )}

//               {badgeType === "icon-block" && (
//                 <div className="badge-output-container kdtYjY">
//                   {iconBlockPages.map((page, index) => (
//                     <div key={index} className="badge-output-page hVFYFW">
//                       {page.selectedIcon ? (
//                         <div className="badge-icon iubCKx">{page.selectedIcon.icon}</div>
//                       ) : (
//                         <div className="icon-placeholder"></div>
//                       )}
//                       <div className="badge-text">
//                         <h2 className="badge-title">{page.title}</h2>
//                         <h3 className="badge-subheading">{page.subheading}</h3>
//                       </div>
//                       {page.cta === "button-cta" && (
//                         <button className="badge-button">{page.buttonText}</button>
//                       )}
//                       {page.cta === "clickable-banner-cta" && (
//                         <div className="output-banner"></div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {badgeType === "payment-icons" && (
//                 <div className="badge-output-container kdtYjY">
//                   {paymentIconsPages.map((page, index) => (
//                     <div key={index} className="badge-output-page hVFYFW">
//                       {page.selectedIcon ? (
//                         <div className="badge-icon iubCKx">{page.selectedIcon.icon}</div>
//                       ) : (
//                         <div className="icon-placeholder"></div>
//                       )}
//                       <div className="badge-text">
//                         <h2 className="badge-title">{page.title}</h2>
//                         <h3 className="badge-subheading">{page.subheading}</h3>
//                       </div>
//                       {page.cta === "button-cta" && (
//                         <button className="badge-button">{page.buttonText}</button>
//                       )}
//                       {page.cta === "clickable-banner-cta" && (
//                         <div className="output-banner"></div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </LegacyCard>
//           </Grid.Cell>
//         </Grid>
//       </Page>
//     </Frame>
//   );
// }

// export default BadgeEditor;


 
// working code for all the changes do in 1/11/2024 for icons and update and all



 
// import React, { useState, useEffect } from "react";
// import {
//   Page,
//   Card,
//   Tabs,
//   Button,
//   FormLayout,
//   Badge,
//   RadioButton,
//   Stack,
//   Grid,
//   LegacyCard,
//   TextField,
//   Toast,
//   Frame
// } from "@shopify/polaris";
// import "./BadgeEditor.css";
// import SingleBanner from "./SingleBanner";
// import IconBlock from "./IconBlock";
// import PaymentIcons from "./PaymentIcons";
// import IconSelector from "./IconSelector";
// import ProductPicker from "./ProductPicker";
// import CollectionPicker from "./CollectionPicker";
// import Design from "./Design";
// import Placement from "./Placement";
// import * as icons from 'react-icons/lia';
// import * as icons1 from 'react-icons/fc';

// function BadgeEditor({ onBackClick, badgeId, onBadgeSave, isCreationMode, badgeData }) {
//   const [selectedTab, setSelectedTab] = useState(0);
//   const [badgeType, setBadgeType] = useState("single-banner");
//   const [badgeName, setBadgeName] = useState("Your badge");
//   const [isSaved, setIsSaved] = useState(false);
//   const [isPublished, setIsPublished] = useState(false);
//   const [toastActive, setToastActive] = useState(false);
//   const [isModified, setIsModified] = useState(false);
//   const [originalState, setOriginalState] = useState({});

//   const [singleBannerState, setSingleBannerState] = useState({
//     title: "Free Shipping",
//     subheading: "Delivered to Your doorstep, on us!",
//     buttonText: "Shop Now",
//     linkType: "",
//     externalUrl: "",
//     selectedIcon: null,
//     cta: "no-cta",
//     selectedProduct: null,
//     selectedCollection: null,
//     iconModalActive: false,
//     isProductPickerOpen: false,
//     isCollectionPickerOpen: false,
//   });

//   const [iconBlockPages, setIconBlockPages] = useState([{
//     id: 1,
//     title: "Free Shipping",
//     subheading: "No Extra Costs",
//     buttonText: "Shop Now",
//     linkType: "",
//     externalUrl: "",
//     selectedIcon: null,
//     cta: "no-cta",
//     selectedProduct: null,
//     selectedCollection: null,
//     iconModalActive: false,
//     isProductPickerOpen: false,
//     isCollectionPickerOpen: false,
//   }]);

//   const [paymentIconsPages, setPaymentIconsPages] = useState([{
//     id: 1,
//     title: "",
//     subheading: "",
//     buttonText: "Shop Now",
//     linkType: "",
//     externalUrl: "",
//     selectedIcon: null,
//     cta: "no-cta",
//     selectedProduct: null,
//     selectedCollection: null,
//     iconModalActive: false,
//     isProductPickerOpen: false,
//     isCollectionPickerOpen: false,
//   }]);

//   const getIconComponent = (iconName, badgeType) => {
//     try {
//       if (badgeType === "payment-icons") {
//         return icons1[iconName];
//       } else {
//         return icons[iconName];
//       }
//     } catch (error) {
//       console.error(`Error importing icon ${iconName}:`, error);
//       return null; // Default return null if the icon is not found
//     }
//   };

//   const IconComponent = (iconName, badgeType) => {
//     const Icon = getIconComponent(iconName, badgeType);
//     return Icon ? <Icon size={32} /> : null;
//   };


//   useEffect(() => {
//     if (badgeId && !isCreationMode) {
//       const fetchBadgeData = async () => {
//         try {
//           const response = await fetch(`/api/badges/${badgeId}`);
//           const data = await response.json();
//           setBadgeType(data.badge_type);
//           setBadgeName(data.badge_name);
//           setIsPublished(data.status === "Publish");

//           if (data.badge_type === "single-banner") {
//             setSingleBannerState({
//               title: data.badge_pages[0].title,
//               subheading: data.badge_pages[0].subheading,
//               buttonText: data.badge_pages[0].button_text,
//               linkType: data.badge_pages[0].link_type,
//               externalUrl: data.badge_pages[0].external_url,
//               selectedIcon: data.badge_pages[0].icon_name ? { name: data.badge_pages[0].icon_name } : null,
//               cta: data.badge_pages[0].call_to_action,
//               selectedProduct: data.badge_pages[0].product_json ? JSON.parse(data.badge_pages[0].product_json) : null,
//               selectedCollection: data.badge_pages[0].collection_json ? JSON.parse(data.badge_pages[0].collection_json) : null,
//               iconModalActive: false,
//               isProductPickerOpen: false,
//               isCollectionPickerOpen: false,
//             });
//           } else if (data.badge_type === "icon-block") {
//             setIconBlockPages(data.badge_pages.map((page, index) => ({
//               ...page,
//               id: index + 1,
//               selectedIcon: page.icon_name ? { name: page.icon_name } : null,
//               selectedProduct: page.product_json ? JSON.parse(page.product_json) : null,
//               selectedCollection: page.collection_json ? JSON.parse(page.collection_json) : null,
//             })));
//           } else if (data.badge_type === "payment-icons") {
//             setPaymentIconsPages(data.badge_pages.map((page, index) => ({
//               ...page,
//               id: index + 1,
//               selectedIcon: page.icon_name ? { name: page.icon_name } : null,
//               selectedProduct: page.product_json ? JSON.parse(page.product_json) : null,
//               selectedCollection: page.collection_json ? JSON.parse(page.collection_json) : null,
//             })));
//           }

//           setOriginalState({
//             singleBannerState: { ...singleBannerState },
//             iconBlockPages: [...iconBlockPages],
//             paymentIconsPages: [...paymentIconsPages]
//           });

//         } catch (error) {
//           console.error('Error fetching badge data:', error);
//         }
//       };

//       fetchBadgeData();
//     } else if (isCreationMode) {
//       setBadgeName("New Badge");
//       setSingleBannerState({
//         title: "Sample Title",
//         subheading: "Sample Subheading",
//         buttonText: "Shop Now",
//         linkType: "",
//         externalUrl: "",
//         selectedIcon: null,
//         cta: "no-cta",
//         selectedProduct: null,
//         selectedCollection: null,
//         iconModalActive: false,
//         isProductPickerOpen: false,
//         isCollectionPickerOpen: false,
//       });
//       setIconBlockPages([{
//         id: 1,
//         title: "Sample Title",
//         subheading: "Sample Subheading",
//         buttonText: "Shop Now",
//         linkType: "",
//         externalUrl: "",
//         selectedIcon: null,
//         cta: "no-cta",
//         selectedProduct: null,
//         selectedCollection: null,
//         iconModalActive: false,
//         isProductPickerOpen: false,
//         isCollectionPickerOpen: false,
//       }]);
//       setPaymentIconsPages([{
//         id: 1,
//         title: "Sample Title",
//         subheading: "Sample Subheading",
//         buttonText: "Shop Now",
//         linkType: "",
//         externalUrl: "",
//         selectedIcon: null,
//         cta: "no-cta",
//         selectedProduct: null,
//         selectedCollection: null,
//         iconModalActive: false,
//         isProductPickerOpen: false,
//         isCollectionPickerOpen: false,
//       }]);
//     }
//   }, [badgeId, isCreationMode]);

//   const setBadgeDetails = (badgeData) => {
//     setBadgeName(badgeData.badge_name);
//     setBadgeType(badgeData.badge_type);
//     setIsPublished(badgeData.status === "Publish");

//     if (badgeData.badge_type === "single-banner") {
//       setSingleBannerState({
//         title: badgeData.badge_pages[0]?.title || "Free Shipping",
//         subheading: badgeData.badge_pages[0]?.subheading || "Delivered to Your doorstep, on us!",
//         buttonText: badgeData.badge_pages[0]?.button_text || "Shop Now",
//         linkType: badgeData.badge_pages[0]?.linkType || "",
//         externalUrl: badgeData.badge_pages[0]?.external_url || "",
//         selectedIcon: badgeData.badge_pages[0]?.icon_name ? { name: badgeData.badge_pages[0].icon_name.replace("Lia", "") } : null,
//         cta: badgeData.badge_pages[0]?.call_to_action || "no-cta",
//         selectedProduct: badgeData.badge_pages[0]?.product_json ? JSON.parse(badgeData.badge_pages[0].product_json) : null,
//         selectedCollection: badgeData.badge_pages[0]?.collection_json ? JSON.parse(badgeData.badge_pages[0].collection_json) : null,
//         iconModalActive: false,
//         isProductPickerOpen: false,
//         isCollectionPickerOpen: false,
//       });
//     } else if (badgeData.badge_type === "icon-block") {
//       setIconBlockPages(badgeData.badge_pages.map((page, index) => ({
//         ...page,
//         id: index + 1,
//         selectedIcon: page.icon_name ? { name: page.icon_name.replace("Lia", "") } : null,
//         selectedProduct: page.product_json ? JSON.parse(page.product_json) : null,
//         selectedCollection: page.collection_json ? JSON.parse(page.collection_json) : null,
//       })));
//     } else if (badgeData.badge_type === "payment-icons") {
//       setPaymentIconsPages(badgeData.badge_pages.map((page, index) => ({
//         ...page,
//         id: index + 1,
//         selectedIcon: page.icon_name ? { name: page.icon_name.replace("Lia", "") } : null,
//         selectedProduct: page.product_json ? JSON.parse(page.product_json) : null,
//         selectedCollection: page.collection_json ? JSON.parse(page.collection_json) : null,
//       })));
//     }
//   };

//   const handleTabChange = (selectedTabIndex) => {
//     setSelectedTab(selectedTabIndex);
//   };

//   const tabs = [
//     { id: "content", content: "Content", accessibilityLabel: "Content Tab" },
//     { id: "design", content: "Design", accessibilityLabel: "Design Tab" },
//     { id: "placement", content: "Placement", accessibilityLabel: "Placement Tab" },
//   ];

//   const toggleIconModal = (component, pageId) => {
//     if (component === "singleBanner") {
//       setSingleBannerState((prevState) => ({
//         ...prevState,
//         iconModalActive: !prevState.iconModalActive,
//       }));
//       setIsModified(true);
//     } else if (component === "payment-icons") {
//       setPaymentIconsPages((prevPages) => {
//         const newPages = [...prevPages];
//         const pageIndex = newPages.findIndex(page => page.id === pageId);
//         newPages[pageIndex] = {
//           ...newPages[pageIndex],
//           iconModalActive: !newPages[pageIndex].iconModalActive,
//         };
//         setIsModified(true);
//         return newPages;
//       });
//     } else if (component === "icon-block") {
//       setIconBlockPages((prevPages) => {
//         const newPages = [...prevPages];
//         const pageIndex = newPages.findIndex(page => page.id === pageId);
//         newPages[pageIndex] = {
//           ...newPages[pageIndex],
//           iconModalActive: !newPages[pageIndex].iconModalActive,
//         };
//         setIsModified(true);
//         return newPages;
//       });
//     } else {
//       console.error("Unknown component:", component);
//     }
//   };

//   const handleIconSelect = (component, pageId, icon) => {
//     if (component === "singleBanner") {
//       setSingleBannerState((prevState) => ({
//         ...prevState,
//         selectedIcon: icon,
//         iconModalActive: false,
//       }));
//       setIsModified(true);
//     } else if (component === "payment-icons") {
//       setPaymentIconsPages((prevPages) => {
//         const newPages = [...prevPages];
//         const pageIndex = newPages.findIndex(page => page.id === pageId);
//         newPages[pageIndex] = {
//           ...newPages[pageIndex],
//           selectedIcon: icon,
//           iconModalActive: false,
//         };
//         setIsModified(true);
//         return newPages;
//       });
//     } else if (component === "icon-block") {
//       setIconBlockPages((prevPages) => {
//         const newPages = [...prevPages];
//         const pageIndex = newPages.findIndex(page => page.id === pageId);
//         newPages[pageIndex] = {
//           ...newPages[pageIndex],
//           selectedIcon: icon,
//           iconModalActive: false,
//         };
//         setIsModified(true);
//         return newPages;
//       });
//     } else {
//       console.error("Unknown component:", component);
//     }
//   };

//   const handleContinueToDesign = () => {
//     setSelectedTab(1);
//   };

//   const addIconBlockPage = () => {
//     setIconBlockPages((prevPages) => [
//       ...prevPages,
//       {
//         id: prevPages.length + 1,
//         title: "",
//         subheading: "",
//         buttonText: "Shop Now",
//         linkType: "",
//         externalUrl: "",
//         selectedIcon: null,
//         cta: "no-cta",
//         selectedProduct: null,
//         selectedCollection: null,
//         iconModalActive: false,
//         isProductPickerOpen: false,
//         isCollectionPickerOpen: false,
//       },
//     ]);
//     setIsModified(true);
//   };

//   const addPaymentIconsPage = () => {
//     setPaymentIconsPages((prevPages) => [
//       ...prevPages,
//       {
//         id: prevPages.length + 1,
//         title: "",
//         subheading: "",
//         buttonText: "Shop Now",
//         linkType: "",
//         externalUrl: "",
//         selectedIcon: null,
//         cta: "no-cta",
//         selectedProduct: null,
//         selectedCollection: null,
//         iconModalActive: false,
//         isProductPickerOpen: false,
//         isCollectionPickerOpen: false,
//       },
//     ]);
//     setIsModified(true);
//   };

//   const removeIconBlockPage = (pageId) => {
//     setIconBlockPages((prevPages) => prevPages.filter(page => page.id !== pageId));
//     setIsModified(true);
//   };

//   const removePaymentIconsPage = (pageId) => {
//     setPaymentIconsPages((prevPages) => prevPages.filter(page => page.id !== pageId));
//     setIsModified(true);
//   };

//   const handleSave = async () => {
//     const badgeDetails = getBadgeDetails();
//     badgeDetails.status = isPublished ? "Publish" : "Draft";

//     try {
//       const response = await fetch(`/api/badges${badgeId ? `/${badgeId}` : ''}`, {
//         method: badgeId ? 'PUT' : 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(badgeDetails)
//       });

//       if (response.ok) {
//         const savedBadge = await response.json();
//         setBadgeDetails(savedBadge);
//         setIsSaved(true);
//         setToastActive(true);
//         setTimeout(() => setToastActive(false), 3000);
//         setIsModified(false);
//         onBadgeSave(savedBadge.id); // Notify the parent component that the badge has been saved
//         onBackClick(); // Redirect back to the main page
//       } else {
//         console.error('Failed to save badge');
//       }
//     } catch (error) {
//       console.error('Error saving badge:', error);
//     }
//   };

//   const handlePublish = async () => {
//     const badgeDetails = getBadgeDetails();
//     badgeDetails.status = "Publish";

//     try {
//       const response = await fetch(`/api/badges${badgeId ? `/${badgeId}` : ''}`, {
//         method: badgeId ? 'PUT' : 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(badgeDetails)
//       });

//       if (response.ok) {
//         const savedBadge = await response.json();
//         setBadgeDetails(savedBadge);
//         setIsSaved(true);
//         setToastActive(true);
//         setTimeout(() => setToastActive(false), 3000);
//         setIsModified(false);
//         setIsPublished(true);
//         onBadgeSave(savedBadge.id); // Notify the parent component that the badge has been published
//         onBackClick(); // Redirect back to the main page
//       } else {
//         console.error('Failed to publish badge');
//       }
//     } catch (error) {
//       console.error('Error publishing badge:', error);
//     }
//   };

//   const handleUnpublish = async () => {
//     const badgeDetails = getBadgeDetails();
//     badgeDetails.status = "Draft";

//     try {
//       const response = await fetch(`/api/badges/${badgeId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(badgeDetails)
//       });

//       if (response.ok) {
//         setIsPublished(false);
//         setToastActive(true);
//         setTimeout(() => setToastActive(false), 3000);
//         onBackClick(); // Redirect back to the main page
//       } else {
//         console.error('Failed to unpublish badge');
//       }
//     } catch (error) {
//       console.error('Error unpublishing badge:', error);
//     }
//   };

//   const handleRemove = () => {
//     setIsSaved(false);
//     setIsModified(false);
//   };

//   const handleProductSelection = (component, pageId, selectedProduct) => {
//     if (component === "singleBanner") {
//       setSingleBannerState((prevState) => ({
//         ...prevState,
//         selectedProduct,
//         isProductPickerOpen: false,
//       }));
//       setIsModified(true);
//     } else if (component === "payment-icons") {
//       setPaymentIconsPages((prevPages) => {
//         const newPages = [...prevPages];
//         const pageIndex = newPages.findIndex(page => page.id === pageId);
//         newPages[pageIndex] = {
//           ...newPages[pageIndex],
//           selectedProduct,
//           isProductPickerOpen: false,
//         };
//         setIsModified(true);
//         return newPages;
//       });
//     } else if (component === "icon-block") {
//       setIconBlockPages((prevPages) => {
//         const newPages = [...prevPages];
//         const pageIndex = newPages.findIndex(page => page.id === pageId);
//         newPages[pageIndex] = {
//           ...newPages[pageIndex],
//           selectedProduct,
//           isProductPickerOpen: false,
//         };
//         setIsModified(true);
//         return newPages;
//       });
//     } else {
//       console.error("Unknown component:", component);
//     }
//   };

//   const handleCollectionSelection = (component, pageId, selectedCollection) => {
//     if (component === "singleBanner") {
//       setSingleBannerState((prevState) => ({
//         ...prevState,
//         selectedCollection,
//         isCollectionPickerOpen: false,
//       }));
//       setIsModified(true);
//     } else if (component === "payment-icons") {
//       setPaymentIconsPages((prevPages) => {
//         const newPages = [...prevPages];
//         const pageIndex = newPages.findIndex(page => page.id === pageId);
//         newPages[pageIndex] = {
//           ...newPages[pageIndex],
//           selectedCollection,
//           isCollectionPickerOpen: false,
//         };
//         setIsModified(true);
//         return newPages;
//       });
//     } else if (component === "icon-block") {
//       setIconBlockPages((prevPages) => {
//         const newPages = [...prevPages];
//         const pageIndex = newPages.findIndex(page => page.id === pageId);
//         newPages[pageIndex] = {
//           ...newPages[pageIndex],
//           selectedCollection,
//           isCollectionPickerOpen: false,
//         };
//         setIsModified(true);
//         return newPages;
//       });
//     } else {
//       console.error("Unknown component:", component);
//     }
//   };

//   const handleUrlSelection = (component, pageId, linkType, externalUrl) => {
//     if (component === "singleBanner") {
//       setSingleBannerState((prevState) => ({
//         ...prevState,
//         linkType,
//         externalUrl,
//       }));
//       setIsModified(true);
//     } else if (component === "payment-icons") {
//       setPaymentIconsPages((prevPages) => {
//         const newPages = [...prevPages];
//         const pageIndex = newPages.findIndex(page => page.id === pageId);
//         newPages[pageIndex] = {
//           ...newPages[pageIndex],
//           linkType,
//           externalUrl,
//         };
//         setIsModified(true);
//         return newPages;
//       });
//     } else if (component === "icon-block") {
//       setIconBlockPages((prevPages) => {
//         const newPages = [...prevPages];
//         const pageIndex = newPages.findIndex(page => page.id === pageId);
//         newPages[pageIndex] = {
//           ...newPages[pageIndex],
//           linkType,
//           externalUrl,
//         };
//         setIsModified(true);
//         return newPages;
//       });
//     } else {
//       console.error("Unknown component:", component);
//     }
//   };

//   const handleCancel = () => {
//     if (badgeId) {
//       // If editing an existing badge, reset to the original state
//       setBadgeDetails(originalState);
//     } else {
//       // If creating a new badge, reset to default creation state
//       setBadgeName("New Badge");
//       setSingleBannerState({
//         title: "Sample Title",
//         subheading: "Sample Subheading",
//         buttonText: "Shop Now",
//         linkType: "",
//         externalUrl: "",
//         selectedIcon: null,
//         cta: "no-cta",
//         selectedProduct: null,
//         selectedCollection: null,
//         iconModalActive: false,
//         isProductPickerOpen: false,
//         isCollectionPickerOpen: false,
//       });
//       setIconBlockPages([{
//         id: 1,
//         title: "Sample Title",
//         subheading: "Sample Subheading",
//         buttonText: "Shop Now",
//         linkType: "",
//         externalUrl: "",
//         selectedIcon: null,
//         cta: "no-cta",
//         selectedProduct: null,
//         selectedCollection: null,
//         iconModalActive: false,
//         isProductPickerOpen: false,
//         isCollectionPickerOpen: false,
//       }]);
//       setPaymentIconsPages([{
//         id: 1,
//         title: "Sample Title",
//         subheading: "Sample Subheading",
//         buttonText: "Shop Now",
//         linkType: "",
//         externalUrl: "",
//         selectedIcon: null,
//         cta: "no-cta",
//         selectedProduct: null,
//         selectedCollection: null,
//         iconModalActive: false,
//         isProductPickerOpen: false,
//         isCollectionPickerOpen: false,
//       }]);
//     }
//     setIsModified(false);
//     onBackClick(); // Redirect back to the main page
//   };

//   const getBadgeDetails = () => {
//     let badgeDetails = {};

//     const extractId = (gid) => {
//       const parts = gid.split('/');
//       return parts.length > 1 ? parts[parts.length - 1] : gid;
//     };

//     const prefixIconName = (iconName) => {
//       if (!iconName.startsWith("Lia")) {
//         return "Lia" + iconName;
//       }
//       return iconName;
//     };
//     const prefixIconName1 = (iconName) => {
//       if (!iconName.startsWith("Fc")) {
//         return "Fc" + iconName;
//       }
//       return iconName;
//     };

//     if (badgeType === "single-banner") {
//       badgeDetails = {
//         badge_name: badgeName,
//         badge_type: badgeType,
//         status: isPublished ? "Publish" : "Draft",
//         subheading: singleBannerState.subheading,
//         title: singleBannerState.title,
//         icon_name: singleBannerState.selectedIcon ? prefixIconName(singleBannerState.selectedIcon.name) : "",
//         call_to_action: singleBannerState.cta,
//         button_text: singleBannerState.buttonText,
//         product_json: singleBannerState.selectedProduct ? JSON.stringify(singleBannerState.selectedProduct) : "",
//         collection_json: singleBannerState.selectedCollection ? JSON.stringify(singleBannerState.selectedCollection) : "",
//         external_url: singleBannerState.externalUrl,
//         badge_pages: [
//           {
//             title: singleBannerState.title,
//             subheading: singleBannerState.subheading,
//             icon_name: singleBannerState.selectedIcon ? prefixIconName(singleBannerState.selectedIcon.name) : "",
//             call_to_action: singleBannerState.cta,
//             button_text: singleBannerState.buttonText,
//             product_json: singleBannerState.selectedProduct ? JSON.stringify(singleBannerState.selectedProduct) : "",
//             collection_json: singleBannerState.selectedCollection ? JSON.stringify(singleBannerState.selectedCollection) : "",
//             external_url: singleBannerState.externalUrl,
//           }
//         ]
//       };
//     } else if (badgeType === "icon-block") {
//       badgeDetails = {
//         badge_name: badgeName,
//         badge_type: badgeType,
//         status: isPublished ? "Publish" : "Draft",

//         badge_pages: iconBlockPages.map(page => ({
//           title: page.title,
//           subheading: page.subheading,
//           icon_name: page.selectedIcon ? prefixIconName(page.selectedIcon.name) : "",
//           call_to_action: page.cta,
//           button_text: page.buttonText,
//           product_json: page.selectedProduct ? JSON.stringify(page.selectedProduct) : "",
//           collection_json: page.selectedCollection ? JSON.stringify(page.selectedCollection) : "",
//           external_url: page.externalUrl,
//         }))
//       };
//     } else if (badgeType === "payment-icons") {
//       badgeDetails = {
//         badge_name: badgeName,
//         badge_type: badgeType,
//         status: isPublished ? "Publish" : "Draft",
//         badge_pages: paymentIconsPages.map(page => ({
//           title: page.title,
//           subheading: page.subheading,
//           icon_name: page.selectedIcon ? prefixIconName1(page.selectedIcon.name) : "",
//           call_to_action: page.cta,
//           button_text: page.buttonText,
//           product_json: page.selectedProduct ? JSON.stringify(page.selectedProduct) : "",
//           collection_json: page.selectedCollection ? JSON.stringify(page.selectedCollection) : "",
//           external_url: page.externalUrl,
//         }))
//       };
//     }

//     return badgeDetails;
//   };

//   const handleDelete = async () => {
//     try {
//       const response = await fetch(`/api/badges/${badgeId}`, {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         setIsSaved(false);
//         setIsModified(false);
//         onBackClick();
//       } else {
//         console.error('Failed to delete badge');
//       }
//     } catch (error) {
//       console.error('Error deleting badge:', error);
//     }
//   };
//   return (
//     <Frame>
//       <Page
//         backAction={{ content: 'Products', onAction: onBackClick }}
//         title={badgeName}
//         subtitle={`Badge ID: ${badgeId || "New Badge Id"}`}
//         titleMetadata={isPublished ? <Badge status="success">Published</Badge> : <Badge tone="success">Draft</Badge>}
//         compactTitle
//         primaryAction={{
//           content: isPublished ? 'Unpublish' : 'Publish',
//           onAction: isPublished ? handleUnpublish : handlePublish,
//           destructive: isPublished,
//           primary: !isPublished,
//         }}
//         secondaryActions={[
//           {
//             content: isSaved && !isModified ? 'Delete' : 'Save',
//             onAction: isSaved && !isModified ? handleDelete : handleSave,
//             destructive: isSaved && !isModified,
//             plain: !isSaved && !isModified,
//             primary: !isSaved && !isModified,
//           },
//           isModified && {
//             content: 'Cancel',
//             onAction: handleCancel,
//             destructive: false,
//             plain: true,
//           },
//         ].filter(Boolean)}
//       >
//         {toastActive && <Toast content={isSaved ? "Badge Saved" : "Badge Published"} />}
//         <div style={{ marginBottom: "20px" }}>
//           <Tabs tabs={tabs} selected={selectedTab} onSelect={handleTabChange} />
//         </div>

//         <Grid>
//           <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 5, xl: 5 }}>
//             <LegacyCard>
//               {selectedTab === 0 && (
//                 <Card.Section>
//                   <FormLayout>
//                     <FormLayout.Group>
//                       <Stack vertical>
//                         <h1 className="BadgeCls">Badge type</h1>
//                         <RadioButton
//                           label="Single banner"
//                           checked={badgeType === "single-banner"}
//                           id="singleBanner"
//                           name="badgeType"
//                           onChange={() => {
//                             console.log("Badge type changed to: Single banner");
//                             setBadgeType("single-banner");
//                             setIsModified(true);
//                           }}
//                         />
//                         <RadioButton
//                           label="Icon block"
//                           checked={badgeType === "icon-block"}
//                           id="iconBlock"
//                           name="badgeType"
//                           onChange={() => {
//                             console.log("Badge type changed to: Icon block");
//                             setBadgeType("icon-block");
//                             setIsModified(true);
//                           }}
//                         />
//                         <RadioButton
//                           label="Payment icons"
//                           checked={badgeType === "payment-icons"}
//                           id="paymentIcons"
//                           name="badgeType"
//                           onChange={() => {
//                             console.log("Badge type changed to: Payment icons");
//                             setBadgeType("payment-icons");
//                             setIsModified(true);
//                           }}
//                         />
//                         <TextField
//                           label="Badge name"
//                           value={badgeName}
//                           onChange={(value) => {
//                             console.log("Badge name changed to:", value);
//                             setBadgeName(value);
//                             setIsModified(true);
//                           }}
//                           helpText="Only visible to you. For your own internal reference."
//                         />
//                       </Stack>

//                       {badgeType === "single-banner" && (
//                         <SingleBanner
//                           {...singleBannerState}
//                           setTitle={(value) => {
//                             console.log("Title changed to:", value);
//                             setSingleBannerState((prevState) => ({ ...prevState, title: value }));
//                             setIsModified(true);
//                           }}
//                           setSubheading={(value) => {
//                             console.log("Subheading changed to:", value);
//                             setSingleBannerState((prevState) => ({ ...prevState, subheading: value }));
//                             setIsModified(true);
//                           }}
//                           setButtonText={(value) => {
//                             console.log("Button text changed to:", value);
//                             setSingleBannerState((prevState) => ({ ...prevState, buttonText: value }));
//                             setIsModified(true);
//                           }}
//                           setLinkType={(value) => {
//                             console.log("Link type changed to:", value);
//                             setSingleBannerState((prevState) => ({ ...prevState, linkType: value }));
//                             setIsModified(true);
//                           }}
//                           setExternalUrl={(value) => {
//                             console.log("External URL changed to:", value);
//                             setSingleBannerState((prevState) => ({ ...prevState, externalUrl: value }));
//                             setIsModified(true);
//                           }}
//                           setSelectedIcon={(icon) => handleIconSelect("singleBanner", null, icon)}
//                           setCta={(value) => {
//                             console.log("CTA changed to:", value);
//                             setSingleBannerState((prevState) => ({ ...prevState, cta: value }));
//                             setIsModified(true);
//                           }}
//                           setSelectedProduct={(value) => {
//                             console.log("Selected product changed to:", value);
//                             setSingleBannerState((prevState) => ({ ...prevState, selectedProduct: value }));
//                             setIsModified(true);
//                           }}
//                           setSelectedCollection={(value) => {
//                             console.log("Selected collection changed to:", value);
//                             setSingleBannerState((prevState) => ({ ...prevState, selectedCollection: value }));
//                             setIsModified(true);
//                           }}
//                           toggleIconModal={() => toggleIconModal("singleBanner")}
//                           setIconModalActive={() => toggleIconModal("singleBanner")}
//                           setIsProductPickerOpen={(value) => {
//                             console.log("Product picker open state changed to:", value);
//                             setSingleBannerState((prevState) => ({ ...prevState, isProductPickerOpen: value }));
//                             setIsModified(true);
//                           }}
//                           setIsCollectionPickerOpen={(value) => {
//                             console.log("Collection picker open state changed to:", value);
//                             setSingleBannerState((prevState) => ({ ...prevState, isCollectionPickerOpen: value }));
//                             setIsModified(true);
//                           }}
//                           onProductSelect={(product) => handleProductSelection("singleBanner", null, product)}
//                           onCollectionSelect={(collection) => handleCollectionSelection("singleBanner", null, collection)}
//                           onUrlSelect={(linkType, externalUrl) => handleUrlSelection("singleBanner", null, linkType, externalUrl)}
//                         />
//                       )}
//                       {badgeType === "icon-block" && (
//                         <>
//                           {iconBlockPages.map((page, index) => (
//                             <IconBlock
//                               key={page.id}
//                               pageId={page.id}
//                               {...page}
//                               setTitle={(value) => {
//                                 console.log("Title changed to:", value);
//                                 setIconBlockPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], title: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               setSubheading={(value) => {
//                                 console.log("Subheading changed to:", value);
//                                 setIconBlockPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], subheading: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               setButtonText={(value) => {
//                                 console.log("Button text changed to:", value);
//                                 setIconBlockPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], buttonText: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               setLinkType={(value) => {
//                                 console.log("Link type changed to:", value);
//                                 setIconBlockPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], linkType: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               setExternalUrl={(value) => {
//                                 console.log("External URL changed to:", value);
//                                 setIconBlockPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], externalUrl: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               setSelectedIcon={(icon) => handleIconSelect("icon-block", page.id, icon)}
//                               setCta={(value) => {
//                                 console.log("CTA changed to:", value);
//                                 setIconBlockPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], cta: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               setSelectedProduct={(value) => {
//                                 console.log("Selected product changed to:", value);
//                                 setIconBlockPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], selectedProduct: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               setSelectedCollection={(value) => {
//                                 console.log("Selected collection changed to:", value);
//                                 setIconBlockPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], selectedCollection: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               toggleIconModal={() => toggleIconModal("icon-block", page.id)}
//                               setIconModalActive={() => toggleIconModal("icon-block", page.id)}
//                               setIsProductPickerOpen={(value) => {
//                                 console.log("Product picker open state changed to:", value);
//                                 setIconBlockPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], isProductPickerOpen: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               setIsCollectionPickerOpen={(value) => {
//                                 console.log("Collection picker open state changed to:", value);
//                                 setIconBlockPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], isCollectionPickerOpen: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               onRemove={() => removeIconBlockPage(page.id)}
//                               pageIndex={index}
//                               iconBlockPages={iconBlockPages}
//                               onProductSelect={(product) => handleProductSelection("icon-block", page.id, product)}
//                               onCollectionSelect={(collection) => handleCollectionSelection("icon-block", page.id, collection)}
//                               onUrlSelect={(linkType, externalUrl) => handleUrlSelection("icon-block", page.id, linkType, externalUrl)}
//                             />
//                           ))}

//                           <div className="addBtnMain">
//                             <Button fullWidth onClick={addIconBlockPage}>
//                               Add New Page
//                             </Button>
//                           </div>
//                         </>
//                       )}

//                       {badgeType === "payment-icons" && (
//                         <>
//                           {paymentIconsPages.map((page, index) => (
//                             <PaymentIcons
//                               key={page.id}
//                               pageId={page.id}
//                               {...page}
//                               setTitle={(value) => {
//                                 console.log("Title changed to:", value);
//                                 setPaymentIconsPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], title: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               setSubheading={(value) => {
//                                 console.log("Subheading changed to:", value);
//                                 setPaymentIconsPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], subheading: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               setButtonText={(value) => {
//                                 console.log("Button text changed to:", value);
//                                 setPaymentIconsPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], buttonText: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               setLinkType={(value) => {
//                                 console.log("Link type changed to:", value);
//                                 setPaymentIconsPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], linkType: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               setExternalUrl={(value) => {
//                                 console.log("External URL changed to:", value);
//                                 setPaymentIconsPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], externalUrl: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               setSelectedIcon={(icon) => handleIconSelect("payment-icons", page.id, icon)}
//                               setCta={(value) => {
//                                 console.log("CTA changed to:", value);
//                                 setPaymentIconsPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], cta: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               setSelectedProduct={(value) => {
//                                 console.log("Selected product changed to:", value);
//                                 setPaymentIconsPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], selectedProduct: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               setSelectedCollection={(value) => {
//                                 console.log("Selected collection changed to:", value);
//                                 setPaymentIconsPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], selectedCollection: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               toggleIconModal={() => toggleIconModal("payment-icons", page.id)}
//                               setIconModalActive={() => toggleIconModal("payment-icons", page.id)}
//                               setIsProductPickerOpen={(value) => {
//                                 console.log("Product picker open state changed to:", value);
//                                 setPaymentIconsPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], isProductPickerOpen: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               setIsCollectionPickerOpen={(value) => {
//                                 console.log("Collection picker open state changed to:", value);
//                                 setPaymentIconsPages((prevPages) => {
//                                   const newPages = [...prevPages];
//                                   const pageIndex = newPages.findIndex(p => p.id === page.id);
//                                   newPages[pageIndex] = { ...newPages[pageIndex], isCollectionPickerOpen: value };
//                                   setIsModified(true);
//                                   return newPages;
//                                 });
//                               }}
//                               onRemove={() => removePaymentIconsPage(page.id)}
//                               pageIndex={index}
//                               iconBlockPages={paymentIconsPages}
//                               onProductSelect={(product) => handleProductSelection("payment-icons", page.id, product)}
//                               onCollectionSelect={(collection) => handleCollectionSelection("payment-icons", page.id, collection)}
//                               onUrlSelect={(linkType, externalUrl) => handleUrlSelection("payment-icons", page.id, linkType, externalUrl)}
//                             />
//                           ))}

//                           <div className="addBtnMain">
//                             <Button fullWidth onClick={addPaymentIconsPage}>
//                               Add New Page
//                             </Button>
//                           </div>
//                         </>
//                       )}
//                       <div className="translations-section">
//                         <Stack>
//                           <Stack.Item>
//                             <span className="Polaris-TextStyle--variationStrong">Translations</span>
//                           </Stack.Item>
//                           <Stack.Item>
//                             <Badge status="info">
//                               <span className="Polaris-Text--root Polaris-Text--bodySm">Essential plan</span>
//                             </Badge>
//                           </Stack.Item>
//                         </Stack>
//                       </div>
//                       <Button fullWidth onClick={() => { }}>
//                         Add translation
//                       </Button>
//                       <div style={{ textAlign: "center" }}>
//                         <button
//                           className="Polaris-Button Polaris-Button--outline Polaris-Button--fullWidth"
//                           type="button"
//                           onClick={handleContinueToDesign}
//                         >
//                           <span className="Polaris-Button__Content">
//                             <span className="Polaris-Button__Icon">
//                               <span className="Polaris-Icon">
//                                 <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
//                                 <svg
//                                   viewBox="0 0 20 20"
//                                   className="Polaris-Icon__Svg"
//                                   focusable="false"
//                                   aria-hidden="true"
//                                 >
//                                   <path d="m17.707 9.293-5-5a.999.999 0 0 0-1.414 1.414l3.293 3.293h-11.586a1 1 0 1 0 0 2h11.586l-3.293 3.293a.999.999 0 0 0 1.414 1.414l5-5a.999.999 0 0 0 0-1.414z"></path>
//                                 </svg>
//                               </span>
//                             </span>
//                             <span className="Polaris-Button__Text">Continue to design</span>
//                           </span>
//                         </button>
//                       </div>
//                     </FormLayout.Group>
//                   </FormLayout>
//                 </Card.Section>
//               )}
//             </LegacyCard>

//             {selectedTab === 1 && (
//               <Card.Section>
//                 <Design
//                   title={badgeType === "single-banner" ? singleBannerState.title : badgeType === "icon-block" ? iconBlockPages[0].title : paymentIconsPages[0].title}
//                 />
//               </Card.Section>
//             )}

//             {selectedTab === 2 && (
//               <Placement
//                 badgeType={badgeType}
//               />
//             )}
//           </Grid.Cell>
//           <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 7, xl: 7 }}>
//             <LegacyCard>

//               {badgeType === "single-banner" && (
//                 <div className="badge-output-container">
//                   {singleBannerState.selectedIcon ? (
//                     <div className="badge-icon">
//                       {IconComponent(singleBannerState.selectedIcon.name, badgeType)}
//                     </div>
//                   ) : (
//                     <div className="icon-placeholder"></div>
//                   )}
//                   <div className="badge-text">
//                     <h2 className="badge-title">{singleBannerState.title}</h2>
//                     <h3 className="badge-subheading">{singleBannerState.subheading}</h3>
//                   </div>
//                   {singleBannerState.cta === "button-cta" && (
//                     <button className="badge-button">{singleBannerState.buttonText}</button>
//                   )}
//                   {singleBannerState.cta === "clickable-banner-cta" && (
//                     <div className="output-banner"></div>
//                   )}
//                 </div>
//               )}

//               {badgeType === "icon-block" && (
//                 <div className="badge-output-container kdtYjY">
//                   {iconBlockPages.map((page, index) => (
//                     <div key={index} className="badge-output-page hVFYFW">
//                       {page.selectedIcon ? (
//                         <div className="badge-icon iubCKx">{IconComponent(page.selectedIcon.name, badgeType)}</div>
//                       ) : (
//                         <div className="icon-placeholder"></div>
//                       )}
//                       <div className="badge-text">
//                         <h2 className="badge-title">{page.title}</h2>
//                         <h3 className="badge-subheading">{page.subheading}</h3>
//                       </div>
//                       {page.cta === "button-cta" && (
//                         <button className="badge-button">{page.buttonText}</button>
//                       )}
//                       {page.cta === "clickable-banner-cta" && (
//                         <div className="output-banner"></div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {badgeType === "payment-icons" && (
//                 <div className="badge-output-container kdtYjY">
//                   {paymentIconsPages.map((page, index) => (
//                     <div key={index} className="badge-output-page hVFYFW">
//                       {page.selectedIcon ? (
//                         <div className="badge-icon iubCKx">{IconComponent(page.selectedIcon.name, badgeType)}</div>
//                       ) : (
//                         <div className="icon-placeholder"></div>
//                       )}
//                       <div className="badge-text">
//                         <h2 className="badge-title">{page.title}</h2>
//                         <h3 className="badge-subheading">{page.subheading}</h3>
//                       </div>
//                       {page.cta === "button-cta" && (
//                         <button className="badge-button">{page.buttonText}</button>
//                       )}
//                       {page.cta === "clickable-banner-cta" && (
//                         <div className="output-banner"></div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </LegacyCard>
//           </Grid.Cell>
//         </Grid>
//       </Page>
//     </Frame>
//   );
// }

// export default BadgeEditor;




// NEW CODE  but old code from gpt 8/11/2024 before this above is working code



import React, { useState, useEffect } from 'react';
import {
  Page,
  Card,
  Tabs,
  Button,
  FormLayout,
  Badge,
  RadioButton,
  Stack,
  Grid,
  LegacyCard,
  TextField,
  Toast,
  Frame
} from '@shopify/polaris';
import './BadgeEditor.css';
import SingleBanner from './SingleBanner';
import IconBlock from './IconBlock';
import PaymentIcons from './PaymentIcons';
import IconSelector from './IconSelector';
import ProductPicker from './ProductPicker';
import CollectionPicker from './CollectionPicker';
import Design from './Design';
import Placement from './Placement';
import * as icons from 'react-icons/lia';
import * as icons1 from 'react-icons/fc';
import serializeReactElementToSVG from './utils';


function BadgeEditor({ onBackClick, badgeId, onBadgeSave, isCreationMode, badgeData }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [badgeType, setBadgeType] = useState("single-banner");
  const [badgeName, setBadgeName] = useState("Your badge");
  const [isSaved, setIsSaved] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  const [toastActive, setToastActive] = useState(false);
  const [isModified, setIsModified] = useState(false);
  const [originalState, setOriginalState] = useState({});

  const [singleBannerState, setSingleBannerState] = useState({
    title: "Free Shipping",
    subheading: "Delivered to Your doorstep, on us!",
    buttonText: "Shop Now",
    linkType: "",
    externalUrl: "",
    selectedIcon: null,
    cta: "no-cta",
    selectedProduct: null,
    selectedCollection: null,
    iconModalActive: false,
    isProductPickerOpen: false,
    isCollectionPickerOpen: false,
  });

  const [iconBlockPages, setIconBlockPages] = useState([{
    id: 1,
    title: "Free Shipping",
    subheading: "No Extra Costs",
    buttonText: "Shop Now",
    linkType: "",
    externalUrl: "",
    selectedIcon: null,
    cta: "no-cta",
    selectedProduct: null,
    selectedCollection: null,
    iconModalActive: false,
    isProductPickerOpen: false,
    isCollectionPickerOpen: false,
  }]);

  const [paymentIconsPages, setPaymentIconsPages] = useState([{
    id: 1,
    title: "",
    subheading: "",
    buttonText: "Shop Now",
    linkType: "",
    externalUrl: "",
    selectedIcon: null,
    cta: "no-cta",
    selectedProduct: null,
    selectedCollection: null,
    iconModalActive: false,
    isProductPickerOpen: false,
    isCollectionPickerOpen: false,
  }]);

  const [placementData, setPlacementData] = useState({
    placement_product_type: 'allProducts',
    placement_product_json: null,
    placement_collection_json: null,
    placement_tags_json: null,
  });

  const getPrefixedIconName = (iconName) => {
    if (badgeType === "single-banner" && !iconName.startsWith("Lia")) {
      return "Lia" + iconName;
    } else if (badgeType === "icon-block" && !iconName.startsWith("Lia")) {
      return "Lia" + iconName;
    } else if (badgeType === "payment-icons" && !iconName.startsWith("Fc")) {
      return "Fc" + iconName;
    }
    return iconName;
  };

  const getIconComponent = (iconName, badgeType) => {
    try {
      if (badgeType === "payment-icons") {
        return icons1[iconName];
      } else {
        return icons[iconName];
      }
    } catch (error) {
      console.error(`Error importing icon ${iconName}:`, error);
      return null;
    }
  };

  const IconComponent = (iconName, badgeType) => {
    const Icon = getIconComponent(iconName, badgeType);
    return Icon ? <Icon size={32} /> : null;
  };

  useEffect(() => {
    if (badgeId && !isCreationMode) {
      console.log("not in isCreationMode");
      
      
      const fetchBadgeData = async () => {
        try {
          const response = await fetch(`/api/badges/${badgeId}`);
          const data = await response.json();
          setBadgeType(data.badge_type);
          console.log("data.badge_type", data.badge_type);
          setBadgeName(data.badge_name);
          setIsPublished(data.status === "Publish");

          if (data.badge_type === "single-banner") {
            setSingleBannerState({
              title: data.badge_pages[0].title,
              subheading: data.badge_pages[0].subheading,
              buttonText: data.badge_pages[0].button_text,
              linkType: data.badge_pages[0].link_type,
              externalUrl: data.badge_pages[0].external_url,
              selectedIcon: data.badge_pages[0].icon_name ? { name: data.badge_pages[0].icon_name } : null,
              cta: data.badge_pages[0].call_to_action,
              selectedProduct: data.badge_pages[0].product_json ? JSON.parse(data.badge_pages[0].product_json) : null,
              selectedCollection: data.badge_pages[0].collection_json ? JSON.parse(data.badge_pages[0].collection_json) : null,
              iconModalActive: false,
              isProductPickerOpen: false,
              isCollectionPickerOpen: false,
            });
          } else if (data.badge_type === "icon-block") {
            setIconBlockPages(data.badge_pages.map((page, index) => ({
              ...page,
              id: index + 1,
              selectedIcon: page.icon_name ? { name: page.icon_name } : null,
              selectedProduct: page.product_json ? JSON.parse(page.product_json) : null,
              selectedCollection: page.collection_json ? JSON.parse(page.collection_json) : null,
              cta: page.call_to_action, // Ensure cta is set here
              buttonText: page.button_text,
              linkType: page.link_type,
              externalUrl: page.external_url,
            })));
          } else if (data.badge_type === "payment-icons") {
            setPaymentIconsPages(data.badge_pages.map((page, index) => ({
              ...page,
              id: index + 1,
              selectedIcon: page.icon_name ? { name: page.icon_name } : null,
              selectedProduct: page.product_json ? JSON.parse(page.product_json) : null,
              selectedCollection: page.collection_json ? JSON.parse(page.collection_json) : null,
              cta: page.call_to_action, // Ensure cta is set here
              buttonText: page.button_text,
              linkType: page.link_type,
              externalUrl: page.external_url,
            })));
          }

          setPlacementData({
            placement_product_type: data.badge_pages[0].placement_product_type,
            placement_product_json: data.badge_pages[0].placement_product_json ? JSON.parse(data.badge_pages[0].placement_product_json) : null,
            placement_collection_json: data.badge_pages[0].placement_collection_json ? JSON.parse(data.badge_pages[0].placement_collection_json) : null,
            placement_tags_json: data.badge_pages[0].placement_tags_json ? JSON.parse(data.badge_pages[0].placement_tags_json) : null,
          });

          setOriginalState({
            singleBannerState: { ...singleBannerState },
            iconBlockPages: [...iconBlockPages],
            paymentIconsPages: [...paymentIconsPages],
            placementData: { ...placementData },
          });

        } catch (error) {
          console.error('Error fetching badge data:', error);
        }
      };

      fetchBadgeData();
    } else if (isCreationMode) {
      console.log("in isCreationMode");
      setBadgeName("New Badge");
      setSingleBannerState({
        title: "Sample Title",
        subheading: "Sample Subheading",
        buttonText: "Shop Now",
        linkType: "",
        externalUrl: "",
        selectedIcon: null,
        cta: "no-cta",
        selectedProduct: null,
        selectedCollection: null,
        iconModalActive: false,
        isProductPickerOpen: false,
        isCollectionPickerOpen: false,
      });
      setIconBlockPages([{
        id: 1,
        title: "Sample Title",
        subheading: "Sample Subheading",
        buttonText: "Shop Now",
        linkType: "",
        externalUrl: "",
        selectedIcon: null,
        cta: "no-cta",
        selectedProduct: null,
        selectedCollection: null,
        iconModalActive: false,
        isProductPickerOpen: false,
        isCollectionPickerOpen: false,
      }]);
      setPaymentIconsPages([{
        id: 1,
        title: "Sample Title",
        subheading: "Sample Subheading",
        buttonText: "Shop Now",
        linkType: "",
        externalUrl: "",
        selectedIcon: null,
        cta: "no-cta",
        selectedProduct: null,
        selectedCollection: null,
        iconModalActive: false,
        isProductPickerOpen: false,
        isCollectionPickerOpen: false,
      }]);
      setPlacementData({
        placement_product_type: 'allProducts',
        placement_product_json: null,
        placement_collection_json: null,
        placement_tags_json: null,
      });
    }
  }, [badgeId, isCreationMode]);


  const setBadgeDetails = (badgeData) => {
    setBadgeName(badgeData.badge_name);
    setBadgeType(badgeData.badge_type);
    setIsPublished(badgeData.status === "Publish");

    if (badgeData.badge_type === "single-banner") {
      setSingleBannerState({
        title: badgeData.badge_pages?.[0]?.title || "Free Shipping",
        subheading: badgeData.badge_pages?.[0]?.subheading || "Delivered to Your doorstep, on us!",
        buttonText: badgeData.badge_pages?.[0]?.button_text || "Shop Now",
        linkType: badgeData.badge_pages?.[0]?.linkType || "",
        externalUrl: badgeData.badge_pages?.[0]?.external_url || "",
        selectedIcon: badgeData.badge_pages?.[0]?.icon_name ? { name: badgeData.badge_pages[0].icon_name.replace("Lia", "") } : null,
        cta: badgeData.badge_pages?.[0]?.call_to_action || "no-cta",
        selectedProduct: badgeData.badge_pages?.[0]?.product_json ? JSON.parse(badgeData.badge_pages[0].product_json) : null,
        selectedCollection: badgeData.badge_pages?.[0]?.collection_json ? JSON.parse(badgeData.badge_pages[0].collection_json) : null,
        iconModalActive: false,
        isProductPickerOpen: false,
        isCollectionPickerOpen: false,
      });
    } else if (badgeData.badge_type === "icon-block") {
      setIconBlockPages(badgeData.badge_pages?.map((page, index) => ({
        ...page,
        id: index + 1,
        selectedIcon: page.icon_name ? { name: page.icon_name.replace("Lia", "") } : null,
        selectedProduct: page.product_json ? JSON.parse(page.product_json) : null,
        selectedCollection: page.collection_json ? JSON.parse(page.collection_json) : null,
      })) || []);
    } else if (badgeData.badge_type === "payment-icons") {
      setPaymentIconsPages(badgeData.badge_pages?.map((page, index) => ({
        ...page,
        id: index + 1,
        selectedIcon: page.icon_name ? { name: page.icon_name.replace("Fc", "") } : null,
        selectedProduct: page.product_json ? JSON.parse(page.product_json) : null,
        selectedCollection: page.collection_json ? JSON.parse(page.collection_json) : null,
      })) || []);
    }

    setPlacementData({
      placement_product_type: badgeData.badge_pages?.[0]?.placement_product_type || 'allProducts',
      placement_product_json: badgeData.badge_pages?.[0]?.placement_product_json || null,
      placement_collection_json: badgeData.badge_pages?.[0]?.placement_collection_json || null,
      placement_tags_json: badgeData.badge_pages?.[0]?.placement_tags_json || null,
    });
  };

  const handleTabChange = (selectedTabIndex) => {
    setSelectedTab(selectedTabIndex);
  };

  const tabs = [
    { id: "content", content: "Content", accessibilityLabel: "Content Tab" },
    { id: "design", content: "Design", accessibilityLabel: "Design Tab" },
    { id: "placement", content: "Placement", accessibilityLabel: "Placement Tab" },
  ];

  const toggleIconModal = (component, pageId) => {
    if (component === "singleBanner") {
      setSingleBannerState((prevState) => ({
        ...prevState,
        iconModalActive: !prevState.iconModalActive,
      }));
      setIsModified(true);
    } else if (component === "payment-icons") {
      setPaymentIconsPages((prevPages) => {
        const newPages = [...prevPages];
        const pageIndex = newPages.findIndex(page => page.id === pageId);
        newPages[pageIndex] = {
          ...newPages[pageIndex],
          iconModalActive: !newPages[pageIndex].iconModalActive,
        };
        setIsModified(true);
        return newPages;
      });
    } else if (component === "icon-block") {
      setIconBlockPages((prevPages) => {
        const newPages = [...prevPages];
        const pageIndex = newPages.findIndex(page => page.id === pageId);
        newPages[pageIndex] = {
          ...newPages[pageIndex],
          iconModalActive: !newPages[pageIndex].iconModalActive,
        };
        setIsModified(true);
        return newPages;
      });
    } else {
      console.error("Unknown component:", component);
    }
  };


  
// ths is old handleIconSelect working for normal  icon

  // const handleIconSelect = (component, pageId, icon) => {
  //   if (component === "singleBanner") {
  //     setSingleBannerState((prevState) => ({
  //       ...prevState,
  //       selectedIcon: icon,
  //       iconModalActive: false,
  //     }));
  //     setIsModified(true);
  //   } else if (component === "payment-icons") {
  //     setPaymentIconsPages((prevPages) => {
  //       const newPages = [...prevPages];
  //       const pageIndex = newPages.findIndex(page => page.id === pageId);
  //       newPages[pageIndex] = {
  //         ...newPages[pageIndex],
  //         selectedIcon: icon,
  //         iconModalActive: false,
  //       };
  //       setIsModified(true);
  //       return newPages;
  //     });
  //   } else if (component === "icon-block") {
  //     setIconBlockPages((prevPages) => {
  //       const newPages = [...prevPages];
  //       const pageIndex = newPages.findIndex(page => page.id === pageId);
  //       newPages[pageIndex] = {
  //         ...newPages[pageIndex],
  //         selectedIcon: icon,
  //         iconModalActive: false,
  //       };
  //       setIsModified(true);
  //       return newPages;
  //     });
  //   } else {
  //     console.error("Unknown component:", component);
  //   }
  // };



  const handleIconSelect = (component, pageId, icon) => {
    if (component === "singleBanner") {
      const svgString = serializeReactElementToSVG(icon.icon);
      setSingleBannerState((prevState) => ({
        ...prevState,
        selectedIcon: icon,
        iconModalActive: false,
        icon_svg: svgString, // Add the SVG string
      }));
      setIsModified(true);
    } else if (component === "payment-icons") {
      const svgString = serializeReactElementToSVG(icon.icon);
      setPaymentIconsPages((prevPages) => {
        const newPages = [...prevPages];
        const pageIndex = newPages.findIndex(page => page.id === pageId);
        newPages[pageIndex] = {
          ...newPages[pageIndex],
          selectedIcon: icon,
          iconModalActive: false,
          icon_svg: svgString, // Add the SVG string
        };
        setIsModified(true);
        return newPages;
      });
    } else if (component === "icon-block") {
      const svgString = serializeReactElementToSVG(icon.icon);
      setIconBlockPages((prevPages) => {
        const newPages = [...prevPages];
        const pageIndex = newPages.findIndex(page => page.id === pageId);
        newPages[pageIndex] = {
          ...newPages[pageIndex],
          selectedIcon: icon,
          iconModalActive: false,
          icon_svg: svgString, // Add the SVG string
        };
        setIsModified(true);
        return newPages;
      });
    } else {
      console.error("Unknown component:", component);
    }
  };


  
  const handleContinueToDesign = () => {
    setSelectedTab(1);
  };

  const addIconBlockPage = () => {
    setIconBlockPages((prevPages) => [
      ...prevPages,
      {
        id: prevPages.length + 1,
        title: "",
        subheading: "",
        buttonText: "Shop Now",
        linkType: "",
        externalUrl: "",
        selectedIcon: null,
        cta: "no-cta",
        selectedProduct: null,
        selectedCollection: null,
        iconModalActive: false,
        isProductPickerOpen: false,
        isCollectionPickerOpen: false,
      },
    ]);
    setIsModified(true);
  };

  const addPaymentIconsPage = () => {
    setPaymentIconsPages((prevPages) => [
      ...prevPages,
      {
        id: prevPages.length + 1,
        title: "",
        subheading: "",
        buttonText: "Shop Now",
        linkType: "",
        externalUrl: "",
        selectedIcon: null,
        cta: "no-cta",
        selectedProduct: null,
        selectedCollection: null,
        iconModalActive: false,
        isProductPickerOpen: false,
        isCollectionPickerOpen: false,
      },
    ]);
    setIsModified(true);
  };

  const removeIconBlockPage = (pageId) => {
    setIconBlockPages((prevPages) => prevPages.filter(page => page.id !== pageId));
    setIsModified(true);
  };

  const removePaymentIconsPage = (pageId) => {
    setPaymentIconsPages((prevPages) => prevPages.filter(page => page.id !== pageId));
    setIsModified(true);
  };

  const handleSave = async () => {
    const badgeDetails = getBadgeDetails();

    console.log("badgeDetails for save details :",badgeDetails);
    
    badgeDetails.status = isPublished ? "Publish" : "Draft";

    try {
      const response = await fetch(`/api/badges/${badgeId ? badgeId : ''}`, {
        method: badgeId ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(badgeDetails)
      });

      if (response.ok) {
        const savedBadge = await response.json();
        setBadgeDetails(savedBadge);
        setIsSaved(true);
        setToastActive(true);
        setTimeout(() => setToastActive(false), 3000);
        setIsModified(false);
        onBadgeSave(savedBadge.id); // Notify the parent component that the badge has been saved
        onBackClick(); // Redirect back to the main page
      } else {
        console.error('Failed to save badge');
      }
    } catch (error) {
      console.error('Error saving badge:', error);
    }
  };


  
  const handlePublish = async () => {
    const badgeDetails = getBadgeDetails();
    badgeDetails.status = "Publish";

    try {
      const response = await fetch(`/api/badges/${badgeId ? badgeId : ''}`, {
        method: badgeId ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(badgeDetails)
      });

      if (response.ok) {
        const savedBadge = await response.json();
        setBadgeDetails(savedBadge);
        setIsSaved(true);
        setToastActive(true);
        setTimeout(() => setToastActive(false), 3000);
        setIsModified(false);
        setIsPublished(true);
        onBadgeSave(savedBadge.id); // Notify the parent component that the badge has been published
        onBackClick(); // Redirect back to the main page
      } else {
        console.error('Failed to publish badge');
      }
    } catch (error) {
      console.error('Error publishing badge:', error);
    }
  };

  const handleUnpublish = async () => {
    const badgeDetails = getBadgeDetails();
    badgeDetails.status = "Draft";

    try {
      const response = await fetch(`/api/badges/${badgeId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(badgeDetails)
      });

      if (response.ok) {
        setIsPublished(false);
        setToastActive(true);
        setTimeout(() => setToastActive(false), 3000);
        onBackClick(); // Redirect back to the main page
      } else {
        console.error('Failed to unpublish badge');
      }
    } catch (error) {
      console.error('Error unpublishing badge:', error);
    }
  };

  const handleRemove = () => {
    setIsSaved(false);
    setIsModified(false);
  };
 
  // const handleProductSelection = (component, pageId, selectedProduct) => {
  //   if (component === "singleBanner") {
  //     setSingleBannerState((prevState) => ({
  //       ...prevState,
  //       selectedProduct,
  //       isProductPickerOpen: false,
  //     }));
  //     setIsModified(true);
  //   } else if (component === "payment-icons") {
  //     setPaymentIconsPages((prevPages) => {
  //       const newPages = [...prevPages];
  //       const pageIndex = newPages.findIndex(page => page.id === pageId);
  //       newPages[pageIndex] = {
  //         ...newPages[pageIndex],
  //         selectedProduct,
  //         isProductPickerOpen: false,
  //       };
  //       setIsModified(true);
  //       return newPages;
  //     });
  //   } else if (component === "icon-block") {
  //     setIconBlockPages((prevPages) => {
  //       const newPages = [...prevPages];
  //       const pageIndex = newPages.findIndex(page => page.id === pageId);
  //       newPages[pageIndex] = {
  //         ...newPages[pageIndex],
  //         selectedProduct,
  //         isProductPickerOpen: false,
  //       };
  //       setIsModified(true);
  //       return newPages;
  //     });
  //   } else {
  //     console.error("Unknown component:", component);
  //   }
  // };

  // const handleCollectionSelection = (component, pageId, selectedCollection) => {
  //   if (component === "singleBanner") {
  //     setSingleBannerState((prevState) => ({
  //       ...prevState,
  //       selectedCollection,
  //       isCollectionPickerOpen: false,
  //     }));
  //     setIsModified(true);
  //   } else if (component === "payment-icons") {
  //     setPaymentIconsPages((prevPages) => {
  //       const newPages = [...prevPages];
  //       const pageIndex = newPages.findIndex(page => page.id === pageId);
  //       newPages[pageIndex] = {
  //         ...newPages[pageIndex],
  //         selectedCollection,
  //         isCollectionPickerOpen: false,
  //       };
  //       setIsModified(true);
  //       return newPages;
  //     });
  //   } else if (component === "icon-block") {
  //     setIconBlockPages((prevPages) => {
  //       const newPages = [...prevPages];
  //       const pageIndex = newPages.findIndex(page => page.id === pageId);
  //       newPages[pageIndex] = {
  //         ...newPages[pageIndex],
  //         selectedCollection,
  //         isCollectionPickerOpen: false,
  //       };
  //       setIsModified(true);
  //       return newPages;
  //     });
  //   } else {
  //     console.error("Unknown component:", component);
  //   }
  // };

  // const handleUrlSelection = (component, pageId, linkType, externalUrl) => {
  //   if (component === "singleBanner") {
  //     setSingleBannerState((prevState) => ({
  //       ...prevState,
  //       linkType,
  //       externalUrl,
  //     }));
  //     setIsModified(true);
  //   } else if (component === "payment-icons") {
  //     setPaymentIconsPages((prevPages) => {
  //       const newPages = [...prevPages];
  //       const pageIndex = newPages.findIndex(page => page.id === pageId);
  //       newPages[pageIndex] = {
  //         ...newPages[pageIndex],
  //         linkType,
  //         externalUrl,
  //       };
  //       setIsModified(true);
  //       return newPages;
  //     });
  //   } else if (component === "icon-block") {
  //     setIconBlockPages((prevPages) => {
  //       const newPages = [...prevPages];
  //       const pageIndex = newPages.findIndex(page => page.id === pageId);
  //       newPages[pageIndex] = {
  //         ...newPages[pageIndex],
  //         linkType,
  //         externalUrl,
  //       };
  //       setIsModified(true);
  //       return newPages;
  //     });
  //   } else {
  //     console.error("Unknown component:", component);
  //   }
  // };

 
  
  const handleProductSelection = (component, pageId, selectedProduct) => {
    if (component === "singleBanner") {
      setSingleBannerState((prevState) => ({
        ...prevState,
        selectedProduct,
        isProductPickerOpen: false,
      }));
    } else if (component === "payment-icons") {
      setPaymentIconsPages((prevPages) => {
        const newPages = [...prevPages];
        const pageIndex = newPages.findIndex(page => page.id === pageId);
        newPages[pageIndex] = {
          ...newPages[pageIndex],
          selectedProduct,
          isProductPickerOpen: false,
        };
        setIsModified(true);
        return newPages;
      });
    } else if (component === "icon-block") {
      setIconBlockPages((prevPages) => {
        const newPages = [...prevPages];
        const pageIndex = newPages.findIndex(page => page.id === pageId);
        newPages[pageIndex] = {
          ...newPages[pageIndex],
          selectedProduct,
          isProductPickerOpen: false,
        };
        setIsModified(true);
        return newPages;
      });
    } else {
      console.error("Unknown component:", component);
    }
  };

  const handleCollectionSelection = (component, pageId, selectedCollection) => {
    if (component === "singleBanner") {
      setSingleBannerState((prevState) => ({
        ...prevState,
        selectedCollection,
        isCollectionPickerOpen: false,
      }));
    } else if (component === "payment-icons") {
      setPaymentIconsPages((prevPages) => {
        const newPages = [...prevPages];
        const pageIndex = newPages.findIndex(page => page.id === pageId);
        newPages[pageIndex] = {
          ...newPages[pageIndex],
          selectedCollection,
          isCollectionPickerOpen: false,
        };
        setIsModified(true);
        return newPages;
      });
    } else if (component === "icon-block") {
      setIconBlockPages((prevPages) => {
        const newPages = [...prevPages];
        const pageIndex = newPages.findIndex(page => page.id === pageId);
        newPages[pageIndex] = {
          ...newPages[pageIndex],
          selectedCollection,
          isCollectionPickerOpen: false,
        };
        setIsModified(true);
        return newPages;
      });
    } else {
      console.error("Unknown component:", component);
    }
  };

  const handleUrlSelection = (component, pageId, linkType, externalUrl) => {
    if (component === "singleBanner") {
      setSingleBannerState((prevState) => ({
        ...prevState,
        linkType,
        externalUrl,
      }));
    } else if (component === "payment-icons") {
      setPaymentIconsPages((prevPages) => {
        const newPages = [...prevPages];
        const pageIndex = newPages.findIndex(page => page.id === pageId);
        newPages[pageIndex] = {
          ...newPages[pageIndex],
          linkType,
          externalUrl,
        };
        setIsModified(true);
        return newPages;
      });
    } else if (component === "icon-block") {
      setIconBlockPages((prevPages) => {
        const newPages = [...prevPages];
        const pageIndex = newPages.findIndex(page => page.id === pageId);
        newPages[pageIndex] = {
          ...newPages[pageIndex],
          linkType,
          externalUrl,
        };
        setIsModified(true);
        return newPages;
      });
    } else {
      console.error("Unknown component:", component);
    }
  };


  const handleCancel = () => {
    if (badgeId) {
      // If editing an existing badge, reset to the original state
      setBadgeDetails(originalState);
    } else {
      // If creating a new badge, reset to default creation state
      setBadgeName("New Badge");
      setSingleBannerState({
        title: "Sample Title",
        subheading: "Sample Subheading",
        buttonText: "Shop Now",
        linkType: "",
        externalUrl: "",
        selectedIcon: null,
        cta: "no-cta",
        selectedProduct: null,
        selectedCollection: null,
        iconModalActive: false,
        isProductPickerOpen: false,
        isCollectionPickerOpen: false,
      });
      setIconBlockPages([{
        id: 1,
        title: "Sample Title",
        subheading: "Sample Subheading",
        buttonText: "Shop Now",
        linkType: "",
        externalUrl: "",
        selectedIcon: null,
        cta: "no-cta",
        selectedProduct: null,
        selectedCollection: null,
        iconModalActive: false,
        isProductPickerOpen: false,
        isCollectionPickerOpen: false,
      }]);
      setPaymentIconsPages([{
        id: 1,
        title: "Sample Title",
        subheading: "Sample Subheading",
        buttonText: "Shop Now",
        linkType: "",
        externalUrl: "",
        selectedIcon: null,
        cta: "no-cta",
        selectedProduct: null,
        selectedCollection: null,
        iconModalActive: false,
        isProductPickerOpen: false,
        isCollectionPickerOpen: false,
      }]);
      setPlacementData({
        placement_product_type: 'allProducts',
        placement_product_json: null,
        placement_collection_json: null,
        placement_tags_json: null,
      });
    }
    setIsModified(false);
    onBackClick(); // Redirect back to the main page
  };


   
  // ths is old getBadgeDetails working for normal  icon
    
  // const getBadgeDetails = () => {
  //   let badgeDetails = {};

  //   const extractId = (gid) => {
  //     const parts = gid.split('/');
  //     return parts.length > 1 ? parts[parts.length - 1] : gid;
  //   };

  //   const prefixIconName = (iconName) => {
  //     if (!iconName.startsWith("Lia")) {
  //       return "Lia" + iconName;
  //     }
  //     return iconName;
  //   };
  //   const prefixIconName1 = (iconName) => {
  //     if (!iconName.startsWith("Fc")) {
  //       return "Fc" + iconName;
  //     }
  //     return iconName;
  //   };

  //   if (badgeType === "single-banner") {
  //     badgeDetails = {
  //       badge_name: badgeName,
  //       badge_type: badgeType,
  //       status: isPublished ? "Publish" : "Draft",
  //       subheading: singleBannerState.subheading,
  //       title: singleBannerState.title,
  //       icon_name: singleBannerState.selectedIcon ? prefixIconName(singleBannerState.selectedIcon.name) : "",
  //       call_to_action: singleBannerState.cta,
  //       button_text: singleBannerState.buttonText,
  //       product_json: singleBannerState.selectedProduct ? JSON.stringify(singleBannerState.selectedProduct) : "",
  //       collection_json: singleBannerState.selectedCollection ? JSON.stringify(singleBannerState.selectedCollection) : "",
  //       external_url: singleBannerState.externalUrl,
  //       badge_pages: [
  //         {
  //           title: singleBannerState.title,
  //           subheading: singleBannerState.subheading,
  //           icon_name: singleBannerState.selectedIcon ? prefixIconName(singleBannerState.selectedIcon.name) : "",
  //           call_to_action: singleBannerState.cta,
  //           button_text: singleBannerState.buttonText,
  //           product_json: singleBannerState.selectedProduct ? JSON.stringify(singleBannerState.selectedProduct) : "",
  //           collection_json: singleBannerState.selectedCollection ? JSON.stringify(singleBannerState.selectedCollection) : "",
  //           external_url: singleBannerState.externalUrl,
  //           placement_product_type: placementData.placement_product_type,
  //           placement_product_json: placementData.placement_product_json ? JSON.stringify(placementData.placement_product_json) : null,
  //           placement_collection_json: placementData.placement_collection_json ? JSON.stringify(placementData.placement_collection_json) : null,
  //           placement_tags_json: placementData.placement_tags_json ? JSON.stringify(placementData.placement_tags_json) : null,
  //         },
  //       ],
  //     };
  //   } else if (badgeType === "icon-block") {
  //     badgeDetails = {
  //       badge_name: badgeName,
  //       badge_type: badgeType,
  //       status: isPublished ? "Publish" : "Draft",
  //       badge_pages: iconBlockPages.map((page) => ({
  //         title: page.title,
  //         subheading: page.subheading,
  //         icon_name: page.selectedIcon ? prefixIconName(page.selectedIcon.name) : "",
  //         call_to_action: page.cta,
  //         button_text: page.buttonText,
  //         product_json: page.selectedProduct ? JSON.stringify(page.selectedProduct) : "",
  //         collection_json: page.selectedCollection ? JSON.stringify(page.selectedCollection) : "",
  //         external_url: page.externalUrl,
  //         placement_product_type: placementData.placement_product_type,
  //         placement_product_json: placementData.placement_product_json ? JSON.stringify(placementData.placement_product_json) : null,
  //         placement_collection_json: placementData.placement_collection_json ? JSON.stringify(placementData.placement_collection_json) : null,
  //         placement_tags_json: placementData.placement_tags_json ? JSON.stringify(placementData.placement_tags_json) : null,
  //       })),
  //     };
  //   } else if (badgeType === "payment-icons") {
  //     badgeDetails = {
  //       badge_name: badgeName,
  //       badge_type: badgeType,
  //       status: isPublished ? "Publish" : "Draft",
  //       badge_pages: paymentIconsPages.map((page) => ({
  //         title: page.title,
  //         subheading: page.subheading,
  //         icon_name: page.selectedIcon ? prefixIconName1(page.selectedIcon.name) : "",
  //         call_to_action: page.cta,
  //         button_text: page.buttonText,
  //         product_json: page.selectedProduct ? JSON.stringify(page.selectedProduct) : "",
  //         collection_json: page.selectedCollection ? JSON.stringify(page.selectedCollection) : "",
  //         external_url: page.externalUrl,
  //         placement_product_type: placementData.placement_product_type,
  //         placement_product_json: placementData.placement_product_json ? JSON.stringify(placementData.placement_product_json) : null,
  //         placement_collection_json: placementData.placement_collection_json ? JSON.stringify(placementData.placement_collection_json) : null,
  //         placement_tags_json: placementData.placement_tags_json ? JSON.stringify(placementData.placement_tags_json) : null,
  //       })),
  //     };
  //   }

  //   return badgeDetails;
  // };



  const getBadgeDetails = () => {
    let badgeDetails = {};
  
    console.log(" badgeDetails inside getBadgeDetails :",badgeDetails);
    
    const extractId = (gid) => {
      const parts = gid.split('/');
      return parts.length > 1 ? parts[parts.length - 1] : gid;
    };
  
    const prefixIconName = (iconName) => {
      if (!iconName.startsWith("Lia")) {
        return "Lia" + iconName;
      }
      return iconName;
    };
    const prefixIconName1 = (iconName) => {
      if (!iconName.startsWith("Fc")) {
        return "Fc" + iconName;
      }
      return iconName;
    };
  
    if (badgeType === "single-banner") {
      badgeDetails = {
        badge_name: badgeName,
        badge_type: badgeType,
        status: isPublished ? "Publish" : "Draft",
        subheading: singleBannerState.subheading,
        title: singleBannerState.title,
        icon_name: singleBannerState.selectedIcon ? prefixIconName(singleBannerState.selectedIcon.name) : "",
        icon_svg: singleBannerState.icon_svg, // Add the SVG string
        call_to_action: singleBannerState.cta,
        button_text: singleBannerState.buttonText,
        product_json: singleBannerState.selectedProduct ? JSON.stringify(singleBannerState.selectedProduct) : "",
        collection_json: singleBannerState.selectedCollection ? JSON.stringify(singleBannerState.selectedCollection) : "",
        external_url: singleBannerState.externalUrl,
        badge_pages: [
          {
            title: singleBannerState.title,
            subheading: singleBannerState.subheading,
            icon_name: singleBannerState.selectedIcon ? prefixIconName(singleBannerState.selectedIcon.name) : "",
            icon_svg: singleBannerState.icon_svg, // Add the SVG string
            call_to_action: singleBannerState.cta,
            button_text: singleBannerState.buttonText,
            product_json: singleBannerState.selectedProduct ? JSON.stringify(singleBannerState.selectedProduct) : "",
            collection_json: singleBannerState.selectedCollection ? JSON.stringify(singleBannerState.selectedCollection) : "",
            external_url: singleBannerState.externalUrl,
            placement_product_type: placementData.placement_product_type,
            placement_product_json: placementData.placement_product_json ? JSON.stringify(placementData.placement_product_json) : null,
            placement_collection_json: placementData.placement_collection_json ? JSON.stringify(placementData.placement_collection_json) : null,
            placement_tags_json: placementData.placement_tags_json ? JSON.stringify(placementData.placement_tags_json) : null,
          },
        ],
      };
    } else if (badgeType === "icon-block") {
      badgeDetails = {
        badge_name: badgeName,
        badge_type: badgeType,
        status: isPublished ? "Publish" : "Draft",
        badge_pages: iconBlockPages.map((page) => ({
          title: page.title,
          subheading: page.subheading,
          icon_name: page.selectedIcon ? prefixIconName(page.selectedIcon.name) : "",
          icon_svg: page.icon_svg, // Add the SVG string
          call_to_action: page.cta,
          button_text: page.buttonText,
          product_json: page.selectedProduct ? JSON.stringify(page.selectedProduct) : "",
          collection_json: page.selectedCollection ? JSON.stringify(page.selectedCollection) : "",
          external_url: page.externalUrl,
          placement_product_type: placementData.placement_product_type,
          placement_product_json: placementData.placement_product_json ? JSON.stringify(placementData.placement_product_json) : null,
          placement_collection_json: placementData.placement_collection_json ? JSON.stringify(placementData.placement_collection_json) : null,
          placement_tags_json: placementData.placement_tags_json ? JSON.stringify(placementData.placement_tags_json) : null,
        })),
      };
    } else if (badgeType === "payment-icons") {
      badgeDetails = {
        badge_name: badgeName,
        badge_type: badgeType,
        status: isPublished ? "Publish" : "Draft",
        badge_pages: paymentIconsPages.map((page) => ({
          title: page.title,
          subheading: page.subheading,
          icon_name: page.selectedIcon ? prefixIconName1(page.selectedIcon.name) : "",
          icon_svg: page.icon_svg, // Add the SVG string
          call_to_action: page.cta,
          button_text: page.buttonText,
          product_json: page.selectedProduct ? JSON.stringify(page.selectedProduct) : "",
          collection_json: page.selectedCollection ? JSON.stringify(page.selectedCollection) : "",
          external_url: page.externalUrl,
          placement_product_type: placementData.placement_product_type,
          placement_product_json: placementData.placement_product_json ? JSON.stringify(placementData.placement_product_json) : null,
          placement_collection_json: placementData.placement_collection_json ? JSON.stringify(placementData.placement_collection_json) : null,
          placement_tags_json: placementData.placement_tags_json ? JSON.stringify(placementData.placement_tags_json) : null,
        })),
      };
    }
  
    return badgeDetails;
  };

 

  return (
    <Frame>
      <Page
        backAction={{ content: 'Products', onAction: onBackClick }}
        title={badgeName}
        subtitle={`Badge ID: ${badgeId || "New Badge Id"}`}
        titleMetadata={isPublished ? <Badge status="success">Published</Badge> : <Badge tone="success">Draft</Badge>}
        compactTitle
        primaryAction={{
          content: isPublished ? 'Unpublish' : 'Publish',
          onAction: isPublished ? handleUnpublish : handlePublish,
          destructive: isPublished,
          primary: !isPublished,
        }}
        secondaryActions={[
          {
            content: isSaved && !isModified ? 'Delete' : 'Save',
            onAction: isSaved && !isModified ? handleDelete : handleSave,
            destructive: isSaved && !isModified,
            plain: !isSaved && !isModified,
            primary: !isSaved && !isModified,
          },
          isModified && {
            content: 'Cancel',
            onAction: handleCancel,
            destructive: false,
            plain: true,
          },
        ].filter(Boolean)}
      >
        {toastActive && <Toast content={isSaved ? "Badge Saved" : "Badge Published"} />}
        <div style={{ marginBottom: "20px" }}>
          <Tabs tabs={tabs} selected={selectedTab} onSelect={handleTabChange} />
        </div>

        <Grid>
          <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 5, xl: 5 }}>
            <LegacyCard>
              {selectedTab === 0 && (
                <Card.Section>
                  <FormLayout>
                    <FormLayout.Group>
                      <Stack vertical>
                        <h1 className="BadgeCls">Badge type</h1>
                        <RadioButton
                          label="Single banner"
                          checked={badgeType === "single-banner"}
                          id="singleBanner"
                          name="badgeType"
                          onChange={() => {
                            console.log("Badge type changed to: Single banner");
                            setBadgeType("single-banner");
                            setIsModified(true);
                          }}
                        />
                        <RadioButton
                          label="Icon block"
                          checked={badgeType === "icon-block"}
                          id="iconBlock"
                          name="badgeType"
                          onChange={() => {
                            console.log("Badge type changed to: Icon block");
                            setBadgeType("icon-block");
                            setIsModified(true);
                          }}
                        />
                        <RadioButton
                          label="Payment icons"
                          checked={badgeType === "payment-icons"}
                          id="paymentIcons"
                          name="badgeType"
                          onChange={() => {
                            console.log("Badge type changed to: Payment icons");
                            setBadgeType("payment-icons");
                            setIsModified(true);
                          }}
                        />
                        <TextField
                          label="Badge name"
                          value={badgeName}
                          onChange={(value) => {
                            console.log("Badge name changed to:", value);
                            setBadgeName(value);
                            setIsModified(true);
                          }}
                          helpText="Only visible to you. For your own internal reference."
                        />
                      </Stack>

                      {badgeType === "single-banner" && (
                     
                        <SingleBanner
                          {...singleBannerState}
                          setTitle={(value) => {
                            console.log("Title changed to:", value);
                            setSingleBannerState((prevState) => ({ ...prevState, title: value }));
                            setIsModified(true);
                          }}
                          setSubheading={(value) => {
                            console.log("Subheading changed to:", value);
                            setSingleBannerState((prevState) => ({ ...prevState, subheading: value }));
                            setIsModified(true);
                          }}
                          setButtonText={(value) => {
                            console.log("Button text changed to:", value);
                            setSingleBannerState((prevState) => ({ ...prevState, buttonText: value }));
                            setIsModified(true);
                          }}
                          setLinkType={(value) => {
                            console.log("Link type changed to:", value);
                            setSingleBannerState((prevState) => ({ ...prevState, linkType: value }));
                            setIsModified(true);
                          }}
                          setExternalUrl={(value) => {
                            console.log("External URL changed to:", value);
                            setSingleBannerState((prevState) => ({ ...prevState, externalUrl: value }));
                            setIsModified(true);
                          }}
                          setSelectedIcon={(icon) => handleIconSelect("singleBanner", null, icon)}
                          setCta={(value) => {
                            console.log("CTA changed to:", value);
                            setSingleBannerState((prevState) => ({ ...prevState, cta: value }));
                            setIsModified(true);
                          }}
                          setSelectedProduct={(value) => {
                            console.log("Selected product changed to:", value);
                            handleProductSelection("singleBanner", null, value);
                          }}
                          setSelectedCollection={(value) => {
                            console.log("Selected collection changed to:", value);
                            handleCollectionSelection("singleBanner", null, value);
                          }}
                          toggleIconModal={() => toggleIconModal("singleBanner")}
                          setIconModalActive={() => toggleIconModal("singleBanner")}
                          setIsProductPickerOpen={(value) => {
                            console.log("Product picker open state changed to:", value);
                            setSingleBannerState((prevState) => ({ ...prevState, isProductPickerOpen: value }));
                            setIsModified(true);
                          }}
                          setIsCollectionPickerOpen={(value) => {
                            console.log("Collection picker open state changed to:", value);
                            setSingleBannerState((prevState) => ({ ...prevState, isCollectionPickerOpen: value }));
                            setIsModified(true);
                          }}
                          onProductSelect={(product) => handleProductSelection("singleBanner", null, product)}
                          onCollectionSelect={(collection) => handleCollectionSelection("singleBanner", null, collection)}
                          onUrlSelect={(linkType, externalUrl) => handleUrlSelection("singleBanner", null, linkType, externalUrl)}
                        />

                      )}
                      {badgeType === "icon-block" && (
                        <>
                          {iconBlockPages.map((page, index) => (
                          
                            <IconBlock
                              key={page.id}
                              pageId={page.id}
                              {...page}
                              setTitle={(value) => {
                                console.log("Title changed to:", value);
                                setIconBlockPages((prevPages) => {
                                  const newPages = [...prevPages];
                                  const pageIndex = newPages.findIndex(p => p.id === page.id);
                                  newPages[pageIndex] = { ...newPages[pageIndex], title: value };
                                  setIsModified(true);
                                  return newPages;
                                });
                              }}
                              setSubheading={(value) => {
                                console.log("Subheading changed to:", value);
                                setIconBlockPages((prevPages) => {
                                  const newPages = [...prevPages];
                                  const pageIndex = newPages.findIndex(p => p.id === page.id);
                                  newPages[pageIndex] = { ...newPages[pageIndex], subheading: value };
                                  setIsModified(true);
                                  return newPages;
                                });
                              }}
                              setButtonText={(value) => {
                                console.log("Button text changed to:", value);
                                setIconBlockPages((prevPages) => {
                                  const newPages = [...prevPages];
                                  const pageIndex = newPages.findIndex(p => p.id === page.id);
                                  newPages[pageIndex] = { ...newPages[pageIndex], buttonText: value };
                                  setIsModified(true);
                                  return newPages;
                                });
                              }}
                              setLinkType={(value) => {
                                console.log("Link type changed to:", value);
                                setIconBlockPages((prevPages) => {
                                  const newPages = [...prevPages];
                                  console.log("newPages:", newPages);
                                  const pageIndex = newPages.findIndex(p => p.id === page.id);
                                  console.log("pageIndex:", pageIndex);
                                  newPages[pageIndex] = { ...newPages[pageIndex], linkType: value };
                                  setIsModified(true);
                                  return newPages;
                                });
                              }}
                              setExternalUrl={(value) => {
                                console.log("External URL changed to:", value);
                                setIconBlockPages((prevPages) => {
                                  const newPages = [...prevPages];
                                  const pageIndex = newPages.findIndex(p => p.id === page.id);
                                  newPages[pageIndex] = { ...newPages[pageIndex], externalUrl: value };
                                  setIsModified(true);
                                  return newPages;
                                });
                              }}
                              setSelectedIcon={(icon) => handleIconSelect("icon-block", page.id, icon)}
                              setCta={(value) => {
                                console.log("CTA changed to:", value);
                                setIconBlockPages((prevPages) => {
                                  const newPages = [...prevPages];
                                  const pageIndex = newPages.findIndex(p => p.id === page.id);
                                  newPages[pageIndex] = { ...newPages[pageIndex], cta: value };
                                  setIsModified(true);
                                  return newPages;
                                });
                              }}
                              setSelectedProduct={(value) => {
                                console.log("Selected product changed to:", value);
                                handleProductSelection("icon-block", page.id, value);
                              }}
                              setSelectedCollection={(value) => {
                                console.log("Selected collection changed to:", value);
                                handleCollectionSelection("icon-block", page.id, value);
                              }}
                              toggleIconModal={() => toggleIconModal("icon-block", page.id)}
                              setIconModalActive={() => toggleIconModal("icon-block", page.id)}
                              setIsProductPickerOpen={(value) => {
                                console.log("Product picker open state changed to:", value);
                                setIconBlockPages((prevPages) => {
                                  const newPages = [...prevPages];
                                  const pageIndex = newPages.findIndex(p => p.id === page.id);
                                  newPages[pageIndex] = { ...newPages[pageIndex], isProductPickerOpen: value };
                                  setIsModified(true);
                                  return newPages;
                                });
                              }}
                              setIsCollectionPickerOpen={(value) => {
                                console.log("Collection picker open state changed to:", value);
                                setIconBlockPages((prevPages) => {
                                  const newPages = [...prevPages];
                                  const pageIndex = newPages.findIndex(p => p.id === page.id);
                                  newPages[pageIndex] = { ...newPages[pageIndex], isCollectionPickerOpen: value };
                                  setIsModified(true);
                                  return newPages;
                                });
                              }}
                              onRemove={() => removeIconBlockPage(page.id)}
                              pageIndex={index}
                              iconBlockPages={iconBlockPages}
                              onProductSelect={(product) => handleProductSelection("icon-block", page.id, product)}
                              onCollectionSelect={(collection) => handleCollectionSelection("icon-block", page.id, collection)}
                              onUrlSelect={(linkType, externalUrl) => handleUrlSelection("icon-block", page.id, linkType, externalUrl)}
                            />

                          ))}

                          <div className="addBtnMain">
                            <Button fullWidth onClick={addIconBlockPage}>
                              Add New Page
                            </Button>
                          </div>
                        </>
                      )}

                      {badgeType === "payment-icons" && (
                        <>
                          {paymentIconsPages.map((page, index) => (
                    
                            <PaymentIcons
                              key={page.id}
                              pageId={page.id}
                              {...page}
                              setTitle={(value) => {
                                console.log("Title changed to:", value);
                                setPaymentIconsPages((prevPages) => {
                                  const newPages = [...prevPages];
                                  const pageIndex = newPages.findIndex(p => p.id === page.id);
                                  newPages[pageIndex] = { ...newPages[pageIndex], title: value };
                                  setIsModified(true);
                                  return newPages;
                                });
                              }}
                              setSubheading={(value) => {
                                console.log("Subheading changed to:", value);
                                setPaymentIconsPages((prevPages) => {
                                  const newPages = [...prevPages];
                                  const pageIndex = newPages.findIndex(p => p.id === page.id);
                                  newPages[pageIndex] = { ...newPages[pageIndex], subheading: value };
                                  setIsModified(true);
                                  return newPages;
                                });
                              }}
                              setButtonText={(value) => {
                                console.log("Button text changed to:", value);
                                setPaymentIconsPages((prevPages) => {
                                  const newPages = [...prevPages];
                                  const pageIndex = newPages.findIndex(p => p.id === page.id);
                                  newPages[pageIndex] = { ...newPages[pageIndex], buttonText: value };
                                  setIsModified(true);
                                  return newPages;
                                });
                              }}
                              setLinkType={(value) => {
                                console.log("Link type changed to:", value);
                                setPaymentIconsPages((prevPages) => {
                                  const newPages = [...prevPages];
                                  const pageIndex = newPages.findIndex(p => p.id === page.id);
                                  newPages[pageIndex] = { ...newPages[pageIndex], linkType: value };
                                  setIsModified(true);
                                  return newPages;
                                });
                              }}
                              setExternalUrl={(value) => {
                                console.log("External URL changed to:", value);
                                setPaymentIconsPages((prevPages) => {
                                  const newPages = [...prevPages];
                                  const pageIndex = newPages.findIndex(p => p.id === page.id);
                                  newPages[pageIndex] = { ...newPages[pageIndex], externalUrl: value };
                                  setIsModified(true);
                                  return newPages;
                                });
                              }}
                              setSelectedIcon={(icon) => handleIconSelect("payment-icons", page.id, icon)}
                              setCta={(value) => {
                                console.log("CTA changed to:", value);
                                setPaymentIconsPages((prevPages) => {
                                  const newPages = [...prevPages];
                                  const pageIndex = newPages.findIndex(p => p.id === page.id);
                                  newPages[pageIndex] = { ...newPages[pageIndex], cta: value };
                                  setIsModified(true);
                                  return newPages;
                                });
                              }}
                              setSelectedProduct={(value) => {
                                console.log("Selected product changed to:", value);
                                handleProductSelection("payment-icons", page.id, value);
                              }}
                              setSelectedCollection={(value) => {
                                console.log("Selected collection changed to:", value);
                                handleCollectionSelection("payment-icons", page.id, value);
                              }}
                              toggleIconModal={() => toggleIconModal("payment-icons", page.id)}
                              setIconModalActive={() => toggleIconModal("payment-icons", page.id)}
                              setIsProductPickerOpen={(value) => {
                                console.log("Product picker open state changed to:", value);
                                setPaymentIconsPages((prevPages) => {
                                  const newPages = [...prevPages];
                                  const pageIndex = newPages.findIndex(p => p.id === page.id);
                                  newPages[pageIndex] = { ...newPages[pageIndex], isProductPickerOpen: value };
                                  setIsModified(true);
                                  return newPages;
                                });
                              }}
                              setIsCollectionPickerOpen={(value) => {
                                console.log("Collection picker open state changed to:", value);
                                setPaymentIconsPages((prevPages) => {
                                  const newPages = [...prevPages];
                                  const pageIndex = newPages.findIndex(p => p.id === page.id);
                                  newPages[pageIndex] = { ...newPages[pageIndex], isCollectionPickerOpen: value };
                                  setIsModified(true);
                                  return newPages;
                                });
                              }}
                              onRemove={() => removePaymentIconsPage(page.id)}
                              pageIndex={index}
                              iconBlockPages={paymentIconsPages}
                              onProductSelect={(product) => handleProductSelection("payment-icons", page.id, product)}
                              onCollectionSelect={(collection) => handleCollectionSelection("payment-icons", page.id, collection)}
                              onUrlSelect={(linkType, externalUrl) => handleUrlSelection("payment-icons", page.id, linkType, externalUrl)}
                            />

                          ))}

                          <div className="addBtnMain">
                            <Button fullWidth onClick={addPaymentIconsPage}>
                              Add New Page
                            </Button>
                          </div>
                        </>
                      )}
                      <div className="translations-section">
                        <Stack>
                          <Stack.Item>
                            <span className="Polaris-TextStyle--variationStrong">Translations</span>
                          </Stack.Item>
                          <Stack.Item>
                            <Badge status="info">
                              <span className="Polaris-Text--root Polaris-Text--bodySm">Essential plan</span>
                            </Badge>
                          </Stack.Item>
                        </Stack>
                      </div>
                      <Button fullWidth onClick={() => { }}>
                        Add translation
                      </Button>
                      <div style={{ textAlign: "center" }}>
                        <button
                          className="Polaris-Button Polaris-Button--outline Polaris-Button--fullWidth"
                          type="button"
                          onClick={handleContinueToDesign}
                        >
                          <span className="Polaris-Button__Content">
                            <span className="Polaris-Button__Icon">
                              <span className="Polaris-Icon">
                                <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
                                <svg
                                  viewBox="0 0 20 20"
                                  className="Polaris-Icon__Svg"
                                  focusable="false"
                                  aria-hidden="true"
                                >
                                  <path d="m17.707 9.293-5-5a.999.999 0 0 0-1.414 1.414l3.293 3.293h-11.586a1 1 0 1 0 0 2h11.586l-3.293 3.293a.999.999 0 0 0 1.414 1.414l5-5a.999.999 0 0 0 0-1.414z"></path>
                                </svg>
                              </span>
                            </span>
                            <span className="Polaris-Button__Text">Continue to design</span>
                          </span>
                        </button>
                      </div>
                    </FormLayout.Group>
                  </FormLayout>
                </Card.Section>
              )}
              {selectedTab === 1 && (
                <Design title={badgeType === "single-banner" ? singleBannerState.title : badgeType === "icon-block" ? iconBlockPages[0].title : paymentIconsPages[0].title} />
              )}
            </LegacyCard>

            {selectedTab === 2 && (
              <Placement
                badgeType={badgeType}
                placementData={placementData}
                setPlacementData={setPlacementData}
              />
            )}



          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 7, xl: 7 }}>
            <LegacyCard>

              {badgeType === "single-banner" && (
                <div className="badge-output-container">
                  {singleBannerState.selectedIcon ? (
                    <div className="badge-icon">
                      {IconComponent(getPrefixedIconName(singleBannerState.selectedIcon.name), badgeType)}
                    </div>
                  ) : (
                    <div className="icon-placeholder"></div>
                  )}
                  <div className="badge-text">
                    <h2 className="badge-title">{singleBannerState.title}</h2>
                    <h3 className="badge-subheading">{singleBannerState.subheading}</h3>
                  </div>
                  {singleBannerState.cta === "button-cta" && (
                    <button className="badge-button">{singleBannerState.buttonText}</button>
                  )}
                  {singleBannerState.cta === "clickable-banner-cta" && (
                    <div className="output-banner"></div>
                  )}
                </div>
              )}

              {badgeType === "icon-block" && (
                <div className="badge-output-container kdtYjY">
                  {iconBlockPages.map((page, index) => (
                    <div key={index} className="badge-output-page hVFYFW">
                      {page.selectedIcon ? (
                        <div className="badge-icon iubCKx">
                          {IconComponent(getPrefixedIconName(page.selectedIcon.name), badgeType)}
                        </div>
                      ) : (
                        <div className="icon-placeholder"></div>
                      )}
                      <div className="badge-text">
                        <h2 className="badge-title">{page.title}</h2>
                        <h3 className="badge-subheading">{page.subheading}</h3>
                      </div>
                      {page.cta === "button-cta" && (
                        <button className="badge-button">{page.buttonText}</button>
                      )}
                      {page.cta === "clickable-banner-cta" && (
                        <div className="output-banner"></div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {badgeType === "payment-icons" && (
                <div className="badge-output-container kdtYjY">
                  {paymentIconsPages.map((page, index) => (
                    <div key={index} className="badge-output-page hVFYFW">
                      {page.selectedIcon ? (
                        <div className="badge-icon iubCKx">
                          {IconComponent(getPrefixedIconName(page.selectedIcon.name), badgeType)}
                        </div>
                      ) : (
                        <div className="icon-placeholder"></div>
                      )}
                      <div className="badge-text">
                        <h2 className="badge-title">{page.title}</h2>
                        <h3 className="badge-subheading">{page.subheading}</h3>
                      </div>
                      {page.cta === "button-cta" && (
                        <button className="badge-button">{page.buttonText}</button>
                      )}
                      {page.cta === "clickable-banner-cta" && (
                        <div className="output-banner"></div>
                      )}
                    </div>
                  ))}
                </div>
              )}

            </LegacyCard>
          </Grid.Cell>
        </Grid>
      </Page>
    </Frame>
  );
}

export default BadgeEditor;
