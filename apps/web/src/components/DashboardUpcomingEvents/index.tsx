'use client';

import Link from 'next/link';

import { 
    Calendar, 
    MapPin, 
    ChevronRight 
} from 'lucide-react';

import * as S from './styles';

import { 
    Event 
} from '@/types/event';

export default function UpcomingEvents({ events, loading }: { events: Event[], loading: boolean }) {
    return (
        <S.EventsCard>
            <S.EventsHeader>
                <S.EventsTitle>Upcoming Events</S.EventsTitle>
            </S.EventsHeader>

            <S.EventsContent>
                <S.EventsGrid>
                    {events.map((event) => (
                        <S.EventCard key={event.id}>
                            <S.EventImage $image={event.image}>
                                <S.EventTag>{event.type}</S.EventTag>
                            </S.EventImage>
                            <S.EventContent>
                                <S.EventInfo>
                                    <S.EventTitle>{event.title}</S.EventTitle>
                                    <S.EventMeta>
                                        <Calendar size={12} />
                                        {event.date}
                                    </S.EventMeta>
                                    <S.EventLocation>
                                        <MapPin size={12} />
                                        {event.location}
                                    </S.EventLocation>
                                </S.EventInfo>
                                <S.ViewDetailsButton as={Link} href='/dashboard/events' $variant='outline' size='sm'>
                                    View Details
                                </S.ViewDetailsButton>
                            </S.EventContent>
                        </S.EventCard>
                    ))}
                </S.EventsGrid>

                <S.ViewAllButton as={Link} href='/dashboard/events' $variant='ghost' size='sm'>
                    View All Events
                    <ChevronRight size={16} />
                </S.ViewAllButton>
            </S.EventsContent>
        </S.EventsCard>
    );
};