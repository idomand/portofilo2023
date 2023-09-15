import React from "react";
import styled from "styled-components";
import Section1 from "../Components/Section1";
import Section2 from "../Components/Section2";

const MainWrapper = styled.main`
  max-width: 900px;
  margin: auto;
`;

export default function Home() {
  return (
    <MainWrapper>
      <Section1 />
      <Section2 />
    </MainWrapper>
  );
}
