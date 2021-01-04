/* eslint-disable react/prop-types */
import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import PageContainer from '../components/PageContainer';

const FoodItemPageStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  h2 {
    margin: 2rem 0 0.8rem;
    color: var(--white);
    display: inline-block;
    padding: 0.3rem 0.5rem;
    background-color: var(--darkPurple);
  }

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
`;

const FoodReviewListStyles = styled.ul`
  list-style-type: none;
  margin: 0;

  .review-detail {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 2rem 0;
  }

  .review-header {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .gatsby-image-wrapper {
    width: 50px;
    height: 50px;
    margin: 0 1rem 1rem 0;
  }

  .review-content {
    line-height: 1.5rem;
  }
`;

const FoodItemPage = ({ data: { foodSource, reviews } }) => (
  <div>
    <SEO title={foodSource.name} />
    <SectionHeader title={foodSource.name} subtitle={foodSource.headline} />
    <PageContainer>
      <FoodItemPageStyles>
        <Img fluid={foodSource.photo.asset.fluid} alt="food source" />
        <div className="content">
          <div>
            <h2>Description</h2>
          </div>
          <span className="bio">{foodSource.description}</span>
        </div>
        <div className="content">
          <h2>Reviews</h2>
          <FoodReviewListStyles>
            {reviews.nodes.map((review) => (
              <li key={review.id}>
                <div className="review-detail">
                  <div className="review-header">
                    <span className="img-container">
                      <Img
                        fluid={review.author.photo.asset.fluid}
                        alt="author"
                      />
                    </span>
                    <h3>{review.title}</h3>
                  </div>
                  <span className="review-content">
                    {review.content}
                    <br />
                    <b>- {review.author.name}</b>
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
