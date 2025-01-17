const viewportWidth = window.innerWidth;
const pixelRatio = window.devicePixelRatio;

const isDeviceTablet = viewportWidth >= 768 && viewportWidth < 1158;
const isDeviceDesktop = viewportWidth >= 1158;
const isDeviceRetina = pixelRatio > 1;

const mediaQueryConditions = [
  { condition: () => isDeviceDesktop && !isDeviceRetina, result: () => 'desktop' },
  { condition: () => isDeviceDesktop && isDeviceRetina, result: () => 'desktop retina' },

  { condition: () => isDeviceTablet && !isDeviceRetina, result: () => 'tablet' },
  { condition: () => isDeviceTablet && isDeviceRetina, result: () => 'tablet retina' },

  { condition: () => isDeviceRetina, result: () => 'retina' },
  { condition: () => !isDeviceRetina, result: () => '' },
];

export const useMedia = () => {
  const mediaQueryCondition = mediaQueryConditions.find(({ condition }) => condition());

  if (!mediaQueryCondition) {
    throw new Error('Media query condition not found');
  }

  return [mediaQueryCondition.result()];
};
