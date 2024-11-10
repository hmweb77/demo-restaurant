export default {
  name: 'food',
  type: 'document',
  title: 'Food Category',
  fields: [
    {
      name: 'category_en',
      type: 'string',
      title: 'Category (English)',
      description: 'The category of the food (e.g., Cheese Selection, Charcuterie, Petiscos) in English',
    },
    {
      name: 'category_pt',
      type: 'string',
      title: 'Category (Portuguese)',
      description: 'The category of the food (e.g., Seleção de Queijos, Charcutaria, Petiscos) in Portuguese',
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
          title: 'Food Item',
          fields: [
            {
              name: 'name_en',
              type: 'string',
              title: 'Food Name (English)',
            },
            {
              name: 'name_pt',
              type: 'string',
              title: 'Food Name (Portuguese)',
            },
          ],
        },
      ],
    },
  ],
};
