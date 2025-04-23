import styled from 'styled-components';

export const Input = styled.input`
    width: 100%;
    padding: ${({ theme }) => `${theme.space[2]} ${theme.space[3]}`};
    background-color: ${({ theme }) => theme.colors.gray[800]};
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.gray[700]};
    border-radius: ${({ theme }) => theme.radii.md};
    font-size: ${({ theme }) => theme.fontSizes.md};
    transition: ${({ theme }) => theme.transitions.default};
    
    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.white};
        box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.white};
    }
    
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    
    &::placeholder {
        color: ${({ theme }) => theme.colors.gray[500]};
    }
`;

export default Input;