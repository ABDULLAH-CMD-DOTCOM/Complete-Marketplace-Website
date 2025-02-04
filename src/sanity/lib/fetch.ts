import { createClient } from "next-sanity";


const client = createClient({
    projectId: "4xqi1vn8",
    dataset: "production",
    token: "skmhCfeZNQ4NZzDEp8Px1PuzuraUwrGrU0y90kkYpztvFFtuBfG9R0KEI4DJtrb5HYfStASPU19QF8YPYeTq6y2FUUNrnwhJT34me96odkPeunofbLlaIrgyi0tdS30QOeNOmUfpeCRF6kDRoE6xXztjgvCK8xBXi19bnrPSkkJwHnCeNQPq",
    useCdn: true,
    apiVersion: "2023-10-10"
     // Use CDN for improved performance, but this will slow down your development environment
})
 export async function sanityFetch({query, params ={}}: {query : string ,params?: any}){
    return await client.fetch(query, params);
 }
