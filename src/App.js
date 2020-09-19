import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import BooKing from './components/BookIng/BooKing';


export const CategoryContext = createContext();
function App() {
  const [categories, setCategories] = useState("cox'sbazar");

  return (
    <div className="app-area">
      <CategoryContext.Provider value={[categories, setCategories]}>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route  path="/booking">
               <BooKing></BooKing>
            </Route>
            
          </Switch>
        </Router>
      </CategoryContext.Provider>
    </div>


  );
}

export default App;
