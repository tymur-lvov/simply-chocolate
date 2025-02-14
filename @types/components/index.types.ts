import type { ReactNode, FC } from 'react';

import type {
  IOnClick,
  ICommonIcon,
  ICommonImage,
  IHERO_DATA,
  IMENU_DATA,
  IHEADER_DATA,
  IBENEFITS_DATA,
  IINGREDIENTS_DATA,
  IHOW_ITS_MADE_DATA,
  ICommonSectionTitle,
} from '../index.types';

export interface IComponentProps {
  className?: string;
  children?: ReactNode;
  classNames?: string[];
}

export interface IIconProps extends IComponentProps {
  data: ICommonIcon;
  fragmentKey?: string;
}

export interface IImageProps extends IComponentProps {
  data: ICommonImage;
}

export interface IButtonProps extends IComponentProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: IOnClick;
}

export interface IHeaderProps extends IComponentProps {
  data: IHEADER_DATA;
}

export interface ILogoProps extends IComponentProps {
  data: IHEADER_DATA['logo'];
}

export interface IMenuProps extends IComponentProps {
  data: IMENU_DATA;
}

export interface INavListProps extends IComponentProps {
  data: IMENU_DATA['navList'];
  variant: 'menu' | 'header';
}

export interface INavItemProps extends IComponentProps {
  data: IMENU_DATA['navList']['navItems'][number];
  variant: 'menu' | 'header';
}

export interface ISocialsListProps extends IComponentProps {
  data: IMENU_DATA['socialsList'];
  variant: 'menu' | 'header';
}

export interface ISocialsItemProps extends IComponentProps {
  data: IMENU_DATA['socialsList']['socialsItems'][number];
  variant: 'menu' | 'header';
}

export interface IHeroProps extends IComponentProps {
  data: IHERO_DATA;
}

export interface IMainTitleProps extends IComponentProps {
  data: IHERO_DATA['mainTitle'];
}

export interface ISectionTitleProps extends IComponentProps {
  data: ICommonSectionTitle;
}

export interface IBenefitsProps extends IComponentProps {
  data: IBENEFITS_DATA;
}

export interface IBenefitsListProps extends IComponentProps {
  data: IBENEFITS_DATA['benefitsList'];
}

export interface IBenefitsItemProps extends IComponentProps {
  data: IBENEFITS_DATA['benefitsList']['benefitsItems'][number];
}

export interface ITitleProps extends IComponentProps {
  data: string;
}

export interface IDescriptionProps extends IComponentProps {
  data: string;
}

export interface IIngredientsProps extends IComponentProps {
  data: IINGREDIENTS_DATA;
}

export interface IIngredientsListProps extends IComponentProps {
  data: IINGREDIENTS_DATA['ingredientsList'];
}

export interface IIngredientsItemProps extends IComponentProps {
  data: IINGREDIENTS_DATA['ingredientsList']['ingredientsItems'][number];
}

export interface IHowItsMadeProps extends IComponentProps {
  data: IHOW_ITS_MADE_DATA;
}

export interface IRecipeListProps extends IComponentProps {
  data: IHOW_ITS_MADE_DATA['recipeList'];
}

export interface IRecipeItemProps extends IComponentProps {
  data: IHOW_ITS_MADE_DATA['recipeList']['recipeItems'][number];
}

export type IComponent = FC<IComponentProps>;
export type IIcon = FC<IIconProps>;
export type IImage = FC<IImageProps>;
export type IButton = FC<IButtonProps>;

export type IHeader = FC<IHeaderProps>;
export type ILogo = FC<ILogoProps>;
export type IMenu = FC<IMenuProps>;
export type INavList = FC<INavListProps>;
export type INavItem = FC<INavItemProps>;
export type ISocialsList = FC<ISocialsListProps>;
export type ISocialsItem = FC<ISocialsItemProps>;

export type IMainTitle = FC<IMainTitleProps>;
export type IHero = FC<IHeroProps>;

export type ISectionTitle = FC<ISectionTitleProps>;
export type IBenefits = FC<IBenefitsProps>;
export type IBenefitsList = FC<IBenefitsListProps>;
export type IBenefitsItem = FC<IBenefitsItemProps>;
export type ITitle = FC<ITitleProps>;
export type IDescription = FC<IDescriptionProps>;

export type IIngredients = FC<IIngredientsProps>;
export type IIngredientsList = FC<IIngredientsListProps>;
export type IIngredientsItem = FC<IIngredientsItemProps>;

export type IHowItsMade = FC<IHowItsMadeProps>;
export type IRecipeList = FC<IRecipeListProps>;
export type IRecipeItem = FC<IRecipeItemProps>;
