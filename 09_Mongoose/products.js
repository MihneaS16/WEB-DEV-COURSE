const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log('CONNECTION OPEN!');
    })
    .catch(err => {
        console.log('ERROR!');
        console.log(e);
    });

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // this is saying that name must be there when creating a new product
        maxlength: 20
    },
    price: {
        type: Number, // this is a form of validation
        required: true,
        min: [0, "Price must be positive"]
    },
    OnSale: {
        type: Boolean,
        default: false
    },
    categories: {
        type: [String]
    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
});

productSchema.methods.greet = function () {
    console.log('HELLO!');
    console.log(`-from ${this.name}`);
}

productSchema.methods.toggleOnSale = function () {
    this.OnSale = !this.OnSale;
    return this.save(); // this is a thennable, it behaves like a Promise so we can await it somewhere else
}

productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save();
}

productSchema.statics.fireSale = function () {
    return this.updateMany({}, { OnSale: true, price: 0 });
}

const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Mountain Bike' });
    foundProduct.greet();
    await foundProduct.toggleOnSale();
    console.log(foundProduct);
    await foundProduct.addCategory('Outdoors');
    console.log(foundProduct);
}

//findProduct();

Product.fireSale().then(res => console.log(res));

// const bike = new Product({ name: 'Cycling Gloves', price: 30.50, categories: ['Cycling'] });
// bike.save()
//     .then(data => {
//         console.log('IT WORKED!');
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('ERROR!');
//         console.log(err);
//     });


// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: -50.99 }, { new: true, runValidators: true })
//     .then(data => {
//         console.log('IT WORKED!');
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('ERROR!');
//         console.log(err);
//     });