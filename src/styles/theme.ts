import { DefaultTheme } from "styled-components";

export const mainTheme: DefaultTheme = {
  border: {
    radius: {
      small: "5px",
      medium: "10px",
      large: "19px",
    },
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",

    weight: {
      xxsmall: 200,
      xsmall: 300,
      small: 400,
      medium: 500,
      large: 600,
      xlarge: 700,
      xxlarge: 800,
    },

    sizes: {
      xxxsmall: "1rem",
      xxsmall: "1.4rem",
      xsmall: "1.6rem",
      small: "1.8rem",
      medium: "2.2rem",
      large: "2.6rem",
      xlarge: "3.4rem",
      xxlarge: "5.2rem",
    },
  },

  colors: {
    primary: {
      main: "#77C3FD",
      dark: "#3DA9FC",
      darker: "#0C2232",
    },
    secondary: {
      main: "#FFBC6F",
      dark: "#FFA031",
      darker: "#4C300F",
    },
    typography: {
      main: "#55646F",
      dark: "#0C2232",
    },
    background: {
      main: "#F3F3F3",
      dark: "#D1D3D4",
    },
    white: "#FFFFFE",
  },

  spacings: {
    xxsmall: "0.8rem",
    xsmall: "1.6rem",
    small: "2.4rem",
    medium: "3.2rem",
    large: "6.0rem",
    xlarge: "6.4rem",
    xxlarge: "12.8rem",
  },

  breakpoints: {
    xs: "480px",
    sm: "600px",
    md: "801px",
    lg: "1025px",
    xl: "1281px",
    sl: "1441px",
  },

  transition: {
    default: "0.2s ease-in-out",
  },
} as const;
