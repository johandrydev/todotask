import { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute: FC<any> = ({
  isAutenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props: any) => (
        isAutenticated ?
          <Component {...props} /> : <Redirect to="/auth/login" />
      )}
    />
  )
}
