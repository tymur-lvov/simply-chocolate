import type {
  ICommonIcon,
  ICommonLink,
  ICommonInput,
  ICommonTitle,
  ICommonImage,
  ICommonButton,
  ICommonDescription,
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
  mainTitle: ICommonTitle;
  orderButton: ICommonButton;
  infoButton: ICommonButton;
  scrollBlock: {
    link: ICommonLink;
    icon: ICommonIcon;
  };
}

export interface IBENEFITS_DATA {
  sectionTitle: ICommonTitle;
  benefitsList: {
    benefitsItems: {
      icon: ICommonIcon;
      title: ICommonTitle;
      description: ICommonDescription;
    }[];
  };
}

export interface IINGREDIENTS_DATA {
  sectionTitle: ICommonTitle;
  ingredientsList: {
    ingredientsItems: {
      link: ICommonLink;
      icon: ICommonIcon;
      image: ICommonImage;
      title: ICommonTitle;
    }[];
  };
}

export interface IHOW_ITS_MADE_DATA {
  sectionTitle: ICommonTitle;
  videoThumb: {
    icon: ICommonIcon;
  };
  title: ICommonTitle;
  recipeList: {
    recipeItems: {
      text: string;
    }[];
  };
}

export interface IPRODUCTS_DATA {
  sectionTitle: ICommonTitle;
  productsList: {
    productsItems: {
      link: ICommonLink;
      image: ICommonImage;
      title: ICommonTitle;
      description: ICommonDescription;
      price: string;
    }[];
  };
}

export interface ITOP_SELLERS_DATA {
  sectionTitle: ICommonTitle;
  topSellersList: {
    topSellersItems: {
      image: ICommonImage;
      title: ICommonTitle;
      description: ICommonDescription;
    }[];
  };
}

export interface IREVIEWS_DATA {
  sectionTitle: ICommonTitle;
  reviewsList: {
    reviewsItems: {
      image: ICommonImage;
      title: ICommonTitle;
      description: ICommonDescription;
    }[];
  };
  modalOpenButton: ICommonButton;
  reviewsModal: {
    closeButton: ICommonButton;
    reviewSubmitForm: {
      title: ICommonTitle;
      inputs: ICommonInput[];
      button: ICommonButton;
    };
  };
}
