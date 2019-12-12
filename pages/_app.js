import { Global } from '@emotion/core';
import { theme } from '@theme';
import { ThemeProvider } from 'emotion-theming';
import App from 'next/app';
import React from 'react';
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Global
          styles={_theme => ({
            body: {
              margin: 0,
              padding: 0,
              boxSizing: 'border-box',
            },
          })}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
