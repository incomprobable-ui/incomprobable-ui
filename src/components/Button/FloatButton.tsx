// Dependencies
import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Colors from '../Colors/Colors';
// Types
import { IButtonProps, IconButtonProps, Platform, InstitutionalColor } from '../../types';
// Styled
import { StyledButton, StyledIcon } from './FloatButton.style';
// Utils
import { getPlatform } from '../../utils/Platform';

const platform = getPlatform();

const FloatButton: React.FC<IconButtonProps> = ({
  children,
  color = InstitutionalColor.Blue,
  disabled,
  icon,
  onClick,
  onPress,
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

  return (
    <StyledButton {...props}>
      {platform === Platform.Native && (
        <Icon color={disabled ? Colors.Neutral.c500 : Colors.Neutral.c0} name={icon} size={30} />
      )}
      {platform === Platform.Web && (
        <StyledIcon {...{ color, className: props.className, disabled }}>{icon}</StyledIcon>
      )}
    </StyledButton>
  );
};

export default FloatButton;
