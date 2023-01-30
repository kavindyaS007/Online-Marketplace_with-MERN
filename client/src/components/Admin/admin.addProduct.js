import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../actions/product";

import "bootstrap/dist/css/bootstrap.min.css";

const AddProduct = () => {
  const initialProductState = {
    productName: "",
    description: "",
    category: "",
    availability: 0,
    price: 0,
  };

  const [product, setProduct] = useState(initialProductState);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const saveProduct = () => {
    const { productName, description, category, availability, price } = product;

    dispatch(
      addProduct(productName, description, category, availability, price)
    )
      .then((data) => {
        setProduct({
          productName: data.productName,
          description: data.description,
          category: data.category,
          availability: data.availability,
          price: data.price,
        });
        setSubmitted(true);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newProduct = () => {
    setProduct(initialProductState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newProduct}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              className="form-control"
              id="productName"
              required
              value={product.productName}
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
              required
              value={product.description}
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
              required
              value={product.category}
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
              required
              value={product.availability}
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
              required
              value={product.price}
              onChange={handleInputChange}
              name="price"
            />
          </div>

          <div className="form-group">
            <button onClick={saveProduct} className="btn btn-success">
                Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
