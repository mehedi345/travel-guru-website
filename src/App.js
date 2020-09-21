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
import NoMatch from './components/NoMatch/NoMatch';
import Login from './components/Login/Login';

export const CategoryContext = createContext();
export const UserContext = createContext();
function App() {
  const [categories, setCategories] = useState("cox'sbazar");
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="app-area">
      <CategoryContext.Provider value={[categories, setCategories]}>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
            <Route path="/login">
                <Login></Login>
            </Route>
            <Route path="*">
                <NoMatch></NoMatch>>
            </Route>
          </Switch>
        </Router>
        </UserContext.Provider>
      </CategoryContext.Provider>
    </div>


  );
}

export default App;
