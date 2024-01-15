const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name cannot be blank']
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        enum: ['fruits', 'vegetables', 'dairy'],
        lowercase: true
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;