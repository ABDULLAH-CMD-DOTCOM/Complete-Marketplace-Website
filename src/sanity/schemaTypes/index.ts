import { type SchemaTypeDefinition } from "sanity";

import car from "./cars";

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [car],
}