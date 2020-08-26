import React from 'react';
import BooksContainer from './components/BooksContainer';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Route path={['/books/:page?/:itemsPerPage?/:searchQuery?']}>
          <BooksContainer />
        </Route>
    </Router>
  );
}

export default App;
