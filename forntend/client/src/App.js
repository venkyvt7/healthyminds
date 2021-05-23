import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Blog from './components/blog/Blog';
import News from './components/news/News';
import { Navbar } from "./components/Navbar/Navbar";
import { Memes } from "./components/Memes/Memes";
import { MemeGenerated } from "./components/Memes/MemeGenerated.js";
import { Home } from "./components/Home/Home";
import Chat from "./components/chat/Chat.js";

function App() {
  return (

  
    <div className="App">
     {/* <h2>
      <Blog></Blog>
      <News></News>
     </h2> */}
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/news">
           <News/>
          </Route>
          <Route exact path="/chat">
           <Chat/>
          </Route>
          <Route exact path="/blog">
           <Blog/>
          </Route>
          <Route exact path="/memes">
            <Memes />
          </Route>
          <Route path="/generated">
            <MemeGenerated />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
