// Dependencies
import * as React from 'react';
// Styled
import { StyledButton } from './Button.style';

const Button: React.FC<any> = ({ children }) => {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  )
}

export default Button;