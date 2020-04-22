import React from 'react';
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Paragraph,
  Span,
} from '../../src/components/Typography/Typography.tsx';

export default { title: 'Typography' };

export const TitleH1 = () => <H1>Title 1</H1>;
export const TitleH2 = () => <H2>Title 2</H2>;
export const TitleH3 = () => <H3>Title 3</H3>;
export const TitleH4 = () => <H4>Title 4</H4>;
export const TitleH5 = () => <H5>Title 5</H5>;
export const TitleH6 = () => <H6>Title 6</H6>;
export const ParagraphText = () => <Paragraph>Paragraph</Paragraph>;
export const Text = () => <Span>A simple text</Span>;
