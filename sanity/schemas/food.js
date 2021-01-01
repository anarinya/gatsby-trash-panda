export default {
  name: 'food',
  title: 'Food Sources',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: rule => rule.required().min(5),
      description: 'Name of place where food is found'
    }, {
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: rule => rule.required().min(5),
      description: 'One-liner description of the place'
    }, {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: rule => rule.required().min(5),
      description: 'Full description of the food place'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: rule => rule.required(),
      options: {
        source: 'name',
        maxLength: 100
      }
    }, {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      validation: rule => rule.required(),
      options: {
        hotspot: true
      }
    }
  ]
}