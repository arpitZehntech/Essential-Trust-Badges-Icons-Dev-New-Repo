// import { Card, Page, Layout, TextContainer, Text } from "@shopify/polaris";
// import { TitleBar } from "@shopify/app-bridge-react";
// import { useTranslation } from "react-i18next";

// export default function PageName() {
//   const { t } = useTranslation();
//   return (
//     <Page>
//       <TitleBar
//         title={t("PageName.title")}
//         primaryAction={{
//           content: t("PageName.primaryAction"),
//           onAction: () => console.log("Primary action"),
//         }}
//         secondaryActions={[
//           {
//             content: t("PageName.secondaryAction"),
//             onAction: () => console.log("Secondary action"),
//           },
//         ]}
//       />
//       <Layout>
//         <Layout.Section>
//           <Card sectioned>
//             <Text variant="headingMd" as="h2">
//               {t("PageName.heading")}
//             </Text>
//             <TextContainer>
//               <p>{t("PageName.body")}</p>
//             </TextContainer>
//           </Card>
//           <Card sectioned>
//             <Text variant="headingMd" as="h2">
//               {t("PageName.heading")}
//             </Text>
//             <TextContainer>
//               <p>{t("PageName.body")}</p>
//             </TextContainer>
//           </Card>
//         </Layout.Section>
//         <Layout.Section secondary>
//           <Card sectioned>
//             <Text variant="headingMd" as="h2">
//               {t("PageName.heading")}
//             </Text>
//             <TextContainer>
//               <p>{t("PageName.body")}</p>
//             </TextContainer>
//           </Card>
//         </Layout.Section>
//       </Layout>
//     </Page>
//   );
// }


import React, { useState, useCallback } from 'react';
import {
  Page,
  Card,
  Layout,
  Button,
  TextStyle,
  Stack,
  Badge,
  DisplayText,
  ButtonGroup,
} from '@shopify/polaris';

function PricingPlans() {
  const [isMonthly, setIsMonthly] = useState(true); // State to toggle between Monthly and Yearly billing

  const handleMonthlyClick = useCallback(() => setIsMonthly(true), []);
  const handleYearlyClick = useCallback(() => setIsMonthly(false), []);

  return (
    <Page
      backAction={{ content: 'Products', onAction: () => console.log('Go back') }}
      title="Pricing plans"
    >
      <Layout>
        {/* Free Plan Section */}
        <Layout.Section>
          <div style={{ paddingTop: '16px', marginBottom: '16px' }}>
            <h1 className="Polaris-Text--root Polaris-Text--headingLg">Select plan</h1>
          </div>
        </Layout.Section>

        {/* ButtonGroup for Monthly and Yearly Billing */}
        <Layout.Section>
          <div style={{ marginBottom: '16px' }}>
            <Stack alignment="center" distribution="center">
              <ButtonGroup segmented>
                <Button pressed={isMonthly} onClick={handleMonthlyClick}>
                  Billed Monthly
                </Button>
                <Button pressed={!isMonthly} onClick={handleYearlyClick}>
                  Billed Yearly - Save 20%
                </Button>
              </ButtonGroup>
            </Stack>
          </div>
        </Layout.Section>

        {/* Pricing Plans Section */}
        <Layout.Section>
          <Stack distribution="fillEvenly" spacing="loose">
            {/* Starter Plan */}
            <Card title="Starter" sectioned className="pricing-card">
              <Stack vertical>
                <TextStyle variation="strong">Up to 20 000 monthly views</TextStyle>
                <ul>
                  <li>Everything in Free</li>
                  <li>Unlimited Product page blocks</li>
                  <li>Unlimited icons in a block</li>
                  <li>Upload your own icons</li>
                </ul>
                <DisplayText size="medium">{isMonthly ? '$6.99/month' : '$67.08/year'}</DisplayText>
                <Button primary>Start FREE 7-day trial</Button>
              </Stack>
            </Card>


            {/* Essential Plan */}
            <Card title="Essential" sectioned className="pricing-card">
              
              <Stack vertical>
              <Badge status="success">Popular</Badge>
                <TextStyle variation="strong">Up to 50 000 monthly views</TextStyle>
               
                <ul>
                  <li>Everything in Starter</li>
                  <li>Unlimited cart page blocks</li>
                  <li>Adding block using product tags</li>
                  <li>Geolocation targeting</li>
                  <li>Translations</li>
                </ul>
                <DisplayText size="medium">{isMonthly ? '$9.99/month' : '$95.88/year'}</DisplayText>
                <Button primary>Start FREE 7-day trial</Button>
              </Stack>
            </Card>

            {/* Professional Plan */}
            <Card title="Professional" sectioned className="pricing-card">
              <Stack vertical>
                <TextStyle variation="strong">Unlimited views</TextStyle>
                <ul>
                  <li>Everything in Essential</li>
                  <li>All premium features</li>
                </ul>
                <DisplayText size="medium">{isMonthly ? '$29.99/month' : '$287.88/year'}</DisplayText>
                <Button primary>Start FREE 7-day trial</Button>
              </Stack>
            </Card>
          </Stack>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

export default PricingPlans;

