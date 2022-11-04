import { GA_TRACKING_ID } from '../constants/api';

export const addGoogleAnalyticsTag = () => {
  const googleAnalyticsTagElement = document.createElement('div');
  googleAnalyticsTagElement.innerHTML = `
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-5YDJ48WT3K"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', ${GA_TRACKING_ID});
    </script>`;
  document.head.insertAdjacentElement('afterend', googleAnalyticsTagElement);
};
