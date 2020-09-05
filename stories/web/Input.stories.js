import React from 'react';
import TextArea from '../../src/components/Input/TextArea';
import TextInput from '../../src/components/Input/TextInput';

export default { title: 'Input' };

export const TextInputBasic = () => (
  <>
    <TextInput label="Nombre" />
  </>
);

export const TextInputWithHelperText = () => (
  <>
    <TextInput label="Nombre" helperText="This is a helper text" />
  </>
);

export const TextInputWithError = () => (
  <>
    <TextInput error label="Nombre" />
  </>
);

export const TextInputWithErrorText = () => (
  <>
    <TextInput error label="Nombre" errorText="A fancy error message" />
  </>
);

export const TextAreaBasic = () => (
  <>
    <TextArea label="Nombre" />
  </>
);

export const TextAreaWithHelperText = () => (
  <>
    <TextArea label="Nombre" helperText="Completa con tus datos" />
  </>
);

export const TextAreaWithError = () => (
  <>
    <TextArea error label="Nombre" />
  </>
);

export const TextAreaWithErrorText = () => (
  <>
    <TextArea error label="Nombre" errorText="¿Qué paso aqui?" />
  </>
);

export const TextAreaDarkBackground = () => (
  <div style={{ backgroundColor: '#DDDDDD' }}>
    <TextArea mode="dark" label="Nombre" helperText="¿Qué paso aqui?" />
  </div>
);

export const TextAreaDisabled = () => (
  <>
    <TextArea disabled error label="Nombre" errorText="¿Qué paso aqui?" />
  </>
);
