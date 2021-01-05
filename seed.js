const Product = require('./models/Product');
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/products')

// Product.remove({}, err => {
//     if(err) console.log(err)
// });

const products = [
    new Product({
        name: "Balta Bed",
        description: "Clean and Classic. This fullsized bed fits beautifully into any decor.",
        price: 799.99,
        pictures: ["../imgs/balta-metal-bed/balta-metal-bed-1.jpg","../imgs/balta-metal-bed/balta-metal-bed-2.jpg", "../imgs/balta-metal-bed/balta-metal-bed-3.jpg"],
        tags: "bed bedroom metal contemporary classic"
    }),
    new Product({
        name: "Barn Style TV Stand",
        description: "This rustic TV stand can accomadate a variety of TVs while adding character and warmth to your livingroom.",
        price: 199.99,
        pictures: ["../imgs/barn-tvstand/bar-tvstand-1.jpg","../imgs/barn-tvstand/bar-tvstand-2.jpg","../imgs/barn-tvstand/bar-tvstand-3.jpg","../imgs/barn-tvstand/bar-tvstand-4.jpg"],
        tags: "tv tv-stand livingroom rustic storage"
    }),
    new Product({
        name: "Comfy Bathrobe",
        description: "Float into a cloud of soft luxury.  This fluffy, if slightly frumpy robe, will make every bath or shower feel like spa day.",
        price: 79.99,
        pictures: ["../imgs/bathrobe/bathrobe-1.jpg","../imgs/bathrobe/bathrobe-2.jpg","../imgs/bathrobe/bathrobe-3.jpg"],
        tags: "bathroom robe fluffy soft"
    }),
    new Product({
        name: "Windowed TV Stand",
        description: "Display your media collections proudly with this beautiful TV stand. Not recomended for the messy or disorganized.",
        price: 129.99,
        pictures: ["../imgs/beige-glass-tvstand/beige-glass-tvstand-1.jpg", "../imgs/beige-glass-tvstand/beige-glass-tvstand-2.jpg", "../imgs/beige-glass-tvstand/beige-glass-tvstand-3.jpg", "../imgs/beige-glass-tvstand/beige-glass-tvstand-4.jpg", "../imgs/beige-glass-tvstand/beige-glass-tvstand-5.jpg"],
        tags: "tv tv-stand livingroom contemporary storage"
    }),
    new Product({
        name: "Quilted Platform Bed",
        description: "This blue quilted bed fits a variety of styles and color palets.",
        price: 1299.99,
        pictures: ["../imgs/blue-platform-bed/blue-platform-bed-1.jpg","../imgs/blue-platform-bed/blue-platform-bed-2.jpg","../imgs/blue-platform-bed/blue-platform-bed-3.jpg"],
        tags: "tv tv-stand livingroom contemporary storage quilted"
    }),  
    new Product({
        name: "Blue Trundle Bed",
        description: "Is it a bed? Is it a couch? It's whatever you need it to be!",
        price: 499.99,
        pictures: ["../imgs/blue-trundle-bed/blue-trundle-bed-1.jpg","../imgs/blue-trundle-bed/blue-trundle-bed-2.jpg","../imgs/blue-trundle-bed/blue-trundle-bed-3.jpg"],
        tags: "bed bedroom livingroom storage quilted classic"
    }),
    new Product({
        name: "Rustic Trundle Bed",
        description: "Solid wood planks and minimalist design make this winner in virtually any design.",
        price: 899.99,
        pictures: ["../imgs/brown-platform-bed/brown-platform-bed-1.jpg","../imgs/brown-platform-bed/brown-platform-bed-2.jpg","../imgs/brown-platform-bed/brown-platform-bed-3.jpg","../imgs/brown-platform-bed/brown-platform-bed-4.jpg"],
        tags: "bed bedroom wood rustic minimalist"
    }),
    new Product({
        name: "Solid Wood Storage Bed",
        description: "Solid wood planks and minimalist design make this winner in virtually any design.",
        price: 999.99,
        pictures: ["../imgs/brown-platform-bed/brown-platform-bed-1.jpg","../imgs/brown-platform-bed/brown-platform-bed-2.jpg","../imgs/brown-platform-bed/brown-platform-bed-3.jpg","../imgs/brown-platform-bed/brown-platform-bed-4.jpg"],
        tags: "bed bedroom wood rustic minimalist storage"
    }), 
    new Product({
        name: "Canterbuy Nightstand",
        description: "The soft grey laminate wood is easy to clean and extremely durable making this perfect for familys.",
        price: 149.99,
        pictures: ["../imgs/canterbuy-nightstand/canterbuy-nightstand-1.jpg","../imgs/canterbuy-nightstand/canterbuy-nightstand-2.jpg","../imgs/canterbuy-nightstand/canterbuy-nightstand-3.jpg"],
        tags: "bed bedroom wood rustic minimalist"
    }),
    new Product({
        name: "Embrace Towels",
        description: "Is there anything better then a soft, fluffy towel? Perhaps a bunch of soft, fluffy towels...",
        price: 49.99,
        pictures: ["../imgs/embrace-towel/embrace-towel-1.jpg","../imgs/embrace-towel/embrace-towel-2.jpg","../imgs/embrace-towel/embrace-towel-3.jpg","../imgs/embrace-towel/embrace-towel-4.jpg","../imgs/embrace-towel/embrace-towel-5.jpg"],
        tags: "bathroom towel soft fluffy"
    }),
    new Product({
        name: "Entryway Table",
        description: "Who doesn't need a little storage by the front door? This slender table with gently curves legs is both beautiful and functional.",
        price: 99.99,
        pictures: ["../imgs/entryway-table/entryway-table-1.jpg","../imgs/entryway-table/entryway-table-2.jpg","../imgs/entryway-table/entryway-table-3.jpg","../imgs/entryway-table/entryway-table-4.jpg",],
        tags: "table livingroom storage contemporary wood metal"
    }),
    
]

// for(let i = 0; i<products.length; i++) {
//     products[i].save();
// }

// mongoose.disconnect();