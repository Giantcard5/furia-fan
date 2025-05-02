import styled from 'styled-components';

export const Label = styled.label`
    display: block;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.gray[300]};
    margin-bottom: ${({ theme }) => theme.space[2]};
`;

export default Label;