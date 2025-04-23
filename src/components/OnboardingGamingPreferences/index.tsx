'use client';

import {
    useState,
    useEffect
} from 'react';

import {
    useForm
} from 'react-hook-form';

import {
    zodResolver
} from '@hookform/resolvers/zod';

import * as z from 'zod';
import * as S from './styles';

import {
    Gamepad2
} from 'lucide-react';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/UI/form';
import {
    Card,
    CardContent
} from '@/components/UI/card';
import {
    Checkbox
} from '@/components/UI/checkbox';
import {
    RadioGroup,
    RadioGroupItem
} from '@/components/UI/RadioGroup';
import {
    Label
} from '@/components/UI/label';

const gamingPreferencesSchema = z.object({
    favoriteGames: z.array(z.string()).min(1, { message: 'Select at least one game' }),
    eventsAttended: z.array(z.string()),
    playTime: z.string().min(1, { message: 'Select your play time' }),
    platform: z.string().min(1, { message: 'Select your platform' }),
    recentPurchases: z.array(z.string()),
});

const games = [
    { id: 'cs2', label: 'Counter-Strike 2' },
    { id: 'valorant', label: 'Valorant' },
    { id: 'lol', label: 'League of Legends' },
    { id: 'dota2', label: 'Dota 2' },
    { id: 'r6', label: 'Rainbow Six Siege' },
    { id: 'apex', label: 'Apex Legends' },
    { id: 'fortnite', label: 'Fortnite' },
    { id: 'fifa', label: 'EA FC 24' },
];

const events = [
    { id: 'major', label: 'CS2 Major' },
    { id: 'blast', label: 'BLAST Premier' },
    { id: 'esl', label: 'ESL Pro League' },
    { id: 'vct', label: 'VCT Champions' },
    { id: 'worlds', label: 'LoL Worlds' },
    { id: 'ti', label: 'The International' },
    { id: 'rio', label: 'Rio Major' },
    { id: 'iem', label: 'IEM Katowice' },
];

const merchandise = [
    { id: 'jersey', label: 'FURIA Jersey' },
    { id: 'hoodie', label: 'FURIA Hoodie' },
    { id: 'mousepad', label: 'FURIA Mousepad' },
    { id: 'cap', label: 'FURIA Cap' },
    { id: 'poster', label: 'FURIA Poster' },
    { id: 'mug', label: 'FURIA Mug' },
];

interface GamingPreferencesStepProps {
    data: any
    updateData: (data: any) => void
}

