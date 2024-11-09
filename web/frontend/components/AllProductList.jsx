// import { useState, useEffect } from "react";
// import { Card, Stack } from "@shopify/polaris";
// import { useTranslation } from "react-i18next";
// import { useAuthenticatedFetch } from "../hooks";

// function ProductCardList({ onSelectProduct }) {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const fetch = useAuthenticatedFetch();
//   const { t } = useTranslation();

//   // Fetch products from the Shopify API
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("/api/productslist"); // Adjust the API route if necessary
//         const data = await response.json();
//         setProducts(data.products || []);
//         // Immediately log the total count after fetching
//         console.log('Total products fetched:', data.products.length);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [fetch]);

//   // Call the selection function with products when called
//   const handleSelectProducts = () => {
//     onSelectProduct(products); // Pass the selected products back to the parent
//     console.log('Total products selected:', products.length); // Log the count
//   };

//   useEffect(() => {
//     // If products are fetched, call handleSelectProducts
//     if (!loading && products.length > 0) {
//       handleSelectProducts();
//     }
//   }, [loading, products]);

//   return null; // No UI to display, but products are handled in the logic above
// }

// export default ProductCardList;

import { useState, useEffect } from "react";
import { Card, Stack } from "@shopify/polaris";
import { useTranslation } from "react-i18next";
import { useAuthenticatedFetch } from "../hooks";

function ProductCardList({ onSelectProduct }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetch = useAuthenticatedFetch();
  const { t } = useTranslation();

  // Fetch products from the Shopify API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/productslist"); // Adjust the API route if necessary
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data.products || []);
        console.log('Total products fetched:', data.products.length);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Call the selection function with products when called
  const handleSelectProducts = () => {
    if (products.length > 0) {
      onSelectProduct(products); // Pass the selected products back to the parent
      console.log('Total products selected:', products.length); // Log the count
    }
  };

  useEffect(() => {
    // If products are fetched and loading is false, call handleSelectProducts
    if (!loading) {
      handleSelectProducts();
    }
  }, [loading, products]);

  return null; // No UI to display, but products are handled in the logic above
}

export default ProductCardList;
