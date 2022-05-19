import '@styles/globals.css'
import {ThemeProvider } from '@material-ui/core';
import theme from 'ui/themes/theme';
import head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component{...pageProps }/>
    </ThemeProvider>  
  );
}

export default MyApp
