import styled from 'styled-components';

export const Alert = styled.div<{ variant?: 'default' | 'success' | 'error' }>`
    position: relative;
    width: 100%;
    padding: ${({ theme }) => theme.space[4]};
    border-radius: ${({ theme }) => theme.radii.md};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space[2]};
  
    ${({ variant }) => {
        switch (variant) {
            case 'success':
                return `
                    background-color: rgba(34, 197, 94, 0.1);
                    border: 1px solid rgba(34, 197, 94, 0.3);
                `
            case 'error':
                return `
                    background-color: rgba(239, 68, 68, 0.1);
                    border: 1px solid rgba(239, 68, 68, 0.3);
                `
            default:
                return `
                    background-color: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                `
        };
    }};
`;

export const AlertTitle = styled.h5<{ variant?: 'default' | 'success' | 'error' }>`
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    
    ${({ variant, theme }) => {
            switch (variant) {
                case 'success':
                    return `color: rgb(34, 197, 94);`
                case 'error':
                    return `color: rgb(239, 68, 68);`
                default:
                    return `color: ${theme.colors.white};`
            };
        }};
`;

export const AlertDescription = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray[400]};
`;