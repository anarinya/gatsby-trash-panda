import styled from 'styled-components';

const NavStyles = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 1rem 0;

  li {
    color: var(--white);
    margin: 0;
    margin-right: 2rem;
  }

  a:hover {
    color: var(--red);
    border-top: 2px solid;
    border-bottom: 2px solid;
    padding: 5px 0;
  }

  a:active {
    color: var(--red);
  }

  li:last-child {
    margin-right: 0;
  }
`;

export default NavStyles;
