import { useState } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Diets from './pages/Diets';
import EditDiet from './pages/EditDiet';
import AddDiet from './pages/AddDiet';


import { Switch, Route, withRouter } from 'react-router-dom';

import { getUser } from './services/userService';

import './App.css';
import { getToken, getUserFromToken } from './services/tokenService';

function App(props) {
  // component state
  const [ userState, setUserState ] = useState({ user: getUser()});

  //helper functions
  function handleSignupOrLogin(params) {
    // place user into state using the setting function
    console.log(getUserFromToken(getToken()))
    setUserState( getUserFromToken(getToken()) );
    // programmatically route user to dashboard
    props.history.push('/dashboard');
  }

  function handleLogout(){
     setUserState({});
     props.history.push('/login');
  }

  function handleDietSubmit() {
    props.history.push('/diets');
  }

  return (
    <div className="App">
      <Header user={userState} handleLogout={handleLogout}/>
        <Switch>
          <Route exact path="/" render={ props => 
            <HomePage />
          } />
          <Route exact path="/dashboard" render={ props => 
            <DashboardPage user={userState} />
          } />
          <Route exact path="/signup" render={ props => 
            <SignupPage handleSignupOrLogin={handleSignupOrLogin} />
          } />
          <Route exact path="/login" render={ props => 
            <LoginPage handleSignupOrLogin={handleSignupOrLogin} />
          } />
          <Route exact path="/diets" render={ props => 
            <Diets user={userState} />
          } />
          <Route exact path="/editdiet/:id" render={ props => 
            <EditDiet user={userState} handleDietSubmit={handleDietSubmit} user={userState} />
          } />
          <Route exact path="/adddiet" render={ props => 
            <AddDiet user={userState} handleDietSubmit={handleDietSubmit} user={userState} />
          } />
        </Switch>
      <Footer />
    </div>
  );
}
export default withRouter(App);
