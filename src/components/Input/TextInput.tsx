import * as React from 'react';
import { TextInputProps, Platform, InputStatus } from '../../types';
import { StyledInputWrapper, StyledHelper, StyledInput, StyledLabel } from './TextInput.style';
import { getPlatform } from '../../utils/Platform';

const platform = getPlatform();

const TextInput = ({
  disabled = false,
  error = false,
  errorText,
  helperText,
  label,
  value,
}: TextInputProps) => {
  const [inputValue, setInputValue] = React.useState(value);
  const [inputFocused, setInputFocused] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>();
  const labelRef = React.useRef<HTMLLabelElement>();
  const inputStatus: string = React.useMemo(() => {
    if (error) {
      return InputStatus.Error;
    }

    if (inputFocused || (inputValue && inputValue.length > 0)) {
      return InputStatus.Active;
    }

    if (inputFocused) {
      return InputStatus.Focus;
    }

    if (disabled) {
      return InputStatus.Disabled;
    }

    return InputStatus.Default;
  }, [disabled, error, inputFocused, inputValue]);

  const onFocusEvent = () => {
    setInputFocused(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const onBlurEvent = () => setInputFocused(false);

  React.useEffect(() => {
    setInputValue(value);
  }, [value]);

  React.useEffect(() => {
    if (inputRef.current && platform === Platform.Web) {
      inputRef.current.addEventListener('focus', onFocusEvent);
      inputRef.current.addEventListener('blur', onBlurEvent);
    }

    if (labelRef.current && platform === Platform.Web) {
      labelRef.current.addEventListener('click', onFocusEvent);
    }

    return () => {
      if (inputRef.current && platform === Platform.Web) {
        inputRef.current.removeEventListener('focus', onFocusEvent);
        inputRef.current.removeEventListener('blur', onBlurEvent);
      }

      if (labelRef.current && platform === Platform.Web) {
        labelRef.current.removeEventListener('click', onBlurEvent);
      }
    };
  }, [inputRef.current]);

  const setValue = (e: any) => setInputValue(e.target.value);

  return (
    <StyledInputWrapper status={inputStatus}>
      <StyledLabel ref={labelRef} status={inputStatus}>
        {label}
      </StyledLabel>
      <StyledInput ref={inputRef} value={inputValue} status={inputStatus} onChange={setValue} />
      <StyledHelper status={inputStatus}>{errorText || helperText}</StyledHelper>
    </StyledInputWrapper>
  );
};

export default TextInput;
