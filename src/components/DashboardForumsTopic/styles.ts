import styled from 'styled-components';

import Button from '@/components/UI/button';

import { 
    Card 
} from '@/components/UI/card';

const PageHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.space[6]};
    gap: ${({ theme }) => theme.space[4]};
`;

const BackButton = styled(Button)`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
`;

const PageTitle = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.white};
`;

const TopicContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space[6]};
`;

const TopicCard = styled(Card)`
    background-color: #141414;
    overflow: hidden;
`;

const PostContainer = styled.div`
    display: flex;
    padding: ${({ theme }) => theme.space[4]};
    border-bottom: 1px solid #333333;
    
    &:last-child {
        border-bottom: none;
    }
`;

const VoteColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${({ theme }) => theme.space[2]};
    margin-right: ${({ theme }) => theme.space[4]};
    min-width: 50px;
`;

const VoteButton = styled.button<{ $active?: boolean }>`
    background: none;
    border: none;
    color: ${({ theme, $active }) => ($active ? theme.colors.gold : theme.colors.gray[300])};
    cursor: pointer;
    transition: color 0.2s ease;
    
    &:hover {
        color: ${({ theme }) => theme.colors.gold};
    }
    
    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;

const VoteCount = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.white};
    margin: ${({ theme }) => theme.space[1]} 0;
`;

const PostContent = styled.div`
    flex: 1;
`;

const PostHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.space[3]};
`;

const AuthorInfo = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
`;

const AuthorAvatar = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.gray[300]};
`;

const AuthorName = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    color: ${({ theme }) => theme.colors.white};
`;

const PostDate = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray[300]};
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[1]};
`;

const PostActions = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.space[2]};
`;

const ActionButton = styled(Button)`
    padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[2]};
    height: auto;
    font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const PostBody = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.white};
    line-height: 1.6;
    margin-bottom: ${({ theme }) => theme.space[4]};
`;

const ReplyForm = styled.form`
    margin-top: ${({ theme }) => theme.space[6]};
`;

const ReplyFormTitle = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    margin-bottom: ${({ theme }) => theme.space[4]};
    color: ${({ theme }) => theme.colors.white};
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
        color: ${({ theme }) => theme.colors.gold[500]};
    }
`;

const SubmitButton = styled(Button)`
    margin-top: ${({ theme }) => theme.space[4]};
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
`;

export {
    PageHeader,
    BackButton,
    PageTitle,
    TopicContainer,
    TopicCard,
    PostContainer,
    VoteColumn,
    VoteButton,
    VoteCount,
    PostContent,
    PostHeader,
    AuthorInfo,
    AuthorAvatar,
    AuthorName,
    PostDate,
    PostActions,
    ActionButton,
    PostBody,
    ReplyForm,
    ReplyFormTitle,
    TextArea,
    SubmitButton
};