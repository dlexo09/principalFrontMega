export const trackFormSubmission = (formData) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'form_submit', {
      form_name: 'llamame_home',
      send_to: 'AW-315207165/cpH-CNmvrMoZEP3bppYB'
    });
  }
  if (typeof fbq !== 'undefined') {
    fbq('track', 'Lead', {
      content_name: 'llamame_form',
      value: 1,
      currency: 'MXN'
    });
  }
  if (typeof ttq !== 'undefined') {
    ttq.track('SubmitForm', { content_type: 'lead_form' });
  }
};