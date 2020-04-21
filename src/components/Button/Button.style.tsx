// Dependencies
import styled, { css } from "../../Theme";
import { IButtonProps, ITextProps } from "../../types";
import { TextProps, TouchableOpacityProps } from "react-native";

const { platform } = process.env;

const Button: React.FC<IButtonProps> = platform === "native" ? styled.TouchableOpacity<TouchableOpacityProps>`` : styled.button<React.HTMLProps<HTMLButtonElement>>``;
const Text: React.FC<ITextProps> = platform === "native" ? styled.Text<TextProps>`` : styled.span<React.HTMLProps<HTMLSpanElement>>``;

export const StyledButton: React.FC<IButtonProps> = styled(Button)<React.FC<IButtonProps>>`
  align-self: flex-start;
  background: #ff8400;
  border: 1px solid #FF6300;
  border-radius: 4px;
  height: 36px;
  margin: 8px;
  padding: 0 16px;

  ${(platform === 'web') && css`
    cursor: pointer;
    outline: none;
  `}
`;

export const StyledText:React.FC<ITextProps> = styled(Text)<React.FC<ITextProps>>`
  color: #ffffff;
  height: 36px;
  font-size: 14px;
  font-weight: 600;
  line-height: 34px;
  text-transform: uppercase;
  text-align: center;

  ${(platform === 'web') && css`

  `}
`;