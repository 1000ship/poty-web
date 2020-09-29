import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const HeaderSpacer = styled.div`
  width: 100%;
  height: 58px;
`;

export default createGlobalStyle`
${reset}

body {
  font-family: 'Noto Sans KR', sans-serif;
  background-color: black;
  color: #EFEFEF;
}
`;
