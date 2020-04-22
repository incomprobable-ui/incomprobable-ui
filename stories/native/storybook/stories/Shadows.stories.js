import React from 'react';
import { View } from 'react-native';
import { Colors, NativeShadows } from './bundle.native';
import { storiesOf } from '@storybook/react-native';

const Box = ({ style }) => (
  <View
    style={{
      ...style,
      backgroundColor: Colors.Institutional.Blue.c300,
      margin: 12,
      height: 200,
      width: 200,
    }}
  />
);

storiesOf('Shadows', module)
  .add('Shadow 1', () => <Box style={NativeShadows.s1} />)
  .add('Shadow 2', () => <Box style={NativeShadows.s2} />)
  .add('Shadow 3', () => <Box style={NativeShadows.s3} />);
