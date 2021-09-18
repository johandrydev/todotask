import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { useAuthContext } from '../auth/AuthContext';
import Home from '../pages/home'
import { AuthRouter } from './AuthRouter'
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
  const { user } = useAuthContext();

  return (
    <div className="main-backgroud">
      <Router>
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <PrivateRoute exact path="/" component={Home} isAutenticated={user.logged} />
          <Redirect to={'/auth/login'} />
        </Switch>
      </Router>
    </div>
  )
}
