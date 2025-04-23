import React from 'react';

import styled from 'styled-components';

export const Form = styled.form`
    width: 100%;
`;

export const FormItem = styled.div`
    margin-bottom: ${({ theme }) => theme.space[4]};
`;

export const FormLabel = styled.label`
    display: block;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.gray[300]};
    margin-bottom: ${({ theme }) => theme.space[2]};
`;

export const FormControl = styled.div`
    position: relative;
`;

export const FormDescription = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray[500]};
    margin-top: ${({ theme }) => theme.space[2]};
`;

export const FormMessage = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.red};
    margin-top: ${({ theme }) => theme.space[2]};
`;

interface FormFieldProps {
    name: string;
    control: any;
    render: (props: { field: any }) => React.ReactNode;
};

export const FormField: React.FC<FormFieldProps> = ({ name, control, render }) => {
    const field = {
        name,
        value: control._formValues?.[name] || '',
        onChange: (e: any) => {
            const value = e?.target?.value !== undefined ? e.target.value : e
            control._formSetValue?.(name, value)
        },
    };

    return <>{render({ field })}</>;
};
