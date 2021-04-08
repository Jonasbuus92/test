import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/NavBar';
import './App.css';
import Home from './pages'
import About from './pages/about'
import Services from './pages/services'
import ContactUs from './pages/contact-us'
import SignUp from './pages/sign-up'
import SignIn from './pages/login';

function App() {
  
  return (
     <Router>
       <Navbar />
       <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/about" component={About}/>
         <Route path="/services" component={Services}/>
         <Route path="/contact-us" component={ContactUs}/>
         <Route path="/sign-up" component={SignUp}/>
         <Route path="/login" component={SignIn}/>
       </Switch>
     </Router>
  );
}

export default App;
