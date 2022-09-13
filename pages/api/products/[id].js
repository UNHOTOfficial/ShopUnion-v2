import dbConnect from "../../../lib/dbConnect";
import Products from "../../../models/Products";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET" /* Get Product By ID */:
      try {
        const product = await Products.findById(id);
        if (!product) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: product });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PATCH" /* Edit Product By ID */:
      try {
        const product = await Products.findById(id);
        if (!product) {
          return res
            .status(400)
            .json({ success: false, error: "Product Not Found." });
        } else {
          product.image = req.body.image;
          product.title = req.body.title;
          product.description = req.body.description;
          product.price = req.body.price;
          product.hasDiscount = req.body.hasDiscount;
          product.discount = req.body.discount;
          product.category = req.body.category;
          product.quantity = req.body.quantity;
          product.category = req.body.category;
          product.specifications = req.body.specifications;
          product.rating.rate = req.body.rating.rate;
          product.rating.count = req.body.rating.count;
          product.updateDate = Date.now();

          const dataToSave = await product.save();
          return res.status(200).json({
            success: true,
            message: "Product Updated Successfully!",
            Product: dataToSave,
          });
        }
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    case "DELETE" /* Edit Product By ID */:
      try {
        const product = await Products.findByIdAndDelete(id);
        if (!product) {
          return res
            .status(400)
            .json({ success: false, message: "Product Not Found." });
        }
        res.status(200).json({
          success: true,
          message: "Product Deleted Successfully.",
          product,
        });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
  }
}