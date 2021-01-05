const Product = require('./models/Product');
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/products')

Product.remove({}, err => {
    if(err) console.log(err)
});

// const products = [
//     new Product({
//         name: "Balta Bed",
//         description: "Clean and Classic. This fullsized bed fits beautifully into any decor.",
//         price: 799.99,
//         pictures: ["../imgs/balta-metal-bed/balta-metal-bed-1.jpg","../imgs/balta-metal-bed/balta-metal-bed-2.jpg", "../imgs/balta-metal-bed/balta-metal-bed-3.jpg"],
//         tags: "bed bedroom metal contemporary classic"
//     }),
//     new Product({
//         name: "Barn Style TV Stand",
//         description: "This rustic TV stand can accomadate a variety of TVs while adding character and warmth to your livingroom.",
//         price: 199.99,
//         pictures: ["../imgs/barn-tvstand/bar-tvstand-1.jpg","../imgs/barn-tvstand/bar-tvstand-2.jpg","../imgs/barn-tvstand/bar-tvstand-3.jpg","../imgs/barn-tvstand/bar-tvstand-4.jpg"],
//         tags: "tv tv-stand livingroom rustic storage"
//     }),
//     new Product({
//         name: "Comfy Bathrobe",
//         description: "Float into a cloud of soft luxury.  This fluffy, if slightly frumpy robe, will make every bath or shower feel like spa day.",
//         price: 79.99,
//         pictures: ["../imgs/bathrobe/bathrobe-1.jpg","../imgs/bathrobe/bathrobe-2.jpg","../imgs/bathrobe/bathrobe-3.jpg"],
//         tags: "bathroom robe fluffy soft"
//     }),
//     new Product({
//         name: "Windowed TV Stand",
//         description: "Display your media collections proudly with this beautiful TV stand. Not recomended for the messy or disorganized.",
//         price: 129.99,
//         pictures: ["../imgs/beige-glass-tvstand/beige-glass-tvstand-1.jpg", "../imgs/beige-glass-tvstand/beige-glass-tvstand-2.jpg", "../imgs/beige-glass-tvstand/beige-glass-tvstand-3.jpg", "../imgs/beige-glass-tvstand/beige-glass-tvstand-4.jpg", "../imgs/beige-glass-tvstand/beige-glass-tvstand-5.jpg"],
//         tags: "tv tv-stand livingroom contemporary storage"
//     }),
//     new Product({
//         name: "Quilted Platform Bed",
//         description: "This blue quilted bed fits a variety of styles and color palets.",
//         price: 1299.99,
//         pictures: ["../imgs/blue-platform-bed/blue-platform-bed-1.jpg","../imgs/blue-platform-bed/blue-platform-bed-2.jpg","../imgs/blue-platform-bed/blue-platform-bed-3.jpg"],
//         tags: "tv tv-stand livingroom contemporary storage"
//     })  
// ]

// for(let i = 0; i<products.length; i++) {
//     products[i].save();
// }

// mongoose.disconnect();