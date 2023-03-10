const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let productSchema = new Schema({
    productName: {
        type: String
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    availability: {
        type: Number
    },
    price: {
        type: Number
    }
}, {
    collection: 'products'
})

module.exports = mongoose.model('Product', productSchema)