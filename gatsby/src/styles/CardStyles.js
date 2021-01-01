import styled from 'styled-components';

export const CardListStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardStyles = styled.div`
  width: 90%;
  max-width: 800px;
  background-color: var(--white);
  margin: 2rem 0;
  padding: 0 2rem;
  border-radius: 4px;

  h2 {
    margin: 0;
  }

  .gatsby-image-wrapper {
    max-height: 200px;
    width: 100%;
    border-radius: 4px;
    box-shadow: 1px 1px 2px var(--black);
  }

  .food-title {
    margin: 0;
    display: inline-block;
    position: relative;
    top: 20px;
    left: -10px;
    background-color: var(--red);
    color: var(--white);
    padding: 0.8rem;
    text-align: center;
    z-index: 2;
  }

  .food-desc {
    margin: 2rem 0;
  }

  a:hover {
    color: var(--darkPurple);
  }
`;
