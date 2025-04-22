// app/it/page.tsx
import { useTranslations } from 'next-intl';

export const about = () => {
  
  //TODO ADD THE LANGUAGES
  const t = useTranslations('about');

  return (
    <main className='flex flex-col items-center justify-center'>
      <h1 className='display-none'>alexios</h1>
      
      <p>ABOUT</p>
      <p>about</p>
    </main>
  );
}

export default about;