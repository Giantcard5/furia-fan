import styled from 'styled-components';

import Link from 'next/link';

const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #0a0a0a;
    color: #ffffff;
    padding: 2rem;
    text-align: center;
`;

const Logo = styled.div`
    margin-bottom: 2rem;
    
    img {
        width: 180px;
        height: auto;
    }
`;

const ErrorCode = styled.h1`
    font-size: 8rem;
    font-weight: 800;
    margin: 0;
    background: linear-gradient(90deg, #FFD700 0%, #FFA500 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1;
    text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);

    @media (max-width: 768px) {
        font-size: 6rem;
    }
`;

const ErrorTitle = styled.h2`
    font-size: 2.5rem;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
    
    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const ErrorMessage = styled.p`
    font-size: 1.2rem;
    max-width: 600px;
    margin-bottom: 2.5rem;
    color: #cccccc;
    line-height: 1.6;
`;

const ButtonsContainer = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
`;

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.2s ease;
    text-decoration: none;
    
    &:hover {
        transform: translateY(-2px);
    }
`;

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.2s ease;
    text-decoration: none;
    cursor: pointer;
    border: none;
    
    &:hover {
        transform: translateY(-2px);
    }
`;

const PrimaryButton = styled(StyledLink)`
    background: linear-gradient(90deg, #FFD700 0%, #FFA500 100%);
    color: #000000;
    
    &:hover {
        box-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
    }
`;

const SecondaryButton = styled(StyledButton)`
    background: transparent;
    border: 2px solid #FFD700;
    color: #FFD700;
    
    &:hover {
        background: rgba(255, 215, 0, 0.1);
    }
`;

const Decoration = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: -1;
    opacity: 0.1;
    
    &::before, &::after {
        content: '';
        position: absolute;
        background: linear-gradient(90deg, #FFD700 0%, #FFA500 100%);
        border-radius: 50%;
    }
    
    &::before {
        width: 300px;
        height: 300px;
        top: -100px;
        right: -100px;
    }
    
    &::after {
        width: 400px;
        height: 400px;
        bottom: -200px;
        left: -200px;
    }
`;

export {
    NotFoundContainer,
    Logo,
    ErrorCode,
    ErrorTitle,
    ErrorMessage,
    ButtonsContainer,
    PrimaryButton,
    SecondaryButton,
    Decoration
};