import dbConnect from "../../../lib/dbConnect";
import Products from "../../../models/products";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const products = await Products.find();
        if (!products) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: products });
      } catch (error) {
        res.status(400).send(error);
      }
      break;
    case "POST":
      try {
        const product = new Products({
          image: req.body.image,
          title: req.body.title,
          description: req.body.description,
          price: req.body.price,
          hasDiscount: req.body.hasDiscount,
          discount: req.body.discount,
          category: req.body.category,
          quantity: req.body.quantity,
          specifications: req.body.specifications,
          rating: {
            rate: req.body.rating.rate,
            count: req.body.rating.count,
          },
        });

        const checkProduct = await Products.exists({ title: product.title });
        if (checkProduct !== null) {
          const duplicateError = `Another Product With (${product.title}) Already Exists!\n Can't Save Duplicate Products.`;
          res.status(409).send(duplicateError);
        } else {
          const dataToSave = await product.save();
          const responseToSend = {
            message: "Product Saved Successfully!",
            Product: dataToSave,
          };
          res.status(200).json(responseToSend);
        }
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
  }
}