export function GamingPreferencesStep({ data, updateData }: GamingPreferencesStepProps) {
    const [isMounted, setIsMounted] = useState(false);

    const form = useForm<z.infer<typeof gamingPreferencesSchema>>({
        resolver: zodResolver(gamingPreferencesSchema),
        defaultValues: {
            favoriteGames: data.favoriteGames || [],
            eventsAttended: data.eventsAttended || [],
            playTime: data.playTime || '',
            platform: data.platform || '',
            recentPurchases: data.recentPurchases || [],
        },
    });

    useEffect(() => {
        setIsMounted(true)
    }, []);

    const onSubmit = (values: z.infer<typeof gamingPreferencesSchema>) => {
        updateData(values);
    };

    useEffect(() => {
        if (isMounted) {
            const subscription = form.watch((value) => {
                updateData(value);
            });
            return () => subscription.unsubscribe();
        };
    }, [form, updateData, isMounted]);

    return (
        <S.StepContainer>
            <S.StepHeader>
                <S.StepTitle>Gaming Preferences</S.StepTitle>
                <S.StepDescription>
                    Tell us about your gaming habits and preferences to enhance your fan experience.
                </S.StepDescription>
            </S.StepHeader>

            <Card>
                <CardContent>
                    <S.IconContainer>
                        <S.IconWrapper>
                            <Gamepad2 size={32} color='#FFFFFF' />
                        </S.IconWrapper>
                    </S.IconContainer>

                    <Form {...form}>
                        <form onChange={form.handleSubmit(onSubmit)}>
                            <S.FormSection>
                                <FormField
                                    control={form.control}
                                    name='favoriteGames'
                                    render={() => (
                                        <FormItem>
                                            <S.SectionLabel>
                                                <FormLabel>Favorite Games</FormLabel>
                                            </S.SectionLabel>
                                            <S.CheckboxGrid>
                                                {games.map((game) => (
                                                    <FormField
                                                        key={game.id}
                                                        control={form.control}
                                                        name='favoriteGames'
                                                        render={({ field }) => {
                                                            return (
                                                                <S.CheckboxItem key={game.id}>
                                                                    <FormControl>
                                                                        <Checkbox
                                                                            checked={field.value?.includes(game.id)}
                                                                            onChange={(checked) => {
                                                                                return checked
                                                                                    ? field.onChange([...field.value, game.id])
                                                                                    : field.onChange(field.value?.filter((value: any) => value !== game.id))
                                                                            }}
                                                                        />
                                                                    </FormControl>
                                                                    <S.CheckboxLabel>{game.label}</S.CheckboxLabel>
                                                                </S.CheckboxItem>
                                                            )
                                                        }}
                                                    />
                                                ))}
                                            </S.CheckboxGrid>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </S.FormSection>

                            <S.FormSection>
                                <FormField
                                    control={form.control}
                                    name='eventsAttended'
                                    render={() => (
                                        <FormItem>
                                            <S.SectionLabel>
                                                <FormLabel>Events Attended</FormLabel>
                                            </S.SectionLabel>
                                            <S.CheckboxGrid>
                                                {events.map((event) => (
                                                    <FormField
                                                        key={event.id}
                                                        control={form.control}
                                                        name='eventsAttended'
                                                        render={({ field }) => {
                                                            return (
                                                                <S.CheckboxItem key={event.id}>
                                                                    <FormControl>
                                                                        <Checkbox
                                                                            checked={field.value?.includes(event.id)}
                                                                            onChange={(checked) => {
                                                                                return checked
                                                                                    ? field.onChange([...field.value, event.id])
                                                                                    : field.onChange(field.value?.filter((value: any) => value !== event.id))
                                                                            }}
                                                                        />
                                                                    </FormControl>
                                                                    <S.CheckboxLabel>{event.label}</S.CheckboxLabel>
                                                                </S.CheckboxItem>
                                                            )
                                                        }}
                                                    />
                                                ))}
                                            </S.CheckboxGrid>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </S.FormSection>

                            <S.TwoColumnGrid>
                                <FormField
                                    control={form.control}
                                    name='playTime'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>How often do you play games?</FormLabel>
                                            <FormControl>
                                                <RadioGroup onValueChange={field.onChange} value={field.value}>
                                                    <S.RadioItem>
                                                        <RadioGroupItem value='daily' id='daily' />
                                                        <Label htmlFor='daily'>Daily</Label>
                                                    </S.RadioItem>
                                                    <S.RadioItem>
                                                        <RadioGroupItem value='weekly' id='weekly' />
                                                        <Label htmlFor='weekly'>Few times a week</Label>
                                                    </S.RadioItem>
                                                    <S.RadioItem>
                                                        <RadioGroupItem value='monthly' id='monthly' />
                                                        <Label htmlFor='monthly'>Few times a month</Label>
                                                    </S.RadioItem>
                                                    <S.RadioItem>
                                                        <RadioGroupItem value='rarely' id='rarely' />
                                                        <Label htmlFor='rarely'>Rarely</Label>
                                                    </S.RadioItem>
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name='platform'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>What platform do you primarily use?</FormLabel>
                                            <FormControl>
                                                <RadioGroup onValueChange={field.onChange} value={field.value}>
                                                    <S.RadioItem>
                                                        <RadioGroupItem value='pc' id='pc' />
                                                        <Label htmlFor='pc'>PC</Label>
                                                    </S.RadioItem>
                                                    <S.RadioItem>
                                                        <RadioGroupItem value='playstation' id='playstation' />
                                                        <Label htmlFor='playstation'>PlayStation</Label>
                                                    </S.RadioItem>
                                                    <S.RadioItem>
                                                        <RadioGroupItem value='xbox' id='xbox' />
                                                        <Label htmlFor='xbox'>Xbox</Label>
                                                    </S.RadioItem>
                                                    <S.RadioItem>
                                                        <RadioGroupItem value='mobile' id='mobile' />
                                                        <Label htmlFor='mobile'>Mobile</Label>
                                                    </S.RadioItem>
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </S.TwoColumnGrid>

                            <S.FormSection>
                                <FormField
                                    control={form.control}
                                    name='recentPurchases'
                                    render={() => (
                                        <FormItem>
                                            <S.SectionLabel>
                                                <FormLabel>Recent FURIA Purchases</FormLabel>
                                            </S.SectionLabel>
                                            <S.CheckboxGrid>
                                                {merchandise.map((item) => (
                                                    <FormField
                                                        key={item.id}
                                                        control={form.control}
                                                        name='recentPurchases'
                                                        render={({ field }) => {
                                                            return (
                                                                <S.CheckboxItem key={item.id}>
                                                                    <FormControl>
                                                                        <Checkbox
                                                                            checked={field.value?.includes(item.id)}
                                                                            onChange={(checked) => {
                                                                                return checked
                                                                                    ? field.onChange([...field.value, item.id])
                                                                                    : field.onChange(field.value?.filter((value: any) => value !== item.id))
                                                                            }}
                                                                        />
                                                                    </FormControl>
                                                                    <S.CheckboxLabel>{item.label}</S.CheckboxLabel>
                                                                </S.CheckboxItem>
                                                            )
                                                        }}
                                                    />
                                                ))}
                                            </S.CheckboxGrid>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </S.FormSection>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </S.StepContainer>
    );
};