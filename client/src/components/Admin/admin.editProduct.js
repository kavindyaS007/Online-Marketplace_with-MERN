import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../actions/product";
import ProductService from "../../services/ProductService";

import { useParams } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

const EditProduct = () => {
  const { id } = useParams();
  const initialProductState = {
    productName: "",
    description: "",
    category: "",
    availability: 0,
    price: 0,
  };

  const [currentProduct, setCurrentProduct] = useState(initialProductState);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const getProduct = (id) => {
    ProductService.get(id)
      .then((response) => {
        setCurrentProduct(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getProduct(id);
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

  const updateContent = () => {
    dispatch(updateProduct(id, currentProduct))
      .then((response) => {
        console.log(response);

        setMessage("The product was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentProduct ? (
        <div className="edit-form">
          <h4>Product</h4>
          <form>
            <div className="form-group">
              <label>Product Name</label>
              <input
                type="text"
                className="form-control"
                id="productName"
                value={currentProduct.productName}
                onChange={handleInputChange}
                name="productName"
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                type="text"
                className="form-control"
                id="description"
                value={currentProduct.description}
                onChange={handleInputChange}
                name="description"
              />
            </div>
            <div className="form-group">
              <label>Category</label>
              <input
                type="text"
                className="form-control"
                id="category"
                value={currentProduct.category}
                onChange={handleInputChange}
                name="category"
              />
            </div>
            <div className="form-group">
              <label>Availability</label>
              <input
                type="number"
                className="form-control"
                id="availability"
                value={currentProduct.availability}
                onChange={handleInputChange}
                name="availability"
              />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input
                type="number"
                className="form-control"
                id="price"
                value={currentProduct.price}
                onChange={handleInputChange}
                name="price"
              />
            </div>
          </form>
          <button
            type="submit"
            className="btn btn-info"
            onClick={updateContent}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Product...</p>
        </div>
      )}
    </div>
  );
};

export default EditProduct;
