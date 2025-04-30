'use client';

import React, { 
    useState 
} from 'react';

import { 
    GamepadIcon as GameController 
} from 'lucide-react';

import { 
    CardHeader, 
    CardTitle,
    CardDescription, 
    CardContent 
} from '@/components/UI/card';

import Button from '@/components/UI/button';

import * as S from './styles';

interface GamingPreferencesFormProps {
    initialData: any;
    onNext: (data: any) => void;
    onBack: () => void;
};

export default function GamingPreferencesForm({ initialData, onNext, onBack }: GamingPreferencesFormProps) {
    const [formData, setFormData] = useState({
        games: initialData.games || {
            'counter-strike-2': false,
            valorant: false,
            'league-of-legends': false,
            'dota-2': false,
            'rainbow-six-siege': false,
            'apex-legends': false,
            fortnite: false,
            'ea-fc-24': false,
        },
        events: initialData.events || {
            'cs2-major': false,
            'esl-pro-league': false,
            'iem-worlds': false,
            'rio-major': false,
            'blast-premier': false,
            'vct-champions': false,
            'the-international': false,
            'iem-katowice': false,
        },
        playFrequency: initialData.playFrequency || '',
        platform: initialData.platform || '',
        purchases: initialData.purchases || {
            'furia-jersey': false,
            'furia-mousepad': false,
            'furia-poster': false,
            'furia-hoodie': false,
            'furia-cap': false,
            'furia-mug': false,
        },
    });

    const handleCheckboxChange = (category: 'games' | 'events' | 'purchases', name: string) => {
        setFormData((prev) => ({
            ...prev,
            [category]: {
                ...prev[category],
                [name]: !prev[category][name],
            },
        }));
    };

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext(formData);
    };

    return (
        <S.FormContainer>
            <CardHeader>
                <CardTitle>Gaming Preferences</CardTitle>
                <CardDescription>
                    Tell us about your gaming habits and preferences to enhance your fan experience.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <form onSubmit={handleSubmit}>
                    <S.IconContainer>
                        <S.Icon>
                            <GameController size={40} />
                        </S.Icon>
                    </S.IconContainer>

                    <S.SectionTitle>Favorite Games</S.SectionTitle>
                    <S.CheckboxGrid>
                        <S.CheckboxItem>
                            <S.CheckboxLabel>
                                <S.Checkbox
                                    type='checkbox'
                                    checked={formData.games['counter-strike-2']}
                                    onChange={() => handleCheckboxChange('games', 'counter-strike-2')}
                                />
                                Counter-Strike 2
                            </S.CheckboxLabel>
                        </S.CheckboxItem>
                        <S.CheckboxItem>
                            <S.CheckboxLabel>
                                <S.Checkbox
                                    type='checkbox'
                                    checked={formData.games['valorant']}
                                    onChange={() => handleCheckboxChange('games', 'valorant')}
                                />
                                Valorant
                            </S.CheckboxLabel>
                        </S.CheckboxItem>
                        <S.CheckboxItem>
                            <S.CheckboxLabel>
                                <S.Checkbox
                                    type='checkbox'
                                    checked={formData.games['league-of-legends']}
                                    onChange={() => handleCheckboxChange('games', 'league-of-legends')}
                                />
                                League of Legends
                            </S.CheckboxLabel>
                        </S.CheckboxItem>
                        <S.CheckboxItem>
                            <S.CheckboxLabel>
                                <S.Checkbox
                                    type='checkbox'
                                    checked={formData.games['dota-2']}
                                    onChange={() => handleCheckboxChange('games', 'dota-2')}
                                />
                                Dota 2
                            </S.CheckboxLabel>
                        </S.CheckboxItem>
                        <S.CheckboxItem>
                            <S.CheckboxLabel>
                                <S.Checkbox
                                    type='checkbox'
                                    checked={formData.games['rainbow-six-siege']}
                                    onChange={() => handleCheckboxChange('games', 'rainbow-six-siege')}
                                />
                                Rainbow Six Siege
                            </S.CheckboxLabel>
                        </S.CheckboxItem>
                        <S.CheckboxItem>
                            <S.CheckboxLabel>
                                <S.Checkbox
                                    type='checkbox'
                                    checked={formData.games['apex-legends']}
                                    onChange={() => handleCheckboxChange('games', 'apex-legends')}
                                />
                                Apex Legends
                            </S.CheckboxLabel>
                        </S.CheckboxItem>
                        <S.CheckboxItem>
                            <S.CheckboxLabel>
                                <S.Checkbox
                                    type='checkbox'
                                    checked={formData.games['fortnite']}
                                    onChange={() => handleCheckboxChange('games', 'fortnite')}
                                />
                                Fortnite
                            </S.CheckboxLabel>
                        </S.CheckboxItem>
                        <S.CheckboxItem>
                            <S.CheckboxLabel>
                                <S.Checkbox
                                    type='checkbox'
                                    checked={formData.games['ea-fc-24']}
                                    onChange={() => handleCheckboxChange('games', 'ea-fc-24')}
                                />
                                EA FC 24
                            </S.CheckboxLabel>
                        </S.CheckboxItem>
                    </S.CheckboxGrid>

                    <S.SectionTitle>Events Attended</S.SectionTitle>
                    <S.CheckboxGrid>
                        <S.CheckboxItem>
                            <S.CheckboxLabel>
                                <S.Checkbox
                                    type='checkbox'
                                    checked={formData.events['cs2-major']}
                                    onChange={() => handleCheckboxChange('events', 'cs2-major')}
                                />
                                CS2 Major
                            </S.CheckboxLabel>
                        </S.CheckboxItem>
                        <S.CheckboxItem>
                            <S.CheckboxLabel>
                                <S.Checkbox
                                    type='checkbox'
                                    checked={formData.events['esl-pro-league']}
                                    onChange={() => handleCheckboxChange('events', 'esl-pro-league')}
                                />
                                ESL Pro League
                            </S.CheckboxLabel>
                        </S.CheckboxItem>
                        <S.CheckboxItem>
                            <S.CheckboxLabel>
                                <S.Checkbox
                                    type='checkbox'
                                    checked={formData.events['iem-worlds']}
                                    onChange={() => handleCheckboxChange('events', 'iem-worlds')}
                                />
                                IEM Worlds
                            </S.CheckboxLabel>
                        </S.CheckboxItem>
                        <S.CheckboxItem>
                            <S.CheckboxLabel>
                                <S.Checkbox
                                    type='checkbox'
                                    checked={formData.events['rio-major']}
                                    onChange={() => handleCheckboxChange('events', 'rio-major')}
                                />
                                Rio Major
                            </S.CheckboxLabel>
                        </S.CheckboxItem>
                        <S.CheckboxItem>
                            <S.CheckboxLabel>
                                <S.Checkbox
                                    type='checkbox'
                                    checked={formData.events['blast-premier']}
                                    onChange={() => handleCheckboxChange('events', 'blast-premier')}
                                />
                                BLAST Premier
                            </S.CheckboxLabel>
                        </S.CheckboxItem>
                        <S.CheckboxItem>
                            <S.CheckboxLabel>
                                <S.Checkbox
                                    type='checkbox'
                                    checked={formData.events['vct-champions']}
                                    onChange={() => handleCheckboxChange('events', 'vct-champions')}
                                />
                                VCT Champions
                            </S.CheckboxLabel>
                        </S.CheckboxItem>
                        <S.CheckboxItem>
                            <S.CheckboxLabel>
                                <S.Checkbox
                                    type='checkbox'
                                    checked={formData.events['the-international']}
                                    onChange={() => handleCheckboxChange('events', 'the-international')}
                                />
                                The International
                            </S.CheckboxLabel>
                        </S.CheckboxItem>
                        <S.CheckboxItem>
                            <S.CheckboxLabel>
                                <S.Checkbox
                                    type='checkbox'
                                    checked={formData.events['iem-katowice']}
                                    onChange={() => handleCheckboxChange('events', 'iem-katowice')}
                                />
                                IEM Katowice
                            </S.CheckboxLabel>
                        </S.CheckboxItem>
                    </S.CheckboxGrid>

                    <S.SectionTitle>How often do you play games?</S.SectionTitle>
                    <S.RadioGroup>
                        <S.RadioItem>
                            <S.RadioLabel>
                                <S.Radio
                                    type='radio'
                                    name='playFrequency'
                                    value='daily'
                                    checked={formData.playFrequency === 'daily'}
                                    onChange={handleRadioChange}
                                />
                                Daily
                            </S.RadioLabel>
                        </S.RadioItem>
                        <S.RadioItem>
                            <S.RadioLabel>
                                <S.Radio
                                    type='radio'
                                    name='playFrequency'
                                    value='few-times-a-week'
                                    checked={formData.playFrequency === 'few-times-a-week'}
                                    onChange={handleRadioChange}
                                />
                                Few times a week
                            </S.RadioLabel>
                        </S.RadioItem>
                        <S.RadioItem>
                            <S.RadioLabel>
                                <S.Radio
                                    type='radio'
                                    name='playFrequency'
                                    value='few-times-a-month'
                                    checked={formData.playFrequency === 'few-times-a-month'}
                                    onChange={handleRadioChange}
                                />
                                Few times a month
                            </S.RadioLabel>
                        </S.RadioItem>
                        <S.RadioItem>
                            <S.RadioLabel>
                                <S.Radio
                                    type='radio'
                                    name='playFrequency'
                                    value='rarely'
                                    checked={formData.playFrequency === 'rarely'}
                                    onChange={handleRadioChange}
                                />
                                Rarely
                            </S.RadioLabel>
                        </S.RadioItem>
                    </S.RadioGroup>

                    <S.SectionTitle>What platform do you primarily use?</S.SectionTitle>
                    <S.RadioGroup>
                        <S.RadioItem>
                            <S.RadioLabel>
                                <S.Radio
                                    type='radio'
                                    name='platform'
                                    value='pc'
                                    checked={formData.platform === 'pc'}
                                    onChange={handleRadioChange}
                                />
                                PC
                            </S.RadioLabel>
                        </S.RadioItem>
                        <S.RadioItem>
                            <S.RadioLabel>
                                <S.Radio
                                    type='radio'
                                    name='platform'
                                    value='playstation'
                                    checked={formData.platform === 'playstation'}
                                    onChange={handleRadioChange}
                                />
                                PlayStation
                            </S.RadioLabel>
                        </S.RadioItem>
                        <S.RadioItem>
                            <S.RadioLabel>
                                <S.Radio
                                    type='radio'
                                    name='platform'
                                    value='xbox'
                                    checked={formData.platform === 'xbox'}
                                    onChange={handleRadioChange}
                                />
                                Xbox
                            </S.RadioLabel>
                        </S.RadioItem>
                        <S.RadioItem>
                            <S.RadioLabel>
                                <S.Radio
                                    type='radio'
                                    name='platform'
                                    value='mobile'
                                    checked={formData.platform === 'mobile'}
                                    onChange={handleRadioChange}
                                />
                                Mobile
                            </S.RadioLabel>
                        </S.RadioItem>
                    </S.RadioGroup>

                    <S.SectionTitle>Recent FURIA Purchases</S.SectionTitle>
                    <S.CheckboxGrid>
                        <S.CheckboxItem>
                            <S.CheckboxLabel>
                                <S.Checkbox
                                    type='checkbox'
                                    checked={formData.purchases['furia-jersey']}
                                    onChange={() => handleCheckboxChange('purchases', 'furia-jersey')}
                                />
                                FURIA Jersey
                            </S.CheckboxLabel>
                        </S.CheckboxItem>
                        <S.CheckboxItem>
                            <S.CheckboxLabel>
                                <S.Checkbox
                                    type='checkbox'
                                    checked={formData.purchases['furia-mousepad']}
                                    onChange={() => handleCheckboxChange('purchases', 'furia-mousepad')}
                                />
                                FURIA Mousepad
                            </S.CheckboxLabel>
                        </S.CheckboxItem>
                        <S.CheckboxItem>
                            <S.CheckboxLabel>
                                <S.Checkbox
                                    type='checkbox'
                                    checked={formData.purchases['furia-poster']}
                                    onChange={() => handleCheckboxChange('purchases', 'furia-poster')}
                                />
                                FURIA Poster
                            </S.CheckboxLabel>
                        </S.CheckboxItem>
                        <S.CheckboxItem>
                            <S.CheckboxLabel>
                                <S.Checkbox
                                    type='checkbox'
                                    checked={formData.purchases['furia-hoodie']}
                                    onChange={() => handleCheckboxChange('purchases', 'furia-hoodie')}
                                />
                                FURIA Hoodie
                            </S.CheckboxLabel>
                        </S.CheckboxItem>
                        <S.CheckboxItem>
                            <S.CheckboxLabel>
                                <S.Checkbox
                                    type='checkbox'
                                    checked={formData.purchases['furia-cap']}
                                    onChange={() => handleCheckboxChange('purchases', 'furia-cap')}
                                />
                                FURIA Cap
                            </S.CheckboxLabel>
                        </S.CheckboxItem>
                        <S.CheckboxItem>
                            <S.CheckboxLabel>
                                <S.Checkbox
                                    type='checkbox'
                                    checked={formData.purchases['furia-mug']}
                                    onChange={() => handleCheckboxChange('purchases', 'furia-mug')}
                                />
                                FURIA Mug
                            </S.CheckboxLabel>
                        </S.CheckboxItem>
                    </S.CheckboxGrid>

                    <S.ButtonContainer>
                        <Button type='button' $variant='outline' onClick={onBack}>
                            Back
                        </Button>
                        <Button type='submit' $variant='primary'>
                            Next
                        </Button>
                    </S.ButtonContainer>
                </form>
            </CardContent>
        </S.FormContainer>
    );
};