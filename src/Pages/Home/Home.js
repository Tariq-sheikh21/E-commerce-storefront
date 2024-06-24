// Home.js
import React, { useContext } from 'react';
import Hero from '../../components/Hero/Hero';
import Populer from '../../components/Populer/Populer';
import Offers from '../../components/Offers/Offers';
import NewCollections from '../../components/NewCollections/NewCollections';
import NewsLetter from '../../components/NewsLetters/NewsLetter';
import { ProductsContext } from '../../contextapi/ContextApi';

const Home = () => {
  const { addToCart } = useContext(ProductsContext);

  return (
    <>
      <Hero />
      <Populer addToCart={addToCart} />
      <Offers />
      <NewCollections addToCart={addToCart} />
      <NewsLetter />
    </>
  );
};

export default Home;
