import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import components
import Nav from './components/nav/nav';
import Main from './components/main/main';
import Login from './components/login/login';
import Footer from './components/footer/footer';
// import assets
import Logo from './assets/Logo/Arcade-logo.png';
import UserImage from './assets/Images/mario.png';

class App extends React.Component  {
  render () {
    return (
      <BrowserRouter>
      <div className="App">
          <Nav logo={Logo} image={UserImage}/>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route 
            path="/" exact
            render={(routeProps) => <Main routeProps={routeProps} />}
          />
          <Route 
            path="/video/:id"
            render={(routeProps) => <Main routeProps={routeProps} />}
          />
        </Switch>
        <Footer/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
