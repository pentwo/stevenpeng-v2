import { MantineThemeOverride } from "@mantine/core";

export const siteTheme: MantineThemeOverride = {
  primaryColor: "teal",
  primaryShade: 6,

  white: "#eee",
  black: "#111",

  fontFamily: 'lato, "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontFamilyMonospace: 'Roboto Mono, "Courier New", Courier, monospace',

  headings: {
    fontFamily: "Roboto",
    fontWeight: 700,
    sizes: {
      h1: {
        fontSize: "58px",
      },
      h2: {
        fontSize: "42px",
      },
      h3: {
        fontSize: "34px",
      },
      h4: {
        fontSize: "20px",
      },
      h5: {
        fontSize: "16px",
      },
      h6: {
        fontSize: "12px",
      },
    },
  },

  components: {
    Divider: {
      defaultProps: {
        color: "teal",
        size: "md",
      },
    },
  },
};
