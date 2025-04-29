'use client';

import React, { 
    useState 
} from 'react';

import { 
    HelpCircle, 
    MessageSquare, 
    FileText, 
    Search,
    ChevronUp,
    ChevronDown,
    Phone,
    Mail
} from 'lucide-react';

import * as S from './styles';

import DashboardLayout from '../DashboardLayout';

import { 
    FormGroup, 
    Label, 
    Input 
} from '../UI/input';

export default function HelpPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const categories = [
        {
            id: 1,
            title: 'Account & Profile',
            description: 'Manage your account settings, profile information, and security.',
            icon: <HelpCircle size={24} />,
            link: '/dashboard/help/account',
        },
        {
            id: 2,
            title: 'Events & Tickets',
            description: 'Information about FURIA events, tickets, and attendance.',
            icon: <FileText size={24} />,
            link: '/dashboard/help/events',
        },
        {
            id: 3,
            title: 'Shop & Merchandise',
            description: 'Help with orders, shipping, returns, and product information.',
            icon: <FileText size={24} />,
            link: '/dashboard/help/shop',
        },
        {
            id: 4,
            title: 'Community & Forums',
            description: 'Guidelines for participating in the FURIA community.',
            icon: <MessageSquare size={24} />,
            link: '/dashboard/help/community',
        },
        {
            id: 5,
            title: 'Technical Support',
            description: 'Troubleshooting common issues with the platform.',
            icon: <HelpCircle size={24} />,
            link: '/dashboard/help/technical',
        },
        {
            id: 6,
            title: 'Billing & Payments',
            description: 'Information about payments, subscriptions, and billing issues.',
            icon: <FileText size={24} />,
            link: '/dashboard/help/billing',
        },
    ];

    const faqs = [
        {
            id: 1,
            question: 'How do I change my profile picture?',
            answer:
                "To change your profile picture, go to your Profile page and click on the edit icon on your current profile picture. You can upload a new image from your device. Supported formats are JPG, PNG, and GIF with a maximum size of 5MB.",
        },
        {
            id: 2,
            question: 'How do I reset my password?',
            answer:
                "If you need to reset your password, click on the Forgot Password link on the login page. Enter the email address associated with your account, and we'll send you instructions to reset your password. For security reasons, the reset link is valid for 24 hours.",
        },
        {
            id: 3,
            question: 'How do I connect my social media accounts?',
            answer:
                "You can connect your social media accounts by going to Settings > Social Connections. Click on the Connect button next to the platform you want to link. You'll be redirected to authorize the connection. This allows you to share content and login more easily.",
        },
        {
            id: 4,
            question: 'How do I RSVP for FURIA events?',
            answer:
                "To RSVP for FURIA events, navigate to the Events page and find the event you're interested in. Click on the event card to view details, then click the RSVP button. You'll receive a confirmation email and the event will be added to your calendar.",
        },
        {
            id: 5,
            question: 'How do I track my merchandise order?',
            answer:
                "Once your order is shipped, you'll receive a tracking number via email. You can also check your order status by going to Shop > My Orders and selecting the specific order. The tracking information will be displayed there with a link to the carrier's tracking page.",
        },
    ];

    const toggleFAQ = (id: number) => {
        if (openFAQ === id) {
            setOpenFAQ(null);
        } else {
            setOpenFAQ(id);
        };
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Support request submitted!');
    };

    return (
        <DashboardLayout>
            <S.HelpContainer>
                <S.SearchSection>
                    <S.SearchTitle>How can we help you?</S.SearchTitle>
                    <S.SearchDescription>
                        Search our knowledge base for answers to common questions or browse the categories below.
                    </S.SearchDescription>
                    <S.SearchContainer>
                        <S.SearchIcon>
                            <Search size={20} />
                        </S.SearchIcon>
                        <S.SearchInput
                            placeholder='Search for help...'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </S.SearchContainer>
                </S.SearchSection>

                <S.CategoriesGrid>
                    {categories.map((category) => (
                        <S.CategoryCard key={category.id}>
                            <S.CategoryHeader>
                                <S.CategoryIcon>{category.icon}</S.CategoryIcon>
                                <S.CategoryTitle>{category.title}</S.CategoryTitle>
                            </S.CategoryHeader>
                            <S.CategoryContent>
                                <S.CategoryDescription>{category.description}</S.CategoryDescription>
                                <S.CategoryLink href={category.link}>
                                    Learn more <span>›</span>
                                </S.CategoryLink>
                            </S.CategoryContent>
                        </S.CategoryCard>
                    ))}
                </S.CategoriesGrid>

                <S.FAQSection>
                    <S.SectionTitle>Frequently Asked Questions</S.SectionTitle>
                    {faqs.map((faq) => (
                        <S.FAQCard key={faq.id}>
                            <S.FAQHeader onClick={() => toggleFAQ(faq.id)}>
                                <S.FAQTitle>{faq.question}</S.FAQTitle>
                                <S.FAQIcon className={openFAQ === faq.id ? 'open' : ''}>
                                    {openFAQ === faq.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </S.FAQIcon>
                            </S.FAQHeader>
                            <S.FAQContent isOpen={openFAQ === faq.id}>
                                <S.FAQText>{faq.answer}</S.FAQText>
                            </S.FAQContent>
                        </S.FAQCard>
                    ))}
                </S.FAQSection>

                <S.ContactSection>
                    <S.SectionTitle>Contact Us</S.SectionTitle>
                    <S.ContactGrid>
                        <S.ContactCard>
                            <S.ContactIcon>
                                <MessageSquare size={32} />
                            </S.ContactIcon>
                            <S.ContactTitle>Live Chat</S.ContactTitle>
                            <S.ContactDescription>Chat with our support team for immediate assistance.</S.ContactDescription>
                            <S.ContactButton variant='outline'>
                                <MessageSquare size={16} />
                                Start Chat
                            </S.ContactButton>
                        </S.ContactCard>
                        <S.ContactCard>
                            <S.ContactIcon>
                                <Phone size={32} />
                            </S.ContactIcon>
                            <S.ContactTitle>Phone Support</S.ContactTitle>
                            <S.ContactDescription>Call us for urgent issues or complex problems.</S.ContactDescription>
                            <S.ContactButton variant='outline'>
                                <Phone size={16} />
                                +1 (800) 123-4567
                            </S.ContactButton>
                        </S.ContactCard>
                        <S.ContactCard>
                            <S.ContactIcon>
                                <Mail size={32} />
                            </S.ContactIcon>
                            <S.ContactTitle>Email Support</S.ContactTitle>
                            <S.ContactDescription>Send us an email and we'll respond within 24 hours.</S.ContactDescription>
                            <S.ContactButton variant='outline'>
                                <Mail size={16} />
                                support@furia.org
                            </S.ContactButton>
                        </S.ContactCard>
                    </S.ContactGrid>
                </S.ContactSection>

                <S.SupportForm onSubmit={handleSubmit}>
                    <S.FormTitle>Submit a Support Request</S.FormTitle>
                    <S.FormRow>
                        <FormGroup>
                            <Label htmlFor='name'>Your Name</Label>
                            <Input id='name' name='name' placeholder='Enter your name' fullWidth />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor='email'>Email Address</Label>
                            <Input id='email' name='email' type='email' placeholder='Enter your email' fullWidth />
                        </FormGroup>
                    </S.FormRow>
                    <FormGroup>
                        <Label htmlFor='subject'>Subject</Label>
                        <Input id='subject' name='subject' placeholder='What is your request about?' fullWidth />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='message'>Message</Label>
                        <S.TextArea id='message' name='message' placeholder='Describe your issue or question in detail...' />
                    </FormGroup>
                    <S.SubmitButton type='submit' variant='primary'>
                        <Mail size={16} />
                        Submit Request
                    </S.SubmitButton>
                </S.SupportForm>
            </S.HelpContainer>
        </DashboardLayout>
    );
};