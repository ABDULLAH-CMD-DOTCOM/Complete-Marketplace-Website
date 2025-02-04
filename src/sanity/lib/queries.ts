import { groq } from "next-sanity"



export const allproducts = groq`
    *[_type =="car"]`;
  

    export const four  = groq`
        *[_type =="car"][0..11]`;
       
       
        