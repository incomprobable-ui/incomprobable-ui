import React from 'react';
import Button from '../../src/components/Button/Button';
import FloatButton from '../../src/components/Button/FloatButton';
import IconButton from '../../src/components/Button/IconButton';

export default { title: 'Button' };

export const Classic = () => (
  <>
    <Button color="Luigi" onClick={() => alert('Clicked')}>
      Hello Button
    </Button>
    <Button disabled color="Luigi" onClick={() => alert('Clicked')}>
      Hello Button
    </Button>
  </>
);

export const Outline = () => (
  <>
    <Button color="Mario" variant="outline" onClick={() => alert('Clicked')}>
      Hello Button
    </Button>
    <Button disabled color="Blue" variant="outline" onClick={() => alert('Clicked')}>
      Hello Button
    </Button>
  </>
);

export const Flat = () => (
  <>
    <Button color="Blue" variant="flat" onClick={() => alert('Clicked')}>
      Hello Button
    </Button>
    <Button disabled color="Blue" variant="flat" onClick={() => alert('Clicked')}>
      Hello Button
    </Button>
  </>
);

export const Float = () => (
  <>
    <FloatButton color="Milhouse" icon="add" onClick={() => alert('Clicked')} />

    <FloatButton color="Blue" icon="remove" disabled onClick={() => alert('Clicked')} />
  </>
);

export const Icon = () => (
  <>
    <IconButton color="Luigi" icon="add" onClick={() => alert('Clicked')} />

    <IconButton color="Milhouse" icon="check" active onClick={() => alert('Clicked')} />

    <IconButton color="Luigi" icon="remove" disabled onClick={() => alert('Clicked')} />

    <IconButton color="Mario" variant="outline" icon="delete" onClick={() => alert('Clicked')} />

    <IconButton
      color="Milhouse"
      variant="outline"
      disabled
      icon="photo"
      onClick={() => alert('Clicked')}
    />
  </>
);
