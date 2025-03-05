import type { ReactNode, FC } from 'react';

import type {
  IMENU_DATA,
  IHERO_DATA,
  IHEADER_DATA,
  IREVIEWS_DATA,
  IBENEFITS_DATA,
  IPRODUCTS_DATA,
  IINGREDIENTS_DATA,
  ITOP_SELLERS_DATA,
  IHOW_ITS_MADE_DATA,
  IOnButtonClick,
  ICommonIcon,
  ICommonImage,
  ICommonTitle,
  ICommonButton,
  IOnFieldChange,
  ICommonDescription,
  IBooleanStateSetter,
} from '../index.types';

export interface IComponentProps {
  className?: string;
  children?: ReactNode;
  classNames?: string[];
}

export interface IIconProps extends IComponentProps {
  data?: ICommonIcon;
  fragment?: string;
  fragmentKey?: string;
}

export interface IImageProps extends IComponentProps {
  data: ICommonImage;
}

export interface IButtonProps extends IComponentProps {
  data?: ICommonButton;
  type?: 'button' | 'submit' | 'reset';
  onClick?: IOnButtonClick;
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
  data: ICommonTitle;
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
  data: ICommonTitle;
}

export interface IDescriptionProps extends IComponentProps {
  data: ICommonDescription;
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

export interface IProductsProps extends IComponentProps {
  data: IPRODUCTS_DATA;
}

export interface IProductsListProps extends IComponentProps {
  data: IPRODUCTS_DATA['productsList'];
}

export interface IProductsItemsProps extends IComponentProps {
  data: IPRODUCTS_DATA['productsList']['productsItems'][number];
}

export interface ITopSellersProps extends IComponentProps {
  data: ITOP_SELLERS_DATA;
}

export interface ITopSellersListProps extends IComponentProps {
  data: ITOP_SELLERS_DATA['topSellersList'];
}
export interface ITopSellersItemProps extends IComponentProps {
  data: ITOP_SELLERS_DATA['topSellersList']['topSellersItems'][number];
}

export interface IReviewsProps extends IComponentProps {
  data: IREVIEWS_DATA;
}

export interface IReviewsListProps extends IComponentProps {
  data: IREVIEWS_DATA['reviewsList'];
}

export interface IReviewsItemProps extends IComponentProps {
  data: IREVIEWS_DATA['reviewsList']['reviewsItems'][number];
}

export interface IModalProps extends IComponentProps {
  isModalOpen: boolean;
  setIsModalOpen: IBooleanStateSetter;
  data: IREVIEWS_DATA['reviewsModal'];
}

export interface IReviewSubmitFormProps extends IComponentProps {
  data: IREVIEWS_DATA['reviewsModal']['reviewSubmitForm'];
}

export interface IInputProps extends IComponentProps {
  data: IREVIEWS_DATA['reviewsModal']['reviewSubmitForm']['inputs'][number];
  isFieldDataValid?: boolean;
  onChange?: IOnFieldChange;
}

export interface IFieldErrorProps extends IComponentProps {
  data: IREVIEWS_DATA['reviewsModal']['reviewSubmitForm']['inputs'][number]['errorText'];
  fieldError?: boolean;
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

export type ITitle = FC<ISectionTitleProps>;
export type IBenefits = FC<IBenefitsProps>;
export type IBenefitsList = FC<IBenefitsListProps>;
export type IBenefitsItem = FC<IBenefitsItemProps>;
export type IHeading = FC<ITitleProps>;
export type IDescription = FC<IDescriptionProps>;

export type IIngredients = FC<IIngredientsProps>;
export type IIngredientsList = FC<IIngredientsListProps>;
export type IIngredientsItem = FC<IIngredientsItemProps>;

export type IHowItsMade = FC<IHowItsMadeProps>;
export type IRecipeList = FC<IRecipeListProps>;
export type IRecipeItem = FC<IRecipeItemProps>;

export type IProducts = FC<IProductsProps>;
export type IProductsList = FC<IProductsListProps>;
export type IProductsItem = FC<IProductsItemsProps>;

export type ITopSellers = FC<ITopSellersProps>;
export type ITopSellersList = FC<ITopSellersListProps>;
export type ITopSellersItem = FC<ITopSellersItemProps>;

export type IReviews = FC<IReviewsProps>;
export type IReviewsList = FC<IReviewsListProps>;
export type IReviewsItem = FC<IReviewsItemProps>;
export type IModal = FC<IModalProps>;
export type IReviewSubmitForm = FC<IReviewSubmitFormProps>;
export type IField = FC<IInputProps>;
export type IFieldError = FC<IFieldErrorProps>;
export type ILabel = FC<IInputProps>;
export type IInput = FC<IInputProps>;
export type ITextArea = FC<IInputProps>;
export type ICheckbox = FC<IInputProps>;
