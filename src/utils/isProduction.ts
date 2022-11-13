export const isProduction =
  !window.location.href.includes('dev') && !window.location.href.includes('localhost')
    ? true
    : false;
