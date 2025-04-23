import styled from 'styled-components';

import Link from 'next/link';

const HeaderWrapper = styled.header`
    background-color: ${({ theme }) => theme.colors.gray[900]};
    border-bottom: 1px solid rgba(255, 193, 7, 0.2);
    padding: ${({ theme }) => theme.space[4]} 0;
`;

const HeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        flex-direction: row;
    }
`;

const LogoLink = styled(Link)`
    display: flex;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.space[4]};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        margin-bottom: 0;
    }
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const LogoText = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.white};
    margin-left: ${({ theme }) => theme.space[3]};
`;

const StepsWrapper = styled.div`
    display: none;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        display: flex;
    }
`;

const StepItem = styled.div`
    display: flex;
    align-items: center;
`

const StepCircle = styled.div<{ active: boolean; completed: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: ${({ theme }) => theme.radii.full};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    
    ${({ active, completed, theme }) => {
        if (active) {
            return `
                border: none;
                background-color: ${theme.colors.gold};
                color: ${theme.colors.black};
            `
        } else if (completed) {
            return `
                border: 1px solid ${theme.colors.gold};
                background-color: transparent;
                color: ${theme.colors.gold};
            `
        } else {
            return `
                border: 1px solid ${theme.colors.gray[600]};
                background-color: transparent;
                color: ${theme.colors.gray[600]};
            `
        };
    }};
`;

const StepLabel = styled.span<{ active: boolean; completed: boolean }>`
    margin-left: ${({ theme }) => theme.space[2]};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    
    ${({ active, completed, theme }) => {
        if (active) {
            return `color: ${theme.colors.white};`
        } else if (completed) {
            return `color: ${theme.colors.gold};`
        } else {
            return `color: ${theme.colors.gray[600]};`
        };
    }};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        display: none;
    }
`;

const StepDivider = styled.div<{ completed: boolean }>`
    width: 2rem;
    height: 1px;
    
    ${({ completed, theme }) => {
        if (completed) {
            return `background-color: ${theme.colors.gold};`
        } else {
            return `background-color: ${theme.colors.gray[600]};`
        };
    }};
`;

const MobileStepInfo = styled.div`
    display: flex;
    align-items: center;
    
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        display: none;
    }
`;

const MobileStepText = styled.span`
    color: ${({ theme }) => theme.colors.white};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export {
    HeaderWrapper,
    HeaderContent,
    LogoLink,
    LogoWrapper,
    LogoText,
    StepsWrapper,
    StepItem,
    StepCircle,
    StepLabel,
    StepDivider,
    MobileStepInfo,
    MobileStepText
};