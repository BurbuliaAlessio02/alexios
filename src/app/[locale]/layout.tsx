// app/[locale]/layout.tsx
import type { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { getMessages } from 'next-intl/server';
import Providers from './providersClient';

import { routing } from '@/i18n/routing';
import '@/styles/global/index.scss';
import NavLayoutClient from './NavLayoutClient';

export const metadata: Metadata = {
  icons: {
    icon: '/favicon/favicon-96x96.png',
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
    other: {
      rel: 'icon',
      url: '/favicon/favicon.svg',
      type: 'image/svg+xml',
    },
  },
  manifest: '/favicon/site.webmanifest',
};

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  
  const { children } = props;
  const { locale } = await Promise.resolve(props.params);

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html 
    lang={locale}
    suppressHydrationWarning
    >
      <body className="antialiased">
        <Providers locale={locale} messages={messages}>
          <NavLayoutClient>
            {children}
          </NavLayoutClient>
        </Providers>
      </body>
    </html>
  );
}