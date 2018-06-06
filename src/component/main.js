import React from 'react';
import ReactDOM from 'react-dom';
import { Player} from './classes/Game';
import { GameBoard} from './classes/Map';
import { Unit } from './classes/Unit';
import { getRandomInt } from 'all-tool';
import Board from './game';
import './css/app.css';
// ------------------------------------------------------------------------------------
class Interface extends React.Component 
{
    constructor(props) 
    {
        super(props);
        this.state = {
          full_text : '',
          text_cons : '',
        };
    }
    displayarmy()
    {
        console.log(this.props.gamestate)
        let army_list_elem = [];
        if(this.props.gamestate.jactif === 1)
        {
            for (var i = 0; i < this.props.gamestate.player1.army.length; i++) 
            {
                let current_unit = this.props.gamestate.player1.army[i]
                army_list_elem.push(<div>{current_unit.name} | {current_unit.cost} | {current_unit.hp}</div>)
            }
        }
        else
        {
            for (var i = 0; i < this.props.gamestate.player2.army.length; i++) 
            {
                let current_unit = this.props.gamestate.player2.army[i]
                army_list_elem.push(<div>{current_unit.name} | {current_unit.cost} | {current_unit.hp}</div>)
            }
        }
        return army_list_elem;
    }
    fightTest()
    {
      
      var _this = this;
      let new_unit1 = new Unit(getRandomInt(12),getRandomInt(12),'unit1',getRandomInt(10),getRandomInt(10),getRandomInt(10),getRandomInt(10),getRandomInt(10),getRandomInt(10),getRandomInt(10))
      let new_unit2 = new Unit(getRandomInt(12),getRandomInt(12),'unit2',getRandomInt(10),getRandomInt(10),getRandomInt(10),getRandomInt(10),getRandomInt(10),getRandomInt(10),getRandomInt(10))
      var text = '----Unités crée : '+' '+new_unit1.name+' '+new_unit2.name+' '+new_unit1.hp+' '+new_unit2.hp;
      while(new_unit1.hp > 0 || new_unit2.hp > 0 )
      {
        updatetext('//////////// 1 attake 2 ////////////')
        let new_text = new_unit1.atak(new_unit2)
        updatetext(new_text)
        updatetext('//////////// 2 attake 1 ////////////')
        new_text = new_unit2.atak(new_unit1)
        updatetext(new_text)
      }
      // --------------------------------------------------------
      function getRandomInt(max) 
      {
          return Math.floor(Math.random() * Math.floor(max));
      }
      // --------------------------------------------------------
      function updatetext(new_text)
      {
        text += new_text
        console.log(text)
       // _this.setState({text_cons : text})
      }
     }
    render() 
    {
        return (
        <div>
            <div>
                <div>
                    {this.displayarmy(this)}
                </div>
                <button> Ajouter </button>
            </div>
         <button onClick={this.props.handler}>Finnir tour {this.props.gamestate.jactif}</button>

         <button onClick={this.fightTest}>fight Test</button>
        </div>
      )
    }
}
// ------------------------------------------------------------------------------------
class Game extends React.Component 
{
  constructor(props) 
  {
        super(props);
        let player1 = new Player(1)
        player1.generate_random_army()
        let player2 = new Player(2)
        player2.generate_random_army()

        this.state = {
          jactif : 1,
          player1:player1,
          player2:player2,
        };
  }
  endTurn()
  {
    if(this.state.jactif === 1)
    {
      this.setState({jactif:2})
    }
    else
    {
      this.setState({jactif:1})
    }
  }
  render() {
    return (
      <div className="game row">
        <div className="game-board col-lg-6">
          <Board gamestate={this.state} />
        </div>
        <div className="game-interface col-lg-6">
          <div>
            <div>
              {this.state.jactif}
              <Interface gamestate={this.state} handler={this.endTurn.bind(this)}/>
            </div>
          </div>
          <div>
            {this.text_cons}
          </div>
        </div>
      </div>
    );
  }
}

export default Game;