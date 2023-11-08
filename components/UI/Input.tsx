import { useImperativeHandle, type ComponentPropsWithoutRef } from 'react';

type InputProps = ComponentPropsWithoutRef<'input'> & {
  error?: false;
};

function Input(props: InputProps) {
  const { error = false, ...others } = props;
  return (
    <input
      className={`h-[50px] w-full px-3 py-2.5 rounded-lg body-normal border ${
        error ? 'border-error' : 'border-gray-300'
      } placeholder:body-normal placeholder:text-gray-100`}
      {...others}
    />
  );
}

export default Input;
