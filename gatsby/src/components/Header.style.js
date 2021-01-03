import styled from 'styled-components';

const HeaderStyles = styled.header`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  box-shadow: 1px 1px var(--purple);
  margin: 1rem 1rem 0;

  a {
    color: var(--white);
    text-shadow: 1px 1px 4px var(--darkPurple);
  }
`;

export default HeaderStyles;
