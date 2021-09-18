import { Switch } from 'react-router-dom';
import { useAuthContext } from '../auth/AuthContext';
import Login from '../pages/auth/login';
import { PublicRoute } from './PublicRoute';

export const AuthRouter = () => {
  const { user } = useAuthContext();

  return (
    <div className="height-100">
      <Switch>
        <PublicRoute path="/auth/login" component={Login} isAutenticated={user.logged} />
      </Switch>
    </div>
  );
};
