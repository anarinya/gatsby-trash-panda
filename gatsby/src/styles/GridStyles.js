import styled from 'styled-components';

export const GourmandGridStyles = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
  margin: 0;
`;

export const GourmandGridItemStyles = styled.div`
  max-width: 300px;
  border-radius: 4px;
  margin: 0 2rem 2rem 2rem;

  &:last-child {
    margin-right: 0;
  }

  .gatsby-image-wrapper {
    height: 300px;
    width: 350px;
    border-radius: 4px;
    box-shadow: 2px 2px 4px var(--darkPurple);
  }

  a {
    transition: all 0.2s;
  }

  a:hover {
    transform: rotate(5deg);
    transition: all 0.3s ease-in-out 0s;
    --webkit-transform: rotate(5deg);
    color: var(--darkPurple);
  }

  .gourmand-name {
    width: auto;
    margin: 0;
    padding: 0.3rem 0.5rem;
    position: relative;
    top: -15px;
    z-index: 2;
    background-color: var(--white);
    transform: rotate(5deg);
    --webkit-transform: rotate(5deg);
    box-shadow: 1px 1px 6px var(--darkPurple);
  }

  .gourmand-occupation {
    margin: 0;
    display: inline-block;
    position: relative;
    top: -27px;
    left: 20px;
    box-shadow: 1px 1px 6px var(--darkPurple);
    background-color: var(--red);
    padding: 0.3rem 0.5rem;
  }
`;
