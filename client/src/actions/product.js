import {
    ADD_PRODUCT,
    GET_PRODUCT,
    GET_ALL_PRODUCTS,
    UPDATE_PRODUCT,
    DELETE_PRODUCT
} from "./type"

import ProductService from '../services/ProductService';

export const addProduct = (productName, description, category, availability, price) => async (dispatch) => {
    try {
      const res = await ProductService.create({ productName, description, category, availability, price });
  
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

export const getProduct = () => async (dispatch) => {
    try {
      const res = await ProductService.get();
  
      dispatch({
        type: GET_PRODUCT,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

export const getAllProducts = () => async (dispatch) => {
    try {
      const res = await ProductService.getAll();
  
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await ProductService.deleteProduct(id);

    dispatch({
      type: DELETE_PRODUCT,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateProduct = (id, data) => async (dispatch) => {
  try {
    const res = await ProductService.update(id, data);

    dispatch({
      type: UPDATE_PRODUCT,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};