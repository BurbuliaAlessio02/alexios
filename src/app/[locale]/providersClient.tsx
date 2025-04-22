import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';

interface ProvidersProps {
  children: ReactNode;
  locale: string;
  messages: Record<string, any>;
}

/**
 * Providers component that wraps child components with theme and internationalization providers.
 * 
 * @param {ProvidersProps} props - The properties object.
 * @param {ReactNode} props.children - The child components to render.
 * @param {string} props.locale - The locale string for internationalization.
 * @param {Record<string, any>} props.messages - The messages object for the current locale.
 * 
 * @returns {JSX.Element} The rendered providers component.
 */
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