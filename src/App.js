import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Formulario from './components/Form';
import Home from './components/Home';
import TatuadorCard from './components/TatuadorCard';
import './App.css';


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tatuadores/:id" component={TatuadorCard} />
          <Route path="/formulario" component={Formulario} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
