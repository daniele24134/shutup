import { createGlobalStyle } from 'styled-components';

export const GLobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
}

body {
  line-height: 1.5;
  font-family: 'Lato', sans-serif;
}

ol, ul {
  list-style: none;
}

input[type="radio"], select, input[type="submit"] {
  cursor: pointer;
  outline: none;
}

h2 + .user_review {
  border-top: 1px solid black;
}

/* This is useful when implementing a grid system so that all image elements
will take up 100% width of their containers */
img {
  width: 100%;
  height: auto;
  display: block;
}

a {
	color: black;
	text-decoration: none;
  display: inline-block;
}


`;
