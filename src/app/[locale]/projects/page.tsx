import { useTranslations } from 'next-intl';

export const projects = () => {
  //TODO ADD THE LANGUAGES
  const t = useTranslations('home');

  return (
    <main className='flex flex-col items-center justify-center'>
      <h1 className='display-none'>alexios</h1>
      
      <p>{t('description')}</p>
      <p>projects</p>
    </main>
  );
}

export default projects;