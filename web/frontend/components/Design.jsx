// // Frontend/Components/Design.jsx

// import React, { useState } from 'react';
// import {
//   Page,
//   Card,
//   FormLayout,
//   TextField,
//   Select,
//   ColorPicker,
//   Stack,
//   TextStyle
// } from '@shopify/polaris';

// function Design() {
//   const [singleColor, setSingleColor] = useState(true);
//   const [backgroundColor, setBackgroundColor] = useState({
//     hue: 120,
//     brightness: 1,
//     saturation: 0.7,
//   });
//   const [iconSize, setIconSize] = useState('32px');
//   const [cornerRadius, setCornerRadius] = useState('8px');
//   const [borderColor, setBorderColor] = useState('#C5C8D1');
//   const [titleColor, setTitleColor] = useState('#202223');
//   const [titleSize, setTitleSize] = useState('16px');
//   const [subheadingColor, setSubheadingColor] = useState('#96A4B6');
//   const [subheadingSize, setSubheadingSize] = useState('14px');

//   const options = [
//     {label: 'Minimal', value: 'minimal'},
//     {label: 'Bold', value: 'bold'},
//     {label: 'Classic', value: 'classic'},
//   ];

//   return (

//       <Card sectioned>

//         <FormLayout>
//           {/* <Select
//             label="Template"
//             options={options}
//             value="minimal"
//             onChange={() => {}}
//           /> */}


//             <FormLayout.Group>

//               {singleColor && (
//                 <Stack vertical>
//                   <TextStyle>Background Color</TextStyle>
//                   <ColorPicker
//                     onChange={setBackgroundColor}
//                     color={backgroundColor}
//                   />
//                 </Stack>
//               )}
//             </FormLayout.Group>

//             <TextField
//               label="Corner Radius"
//               type="text"
//               value={cornerRadius}
//               onChange={setCornerRadius}
//             />

//             <TextField
//               label="Border Color"
//               type="text"
//               value={borderColor}
//               onChange={setBorderColor}
//             />


//             <TextField
//               label="Icon Size"
//               type="text"
//               value={iconSize}
//               onChange={setIconSize}
//             />



//             <TextField
//               label="Title Size"
//               type="text"
//               value={titleSize}
//               onChange={setTitleSize}
//             />
//             <TextField
//               label="Title Color"
//               type="text"
//               value={titleColor}
//               onChange={setTitleColor}
//             />
//             <TextField
//               label="Subheading Size"
//               type="text"
//               value={subheadingSize}
//               onChange={setSubheadingSize}
//             />
//             <TextField
//               label="Subheading Color"
//               type="text"
//               value={subheadingColor}
//               onChange={setSubheadingColor}
//             />



//         </FormLayout>
//       </Card>

//   );
// }

// export default Design;

// import React, { useState, useCallback } from 'react';
// import './Design.css';
// import {
//   Card,
//   FormLayout,
//   TextField,
//   Box,
//   Select
// } from '@shopify/polaris';

// function Design({ handleContinueToPlacement }) {
//   // State variables
//   const [backgroundColor, setBackgroundColor] = useState('#26D294');
//   const [borderColor, setBorderColor] = useState('#C5C8D1');
//   const [titleColor, setTitleColor] = useState('#202223');
//   const [subheadingColor, setSubheadingColor] = useState('#96A4B6');
//   const [iconColor, setIconColor] = useState(32); // Icon size as a number
//   const [cornerRadius, setCornerRadius] = useState(0); // Corner radius as a number
//   const [titleSize, setTitleSize] = useState(16); // Title font size as a number
//   const [subheadingSize, setSubheadingSize] = useState(14); // Subheading font size as a number
//   const [iconSize, setIconSize] = useState(52); // Icon size as a number
//   const [buttonColor, setButtonColor] = useState('#96A4B6'); // Button background color
//   const [buttonTextColor, setButtonTextColor] = useState('#202223'); // Button text color
//   const [buttonTextSize, setButtonTextSize] = useState(14); // Button text size
//   const [selected, setSelected] = useState('today');

//   const handleSelectChange = useCallback(
//     (value) => setSelected(value),
//     [],
//   );
//   const options = [
//     { label: 'Use your theme fonts', value: 'today' },
//     { label: 'Helvetica', value: 'Helvetica' },
//     { label: 'Arials', value: 'Arial' },
//     { label: 'Tahoma', value: 'Tahoma' },
//     { label: 'Trebuchet MS', value: 'Trebuchet MS' },
//     { label: 'Times New Roman', value: 'Times New Roman' },
//     { label: 'Georgia', value: 'Georgia' },
//     { label: 'Garamond', value: 'Garamond' },
//     { label: 'Courier New', value: 'Courier New' },

//   ];

//   return (
//     <>
//       <Card title="Design Settings" sectioned >
//         <FormLayout >
//           {/* Background Color Input */}
//           <FormLayout.Group>
//             <div className="Polaris-FormLayout__Item">
//               <div className="sc-cfxfcM kXtYkP">Card</div>
//             </div>

