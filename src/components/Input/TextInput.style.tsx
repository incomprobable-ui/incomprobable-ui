// Dependencies
import styled, { css } from '../../Theme';
import { InputStatus, Platform } from '../../types';
import Colors from '../Colors/Colors';
import { Div, Label, Text, Input } from '../Primitives/Primitives';
import { getPlatform } from '../../utils/Platform';
import { fontRegular } from '../Fonts/Fonts';

const platform = getPlatform();

export const StyledInputWrapper = styled(Div)`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledLabel = styled(Label)`
  ${fontRegular}

  color: ${Colors.Neutral.c500};
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 8px;
  width: 100%;

  ${
    platform === Platform.Web &&
    css`
      transition: 0.3s;

      ${({ status }: { status: InputStatus }) => css`
        ${
          status === InputStatus.Default &&
          css`
            transform: translateY(20px);
          `
        }

        ${
          (status === InputStatus.Active || status === InputStatus.Focus) &&
          css`
            color: ${Colors.Primary.Milhouse.c400};
          `
        }

        ${
          status === InputStatus.Error &&
          css`
            color: ${Colors.Primary.Mario.c400};
          `
        }
      `}
    `
  }
`;

export const StyledInput = styled(Input)`
  ${fontRegular}
  background: transparent;
  border: none;
  color: ${Colors.Neutral.c800};
  font-size: 14px;

  ${platform === Platform.Web &&
  css`
    ${({ status }: { status: InputStatus }) => css`
      ${
        status === InputStatus.Default &&
        css`
          border-bottom: 1px solid ${Colors.Neutral.c400};
        `
      }

      ${
        (status === InputStatus.Active || status === InputStatus.Focus) &&
        css`
          border-bottom: 1px solid ${Colors.Primary.Milhouse.c400};
        `
      }

      ${
        status === InputStatus.Error &&
        css`
          border-bottom: 1px solid ${Colors.Primary.Mario.c400};
        `
      }
    `}

    outline: none;
  `}
`;

export const StyledHelper = styled(Text)`
  ${fontRegular}

  color: ${Colors.Neutral.c500};
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 8px;
  margin-top: 8px;
  width: 100%;

${
  platform === Platform.Web &&
  css`
    ${({ status }: { status: InputStatus }) => css`
      ${status === InputStatus.Error &&
      css`
        color: ${Colors.Primary.Mario.c400};
      `}
    `}

    outline: none;
  `
}
`;
