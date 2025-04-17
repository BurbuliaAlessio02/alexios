'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

const LangChangeButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('navbar');
  
  /**
  * 🇮🇹 Cambia la lingua dell'applicazione applicando una transizione di uscita (fade-out)
  * prima di eseguire la navigazione. Se la lingua selezionata è già quella corrente,
  * la funzione non fa nulla per evitare un flicker visivo.
  *
  * 🇬🇧 Switches the application's language by applying a fade-out transition
  * before performing navigation. If the selected language is already active,
  * the function does nothing to avoid visual flickering.
  *
  * @param {string} lng - La lingua di destinazione (es. 'en', 'it') / The target language (e.g., 'en', 'it')
  */
  const switchTo = (lng: string) => {
    if (lng === locale) return; // 👈 evita il cambio se la lingua è già attiva
    
    const path = pathname.replace(`/${locale}`, '') || '/';
    
    document.body.classList.add('fade-out');
    
    setTimeout(() => {
      router.replace(`/${lng}${path}`);
    }, 300);
  };
  
  return (
    <div className="chiose-language-box">
      <div className="inner-scroll">
        <div className="language">
          <p>{t('languages')}</p>
        </div>
        <div className="toggle-language">
          <button onClick={() => switchTo('en')}>EN</button>
          <button onClick={() => switchTo('it')}>IT</button>
        </div>
      </div>
    </div>
  );
};

export default LangChangeButton;