//             <div className="wCls">
//               <TextField
//                 label="Background Color"
//                 value={backgroundColor}
//                 onChange={(value) => setBackgroundColor(value)}
//                 type="color"
//               />

//               <TextField
//                 label="Border Radius"
//                 value={cornerRadius}
//                 onChange={(value) => setCornerRadius(Number(value))}
//                 type="number"
//                 suffix="px"
//               />

//               <TextField
//                 label="Border Color"
//                 value={borderColor}
//                 onChange={(value) => setBorderColor(value)}
//                 type="color"
//               />
//             </div>
//           </FormLayout.Group>
//         </FormLayout>
//       </Card>

//       <Card sectioned>
//         <FormLayout>
//           {/* Title and Subheading Styles */}
//           <FormLayout.Group style={{ borderBottom: '3px solid rgb(221, 224, 228)' }}>
//             <div className="Polaris-FormLayout__Item">
//               <div className="sc-cfxfcM kXtYkP">Typography</div>
//             </div>

//             <div className="wCls">
//               <TextField
//                 label="Title Size"
//                 value={titleSize}
//                 onChange={(value) => setTitleSize(Number(value))}
//                 type="number"
//                 suffix="px"
//               />

//               <TextField
//                 label="Title Color"
//                 value={titleColor}
//                 onChange={(value) => setTitleColor(value)}
//                 type="color"
//               />

//               <TextField
//                 label="Subheading Size"
//                 value={subheadingSize}
//                 onChange={(value) => setSubheadingSize(Number(value))}
//                 type="number"
//                 suffix="px"
//               />

//               <TextField
//                 label="Subheading Color"
//                 value={subheadingColor}
//                 onChange={(value) => setSubheadingColor(value)}
//                 type="color"
//               />


//             </div>
//             <Select
//               label="Font"
//               options={options}
//               onChange={handleSelectChange}
//               value={selected}
//             />
//             <span class="Polaris-Text--root Polaris-Text--break Polaris-Text--subdued">Theme fonts are not available in the preview mode. Publish timer to preview it in store.</span>
//           </FormLayout.Group>
//         </FormLayout>
//       </Card>

//       <Card sectioned>
//         <FormLayout>
//           {/* Icon Size Selection */}
//           <FormLayout.Group style={{ borderBottom: '3px solid rgb(221, 224, 228)' }}>
//             <div className="Polaris-FormLayout__Item">
//               <div className="sc-cfxfcM kXtYkP">Icon</div>
//             </div>

//             <div className="wCls">
//               <TextField
//                 label="Icon Size"
//                 value={iconSize}
//                 onChange={(value) => setIconSize(Number(value))}
//                 type="number"
//                 suffix="px"
//               />

//               <TextField
//                 label="Icon Color"
//                 value={iconColor}
//                 onChange={(value) => setIconColor(value)}
//                 type="color"
//               />
//             </div>
//           </FormLayout.Group>
//         </FormLayout>
//       </Card>

//       <Card sectioned>
//         <FormLayout>
//           {/* Button Styles */}
//           <FormLayout.Group style={{ borderBottom: '3px solid rgb(221, 224, 228)' }}>
//             <div className="Polaris-FormLayout__Item">
//               <div className="sc-cfxfcM kXtYkP">Button</div>
//             </div>

//             <div className="wCls">
//               <TextField
//                 label="Button Color"
//                 value={buttonColor}
//                 onChange={(value) => setButtonColor(value)}
//                 type="color"
//               />

//               <TextField
//                 label="Button Text Size"
//                 value={buttonTextSize}
//                 onChange={(value) => setButtonTextSize(Number(value))}
//                 type="number"
//                 suffix="px"
//               />

//               <TextField
//                 label="Button Text Color"
//                 value={buttonTextColor}
//                 onChange={(value) => setButtonTextColor(value)}
//                 type="color"
//               />

//               <TextField
//                 label="Button Border Radius"
//                 value={cornerRadius}
//                 onChange={(value) => setCornerRadius(Number(value))}
//                 type="number"
//                 suffix="px"
//               />
//             </div>
//           </FormLayout.Group>
//         </FormLayout>
//         <FormLayout.Group>
//           <div style={{ textAlign: "center" }}>
//             <button
//               className="Polaris-Button Polaris-Button--outline Polaris-Button--fullWidth"
//               type="button"
//               onClick={handleContinueToPlacement}
//             >
//               <span className="Polaris-Button__Content">
//                 <span className="Polaris-Button__Icon">
//                   <span className="Polaris-Icon">
//                     <span className="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
//                     <svg
//                       viewBox="0 0 20 20"
//                       className="Polaris-Icon__Svg"
//                       focusable="false"
//                       aria-hidden="true"
//                     >
//                       <path d="m17.707 9.293-5-5a.999.999 0 0 0-1.414 1.414l3.293 3.293h-11.586a1 1 0 1 0 0 2h11.586l-3.293 3.293a.999.999 0 0 0 1.414 1.414l5-5a.999.999 0 0 0 0-1.414z"></path>
//                     </svg>
//                   </span>
//                 </span>
//                 <span className="Polaris-Button__Text">Continue to Placement</span>
//               </span>
//             </button>
//           </div>
//         </FormLayout.Group>
//       </Card>

