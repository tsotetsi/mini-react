import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Faq from './Faq';
import Contact from './Contact';


const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/faq">Faqs</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/faq" component={Faq} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'))
