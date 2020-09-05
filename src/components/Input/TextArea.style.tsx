// Dependencies
import styled, { css } from '../../Theme';
import { BackgroundMode, Platform, InputStatus } from '../../types';
import Colors from '../Colors/Colors';
import { Div, Label, Text, TextArea } from '../Primitives/Primitives';
import { getPlatform } from '../../utils/Platform';
import { fontRegular } from '../Fonts/Fonts';

const platform = getPlatform();

export const StyledInputWrapper = styled(Div)`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: min-content;
`;

export const StyledLabel = styled(Label)`
  ${fontRegular}

  background: ${Colors.Neutral.c0};
  border-radius: 4px;
  color: ${Colors.Neutral.c500};
  font-size: 14px;
  line-height: 12px;
  margin-left: 1px;
  margin-top: 1px;
  padding-left: 16px;
  padding-right: 16px;
  position: absolute;
  padding-top: 8px;
  width: calc(100% - 34px);

  ${
    platform === Platform.Web &&
    css`
      transition: 0.3s;

      ${({ mode, status }: { mode: BackgroundMode; status: InputStatus }) => css`
        ${
          (status === InputStatus.Default || status === InputStatus.Disabled) &&
          css`
            padding-top: 16px;
          `
        }

        ${
          (status === InputStatus.Active || status === InputStatus.Focus) &&
          css`
            color: ${Colors.Primary.Milhouse.c400};
            font-size: 12px;
          `
        }

        ${
          status === InputStatus.Error &&
          css`
            color: ${Colors.Primary.Mario.c400};
            font-size: 12px;
          `
        }

        ${
          status === InputStatus.Disabled &&
          css`
            background: ${Colors.Neutral.c400};
            margin-left: 2px;
            margin-top: 2px;
            width: calc(100% - 36px);
          `
        }
      `}
    `
  }

  ${({ mode }: { mode: BackgroundMode }) => css`
    ${mode === BackgroundMode.Dark &&
    css`
      background: transparent;
      color: ${Colors.Neutral.c700};
    `}
  `}
`;

export const StyledInput = styled(TextArea)`
  ${fontRegular}
  background: transparent;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  color: ${Colors.Neutral.c800};
  font-size: 14px;
  min-height: 156px;
  max-height: 172px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 28px;

  ${platform === Platform.Web &&
  css`
    ${({ status }: { status: InputStatus }) => css`
      ${
        status === InputStatus.Default &&
        css`
          border: 1px solid ${Colors.Neutral.c500};
        `
      }

      ${
        (status === InputStatus.Active || status === InputStatus.Focus) &&
        css`
          border: 1px solid ${Colors.Primary.Milhouse.c400};
        `
      }

      ${
        status === InputStatus.Error &&
        css`
          border: 1px solid ${Colors.Primary.Mario.c400};
        `
      }

      ${
        status === InputStatus.Disabled &&
        css`
          background: ${Colors.Neutral.c400};
          border: 2px solid ${Colors.Neutral.c500};
          pointer-events: none;
          user-select: none;
        `
      }
    `}

    outline: none;
    resize: none;
  `}

  ${({ mode }: { mode: BackgroundMode }) => css`
    ${mode === BackgroundMode.Dark &&
    css`
      border: 1px solid ${Colors.Neutral.c700};
      color: ${Colors.Neutral.c800};
    `}
  `}
`;

export const StyledHelper = styled(Text)`
  ${fontRegular}

  color: ${Colors.Neutral.c500};
  font-size: 12px;
  line-height: 12px;
  height: 12px;
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

  ${({ mode }: { mode: BackgroundMode }) => css`
    ${mode === BackgroundMode.Dark &&
    css`
      color: ${Colors.Neutral.c700};
    `}
  `}
`;
