export interface IMediaQueryList {
  mobile: MediaQueryList;
  tablet: MediaQueryList;
  desktop: MediaQueryList;
}

export const getMediaList = (): IMediaQueryList => {
  return {
    mobile: window.matchMedia('(max-width: 767px)'),
    tablet: window.matchMedia('(min-width: 768px) and (max-width:1157px)'),
    desktop: window.matchMedia('(min-width: 1158px)'),
  };
};
