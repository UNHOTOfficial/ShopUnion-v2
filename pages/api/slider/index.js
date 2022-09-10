import dbConnect from "../../../lib/dbConnect";
import Slider from "../../../models/Slider";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const sliders = await Slider.find();

        if (!sliders) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: sliders });
      } catch (error) {
        res.status(400).send(error);
      }

      break;

    case "POST":
      try {
        const slider = new Slider({
          title: req.body.title,
          url: req.body.url,
        });

        const checkSlider = await Slider.exists({ title: slider.title });
        if (checkSlider !== null) {
          const duplicateError = `Another Slider With (${slider.title}) Already Exists!\n Can't Save Duplicate Sliders.`;
          res.status(409).send(duplicateError);
        } else {
          const dataToSave = await slider.save();
          const responseToSend = {
            message: "Slider Saved Successfully!",
            Product: dataToSave,
          };
          res.status(200).json(responseToSend);
        }
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
      break;
  }
}
