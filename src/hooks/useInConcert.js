import { useEffect, useRef } from 'react';

const INCONCERT_TOKENS = {
  home: '5357ce0a32d5e12d013c8fa9fc527b3d',
  disney: 'token_disney_aqui',
  netflix: 'token_netflix_aqui',
  amazon: 'token_amazon_aqui',
  paramount: 'token_paramount_aqui',
  max: 'token_max_aqui',
  paquetes_home: '5357ce0a32d5e12d013c8fa9fc527b3d',
  footer: '5357ce0a32d5e12d013c8fa9fc527b3d',
};

// Control global estricto - solo una instancia
let isInConcertLoaded = false;
let isInConcertLoading = false;
let loadedToken = null;

export const useInConcert = (pageType = 'home') => {
  const isMountedRef = useRef(false);
  const hasInitializedRef = useRef(false);

  useEffect(() => {
    isMountedRef.current = true;
    const token = INCONCERT_TOKENS[pageType];
    
    if (!token || token.includes('_aqui')) {
      console.warn(`Token no válido para: ${pageType}`);
      return;
    }

    // Evitar múltiples inicializaciones
    if (hasInitializedRef.current) {
      return;
    }

    // Si ya está cargado o cargando, no hacer nada
    if (isInConcertLoaded || isInConcertLoading) {
      console.log('inConcert ya está cargado/cargando, omitiendo inicialización');
      return;
    }

    // Verificar si ya existe script
    const existingScript = document.querySelector('[src*="megacable.convertia.com"]');
    if (existingScript) {
      console.log('Script de inConcert ya existe');
      isInConcertLoaded = true;
      loadedToken = token;
      return;
    }

    // Marcar como inicializado para este hook
    hasInitializedRef.current = true;
    isInConcertLoading = true;

    console.log('Inicializando inConcert para:', pageType);

    // Cargar script
    (function(w,d,t,u,p,c,n,a,m){
      a=d.createElement(t);
      m=d.getElementsByTagName(t)[0];
      a.async=1;
      a.src=u+"?"+p+"="+c;
      
      a.onload = function() {
        if (isMountedRef.current) {
          console.log('inConcert script loaded successfully for:', pageType);
          isInConcertLoaded = true;
          isInConcertLoading = false;
          loadedToken = token;
        }
      };
      
      a.onerror = function() {
        console.error('Error loading inConcert script for:', pageType);
        isInConcertLoaded = false;
        isInConcertLoading = false;
        loadedToken = null;
        hasInitializedRef.current = false;
      };
      
      m.parentNode.insertBefore(a,m);
    })(window,document,"script","https://megacable.convertia.com/public/integration/scripts.js","token",token,"");

    return () => {
      isMountedRef.current = false;
      // NO resetear variables globales en cleanup para evitar conflictos
    };
  }, []); // Dependencias vacías para que solo se ejecute una vez

  const submitLead = async (phoneData) => {
    return new Promise((resolve) => {
      if (!isMountedRef.current) {
        resolve(false);
        return;
      }

      const checkInConcert = (attempts = 0) => {
        if (!isMountedRef.current) {
          resolve(false);
          return;
        }

        if (window.inConcert && typeof window.inConcert.submitLead === 'function') {
          try {
            window.inConcert.submitLead({
              phone: phoneData.telefono,
              source: pageType,
              pageType: pageType,
              timestamp: new Date().toISOString(),
              ...phoneData
            });
            console.log('Lead enviado exitosamente a inConcert');
            resolve(true);
          } catch (error) {
            console.error('Error enviando lead a inConcert:', error);
            resolve(false);
          }
        } else if (attempts < 40) { // 10 segundos máximo
          setTimeout(() => checkInConcert(attempts + 1), 250);
        } else {
          console.warn('inConcert no disponible después de 10 segundos');
          resolve(false);
        }
      };

      checkInConcert();
    });
  };

  return { submitLead };
};