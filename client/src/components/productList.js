import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../actions/product";

import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./cart";

const ProductList = () => {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const [filter, setFilter] = useState("");

  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search by product name"
      />
    <div className="row">
      <table className="col-sm table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Availability</th>
            <th scope="col">Price</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {products &&
            filteredProducts.map((product) => (
              <tr>
                <td>{product.productName}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>{product.availability}</td>
                <td>{product.price}</td>
                <td>
                  <button type="button" className="btn btn-success">
                    Add to Cart
                  </button>
                </td>
              </tr>
            ))}
          {/* {products &&
            filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.productName}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>{product.availability}</td>
                <td>{product.price}</td>
                <td><button type="button" className="btn btn-success">Add to Cart</button></td>
              </tr>
            ))} */}
        </tbody>
      </table>
      <div class="col-sm-1"></div>
      <div class="col-sm-3">
        <Cart/>
      </div>
    </div>
    </div>
  );
};

export default ProductList;
