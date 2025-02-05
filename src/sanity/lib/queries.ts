import { groq } from "next-sanity";

export const allProducts = groq `*[_type == "product"]`;
export const four = `*[_type == "product"][0..3] {
    _id,
    title,
    description,
    price,
    productImage,
    slug
  }`;
  
