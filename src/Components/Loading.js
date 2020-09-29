import React from "react";
import styled from "styled-components";
import { Spinner } from "reactstrap";

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  align-items: center;
`;

export default () => {
  return (
    <Container>
      <Spinner color="light" />
    </Container>
  );
};
