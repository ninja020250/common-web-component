import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { StyledEngineProvider, createTheme } from '@mui/material/styles';

const lightTheme = createTheme({});

const withThemeProvider = (Story, context) => {
  return (
    <StyledEngineProvider injectFirst>
      <EmotionThemeProvider theme={lightTheme}>
        <ThemeProvider theme={lightTheme}>
          {/* <Fonts /> */}
          <CssBaseline />
          <Story {...context} />
        </ThemeProvider>
      </EmotionThemeProvider>
    </StyledEngineProvider>
  );
};

export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
