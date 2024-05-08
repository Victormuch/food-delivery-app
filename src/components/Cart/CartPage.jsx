import React from "react";

function CartPage({cart}) {
  return (
    <div>
        <h1>Cart</h1>
        <ul>
            {cart.map((food, index) =>(
                <li key={index}>{food.title}</li>
            ))}
        </ul>
    </div>
  );
}

export default CartPage;