import App from 'next/app';
import React from 'react';
import { ColorMode, ThemeProvider } from 'theme-ui';
import theme from '../theme';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <ColorMode />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
