/* eslint-disable react/prop-types */
import React from 'react';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import SectionHeader from '../components/SectionHeader';
import PageContainer from '../components/PageContainer';

const FoodItemPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .gatsby-image-wrapper {
    width: 100%;
    max-height: 500px;
    margin: 0 auto;
    border-radius: 4px;
    box-shadow: 0.5px 0.5px 1px var(--black);
  }

  .bio {
    line-height: 1.8rem;
  }

  .content {
    align-self: flex-start;
    margin-top: 2rem;
  }

  .author-name {
    display: inline-block;
    position: relative;
    left: 35px;
    top: 110px;
    background-color: var(--red);
    color: var(--white);
    padding: 0.5rem;
    margin: 0;
    z-index: 2;
    box-shadow: 1px 1px 6px var(--black);
  }
`;

const FoodReviewListStyles = styled.ul`
  list-style-type: none;
  padding: 0;

  .review-detail {
    display: flex;
    flex-direction: row;
    margin: 2rem 0;
  }

  .gatsby-image-wrapper {
    width: 100px;
    height: 100px;
  }

  .review-content {
    margin-left: 2rem;
    line-height: 1.5rem;
  }
`;

const FoodItemPage = ({ data: { foodSource, reviews } }) => (
  <div>
    <SectionHeader title={foodSource.name} subtitle={foodSource.headline} />
    <PageContainer>
      <FoodItemPageStyles>
        <Img fluid={foodSource.photo.asset.fluid} alt="food source" />
        <div className="content">
          <h1>Description</h1>
          <span className="bio">{foodSource.description}</span>
        </div>
        <div className="content">
          <h1>Reviews</h1>
          <FoodReviewListStyles>
            {reviews.nodes.map((review) => (
              <li key={review.id}>
                <div className="review-detail">
                  <span className="img-container">
                    <Img fluid={review.author.photo.asset.fluid} alt="author" />
                  </span>
                  <span className="review-content">
                    <h3>{review.title}</h3>
                    {review.content} - <b>{review.author.name}</b>
                  </span>
                </div>
              </li>
            ))}
          </FoodReviewListStyles>
        </div>
      </FoodItemPageStyles>
    </PageContainer>
  </div>
);

export const query = graphql`
  query FoodSourceQuery($slug: String!) {
    foodSource: sanityFood(slug: { current: { eq: $slug } }) {
      name
      id
      headline
      description
      photo {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
    reviews: allSanityReview(
      filter: { food: { slug: { current: { eq: $slug } } } }
    ) {
      nodes {
        title
        author {
          name
          slug {
            current
          }
          photo {
            asset {
              fluid(maxWidth: 200) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
        rating
        content
        id
      }
    }
  }
`;

export default FoodItemPage;
