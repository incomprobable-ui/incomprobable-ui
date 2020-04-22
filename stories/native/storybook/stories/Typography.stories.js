import React from 'react';
import { Typography } from './bundle.native';
import { storiesOf } from '@storybook/react-native';

storiesOf('Typography', module)
  .add('Title H1', () => <Typography.H1>Title 1</Typography.H1>)
  .add('Title H2', () => <Typography.H2>Title 2</Typography.H2>)
  .add('Title H3', () => <Typography.H3>Title 3</Typography.H3>)
  .add('Title H4', () => <Typography.H4>Title 4</Typography.H4>)
  .add('Title H5', () => <Typography.H5>Title 5</Typography.H5>)
  .add('Title H6', () => <Typography.H6>Title 6</Typography.H6>)
  .add('Paragraph', () => <Typography.Paragraph>Paragraph</Typography.Paragraph>)
  .add('Text', () => <Typography.Span>A simple text</Typography.Span>);
