// Populer.js
import React, { useContext } from 'react';
import { ProductsContext } from '../../contextapi/ContextApi';

const Populer = () => {
  const { productsData, addToCart } = useContext(ProductsContext);
  const { data_product } = productsData;

  return (
    <div className="container mx-auto mt-10 px-4 py-8">
      <h1 className="text-center text-3xl font-bold mb-4">
        <span className="border-b-2 border-black">POPULER IN WOMEN</span>
      </h1>
      <hr />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
        {data_product.map(item => (
          <div key={item.id} className="bg-white border rounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:shadow-xl hover:scale-105 cursor-pointer">
            <img className="w-full h-auto object-cover" src={item.image} alt={item.name} />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <h6 className="text-sm text-gray-500 mb-2">{item.category}</h6>
              <p className="text-gray-600 mb-2 line-through">Old Price: ${item.old_price}</p>
              <p className="text-red-500 font-normal">New Price: ${item.new_price}</p>
              <button 
                onClick={() => addToCart(item.id)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Populer;
