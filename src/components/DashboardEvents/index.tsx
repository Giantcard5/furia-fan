'use client';

import { useState, useMemo } from 'react';

import Link from 'next/link';

import { 
    Calendar, 
    MapPin, 
    Filter, 
    Search, 
    ChevronDown, 
    Users, 
    Trophy,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

import * as S from './styles';

import DashboardLayout from '@/components/DashboardLayout';

export default function EventsPage() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 6;

    const allEvents = [
        {
            id: 1,
            title: 'FURIA vs MiBR',
            type: 'match',
            date: 'Apr 30, 2025',
            time: '18:00',
            location: 'São Paulo, Brazil',
            image: '',
            attendees: 156,
            game: 'CS2',
        },
        {
            id: 2,
            title: 'CS2 Major Copenhagen',
            type: 'tournament',
            date: 'May 14, 2025',
            time: '10:00',
            location: 'Copenhagen, Denmark',
            image: '',
            attendees: 243,
            game: 'CS2',
        },
        {
            id: 3,
            title: 'FURIA Fan Meet',
            type: 'fan-meet',
            date: 'Jun 9, 2025',
            time: '15:00',
            location: 'Rio de Janeiro, Brazil',
            image: '',
            attendees: 89,
            game: null,
        },
        {
            id: 4,
            title: 'FURIA vs Liquid',
            type: 'match',
            date: 'Jun 15, 2025',
            time: '19:30',
            location: 'Los Angeles, USA',
            image: '',
            attendees: 112,
            game: 'CS2',
        },
        {
            id: 5,
            title: 'Valorant Champions Tour',
            type: 'tournament',
            date: 'Jul 5, 2025',
            time: '12:00',
            location: 'Berlin, Germany',
            image: '',
            attendees: 178,
            game: 'Valorant',
        },
        {
            id: 6,
            title: 'FURIA Community Day',
            type: 'fan-meet',
            date: 'Jul 20, 2025',
            time: '14:00',
            location: 'São Paulo, Brazil',
            image: '',
            attendees: 65,
            game: null,
        },
        {
            id: 7,
            title: 'FURIA Community Day',
            type: 'fan-meet',
            date: 'Jul 20, 2025',
            time: '14:00',
            location: 'São Paulo, Brazil',
            image: '',
            attendees: 65,
            game: null,
        },
    ]

    const filteredEvents = allEvents.filter((event) => {
        const matchesFilter = activeFilter === 'all' || event.type === activeFilter;
        const matchesSearch =
            event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (event.game && event.game.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesFilter && matchesSearch;
    });

    const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
    
    useMemo(() => {
        setCurrentPage(1);
    }, [activeFilter, searchQuery]);
    
    const currentEvents = useMemo(() => {
        const indexOfLastEvent = currentPage * eventsPerPage;
        const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
        return filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);
    }, [filteredEvents, currentPage, eventsPerPage]);
    
    const handlePageChange = (pageNumber: number) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        };
    };
    
    const getPageNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages = 5;
        
        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            };
        } else {
            pageNumbers.push(1);
            
            let startPage = Math.max(2, currentPage - 1);
            let endPage = Math.min(totalPages - 1, currentPage + 1);
            
            if (currentPage <= 2) {
                endPage = 4;
            };
            
            if (currentPage >= totalPages - 1) {
                startPage = totalPages - 3;
            };
            
            if (startPage > 2) {
                pageNumbers.push('...');
            };
            
            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(i);
            };
            
            if (endPage < totalPages - 1) {
                pageNumbers.push('...');
            };
            
            pageNumbers.push(totalPages);
        };
        
        return pageNumbers;
    };

    return (
        <DashboardLayout>
            <S.PageHeader>
                <S.PageTitle>
                    <Calendar size={24} />
                    Events
                </S.PageTitle>
            </S.PageHeader>

            <S.FiltersContainer>
                <div>
                    <S.FilterButton
                        variant={activeFilter === 'all' ? 'primary' : 'outline'}
                        active={activeFilter === 'all'}
                        onClick={() => setActiveFilter('all')}
                    >
                        All Events
                    </S.FilterButton>
                    <S.FilterButton
                        variant={activeFilter === 'match' ? 'primary' : 'outline'}
                        active={activeFilter === 'match'}
                        onClick={() => setActiveFilter('match')}
                    >
                        <Trophy size={16} />
                        Matches
                    </S.FilterButton>
                    <S.FilterButton
                        variant={activeFilter === 'tournament' ? 'primary' : 'outline'}
                        active={activeFilter === 'tournament'}
                        onClick={() => setActiveFilter('tournament')}
                    >
                        <Trophy size={16} />
                        Tournaments
                    </S.FilterButton>
                    <S.FilterButton
                        variant={activeFilter === 'fan-meet' ? 'primary' : 'outline'}
                        active={activeFilter === 'fan-meet'}
                        onClick={() => setActiveFilter('fan-meet')}
                    >
                        <Users size={16} />
                        Fan Meets
                    </S.FilterButton>
                    <S.FilterButton variant='outline'>
                        <Filter size={16} />
                        More Filters
                        <ChevronDown size={14} />
                    </S.FilterButton>
                </div>
                <S.SearchContainer>
                    <S.SearchIcon>
                        <Search size={18} />
                    </S.SearchIcon>
                    <S.SearchInput
                        placeholder='Search events...'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </S.SearchContainer>
            </S.FiltersContainer>

            <S.EventsGrid>
                {currentEvents.length > 0 ? (
                    currentEvents.map((event) => (
                        <S.EventCard key={event.id}>
                            <S.EventImage image={event.image}>
                                <S.EventTag type={event.type}>
                                    {event.type === 'match' ? 'Match' : event.type === 'tournament' ? 'Tournament' : 'Fan Meet'}
                                </S.EventTag>
                            </S.EventImage>
                            <S.EventContent>
                                <div>
                                    <S.EventTitle>{event.title}</S.EventTitle>
                                    <S.EventMeta>
                                        <S.MetaItem>
                                            <Calendar size={16} />
                                            {event.date} at {event.time}
                                        </S.MetaItem>
                                        <S.MetaItem>
                                            <MapPin size={16} />
                                            {event.location}
                                        </S.MetaItem>
                                        {event.game && (
                                            <S.MetaItem>
                                                <Trophy size={16} />
                                                {event.game}
                                            </S.MetaItem>
                                        )}
                                        <S.MetaItem>
                                            <Users size={16} />
                                            {event.attendees} attending
                                        </S.MetaItem>
                                    </S.EventMeta>
                                </div>
                                <S.EventActions>
                                    <S.ActionButton as={Link} href={`/dashboard/events/${event.id}`} variant='outline'>
                                        Details
                                    </S.ActionButton>
                                </S.EventActions>
                            </S.EventContent>
                        </S.EventCard>
                    ))
                ) : (
                    <S.NoEvents>
                        <div>No events found matching your criteria</div>
                    </S.NoEvents>
                )}
            </S.EventsGrid>

            {totalPages > 1 && (
                <S.Pagination>
                    <S.PaginationButton 
                        variant='outline' 
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <ChevronLeft size={16} />
                    </S.PaginationButton>
                    
                    {getPageNumbers().map((pageNumber, index) => (
                        pageNumber === '...' ? (
                            <span key={`ellipsis-${index}`} style={{ margin: '0 4px' }}>...</span>
                        ) : (
                            <S.PaginationButton 
                                key={index} 
                                variant='outline' 
                                active={currentPage === pageNumber}
                                onClick={() => handlePageChange(pageNumber as number)}
                            >
                                {pageNumber}
                            </S.PaginationButton>
                        )
                    ))}
                    
                    <S.PaginationButton 
                        variant='outline' 
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        <ChevronRight size={16} />
                    </S.PaginationButton>
                </S.Pagination>
            )}
        </DashboardLayout>
    );
};