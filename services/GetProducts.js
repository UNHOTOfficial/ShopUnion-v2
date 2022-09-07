import axios from "axios";

export default async function GetProducts(apiUrl) {
 const req = axios.get(apiUrl)
 const res = await req
 return res.data
}
