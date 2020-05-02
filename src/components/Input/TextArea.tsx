import * as React from 'react';
import { TextAreaProps, Platform, BackgroundMode, InputStatus } from '../../types';
import { StyledInputWrapper, StyledHelper, StyledInput, StyledLabel } from './TextArea.style';
import { getPlatform } from '../../utils/Platform';

const platform = getPlatform();

const TextArea = ({
  disabled = false,
  error = false,
  errorText,
  helperText,
  label,
  mode = BackgroundMode.Light,
  value,
}: TextAreaProps) => {
  const [inputValue, setInputValue] = React.useState(value);
  const [inputFocused, setInputFocused] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>();
  const labelRef = React.useRef<HTMLLabelElement>();
  const inputStatus: string = React.useMemo(() => {
    if (disabled) {
      return InputStatus.Disabled;
    }

    if (error) {
      return InputStatus.Error;
    }

    if (inputFocused || (inputValue && inputValue.length > 0)) {
      return InputStatus.Active;
    }

    if (inputFocused) {
      return InputStatus.Focus;
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
    <StyledInputWrapper {...{ mode, status: inputStatus }}>
      <StyledLabel {...{ mode, ref: labelRef, status: inputStatus }}>{label}</StyledLabel>
      <StyledInput {...{ mode, onChange: setValue, ref: inputRef, status: inputStatus }}>
        {inputValue}
      </StyledInput>
      <StyledHelper {...{ mode, status: inputStatus }}>
        {!disabled && (errorText || helperText)}
      </StyledHelper>
    </StyledInputWrapper>
  );
};

export default TextArea;
