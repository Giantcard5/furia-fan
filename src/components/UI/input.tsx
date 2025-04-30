'use client';

import styled, { 
    css 
} from 'styled-components';

interface InputProps {
    $error?: boolean
    $fullWidth?: boolean
};

export const Input = styled.input<InputProps>`
    height: 40px;
    padding: 0 ${({ theme }) => theme.space[4]};
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme, $error }) => ($error ? theme.colors.red : '#333333')};
    border-radius: ${({ theme }) => theme.radii.md};
    font-size: ${({ theme }) => theme.fontSizes.md};
    transition: all 0.2s ${({ theme }) => theme.transitions.default};
    
    ${({ $fullWidth }) => $fullWidth && css`width: 100%;`}
    
    &:focus {
        outline: none;
        border-color: ${({ theme, $error }) => ($error ? theme.colors.red : theme.colors.gold)};
        box-shadow: ${({ theme, $error }) => ($error ? `0 0 0 2px ${theme.colors.red}33` : '0 0 0 3px rgba(255, 204, 0, 0.5)')};
    }
    
    &::placeholder {
        color: ${({ theme }) => theme.colors.gray[500]};
        font-size: ${({ theme }) => theme.fontSizes.sm};
    }
    
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
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

export default Input;