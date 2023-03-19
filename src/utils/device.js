export const isMobile = () => {
  try {
    if (typeof window.orientation !== "undefined") return true;
    if (window.screen.width < 768) return true;
    //if (navigator.userAgent.indexOf("IEMobile") !== -1) return true;
    //if (navigator.maxTouchPoints > 5) return true;

    return false;
  } catch (error) {
    return false;
  }
};
