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
      icon: ICommonIcon;
      link: ICommonLink;
    }[];
  };
}

export interface IHEADER_DATA {
  logo: {
    icon: ICommonIcon;
    link: ICommonLink;
  };
  navList: {
    navItems: {
      link: ICommonLink;
    }[];
  };
  socialsList: {
    socialsItems: {
      icon: ICommonIcon;
      link: ICommonLink;
    }[];
  };
}

export interface IHERO_DATA {
  infoButton: ICommonButton;
  orderButton: ICommonButton;
  mainTitle: ICommonSectionTitle;
  scrollBlock: {
    icon: ICommonIcon;
    link: ICommonLink;
  };
}

export interface IBENEFITS_DATA {
  sectionTitle: ICommonSectionTitle;
  benefitsList: {
    benefitsItems: {
      title: string;
      icon: ICommonIcon;
      description: string;
    }[];
  };
}

export interface IINGREDIENTS_DATA {
  sectionTitle: ICommonSectionTitle;
  ingredientsList: {
    ingredientsItems: {
      title: string;
      icon: ICommonIcon;
      link: ICommonLink;
      image: ICommonImage;
    }[];
  };
}

export interface IHOW_ITS_MADE_DATA {
  title: string;
  sectionTitle: ICommonSectionTitle;
  videoThumb: {
    icon: ICommonIcon;
  };
  recipeList: {
    recipeItems: {
      text: string;
    }[];
  };
}
