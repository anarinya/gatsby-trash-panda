const path = require('path');

const gourmandTemplate = path.resolve('./src/templates/Gourmand.js');
const foodTemplate = path.resolve('./src/templates/FoodItem.js');

const turnGourmandsIntoPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      gourmands: allSanityGourmand {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);

  data.gourmands.nodes.forEach((gourmand) => {
    actions.createPage({
      path: `gourmand/${gourmand.slug.current}`,
      component: gourmandTemplate,
      context: {
        slug: gourmand.slug.current,
      },
    });
  });
};

const turnFoodSourcesIntoPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      foodSources: allSanityFood {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);

  data.foodSources.nodes.forEach((foodSource) => {
    actions.createPage({
      path: `food/${foodSource.slug.current}`,
      component: foodTemplate,
      context: {
        slug: foodSource.slug.current,
      },
    });
  });
};

exports.createPages = async (params) => {
  await Promise.all([
    turnGourmandsIntoPages(params),
    turnFoodSourcesIntoPages(params),
  ]);
};
