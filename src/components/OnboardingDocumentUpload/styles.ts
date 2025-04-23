import styled from 'styled-components';

const StepContainer = styled.div`
    width: 100%;
`;

const StepHeader = styled.div`
    margin-bottom: ${({ theme }) => theme.space[6]};
`;

const StepTitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: ${({ theme }) => theme.space[2]};
`;

const StepDescription = styled.p`
    color: ${({ theme }) => theme.colors.gray[400]};
`;

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${({ theme }) => theme.space[6]};
`;

const IconWrapper = styled.div`
    width: 4rem;
    height: 4rem;
    border-radius: ${({ theme }) => theme.radii.full};
    background-color: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FormGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space[6]};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const ValidationContainer = styled.div`
    margin-top: ${({ theme }) => theme.space[4]};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space[4]};
`;

const ValidationStatus = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
    color: ${({ theme }) => theme.colors.white};
`;

const ProgressContainer = styled.div`
    margin-top: ${({ theme }) => theme.space[1]};
`;

const AlertContainer = styled.div`
    margin-top: ${({ theme }) => theme.space[6]};
`;

export {
    StepContainer,
    StepHeader,
    StepTitle,
    StepDescription,
    IconContainer,
    IconWrapper,
    FormGrid,
    ValidationContainer,
    ValidationStatus,
    ProgressContainer,
    AlertContainer
};