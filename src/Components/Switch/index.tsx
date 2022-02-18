import React, { useState, useContext } from "react";
import { Container } from "./styles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";
import { Moon } from "../../assets/Moon";
import { Sun } from "../../assets/Sun";

interface Props {
  toggleTheme(): void;
}

const SwitchComponent: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <>
      <Container>
        <Switch
          onChange={toggleTheme}
          checked={title === "dark"}
          checkedIcon={true}
          uncheckedIcon={true}
          height={10}
          width={40}
          handleDiameter={15}
          offColor={shade(0.15, colors.primary)}
          onColor={colors.secundary}
        />
      </Container>
    </>
  );
};
export default SwitchComponent;
