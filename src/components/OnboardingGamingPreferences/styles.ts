import styled from 'styled-components';

import Label from '../UI/label';

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

const FormSection = styled.div`
    margin-bottom: ${({ theme }) => theme.space[8]};
`;

const SectionLabel = styled.div`
    margin-bottom: ${({ theme }) => theme.space[4]};
`;

const CheckboxGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space[3]};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const CheckboxItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: ${({ theme }) => theme.space[3]};
`;

const CheckboxLabel = styled(Label)`
    font-weight: ${({ theme }) => theme.fontWeights.normal};
`;

const RadioContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space[1]};
`;

const RadioItem = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
`;

const TwoColumnGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space[8]};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export {
    StepContainer,
    StepHeader,
    StepDescription,
    StepTitle,
    IconContainer,
    IconWrapper,
    FormSection,
    SectionLabel,
    CheckboxGrid,
    CheckboxItem,
    CheckboxLabel,
    RadioContainer,
    RadioItem,
    TwoColumnGrid
};