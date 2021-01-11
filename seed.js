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
        pictures:   ["../imgs/balta-metal-bed/balta-metal-bed-1.jpg",
                    "../imgs/balta-metal-bed/balta-metal-bed-2.jpg", 
                    "../imgs/balta-metal-bed/balta-metal-bed-3.jpg"],
        tags: "bed bedroom metal contemporary classic"
    }),
    new Product({
        name: "Barn Style TV Stand",
        description: "This rustic TV stand can accomadate a variety of TVs while adding character and warmth to your livingroom.",
        price: 199.99,
        pictures:   ["../imgs/barn-tvstand/bar-tvstand-1.jpg",
                    "../imgs/barn-tvstand/bar-tvstand-2.jpg",
                    "../imgs/barn-tvstand/bar-tvstand-3.jpg",
                    "../imgs/barn-tvstand/bar-tvstand-4.jpg"],
        tags: "tv tv-stand livingroom rustic storage"
    }),
    new Product({
        name: "Comfy Bathrobe",
        description: "Float into a cloud of soft luxury.  This fluffy, if slightly frumpy robe, will make every bath or shower feel like spa day.",
        price: 79.99,
        pictures:   ["../imgs/bathrobe/bathrobe-1.jpg",
                    "../imgs/bathrobe/bathrobe-2.jpg",
                    "../imgs/bathrobe/bathrobe-3.jpg"],
        tags: "bathroom robe fluffy soft"
    }),
    new Product({
        name: "Windowed TV Stand",
        description: "Display your media collections proudly with this beautiful TV stand. Not recomended for the messy or disorganized.",
        price: 129.99,
        pictures:   ["../imgs/beige-glass-tvstand/beige-glass-tvstand-1.jpg",
                     "../imgs/beige-glass-tvstand/beige-glass-tvstand-2.jpg", 
                     "../imgs/beige-glass-tvstand/beige-glass-tvstand-3.jpg", 
                     "../imgs/beige-glass-tvstand/beige-glass-tvstand-4.jpg", 
                     "../imgs/beige-glass-tvstand/beige-glass-tvstand-5.jpg"],
        tags: "tv tv-stand livingroom contemporary storage"
    }),
    new Product({
        name: "Quilted Platform Bed",
        description: "This blue quilted bed fits a variety of styles and color palets.",
        price: 1299.99,
        pictures:   ["../imgs/blue-platform-bed/blue-platform-bed-1.jpg",
                    "../imgs/blue-platform-bed/blue-platform-bed-2.jpg",
                    "../imgs/blue-platform-bed/blue-platform-bed-3.jpg"],
        tags: "tv tv-stand livingroom contemporary storage quilted"
    }),  
    new Product({
        name: "Blue Trundle Bed",
        description: "Is it a bed? Is it a couch? It's whatever you need it to be!",
        price: 499.99,
        pictures:   ["../imgs/blue-trundle-bed/blue-trundle-bed-1.jpg",
                    "../imgs/blue-trundle-bed/blue-trundle-bed-2.jpg",
                    "../imgs/blue-trundle-bed/blue-trundle-bed-3.jpg"],
        tags: "bed bedroom livingroom storage quilted classic"
    }),
    new Product({
        name: "Rustic Trundle Bed",
        description: "Solid wood planks and minimalist design make this winner in virtually any design.",
        price: 899.99,
        pictures:   ["../imgs/brown-platform-bed/brown-platform-bed-1.jpg",
                    "../imgs/brown-platform-bed/brown-platform-bed-2.jpg",
                    "../imgs/brown-platform-bed/brown-platform-bed-3.jpg",
                    "../imgs/brown-platform-bed/brown-platform-bed-4.jpg"],
        tags: "bed bedroom wood rustic minimalist"
    }),
    new Product({
        name: "Solid Wood Storage Bed",
        description: "Solid wood planks and minimalist design make this winner in virtually any design.",
        price: 999.99,
        pictures:   ["../imgs/brown-platform-bed/brown-platform-bed-1.jpg",
                    "../imgs/brown-platform-bed/brown-platform-bed-2.jpg",
                    "../imgs/brown-platform-bed/brown-platform-bed-3.jpg",
                    "../imgs/brown-platform-bed/brown-platform-bed-4.jpg"],
        tags: "bed bedroom wood rustic minimalist storage"
    }), 
    new Product({
        name: "Canterbuy Nightstand",
        description: "The soft grey laminate wood is easy to clean and extremely durable making this perfect for familys.",
        price: 149.99,
        pictures:   ["../imgs/canterbuy-nightstand/canterbuy-nightstand-1.jpg",
                    "../imgs/canterbuy-nightstand/canterbuy-nightstand-2.jpg",
                    "../imgs/canterbuy-nightstand/canterbuy-nightstand-3.jpg"],
        tags: "bed bedroom wood rustic minimalist"
    }),
    new Product({
        name: "Embrace Towels",
        description: "Is there anything better then a soft, fluffy towel? Perhaps a bunch of soft, fluffy towels...",
        price: 49.99,
        pictures:   ["../imgs/embrace-towel/embrace-towel-1.jpg",
                    "../imgs/embrace-towel/embrace-towel-2.jpg",
                    "../imgs/embrace-towel/embrace-towel-3.jpg",
                    "../imgs/embrace-towel/embrace-towel-4.jpg",
                    "../imgs/embrace-towel/embrace-towel-5.jpg"],
        tags: "bathroom towel soft fluffy"
    }),
    new Product({
        name: "Entryway Table",
        description: "Who doesn't need a little storage by the front door? This slender table with gently curves legs is both beautiful and functional.",
        price: 99.99,
        pictures:   ["../imgs/entryway-table/entryway-table-1.jpg",
                    "../imgs/entryway-table/entryway-table-2.jpg",
                    "../imgs/entryway-table/entryway-table-3.jpg",
                    "../imgs/entryway-table/entryway-table-4.jpg"],
        tags: "table livingroom storage contemporary wood metal"
    }),
    new Product({
        name: "Gray Open TV Stand",
        description: "Display your amazing orginization skills proudly with this open TV stand.",
        price: 99.99,
        pictures:   ["../imgs/grey-open-tvstand/grey-open-tvstand-1.jpg",
                    "../imgs/grey-open-tvstand/grey-open-tvstand-2.jpg",
                    "../imgs/grey-open-tvstand/grey-open-tvstand-3.jpg",
                    "../imgs/grey-open-tvstand/grey-open-tvstand-4.jpg",
                    "../imgs/grey-open-tvstand/grey-open-tvstand-5.jpg"],
        tags: "tv tvstand livingroom storage contemporary wood"
    }),
    new Product({
        name: "Industrial Pipe Bed",
        description: "Drift off in a cloud of plumber hardware. This bed is strong, clean, and rugged.",
        price: 1099.99,
        pictures:   ["../imgs/industrial-pipe-bed/industrial-pipe-bed-1.jpg",
                    "../imgs/industrial-pipe-bed/industrial-pipe-bed-2.jpg",
                    "../imgs/industrial-pipe-bed/industrial-pipe-bed-3.jpg"],
        tags: "bed bedroom industrial modern contemporary metal"
    }),
    new Product({
        name: "Iron Bed",
        description: "Beautiful metalwork meets the bedroom.  This contemporary piece looks at home everywhere.",
        price: 1099.99,
        pictures:   ["../imgs/iron-bed/iron-bed-1.jpg",
                    "../imgs/iron-bed/iron-bed-2.jpg",
                    "../imgs/iron-bed/iron-bed-3.jpg",
                    "../imgs/iron-bed/iron-bed-4.jpg"],
        tags: "bed bedroom modern contemporary metal"
    }),
    new Product({
        name: "Ivory Fireplace",
        description: "Push button, get abmiance.  This fireplace offers the beauty of fire with the convenience of... pushing buttons.",
        price: 1699.99,
        pictures:   ["../imgs/ivory-electric-fireplace/ivory-electric-fireplace-1",
                    "../imgs/ivory-electric-fireplace/ivory-electric-fireplace-2",
                    "../imgs/ivory-electric-fireplace/ivory-electric-fireplace-3",
                    "../imgs/ivory-electric-fireplace/ivory-electric-fireplace-4"],
        tags: "fireplace fire livingroom wood storage"
    }),
    new Product({
        name: "Ivory Fireplace",
        description: "Push button, get abmiance.  This fireplace offers the beauty of fire with the convenience of... pushing buttons.",
        price: 1699.99,
        pictures:   ["../imgs/ivory-electric-fireplace/ivory-electric-fireplace-1",
                    "../imgs/ivory-electric-fireplace/ivory-electric-fireplace-2",
                    "../imgs/ivory-electric-fireplace/ivory-electric-fireplace-3",
                    "../imgs/ivory-electric-fireplace/ivory-electric-fireplace-4"],
        tags: "fireplace fire livingroom wood storage"
    }),
    new Product({
        name: "Luxurious Bathmat",
        description: "Add a splash of beauty and saftey to your bathroom.",
        price: 39.99,
        pictures:   ["../imgs/luxury-bathmat/luxury-bathmat-1.jpg",
                    "../imgs/luxury-bathmat/luxury-bathmat-2.jpg",
                    "../imgs/luxury-bathmat/luxury-bathmat-3.jpg",],
        tags: "bathmat bathroom fluffy"
    }),
    new Product({
        name: "Luxurious Bathmat",
        description: "Add a splash of beauty and saftey to your bathroom.",
        price: 39.99,
        pictures:   ["../imgs/luxury-bathmat/luxury-bathmat-1.jpg",
                    "../imgs/luxury-bathmat/luxury-bathmat-2.jpg",
                    "../imgs/luxury-bathmat/luxury-bathmat-3.jpg",],
        tags: "bathmat bathroom fluffy"
    }),
    new Product({
        name: "Metal Coffee Table",
        description: "Effortlessly at home in any decor, this table is easy to clean and strong.",
        price: 39.99,
        pictures:   ["../imgs/metal-coffee-table/metal-coffee-table-1.jpg",
                    "../imgs/metal-coffee-table/metal-coffee-table-2.jpg"],
        tags: "table livingroom storage contemporary metal"
    }),
    new Product({
        name: "Metal Coffee Table",
        description: "Effortlessly at home in any decor, this table is easy to clean and strong.",
        price: 39.99,
        pictures:   ["../imgs/metal-coffee-table/metal-coffee-table-1.jpg",
                    "../imgs/metal-coffee-table/metal-coffee-table-2.jpg"],
        tags: "table livingroom storage contemporary metal"
    }),
    new Product({
        name: "Non-skid Bathmat",
        description: "Keep from taking a tumble in shower and add a bit of color. ",
        price: 19.99,
        pictures:   ["../imgs/non-skid-bathmat/non-skid-bathmat-1.jpg"],
        tags: "bathmat bathroom saftey"
    }),
    new Product({
        name: "Owl Nightstand",
        description: "This clean and simple nightstand will hold all of your things and look good doing it.",
        price: 69.99,
        pictures:   ["../imgs/owl-nightstand/owl-nightstand-1.jpg",
                    "../imgs/owl-nightstand/owl-nightstand-2.jpg",
                    "../imgs/owl-nightstand/owl-nightstand-3.jpg",
                    "../imgs/owl-nightstand/owl-nightstand-4.jpg",],
        tags: "nightstand bedroom storage wood modern"
    }),
    new Product({
        name: "Platform Bed",
        description: "Meet the bed that does it all! Storage, lighting, fluff...its all there!",
        price: 69.99,
        pictures:   ["../imgs/platform-bed/platform-bed-1.jpg",
                    "../imgs/platform-bed/platform-bed-2.jpg",],
        tags: "bed bedroom wood modern"
    }),
    new Product({
        name: "Black Marble Coffee Table",
        description: "Stone meets wood this in beautiful and unusual coffee table.",
        price: 269.99,
        pictures:   ["../imgs/round-marble-table/round-black-marble-table-1.jpg",
                    "../imgs/round-marble-table/round-black-marble-table-2.jpg",
                    "../imgs/round-marble-table/round-black-marble-table-3.jpg",
                    "../imgs/round-marble-table/round-black-marble-table-4.jpg",],
        tags: "table livingroom stone wood"
    }),
    new Product({
        name: "Rubber Backed Bathmat",
        description: "Saftey need not be boring and bathroom floors need not be bare.",
        price: 39.99,
        pictures:   ["../imgs/rubber-backed-bathmat/rubber-backed-bathmat-1.jpg",
                    "../imgs/rubber-backed-bathmat/rubber-backed-bathmat-2.jpg",
                    "../imgs/rubber-backed-bathmat/rubber-backed-bathmat-3.jpg",
                    "../imgs/rubber-backed-bathmat/rubber-backed-bathmat-4.jpg",],
        tags: "bathmat bathroom safty fluffy"
    }),
    new Product({
        name: "Rustic Dresser",
        description: "If you daydream of cabins and bare wood then this is the dress for you!",
        price: 349.99,
        pictures:   ["../imgs/rustic-brown-dresser/rustic-brown-dresser-1.jpg"],
        tags: "dresser bedroom rustic wood"
    }),
    new Product({
        name: "Quilted Sleigh Bed",
        description: "Add a touch of class to your dreams with this beautiful quilted sleigh bed",
        price: 739.99,
        pictures:   ["../imgs/sleigh-bed/sleigh-bed-1.jpg",
                    "../imgs/sleigh-bed/sleigh-bed-2.jpg",
                    "../imgs/sleigh-bed/sleigh-bed-3.jpg",
                    "../imgs/sleigh-bed/sleigh-bed-4.jpg",],
        tags: "bed bedroom quited contemporary"
    }),
    new Product({
        name: "White Dresser",
        description: "Clean, functional, slightly Scandinavian.",
        price: 139.99,
        pictures:   ["../imgs/surface-dresser/surface-dresser-2.jpg",
                    "../imgs/surface-dresser/surface-dresser-3.jpg",
                    "../imgs/surface-dresser/surface-dresser-4.jpg"],
        tags: "dresser bedroom modern"
    }),
    new Product({
        name: "Tan Foam Mat",
        description: "Add a bit of color and foam to your bathroom and treat those feet right!",
        price: 39.99,
        pictures:   ["../imgs/tan-foam-bathmat/tan-foam-bathmat-1.jpg",
                    "../imgs/tan-foam-bathmat/tan-foam-bathmat-2.jpg",
                    "../imgs/tan-foam-bathmat/tan-foam-bathmat-3.jpg"],
        tags: "bathmat bathroom soft saftey"
    }),
    new Product({
        name: "Towels",
        description: "Add a bit of color and foam to your bathroom and treat those feet right!",
        price: 39.99,
        pictures:   ["../imgs/towels/towels-1.jpg",
                    "../imgs/towels/towels-2.jpg",],
        tags: "towel bathroom soft fluffy"
    }),
    new Product({
        name: "Platform Bed with Storage",
        description: "Eliminate under bed cleaning and add a bit a classy storage all in one fell swoop!",
        price: 739.99,
        pictures:   ["../imgs/white-storage-platform-bed/white-storage-platform-bed-1.jpg",
                    "../imgs/white-storage-platform-bed/white-storage-platform-bed-2.jpg",
                    "../imgs/white-storage-platform-bed/white-storage-platform-bed-3.jpg"],
        tags: "bed bedroom storage wood contemporary"
    }),
    new Product({
        name: "Wicker Nightstand",
        description: "Add a bit of sub-tropical decor to bedroom with this wicker nightstand! Each moring will feel like waking up next to the ocean.",
        price: 39.99,
        pictures:   ["../imgs/wicker-nightstand/wicker-nightstand-1.jpg",
                    "../imgs/wicker-nightstand/wicker-nightstand-2.jpg",
                    "../imgs/wicker-nightstand/wicker-nightstand-3.jpg"],
        tags: "nightstand bedroom storage wood"
    }),
    new Product({
        name: "Wingback Bed",
        description: "Wingback shoes are nice, wingback beds are even better. Classy quilting and a clean profile add defintion and elegance to any bedroom.",
        price: 899.99,
        pictures:   ["../imgs/wingback-bed/wingback-bed-1.jpg",
                    "../imgs/wingback-bed/wingback-bed-2.jpg",
                    "../imgs/wingback-bed/wingback-bed-3.jpg"],
        tags: "bed bedroom quilted contemporary"
    }),
    new Product({
        name: "X Nightstand",
        description: "Timberframing looks and a clean modern nightstand.",
        price: 39.99,
        pictures:   ["../imgs/x-stand-nightstand/x-stand-nightstand-1.jpg",
                    "../imgs/x-stand-nightstand/x-stand-nightstand-2.jpg",
                    "../imgs/x-stand-nightstand/x-stand-nightstand-3.jpg",
                    "../imgs/x-stand-nightstand/x-stand-nightstand-4.jpg",],
        tags: "nightstand bedroom wood contemporary"
    })




    
]

for(let i = 0; i<products.length; i++) {
    products[i].save();
}

// mongoose.disconnect();