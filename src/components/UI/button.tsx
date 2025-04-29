import styled, {
    css
} from 'styled-components';

type ButtonVariant = 'default' | 'outline' | 'ghost' | 'link' | 'primary' | 'secondary';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
    variant?: ButtonVariant
    size?: ButtonSize
    fullWidth?: boolean
};

const getVariantStyles = (variant: ButtonVariant) => {
    switch (variant) {
        case 'primary':
            return css`
                background-color: ${({ theme }) => theme.colors.gold};
                color: ${({ theme }) => theme.colors.background};
                border: none;
                
                &:hover:not(:disabled) {
                    background-color: ${({ theme }) => theme.colors.goldDark};
                }
            `
        case 'secondary':
            return css`
                background-color: ${({ theme }) => theme.colors.backgroundLight};
                color: ${({ theme }) => theme.colors.white};
                border: none;
                
                &:hover:not(:disabled) {
                    background-color: #333333;
                }
            `
        case 'outline':
            return css`
                background-color: transparent;
                color: ${({ theme }) => theme.colors.white};
                border: 1px solid #333333;
                
                &:hover:not(:disabled) {
                    background-color: ${({ theme }) => theme.colors.backgroundLight};
                }
            `
        case 'outline':
            return css`
                background-color: transparent;
                border: 1px solid ${({ theme }) => theme.colors.gray[600]};
                color: ${({ theme }) => theme.colors.white};
                
                &:hover {
                    background-color: rgba(255, 255, 255, 0.1);
                }
            `;
        case 'ghost':
            return css`
                background-color: transparent;
                border: none;
                color: ${({ theme }) => theme.colors.gray[400]};
                
                &:hover {
                    background-color: rgba(255, 255, 255, 0.1);
                    color: ${({ theme }) => theme.colors.white};
                }
            `;
        case 'link':
            return css`
                background-color: transparent;
                border: none;
                color: ${({ theme }) => theme.colors.gray[400]};;
                padding: 0;
                
                &:hover {
                    color: ${({ theme }) => theme.colors.white};
                    text-decoration: underline;
                }
            `;
        default:
            return css`
                background-color: ${({ theme }) => theme.colors.gold};
                border: none;
                color: ${({ theme }) => theme.colors.black};
                
                &:hover {
                    background-color: rgba(255, 193, 7, 0.9);
                }
            `;
    };
};

const getSizeStyles = (size: ButtonSize) => {
    switch (size) {
        case 'sm':
            return css`
                font-size: ${({ theme }) => theme.fontSizes.sm};
                padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[3]};
            `;
        case 'lg':
            return css`
                font-size: ${({ theme }) => theme.fontSizes.lg};
                padding: ${({ theme }) => theme.space[4]} ${({ theme }) => theme.space[6]};
            `;
        default:
            return css`
                font-size: ${({ theme }) => theme.fontSizes.md};
                padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[4]};
            `;
    };
};

export const Button = styled.button<ButtonProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: ${({ theme }) => theme.radii.md};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    transition: ${({ theme }) => theme.transitions.default};
    cursor: pointer;
    
    ${({ variant = 'default' }) => getVariantStyles(variant)};
    ${({ size = 'md' }) => getSizeStyles(size)};
    ${({ fullWidth }) => fullWidth && css`width: 100%;`};
    
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    };
`;

export default Button;