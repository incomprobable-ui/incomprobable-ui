import React from 'react';
import {Alert} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {Button} from './bundle.native';

storiesOf('Button', module).add('with text', () => (
  <Button onPress={() => Alert.alert('Clicked')}>Hello Button</Button>
));
