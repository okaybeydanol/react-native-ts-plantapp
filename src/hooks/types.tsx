import {TextInput, TextInputProps} from 'react-native';
import {FetchBaseQueryError} from '@reduxjs/toolkit/query';
import {SerializedError} from '@reduxjs/toolkit';

// TextInput
export interface TextInputHookConfig {
  initial?: string;
  validate?: (value: string) => boolean;
}
export interface TextInputHookResult {
  value: string;
  hasError: boolean;
  isTouched: boolean;
  valueChangeHandler: (newValue: string) => void;
  inputBlurHandler: () => void;
  inputFocusHandler: () => void;
  textInputRender: (
    props?: TextInputProps & {
      clear?: boolean;
    },
  ) => React.JSX.Element;
  reset: () => void;
  ref: React.MutableRefObject<TextInput | null>;
}

// useResponse
export interface GeneralError {
  status?:
    | number
    | 'CUSTOM_ERROR'
    | 'FETCH_ERROR'
    | 'PARSING_ERROR'
    | 'TIMEOUT_ERROR';
  data?: unknown;
  error?: string;
  name?: string;
  message?: string;
}
export interface ResponseHookConfig<T> {
  onSuccess?: ({res}: {res: T}) => void;
  onError?: ({err}: {err: GeneralError}) => void;
}
export interface HandleResponse<T> {
  data?: T;
  error?: FetchBaseQueryError | SerializedError | unknown;
}
export interface ResponseHookResult<T> {
  handleResponse: (response: HandleResponse<T>) => void;
}
