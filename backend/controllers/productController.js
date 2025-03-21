import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

/**
 * @desc		Get all products
 * @route		GET /api/products
 * @access	public
 */
const getProducts = asyncHandler(async (req, res) => {
  const filter = req.query.filter ? { filter: req.query.filter } : {};
  const products = await Product.find(filter);
  res.json(products);
});

/**
 * @desc		Get single product
 * @route		GET /api/products/:id
 * @access	public
 */
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

/**
 * @desc		Delete a product
 * @route		DELETE /api/products/:id
 * @access	public/admin
 */
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await Product.deleteOne(product);
    res.json({ message: "Product deleted" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

/**
 * @desc		Create a product
 * @route		POST /api/products
 * @access	public/admin
 */
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Sample product",
    price: 0,
    user: req.user._id,
    image: "/images/sample.jpg",
    brand: "Sample Brand",
    category: "Sample Category",
    filter: "unisex",
    countInStock: 0,
    numReviews: 0,
    description: "Sample description...",
    weight: 0,
    rate: 0,
    gst: 0,
    makingCharge: 0,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

/**
 * @desc		Update a product
 * @route		PUT /api/products/:id
 * @access	public/admin
 */
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    brand,
    category,
    countInStock,
    filter,
    rate,
    makingCharge,
    gst,
    weight,
  } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.filter = filter;
    product.category = category;
    product.countInStock = countInStock;
    product.rate = rate;
    product.makingCharge = makingCharge;
    product.gst = gst;
    product.weight = weight;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

/**
 * @desc		Create new review
 * @route		POST /api/products/:id/reviews
 * @access	private
 */
const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (review) => review.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error("Product already reviewed");
    }

    const review = {
      name: req.user.name,
      rating: +rating,
      comment,
      user: req.user._id,
    };
    product.reviews.push(review);
    product.numReviews = product.reviews.length;
    product.rating =
      product.reviews.reduce((acc, currVal) => currVal.rating + acc, 0) /
      product.reviews.length;

    await product.save();
    res.status(201).json({ message: "Review added" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export {
  createProduct,
  createProductReview,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
};
