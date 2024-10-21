declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

declare module '@components' {
  import { FunctionComponent } from 'react';
  export const Test: FunctionComponent<any>;
}
