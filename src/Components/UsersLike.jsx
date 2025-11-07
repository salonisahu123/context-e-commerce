import React, { useContext } from "react";
import { ContextAPI } from "../Context/UserContext";
import { FaHeart } from "react-icons/fa";


const UsersLike = () => {
  const {like,removeFromLike } = useContext(ContextAPI);

  
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">🛒 WishList</h1>
        {
          like.map((el)=>{
          
            return  <div
            key={el.id}
            className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row items-center gap-4 border border-gray-100 mb-4"
          >
            <img
              src={el.image}
              alt={el.title}
              className="h-24 w-24 object-contain rounded-lg border"
            />
  
            <div className="flex flex-col flex-grow ">
              <h1 className="text-lg font-semibold text-gray-800">{el.title}</h1>
              <p className="text-gray-600 text-sm mt-1">Qty: {el.qty}</p>
              <p className="text-green-600 font-medium mt-1">₹{el.price}</p>
            </div>
  
            <div className="flex  flex-col gap-4 "> 
              <button className="flex items-center justify-center bg-white border border-pink-200 hover:bg-pink-50 text-red-500 hover:text-pink-600 p-2 rounded-full shadow-md transition-all duration-300">
                
                <FaHeart size={22}/>
              </button>

              
            </div>
            
          </div>
          })
        }

      </div>
    );
}

export default UsersLike