import React from "react";
import "./App.css";
import "./main.css";
import { useState, useEffect } from "react";
// import Navbar from './components/navbar';
import Home from './components/pages/home';
import axios from "axios";
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import PrivateRoute from './components/PrivateRoute';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PostPage from './components/pages/PostPage'
import 'bootstrap/dist/css/bootstrap.css'


function App() {
  return (
    <Router>
      <Switch>
      <Route path="/home" component={Home} />
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignUpForm} />
        <Redirect to="/login" />
        <Route path="/posts" component={PostPage} />
        <Route exact path="/" component={Body} />
        <Route exact path="/MostLikedPost" component={MostLikedPost} />
        <Route exact path="/MostCommentPost" component={MostLikedPost} />
        <Route exact path="/:pageNo" component={Body} />
        <Route exact path="/profile/:authorId" component={AuthorPage} />
        <Route exact path="/Post/:postId" component={PostPage} />
      </Switch>
    </Router>
  );
}
export default App; 