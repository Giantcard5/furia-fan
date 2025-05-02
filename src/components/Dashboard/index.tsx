'use client';

import {
    useEffect,
    useState
} from 'react';

import DashboardLayout from '@/components/DashboardLayout';

import ProfileOverview from '@/components/DashboardProfileOverview';
import Recommendations from '@/components/DashboardRecomendations';
import SocialConnections from '@/components/DashboardSocialConnections';
import UpcomingEvents from '@/components/DashboardUpcomingEvents';

import * as S from './styles';

import {
    apiService
} from '@/lib/api-service';

import {
    ProfileOverview as ProfileOverviewType
} from '@/types/onboarding';
import {
    Event
} from '@/types/event';

import {
    useAuth
} from '@/hooks/useAuth';

export default function Dashboard() {
    const { getCPF } = useAuth();

    const [profile, setProfile] = useState<ProfileOverviewType>({
        profileImage: null,
        email: '',
        fullName: '',
        games: [],
        socialMedia: {}
    } as ProfileOverviewType);
    const [loadingProfile, setLoadingProfile] = useState(false);
    const [events, setEvents] = useState<Event[]>([]);
    const [loadingEvents, setLoadingEvents] = useState(false);

    const fetchProfile = async () => {
        setLoadingProfile(true);

        try {
            const cpf = getCPF();
            if (!cpf) {
                throw new Error('No CPF found');
            };

            const response = await apiService.getUserProfileOverview(cpf);

            if (response.error) {
                throw new Error(response.error);
            };

            setProfile(response.data);
        } catch (err) {
            console.error('Error fetching profile overview:', err);
        } finally {
            setLoadingProfile(false);
        };
    };

    const fetchEvents = async () => {
        setLoadingEvents(true);

        try {
            const response = await apiService.getNextEventsData();

            if (response.error) {
                throw new Error(response.error);
            };

            setEvents(response.data);
        } catch (err) {
            console.error('Error fetching upcoming events:', err);
        } finally {
            setLoadingEvents(false);
        };
    };

    useEffect(() => {
        fetchProfile();
        fetchEvents();
    }, []);

    return (
        <DashboardLayout>
            <S.DashboardGrid>
                <S.MainContent>
                    {/* <ProfileOverview profile={profile} loading={loadingProfile} /> */}
                    <UpcomingEvents events={events} loading={loadingEvents} />
                </S.MainContent>

                <S.SideContent>
                    <Recommendations />
                    <SocialConnections socialMedia={profile.socialMedia} loading={loadingProfile} />
                </S.SideContent>
            </S.DashboardGrid>
        </DashboardLayout>
    );
};