import React, { useContext } from "react";
import { ContextAPI } from "../Context/UserContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(ContextAPI);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">🛒 Your Cart</h1>

      {cart.map((e) => (
        <div
          key={e.id}
          className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row items-center gap-4 border border-gray-100 mb-4"
        >
          <img
            src={e.image}
            alt={e.title}
            className="h-24 w-24 object-contain rounded-lg border"
          />

          <div className="flex flex-col flex-grow">
            <h1 className="text-lg font-semibold text-gray-800">{e.title}</h1>
            <p className="text-gray-600 text-sm mt-1">Qty: {e.qty}</p>
            <p className="text-green-600 font-medium mt-1"><p>Total: ₹ {e.price * e.qty}</p></p>
          </div>

          <div>
            <button onClick={()=>removeFromCart(e.id)}
             className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-sm transition-all duration-200">
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;


