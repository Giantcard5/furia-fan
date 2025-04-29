import styled, { css } from 'styled-components';

export const Input = styled.input<{ $fullWidth?: boolean }>`
    width: 100%;
    padding: ${({ theme }) => `${theme.space[2]} ${theme.space[3]}`};
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    color: ${({ theme }) => theme.colors.gray[200]};
    border: 1px solid ${({ theme }) => theme.colors.gray[700]};
    border-radius: ${({ theme }) => theme.radii.md};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    transition: ${({ theme }) => theme.transitions.default};

    ${({ $fullWidth }) => $fullWidth && css`width: 100%;`}
    
    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.gold};
        box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.gold};
    }
    
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    
    &::placeholder {
        color: ${({ theme }) => theme.colors.gray[500]};
        font-size: ${({ theme }) => theme.fontSizes.sm};
    }
`;

export const FormGroup = styled.div`
    margin-bottom: ${({ theme }) => theme.space[4]};
`;

export const Label = styled.label`
    display: block;
    margin-bottom: ${({ theme }) => theme.space[2]};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const ErrorMessage = styled.p`
    color: ${({ theme }) => theme.colors.red};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin-top: ${({ theme }) => theme.space[1]};
`;