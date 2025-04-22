// app/[locale]/layout.tsx

import type { Metadata } from 'next';

import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { getMessages } from 'next-intl/server';
import Providers from './providersClient';

import { routing } from '@/i18n/routing';
import NavLayoutClient from './NavLayoutClient';
import CustomCursor from '@/components/CustomCursor';

import '@/styles/global/index.scss';

/**
 * Metadata for the application, including icons and manifest.
 * @type {Metadata}
 */
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

/**
 * LocaleLayout component that sets up the layout for different locales.
 * 
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The child components to render.
 * @param {Object} props.params - The parameters object.
 * @param {string} props.params.locale - The locale string.
 * 
 * @returns {JSX.Element} The rendered layout component.
 */
export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { children } = props;
  const { locale } = await Promise.resolve(props.params);

  // Check if the locale is supported, otherwise show a 404 page
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Fetch the messages for the current locale
  const messages = await getMessages();

  return (
    <html 
    lang={locale}
    suppressHydrationWarning
    >
      <body className="antialiased">
        <Providers locale={locale} messages={messages}>
          <NavLayoutClient>
            <CustomCursor />
            {children}
          </NavLayoutClient>
        </Providers>
      </body>
    </html>
  );
}