import { useTranslations } from 'next-intl';

export const projects = () => {
  //TODO ADD THE LANGUAGES
  const t = useTranslations('projects');

  return (
    <main className='flex flex-col items-center justify-center'>
      <h1 className='display-none'>alexios</h1>
      
      <p>PROJECTS</p>
      <p>projects</p>
    </main>
  );
}

export default projects;