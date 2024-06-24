import React, { useContext } from 'react';
import removeIcon from '../../assets/cart_cross_icon.png';
import { ProductsContext } from '../../contextapi/ContextApi';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ProductsContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div className='cartitems mx-4 sm:mx-10 lg:mx-48 my-10'>
      <div className="grid grid-cols-12 gap-2 font-bold pt-20 items-center">
        <p className="col-span-3">Products</p>
        <p className="col-span-3">Title</p>
        <p className="col-span-2">Price</p>
        <p className="col-span-1">Quantity</p>
        <p className="col-span-2">Total</p>
        <p className="col-span-1 text-center">Remove</p>
      </div>
      <hr className="my-2 border-t-4 border-gray-300" />
      {all_product.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div key={product.id} className="grid grid-cols-12 gap-2 items-center my-4">
              <img src={product.image} alt={product.name} className="col-span-3 h-24" />
              <p className="col-span-3 font-bold">{product.name}</p>
              <p className="col-span-2 font-bold">${product.new_price}</p>
              <p className="col-span-1 font-bold">{cartItems[product.id]}</p>
              <p className="col-span-2 font-bold">${(product.new_price * cartItems[product.id])}</p>
              <img
                className="col-span-1 w-4 h-4 cursor-pointer mx-auto"
                src={removeIcon}
                onClick={() => removeFromCart(product.id)}
                alt="Remove"
              />
            </div>
          );
        }
        return null;
      })}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div>
          <h1 className="text-lg font-bold">Cart Totals</h1>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className='font-bold'>Subtotal</p>
              <p className='font-bold'>${totalAmount}</p>
              <hr className="my-2 border-t-4 border-gray-300" />
            </div>
          </div>
          <div className="grid grid-rows-2 gap-2">
            <div>
              <p className='font-bold'>Shipping Fee</p>
              <p className='font-bold'>Free</p>
              <hr className="my-2 border-t-4 border-gray-300" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Total</h3>
              <h3 className='font-bold'>${totalAmount}</h3>
            </div>
          </div>
        </div>
        <div className='mt-10 md:mt-0 md:ml-10'>
          <p className="text-sm font-bold">If you have a promo code, enter it here</p>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <input type="text" placeholder="Promo code" className="col-span-2 md:col-span-1 bg-gray-200 py-5 border border-gray-300 p-2" />
            <button className="col-span-2 md:col-span-1 bg-black text-white py-5 -ml-2 w-full md:w-auto px-4 font-bold">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
