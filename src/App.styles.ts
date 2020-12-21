import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
`;

export const Wrapper = styled.div`
  .CardContainer{
    width: "320px";
    height: "275px";
  }
  .buttonStyle{
    textAlign: "left";
    padding: "3px";
    margin: "3px";
  }
  .labelAlign{
    textAlign: "left" 
  }
  .imgDim{
    height="60px";
    width='100%';
  }
`;
