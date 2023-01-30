import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import ProductList from "./components/productList";
import AdminProductList from './components/Admin/admin.productList';
import AddProduct from './components/Admin/admin.addProduct';
import EditProduct from './components/Admin/admin.editProduct';
import Login from './components/Admin/Login';
import Register from './components/Admin/Register';
import Cart from './components/cart';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark justify-content-center">
        <a href="/" className="navbar-brand">
          Online - Marketplace
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={'/products'} className="nav-link">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to={'/vendors/login'} className="nav-link">
              Login
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path='/products' element={<ProductList/>} />

          <Route path='/vendors/login' element={<Login/>} />
          <Route path='/vendors/register' element={<Register/>} />

          <Route path='/admin' element={<AdminProductList/>} />
          <Route path='/admin/add-product' element={<AddProduct/>} />
          <Route path='/admin/edit-product/:id' element={<EditProduct/>} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;