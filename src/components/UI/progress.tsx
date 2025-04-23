import styled from 'styled-components';

interface ProgressProps {
    value?: number;
};

const ProgressContainer = styled.div`
    position: relative;
    width: 100%;
    height: 0.5rem;
    background-color: ${({ theme }) => theme.colors.gray[800]};
    border-radius: ${({ theme }) => theme.radii.full};
    overflow: hidden;
`;

const ProgressIndicator = styled.div<{ value: number }>`
    height: 100%;
    width: ${({ value }) => `${value}%`};
    background-color: ${({ theme }) => theme.colors.white};
    transition: width 0.3s ease;
`;

export const Progress = ({ value = 0 }: ProgressProps) => {
    return (
        <ProgressContainer>
            <ProgressIndicator value={value} />
        </ProgressContainer>
    );
};

export default Progress;