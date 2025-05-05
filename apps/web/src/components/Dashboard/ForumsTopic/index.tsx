'use client';

import React, { 
    useState, 
    useEffect 
} from 'react';

import Link from 'next/link';

import {
    MessageSquare, 
    ChevronUp, 
    ChevronDown, 
    ArrowLeft, 
    User, 
    Clock, 
    Reply, 
    Flag 
} from 'lucide-react';

import DashboardLayout from '@/components/Dashboard/Layout';

import { 
    CardContent 
} from '@/components/UI/card';

import * as S from './styles';

interface Post {
    id: number
    author: string
    date: string
    content: string
    votes: number
    userVote: 'up' | 'down' | null
    isOriginalPost?: boolean
};

interface Topic {
    id: string
    title: string
    posts: Post[]
};

export default function TopicPage({ topicId }: { topicId: string }) {
    const [topic, setTopic] = useState<Topic | null>(null);
    const [replyContent, setReplyContent] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const mockTopic: Topic = {
            id: topicId,
            title: 'FURIA vs MiBR - Match Discussion',
            posts: [
                {
                    id: 1,
                    author: 'furiafan123',
                    date: '2 hours ago',
                    content:
                        'What an amazing match between FURIA and MiBR! The tactics displayed by FURIA on Inferno were incredible. The way they controlled mid and banana was a masterclass in CS2 strategy.\n\nWhat did you all think about the performance? Do you think they can maintain this level in the upcoming Major?',
                    votes: 24,
                    userVote: null,
                    isOriginalPost: true,
                },
                {
                    id: 2,
                    author: 'cs2pro',
                    date: '1 hour ago',
                    content:
                        'I was really impressed with the AWP plays. The coordination between the players was on another level compared to previous matches. If they keep this up, they definitely have a shot at the Major title.',
                    votes: 15,
                    userVote: null,
                },
                {
                    id: 3,
                    author: 'tacticalmaster',
                    date: '45 minutes ago',
                    content:
                        'The utility usage was perfect. They barely wasted any flashes or smokes. I think their coach has been putting in a lot of work on their executes. Really looking forward to seeing them against international competition.',
                    votes: 8,
                    userVote: null,
                },
                {
                    id: 4,
                    author: 'goldenfan',
                    date: '30 minutes ago',
                    content:
                        'Does anyone know if theyre going to stick with this lineup for the Major? I heard rumors about potential changes but this performance makes me think they should keep the current roster.',
                    votes: 3,
                    userVote: null,
                },
            ],
        };

        setTopic(mockTopic);
    }, [topicId]);

    const handleUpvote = (postId: number) => {
        if (!topic) return;

        setTopic({
            ...topic,
            posts: topic.posts.map((post) => {
                if (post.id === postId) {
                    if (post.userVote === 'up') {
                        return {
                            ...post,
                            votes: post.votes - 1,
                            userVote: null,
                        };
                    } else if (post.userVote === 'down') {
                        return {
                            ...post,
                            votes: post.votes + 2,
                            userVote: 'up',
                        }
                    } else {
                        return {
                            ...post,
                            votes: post.votes + 1,
                            userVote: 'up',
                        };
                    };
                };
                return post;
            }),
        });
    };

    const handleDownvote = (postId: number) => {
        if (!topic) return;

        setTopic({
            ...topic,
            posts: topic.posts.map((post) => {
                if (post.id === postId) {
                    if (post.userVote === 'down') {
                        return {
                            ...post,
                            votes: post.votes + 1,
                            userVote: null,
                        };
                    } else if (post.userVote === 'up') {
                        return {
                            ...post,
                            votes: post.votes - 2,
                            userVote: 'down',
                        };
                    } else {
                        return {
                            ...post,
                            votes: post.votes - 1,
                            userVote: 'down',
                        };
                    };
                };
                return post;
            }),
        });
    };

    const handleSubmitReply = (e: React.FormEvent) => {
        e.preventDefault();

        if (!replyContent.trim()) {
            setError('Reply content cannot be empty');
            return;
        };

        if (!topic) return;

        const newPost: Post = {
            id: topic.posts.length + 1,
            author: 'currentUser', 
            date: 'Just now',
            content: replyContent,
            votes: 0,
            userVote: null,
        };

        setTopic({
            ...topic,
            posts: [...topic.posts, newPost],
        });

        setReplyContent('');
        setError('');
    };

    if (!topic) {
        return (
            <DashboardLayout>
                <div>Loading...</div>
            </DashboardLayout>
        );
    };

    return (
        <DashboardLayout>
            <S.PageHeader>
                <S.BackButton as={Link} href='/dashboard/community/forums' $variant='outline'>
                    <ArrowLeft size={16} />
                    Back to Forums
                </S.BackButton>
                <S.PageTitle>{topic.title}</S.PageTitle>
            </S.PageHeader>

            <S.TopicContainer>
                <S.TopicCard>
                    <CardContent>
                        {topic.posts.map((post) => (
                            <S.PostContainer key={post.id}>
                                <S.VoteColumn>
                                    <S.VoteButton onClick={() => handleUpvote(post.id)} $active={post.userVote === 'up'}>
                                        <ChevronUp size={20} />
                                    </S.VoteButton>
                                    <S.VoteCount>{post.votes}</S.VoteCount>
                                    <S.VoteButton onClick={() => handleDownvote(post.id)} $active={post.userVote === 'down'}>
                                        <ChevronDown size={20} />
                                    </S.VoteButton>
                                </S.VoteColumn>

                                <S.PostContent>
                                    <S.PostHeader>
                                        <S.AuthorInfo>
                                            <S.AuthorAvatar>
                                                <User size={20} />
                                            </S.AuthorAvatar>
                                            <div>
                                                <S.AuthorName>{post.author}</S.AuthorName>
                                                <S.PostDate>
                                                    <Clock size={14} />
                                                    {post.date}
                                                </S.PostDate>
                                            </div>
                                        </S.AuthorInfo>
                                        <S.PostActions>
                                            <S.ActionButton $variant='ghost' size='sm'>
                                                <Reply size={14} />
                                                Quote
                                            </S.ActionButton>
                                            <S.ActionButton $variant='ghost' size='sm'>
                                                <Flag size={14} />
                                                Report
                                            </S.ActionButton>
                                        </S.PostActions>
                                    </S.PostHeader>
                                    <S.PostBody>
                                        {post.content.split('\n').map((paragraph, index) => (
                                            <p key={index} style={{ marginBottom: '1rem' }}>
                                                {paragraph}
                                            </p>
                                        ))}
                                    </S.PostBody>
                                </S.PostContent>
                            </S.PostContainer>
                        ))}
                    </CardContent>
                </S.TopicCard>
            </S.TopicContainer>
        </DashboardLayout>
    );
};