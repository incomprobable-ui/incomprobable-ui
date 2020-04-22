// Dependencies
import * as React from 'react';
// Styled
import { StyledH1, StyledH2, StyledH3, StyledH4, StyledH5, StyledH6, StyledParagraph, StyledSpan } from './Typography.style';
// Types
import { ITextProps } from '../../types';

export const H1: React.FC<ITextProps> = ({
  children,
  ...props
}) => (
    <StyledH1 {...props}>
      {children}
    </StyledH1>
  );

export const H2: React.FC<ITextProps> = ({
  children,
  ...props
}) => (
    <StyledH2 {...props}>
      {children}
    </StyledH2>
  );

export const H3: React.FC<ITextProps> = ({
  children,
  ...props
}) => (
    <StyledH3 {...props}>
      {children}
    </StyledH3>
  );

export const H4: React.FC<ITextProps> = ({
  children,
  ...props
}) => (
    <StyledH4 {...props}>
      {children}
    </StyledH4>
  );

export const H5: React.FC<ITextProps> = ({
  children,
  ...props
}) => (
    <StyledH5 {...props}>
      {children}
    </StyledH5>
  );

export const H6: React.FC<ITextProps> = ({
  children,
  ...props
}) => (
    <StyledH6 {...props}>
      {children}
    </StyledH6>
  );

export const Paragraph: React.FC<ITextProps> = ({
  children,
  ...props
}) => (
    <StyledParagraph {...props}>
      {children}
    </StyledParagraph>
  );

export const Span: React.FC<ITextProps> = ({
  children,
  ...props
}) => (
    <StyledSpan {...props}>
      {children}
    </StyledSpan>
  );

export default { H1, H2, H3, H4, H5, H6, Paragraph, Span };
