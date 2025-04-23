import styled from 'styled-components';

const StepContainer = styled.div`
    width: 100%;
`;

const HeaderContainer = styled.div`
    margin-bottom: 1.5rem;
`;

const StepTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 0.5rem;
`;

const StepDescription = styled.p`
    color: ${({ theme }) => theme.colors.gray[400]};
`;

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
`;

const IconCircle = styled.div`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const SocialGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
`;

const SectionTitle = styled.h3`
    font-size: 1.125rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};
    margin-top: 1rem;
`;

const SocialCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.gray[800]};
    transition: border-color 0.2s ease;

    &:hover {
        border-color: rgba(255, 255, 255, 0.5);
    }

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
    }
`;

const SocialInfo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
        margin-bottom: 0;
    }
`;

const SocialIconCircle = styled.div<{ bgColor: string; textColor: string }>`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: ${({ bgColor }) => bgColor};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    color: ${({ textColor }) => textColor};
`;

const SocialDetails = styled.div`
    display: flex;
    flex-direction: column;
`;

const SocialTitle = styled.h3`
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
`;

const SocialSubtitle = styled.p`
    color: ${({ theme }) => theme.colors.gray[400]};
    font-size: 0.875rem;
`;

const SocialActions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
    width: 100%;

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        width: auto;
    }
`;

const BadgeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-right: 1rem;
`;

export {
    StepContainer,
    HeaderContainer,
    StepTitle,
    StepDescription,
    IconCircle,
    IconContainer,
    FormContainer,
    SocialActions,
    SocialGrid,
    SectionTitle,
    SocialCard,
    SocialInfo,
    SocialIconCircle,
    SocialDetails,
    SocialTitle,
    SocialSubtitle,
    BadgeContainer
};