//     </>
//   );
// }

// export default Design;



import React from 'react';
import './Design.css';
import {
  Card,
  FormLayout,
  TextField,
  Box,
} from '@shopify/polaris';

function Design({ handleContinueToPlacement, designState, setDesignState }) {
  return (
    <>
      <Card title="Design Settings" sectioned>
        <FormLayout>
          <FormLayout.Group>
            <div className="Polaris-FormLayout__Item">
              <div className="sc-cfxfcM kXtYkP">Card</div>
            </div>

            <div className="wCls">
              <TextField
                label="Background Color"
                value={designState.backgroundColor}
                onChange={(value) => setDesignState({ ...designState, backgroundColor: value })}
                type="color"
              />

              <TextField
                label="Border Size"
                value={designState.bordersize}
                onChange={(value) => setDesignState({ ...designState, bordersize: Number(value) })}
                type="number"
                suffix="px"
              />


              <TextField
                label="Border Radius"
                value={designState.cornerRadius}
                onChange={(value) => setDesignState({ ...designState, cornerRadius: Number(value) })}
                type="number"
                suffix="px"
              />

              <TextField
                label="Border Color"
                value={designState.borderColor}
                onChange={(value) => setDesignState({ ...designState, borderColor: value })}
                type="color"
              />
            </div>
          </FormLayout.Group>
        </FormLayout>
      </Card>

      <Card sectioned>
        <FormLayout>
          <FormLayout.Group style={{ borderBottom: '3px solid rgb(221, 224, 228)' }}>
            <div className="Polaris-FormLayout__Item">
              <div className="sc-cfxfcM kXtYkP">Typography</div>
            </div>

            <div className="wCls">
              <TextField
                label="Title Size"
                value={designState.titleSize}
                onChange={(value) => setDesignState({ ...designState, titleSize: Number(value) })}
                type="number"
                suffix="px"
              />

              <TextField
                label="Title Color"
                value={designState.titleColor}
                onChange={(value) => setDesignState({ ...designState, titleColor: value })}
                type="color"
              />

              <TextField
                label="Subheading Size"
                value={designState.subheadingSize}
                onChange={(value) => setDesignState({ ...designState, subheadingSize: Number(value) })}
                type="number"
                suffix="px"
              />

              <TextField
                label="Subheading Color"
                value={designState.subheadingColor}
                onChange={(value) => setDesignState({ ...designState, subheadingColor: value })}
                type="color"
              />
            </div>
          </FormLayout.Group>
        </FormLayout>
      </Card>

      <Card sectioned>
        <FormLayout>
          <FormLayout.Group style={{ borderBottom: '3px solid rgb(221, 224, 228)' }}>
            <div className="Polaris-FormLayout__Item">
              <div className="sc-cfxfcM kXtYkP">Icon</div>
            </div>

            <div className="wCls">
              <TextField
                label="Icon Size"
                value={designState.iconSize}
                onChange={(value) => setDesignState({ ...designState, iconSize: Number(value) })}
                type="number"
                suffix="px"
              />

              <TextField
                label="Icon Color"
                value={designState.iconColor}
                onChange={(value) => setDesignState({ ...designState, iconColor: value })}
                type="color"
              />
            </div>
          </FormLayout.Group>
        </FormLayout>
      </Card>

      <Card sectioned>
        <FormLayout>
          <FormLayout.Group style={{ borderBottom: '3px solid rgb(221, 224, 228)' }}>
            <div className="Polaris-FormLayout__Item">
              <div className="sc-cfxfcM kXtYkP">Button</div>
            </div>

            <div className="wCls">
              <TextField
                label="Button Color"
                value={designState.buttonColor}
                onChange={(value) => setDesignState({ ...designState, buttonColor: value })}
                type="color"
              />

              <TextField
                label="Button Text Size"
                value={designState.buttonTextSize}
                onChange={(value) => setDesignState({ ...designState, buttonTextSize: Number(value) })}
                type="number"
                suffix="px"
              />

              <TextField
                label="Button Text Color"
                value={designState.buttonTextColor}
                onChange={(value) => setDesignState({ ...designState, buttonTextColor: value })}
                type="color"
              />

              <TextField
                label="Button Border Radius"
                value={designState.buttonBorderRadius}
                onChange={(value) => setDesignState({ ...designState, buttonBorderRadius: Number(value) })}
                type="number"
                suffix="px"
              />
            </div>
          </FormLayout.Group>
        </FormLayout>
        <FormLayout.Group>
          <div style={{ textAlign: "center" }}>
            <button
              className="Polaris-Button Polaris-Button--outline Polaris-Button--fullWidth"
              type="button"
              onClick={handleContinueToPlacement}
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
                <span className="Polaris-Button__Text">Continue to Placement</span>
              </span>
            </button>
          </div>
        </FormLayout.Group>
      </Card>
    </>
  );
}

export default Design;




