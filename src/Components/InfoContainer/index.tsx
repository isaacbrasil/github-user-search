import React from "react";
import styled from "styled-components";

export const InfoContainer = () => {
  return (
    <>
      <InfoContainerDiv></InfoContainerDiv>
    </>
  );
};

export const InfoContainerDiv = styled.div`
  border-radius: 12px;
  padding: 30px;
  height: 500px;
  margin-top: 50px;
  width: 100%;
  background: ${(props) => props.theme.colors.secundary};
  color: ${(props) => props.theme.colors.terciary};
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
`;
