import dbConnect from "../../lib/dbConnect";
import Products from "../../models/products";
export default async function handler(req, res) {
  await dbConnect();
  const products = await Products.find();
  res.status(200).json({ data: products });
}
