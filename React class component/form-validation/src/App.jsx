import "./styles.css";
import React, { Component } from "react";
import Counter from "./component/Counter";
import Form from "./component/Form";
import Home from "./component/Home";

import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Todo from "./component/Todo";

function App() {
  return (
    <Router>
      {/* <Form />
      <Counter /> */}
      <nav className="navbar">
        <Link to="/">
          <h2>Home</h2>
        </Link>
        <Link to="/form">
          <h2>Form Validation</h2>
        </Link>
        <Link to="/counter">
          <h2>Counter</h2>
        </Link>
        <Link to="/todo">
          <h2>Todo</h2>
        </Link>
      </nav>
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/todo" component={Todo} />
      </main>
    </Router>
  );
}

export default App;
