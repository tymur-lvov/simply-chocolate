export interface IMENU_DATA {
  toggleIcon: {
    width: number;
    height: number;
    fragments: {
      open: string;
      close: string;
    };
    getFragmentKey: (isMenuOpen: boolean) => string;
  };

  navList: {
    navItems: {
      link: {
        href: string;
        text: string;
      };
    }[];
  };

  socialsList: {
    socialsItems: {
      link: {
        href: string;
        target: string;
        rel: string;
      };
      icon: {
        width: number;
        height: number;
        fragment: string;
      };
    }[];
  };
}

export interface IHEADER_DATA {
  logo: {
    link: {
      href: string;
      text: {
        accentPart: string;
        mainPart: string;
      };
    };
    icon: {
      width: number;
      height: number;
      fragment: string;
    };
  };

  navList: {
    navItems: {
      link: {
        href: string;
        text: string;
      };
    }[];
  };

  socialsList: {
    socialsItems: {
      link: {
        href: string;
        target: string;
        rel: string;
      };
      icon: {
        width: number;
        height: number;
        fragment: string;
      };
    }[];
  };
}

export interface IHERO_DATA {
  mainTitle: {
    text: {
      mobile: string;
      tablet: string;
    };
  };

  orderButton: {
    text: string;
  };

  infoButton: {
    text: string;
  };

  scrollBlock: {
    link: {
      href: string;
      text: string;
    };
    icon: {
      width: number;
      height: number;
      fragment: string;
    };
  };
}

export interface IBENEFITS_DATA {
  sectionTitle: string;
  benefitsList: {
    benefitsItems: {
      title: string;
      description: string;
      icon: {
        width: 32;
        height: 32;
        fragment: string;
      };
    }[];
  };
}

export interface IINGREDIENTS_DATA {
  sectionTitle: {
    startPart: string;
    accentPart: string;
    endPart: string;
  };

  ingredientsList: {
    ingredientsItems: {
      icon: {
        width: number;
        height: number;
        fragment: string;
      };
      image: {
        width: number;
        height: number;
        paths: {
          x1: string;
          x2: string;
        };
        alt: string;
      };
      title: string;
    }[];
  };
}
