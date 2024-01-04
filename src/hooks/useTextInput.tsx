import React from 'react';
import {useState} from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';

// Utils
import {uiSvgHelper} from '@src/utils/svg';

// Type
import {TextInputHookConfig, TextInputHookResult} from '@src/hooks/types';

const useTextInput = ({
  initial = '',
  validate = () => true,
}: TextInputHookConfig): TextInputHookResult => {
  const ref = React.useRef<TextInput | null>(null);
  const [value, setValue] = useState<string>(initial);
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const hasError = value.length > 0 && !validate(value);

  const valueChangeHandler = (newValue: string) => {
    setValue(newValue);
  };

  const inputBlurHandler = () => {
    setIsTouched(false);
  };

  const inputFocusHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue(initial);
  };

  const textInputRender = (props?: TextInputProps) => {
    return (
      <>
        <TextInput
          style={styles.textInput}
          {...props}
          selectTextOnFocus={false}
          autoCapitalize={'none'}
          autoCorrect={false}
          value={value}
          placeholder="Search for plants"
          onChangeText={valueChangeHandler}
          onBlur={inputBlurHandler}
          onFocus={inputFocusHandler}
          clearButtonMode="never"
          ref={ref}
          placeholderTextColor={'gray'}
        />
        <View
          hitSlop={{left: 16, right: 16, top: 16, bottom: 16}}
          style={styles.search}>
          {uiSvgHelper({
            code: 'search',
          })}
        </View>
      </>
    );
  };

  return {
    value,
    hasError,
    isTouched,
    valueChangeHandler,
    inputBlurHandler,
    inputFocusHandler,
    textInputRender,
    reset,
    ref,
  };
};

export default useTextInput;

const styles = StyleSheet.create({
  textInput: {
    height: 44,
    borderWidth: 1,
    borderColor: 'rgba(60, 60, 67, 0.25)',
    borderRadius: 8,
    paddingLeft: 44,
    paddingRight: 40,
    backgroundColor: '#fff',
    opacity: 0.88,
    color: '#13231B',
    fontFamily: 'Rubik-Regular',
  },
  search: {
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    left: 16,
  },
});
