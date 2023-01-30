import {
    ADD_PRODUCT,
    GET_PRODUCT,
    GET_ALL_PRODUCTS,
    UPDATE_PRODUCT,
    DELETE_PRODUCT
} from "../actions/type"

const initialState = [];

function productReducer(products = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_PRODUCT:
            return [...products, payload];
        case GET_PRODUCT:
            return payload;
        case GET_ALL_PRODUCTS:
            return payload;

        default:
            return products;
    }
};

export default productReducer;