import { createContext, Dispatch, FC, useContext, useEffect, useReducer } from "react";
import { authReducer, IAction } from "./authReducer";

export const AuthContext = createContext<IAuthReducer>({
  user: { logged: false },
  dispatch: () => { }
});

export interface IAuth {
  logged: boolean;
  data?: any
}

interface IAuthReducer {
  user: IAuth;
  dispatch: Dispatch<IAction>
}

/**
 * Initial user data
 */
const init = () => {
  const data = localStorage.getItem('user');
  return data ? JSON.parse(data) : { logged: false }
}

/**
 * Auth Provider Component
 */
const AuthProvider: FC = ({ children }) => {
  const [user, dispatch] = useReducer(authReducer, { logged: false }, init);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{
      user,
      dispatch
    }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;

/**
 * Hook for use the auth context
 */
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within a AuthProvider');
  }
  return context
};
