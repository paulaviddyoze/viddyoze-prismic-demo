import css from 'styled-jsx/css';

export const menuStyles = css.global`
  .main-menu {
    max-width: 700px;
    margin: 0 auto;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    text-align: center;
  }
  .main-menu ul {
    display: flex;
    justify-content: center;
  }
  .main-menu ul li {
    margin: 0 0.5em;
  }
  .main-menu ul li a {
    transition: color 0.3s;
  }
  .main-menu ul li a:hover {
    color: red;
  }
`;
