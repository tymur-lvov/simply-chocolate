import type {
  ICommonIcon,
  ICommonLink,
  ICommonImage,
  ICommonButton,
  ICommonSectionTitle,
  ICommonInput,
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
      title: ICommonSectionTitle;
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
      title: ICommonSectionTitle;
    }[];
  };
}

export interface IHOW_ITS_MADE_DATA {
  sectionTitle: ICommonSectionTitle;
  videoThumb: {
    icon: ICommonIcon;
  };
  title: ICommonSectionTitle;
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
      title: ICommonSectionTitle;
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
      title: ICommonSectionTitle;
      description: string;
    }[];
  };
}

export interface IREVIEWS_DATA {
  sectionTitle: ICommonSectionTitle;
  reviewsList: {
    reviewsItems: {
      image: ICommonImage;
      title: ICommonSectionTitle;
      description: string;
    }[];
  };
  modalToggleButton: ICommonButton;
  reviewsModal: {
    form: {
      closeButton: ICommonButton;
      title: ICommonSectionTitlenSectionTitle;
      nameInput: ICommonInput;
      emainInput: ICommonInput;
      phoneInput: ICommonInput;
      commentInput: ICommonInput;
      checkboxInput: ICommonInput;
      button: ICommonButton;
    };
  };
}
