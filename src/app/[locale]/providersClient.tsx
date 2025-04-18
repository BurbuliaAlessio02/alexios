// app/[locale]/providers.tsx
'use client';

import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';
import NavLayoutClient from './NavLayoutClient';

interface ProvidersProps {
  children: ReactNode;
  locale: string;
  messages: Record<string, any>;
}

export default function Providers({ children, locale, messages }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <NextIntlClientProvider
      locale={locale} 
      messages={messages}
      timeZone="Europe/Rome"
      >
        {children}
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}