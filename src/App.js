import React from 'react';
import './App.css';
import { HashRouter as Router } from 'react-router-dom'
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import Container from "./modules/Container";

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: '#0e82ea' }
  }
})


export default () => {
  return (
      <Router>
        <ThemeProvider theme={theme}>
            <Container />
        </ThemeProvider>
      </Router>
  );
}

