import React, { createContext, useReducer } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import Contact from './components/Contact';
import About from './components/About';
import Errorpage from './components/Errorpage'
import Logout from './components/Logout'
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


import { initialState, reducer } from "../src/reducer/UseReducer";



// 1.contextApi
export const UserContext = createContext();

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/about" >
        <About />
      </Route>
      <Route path="/signup" >
        <Signup />
      </Route>
      <Route path="/login" >
        <Login />
      </Route>
      <Route path="/logout" >
        <Logout />
      </Route>
      <Route>
        <Errorpage />
      </Route>
    </Switch>
  )
}



const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (

    <>
      <UserContext.Provider value={{ state, dispatch }}>

        <Navbar />
        <Routing />


      </UserContext.Provider>
    </>

  );
}

export default App;
