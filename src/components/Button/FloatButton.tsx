// Dependencies
import * as React from 'react';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Colors from '../Colors/Colors';
import Icon from '../Icon/Icon';
// Types
import { IButtonProps, IconButtonProps, Platform, InstitutionalColor } from '../../types';
// Styled
import { StyledButton } from './FloatButton.style';
// Utils
import { getPlatform } from '../../utils/Platform';

const platform = getPlatform();
const MixColors = { ...Colors.Institutional, ...Colors.Primary };

const FloatButton: React.FC<IconButtonProps> = ({
  children,
  color = InstitutionalColor.Blue,
  disabled = false,
  icon,
  onClick,
  onPress,
  size = 30,
}) => {
  const props: IButtonProps = {
    children,
    color,
    disabled,
  };

  if (platform === Platform.Native) {
    props.onPress = onPress;
  } else {
    props.className = 'material-icons';
    props.onClick = onClick;
  }

  const iconColor = disabled ? Colors.Neutral.c500 : Colors.Neutral.c0;

  return (
    <StyledButton {...props}>
      <Icon {...{ color: iconColor, disabled, name: icon, size }} />
    </StyledButton>
  );
};

export default FloatButton;
