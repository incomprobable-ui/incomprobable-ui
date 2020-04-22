// Dependencies
import styled, { css } from '../../Theme';
import { IIconButtonProps, Platform, IconButtonVariant } from '../../types';
import Colors, { shadeColor } from '../Colors/Colors';
import { Fonts } from '../Fonts/Fonts';
import { Button, I } from '../Primitives/Primitives';
import { getPlatform } from '../../utils/Platform';

const platform = getPlatform();
const MixColors = { ...Colors.Institutional, ...Colors.Primary };

export const StyledButton: React.FC<IIconButtonProps> = styled(Button)<React.FC<IIconButtonProps>>`
  ${Fonts}

  align-items: flex-start;
  background: ${({ color }: IIconButtonProps) => MixColors[color].c400};
  border: none;
  border-radius: 4px;
  display: flex;
  height: 36px;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 36px;

  ${
    platform === Platform.Web &&
    css`
      cursor: pointer;
      outline: none;

      &:hover {
        background: ${({ color }: IIconButtonProps) => shadeColor(MixColors[color].c400, 2)};
      }

      &:active {
        background: ${({ color }: IIconButtonProps) => shadeColor(MixColors[color].c400, -4)};
        box-shadow: none;
      }

      ${({ active }: IIconButtonProps) =>
        active &&
        css`
          box-shadow: inset 0 0 10px ${Colors.Neutral.c1000}99;
        `}

      ${({ disabled }: IIconButtonProps) =>
        disabled &&
        css`
          background: ${Colors.Neutral.c400};
          pointer-events: none;
        `}
    `
  }

  ${({ color, disabled, variant }: IIconButtonProps) =>
    variant === IconButtonVariant.Outline &&
    css`
      background: transparent;
      border: 1px solid ${MixColors[color].c400};

      &:hover {
        background: transparent;
      }

      ${disabled &&
      css`
        border: 1px solid ${Colors.Neutral.c400};
      `}
    `}


  ${
    platform === Platform.Native &&
    css`
      align-items: center;
      display: flex;
      justify-content: center;

      ${({ disabled, variant }: IIconButtonProps) =>
        disabled &&
        css`
          background: ${variant === IconButtonVariant.Outline
            ? 'transparent'
            : Colors.Neutral.c400};
        `}
    `
  }
`;

export const StyledIcon: React.FC<IIconButtonProps> = styled(I)<React.FC<IIconButtonProps>>`
  color: ${Colors.Neutral.c0};
  font-size: 14px;
  line-height: 36px;

  ${
    platform === Platform.Web &&
    css`
      user-select: none;
    `
  }

  ${({ color, variant }: IIconButtonProps) =>
    variant === IconButtonVariant.Outline &&
    css`
      color: ${MixColors[color].c400};
    `}

  ${({ disabled }: IIconButtonProps) =>
    disabled &&
    css`
      color: ${Colors.Neutral.c500};
    `}
`;
