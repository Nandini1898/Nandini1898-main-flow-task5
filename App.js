import React, { useState } from 'react';
import './App.css';

function App() {
  // Available pizzas in the store with image paths
  const pizzas = [
    { 
      id: 1, 
      name: 'Margherita', 
      price: 8.99, 
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2020/12/margherita-pizza-4.jpg' 
    },
    { 
      id: 2, 
      name: 'Pepperoni', 
      price: 9.99, 
      image: 'https://www.allrecipes.com/thmb/iXKYAl17eIEnvhLtb4WxM7wKqTc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/240376-homemade-pepperoni-pizza-Beauty-3x4-1-6ae54059c23348b3b9a703b6a3067a44.jpg' 
    },
    { 
      id: 3, 
      name: 'Vegetarian', 
      price: 10.49, 
      image: 'https://www.superhealthykids.com/wp-content/uploads/2021/10/best-veggie-pizza-featured-image-square-2.jpg' 
    },
    { 
      id: 4, 
      name: 'BBQ Chicken', 
      price: 11.49, 
      image: 'https://littlespicejar.com/wp-content/uploads/2015/08/BBQ-Chicken-Pizza-22.jpg' 
    },
  ];

  // State to store the selected pizzas
  const [selectedPizzas, setSelectedPizzas] = useState([]);
  
  // Add pizza to the cart
  const addPizzaToCart = (pizza) => {
    setSelectedPizzas([...selectedPizzas, pizza]);
  };

  // Calculate the total price
  const getTotalPrice = () => {
    return selectedPizzas.reduce((total, pizza) => total + pizza.price, 0).toFixed(2);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pizza Store</h1>
      </header>

      <div className="pizza-list">
        <h2>Available Pizzas</h2>
        <ul>
          {pizzas.map((pizza) => (
            <li key={pizza.id}>
              <div className="pizza-item">
                <img src={pizza.image} alt={pizza.name} className="pizza-image" />
                <h3>{pizza.name}</h3>
                <p>Price: ${pizza.price}</p>
                <button onClick={() => addPizzaToCart(pizza)}>Add to Cart</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="cart">
        <h2>Order Summary</h2>
        {selectedPizzas.length > 0 ? (
          <div>
            <ul>
              {selectedPizzas.map((pizza, index) => (
                <li key={index}>
                  {pizza.name} - ${pizza.price}
                </li>
              ))}
            </ul>
            <h3>Total: ${getTotalPrice()}</h3>
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}

export default App;
