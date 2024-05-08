import React from "react";
import { useState, useEffect } from "react";
import "../Menu/Menu.css";

function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/Victormuch/food-delivery-app/food"
    )
      .then((res) => res.json())
      .then((data) => setMenu(data))
      .catch((error) => console.error("Error fetching menu:", error));
  }, []);
  function handlePurchase(foodName) {
    alert("Orderd" +  " "+ foodName + ". " + "Enjoy your meal thank you");
  }

  return (
    <div>
      <div className="card-container">
        {menu.map((food) => (
          <div className="card" key={food.id}>
            <img src={food.poster} alt={food.name}/>
            <h4>{food.title}</h4>
            <p>{food.description}</p>
            <h2> {food.food_price}</h2>
            <button
              className="purchase-button"
              onClick={() => handlePurchase(food.title)}
            >
              Order
            </button>
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default Menu;
