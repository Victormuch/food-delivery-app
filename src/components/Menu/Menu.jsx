import React from "react";
import { useState, useEffect } from "react";
import "../Menu/Menu.css";

function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/food")
    .then(res => res.json())
    .then(data => setMenu(data))
    .catch(error => console.error("Error fetching menu:",error))
  }, []);
  function handlePurchase(foodName) {
    alert("Purchased" +  " "+ foodName);
  }

  return (
    <div>
      <div className="card-container">
        {menu.map((food) => (
          <div className="card" key={food.id}>
            <img src={food.poster} alt={food.name}/>
            <h4>{food.title}</h4>
            <p>{food.description}</p>
            {food.food_price}
            <h5>{food.description}</h5>
            <h2> {food.food_price}</h2>
            <button
              className="purchase-button"
              onClick={() => handlePurchase(food.title)}
            >
              Purchase
            </button>
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default Menu;
