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

const UploadArea = styled.div`
    border: 2px dashed #333333;
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
        border-color: ${({ theme }) => theme.colors.gold};
        background-color: rgba(255, 204, 0, 0.05);
    }
    
    &.active {
        border-color: ${({ theme }) => theme.colors.gold};
        background-color: rgba(255, 204, 0, 0.1);
    }
    
    &.has-file {
        border-color: ${({ theme }) => theme.colors.gold};
    }
`;

const UploadIcon = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${({ theme }) => theme.space[4]};
    color: ${({ theme }) => theme.colors.gold};
`;

const UploadTitle = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    margin-bottom: ${({ theme }) => theme.space[2]};
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

export {
    FormContainer,
    IconContainer,
    Icon,
    UploadGrid,
    UploadArea,
    UploadIcon,
    UploadTitle,
    UploadDescription,
    FileInfo,
    FilePreview,
    HiddenInput,
    ButtonContainer
};