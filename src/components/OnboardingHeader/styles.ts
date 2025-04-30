import styled from 'styled-components';


const Header = styled.div`
    margin-bottom: ${({ theme }) => theme.space[8]};
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${({ theme }) => theme.space[6]};
    
    a {
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.space[2]};
        font-size: ${({ theme }) => theme.fontSizes["2xl"]};
        font-weight: ${({ theme }) => theme.fontWeights.bold};
    }
`;

const StepsContainer = styled.div`
    margin-bottom: ${({ theme }) => theme.space[6]};
`;

const Steps = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.space[2]};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        display: none;
    }
`;

const Step = styled.div<{ $active: boolean; $completed: boolean }>`
    display: flex;
    align-items: center;
    
    .step-number {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background-color: ${({ theme, $active, $completed }) =>
            $completed ? theme.colors.gold : $active ? theme.colors.gold : theme.colors.backgroundLight};
        color: ${({ theme, $active, $completed }) =>
            $completed || $active ? theme.colors.background : theme.colors.gray[300]};
        font-size: ${({ theme }) => theme.fontSizes.sm};
        font-weight: ${({ theme }) => theme.fontWeights.medium};
        margin-right: ${({ theme }) => theme.space[2]};
    }
    
    .step-label {
        font-size: ${({ theme }) => theme.fontSizes.sm};
        color: ${({ theme, $active, $completed }) =>
            $completed || $active ? theme.colors.white : theme.colors.gray[300]};
    }
`;

const ProgressContainer = styled.div`
    margin-top: ${({ theme }) => theme.space[4]};
`;

export {
    Header,
    Logo,
    StepsContainer,
    Steps,
    Step,
    ProgressContainer
};