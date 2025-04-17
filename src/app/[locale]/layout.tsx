import type { Metadata } from "next"; //* GESTIONE META DATI

import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from "@/i18n/routing";

import '@/styles/global/index.scss';

//* ============ GESTIONE META DATI ==========
export const metadata: Metadata = { 
  //* FAVICON
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
  //* ========================================
}
//* ---------------------------------------------------------------

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {

  //* Locale detection
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  //* --------------

    return (
      <html lang={locale}>
        <body
          className={` antialiased`}
        >
          <NextIntlClientProvider locale={locale}>
            {children}
          </NextIntlClientProvider>
        </body>
      </html>
  );
}
