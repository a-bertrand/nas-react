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
    constructor(props){
        super(props);
        this.state = {
          selected_hero : false,
          selected_map : false,
          monster :  false,
          text_cons : '',
          last_position:'',
        };
    }
    /* -------------------------------------------------------------------------------- */
    // Callback from child
    myHero(dataFromComponent_player) 
    {
      this.setState({ selected_hero: dataFromComponent_player});
    }
    myMap(dataFromComponent_map)
    {
      this.setState({ selected_map: dataFromComponent_map});
    }
    /* -------------------------------------------------------------------------------- */
    /* Mouvement & place */
    // 1 - grass / 2 - wall
    monster_setplace(x,y)
    {
        // place du hero ( 14/14 )
        let map   = this.state.selected_map
        let hero  = this.state.selected_hero
        let position = map.get_case_by_XY(x,y)

        if (map.cases[position].level == 2){
          //movement impossible
          console.log('mouvement impossible')
        }
        else{
          if (this.state.last_position){
            map.cases[this.state.last_position].element = false
          }
          map.cases[position].element = 'hero'
          hero.position[0] = x
          hero.position[1] = y

          this.setState({ selected_map:map})
          this.setState({ last_position:position})
          this.setState({ selected_hero:hero})
        }
    }
    /* ---------------------------------------- */
    hero_setplace(x,y)
    {
        // place du hero ( 14/14 )
        let map   = this.state.selected_map
        let hero  = this.state.selected_hero
        let position = map.get_case_by_XY(x,y)

        if (map.cases[position].level == 2){
          //movement impossible
          console.log('mouvement impossible')
        }
        else{
          if (this.state.last_position){
            map.cases[this.state.last_position].element = false
          }
          map.cases[position].element = 'hero'
          hero.position[0] = x
          hero.position[1] = y

          this.setState({ selected_map:map})
          this.setState({ last_position:position})
          this.setState({ selected_hero:hero})
        }
    }
    /* ---------------------------------------- */
    movement(e)
    {
        var key = "";
        let hero = this.state.selected_hero

        if (e.key === "ArrowLeft"){ 
            this.hero_setplace(hero.position[0]-1, hero.position[1])//.bind(this,12,12)
        }
        else if (e.key === "ArrowUp"){ 
            this.hero_setplace(hero.position[0], hero.position[1]-1)
        }
        else if (e.key === "ArrowDown"){ 
            this.hero_setplace(hero.position[0], hero.position[1]+1)
        }       
        else if (e.key === "ArrowRight"){ 
            this.hero_setplace(hero.position[0]+1, hero.position[1])
        }
    }
    /* -------------------------------------------------------------------------------- */
    /* life cycle */
    componentDidMount()
    {
      document.addEventListener("keydown", this.movement.bind(this), false);
    }
    render() 
    {
        return (
        <div className="row"> 
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