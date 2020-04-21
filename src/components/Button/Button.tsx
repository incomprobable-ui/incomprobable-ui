// Dependencies
import * as React from 'react';
import { TouchableOpacityProps } from 'react-native';
// Styled
import { StyledButton, StyledText } from './Button.style';

const { platform } = process.env;
type IButtonProps = TouchableOpacityProps & React.HTMLProps<HTMLButtonElement>

type ButtonProps = {
  children: string;
  onClick?: () => void;
  onPress?: () => void;
};

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