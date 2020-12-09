import { useState } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import { Switch, Route, withRouter } from 'react-router-dom';

import { getUser } from './services/userService';

import './App.css';

function App(props) {
  // component state
  const [ userState, setUserState ] = useState({ user: getUser()});

  //helper functions
  function handleSignupOrLogin(params) {
    // place user into state using the setting function
    setUserState({user: getUser() });
    // programmatically route user to dashboard
    props.history.push('/dashboard');
  }

  return (
    <div className="App">
      <Header />
        <Switch>
          <Route exact path="/" render={ props => 
            <HomePage />
          } />
          <Route exact path="/dashboard" render={ props => 
            <DashboardPage />
          } />
          <Route exact path="/signup" render={ props => 
            <SignupPage handleSignupOrLogin={handleSignupOrLogin} />
          } />
          <Route exact path="/login" render={ props => 
            <LoginPage handleSignupOrLogin={handleSignupOrLogin} />
          } />
        </Switch>
      <Footer />
    </div>
  );
}
export default withRouter(App);
