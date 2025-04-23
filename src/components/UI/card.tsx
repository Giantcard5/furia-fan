import styled from 'styled-components';

export const Card = styled.div`
    background-color: ${({ theme }) => theme.colors.gray[900]};
    border-radius: ${({ theme }) => theme.radii.lg};
    border: 1px solid ${({ theme }) => theme.colors.gray[800]};
    overflow: hidden;
`;

export const CardHeader = styled.div`
    padding: ${({ theme }) => theme.space[6]};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space[1]};
`;

export const CardTitle = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.white};
`;

export const CardDescription = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray[400]};
`;

export const CardContent = styled.div`
    padding: ${({ theme }) => theme.space[6]};
`;

export const CardFooter = styled.div`
    padding: ${({ theme }) => theme.space[6]};
    border-top: 1px solid ${({ theme }) => theme.colors.gray[800]};
    display: flex;
    justify-content: flex-end;
    gap: ${({ theme }) => theme.space[2]};
`;