import React from 'react';
import { Alert } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { Button, FloatButton, IconButton } from './bundle.native';

storiesOf('Button', module)
  .add('Classic', () => (
    <>
      <Button color="Luigi" onClick={() => Alert.alert('Clicked')}>
        Hello Button
      </Button>
      <Button disabled color="Luigi" onClick={() => Alert.alert('Clicked')}>
        Hello Button
      </Button>
    </>
  ))
  .add('Outline', () => (
    <>
      <Button color="Mario" variant="outline" onClick={() => Alert.alert('Clicked')}>
        Hello Button
      </Button>
      <Button disabled color="Blue" variant="outline" onClick={() => Alert.alert('Clicked')}>
        Hello Button
      </Button>
    </>
  ))
  .add('Flat', () => (
    <>
      <Button color="Blue" variant="flat" onClick={() => Alert.alert('Clicked')}>
        Hello Button
      </Button>
      <Button disabled color="Blue" variant="flat" onClick={() => Alert.alert('Clicked')}>
        Hello Button
      </Button>
    </>
  ))
  .add('Float', () => (
    <>
      <FloatButton color="Milhouse" icon="add" onClick={() => Alert.alert('Clicked')} />

      <FloatButton color="Blue" icon="remove" disabled onClick={() => Alert.alert('Clicked')} />
    </>
  ))
  .add('Icon', () => (
    <>
      <IconButton color="Luigi" icon="add" onClick={() => Alert.alert('Clicked')} />

      <IconButton color="Milhouse" icon="check" active onClick={() => Alert.alert('Clicked')} />

      <IconButton color="Luigi" icon="remove" disabled onClick={() => Alert.alert('Clicked')} />

      <IconButton
        color="Mario"
        variant="outline"
        icon="delete"
        onClick={() => Alert.alert('Clicked')}
      />

      <IconButton
        color="Milhouse"
        variant="outline"
        disabled
        icon="photo"
        onClick={() => Alert.alert('Clicked')}
      />
    </>
  ));
