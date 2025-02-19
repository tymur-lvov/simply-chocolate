export interface ICommonIcon {
  width: number;
  height: number;
  fragment?: string;
  fragments?: {
    [key: string]: string;
  };
  getFragmentKey?: (isMenuOpen: boolean) => string;
}

export interface ICommonImage {
  width: number;
  height: number;
  alt: string;
  paths: {
    x1: string;
    x2: string;
  };
}

export interface ICommonLink {
  href: string;
  rel?: string;
  text?: string;
  target?: string;
  textParts?: {
    [key: string]: string;
  };
}

export interface ICommonButton {
  type?: string;
  text?: string;
  icon?: ICommonIcon;
}

export interface ICommonTitle {
  text?: string;
  textParts?: {
    [key: string]: string;
  };
  textVariants?: {
    [key: string]: {
      text?: string;
      textParts?: {
        [key: string]: string;
      };
    };
  };
}

export interface ICommonInput {
  type?: string;
  label?: string;
  icon?: ICommonIcon;
  placeholder?: string;
  link?: ICommonLink;
}
