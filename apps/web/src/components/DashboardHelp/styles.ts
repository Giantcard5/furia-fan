import styled from 'styled-components';

import { 
    Card, 
    CardHeader, 
    CardTitle, 
    CardContent 
} from '@/components/UI/card';
import { 
    Input 
} from '../UI/input';
import Button from '../UI/button';

import Link from 'next/link';

const PageHeader = styled.div`
    margin-bottom: ${({ theme }) => theme.space[6]};
`;

const PageTitle = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
`;

const HelpContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.space[6]};
`;

const SearchSection = styled.div`
    text-align: center;
    margin-bottom: ${({ theme }) => theme.space[8]};
`;

const SearchTitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: ${({ theme }) => theme.space[2]};
`;

const SearchDescription = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.gray[400]};
    margin-bottom: ${({ theme }) => theme.space[6]};
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
`;

const SearchContainer = styled.div`
    position: relative;
    max-width: 600px;
    margin: 0 auto;
`;

const SearchInput = styled(Input)`
    padding-left: ${({ theme }) => theme.space[10]};
    height: 50px;
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const SearchIcon = styled.div`
    position: absolute;
    left: ${({ theme }) => theme.space[3]};
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.gray[500]};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
`;

const CategoriesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${({ theme }) => theme.space[6]};
    margin-bottom: ${({ theme }) => theme.space[8]};
`;

const CategoryCard = styled(Card)`
    background-color: #141414;
    transition: transform 0.2s ease;
    
    &:hover {
        transform: translateY(-5px);
    }
`;

const CategoryHeader = styled(CardHeader)`
    padding-bottom: ${({ theme }) => theme.space[3]};
`;

const CategoryIcon = styled.div`
    width: 48px;
    height: 48px;
    border-radius: ${({ theme }) => theme.radii.md};
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.gold};
    margin-bottom: ${({ theme }) => theme.space[3]};
`;

const CategoryTitle = styled(CardTitle)`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

const CategoryContent = styled(CardContent)`
    padding-top: 0;
`;

const CategoryDescription = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray[300]};
    margin-bottom: ${({ theme }) => theme.space[4]};
`;

const CategoryLink = styled(Link)`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gold};
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[1]};
    
    &:hover {
        text-decoration: underline;
    }
`;

const FAQSection = styled.div`
    margin-bottom: ${({ theme }) => theme.space[8]};
`;

const SectionTitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: ${({ theme }) => theme.space[6]};
    text-align: center;
`;

const FAQCard = styled(Card)`
    background-color: #141414;
    margin-bottom: ${({ theme }) => theme.space[4]};
    overflow: hidden;
`;

const FAQHeader = styled.button`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme }) => theme.space[4]};
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
`;

const FAQTitle = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    color: ${({ theme }) => theme.colors.gray[300]};
`;

const FAQIcon = styled.div`
    color: ${({ theme }) => theme.colors.gray[300]};
    transition: transform 0.2s ease;
    
    &.open {
        transform: rotate(180deg);
    }
`;

const FAQContent = styled.div<{ $isOpen: boolean }>`
    padding: ${({ theme, $isOpen }) => ($isOpen ? theme.space[4] : 0)};
    padding-top: 0;
    max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0')};
    overflow: hidden;
    transition: all 0.3s ease;
`;

const FAQText = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray[400]};
    line-height: 1.6;
`;

const ContactSection = styled.div`
    margin-bottom: ${({ theme }) => theme.space[8]};
`;

const ContactGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${({ theme }) => theme.space[6]};
`;

const ContactCard = styled(Card)`
    background-color: #141414;
    text-align: center;
    padding: ${({ theme }) => theme.space[6]};
`;

const ContactIcon = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.gold};
    margin: 0 auto ${({ theme }) => theme.space[4]};
`;

const ContactTitle = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: ${({ theme }) => theme.space[2]};
`;

const ContactDescription = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.gray[400]};
    margin-bottom: ${({ theme }) => theme.space[4]};
`;

const ContactButton = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.space[2]};
    margin: 0 auto;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray[400]};
`;

const SupportForm = styled.form`
    background-color: #141414;
    padding: ${({ theme }) => theme.space[6]};
    border-radius: ${({ theme }) => theme.radii.lg};
`;

const FormTitle = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: ${({ theme }) => theme.space[4]};
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

const TextArea = styled.textarea`
    width: 100%;
    min-height: 150px;
    padding: ${({ theme }) => theme.space[3]};
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid #333333;
    border-radius: ${({ theme }) => theme.radii.md};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-family: inherit;
    resize: vertical;
    
    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.gold};
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.gold}33;
    }
    
    &::placeholder {
        color: ${({ theme }) => theme.colors.gray[500]};
        font-size: ${({ theme }) => theme.fontSizes.sm};
    }
`;

const SubmitButton = styled(Button)`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
    font-size: ${({ theme }) => theme.fontSizes.sm};
`;


export {
    PageHeader,
    PageTitle,
    HelpContainer,
    SearchSection,
    SearchTitle,
    SearchDescription,
    SearchContainer,
    SearchInput,
    SearchIcon,
    CategoriesGrid,
    CategoryCard,
    CategoryHeader,
    CategoryIcon,
    CategoryTitle,
    CategoryContent,
    CategoryDescription,
    CategoryLink,
    FAQSection,
    SectionTitle,
    FAQCard,
    FAQHeader,
    FAQTitle,
    FAQIcon,
    FAQContent,
    FAQText,
    ContactSection,
    ContactGrid,
    ContactCard,
    ContactIcon,
    ContactTitle,
    ContactDescription,
    ContactButton,
    SupportForm,
    FormTitle,
    FormRow,
    TextArea,
    SubmitButton
};