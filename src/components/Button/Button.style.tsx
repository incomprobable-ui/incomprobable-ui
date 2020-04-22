// Dependencies
import styled, { css } from '../../Theme';
import { ButtonVariant, IButtonProps, ITextProps, Platform } from '../../types';
import Colors from '../Colors/Colors';
import { Button, Text } from '../Primitives/Primitives';
import { getPlatform } from '../../utils/Platform';

const platform = getPlatform();
const MixColors = { ...Colors.Institutional, ...Colors.Primary };

export const StyledButton: React.FC<IButtonProps> = styled(Button)<React.FC<IButtonProps>>`
  align-self: flex-start;
  background: ${({ color }: IButtonProps) => MixColors[color].c400};
  border: 1px solid transparent;
  border-radius: 4px;
  height: 36px;
  margin: 8px;
  padding: 0 16px;

  ${
    platform === Platform.Web &&
    css`
      cursor: pointer;
      outline: none;

      &:hover {
        background: ${({ color }: IButtonProps) => MixColors[color].c300};
      }

      &:active {
        background: ${({ color }: IButtonProps) => MixColors[color].c500};
      }

      ${({ disabled }: IButtonProps) =>
        disabled &&
        css`
          pointer-events: none;
        `}
    `
  }

  ${({ disabled }: IButtonProps) =>
    disabled &&
    css`
      background: ${Colors.Neutral.c300};
    `}

  ${({ disabled, variant }: IButtonProps) =>
    variant === ButtonVariant.Outline &&
    css`
      background: transparent;
      border: 1px solid ${({ color }: IButtonProps) => MixColors[color].c400};

      ${platform === Platform.Web &&
      css`
        cursor: pointer;
        outline: none;

        &:hover {
          background: ${({ color }: IButtonProps) => MixColors[color].c100};
          border: 1px solid ${({ color }: IButtonProps) => MixColors[color].c400};
        }

        &:active {
          background: ${({ color }: IButtonProps) => MixColors[color].c200};
          border: 1px solid ${({ color }: IButtonProps) => MixColors[color].c400};
        }

        ${disabled &&
        css`
          pointer-events: none;
        `}
      `}

      ${platform === Platform.Native && css`

      `}

      ${disabled &&
      css`
        background-color: ${Colors.Neutral.c0};
        border: 1px solid ${Colors.Neutral.c400};
      `}
    `}

  ${({ disabled, variant }: IButtonProps) =>
    variant === ButtonVariant.Flat &&
    css`
      background: ${Colors.Neutral.c0};
      border: 1px solid transparent;

      ${platform === Platform.Web &&
      css`
        cursor: pointer;
        outline: none;

        &:hover {
          background: ${({ color }: IButtonProps) => MixColors[color].c100};
        }

        &:active {
          background: ${({ color }: IButtonProps) => MixColors[color].c200};
        }

        ${disabled &&
        css`
          pointer-events: none;
        `}
      `}

      ${disabled &&
      css`
        background: ${Colors.Neutral.c0};
      `}
    `}
`;

export const StyledText = styled(Text)<React.FC<ITextProps>>`
  color: ${Colors.Neutral.c0};
  height: 36px;
  font-size: 14px;
  font-weight: 600;
  line-height: 34px;
  text-transform: uppercase;
  text-align: center;

  ${({ disabled }: IButtonProps) =>
    disabled &&
    css`
      color: ${Colors.Neutral.c400};
    `}

  ${({ disabled, variant }: ITextProps) =>
    variant === ButtonVariant.Outline &&
    css`
      color: ${({ color }: IButtonProps) => MixColors[color].c400};

      ${disabled &&
      css`
        color: ${Colors.Neutral.c400};
      `}
    `}

  ${({ disabled, variant }: ITextProps) =>
    variant === ButtonVariant.Flat &&
    css`
      color: ${({ color }: IButtonProps) => MixColors[color].c400};

      ${disabled &&
      css`
        color: ${Colors.Neutral.c400};
      `}
    `}
`;
