export default {
  name: 'drinks',
  type: 'document',
  title: 'Drinks Category',
  fields: [
    {
      name: 'category_en',
      type: 'string',
      title: 'Category (English)',
      description: 'The category of the drinks (e.g., Red Wines, White Wines, Spirits) in English',
    },
    {
      name: 'category_pt',
      type: 'string',
      title: 'Category (Portuguese)',
      description: 'The category of the drinks (e.g., Vinhos Tintos, Vinhos Brancos, Bebidas Espirituosas) in Portuguese',
    },
    {
      name: 'sortOrder',
      type: 'number',
      title: 'Sort Order',
      description: 'The order in which this category should appear. Lower numbers appear first.',
      validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): any; new(): any; }; }; }) => Rule.required().min(1),
    },
    {
      name: 'items',
      type: 'array',
      title: 'Items',
      of: [
        {
          type: 'object',
          title: 'Drink Item',
          fields: [
            {
              name: 'name_en',
              type: 'string',
              title: 'Drink Name (English)',
            },
            {
              name: 'name_pt',
              type: 'string',
              title: 'Drink Name (Portuguese)',
            },
          ],
        },
      ],
    },
  ],
};
