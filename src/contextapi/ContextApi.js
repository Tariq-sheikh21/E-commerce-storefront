// ContextApi.js
import React, { createContext, useEffect, useState } from 'react';
import allProducts from '../assets/all_product';
import newCollections from '../assets/new_collections';
import data_product from '../assets/data';

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [productsData, setProductsData] = useState({
    allProducts: [],
    newCollections: [],
    data_product: [],
  });

  useEffect(() => {
    setProductsData({
      allProducts: allProducts,
      newCollections: newCollections,
      data_product: data_product,
    });
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (prev[itemId] > 0) {
        return { ...prev, [itemId]: prev[itemId] - 1 };
      }
      return prev;
    });
  };

  const getTotalCartAmount = () => {
    return Object.keys(cartItems).reduce((total, itemId) => {
      const item = productsData.allProducts.find(product => product.id === Number(itemId));
      return total + (item ? item.new_price * cartItems[itemId] : 0);
    }, 0);
  };

  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((total, count) => total + count, 0);
  };

  return (
    <ProductsContext.Provider
      value={{
        cartItems,
        productsData,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartItems,
        all_product: productsData.allProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };

