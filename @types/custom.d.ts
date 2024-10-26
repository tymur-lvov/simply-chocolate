import { FunctionComponent } from 'react';

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

declare module '@icons' {
  const content: string;
  export default content;
}

declare module '@images' {
  const content: string;
  export default content;
}

declare module '@components' {
  const content: FunctionComponent;
  export default content;
}

declare module '@utils' {
  const content: {
    [key: string]: (...args: any[]) => any;
  };
  export default content;
}
