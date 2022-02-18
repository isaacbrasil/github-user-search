import React, { useContext } from "react";
import { Container } from "./styles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";

interface Props {
  toggleTheme(): void;
}

const SwitchComponent: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  return (
    <>
      <Container>
        Hello World
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
