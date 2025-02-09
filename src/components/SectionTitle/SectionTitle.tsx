import type { ISectionTitle } from '@types';

export const SectionTitle: ISectionTitle = ({ className, data: sectionTitle }) => {
  return <h2 className={className}>{sectionTitle}</h2>;
};
