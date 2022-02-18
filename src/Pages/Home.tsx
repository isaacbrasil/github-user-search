import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import SwitchComponent from "../Components/Switch";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import { Search } from "../assets/Search";
import { InfoContainer } from "../Components/InfoContainer";

function Home() {
  const [theme, setTheme] = useState(light);
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <PageContainer>
          <PageContainer2>
            <Header>
              devfinder
              <SwitchComponent toggleTheme={toggleTheme}></SwitchComponent>
            </Header>
            <SearchInputContainer>
              <SearchContainer>
                <Search />
              </SearchContainer>
              <SearchInput>
                <input
                  type="text"
                  placeholder="Search Github Username..."
                ></input>
              </SearchInput>
              <SearchButtonContainer>
                <SearchButtonBox>Search</SearchButtonBox>
              </SearchButtonContainer>
            </SearchInputContainer>
            <InfoContainer />
          </PageContainer2>
        </PageContainer>
      </div>
    </ThemeProvider>
  );
}

export default Home;

export const PageContainer = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const PageContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 25px;
  color: ${(props) => props.theme.colors.terciary};
`;

export const SearchButtonBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.search};
  color: ${(props) => props.theme.colors.text};
  padding: 20px;
  height: 60px;
  border-radius: 12px;
`;
export const SearchButtonContainer = styled.div`
  background: ${(props) => props.theme.colors.secundary};
  height: 69px;
  border-radius: 0 15px 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
`;
export const SearchContainer = styled.div`
  cursor: pointer;

  background: ${(props) => props.theme.colors.secundary};
  height: 69px;
  border-radius: 15px 0 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
`;

export const SearchInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.div`
  color: ${(props) => props.theme.colors.terciary};

  input {
    border: none;
    outline: none;
    width: 730px;
    height: 69px;
    background: ${(props) => props.theme.colors.secundary};
    box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  }
`;
