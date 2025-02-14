export const MainUrls = {
  getHome: () => "/",
  getAboutMe: () => "/about-me",
  getAcccordionLessons: () => "/accordion-lessons",
  getSheetMusic: () => "/sheet-music",
  getContacts: () => "/contacts",
  // getTerms: () => "/terms",
  // getPrivacy: () => "/privacy",
  // getCookies: () => "/cookies",
};

export const AdminUrls = {
  _getRoot: () => "/cms/admin",
  getAboutMe: () => `${AdminUrls._getRoot()}/about-me`,
  getAcccordionLessons: () => `${AdminUrls._getRoot()}/accordion-lessons`,
  getSheetMusic: () => `${AdminUrls._getRoot()}/sheet-music`,
  getContacts: () => `${AdminUrls._getRoot()}/contacts`,
};
