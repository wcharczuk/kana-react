import * as React from 'react';
import './App.css';

import { theme, ThemeProvider, useColorMode, ColorModeProvider } from "@chakra-ui/core";
import { Box, Heading, Flex, Text, Button } from "@chakra-ui/core";

const kanaTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: { // WCTODO: change these later
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
};

class MenuItem extends React.Component<{}, {}> {
  render() {
    return (
      <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
        {this.props.children}
      </Text>
    )
  }
}

class Nav extends React.Component<{}, {}> {
  render() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>Kana</Heading>
        </Flex>

        <Box display={{ sm: "block", md: "flex" }}
          width={{ sm: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}>
          <MenuItem>Quiz</MenuItem>
          <MenuItem>Stats</MenuItem>
        </Box>

        <Box
          display={{ sm: "none", md: "block" }}
          mt={{ base: 4, md: 0 }}
        >
          <Button size="sm" onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </Button>
        </Box>

      </Flex>
    )
  }
}

class App extends React.Component<{}, {}> {
  render() {

    return (
      <ThemeProvider theme={kanaTheme}>
        <ColorModeProvider>
          <Nav></Nav>
          {this.props.children}
        </ColorModeProvider>
      </ThemeProvider >
    );
  }
}

export default App;
