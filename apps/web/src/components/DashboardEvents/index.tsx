'use client';

import { useState, useMemo, useEffect } from 'react';

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

import { 
    apiService 
} from '@/lib/api-service';

import { 
    Event 
} from '@/types/event';

import { 
    formatDate 
} from '@/utils/formatters';

export default function EventsPage() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [events, setEvents] = useState<Event[]>([]);

    const eventsPerPage = 6;

    const fetchEvents = async () => {
        setLoading(true);

        try {
            const response = await apiService.getEventsData();

            if (response.error) {
                throw new Error(response.error);
            };

            setEvents(response.data);
        } catch (err) {
            console.error('Error fetching messages:', err);
        } finally {
            setLoading(false);
        };
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const filteredEvents = events.filter((event) => {
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
                        $variant={activeFilter === 'all' ? 'primary' : 'outline'}
                        $active={activeFilter === 'all'}
                        onClick={() => setActiveFilter('all')}
                    >
                        All Events
                    </S.FilterButton>
                    <S.FilterButton
                        $variant={activeFilter === 'match' ? 'primary' : 'outline'}
                        $active={activeFilter === 'match'}
                        onClick={() => setActiveFilter('match')}
                    >
                        <Trophy size={16} />
                        Matches
                    </S.FilterButton>
                    <S.FilterButton
                        $variant={activeFilter === 'tournament' ? 'primary' : 'outline'}
                        $active={activeFilter === 'tournament'}
                        onClick={() => setActiveFilter('tournament')}
                    >
                        <Trophy size={16} />
                        Tournaments
                    </S.FilterButton>
                    <S.FilterButton
                        $variant={activeFilter === 'fan-meet' ? 'primary' : 'outline'}
                        $active={activeFilter === 'fan-meet'}
                        onClick={() => setActiveFilter('fan-meet')}
                    >
                        <Users size={16} />
                        Fan Meets
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
                            <S.EventImage $image={event.image}>
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
                                            {formatDate(event.date)} at {event.time}
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
                                    <S.ActionButton as={Link} href='https://www.instagram.com/furiagg/' target='_blank' $variant='outline' >
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
                        $variant='outline' 
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
                                $variant='outline' 
                                $active={currentPage === pageNumber}
                                onClick={() => handlePageChange(pageNumber as number)}
                            >
                                {pageNumber}
                            </S.PaginationButton>
                        )
                    ))}
                    
                    <S.PaginationButton 
                        $variant='outline' 
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