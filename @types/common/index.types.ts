export interface ICommonIcon {
  width: number;
  height: number;
  fragment?: string;
  fragments?: { [key: string]: string };
  getFragmentKey: (isMenuOpen: boolean) => string;
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
  text?: string | { [key: string]: string };
  target?: string;
  rel?: string;
}

export interface ICommonButton {
  text: string;
}

export interface ICommonSectionTitle {
  text: string | { [key: string]: string };
}
