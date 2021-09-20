import { useMemo } from "react";
import { useHistory } from "react-router";
import { useAuthContext } from "../../../auth/AuthContext";
import { useForm } from "../../../hooks/useForm";
import { EActionAuth } from "../../../types/types";

const useLogin = () => {
  // Contexts
  const { dispatch } = useAuthContext();
  const history = useHistory();

  const [values, handleInputChange] = useForm({
    username: '',
    password: ''
  });

  const handleSubmit = () => {
    dispatch({
      type: EActionAuth.LOGIN,
      payload: {
        name: values.username
      }
    });
    history.replace('/');
  };

  const isDisabledSubmit = useMemo(() => values?.username?.trim() === '' || values?.password?.trim() === '', [values]);
  return {
    values,
    handleInputChange,
    handleSubmit,
    isDisabledSubmit
  };
};

export default useLogin;
