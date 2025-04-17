import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  
  poweredByHeader: false, // sicurezza migliorata rimuovendo l'header
  trailingSlash: true, // utile per SEO e consistenza URL
  reactStrictMode: true, // abilita la modalità rigorosa di React (TO CHANGE IN FUTURO)
  productionBrowserSourceMaps: true, //* Abilita le source map per la produzione
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);