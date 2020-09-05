// Dependencies
import * as React from 'react';
import styled from '../../Theme';
import {
  IButtonProps,
  ITextInputProps,
  ITextAreaProps,
  ITextProps,
  IDivProps,
  ILabelProps,
  Platform,
  SVGProps,
} from '../../types';
import { TextProps, TouchableOpacityProps, ViewProps, TextInputProps } from 'react-native';
import { getPlatform } from '../../utils/Platform';
import SVG, { G as GElement, Rect as RECT, Path as PATH } from 'react-native-svg';

const platform = getPlatform();

export const Button: React.FC<IButtonProps> =
  platform === Platform.Native
    ? styled.TouchableOpacity<TouchableOpacityProps>``
    : styled.button<React.HTMLProps<HTMLButtonElement>>``;

export const Text: React.FC<ITextProps> =
  platform === Platform.Native
    ? styled.Text<TextProps>``
    : styled.span<React.HTMLProps<HTMLSpanElement>>``;

export const Div: React.FC<IDivProps> =
  platform === Platform.Native
    ? styled.View<ViewProps>``
    : styled.div<React.HTMLProps<HTMLDivElement>>``;

export const Input: React.FC<ITextInputProps> =
  platform === Platform.Native
    ? styled.TextInput<TextInputProps>``
    : styled.input<React.HTMLProps<HTMLInputElement>>``;

export const TextArea: React.FC<ITextAreaProps> =
  platform === Platform.Native
    ? styled.TextInput<TextInputProps>``
    : styled.textarea<React.HTMLProps<HTMLTextAreaElement>>``;

export const Label: React.FC<ILabelProps> =
  platform === Platform.Native
    ? styled.Text<TextProps>``
    : styled.label<React.HTMLProps<HTMLLabelElement>>``;

export const H1: React.FC<ITextProps> =
  platform === Platform.Native
    ? styled.Text<TextProps>``
    : styled.h1<React.HTMLProps<HTMLHeadingElement>>``;

export const H2: React.FC<ITextProps> =
  platform === Platform.Native
    ? styled.Text<TextProps>``
    : styled.h2<React.HTMLProps<HTMLHeadingElement>>``;

export const H3: React.FC<ITextProps> =
  platform === Platform.Native
    ? styled.Text<TextProps>``
    : styled.h3<React.HTMLProps<HTMLHeadingElement>>``;

export const H4: React.FC<ITextProps> =
  platform === Platform.Native
    ? styled.Text<TextProps>``
    : styled.h4<React.HTMLProps<HTMLHeadingElement>>``;

export const H5: React.FC<ITextProps> =
  platform === Platform.Native
    ? styled.Text<TextProps>``
    : styled.h5<React.HTMLProps<HTMLHeadingElement>>``;

export const H6: React.FC<ITextProps> =
  platform === Platform.Native
    ? styled.Text<TextProps>``
    : styled.h6<React.HTMLProps<HTMLHeadingElement>>``;

export const Paragraph: React.FC<ITextProps> =
  platform === Platform.Native
    ? styled.Text<TextProps>``
    : styled.p<React.HTMLProps<HTMLParagraphElement>>``;

export const Span: React.FC<ITextProps> =
  platform === Platform.Native
    ? styled.Text<TextProps>``
    : styled.span<React.HTMLProps<HTMLSpanElement>>``;

export const I: React.FC<ITextProps> =
  platform === Platform.Native
    ? styled.Text<TextProps>``
    : styled.i<React.HTMLProps<HTMLUnknownElement>>``;

export const Svg: React.FC<SVGProps | React.HTMLProps<SVGSVGElement>> =
  platform === Platform.Native
    ? styled(SVG)<SVGProps>``
    : styled.svg<React.HTMLProps<SVGSVGElement>>``;

export const Path: React.FC<SVGProps | React.HTMLProps<SVGPathElement>> =
  platform === Platform.Native
    ? styled(PATH)<SVGProps>``
    : styled.path<React.HTMLProps<SVGPathElement>>``;

export const G: React.FC<SVGProps | React.HTMLProps<SVGGElement>> =
  platform === Platform.Native
    ? styled(GElement)<SVGProps>``
    : styled.g<React.HTMLProps<SVGGElement>>``;

export const Rect: React.FC<SVGProps | React.HTMLProps<SVGRectElement>> =
  platform === Platform.Native
    ? styled(RECT)<SVGProps>``
    : styled.rect<React.HTMLProps<SVGRectElement>>``;
