'use client';

import React, { 
    useState, 
    useRef 
} from 'react';

import Link from 'next/link';
import { z } from 'zod';

import { 
    User, 
    PenSquare 
} from 'lucide-react';

import { 
    CardHeader, 
    CardTitle, 
    CardDescription,
    CardContent 
} from '@/components/UI/card';
import { 
    FormGroup, 
    Label, 
    Input, 
    ErrorMessage 
} from '@/components/UI/input';

import Button from '@/components/UI/button';
import { 
    formatCPF, 
    formatBirthDate, 
    formatZipCode,
    formatPhoneNumber,
    personalInfoSchema 
} from '@/utils/formatters';

import * as S from './styles';

interface PersonalInfoFormProps {
    initialData: any;
    onNext: (data: any) => void;
}

export default function PersonalInfoForm({ initialData, onNext }: PersonalInfoFormProps) {
    const [formData, setFormData] = useState({
        fullName: initialData.fullName || '',
        username: initialData.username || '',
        phoneNumber: initialData.phoneNumber || '',
        email: initialData.email || '',
        cpf: initialData.cpf || '',
        birthDate: initialData.birthDate || '',
        address: initialData.address || '',
        city: initialData.city || '',
        state: initialData.state || '',
        zipCode: initialData.zipCode || '',
        password: initialData.password || '',
        passwordVerify: initialData.passwordVerify || '',
    });
    const [profileImage, setProfileImage] = useState<string | null>(initialData.profileImage || null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        let formattedValue = value;

        switch (name) {
            case 'cpf':
                formattedValue = formatCPF(value);
                break;
            case 'birthDate':
                const [day, month, year] = value.replace(/\D/g, '').match(/(\d{2})(\d{2})(\d{4})/)?.slice(1) || [];
                if (year && month && day) {
                    const date = new Date(`${year}-${month}-${day}`);
                    formattedValue = date.toISOString();
                }
                break;
            case 'zipCode':
                formattedValue = formatZipCode(value);
                break;
            case 'phoneNumber':
                formattedValue = formatPhoneNumber(value);
                break;
        }

        setFormData((prev) => ({ ...prev, [name]: formattedValue }));

        if (errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev }
                delete newErrors[name]
                return newErrors
            });
        };
    };

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setProfileImage(event.target?.result as string);
            };
            reader.readAsDataURL(e.target.files[0]);
        };
    };

    const validateForm = () => {
        try {
            personalInfoSchema.parse(formData);
            setErrors({});
            return true;
        } catch (error) {
            if (error instanceof z.ZodError) {
                const newErrors: Record<string, string> = {};
                error.errors.forEach((err) => {
                    if (err.path) {
                        newErrors[err.path[0]] = err.message;
                    }
                });
                setErrors(newErrors);
            }
            return false;
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            onNext({
                ...formData,
                profileImage,
            });
        };
    };

    return (
        <S.FormContainer>
            <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Tell us about yourself so we can personalize your FURIA fan experience.</CardDescription>
            </CardHeader>

            <CardContent>
                <form onSubmit={handleSubmit}>
                    <S.AvatarContainer>
                        <S.Avatar
                            onClick={handleImageClick}
                            style={{
                                backgroundImage: profileImage ? `url(${profileImage})` : 'none',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            {!profileImage && <User size={40} color='#AAAAAA' />}
                            <S.AvatarOverlay />
                        </S.Avatar>
                        <S.EditButton onClick={handleImageClick}>
                            <PenSquare size={14} />
                        </S.EditButton>
                        <input
                            type='file'
                            ref={fileInputRef}
                            onChange={handleImageChange}
                            accept='image/*'
                            style={{ display: 'none' }}
                        />
                    </S.AvatarContainer>

                    <FormGroup>
                        <Label htmlFor='fullName'>Full Name</Label>
                        <Input
                            id='fullName'
                            name='fullName'
                            placeholder='Your full name'
                            value={formData.fullName}
                            onChange={handleChange}
                            $error={!!errors.fullName}
                            $fullWidth
                        />
                        {errors.fullName && <ErrorMessage>{errors.fullName}</ErrorMessage>}
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='username'>Username</Label>
                        <Input
                            id='username'
                            name='username'
                            placeholder='Your username'
                            value={formData.username}
                            onChange={handleChange}
                            $error={!!errors.username}
                            $fullWidth
                        />
                        {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor='email'>Email</Label>
                        <Input
                            id='email'
                            name='email'
                            type='email'
                            placeholder='your.email@example.com'
                            value={formData.email}
                            onChange={handleChange}
                            $error={!!errors.email}
                            $fullWidth
                        />
                        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor='password'>Password</Label>
                        <Input
                            id='password'
                            name='password'
                            type='password'
                            placeholder='Create a secure password'
                            value={formData.password}
                            onChange={handleChange}
                            $error={!!errors.password}
                            $fullWidth
                        />
                        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor='passwordVerify'>Verify Password</Label>
                        <Input
                            id='passwordVerify'
                            name='passwordVerify'
                            type='password'
                            placeholder='Verify your password'
                            value={formData.passwordVerify}
                            onChange={handleChange}
                            $error={!!errors.passwordVerify}
                            $fullWidth
                        />
                        {errors.passwordVerify && <ErrorMessage>{errors.passwordVerify}</ErrorMessage>}
                    </FormGroup>

                    <S.FormRow>
                        <FormGroup>
                            <Label htmlFor='cpf'>CPF</Label>
                            <Input
                                id='cpf'
                                name='cpf'
                                placeholder='000.000.000-00'
                                value={formData.cpf}
                                onChange={handleChange}
                                $error={!!errors.cpf}
                                $fullWidth
                            />
                            {errors.cpf && <ErrorMessage>{errors.cpf}</ErrorMessage>}
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor='birthDate'>Birth Date</Label>
                            <Input
                                id='birthDate'
                                name='birthDate'
                                placeholder='DD/MM/YYYY'
                                value={formData.birthDate}
                                onChange={handleChange}
                                $error={!!errors.birthDate}
                                $fullWidth
                            />
                            {errors.birthDate && <ErrorMessage>{errors.birthDate}</ErrorMessage>}
                        </FormGroup>
                    </S.FormRow>

                    <FormGroup>
                        <Label htmlFor='address'>Address</Label>
                        <Input
                            id='address'
                            name='address'
                            placeholder='Your address'
                            value={formData.address}
                            onChange={handleChange}
                            $error={!!errors.address}
                            $fullWidth
                        />
                        {errors.address && <ErrorMessage>{errors.address}</ErrorMessage>}
                    </FormGroup>

                    <S.FormRow>
                        <FormGroup>
                            <Label htmlFor='city'>City</Label>
                            <Input
                                id='city'
                                name='city'
                                placeholder='Your city'
                                value={formData.city}
                                onChange={handleChange}
                                $error={!!errors.city}
                                $fullWidth
                            />
                            {errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor='state'>State</Label>
                            <Input
                                id='state'
                                name='state'
                                placeholder='Your state'
                                value={formData.state}
                                onChange={handleChange}
                                $error={!!errors.state}
                                $fullWidth
                            />
                            {errors.state && <ErrorMessage>{errors.state}</ErrorMessage>}
                        </FormGroup>
                    </S.FormRow>

                    <S.FormRow>
                        <FormGroup>
                            <Label htmlFor='zipCode'>ZIP Code</Label>
                            <Input
                                id='zipCode'
                                name='zipCode'
                                placeholder='00000-000'
                                value={formData.zipCode}
                                onChange={handleChange}
                                $error={!!errors.zipCode}
                                $fullWidth
                            />
                            {errors.zipCode && <ErrorMessage>{errors.zipCode}</ErrorMessage>}
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor='phoneNumber'>Phone Number</Label>
                            <Input
                                id='phoneNumber'
                                name='phoneNumber'
                                placeholder='(00) 00000-0000'
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                $error={!!errors.zipCode}
                                $fullWidth
                            />
                            {errors.phoneNumber && <ErrorMessage>{errors.phoneNumber}</ErrorMessage>}
                        </FormGroup>
                    </S.FormRow>

                    <S.ButtonContainer>
                        <Button type='submit' $variant='primary'>
                            Next
                        </Button>
                    </S.ButtonContainer>
                </form>
            </CardContent>
        </S.FormContainer>
    );
};