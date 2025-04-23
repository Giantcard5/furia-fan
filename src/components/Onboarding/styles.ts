import styled from 'styled-components';

const OnboardingWrapper = styled.div`
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.black};
    display: flex;
    flex-direction: column;
`;

const OnboardingContainer = styled.div`
    flex: 1;
    max-width: 64rem;
    margin: 0 auto;
    width: 100%;
    padding: ${({ theme }) => `${theme.space[8]} ${theme.space[4]}`};
`;

const ProgressWrapper = styled.div`
    margin-bottom: ${({ theme }) => theme.space[8]};
`;

const FormCard = styled.div`
    background-color: ${({ theme }) => theme.colors.gray[900]};
    border-radius: ${({ theme }) => theme.radii.lg};
    padding: ${({ theme }) => `${theme.space[6]} ${theme.space[6]}`};
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border: 1px solid rgba(255, 193, 7, 0.2);
    
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        padding: ${({ theme }) => theme.space[8]};
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${({ theme }) => theme.space[8]};
`;

export {
    OnboardingWrapper,
    OnboardingContainer,
    ProgressWrapper,
    FormCard,
    ButtonGroup
}