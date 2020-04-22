// Dependencies
import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Colors from '../Colors/Colors';
// Types
import {
  IIconButtonProps,
  IconButtonProps,
  Platform,
  InstitutionalColor,
  IconButtonVariant,
} from '../../types';
// Styled
import { StyledButton, StyledIcon } from './IconButton.style';
// Utils
import { getPlatform } from '../../utils/Platform';

const platform = getPlatform();
const MixColors = { ...Colors.Institutional, ...Colors.Primary };

const IconButton: React.FC<IconButtonProps> = ({
  active,
  color = InstitutionalColor.Blue,
  disabled,
  icon,
  onClick,
  onPress,
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
      {platform === Platform.Native && <Icon color={iconColor} name={icon} size={24} />}
      {platform === Platform.Web && (
        <StyledIcon {...{ color, className: props.className, disabled, variant }}>
          {icon}
        </StyledIcon>
      )}
    </StyledButton>
  );
};

export default IconButton;
