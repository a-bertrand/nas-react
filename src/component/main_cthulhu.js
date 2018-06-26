import React from 'react';
import ReactDOM from 'react-dom';
import './kill_the_cthulhu/style.css';
import Uimap from './kill_the_cthulhu/map.js'
/*
    Interface : HP héros, Texte event 
      Map       : Affichage de la carte 
      Gameplay  : Mouvement
*/

// ------------------------------------------------------------------------------------
class Interface extends React.Component 
{
    constructor(props) 
    {
        super(props);
        this.state = {
          selected_hero : '',
          text_cons : '',
        };
    }
    render() 
    {
        return (
        <div className="row">
          <div id="UI-player" className='col-md-4'>
            <p>{this.state.selected_hero}</p>
          </div>
          <div id="UI-map" className="col-md-8">
            <Uimap />
          </div>
        </div>
      )
    }
}

export default Interface;