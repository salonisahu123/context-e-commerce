
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { jsx } from "react/jsx-runtime";

export const ContextAPI = createContext(null);

export const UserProvider = ({ children }) => {
  const [products, setProducts] = useState([]); //API call
  const [cart, setCart] = useState(()=>{
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  }) // Add to cart

   useEffect(()=>{
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart]);


  const [like, setLike] = useState(()=>{
    const saveLikes = localStorage.getItem("like");
    return saveLikes ? JSON.parse(saveLikes) : []
  }) // Users Like

 useEffect(()=>{
  localStorage.setItem("like", JSON.stringify(like))
 }, [like])

  const fetchAPI = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      console.log(res)
      setProducts(res.data);
    } catch (err) {
      console.error("fetch error:", err);

    } 
   
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  //Add to cart
  const addToCart = (product)=>{
    setCart(()=>{
         const exist = cart.find((item) => item.id === product.id);
      if (exist) {
        return cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...cart, { ...product, qty: 1 }];
      }
        })
        // alert("Item added to cart")
  }

   const decrementCart = (product) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0) // remove if qty = 0
    );
  };


  
  const removeFromCart  = (id)=>{
    setCart((cart)=> cart.filter((e) =>e.id !==id))
  
        // alert("Item remove From cart")
  }
  
    //User Like

    const userLike = (elem)=>{
       setLike((li)=>{
        const isLiked = li.some((item)=> item.id === elem.id)

        if (isLiked) {
          return li.filter((item)=>item.id !== elem.id )  
        }else{
          
          
          return [...li, elem]
        }
       })     
    }
const removeFromLike = (id) => {
  setLike((prevLikes) => prevLikes.filter((item) => item.id !== id));
};


  return (
    <ContextAPI.Provider value={{ products, setProducts, addToCart, cart, removeFromCart, userLike, like, removeFromLike, decrementCart }}>
      {children}
    </ContextAPI.Provider>
  );
};
