'use client';

import Link from 'next/link';

import { 
    CheckCircle, 
    ChevronRight 
} from 'lucide-react';

import * as S from './styles';

export default function Recommendations() {
    const recommendations = [
        {
            id: 1,
            title: 'Complete your profile',
            description: 'Add more information to get personalized recommendations',
            action: 'Update Profile',
            actionLink: '/dashboard/profile',
            completed: false,
            active: true,
        },
        {
            id: 2,
            title: 'Connect Discord',
            description: 'Join the FURIA Discord community',
            action: 'Connect',
            actionLink: '/dashboard/connections',
            completed: false,
            active: false,
        },
        {
            id: 3,
            title: 'Verify your email',
            description: 'Confirm your email to receive updates',
            action: null,
            actionLink: null,
            completed: true,
            active: false,
        },
    ]

    return (
        <S.RecommendationsCard>
            <S.RecommendationsHeader>
                <S.RecommendationsTitle>Recommendations</S.RecommendationsTitle>
            </S.RecommendationsHeader>

            <S.RecommendationsContent>
                <S.RecommendationsList>
                    {recommendations.map((recommendation) => (
                        <S.RecommendationItem
                            key={recommendation.id}
                            $active={recommendation.active}
                        >
                            <S.RecommendationIcon $completed={recommendation.completed} $active={recommendation.active}>
                                {recommendation.completed ? (
                                    <CheckCircle size={16} />
                                ) : (
                                    <div
                                        style={{
                                            width: 16,
                                            height: 16,
                                            borderRadius: '50%',
                                            border: '1px solid currentColor',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '10px',
                                        }}
                                    >
                                        {recommendation.active ? '✓' : '○'}
                                    </div>
                                )}
                            </S.RecommendationIcon>

                            <S.RecommendationContent>
                                <S.RecommendationTitle>{recommendation.title}</S.RecommendationTitle>
                                <S.RecommendationDescription>{recommendation.description}</S.RecommendationDescription>

                                {recommendation.action && (
                                    <S.RecommendationAction as={Link} href={recommendation.actionLink || '#'} $variant='outline' size='sm'>
                                        {recommendation.action} ›
                                    </S.RecommendationAction>
                                )}
                            </S.RecommendationContent>
                        </S.RecommendationItem>
                    ))}
                </S.RecommendationsList>

                <S.ViewAllButton as={Link} href='/dashboard/recommendations' $variant='ghost' size='sm'>
                    View All Recommendations
                    <ChevronRight size={16} />
                </S.ViewAllButton>
            </S.RecommendationsContent>
        </S.RecommendationsCard>
    );
};