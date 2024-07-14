"use strict";

import withStyle from "easy-with-style";

import { RichTextarea } from "../../index";  ///

export default withStyle(RichTextarea)`

  color: white;
  width: 48rem;
  resize: none;
  height: 32rem;
  margin: 1rem;
  display: block;
  padding: 0.25rem;
  font-family: monospace;
  background-color: black;
  
  opacity: 0.5;
  
  .active {
    opacity: 1;
  }

`;
