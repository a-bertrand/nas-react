import React from 'react';
import ReactDOM from 'react-dom';
import './kill_the_cthulhu/style.css';
import Uimap from './kill_the_cthulhu/component/map.js'
import Uihud from './kill_the_cthulhu/component/hud.js'
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
          selected_hero : false,
          selected_map : false,
          text_cons : '',
        };
        
    }
    myHero(dataFromComponent_player) 
    {
      this.setState({ selected_hero: dataFromComponent_player});
    }
    myMap(dataFromComponent_map)
    {
      this.setState({ selected_map: dataFromComponent_map});
    }
    initplace()
    {
        console.log('on init')
        let map = this.state.selected_map
        map.cases[50].element = 'hero'
        this.setState({ selected_map:map})
    }
    render() 
    {
      console.log('render',this.state.selected_map, this.state.selected_hero)
        return (
        <div className="row"> 
          <button onClick={this.initplace.bind(this)}>Place player</button>
          <div id="UI-player" className='col-md-4'>
            <Uihud callback={this.myHero.bind(this)}/>
          </div>
          <div id="UI-map" className="col-md-8">
            <Uimap selectedHero={this.state.selected_hero} callback={this.myMap.bind(this)} selectedmap={this.state.selected_map}/>
          </div>
        </div>
      )
    }
}

export default Interface;