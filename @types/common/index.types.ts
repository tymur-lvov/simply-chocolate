export interface ICommonComponent {
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

export interface ICommonAsset {
  width: number;
  height: number;
}

export interface ICommonIcon extends ICommonAsset {
  fragment?: string;
  fragments?: {
    [key: string]: string;
  };
  getFragmentKey?: (isMenuOpen: boolean) => string;
}

export interface ICommonImage extends ICommonAsset {
  alt: string;
  paths: {
    x1: string;
    x2: string;
  };
}

export interface ICommonLink extends ICommonComponent {
  href: string;
  rel?: string;
  target?: string;
}

export interface ICommonButton extends ICommonComponent {
  type?: string;
  icon?: ICommonIcon;
}

export interface ICommonTitle extends ICommonComponent {
  isAccented?: boolean;
}

export interface ICommonDescription extends ICommonComponent {
  isAccented?: boolean;
}

export interface ICommonInput {
  type?: string;
  label?: string;
  icon?: ICommonIcon;
  placeholder?: string;
  link?: ICommonLink;
}
