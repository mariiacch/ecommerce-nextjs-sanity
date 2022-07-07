import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Link,
  Switch,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";

import { createTheme } from "@mui/material/styles";
import Cookies from "js-cookie";
import Head from "next/head";
import NextLink from "next/link";
import { useContext } from "react";
import classes from "../utils/classes";
import { Store } from "../utils/store";

export default function Layout({ title, description, children }) {
  const { state, dispatch } = useContext(Store);
  //extraigo el darkmode de state
  const { darkMode } = state;
  //defino en la palette si darkMode es true entonces == dark y si no light
  //importo createTheme de material/styles
  const theme = createTheme({
    //para poner el underline solo al hacer hover
    components: {
      MuiLink: {
        defaultProps: {
          underline: "hover",
        },
      },
    },
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#f0c000",
      },
      secondary: {
        main: "#208080",
      },
    },
  });

  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
    const newDarkMode = !darkMode;
    //guarda en la cookie dependiendo si es off u
    Cookies.set("darkMode", newDarkMode ? "ON" : "OFF");
  };

  return (
    <>
      <Head>
        <title>{title ? `${title}- Sanity Amazona` : "Sanitu Amazona"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" sx={classes.appbar}>
          <Toolbar sx={classes.toolbar}>
            <Box display="flex" alignItems="center">
              <NextLink href="/">
                <Link>
                  <Typography sx={classes.brand}>amazona</Typography>
                </Link>
              </NextLink>
            </Box>
            <Box>
              <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
              ></Switch>
            </Box>
          </Toolbar>
        </AppBar>
        <Container sx={classes.main} component="main">
          {children}
        </Container>
        <Box sx={classes.footer} component="footer">
          <Typography> All rights reserved. Sanity Amazona</Typography>
        </Box>
      </ThemeProvider>
    </>
  );
}
