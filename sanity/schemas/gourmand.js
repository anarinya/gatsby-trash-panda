export default {
  name: 'gourmand',
  title: 'Gourmands',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the gourmand',
      validation: rule => rule.required().min(5),
    }, {
      name: 'occupation',
      title: 'Occupation',
      type: 'string',
      validation: rule => rule.required().min(5),
      description: 'What is the day job of this critter?'
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
    }, {
      name: 'bio',
      title: 'Bio',
      type: 'text',
      validation: rule => rule.required().min(20),
      description: 'What is the story of this critter?'
    }
  ]
}