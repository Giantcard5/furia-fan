'use client';

import { 
    useState 
} from 'react';

import { 
    BrainCircuit, 
    Info 
} from 'lucide-react';

import * as S from './styles';

export default function AIInsights() {
    const [activeTab, setActiveTab] = useState('predictions');

    const tabs = [
        { id: 'predictions', label: 'Predictions' },
        { id: 'activity', label: 'Activity' },
        { id: 'engagement', label: 'Engagement' },
    ];

    const insights = [
        {
            id: 1,
            title: 'FURIA Watch Party',
            description: 'Likelihood to enjoy FURIA watch parties',
            value: 85,
        },
        {
            id: 2,
            title: 'Merchandise Interest',
            description: 'Probability of purchasing new FURIA merch',
            value: 72,
        },
        {
            id: 3,
            title: 'Event Attendance',
            description: 'Chance of attending the next FURIA event',
            value: 64,
        },
    ];

    return (
        <S.InsightsCard>
            <S.InsightsHeader>
                <S.InsightsTitle>
                    <BrainCircuit size={20} />
                    AI Insights
                </S.InsightsTitle>
                <S.InfoButton $variant='ghost' size='sm'>
                    <Info size={16} />
                </S.InfoButton>
            </S.InsightsHeader>

            <S.InsightsContent>
                <S.TabsContainer>
                    {tabs.map((tab) => (
                        <S.Tab key={tab.id} active={activeTab === tab.id} onClick={() => setActiveTab(tab.id)}>
                            {tab.label}
                        </S.Tab>
                    ))}
                </S.TabsContainer>

                <S.InsightsList>
                    {insights.map((insight) => (
                        <S.InsightItem key={insight.id}>
                            <S.InsightHeader>
                                <S.InsightTitle>{insight.title}</S.InsightTitle>
                                <S.InsightValue>{insight.value}%</S.InsightValue>
                            </S.InsightHeader>
                            <S.InsightDescription>{insight.description}</S.InsightDescription>
                            <S.InsightProgressBar>
                                <S.InsightProgress value={insight.value} />
                            </S.InsightProgressBar>
                        </S.InsightItem>
                    ))}
                </S.InsightsList>
            </S.InsightsContent>
        </S.InsightsCard>
    );
};