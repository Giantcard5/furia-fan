import styled from 'styled-components';

const OnboardingContainer = styled.div`
    min-height: calc(100vh - 70px);
    background-color: ${({ theme }) => theme.colors.background};
    padding: ${({ theme }) => theme.space[8]} 0;
`;

const OnboardingContent = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.space[4]};
`;

export {
    OnboardingContent,
    OnboardingContainer
};