import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./sections/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Categories from "./sections/Categories/Categories";
import Team from "./sections/Team/Team";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#048a52",
      },
      white: {
        main: "#ffffff",
      },
    },
    typography: {
      fontFamily: "Poppins",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <Categories />
      <Team />
    </ThemeProvider>
  );
}

export default App;
