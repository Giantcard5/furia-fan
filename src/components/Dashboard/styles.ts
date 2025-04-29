import styled from 'styled-components';

const DashboardGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space[6]};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        grid-template-columns: 3fr 2fr;
    }
`;

const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space[6]};
`;

const SideContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space[6]};
`;

export { 
    DashboardGrid, 
    MainContent, 
    SideContent 
};
