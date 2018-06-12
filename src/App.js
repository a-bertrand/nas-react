<<<<<<< HEAD
=======
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Game from './component/main';

const MainRoot = () => (
  <Router>
    <div>
      <div id="navbar">    
        <nav class="navbar navbar-default navbar-static-top" role="navigation">
          <div class="collapse navbar-collapse" id="navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
              <li>
                <Link to="/games">Games</Link>
              </li>
              <li>
                <Link to="/games">Fight Test</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="container text-center">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/games" component={Game} />
      </div>
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
    <form method="POST" action="http://192.168.1.36:3080/user/login" >
      <div class="input-form">
          <label>name</label>
          <input type="text" name="name"/>
      </div>
      <div class="input-form">
        <label>password</label>
        <input type="text" name="password"/>
      </div>
      <button type="submit"> Valider </button>
    </form> 
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default MainRoot;
>>>>>>> e24555ed628f41b4d6715fba398b29cf330130b3
