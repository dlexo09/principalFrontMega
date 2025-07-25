const INCONCERT_API_URL = 'https://megacable.convertia.com/public/integration/process';

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

export const submitLeadToInConcert = async (phoneNumber, source = 'home') => {
  const token = INCONCERT_TOKENS[source] || INCONCERT_TOKENS.home;
  
  try {
    const response = await fetch(INCONCERT_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        serviceToken: token,
        serviceAction: 'c2c',
        contactData: {
          phone: phoneNumber
        }
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    console.log('✅ Lead enviado exitosamente a inConcert:', data);
    
    return {
      success: true,
      data: data,
      contactId: data.data?.contactId,
      status: data.data?.status
    };
  } catch (error) {
    console.error('❌ Error enviando lead a inConcert:', error);
    return {
      success: false,
      error: error.message
    };
  }
};