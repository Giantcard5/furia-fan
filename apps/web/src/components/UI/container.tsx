import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: ${({ theme }) => theme.sizes.container.xl};
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.space[4]};
`;

export default Container;