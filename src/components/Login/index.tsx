'use client';

import React, {
    useState
} from 'react';

import Link from 'next/link';
import Image from 'next/image';

import {
    Eye,
    EyeOff,
    Lock,
    UserIcon
} from 'lucide-react';

import Button from '@/components/UI/button';

import * as S from './styles';

import {
    useAuth
} from '@/hooks/useAuth';
import {
    useRouter
} from 'next/navigation';

import {
    cpfSchema,
    formatCPF
} from '@/utils/formatters';

export default function LoginPage() {
    const { loginUser } = useAuth();
    const router = useRouter();

    const [cpf, setCpf] = useState('');
    const [formattedCpf, setFormattedCpf] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState<{ cpf?: string; password?: string; submit?: string }>({});

    const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const formatted = formatCPF(value);
        setFormattedCpf(formatted);
        setCpf(value.replace(/\D/g, ''));
    };

    const validateForm = () => {
        const newErrors: { cpf?: string; password?: string } = {};

        try {
            cpfSchema.parse(cpf);
        } catch (error) {
            newErrors.cpf = 'Invalid CPF format';
        }

        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const formattedCpf = formatCPF(cpf);
                const success = await loginUser(formattedCpf, password);

                if (success) {
                    router.push('/dashboard');
                } else {
                    setErrors({ submit: 'Invalid credentials. Please try again.' });
                }
            } catch (error) {
                console.error('Error during login:', error);
                setErrors({ submit: 'An error occurred during login. Please try again.' });
            };
        };
    };

    return (
        <S.LoginContainer>
            <S.LoginCard>
                <S.LoginHeader>
                    <Image
                        src='/icon-text-white.svg'
                        alt='FURIA Text'
                        width={120}
                        height={80}
                    />
                    <S.LoginSubtitle>Welcome back! Please enter your details</S.LoginSubtitle>
                </S.LoginHeader>

                <S.LoginForm onSubmit={handleSubmit}>
                    <S.FormGroup>
                        <S.FormLabel htmlFor='cpf'>CPF</S.FormLabel>
                        <S.InputWrapper>
                            <S.InputIcon>
                                <UserIcon size={20} />
                            </S.InputIcon>
                            <S.FormInput
                                id="cpf"
                                type="text"
                                placeholder="Digite seu CPF"
                                value={formattedCpf}
                                onChange={handleCpfChange}
                                maxLength={14} // XXX.XXX.XXX-XX (14 characters)
                            />
                        </S.InputWrapper>
                        {errors.cpf && <S.ErrorMessage>{errors.cpf}</S.ErrorMessage>}
                    </S.FormGroup>

                    <S.FormGroup>
                        <S.FormLabel htmlFor='password'>Password</S.FormLabel>
                        <S.InputWrapper>
                            <S.InputIcon>
                                <Lock size={20} />
                            </S.InputIcon>
                            <S.FormInput
                                id='password'
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Enter your password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <S.PasswordToggle
                                type='button'
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </S.PasswordToggle>
                        </S.InputWrapper>
                        {errors.password && <S.ErrorMessage>{errors.password}</S.ErrorMessage>}
                    </S.FormGroup>

                    <S.FormFooter>
                        <S.RememberMeLabel>
                            <S.Checkbox type='checkbox' checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                            Remember me
                        </S.RememberMeLabel>

                        <S.ForgotPassword href='/forgot-password'>Forgot password?</S.ForgotPassword>
                    </S.FormFooter>

                    {errors.submit && <S.ErrorMessage>{errors.submit}</S.ErrorMessage>}

                    <Button type='submit' $fullWidth>
                        Sign in
                    </Button>

                    <S.LoginDivider>
                        <span>OR</span>
                    </S.LoginDivider>

                    <Button $variant='outline' $fullWidth as={Link} href='/onboarding'>
                        Create an account
                    </Button>
                </S.LoginForm>

                <S.SignUpText>
                    Don't have an account? <Link href='/onboarding'>Sign up</Link>
                </S.SignUpText>
            </S.LoginCard>
        </S.LoginContainer>
    );
};