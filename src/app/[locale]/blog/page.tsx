import { useTranslations } from 'next-intl';

export const blog = () => {
    //TODO ADD THE LANGUAGES
  const t = useTranslations('blog');

  return (
    <main className='flex flex-col items-center justify-center'>
      <h1 className='display-none'>alexios</h1>
      
      <p>BLOG</p>
      <p>blog</p>
    </main>
  );
}

export default blog;