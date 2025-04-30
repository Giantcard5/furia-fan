import styled from 'styled-components';

import { 
    Card 
} from '@/components/UI/card';

const FormContainer = styled(Card)`
    margin-bottom: ${({ theme }) => theme.space[6]};
`;

const AvatarContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: ${({ theme }) => theme.space[6]};
    position: relative;
    width: 80px;
    margin-left: auto;
    margin-right: auto;
`;

const Avatar = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #141414;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.gray[300]};
    position: relative;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
        opacity: 0.9;
    }
`;

const AvatarOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.2s ease;
    
    &:hover {
        opacity: 1;
    }
`;

const EditButton = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 24px;
    height: 24px;
    background-color: ${({ theme }) => theme.colors.gold};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.gray[900]};
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 2;
`;

const FormRow = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space[4]};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        grid-template-columns: 1fr 1fr;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${({ theme }) => theme.space[6]};
`;

export {
    FormContainer,
    AvatarContainer,
    Avatar,
    AvatarOverlay,
    EditButton,
    FormRow,
    ButtonContainer
};