// Dependencies
import styled, { css } from '../../Theme';
import { IButtonProps, Platform } from '../../types';
import Colors, { shadeColor } from '../Colors/Colors';
import Shadows, { NativeShadows } from '../Shadows/Shadows';
import { Fonts } from '../Fonts/Fonts';
import { Button, I } from '../Primitives/Primitives';
import { getPlatform } from '../../utils/Platform';

const platform = getPlatform();
const MixColors = { ...Colors.Institutional, ...Colors.Primary };

export const StyledButton: React.FC<IButtonProps> = styled(Button)<React.FC<IButtonProps>>`
  ${Fonts}

  align-items: flex-start;
  background: ${({ color }: IButtonProps) => MixColors[color].c400};
  border: none;
  border-radius: 24px;
  display: flex;
  height: 48px;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 48px;

  ${platform === Platform.Web &&
  css`
    box-shadow: ${Shadows.s2};
    cursor: pointer;
    outline: none;

    &:hover {
      background: ${({ color }: IButtonProps) => shadeColor(MixColors[color].c400, 2)};
    }

    &:active {
      box-shadow: none;
      background: ${({ color }: IButtonProps) => shadeColor(MixColors[color].c400, -4)};
      transform: translateY(4px);
    }

    ${({ disabled }: IButtonProps) =>
      disabled &&
      css`
        background: ${Colors.Neutral.c400};
        pointer-events: none;
      `}
  `}

  ${platform === Platform.Native &&
  css`
    align-items: center;
    display: flex;
    justify-content: center;

    ${({ disabled }: IButtonProps) =>
      !disabled &&
      css`
        ${NativeShadows.s2};
      `}

    ${({ disabled }: IButtonProps) =>
      disabled &&
      css`
        background: ${Colors.Neutral.c400};
      `}
  `}
`;

export const StyledIcon: React.FC<IButtonProps> = styled(I)<React.FC<IButtonProps>>`
  color: ${Colors.Neutral.c0};
  font-size: 20px;
  line-height: 48px;

  ${({ disabled }: IButtonProps) =>
    disabled &&
    css`
      color: ${Colors.Neutral.c500};
    `}
`;
