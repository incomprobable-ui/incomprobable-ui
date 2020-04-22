import React from 'react';
import Shadows from '../../src/components/Shadows/Shadows.tsx';

export default { title: 'Shadows' };

const Box = ({ boxShadow }) => <div style={{ boxShadow, height: 200, width: 200 }} />;

export const Shadow1 = () => <Box boxShadow={Shadows.s1} />;
export const Shadow2 = () => <Box boxShadow={Shadows.s2} />;
export const Shadow3 = () => <Box boxShadow={Shadows.s3} />;
