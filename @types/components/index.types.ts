import type { ReactNode, MouseEvent, FC } from 'react';

import type {
  IBENEFITS_DATA,
  IHEADER_DATA,
  IHERO_DATA,
  IHOW_ITS_MADE_DATA,
  IINGREDIENTS_DATA,
  IMENU_DATA,
} from '../index.types';

export interface IComponentProps {
  children?: ReactNode;
  className?: string;
  classNames?: string[];
}

export interface IIconProps extends IComponentProps {
  fragmentKey?: string;
  data: {
    width: number;
    height: number;
    fragment?: string;
    fragments?: {
      [key: string]: string;
    };
  };
}

export interface IImageProps extends IComponentProps {
  data: {
    width: number;
    height: number;
    paths: {
      x1: string;
      x2: string;
    };
    alt: string;
  };
}

export interface IButtonProps extends IComponentProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

export interface ILogoProps extends IComponentProps {
  data: IHEADER_DATA['logo'];
}

export interface INavListProps extends IComponentProps {
  variant: 'menu' | 'header';
  data: IMENU_DATA['navList'];
}

export interface INavItemProps extends IComponentProps {
  variant: 'menu' | 'header';
  data: IMENU_DATA['navList']['navItems'][number];
}

export interface ISocialsListProps extends IComponentProps {
  variant: 'menu' | 'header';
  data: IMENU_DATA['socialsList'];
}

export interface ISocialsItemProps extends IComponentProps {
  variant: 'menu' | 'header';
  data: IMENU_DATA['socialsList']['socialsItems'][number];
}

export interface IMainTitleProps extends IComponentProps {
  data: IHERO_DATA['mainTitle'];
}

export interface ISectionTitleProps extends IComponentProps {
  data: string | { [key: string]: string };
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

export interface IIngredientsListProps extends IComponentProps {
  data: IINGREDIENTS_DATA['ingredientsList'];
}

export interface IIngredientsItemProps extends IComponentProps {
  data: IINGREDIENTS_DATA['ingredientsList']['ingredientsItems'][number];
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
export type IApp = FC<IComponentProps>;

export type IHeader = FC<IComponentProps>;
export type ILogo = FC<ILogoProps>;
export type IMenu = FC<IComponentProps>;
export type INavList = FC<INavListProps>;
export type INavItem = FC<INavItemProps>;
export type ISocialsList = FC<ISocialsListProps>;
export type ISocialsItem = FC<ISocialsItemProps>;

export type IMain = FC<IComponentProps>;
export type IMainTitle = FC<IMainTitleProps>;
export type IHero = FC<IComponentProps>;

export type ISectionTitle = FC<ISectionTitleProps>;
export type IBenefits = FC<IComponentProps>;
export type IBenefitsList = FC<IBenefitsListProps>;
export type IBenefitsItem = FC<IBenefitsItemProps>;
export type ITitle = FC<ITitleProps>;
export type IDescription = FC<IDescriptionProps>;

export type IIngredients = FC<IComponentProps>;
export type IIngredientsList = FC<IIngredientsListProps>;
export type IIngredientsItem = FC<IIngredientsItemProps>;

export type IHowItsMade = FC<IComponentProps>;
export type IRecipeList = FC<IRecipeListProps>;
export type IRecipeItem = FC<IRecipeItemProps>;
