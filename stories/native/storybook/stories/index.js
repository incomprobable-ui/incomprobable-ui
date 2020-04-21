import React from 'react';
import {Text} from 'react-native';

import {storiesOf} from '@storybook/react-native';
import Button from '../../../../src/components/Button/Button';

storiesOf('Button', module).add('with text', () => (
  <Button>
    <Text>Hello Button</Text>
  </Button>
));
