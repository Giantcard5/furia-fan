'use client';

import React, {
    useEffect,
    useState
} from 'react';

import {
    Settings,
    User,
    Bell,
    Shield,
    Globe,
    Smartphone,
    Moon,
    Sun,
    Save,
    LogOut
} from 'lucide-react';

import DashboardLayout from '@/components/DashboardLayout';

import Button from '@/components/UI/button';

import {
    FormGroup,
    Label,
    Input,
    ErrorMessage
} from '@/components/UI/input';

import * as S from './styles';

import {
    useAuth
} from '@/hooks/useAuth';
import {
    useRouter
} from 'next/navigation';

import { 
    apiService 
} from '@/lib/api-service';

import { 
    formatPhoneNumber 
} from '@/utils/formatters';

export default function SettingsPage() {
    const router = useRouter();
    const { logoutUser, getCPF } = useAuth();

    const [activeSection, setActiveSection] = useState('profile')
    const [theme, setTheme] = useState('dark')
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        phoneNumber: '',
        password: '',
        language: 'en',
        emailNotifications: false,
        pushNotifications: false,
        marketingEmails: false,
        eventReminders: false,
    });
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const fetchProfile = async () => {
        setLoading(true);

        try {
            const cpf = getCPF();
            if (!cpf) {
                throw new Error('No CPF found');
            };

            const response = await apiService.getUserSettings(cpf);

            if (response.error) {
                throw new Error(response.error);
            };

            setFormData(prev => ({
                ...prev,
                fullName: response.data.fullName || '',
                username: response.data.username || '',
                email: response.data.email || '',
                phoneNumber: response.data.phoneNumber || '',
                password: response.data.password || '',
                language: response.data.language || 'en',
                emailNotifications: response.data.emailNotifications ?? false,
                pushNotifications: response.data.pushNotifications ?? false,
                marketingEmails: response.data.marketingEmails ?? false,
                eventReminders: response.data.eventReminders ?? false,
            }));
        } catch (err) {
            console.error('Error fetching profile overview:', err);
        } finally {
            setLoading(false);
        };
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target as HTMLInputElement;
        const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

        let formattedValue = value;
        if (name === 'phoneNumber') {
            formattedValue = formatPhoneNumber(value);
        }

        if (name === 'newPassword') {
            setNewPassword(value);
        } else if (name === 'confirmNewPassword') {
            setConfirmNewPassword(value);
        } else if (name === 'currentPassword') {
            setCurrentPassword(value);
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: type === 'checkbox' ? checked : formattedValue,
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});

        setNewPassword('');
        setConfirmNewPassword('');
        setCurrentPassword('');

        if (newPassword !== confirmNewPassword) {
            setErrors(prev => ({ ...prev, confirmNewPassword: "Passwords don't match" }));
            return;
        }

        console.log('currentPassword', currentPassword);

        if (currentPassword === '') {
            setErrors(prev => ({ ...prev, currentPassword: "Current password is required" }));
            setActiveSection('security');
            return;
        }

        if (currentPassword !== formData.password) {
            setErrors(prev => ({ ...prev, currentPassword: "Current password is incorrect" }));
            return;
        }

        try {
            const cpf = getCPF();
            if (!cpf) {
                throw new Error('No CPF found');
            };
            const updatedFormData = { ...formData, password: newPassword };

            const response = await apiService.updateUserSettings(cpf, updatedFormData);

            if (response.error) {
                throw new Error(response.error);
            };
            
            console.log('response.data', response.data, 'formData', formData);
            setFormData(response.data);
        } catch (err) {
            console.error('Error to update profile settings:', err);
        }
    };

    const handleLogout = () => {
        logoutUser();
        router.push('/');
    };

    const renderSection = () => {
        switch (activeSection) {
            case 'profile':
                return (
                    <S.SettingsCard>
                        <S.SettingsHeader>
                            <S.SettingsTitle>
                                <User size={20} />
                                Profile Settings
                            </S.SettingsTitle>
                            <S.SettingsDescription>Manage your personal information and account details</S.SettingsDescription>
                        </S.SettingsHeader>
                        <S.SettingsCardContent>
                            <form onSubmit={handleSubmit}>
                                <S.FormRow>
                                    <FormGroup>
                                        <Label htmlFor='fullName'>Full Name</Label>
                                        <Input
                                            id='fullName'
                                            name='fullName'
                                            placeholder={formData.fullName}
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            $fullWidth
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor='username'>Username</Label>
                                        <Input
                                            id='username'
                                            name='username'
                                            placeholder={formData.username}
                                            value={formData.username}
                                            onChange={handleInputChange}
                                            $fullWidth
                                        />
                                    </FormGroup>
                                </S.FormRow>
                                <S.FormRow>
                                    <FormGroup>
                                        <Label htmlFor='email'>Email</Label>
                                        <Input
                                            id='email'
                                            name='email'
                                            type='email'
                                            placeholder={formData.email}
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            $fullWidth
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor='phoneNumber'>Phone Number</Label>
                                        <Input
                                            id='phoneNumber'
                                            name='phoneNumber'
                                            type='text'
                                            placeholder='(00) 00000-0000'
                                            value={formData.phoneNumber}
                                            onChange={(e) => {
                                                const formatted = formatPhoneNumber(e.target.value);
                                                handleInputChange({
                                                    target: {
                                                        name: 'phoneNumber',
                                                        value: formatted
                                                    }
                                                } as React.ChangeEvent<HTMLInputElement>);
                                            }}
                                            $fullWidth
                                        />
                                    </FormGroup>
                                </S.FormRow>
                                <S.ButtonContainer>
                                    <Button type='button' $variant='outline'>
                                        Cancel
                                    </Button>
                                    <S.SaveButton type='submit' $variant='primary'>
                                        <Save size={16} />
                                        Save Changes
                                    </S.SaveButton>
                                    <S.ExitButton type='submit' $variant='red' onClick={handleLogout}>
                                        <LogOut size={16} />
                                        Logout
                                    </S.ExitButton>
                                </S.ButtonContainer>
                            </form>
                        </S.SettingsCardContent>
                    </S.SettingsCard>
                );
            case 'notifications':
                return (
                    <S.SettingsCard>
                        <S.SettingsHeader>
                            <S.SettingsTitle>
                                <Bell size={20} />
                                Notification Settings
                            </S.SettingsTitle>
                            <S.SettingsDescription>Control how and when you receive notifications</S.SettingsDescription>
                        </S.SettingsHeader>
                        <S.SettingsCardContent>
                            <form onSubmit={handleSubmit}>
                                <S.SwitchContainer>
                                    <S.SwitchLabel>
                                        <S.SwitchTitle>Email Notifications</S.SwitchTitle>
                                        <S.SwitchDescription>Receive notifications via email</S.SwitchDescription>
                                    </S.SwitchLabel>
                                    <S.Switch>
                                        <S.SwitchInput
                                            type='checkbox'
                                            name='emailNotifications'
                                            checked={formData.emailNotifications}
                                            onChange={handleInputChange}
                                        />
                                        <S.SwitchSlider />
                                    </S.Switch>
                                </S.SwitchContainer>
                                <S.SwitchContainer>
                                    <S.SwitchLabel>
                                        <S.SwitchTitle>Push Notifications</S.SwitchTitle>
                                        <S.SwitchDescription>Receive notifications on your device</S.SwitchDescription>
                                    </S.SwitchLabel>
                                    <S.Switch>
                                        <S.SwitchInput
                                            type='checkbox'
                                            name='pushNotifications'
                                            checked={formData.pushNotifications}
                                            onChange={handleInputChange}
                                        />
                                        <S.SwitchSlider />
                                    </S.Switch>
                                </S.SwitchContainer>
                                <S.SwitchContainer>
                                    <S.SwitchLabel>
                                        <S.SwitchTitle>Marketing Emails</S.SwitchTitle>
                                        <S.SwitchDescription>Receive promotional emails and offers</S.SwitchDescription>
                                    </S.SwitchLabel>
                                    <S.Switch>
                                        <S.SwitchInput
                                            type='checkbox'
                                            name='marketingEmails'
                                            checked={formData.marketingEmails}
                                            onChange={handleInputChange}
                                        />
                                        <S.SwitchSlider />
                                    </S.Switch>
                                </S.SwitchContainer>
                                <S.SwitchContainer>
                                    <S.SwitchLabel>
                                        <S.SwitchTitle>Event Reminders</S.SwitchTitle>
                                        <S.SwitchDescription>Get notified about upcoming events</S.SwitchDescription>
                                    </S.SwitchLabel>
                                    <S.Switch>
                                        <S.SwitchInput
                                            type='checkbox'
                                            name='eventReminders'
                                            checked={formData.eventReminders}
                                            onChange={handleInputChange}
                                        />
                                        <S.SwitchSlider />
                                    </S.Switch>
                                </S.SwitchContainer>
                                <S.ButtonContainer>
                                    <Button type='button' $variant='outline'>
                                        Cancel
                                    </Button>
                                    <S.SaveButton type='submit' $variant='primary'>
                                        <Save size={16} />
                                        Save Changes
                                    </S.SaveButton>
                                </S.ButtonContainer>
                            </form>
                        </S.SettingsCardContent>
                    </S.SettingsCard>
                );
            case 'security':
                return (
                    <S.SettingsCard>
                        <S.SettingsHeader>
                            <S.SettingsTitle>
                                <Shield size={20} />
                                Security Settings
                            </S.SettingsTitle>
                            <S.SettingsDescription>Manage your account security and privacy</S.SettingsDescription>
                        </S.SettingsHeader>
                        <S.SettingsCardContent>
                            <form onSubmit={handleSubmit}>
                                <FormGroup style={{ marginBottom: '24px' }}>
                                    <Label htmlFor='currentPassword'>Current Password</Label>
                                    <Input
                                        id='currentPassword'
                                        name='currentPassword'
                                        type='password'
                                        placeholder='Enter current password'
                                        onChange={handleInputChange}
                                        $error={!!errors.currentPassword}
                                        $fullWidth
                                    />
                                    {errors.currentPassword && <ErrorMessage>{errors.currentPassword}</ErrorMessage>}
                                </FormGroup>
                                <S.FormRow>
                                    <FormGroup>
                                        <Label htmlFor='newPassword'>New Password</Label>
                                        <Input
                                            id='newPassword'
                                            name='newPassword'
                                            type='password'
                                            placeholder='Enter new password'
                                            value={newPassword}
                                            onChange={handleInputChange}
                                            $error={!!errors.newPassword}
                                            $fullWidth
                                        />
                                        {errors.newPassword && <ErrorMessage>{errors.newPassword}</ErrorMessage>}
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor='confirmNewPassword'>Confirm New Password</Label>
                                        <Input
                                            id='confirmNewPassword'
                                            name='confirmNewPassword'
                                            type='password'
                                            placeholder='Confirm new password'
                                            value={confirmNewPassword}
                                            onChange={handleInputChange}
                                            $error={!!errors.confirmNewPassword}
                                            $fullWidth
                                        />
                                        {errors.confirmNewPassword && <ErrorMessage>{errors.confirmNewPassword}</ErrorMessage>}
                                    </FormGroup>
                                </S.FormRow>
                                <S.ButtonContainer>
                                    <Button type='button' $variant='outline'>
                                        Cancel
                                    </Button>
                                    <S.SaveButton type='submit' $variant='primary'>
                                        <Save size={16} />
                                        Save Changes
                                    </S.SaveButton>
                                </S.ButtonContainer>
                            </form>
                        </S.SettingsCardContent>
                    </S.SettingsCard>
                );
            case 'preferences':
                return (
                    <S.SettingsCard>
                        <S.SettingsHeader>
                            <S.SettingsTitle>
                                <Globe size={20} />
                                Preferences
                            </S.SettingsTitle>
                            <S.SettingsDescription>Customize your experience</S.SettingsDescription>
                        </S.SettingsHeader>
                        <S.SettingsCardContent>
                            <form onSubmit={handleSubmit}>
                                <FormGroup style={{ marginBottom: '24px' }}>
                                    <Label htmlFor='language'>Language</Label>
                                    <select
                                        id='language'
                                        name='language'
                                        value={formData.language}
                                        onChange={handleInputChange}
                                        style={{
                                            height: '40px',
                                            width: '100%',
                                            padding: '0 12px',
                                            backgroundColor: '#1A1A1A',
                                            color: '#D4D4D4',
                                            border: '1px solid #333333',
                                            borderRadius: '6px',
                                            fontSize: '.84rem',
                                        }}
                                    >
                                        <option value='en'>English</option>
                                    </select>
                                </FormGroup>
                                <div style={{ marginBottom: '24px' }}>
                                    <Label>Theme</Label>
                                    <S.ThemeSelector>
                                        <S.ThemeOption $active={theme === 'light'} onClick={() => setTheme('light')}>
                                            <S.ThemeIcon>
                                                <Sun size={20} />
                                            </S.ThemeIcon>
                                            <S.ThemeName>Light</S.ThemeName>
                                        </S.ThemeOption>
                                        <S.ThemeOption $active={theme === 'dark'} onClick={() => setTheme('dark')}>
                                            <S.ThemeIcon>
                                                <Moon size={20} />
                                            </S.ThemeIcon>
                                            <S.ThemeName>Dark</S.ThemeName>
                                        </S.ThemeOption>
                                        <S.ThemeOption $active={theme === 'system'} onClick={() => setTheme('system')}>
                                            <S.ThemeIcon>
                                                <Smartphone size={20} />
                                            </S.ThemeIcon>
                                            <S.ThemeName>System</S.ThemeName>
                                        </S.ThemeOption>
                                    </S.ThemeSelector>
                                </div>
                                <S.ButtonContainer>
                                    <Button type='button' $variant='outline'>
                                        Cancel
                                    </Button>
                                    <S.SaveButton type='submit' $variant='primary'>
                                        <Save size={16} />
                                        Save Changes
                                    </S.SaveButton>
                                    <S.ExitButton type='submit' $variant='red' onClick={handleLogout}>
                                        <LogOut size={16} />
                                        Logout
                                    </S.ExitButton>
                                </S.ButtonContainer>
                            </form>
                        </S.SettingsCardContent>
                    </S.SettingsCard>
                );
            default:
                return null;
        };
    };

    return (
        <DashboardLayout>
            <S.PageHeader>
                <S.PageTitle>
                    <Settings size={24} />
                    Settings
                </S.PageTitle>
            </S.PageHeader>

            <S.SettingsContainer>
                <S.SettingsSidebar>
                    <S.SettingsNav>
                        <S.NavItem $active={activeSection === 'profile'} onClick={() => setActiveSection('profile')}>
                            <User size={18} />
                            Profile
                        </S.NavItem>
                        <S.NavItem $active={activeSection === 'notifications'} onClick={() => setActiveSection('notifications')}>
                            <Bell size={18} />
                            Notifications
                        </S.NavItem>
                        <S.NavItem $active={activeSection === 'security'} onClick={() => setActiveSection('security')}>
                            <Shield size={18} />
                            Security
                        </S.NavItem>
                        <S.NavItem $active={activeSection === 'preferences'} onClick={() => setActiveSection('preferences')}>
                            <Globe size={18} />
                            Preferences
                        </S.NavItem>
                    </S.SettingsNav>
                </S.SettingsSidebar>

                <S.SettingsContentArea>{renderSection()}</S.SettingsContentArea>
            </S.SettingsContainer>
        </DashboardLayout>
    );
};