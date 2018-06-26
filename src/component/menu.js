import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Game from './main';
import Game_cthulhu from './main_cthulhu';
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
				                <Link to="/games">Projet perso</Link>
				              </li>
				              <li>
				                <Link to="/licenceprojects">Projet école</Link>
				              </li>
				            </ul>
				          </div>
				        </nav>
			      	</div>
			      	<div className="text-center">
				        <Route exact path="/" component={Home} />
				        <Route path="/about" component={About} />
				        <Route path="/licenceprojects" component={projects} />
				        <Route path="/games" component={Persoprojects} />
    					<Route path="/project_game" component={Game} />
    					<Route path="/project_cthulhu" component={Game_cthulhu} />
			    	</div>
			    </div>
			</Router>
		);
	}
}
const Persoprojects = ({ match }) =>
(
	<div>
    <h2><i className="fa fa-list-ul"></i> Liste des projets persos: </h2>
    <ul className="list-group">
      <li className="list-group-item">
        <a href="http://django.atlachnacha.synology.me/home">Site de mon groupe : " Rise Of Doom "</a>
      </li>
      <li className="list-group-item">
        <Link to="/project_cthulhu">Kill the Cthulhu</Link>
      </li>
      <li className="list-group-item">
        <Link to="/project_game">Projet perso</Link>
      </li>
    </ul>

  </div>
)

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
        <a href="http://angular.atlachnacha.synology.me/dashboard">Vers projet Angular (en cours d'update vers angular 6)</a>
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
