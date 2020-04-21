// Dependencies
import { TouchableOpacityProps, TextProps } from "react-native";

export type IButtonProps = TouchableOpacityProps &
  React.HTMLProps<HTMLButtonElement>;

export type ITextProps = TextProps | React.HTMLProps<HTMLSpanElement>;

export type ButtonProps = {
  children: string;
  onClick?: () => void;
  onPress?: () => void;
};

export enum InstitutionalColor {
  "Orange",
  "Blue",
}
export enum PrimaryColor {
  "Mario",
  "Luigi",
  "Milhouse",
  "Randy",
  "Kirby",
}

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
