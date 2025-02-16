import type {
  ICommonIcon,
  ICommonLink,
  ICommonImage,
  ICommonButton,
  ICommonSectionTitle,
} from '../common/index.types';

export interface IMENU_DATA {
  toggleIcon: ICommonIcon;
  navList: {
    navItems: {
      link: ICommonLink;
    }[];
  };
  socialsList: {
    socialsItems: {
      link: ICommonLink;
      icon: ICommonIcon;
    }[];
  };
}

export interface IHEADER_DATA {
  logo: {
    link: ICommonLink;
    icon: ICommonIcon;
  };
  navList: {
    navItems: {
      link: ICommonLink;
    }[];
  };
  socialsList: {
    socialsItems: {
      link: ICommonLink;
      icon: ICommonIcon;
    }[];
  };
}

export interface IHERO_DATA {
  mainTitle: ICommonSectionTitle;
  orderButton: ICommonButton;
  infoButton: ICommonButton;
  scrollBlock: {
    link: ICommonLink;
    icon: ICommonIcon;
  };
}

export interface IBENEFITS_DATA {
  sectionTitle: ICommonSectionTitle;
  benefitsList: {
    benefitsItems: {
      icon: ICommonIcon;
      title: string;
      description: string;
    }[];
  };
}

export interface IINGREDIENTS_DATA {
  sectionTitle: ICommonSectionTitle;
  ingredientsList: {
    ingredientsItems: {
      link: ICommonLink;
      icon: ICommonIcon;
      image: ICommonImage;
      title: string;
    }[];
  };
}

export interface IHOW_ITS_MADE_DATA {
  sectionTitle: ICommonSectionTitle;
  videoThumb: {
    icon: ICommonIcon;
  };
  title: string;
  recipeList: {
    recipeItems: {
      text: string;
    }[];
  };
}

export interface IOUR_PRODUCTS_DATA {
  sectionTitle: ICommonSectionTitle;
  productsList: {
    productsItems: {
      link: ICommonLink;
      image: ICommonImage;
      title: string;
      description: string;
      price: string;
    }[];
  };
}

export interface ITOP_SELLERS_DATA {
  sectionTitle: ICommonSectionTitle;
  topSellersList: {
    topSellersItems: {
      image: ICommonImage;
      title: string;
      description: string;
    }[];
  };
}
