'use client';

import DashboardLayout from '@/components/DashboardLayout';

import ProfileOverview from '@/components/DashboardProfileOverview'
import Recommendations from '@/components/DashboardRecomendations'
import AIInsights from '@/components/DashboardAIInsights'
import SocialConnections from '@/components/DashboardSocialConnections'
import UpcomingEvents from '@/components/DashboardUpcomingEvents'

import * as S from './styles';

export default function Dashboard() {
    return (
        <DashboardLayout>
            <S.DashboardGrid>
                <S.MainContent>
                    <ProfileOverview />
                    <AIInsights />
                    <UpcomingEvents />
                </S.MainContent>

                <S.SideContent>
                    <Recommendations />
                    <SocialConnections />
                </S.SideContent>
            </S.DashboardGrid>
        </DashboardLayout>
    );
};