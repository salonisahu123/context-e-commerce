import React, { useContext } from "react";
import { ContextAPI } from "../Context/UserContext";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";


const Home = () => {
  const { products, cart, addToCart, decrementCart,like, userLike } = useContext(ContextAPI);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          🛍️ Our Featured Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((prod) => {

            const existingItem = cart.find((item) => item.id === prod.id);

            return (
              <div
                key={prod.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 border border-gray-100 group"
              >
                <div className="relative overflow-hidden rounded-xl mb-3">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="h-48 w-full object-contain transform group-hover:scale-105 transition duration-300"
                  />
                </div>

                <h2 className="font-semibold text-gray-800 text-lg line-clamp-2 mb-2">
                  {prod.title}
                </h2>

                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {prod.description?.substring(0, 60)}...
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold text-green-600">
                    ₹{prod.price}
                  </span>

                  {/* 🟢 Conditional Cart UI */}
                  {existingItem ? (
                    <div className="flex items-center gap-3 bg-yellow-50 shadow-sm px-4 py-2 rounded-xl border border-yellow-200">
                      <button
                        onClick={() => decrementCart(prod)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-3 py-1 rounded-lg transition-all duration-200"
                      >
                        -
                      </button>
                      <p className="text-lg font-semibold text-gray-800">
                        {existingItem.qty}
                      </p>
                      <button
                        onClick={() => addToCart(prod)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-3 py-1 rounded-lg transition-all duration-200"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => addToCart(prod)}
                      className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium rounded-lg shadow-sm transition"
                    >
                      Add to Cart
                    </button>
                  )}

                  {/*Like button */}
                 <button
                  onClick={() => userLike(prod)}
                  className={`flex items-center justify-center 
                    ${like.some((item) => item.id === prod.id)
                      ? "text-red-500 bg-red-50 border-red-300"
                      : "text-gray-400 bg-white border-pink-200 hover:text-pink-500 hover:bg-pink-50"}
                    border p-3 rounded-full shadow-md transition-all duration-300 transform 
                    ${like.some((item) => item.id === prod.id) ? "scale-110" : "scale-100"}`}>
                
                  {like.some((item) => item.id === prod.id) ? (
                    <FaHeart size={22} className="animate-pingOnce" />
                  ) : (
                    <CiHeart size={22} />
                  )}
                </button>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
