import styled from 'styled-components';

import { 
    Card 
} from '../../UI/card';

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

const SectionTitle = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    margin-bottom: ${({ theme }) => theme.space[4]};
    margin-top: ${({ theme }) => theme.space[6]};
`;

const CheckboxGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space[2]};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const CheckboxItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.space[2]};
`;

const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.gray[300]};
    
    &:hover {
        color: ${({ theme }) => theme.colors.white};
    }
`;

const Checkbox = styled.input`
    appearance: none;
    width: 18px;
    height: 18px;
    border: 1px solid #333333;
    border-radius: ${({ theme }) => theme.radii.sm};
    margin-right: ${({ theme }) => theme.space[3]};
    position: relative;
    cursor: pointer;
    
    &:checked {
        background-color: ${({ theme }) => theme.colors.gold};
        border-color: ${({ theme }) => theme.colors.gold};
    }
    
    &:checked::after {
        content: '';
        position: absolute;
        top: 3px;
        left: 6px;
        width: 5px;
        height: 10px;
        border: solid ${({ theme }) => theme.colors.background};
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }
    
    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(255, 204, 0, 0.5);
    }
`;

const RadioGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space[2]};
`;

const RadioItem = styled.div`
    display: flex;
    align-items: center;
`;

const RadioLabel = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.gray[300]};
    
    &:hover {
        color: ${({ theme }) => theme.colors.white};
    }
`;

const Radio = styled.input`
    appearance: none;
    width: 18px;
    height: 18px;
    border: 1px solid #333333;
    border-radius: 50%;
    margin-right: ${({ theme }) => theme.space[3]};
    position: relative;
    cursor: pointer;
    
    &:checked {
        border-color: ${({ theme }) => theme.colors.gold};
    }
    
    &:checked::after {
        content: '';
        position: absolute;
        top: 4px;
        left: 4px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.gold};
    }
    
    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(255, 204, 0, 0.5);
    }
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
    SectionTitle,
    CheckboxGrid,
    CheckboxItem,
    CheckboxLabel,
    Checkbox,
    RadioGroup,
    RadioItem,
    RadioLabel,
    Radio,
    ButtonContainer
};