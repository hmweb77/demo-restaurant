import { type SchemaTypeDefinition } from 'sanity'

import drink from './schemas/drinks'
import food from './schemas/food'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ drink,food],
}
