// Dependencies
import * as React from 'react';
// Types
import {
  IButtonProps,
  ButtonProps,
  Platform,
  InstitutionalColor,
  ButtonVariant,
} from '../../types';
// Styled
import { StyledButton, StyledText } from './Button.style';
// Utils
import { getPlatform } from '../../utils/Platform';

const platform = getPlatform();

const Button: React.FC<ButtonProps> = ({
  children,
  color = InstitutionalColor.Blue,
  disabled,
  onClick,
  onPress,
  variant = ButtonVariant.Classic,
}) => {
  const props: IButtonProps = {
    children,
    color,
    disabled,
    variant,
  };

  if (platform === Platform.Native) {
    props.onPress = onPress;
  } else {
    props.onClick = onClick;
  }

  return (
    <StyledButton {...props}>
      <StyledText {...{ color, disabled, variant }}>{children}</StyledText>
    </StyledButton>
  );
};

export default Button;
