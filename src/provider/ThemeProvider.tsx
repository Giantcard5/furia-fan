'use client';

import {
    ThemeProvider as StyledThemeProvider
} from 'styled-components';

import {
    theme
} from '@/styles/theme';

import GlobalStyle from '@/styles/global';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <StyledThemeProvider theme={theme}>
            <GlobalStyle/>
            {children}
        </StyledThemeProvider>
    );
};