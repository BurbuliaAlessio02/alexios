import { useTranslations } from 'next-intl';

export const contact = () => {
    //TODO ADD THE LANGUAGES
  const t = useTranslations('contact');

  return (
    <main className='flex flex-col items-center justify-center'>
      <h1 className='display-none'>alexios</h1>
      
      <p>CONTACT</p>
      <p>contact</p>
    </main>
  );
}

export default contact;