import { type ComponentPropsWithoutRef } from 'react';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  error?: boolean;
  multiline?: never;
}

interface TextAreaProps extends ComponentPropsWithoutRef<'textarea'> {
  error?: boolean;
  multiline: boolean;
}

function isTextAreaProps(
  props: InputProps | TextAreaProps,
): props is TextAreaProps {
  return props.multiline === true;
}

function Input(props: InputProps | TextAreaProps) {
  if (isTextAreaProps(props)) {
    return (
      <textarea
        className={`h-[100px] w-full px-3 py-2.5 rounded-lg body-normal border ${
          props.error ? 'border-error' : 'border-gray-300'
        } placeholder:body-normal placeholder:text-gray-100`}
        {...props}
      />
    );
  }

  return (
    <input
      className={`h-[50px] w-full px-3 py-2.5 rounded-lg body-normal border ${
        props.error ? 'border-error' : 'border-gray-300'
      } placeholder:body-normal placeholder:text-gray-100`}
      {...props}
    />
  );
}

export default Input;
