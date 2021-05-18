import 'bootstrap/dist/css/bootstrap.min.css';
import { Component, lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import operations from './redux/auth/auth-operations';
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import AppBar from './components/Navigation/AppBar';
import Spinner from './components/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />
        <Suspense fallback={<Spinner />}>
          <Switch>
            <PublicRoute exact path="/" component={HomePage} />
            <PrivateRoute
              exact
              path="/contacts"
              redirectTo="/login"
              component={ContactsPage}
            />
            <PublicRoute
              exact
              path="/register"
              redirectTo="/contacts"
              restricted
              component={RegisterPage}
            />
            <PublicRoute
              exact
              path="/login"
              redirectTo="/contacts"
              restricted
              component={LoginPage}
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: operations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
