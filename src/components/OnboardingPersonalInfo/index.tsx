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
} from '@hookform/resolvers/zod'

import * as z from 'zod';
import * as S from './styles';

import { 
    UserRound 
} from 'lucide-react';

import { 
    Input 
} from '@/components/UI/input';
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

const personalInfoSchema = z.object({
    name: z.string().min(3, { 
        message: 'Name must be at least 3 characters' 
    }),
    email: z.string().email({ 
        message: 'Please enter a valid email address' 
    }),
    cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, {
        message: 'CPF must be in format 000.000.000-00',
    }),
    birthDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
        message: 'Birth date must be in format YYYY-MM-DD',
    }),
    address: z.string().min(5, { 
        message: 'Address must be at least 5 characters' 
    }),
    city: z.string().min(2, { 
        message: 'City must be at least 2 characters' 
    }),
    state: z.string().min(2, { 
        message: 'State must be at least 2 characters' 
    }),
    zipCode: z.string().regex(/^\d{5}-\d{3}$/, {
        message: 'Zip code must be in format 00000-000',
    }),
});

interface PersonalInfoStepProps {
    data: any;
    updateData: (data: any) => void;
};

export function PersonalInfoStep({ data, updateData }: PersonalInfoStepProps) {
    const [isMounted, setIsMounted] = useState(false);

    const form = useForm<z.infer<typeof personalInfoSchema>>({
        resolver: zodResolver(personalInfoSchema),
        defaultValues: {
            name: data.name || '',
            email: data.email || '',
            cpf: data.cpf || '',
            birthDate: data.birthDate || '',
            address: data.address || '',
            city: data.city || '',
            state: data.state || '',
            zipCode: data.zipCode || '',
        },
    });

    useEffect(() => {
        setIsMounted(true)
    }, []);

    const onSubmit = (values: z.infer<typeof personalInfoSchema>) => {
        updateData(values);
    };

    useEffect(() => {
        if (isMounted) {
            const subscription = form.watch((value) => {
                updateData(value)
            })
            return () => subscription.unsubscribe()
        };
    }, [form, updateData, isMounted]);

    const formatCPF = (value: string) => {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1')
    };

    const formatZipCode = (value: string) => {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{3})\d+?$/, '$1')
    };

    return (
        <S.StepContainer>
            <S.StepHeader>
                <S.StepTitle>Personal Information</S.StepTitle>
                <S.StepDescription>Tell us about yourself so we can personalize your FURIA fan experience.</S.StepDescription>
            </S.StepHeader>

            <Card>
                <CardContent>
                    <S.IconContainer>
                        <S.IconWrapper>
                            <UserRound size={32} color='#FFFFFF' />
                        </S.IconWrapper>
                    </S.IconContainer>

                    <Form {...form}>
                        <form onChange={form.handleSubmit(onSubmit)}>
                            <S.FormGrid>
                                <FormField
                                    control={form.control}
                                    name='name'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Full Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder='Your full name' {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name='email'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder='your.email@example.com' {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name='cpf'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>CPF</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder='000.000.000-00'
                                                    {...field}
                                                    onChange={(e: any) => {
                                                        field.onChange(formatCPF(e.target.value))
                                                    }}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name='birthDate'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Birth Date</FormLabel>
                                            <FormControl>
                                                <Input type='date' {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <S.FullWidthFormItem>
                                    <FormField
                                        control={form.control}
                                        name='address'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Address</FormLabel>
                                                <FormControl>
                                                    <Input placeholder='Your street address' {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </S.FullWidthFormItem>

                                <FormField
                                    control={form.control}
                                    name='city'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>City</FormLabel>
                                            <FormControl>
                                                <Input placeholder='Your city' {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <S.TwoColumnGrid>
                                    <FormField
                                        control={form.control}
                                        name='state'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>State</FormLabel>
                                                <FormControl>
                                                    <Input placeholder='State' {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name='zipCode'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Zip Code</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder='00000-000'
                                                        {...field}
                                                        onChange={(e: any) => {
                                                            field.onChange(formatZipCode(e.target.value))
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </S.TwoColumnGrid>
                            </S.FormGrid>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </S.StepContainer>
    );
};