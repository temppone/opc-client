import "styled-components";

interface ColorShade {
  main: string;
  dark: string;
  darker?: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    border: {
      radius: {
        small: string;
        medium: string;
        large: string;
      };
    };

    font: {
      family: string;
      weight: {
        xxsmall: number;
        xsmall: number;
        small: number;
        medium: number;
        large: number;
        xlarge: number;
        xxlarge: number;
      };

      sizes: {
        xxxsmall: string;
        xxsmall: string;
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
      };
    };

    colors: {
      primary: ColorShade;
      secondary: ColorShade;
      typography: ColorShade;
      background: ColorShade;
      white: string;
      gray: string;
    };

    spacings: {
      xxsmall: string;
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
    };

    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      sl: string;
    };

    transition: {
      default: string;
    };
  }
}
