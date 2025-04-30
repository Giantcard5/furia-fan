'use client';

import Link from 'next/link';

import { 
    Calendar, 
    MapPin, 
    ChevronRight 
} from 'lucide-react';

import * as S from './styles';

export default function UpcomingEvents() {
    const events = [
        {
            id: 1,
            title: 'FURIA vs MiBR',
            date: 'Apr 30, 2025',
            location: 'São Paulo, Brazil',
            tag: 'FURIA Event',
            image: '/images/furia-vs-mibr.png',
        },
        {
            id: 2,
            title: 'CS2 Major Copenhagen',
            date: 'May 14, 2025',
            location: 'Copenhagen, Denmark',
            tag: 'FURIA Event',
            image: '/images/furia-vs-liquid.png',
        },
        {
            id: 3,
            title: 'FURIA Fan Meet',
            date: 'Jun 9, 2025',
            location: 'Rio de Janeiro, Brazil',
            tag: 'FURIA Event',
            image: '/images/furia-fan-meet.png',
        },
    ]

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
                                <S.EventTag>{event.tag}</S.EventTag>
                            </S.EventImage>
                            <S.EventContent>
                                <S.EventTitle>{event.title}</S.EventTitle>
                                <S.EventMeta>
                                    <Calendar size={12} />
                                    {event.date}
                                </S.EventMeta>
                                <S.EventLocation>
                                    <MapPin size={12} />
                                    {event.location}
                                </S.EventLocation>
                                <S.ViewDetailsButton as={Link} href={`/dashboard/events/${event.id}`} $variant='outline' size='sm'>
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