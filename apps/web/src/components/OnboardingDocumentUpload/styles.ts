import styled from 'styled-components';

import { 
    Card
} from '../UI/card';

const FormContainer = styled(Card)`
    margin-bottom: ${({ theme }) => theme.space[6]};
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: ${({ theme }) => theme.space[6]};
`;

const Icon = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.gray[300]};
`;

const UploadGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space[6]};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const UploadArea = styled.div<{ $hasError?: boolean }>`
    border: ${({ theme, $hasError }) => $hasError ? `2px dashed ${theme.colors.red}` : '2px dashed #333333'};
    border-radius: ${({ theme }) => theme.radii.lg};
    padding: ${({ theme }) => theme.space[8]};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ${({ theme }) => theme.transitions.default};
    
    &:hover {
        border-color: ${({ theme, $hasError }) => $hasError ? theme.colors.red : theme.colors.gold};
        background-color: ${({ $hasError }) => $hasError ? 'rgba(220, 38, 38, 0.05)' : 'rgba(255, 204, 0, 0.05)'};
    }
    
    &.active {
        border-color: ${({ theme }) => theme.colors.gold};
        background-color: rgba(255, 204, 0, 0.1);
    }
    
    &.has-file {
        border-color: ${({ theme }) => theme.colors.gold};
    }
`;

const RequiredBadge = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: ${({ theme }) => theme.colors.red};
    color: white;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    padding: 2px 8px;
    border-radius: ${({ theme }) => theme.radii.full};
`;

const UploadIcon = styled.div<{ $hasError?: boolean }>`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${({ theme }) => theme.space[4]};
    color: ${({ theme, $hasError }) => $hasError ? theme.colors.red : theme.colors.gold};
`;

const UploadTitle = styled.h3<{ $hasError?: boolean }>`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    margin-bottom: ${({ theme }) => theme.space[2]};
    color: ${({ theme, $hasError }) => $hasError ? theme.colors.red : theme.colors.white};
`;

const UploadDescription = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray[300]};
    margin-bottom: ${({ theme }) => theme.space[4]};
`;

const FileInfo = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray[500]};
`;

const FilePreview = styled.div`
    margin-top: ${({ theme }) => theme.space[4]};
    width: 100%;
    max-width: 200px;
    
    img {
        width: 100%;
        height: auto;
        border-radius: ${({ theme }) => theme.radii.md};
        object-fit: cover;
    }
`;

const HiddenInput = styled.input`
    display: none;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${({ theme }) => theme.space[6]};
`;

const ErrorMessage = styled.div`
    color: ${({ theme }) => theme.colors.red};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin-top: ${({ theme }) => theme.space[4]};
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
`;

const ValidationStatus = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
    margin-top: ${({ theme }) => theme.space[4]};
    font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const ValidationIcon = styled.div<{ $isValid: boolean }>`
    color: ${({ theme, $isValid }) => ($isValid ? theme.colors.gold : theme.colors.red)};
    display: flex;
    align-items: center;
`;

const ValidationText = styled.span<{ $isValid: boolean }>`
    color: ${({ theme, $isValid }) => ($isValid ? theme.colors.gold : theme.colors.red)};
`;

export {
    FormContainer,
    IconContainer,
    Icon,
    UploadGrid,
    UploadArea,
    RequiredBadge,
    UploadIcon,
    UploadTitle,
    UploadDescription,
    FileInfo,
    FilePreview,
    HiddenInput,
    ButtonContainer,
    ErrorMessage,
    ValidationStatus,
    ValidationIcon,
    ValidationText
};