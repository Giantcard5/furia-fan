import styled from 'styled-components';

import { 
    Card, 
    CardHeader, 
    CardTitle, 
    CardContent 
} from '@/components/UI/card';

import Button from '@/components/UI/button';

const PageHeader = styled.div`
    margin-bottom: ${({ theme }) => theme.space[6]};
`;

const PageTitle = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.gray[200]};
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
`;

const SettingsContainer = styled.div`
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: ${({ theme }) => theme.space[6]};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        grid-template-columns: 1fr;
    }
`;

const SettingsSidebar = styled.div`
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        display: none;
    }
`;

const SettingsNav = styled.nav`
    background-color: #141414;
    border-radius: ${({ theme }) => theme.radii.md};
    overflow: hidden;
`;

const NavItem = styled.button<{ $active?: boolean }>`
    display: flex;
    align-items: center;
    width: 100%;
    padding: ${({ theme }) => theme.space[4]} ${({ theme }) => theme.space[4]};
    background-color: ${({ theme, $active }) => ($active ? theme.colors.backgroundLight : 'transparent')};
    border: none;
    text-align: left;
    color: ${({ theme, $active }) => ($active ? theme.colors.gold : theme.colors.gray[400])};
    font-size: .95rem;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
        background-color: ${({ theme, $active }) => ($active ? theme.colors.backgroundLight : `${theme.colors.backgroundLight}80`)};
        color: ${({ theme, $active }) => ($active ? theme.colors.gold : theme.colors.gray[300])};
    }
    
    svg {
        margin-right: ${({ theme }) => theme.space[3]};
    }
`;

const SettingsContentArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space[6]};
`;

const SettingsCard = styled(Card)`
    background-color: #141414;
    overflow: hidden;
`;

const SettingsHeader = styled(CardHeader)`
    padding-bottom: ${({ theme }) => theme.space[4]};
`;

const SettingsTitle = styled(CardTitle)`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
`;

const SettingsDescription = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray[300]};
    margin-top: ${({ theme }) => theme.space[1]};
`;

const SettingsCardContent = styled(CardContent)`
    padding-top: 0;
`;

const FormRow = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space[4]};
    margin-bottom: ${({ theme }) => theme.space[4]};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const SwitchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ theme }) => theme.space[3]} 0;
    border-bottom: 1px solid #333333;
    
    &:last-child {
        border-bottom: none;
    }
`;

const SwitchLabel = styled.div`
    display: flex;
    flex-direction: column;
`;

const SwitchTitle = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.gray[200]};
`;

const SwitchDescription = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray[300]};
    margin-top: ${({ theme }) => theme.space[1]};
`;

const Switch = styled.label`
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    flex-shrink: 0;
`;

const SwitchInput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
    
    &:checked + span {
        background-color: ${({ theme }) => theme.colors.gold};
    }
    
    &:checked + span:before {
        transform: translateX(20px);
    }
    
    &:focus + span {
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.gold}33;
    }
`;

const SwitchSlider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    transition: 0.4s;
    border-radius: 20px;
    
    &:before {
        position: absolute;
        content: '';
        height: 14px;
        width: 14px;
        left: 3px;
        bottom: 3px;
        background-color: white;
        transition: 0.4s;
        border-radius: 50%;
    }
`;

const ThemeSelector = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.space[3]};
    margin-top: ${({ theme }) => theme.space[3]};
`;

const ThemeOption = styled.button<{ $active?: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
    padding: ${({ theme }) => theme.space[3]};
    background-color: ${({ theme, $active }) => ($active ? theme.colors.backgroundLight : 'transparent')};
    border: 1px solid ${({ theme, $active }) => ($active ? theme.colors.gold : '#333333')};
    border-radius: ${({ theme }) => theme.radii.md};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    transition: all 0.2s ease;
    flex: 1;
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.backgroundLight};
    }
`;

const ThemeIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${({ theme }) => theme.space[1]};
`;

const ThemeName = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${({ theme }) => theme.space[6]};
    gap: ${({ theme }) => theme.space[3]};
`;

const SaveButton = styled(Button)`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
`;

const ExitButton = styled(Button)`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
`;

export {
    PageHeader,
    PageTitle,
    SettingsContainer,
    SettingsSidebar,
    SettingsNav,
    NavItem,
    SettingsContentArea,
    SettingsCard,
    SettingsHeader,
    SettingsTitle,
    SettingsDescription,
    SettingsCardContent,
    FormRow,
    SwitchContainer,
    SwitchLabel,
    SwitchTitle,
    SwitchDescription,
    Switch,
    SwitchInput,
    SwitchSlider,
    ThemeSelector,
    ThemeOption,
    ThemeIcon,
    ThemeName,
    ButtonContainer,
    SaveButton,
    ExitButton
};