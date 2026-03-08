declare global {
  interface Window {
    Calendly: any;
  }
}

export const useCalendly = () => {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/YOUR_CALENDLY_LINK', // TODO: Replace with real URL
      });
    }
  };
  return { openCalendly };
};
