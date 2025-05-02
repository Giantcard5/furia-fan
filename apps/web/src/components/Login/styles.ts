import styled from 'styled-components';

import Container from '../UI/container';
import Link from 'next/link';

const LoginContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`;

const LoginCard = styled.div`
    background-color: #141414;
    border-radius: ${({ theme }) => theme.radii.lg};
    border: 1px solid #333333;
    padding: ${({ theme }) => theme.space[8]};
    width: 100%;
    max-width: 450px;
    box-shadow: ${({ theme }) => theme.shadows.lg};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        padding: ${({ theme }) => theme.space[6]};
    }
`;

const LoginHeader = styled.div`
    text-align: center;
    margin-bottom: ${({ theme }) => theme.space[6]};
`;

const LoginSubtitle = styled.p`
    color: ${({ theme }) => theme.colors.gray[300]};
    font-size: ${({ theme }) => theme.fontSizes.md};
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space[5]};
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space[2]};
`;

const FormLabel = styled.label`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.gray[300]};
`;

const InputWrapper = styled.div`
    position: relative;
`;

const FormInput = styled.input`
    width: 100%;
    height: 48px;
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    border: 1px solid #333333;
    border-radius: ${({ theme }) => theme.radii.md};
    padding: 0 ${({ theme }) => theme.space[4]};
    padding-left: 48px; /* Space for icon */
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.md};
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.gold};
        box-shadow: 0 0 0 3px rgba(255, 204, 0, 0.5);
    }
    
    &::placeholder {
        color: ${({ theme }) => theme.colors.gray[500]};
    }
`;

const InputIcon = styled.div`
    position: absolute;
    left: ${({ theme }) => theme.space[3]};
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.gray[500]};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PasswordToggle = styled.button`
    position: absolute;
    right: ${({ theme }) => theme.space[3]};
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.gray[500]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
        color: ${({ theme }) => theme.colors.gray[300]};
    }
`;

const FormFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.space[5]};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        flex-direction: column;
        align-items: flex-start;
        gap: ${({ theme }) => theme.space[3]};
    }
`;

const RememberMeLabel = styled.label`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray[300]};
    cursor: pointer;
`;

const Checkbox = styled.input`
    width: 18px;
    height: 18px;
    accent-color: ${({ theme }) => theme.colors.gold};
    cursor: pointer;
`;

const ForgotPassword = styled(Link)`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gold};
    text-decoration: none;
    transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
        text-decoration: underline;
        color: ${({ theme }) => theme.colors.goldDark};
    }
`;

const LoginDivider = styled.div`
    display: flex;
    align-items: center;
    margin: ${({ theme }) => theme.space[6]} 0;
    
    &::before, &::after {
        content: '';
        flex: 1;
        height: 1px;
        background-color: #333333;
    }
    
    span {
        padding: 0 ${({ theme }) => theme.space[4]};
        color: ${({ theme }) => theme.colors.gray[500]};
        font-size: ${({ theme }) => theme.fontSizes.sm};
    }
`;

const SignUpText = styled.p`
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray[300]};
    margin-top: ${({ theme }) => theme.space[6]};
    
    a {
        color: ${({ theme }) => theme.colors.gold};
        text-decoration: none;
        font-weight: ${({ theme }) => theme.fontWeights.medium};
        
        &:hover {
        text-decoration: underline;
        }
    }
`;

const ErrorMessage = styled.div`
    color: ${({ theme }) => theme.colors.red};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin-top: ${({ theme }) => theme.space[1]};
`;

export {
    LoginContainer,
    LoginCard,
    LoginHeader,
    LoginSubtitle,
    LoginForm,
    FormGroup,
    FormLabel,
    InputWrapper,
    FormInput,
    InputIcon,
    PasswordToggle,
    FormFooter,
    RememberMeLabel,
    Checkbox,
    ForgotPassword,
    LoginDivider,
    SignUpText,
    ErrorMessage
};