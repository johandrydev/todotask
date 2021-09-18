import { useState } from 'react';

export const useForm = (initialState = {}): [value: any, handleInputChange: (e: any) => void, reset: () => void] => {
  const [values, setValues] = useState<any>(initialState);

  const reset = () => {
    setValues(initialState);
  }

  const handleInputChange: (e: any) => void = ({ target }) => {

    setValues({
      ...values,
      [target.name]: target.value
    });

  }

  return [values, handleInputChange, reset];
}
