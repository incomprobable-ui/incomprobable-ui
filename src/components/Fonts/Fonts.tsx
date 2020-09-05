import { css } from '../../Theme';
import { Platform } from '../../types';
import { getPlatform } from '../../utils/Platform';

const platform = getPlatform();

export const Fonts = css`
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 200;
    src: url('./SourceSansPro-Light.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Source Sans Pro';
    font-style: italic;
    font-weight: 200;
    src: url('./SourceSansPro-LightItalic.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    src: url('./SourceSansPro-Regular.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    src: url('./SourceSansPro-SemiBold.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Source Sans Pro';
    font-style: italic;
    font-weight: 600;
    src: url('./SourceSansPro-SemiBoldItalic.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 700;
    src: url('./SourceSansPro-Bold.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Source Sans Pro';
    font-style: italic;
    font-weight: 700;
    src: url('./SourceSansPro-BoldItalic.ttf') format('ttf');
  }
`;

export const fontLight = css`
  font-size: 16px;
  font-family: ${platform === Platform.Web ? 'Source Sans Pro' : 'SourceSansPro-Light'};
  font-weight: 200;
`;

export const fontRegular = css`
  font-size: 16px;
  font-family: ${platform === Platform.Web ? 'Source Sans Pro' : 'SourceSansPro-Regular'};
  font-weight: 400;
`;

export const fontSemibold = css`
  font-size: 16px;
  font-family: ${platform === Platform.Web ? 'Source Sans Pro' : 'SourceSansPro-SemiBold'};
  font-weight: 600;
`;

export const fontBold = css`
  font-size: 16px;
  font-family: ${platform === Platform.Web ? 'Source Sans Pro' : 'SourceSansPro-Bold'};
  font-weight: 700;
`;
