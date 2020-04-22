import * as styledComponents from 'styled-components';
import Colors from './components/Colors/Colors';

export const theme = {
  colors: Colors,
};

const { default: styled, css, ThemeProvider } = styledComponents as any;

export { css, ThemeProvider };

export default styled;
