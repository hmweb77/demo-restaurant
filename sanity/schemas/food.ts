// /studio/schemaTypes/drinks.ts
export default {
    name: 'food',
    type: 'document',
    title: 'Food Category',
    fields: [
      {
        name: 'category',
        type: 'string',
        title: 'Category',
        description: 'The category of the drinks (e.g., Cheese Selection, Charcuterie, Petiscos)',
      },
      {
        name: 'sortOrder',
        type: 'number',
        title: 'Sort Order',
        description: 'The order in which this category should appear. Lower numbers appear first.',
        validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): any; new(): any; }; }; }) => Rule.required().min(1)
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
                name: 'name',
                type: 'string',
                title: 'Drink Name',
              },
              {
                name: 'price',
                type: 'string',
                title: 'Price',
              },
            ],
          },
        ],
      },
    ],
  };
  