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
    Loader2,
    FileCheck,
    FileWarning,
    ShieldCheck
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
    FileUploader
} from '@/components/UI/file-uploader';
import {
    Alert,
    AlertDescription,
    AlertTitle
} from '@/components/UI/alert';
import {
    Progress
} from '@/components/UI/progress';

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const documentUploadSchema = z.object({
    idDocument: z.any().refine((file) => file !== null, { message: 'ID document is required' }),
    selfie: z.any().refine((file) => file !== null, { message: 'Selfie is required' }),
});

interface DocumentUploadStepProps {
    data: any;
    updateData: (data: any) => void;
};

export function DocumentUploadStep({ data, updateData }: DocumentUploadStepProps) {
    const [isMounted, setIsMounted] = useState(false);
    const [validating, setValidating] = useState(false);
    const [validationProgress, setValidationProgress] = useState(0);
    const [validationStatus, setValidationStatus] = useState(data.validationStatus || 'pending');

    const form = useForm<z.infer<typeof documentUploadSchema>>({
        resolver: zodResolver(documentUploadSchema),
        defaultValues: {
            idDocument: data.idDocument || null,
            selfie: data.selfie || null,
        },
    });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const onSubmit = (values: z.infer<typeof documentUploadSchema>) => {
        updateData(values);
    };

    useEffect(() => {
        if (isMounted) {
            const subscription = form.watch((value) => {
                updateData({
                    ...value,
                    validationStatus,
                });
            });
            return () => subscription.unsubscribe();
        };
    }, [form, updateData, isMounted, validationStatus]);

    useEffect(() => {
        const idDocument = form.getValues('idDocument');
        const selfie = form.getValues('selfie');

        if (idDocument && selfie && validationStatus === 'pending') {
            setValidating(true);

            const interval = setInterval(() => {
                setValidationProgress((prev) => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setValidating(false);

                        const success = Math.random() < 0.8;
                        const newStatus = success ? 'success' : 'failed';
                        setValidationStatus(newStatus);
                        updateData({ validationStatus: newStatus });

                        return 100;
                    };
                    return prev + 5;
                });
            }, 200);

            return () => clearInterval(interval);
        };
    }, [form, updateData, validationStatus]);

    return (
        <S.StepContainer>
            <S.StepHeader>
                <S.StepTitle>Document Verification</S.StepTitle>
                <S.StepDescription>Please upload your identification documents for verification.</S.StepDescription>
            </S.StepHeader>

            <Card>
                <CardContent>
                    <S.IconContainer>
                        <S.IconWrapper>
                            <ShieldCheck size={32} color='#FFFFFF' />
                        </S.IconWrapper>
                    </S.IconContainer>

                    <Form {...form}>
                        <form onChange={form.handleSubmit(onSubmit)}>
                            <S.FormGrid>
                                <FormField
                                    control={form.control}
                                    name='idDocument'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>ID Document (RG/CPF)</FormLabel>
                                            <FormControl>
                                                <FileUploader
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                    accept='image/png,image/jpeg,application/pdf'
                                                    maxSize={MAX_FILE_SIZE}
                                                    disabled={validating}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name='selfie'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Selfie with ID</FormLabel>
                                            <FormControl>
                                                <FileUploader
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                    accept='image/png,image/jpeg'
                                                    maxSize={MAX_FILE_SIZE}
                                                    disabled={validating}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </S.FormGrid>

                            {validating && (
                                <S.ValidationContainer>
                                    <S.ValidationStatus>
                                        <Loader2 size={20} color='#FFFFFF' className='animate-spin' />
                                        <span>Validating your documents...</span>
                                    </S.ValidationStatus>
                                    <S.ProgressContainer>
                                        <Progress value={validationProgress} />
                                    </S.ProgressContainer>
                                </S.ValidationContainer>
                            )}

                            <S.AlertContainer>
                                {validationStatus === 'success' && (
                                    <Alert variant='success'>
                                        <FileCheck size={16} />
                                        <AlertTitle variant='success'>Verification Successful</AlertTitle>
                                        <AlertDescription>
                                            Your documents have been successfully verified. You can proceed to the next step.
                                        </AlertDescription>
                                    </Alert>
                                )}

                                {validationStatus === 'failed' && (
                                    <Alert variant='error'>
                                        <FileWarning size={16} />
                                        <AlertTitle variant='error'>Verification Failed</AlertTitle>
                                        <AlertDescription>
                                            We couldn't verify your documents. Please make sure your ID is clearly visible and matches your
                                            selfie. You can still proceed with the onboarding, but some features may be limited.
                                        </AlertDescription>
                                    </Alert>
                                )}
                            </S.AlertContainer>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </S.StepContainer>
    );
};