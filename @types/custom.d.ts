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
  export const TestA: FunctionComponent<any>;
  export const TestB: FunctionComponent<any>;
}

declare module '@utils' {
  export function helperA(...args: any[]): any;
  export function helperB(...args: any[]): any;
}

declare module '@images' {
  export const chocolateWithFruits_1x: string;
  export const chocolateWithFruits_2x: string;
  export const chocolateWithNuts_1x: string;
  export const chocolateWithNuts_2x: string;
  export const darkChocolate_1x: string;
  export const darkChocolate_2x: string;
  export const heroBg_1x: string;
  export const heroBg_2x: string;
  export const videoBg_1x: string;
  export const videoBg_2x: string;
  export const chocolate_1x: string;
  export const chocolate_2x: string;
  export const cocoa_1x: string;
  export const cocoa_2x: string;
  export const coconut_1x: string;
  export const coconut_2x: string;
  export const coffee_1x: string;
  export const coffee_2x: string;
  export const milk_1x: string;
  export const milk_2x: string;
  export const nuts_1x: string;
  export const nuts_2x: string;
  export const raspberry_1x: string;
  export const raspberry_2x: string;
  export const vanilla_1x: string;
  export const vanilla_2x: string;
  export const logo_1x: string;
  export const logo_2x: string;
  export const appleAndCranberry_1x: string;
  export const appleAndCranberry_2x: string;
  export const classicMilk_1x: string;
  export const classicMilk_2x: string;
  export const classicWhite_1x: string;
  export const classicWhite_2x: string;
  export const honey_1x: string;
  export const honey_2x: string;
  export const limeAndSeaSalt_1x: string;
  export const limeAndSeaSalt_2x: string;
  export const orange_1x: string;
  export const orange_2x: string;
  export const pineapple_1x: string;
  export const pineapple_2x: string;
  export const roastedFruits_1x: string;
  export const roastedFruits_2x: string;
  export const nazar_1x: string;
  export const nazar_2x: string;
  export const olena_1x: string;
  export const olena_2x: string;
  export const victoria_1x: string;
  export const victoria_2x: string;
}

declare module '@icons' {
  export const icons: string;
}
