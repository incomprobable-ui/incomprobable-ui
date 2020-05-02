// Dependencies
import {
  TouchableOpacityProps,
  TextProps,
  ViewProps,
  TextInputProps as RNTextInputProps,
} from 'react-native';

export type VariantProps = {
  variant?: ButtonVariant;
  color: InstitutionalColor | PrimaryColor;
};

export type IconVariantProps = {
  variant?: IconButtonVariant;
  color: InstitutionalColor | PrimaryColor;
};

export type ActivableProps = {
  active?: boolean;
  disabled?: boolean;
};

export type SVGIconProps = {
  color: string;
  size: number;
};

export enum InputStatus {
  Active = 'active',
  Default = 'default',
  Disabled = 'disabled',
  Error = 'error',
  Focus = 'focus',
}

export enum BackgroundMode {
  Dark = 'dark',
  Light = 'light',
}

export type TextAreaProps = {
  disabled?: boolean;
  error?: boolean;
  errorText?: string;
  helperText?: string;
  label?: string;
  mode?: BackgroundMode;
  value?: string;
};

export type TextInputProps = {
  disabled?: boolean;
  error?: boolean;
  errorText?: string;
  helperText?: string;
  label?: string;
  value?: string;
};

export type IconProps = SVGIconProps & {
  disabled: boolean;
  name: string;
};

export type IButtonProps = TouchableOpacityProps &
  React.HTMLProps<HTMLButtonElement> &
  VariantProps &
  ActivableProps;

export type IIconButtonProps = TouchableOpacityProps &
  React.HTMLProps<HTMLButtonElement> &
  IconVariantProps &
  ActivableProps;

export type ITextProps =
  | (TextProps & VariantProps & ActivableProps)
  | (React.HTMLProps<HTMLSpanElement> & VariantProps & ActivableProps);

export type ILabelProps = TextProps | React.HTMLProps<HTMLLabelElement>;

export type IDivProps = ViewProps | React.HTMLProps<HTMLDivElement>;

export type ITextInputProps = RNTextInputProps | React.HTMLProps<HTMLInputElement>;

export type ITextAreaProps = RNTextInputProps | React.HTMLProps<HTMLTextAreaElement>;

export enum ButtonVariant {
  Classic = 'classic',
  Outline = 'outline',
  Flat = 'flat',
}

export enum IconButtonVariant {
  Classic = 'classic',
  Outline = 'outline',
}

export enum Platform {
  Web = 'web',
  Native = 'native',
}

export type ButtonProps = {
  disabled?: boolean;
  children: string;
  onClick?: () => void;
  onPress?: () => void;
} & VariantProps;

export type IconButtonProps = {
  color: InstitutionalColor | PrimaryColor;
  icon: string;
  onClick?: () => void;
  onPress?: () => void;
  size: number;
} & ActivableProps &
  IconVariantProps;

export enum InstitutionalColor {
  Orange = 'Orange',
  Blue = 'Blue',
}

export enum PrimaryColor {
  Mario = 'Mario',
  Luigi = 'Luigi',
  Milhouse = 'Milhouse',
  Randy = 'Randy',
  Kirby = 'Kirby',
}

export type Shadow = {
  s1: string;
  s2: string;
  s3: string;
};

export type INativeShadow = {
  elevation: number;
  shadowColor: string;
  shadowOffset: {
    height: number;
    width: number;
  };
  shadowOpacity: number;
  shadowRadius: number;
};

export type NativeShadow = {
  s1: INativeShadow;
  s2: INativeShadow;
  s3: INativeShadow;
};

export type InstitutionalColors = {
  [key in InstitutionalColor]: {
    c50: string;
    c100: string;
    c200: string;
    c300: string;
    c400: string;
    c500: string;
    c600: string;
    c700: string;
    c800: string;
    c900: string;
  };
};

export type PrimaryColors = {
  [key in PrimaryColor]: {
    c100: string;
    c200: string;
    c300: string;
    c400: string;
    c500: string;
    c600: string;
  };
};

export type SecondaryColors = {
  c1: string;
  c2: string;
  c3: string;
  c4: string;
  c5: string;
  c6: string;
  c7: string;
  c8: string;
  c9: string;
  c10: string;
  c11: string;
  c12: string;
  c13: string;
  c14: string;
  c15: string;
  c16: string;
  c17: string;
  c18: string;
  c19: string;
  c20: string;
};

export type NeutralColors = {
  c0: string;
  c300: string;
  c400: string;
  c500: string;
  c600: string;
  c700: string;
  c800: string;
  c900: string;
  c1000: string;
};

export type SVGProps = {
  d?: string;
  fill?: string;
  fillOpacity?: number;
  fillRule?: 'nonzero' | 'evenodd';
  stroke?: 'none' | string;
  strokeWidth?: number;
  strokeOpacity?: number;
  strokeLinecap?: 'butt' | 'square' | 'round';
  strokeLinejoin?: 'miter' | 'bevel' | 'round';
  strokeDasharray?: Array<string>;
  strokeDashoffset?: null | number;
  x?: number;
  y?: number;
  rotation?: number;
  scale?: number;
  viewBox?: string;
  origin?: { x: number; y: number };
  originX?: number;
  originY?: number;
};
