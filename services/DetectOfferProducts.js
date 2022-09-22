import axios from "axios";

export default async function DetectOfferProducts(url) {
  const req = axios.get(url);
  const res = await req;
  const data = res.data;

  let offerProductsArray = [];

  data.map(
    (product) => product.hasDiscount && offerProductsArray.push(product)
  );

  return offerProductsArray;
}
