// Dependencies
import * as React from 'react';
// Types
import { IButtonProps, ButtonProps } from '../../types';
// Styled
import { StyledButton, StyledText } from './Button.style';

const { platform } = process.env;

const Button: React.FC<ButtonProps> = ({ children, onClick, onPress }) => {
  const props: IButtonProps = {
    children,
  }

  if (platform === 'native') {
    props.onPress = onPress;
  } else {
    props.onClick = onClick;
  }

  return (
    <StyledButton {...props}>
      <StyledText>{children}</StyledText>
    </StyledButton>
  )
}

export default Button;