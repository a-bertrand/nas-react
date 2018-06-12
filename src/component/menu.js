import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Game from './main';
import Home from './menu/home';

class Menu extends React.Component 
{
	render()
	{
		return (
			<Router>
			    <div>
			    	<div id="navbar">    
				        <nav className="navbar navbar-default navbar-static-top" role="navigation">
				          <div className="collapse navbar-collapse" id="navbar-collapse-1">
				            <ul className="nav navbar-nav">
				              <li>
				                <Link to="/">Acceuil</Link>
				              </li>
				              <li>
				                <Link to="/about">A propos</Link>
				              </li>
				              <li>
				                <Link to="/licenceprojects">Projet Licence</Link>
				              </li>
				              <li>
				                <Link to="/games">Autre projet</Link>
				              </li>
				              <li>
				                <Link to="/games">Fight Test</Link>
				              </li>
				            </ul>
				          </div>
				        </nav>
			      	</div>
			      	<div className="container text-center">
				        <Route exact path="/" component={Home} />
				        <Route path="/about" component={About} />
				        <Route path="/licenceprojects" component={projects} />
				        <Route path="/games" component={Game} />
			    	</div>
			    </div>
			</Router>
		);
	}
}


const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const projects = ({ match }) => 
(
  <div>

    <h2><i className="fa fa-list-ul"></i> Liste des projets de licence pro : </h2>
    <ul className="list-group">
      <li className="list-group-item">
        <a href="../other_project/school-htmlcssjs/index.html">Vers projet avec uniquement HTML / CSS / JS </a>
      </li>
      <li className="list-group-item">
        <a href="/">Vers projet Angular (en cours d'update vers angular 6)</a>
      </li>
    </ul>
  </div>
);

const Topic = ({ match }) => 
(
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default Menu;