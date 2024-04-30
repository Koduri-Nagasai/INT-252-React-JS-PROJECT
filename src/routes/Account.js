import React from "react";
import Navbar from "../components/header/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { removeWishlist } from "../components/redux/ShoppingCart";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const Account = () => {
  const { wish } = useSelector((item) => item.user);
  

  const dispatch = useDispatch();

  const handleRemoveWish = (cartItem) => {
    dispatch(removeWishlist(cartItem));
    toast.success("Item Removed!");
  };
  return (
    <>
      <Navbar />
      <div className="profile-container">
        <div className="wish-container">
        <h1 className="h1-text">Your Wishlist</h1>
        <div className="main">
        {wish.length === 0 ? (
          <div>
            <h1 className="text">No Items in Wishlist!</h1>
          </div>
        ) : (
          wish?.map((food_cart) => (
            <div className="under-container"> 
              <div className="explore-card-cover">
                <Link to={`/item/${food_cart.id}`}>
                  <img src={food_cart.image} alt={food_cart.name} className="explore-card-image"/>
                </Link>
              </div>
              <button className="cart-btn" onClick={() => handleRemoveWish(food_cart)}><i className="fa-solid fa-trash"></i></button>
              <div className="food-name">{food_cart.name}</div>
              <div className="rat-pir">
                <div className="approx-price">{food_cart.price + "₹"}</div>                  
              </div>
            </div>
          ))
        )}
        </div>
        </div>
      </div>

    </>
  );
};

export default Account;
