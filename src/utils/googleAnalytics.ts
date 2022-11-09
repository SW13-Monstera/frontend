import { GA_TRACKING_ID } from '../constants/api';

export const addGoogleAnalyticsTag = () => {
  const googleAnalyticsTagElement1 = document.createElement('script');
  const googleAnalyticsTagElement2 = document.createElement('script');
  googleAnalyticsTagElement1.async = true;
  googleAnalyticsTagElement1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  googleAnalyticsTagElement2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', ${GA_TRACKING_ID});`;
  document.head.insertAdjacentElement('afterbegin', googleAnalyticsTagElement2);
  document.head.insertAdjacentElement('afterbegin', googleAnalyticsTagElement1);
};
