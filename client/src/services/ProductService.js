import http from "../http-common"

const getAll = () => {
    return http.get("/");
};

const get = id => {
    return http.get(`/${id}`);
}

const create = data => {
    return http.post("/add-product", data);
  };

const deleteProduct = id => {
    return http.delete(`/delete-product/${id}`);
};

const update = (id, data) => {
    return http.put(`/update-product/${id}`, data);
}

const ProductService = {
    getAll,
    get,
    create,
    deleteProduct,
    update
};

export default ProductService;