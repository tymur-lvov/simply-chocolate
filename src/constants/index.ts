export const MOBILE_MEDIA_QUERY = '(max-width: 767px)';
export const TABLET_MEDIA_QUERY = '(min-width: 768px) and (max-width:1157px)';
export const DESKTOP_MEDIA_QUERY = '(min-width: 1158px)';
export const x1_MEDIA_QUERY = '(max-resolution: 191dpi)';
export const x2_MEDIA_QUERY = '(min-resolution: 192dpi)';

export const VISUALLY_HIDDEN = 'visually_hidden';
export const VISIBLE = 'visible';
export const CONTAINER = 'container';
export const SECTION = 'section';
export const SECTION_TITLE = 'section_title';
export const SECTION_TITLE_ACCENT = 'section_title_accent';
export const MENU = 'menu';
export const HEADER = 'header';
export const FOOTER = 'footer';

export const REVIEW_FIELD_INPUT_REGEXP = {
  name: /^[A-Za-z\s\-]{2,50}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phone: /^(\+?\d{1,3})?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{2}[-.\s]?\d{2}$/,
  comment: /^[A-Za-z0-9\s.,!?()\-'"%$#@:;]{2,500}$/,
};
