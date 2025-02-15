export interface ICommonIcon {
  width: number;
  height: number;
  fragment?: string;
  fragments?: { [key: string]: string };
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
  textParts?: { [key: string]: string };
}

export interface ICommonButton {
  text: string;
  icon?: ICommonIcon;
}

export interface ICommonSectionTitle {
  text?: string;
  textParts?: { [key: string]: string };
  textVersions?: { [key: string]: string };
}
