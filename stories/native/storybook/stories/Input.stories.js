import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { TextInput } from './bundle.native';

storiesOf('Input', module).add('Text Input', () => (
  <>
    <TextInput label="Nombre" helperText="This is a helper text" />
  </>
));
