// Frontend/Components/Design.jsx

import React, { useState } from 'react';
import {
  Page,
  Card,
  FormLayout,
  TextField,
  Select,
  ColorPicker,
  Stack,
  TextStyle
} from '@shopify/polaris';

function Design() {
  const [singleColor, setSingleColor] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState({
    hue: 120,
    brightness: 1,
    saturation: 0.7,
  });
  const [iconSize, setIconSize] = useState('32px');
  const [cornerRadius, setCornerRadius] = useState('8px');
  const [borderColor, setBorderColor] = useState('#C5C8D1');
  const [titleColor, setTitleColor] = useState('#202223');
  const [titleSize, setTitleSize] = useState('16px');
  const [subheadingColor, setSubheadingColor] = useState('#96A4B6');
  const [subheadingSize, setSubheadingSize] = useState('14px');

  const options = [
    {label: 'Minimal', value: 'minimal'},
    {label: 'Bold', value: 'bold'},
    {label: 'Classic', value: 'classic'},
  ];

  return (
  
      <Card sectioned>
        <FormLayout>
          <Select
            label="Template"
            options={options}
            value="minimal"
            onChange={() => {}}
          />

        
            <FormLayout.Group>
              <TextStyle>Background</TextStyle>
              <Stack>
                <label>
                  <input
                    type="radio"
                    checked={singleColor}
                    onChange={() => setSingleColor(true)}
                  />
                  Single Color Background
                </label>
                <label>
                  <input
                    type="radio"
                    checked={!singleColor}
                    onChange={() => setSingleColor(false)}
                  />
                  Gradient Background
                </label>
              </Stack>
              {singleColor && (
                <Stack vertical>
                  <TextStyle>Background Color</TextStyle>
                  <ColorPicker
                    onChange={setBackgroundColor}
                    color={backgroundColor}
                  />
                </Stack>
              )}
            </FormLayout.Group>

            <TextField
              label="Corner Radius"
              type="text"
              value={cornerRadius}
              onChange={setCornerRadius}
            />

            <TextField
              label="Border Color"
              type="text"
              value={borderColor}
              onChange={setBorderColor}
            />
      
       
            <TextField
              label="Icon Size"
              type="text"
              value={iconSize}
              onChange={setIconSize}
            />
        

        
            <TextField
              label="Title Size"
              type="text"
              value={titleSize}
              onChange={setTitleSize}
            />
            <TextField
              label="Title Color"
              type="text"
              value={titleColor}
              onChange={setTitleColor}
            />
            <TextField
              label="Subheading Size"
              type="text"
              value={subheadingSize}
              onChange={setSubheadingSize}
            />
            <TextField
              label="Subheading Color"
              type="text"
              value={subheadingColor}
              onChange={setSubheadingColor}
            />
    
        </FormLayout>
      </Card>

  );
}

export default Design;
