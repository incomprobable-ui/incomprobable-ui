import * as styledComponents from "styled-components";

export const theme = {
  colors: {
    // Branding
    green: "#00C071",
  },
};

const { default: styled, css, ThemeProvider } = styledComponents as any;

export { css, ThemeProvider };

export default styled;
