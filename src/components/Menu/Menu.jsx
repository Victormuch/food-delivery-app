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

  return (
    <div>
      <div className="card-container">
        {menu.map((food) => (
          <div className="card" key={food.id}>
            <img src={food.poster} alt={food.name}/>
            <h4>{food.title}</h4>
            <p>{food.description}</p>
            {food.food_price}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
