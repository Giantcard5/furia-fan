import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    };

    body {
        font-size: ${({ theme }) => theme.fontSizes.md};
        font-family: ${({ theme }) => theme.fonts.body};

        color: ${({ theme }) => theme.colors.white};
        line-height: ${({ theme }) => theme.lineHeights.normal};

        background-color: ${({ theme }) => theme.colors.black};

        overflow-x: hidden;
    };

	button {
        border: none;
        background: none;

        cursor: pointer;
    };

    input {
        border: none;
        background: none;

        cursor: auto;

        &:focus {
            outline: none;
        };
    };
        
    a {
        color: inherit;
        text-decoration: none;
    };
`;