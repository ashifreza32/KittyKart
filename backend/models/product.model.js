import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: Array, required: true },
    category: { type: String, required: true },
    bestseller: { type: Boolean, default: false },
    date: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  },
);

const productModel = mongoose.model("products", productSchema);

export default productModel;
