import type {
    Metadata
} from 'next';

import {
    ThemeProvider
} from '@/providers/ThemeProvider';
import { 
    AuthProvider 
} from '@/providers/AuthProvider';

export const metadata: Metadata = {
    title: 'Know Your Fan | FURIA Esports',
    description: 'Connect with FURIA Esports and unlock personalized fan experiences'
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <head>
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Outfit:wght@100..900&display=swap'
                    rel='stylesheet'
                />
                <link rel='icon' href='/icon-black.png' />
            </head>
            <body>
                <ThemeProvider>
                    <AuthProvider>
                        {children}
                    </AuthProvider>
                </ThemeProvider>
            </body>
        </html>
    );
};