import Home from './components/Home';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import Contact from './components/Contact';
import About from './components/About';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
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
    </div>
  );
}

export default App;
