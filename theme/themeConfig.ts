import {
  PaletteColorOptions,
  createTheme,
  responsiveFontSizes,
  PaletteOptions,
  css,
  alpha,
} from "@mui/material/styles";
import { APP_COLORS } from "./colors";
import { APP_BAR_SIZE } from "@/utils/constants";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

declare module "@mui/material/styles" {
  interface CustomPalette {
    milkWhite?: PaletteColorOptions;
    google?: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
  interface Theme extends CustomPalette {}
  interface ThemeOptions extends CustomPalette {}
}

// Override button props
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    milkWhite: true;
    google: true;
  }
}
export type AllowedTheme = NonNullable<PaletteOptions["mode"]>;
export const DEFAULT_THEME: AllowedTheme = "dark";
const defaultTheme = createTheme({
  //spacing: 10,
});
const { augmentColor } = defaultTheme.palette;
const createColor = (mainColor: any) =>
  augmentColor({
    color: {
      main: mainColor,
    },
  });
export const lightTheme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: { main: APP_COLORS.PRIMARY_COLOR },
      secondary: { main: APP_COLORS.SECONDARY_COLOR },
      mode: "light",
      milkWhite: createColor(APP_COLORS.WHITE),
      google: createColor(APP_COLORS.GOOGLE),
    },
    spacing: defaultTheme.spacing,
    typography: {
      fontFamily: [poppins.style.fontFamily].join(","),
      h2: {
        fontSize: 35,
      },
      h3: {
        fontSize: 24,
        fontWeight: 500,
        letterSpacing: 0.1,
      },
      h4: {
        fontSize: 20,
        fontWeight: 600,
      },
      h5: {
        fontSize: 18,
        fontWeight: 600,
      },
      h6: {
        fontSize: 16,
        fontWeight: 500,
        lineHeight: "20px",
        letterSpacing: 0.1,
      },
      body1: {
        fontSize: 14,
        lineHeight: "20px",
      },
      body2: {
        fontSize: 12,
      },
    },
    components: {
      MuiAppBar: {
        defaultProps: {
          position: "fixed",
          color: "inherit",
          elevation: 0,
        },
        styleOverrides: {
          root: {
            height: APP_BAR_SIZE,
          },
          colorInherit: {
            backgroundColor: defaultTheme.palette.common.white,
            //borderBottom: `1px solid ${defaultTheme.palette.divider}`,
          },
        },
      },

      MuiButton: {
        defaultProps: {
          disableElevation: true,
          variant: "contained",
          size: "medium",
        },
        styleOverrides: {
          root: {
            textTransform: "none",
          },
          sizeMedium: {
            height: defaultTheme.spacing(5),
            minWidth: defaultTheme.spacing(10),
          },
          sizeLarge: {
            height: 43,
          },
          sizeSmall: {
            height: 35,
            minWidth: defaultTheme.spacing(10),
            padding: defaultTheme.spacing(0, 2),
          },
          textSizeSmall: {
            fontSize: 14,
            lineHeight: "20px",
            fontWeight: 600,
            letterSpacing: 0.1,
            padding: 0,
            minWidth: 0,
          },
          colorInherit: {
            color: defaultTheme.palette.text.secondary,
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          size: "small",
        },
        styleOverrides: {},
      },

      MuiListItemText: {
        styleOverrides: {
          primary: {
            fontWeight: 500,
            color: defaultTheme.palette.text.primary,
          },
        },
      },
      MuiCardHeader: {
        styleOverrides: {
          title: {
            fontSize: 14,
          },
          subheader: {
            fontSize: 12,
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontSize: 14,
            lineHeight: "20px",
            letterSpacing: 0.1,
          },
        },
      },
      MuiTableHead: {
        styleOverrides: {
          root: {
            backgroundColor: defaultTheme.palette.grey[100],
          },
        },
      },
    },
  })
);
export const darkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: { main: APP_COLORS.PRIMARY_COLOR },
      secondary: { main: APP_COLORS.SECONDARY_COLOR },
      mode: "dark",
      milkWhite: createColor(APP_COLORS.WHITE),
      google: createColor(APP_COLORS.GOOGLE),
    },
    typography: {
      fontFamily: [poppins.style.fontFamily].join(","),
      caption: {
        color: defaultTheme.palette.grey[400],
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          variant: "contained",
          disableElevation: true,
          color: "primary",
        },
        styleOverrides: {
          root: {
            textTransform: "none",
          },
          endIcon: {
            marginLeft: 2,
            marginBottom: 1,
          },
        },
      },
    },
  })
);

export const globalStyles = css`
  :root {
    body {
      background-color: #ffffff;
      color: #121212;
    }
    main {
      padding-top: ${0}px;
    }
  }

  [data-theme="dark"] {
    body {
      background-color: #121212;
      color: #fff;
    }
  }
`;
