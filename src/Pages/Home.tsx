import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import SwitchComponent from "../Components/Switch";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import { Search } from "../assets/Search";

function Home() {
  const [theme, setTheme] = useState(light);
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <SwitchComponent toggleTheme={toggleTheme}></SwitchComponent>
        <SearchInputContainer>
          <SearchContainer>
            <Search />
          </SearchContainer>
          <SearchInput>
            <input type="text" placeholder="Search Github Username..."></input>
          </SearchInput>
          <SearchButtonContainer></SearchButtonContainer>
        </SearchInputContainer>
      </div>
    </ThemeProvider>
  );
}

export default Home;

export const SearchButtonContainer = styled.div`
  background: ${(props) => props.theme.colors.secundary};
  height: 69px;
  border-radius: 0 15px 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  button {
    background: blue;
  }
`;
export const SearchContainer = styled.div`
  background: ${(props) => props.theme.colors.secundary};
  height: 69px;
  border-radius: 15px 0 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const SearchInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SearchInput = styled.div`
  input {
    border: none;
    outline: none;
    width: 730px;
    height: 69px;
    background: ${(props) => props.theme.colors.secundary};
    box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  }
`;
