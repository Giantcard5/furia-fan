import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            black: string
            white: string
            gold: string
            goldDark: string
            gray: {
                100: string
                200: string
                300: string
                400: string
                500: string
                600: string
                700: string
                800: string
                900: string
            }
            red: string
            background: string
            backgroundLight: string
            transparent: string
        }
        fonts: {
            body: string
            heading: string
        }
        fontSizes: {
            xs: string
            sm: string
            md: string
            lg: string
            xl: string
            '2xl': string
            '3xl': string
            '4xl': string
            '5xl': string
            '6xl': string
            '7xl': string
        }
        fontWeights: {
            normal: number
            medium: number
            semibold: number
            bold: number
        }
        lineHeights: {
            none: number
            tight: number
            normal: number
            loose: number
        }
        space: {
            0: string
            1: string
            2: string
            3: string
            4: string
            5: string
            6: string
            8: string
            10: string
            12: string
            16: string
            20: string
            24: string
            32: string
            40: string
            48: string
            56: string
            64: string
        }
        sizes: {
            full: string
            screen: string
            container: {
                sm: string
                md: string
                lg: string
                xl: string
            }
        }
        radii: {
            none: string
            sm: string
            md: string
            lg: string
            xl: string
            '2xl': string
            full: string
        }
        shadows: {
            sm: string
            md: string
            lg: string
            xl: string
        }
        transitions: {
            default: string
            fast: string
            slow: string
        }
        zIndices: {
            0: number
            10: number
            20: number
            30: number
            40: number
            50: number
            auto: string
        }
        breakpoints: {
            sm: string
            md: string
            lg: string
            xl: string
        }
    }
}