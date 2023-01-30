import React, { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotalCost(totalCost + product.price);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((p) => p._id !== productId));
    setTotalCost(totalCost - cart.find((p) => p._id === productId).price);
  };

  return (
    <div>
      <h4>Cart</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => removeFromCart(product._id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total Cost: {totalCost}</p>
    </div>
  );
};

export default Cart;
