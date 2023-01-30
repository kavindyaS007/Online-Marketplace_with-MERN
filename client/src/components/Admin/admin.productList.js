import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, deleteProduct } from "../../actions/product";

import "bootstrap/dist/css/bootstrap.min.css";

const AdminProductList = () => {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  });

  const removeProduct = (id) => {
    dispatch(deleteProduct(id))
      .then(() => {
        console.log("deleted");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <Link className="btn btn-outline-info" to={"/admin/add-product"}>
        Add Product
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Availability</th>
            <th scope="col">Price</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product) => (
              <tr>
                <td>{product.productName}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>{product.availability}</td>
                <td>{product.price}</td>
                <td>
                  <Link
                    to={"/admin/edit-product/" + product._id}
                    className="btn btn-warning"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => removeProduct(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProductList;
