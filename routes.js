const express = require("express")
const Product = require("./models/Product")
const router = express.Router()

// Get all posts
router.get("/products", async (req, res) => {
	const products = await Product.find()
	res.send(products)
})

router.post("/products", async (req, res) => {
	const product = new Product({
		name: req.body.name,
		description: req.body.description,
		price: req.body.price,
		pictures: req.body.pictures,
		tags: req.body.tags,

	})
	await product.save()
	res.send(product)
})

router.get("/products/:id", async (req, res) => {
	try {
		const product = await Product.findOne({ _id: req.params.id })
		res.send(product)
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
})

router.patch("/products/:id", async (req, res) => {
	try {
		const product = await Product.findOne({ _id: req.params.id })

		if (req.body.name) {
			product.name = req.body.name
		}

		if (req.body.description) {
			product.description = req.body.description
		}

		if (req.body.price) {
			product.price = req.body.price
		}

		if (req.body.tags) {
			product.tags = req.body.tags
		}

		await product.save()
		res.send(product)
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
})

module.exports = router