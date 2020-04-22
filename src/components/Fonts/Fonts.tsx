import { css } from '../../Theme';

export const Fonts = css`
  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/materialicons/v50/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Roboto Light';
    font-style: normal;
    font-weight: 200;
    src: url('./Roboto-Light.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Roboto Regular';
    font-style: normal;
    font-weight: 400;
    src: url('./Roboto-Regular.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Roboto Semibold';
    font-style: normal;
    font-weight: 600;
    src: url('./Roboto-Bold.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Roboto Bold';
    font-style: normal;
    font-weight: 700;
    src: url('./Roboto-Bold.ttf') format('ttf');
  }

  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
  }
`