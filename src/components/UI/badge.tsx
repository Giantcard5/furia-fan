import styled from 'styled-components';

interface BadgeProps {
    $variant?: 'default' | 'outline' | 'secondary';
};

export const Badge = styled.span<BadgeProps>`
    display: inline-flex;
    align-items: center;
    border-radius: ${({ theme }) => theme.radii.full};
    padding: ${({ theme }) => `${theme.space[1]} ${theme.space[3]}`};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    line-height: 1;
    transition: ${({ theme }) => theme.transitions.default};
    
    ${({ $variant, theme }) => {
        switch ($variant) {
            case 'outline':
                return `
                    background-color: transparent;
                    border: 1px solid ${theme.colors.white};
                    color: ${theme.colors.white};
                `
            case 'secondary':
                return `
                    background-color: ${theme.colors.gray[800]};
                    color: ${theme.colors.gray[200]};
                `
            default:
                return `
                    background-color: rgba(255, 255, 255, 0.1);
                    color: ${theme.colors.white};
                    border: 1px solid rgba(255, 255, 255, 0.3);
                `
        };
    }};
  
    &:hover {
        opacity: 0.8;
    }
`;

export default Badge;