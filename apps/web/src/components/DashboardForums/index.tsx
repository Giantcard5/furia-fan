'use client'

import { 
    useState 
} from 'react';

import Link from 'next/link';

import { 
    MessageSquare, 
    Plus, 
    ChevronUp, 
    ChevronDown, 
    Clock, 
    User 
} from 'lucide-react';

import DashboardLayout from '@/components/DashboardLayout';

import * as S from './styles';

interface Topic {
    id: number
    title: string
    author: string
    date: string
    replies: number
    views: number
    votes: number
    userVote: 'up' | 'down' | null
};

export default function ForumsPage() {
    const [topics, setTopics] = useState<Topic[]>([
        {
            id: 1,
            title: 'FURIA vs MiBR - Match Discussion',
            author: 'furiafan123',
            date: '2 hours ago',
            replies: 24,
            views: 156,
            votes: 15,
            userVote: null,
        },
        {
            id: 2,
            title: 'New CS2 strategies for Inferno',
            author: 'tacticalmaster',
            date: '5 hours ago',
            replies: 18,
            views: 203,
            votes: 32,
            userVote: null,
        },
        {
            id: 3,
            title: 'FURIA jersey 2025 - What do you expect?',
            author: 'goldenfan',
            date: '1 day ago',
            replies: 42,
            views: 512,
            votes: 28,
            userVote: null,
        },
        {
            id: 4,
            title: 'Copenhagen Major predictions',
            author: 'esportsguru',
            date: '2 days ago',
            replies: 56,
            views: 789,
            votes: 45,
            userVote: null,
        },
        {
            id: 5,
            title: 'Best FURIA moments of 2024 so far',
            author: 'highlightking',
            date: '3 days ago',
            replies: 31,
            views: 421,
            votes: 39,
            userVote: null,
        },
    ]);

    const handleUpvote = (topicId: number) => {
        setTopics((prevTopics) =>
            prevTopics.map((topic) => {
                if (topic.id === topicId) {
                    if (topic.userVote === 'up') {
                        return {
                            ...topic,
                            votes: topic.votes - 1,
                            userVote: null,
                        };
                    } else if (topic.userVote === 'down') {
                        return {
                            ...topic,
                            votes: topic.votes + 2,
                            userVote: 'up',
                        };
                    } else {
                        return {
                            ...topic,
                            votes: topic.votes + 1,
                            userVote: 'up',
                        };
                    };
                };
                return topic;
            }),
        );
    };

    const handleDownvote = (topicId: number) => {
        setTopics((prevTopics) =>
            prevTopics.map((topic) => {
                if (topic.id === topicId) {
                    if (topic.userVote === 'down') {
                        return {
                            ...topic,
                            votes: topic.votes + 1,
                            userVote: null,
                        }
                    } else if (topic.userVote === 'up') {
                        return {
                            ...topic,
                            votes: topic.votes - 2,
                            userVote: 'down',
                        };
                    } else {
                        return {
                            ...topic,
                            votes: topic.votes - 1,
                            userVote: 'down',
                        };
                    };
                }
                return topic;
            }),
        );
    };

    return (
        <DashboardLayout>
            <S.PageHeader>
                <S.PageTitle>
                    <MessageSquare size={24} />
                    Community Forums
                </S.PageTitle>
            </S.PageHeader>

            <S.ForumsContainer>
                <S.ForumCard>
                    <S.ForumHeader>
                        <S.ForumTitle>
                            <MessageSquare size={20} />
                            General Discussion
                        </S.ForumTitle>
                    </S.ForumHeader>

                    <S.ForumContent>
                        <S.TopicsList>
                            {topics.map((topic) => (
                                <S.TopicItem key={topic.id}>
                                    <S.VoteColumn>
                                        <S.VoteButton onClick={() => handleUpvote(topic.id)} $active={topic.userVote === 'up'}>
                                            <ChevronUp size={20} />
                                        </S.VoteButton>
                                        <S.VoteCount>{topic.votes}</S.VoteCount>
                                        <S.VoteButton onClick={() => handleDownvote(topic.id)} $active={topic.userVote === 'down'}>
                                            <ChevronDown size={20} />
                                        </S.VoteButton>
                                    </S.VoteColumn>

                                    <S.TopicContent>
                                        <S.TopicTitle>
                                            <Link href={`/dashboard/community/forums/topic/${topic.id}`}>{topic.title}</Link>
                                        </S.TopicTitle>
                                        <S.TopicMeta>
                                            <S.MetaItem>
                                                <User size={14} />
                                                {topic.author}
                                            </S.MetaItem>
                                            <S.MetaItem>
                                                <Clock size={14} />
                                                {topic.date}
                                            </S.MetaItem>
                                        </S.TopicMeta>
                                    </S.TopicContent>

                                    <S.TopicStats>
                                        <S.StatsNumber>{topic.replies}</S.StatsNumber>
                                        <S.StatsLabel>Replies</S.StatsLabel>
                                    </S.TopicStats>

                                    <S.TopicStats>
                                        <S.StatsNumber>{topic.views}</S.StatsNumber>
                                        <S.StatsLabel>Views</S.StatsLabel>
                                    </S.TopicStats>
                                </S.TopicItem>
                            ))}
                        </S.TopicsList>
                    </S.ForumContent>
                </S.ForumCard>

                <S.Pagination>
                    <S.PaginationButton $variant='outline'>«</S.PaginationButton>
                    <S.PaginationButton $variant='outline' $active>1</S.PaginationButton>
                    <S.PaginationButton $variant='outline'>2</S.PaginationButton>
                    <S.PaginationButton $variant='outline'>3</S.PaginationButton>
                    <S.PaginationButton $variant='outline'>»</S.PaginationButton>
                </S.Pagination>
            </S.ForumsContainer>
        </DashboardLayout>
    );
};