// IMENU_DATA
export interface one {
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
    navItems: [
      {
        link: {
          href: string;
          text: string;
        };
      },
      {
        link: {
          href: string;
          text: string;
        };
      },
      {
        link: {
          href: string;
          text: string;
        };
      }
    ];
  };

  socialsList: {
    socialsItems: [
      {
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
      },
      {
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
      },
      {
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
      }
    ];
  };
}
// IHEADER_DATA
export interface two {
  logo: {
    link: {
      href: string;
      text: {
        accent: string;
        main: string;
      };
    };
    icon: {
      width: number;
      height: number;
      fragment: string;
    };
  };

  navList: {
    navItems: [
      {
        link: {
          href: string;
          text: string;
        };
      },
      {
        link: {
          href: string;
          text: string;
        };
      },
      {
        link: {
          href: string;
          text: string;
        };
      }
    ];
  };

  socialsList: {
    socialsItems: [
      {
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
      },
      {
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
      },
      {
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
      }
    ];
  };
}
// IHERO_DATA
export interface three {
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
