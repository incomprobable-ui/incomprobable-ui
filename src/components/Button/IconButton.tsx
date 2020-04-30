// Dependencies
import * as React from 'react';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Colors from '../Colors/Colors';
import Icon from '../Icon/Icon';
// Types
import {
  IIconButtonProps,
  IconButtonProps,
  Platform,
  InstitutionalColor,
  IconButtonVariant,
} from '../../types';
// Styled
import { StyledButton } from './IconButton.style';
// Utils
import { getPlatform } from '../../utils/Platform';

const platform = getPlatform();
const MixColors = { ...Colors.Institutional, ...Colors.Primary };

const IconButton: React.FC<IconButtonProps> = ({
  active,
  color = InstitutionalColor.Blue,
  disabled = false,
  icon,
  onClick,
  onPress,
  size = 24,
  variant = IconButtonVariant.Classic,
}) => {
  const props: IIconButtonProps = {
    active,
    color,
    disabled,
    variant,
  };

  if (platform === Platform.Native) {
    props.onPress = onPress;
  } else {
    props.className = 'material-icons';
    props.onClick = onClick;
  }

  const iconColor = disabled
    ? Colors.Neutral.c500
    : variant === IconButtonVariant.Outline
    ? MixColors[color].c400
    : Colors.Neutral.c0;

  return (
    <StyledButton {...props}>
      <Icon {...{ color: iconColor, disabled, name: icon, size }} />
    </StyledButton>
  );
};

export default IconButton;
