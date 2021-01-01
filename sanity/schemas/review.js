export default {
  name: 'review',
  title: 'Reviews',
  type: 'document',
  fields: [
    {
      name: 'food',
      title: 'Food Source',
      type: 'reference',
      to: [{ type: 'food' }],
      validation: rule => rule.required(),
      description: 'Food source the review is for'
    }, {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'gourmand' }],
      validation: rule => rule.required(),
      description: 'Author of the review'
    }, {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      options: {
        list: [1, 2, 3, 4, 5]
      },
      description: 'Rating between 1 to 5. 5 is best!'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: rule => rule.required().min(5).max(30),
      description: 'One-line summary of the review'
    }, {
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: rule => rule.required().min(5),
      description: 'Full contents of the review'
    }, {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: rule => rule.required(),
      options: {
        dateFormat: 'MMM Do, YYYY',
        calendarTodayLabel: 'Today'
      }
    }
  ],
  preview: {
    select: {
      foodSource: 'food.name',
      author: 'author.name',
      date: 'date',
      title: 'title'
    },
    prepare: ({ foodSource, date, title, author }) => {
      return {
        title: `${foodSource} | ${title}`,
        subtitle: `By ${author} on ${date}`
      }
    }
  }
}