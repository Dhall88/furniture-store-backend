const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const Product = require("./models/Product")
const router = express.Router();

app.use('/', router);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});



mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost:27017/products')

app.get('/', function(req,res){
	res.json({message:'You did it!'})
})

app.get('/products', function(req,res){
	console.log('get products');
	Product.find({}).then(eachOne => {
		res.json(eachOne)
	})
})

app.post('/products', function(req,res){
	Product.create({
		name: req.body.name,
		description: req.body.description,
		price: req.body.price,
		tags: req.body.tags
	}).then(product => {
		res.json(product)
	})
})

app.listen(3000);
console.log('starting app')