import React, { Component } from "react";
import { Player} from './classes/Game';
import { GameBoard} from './classes/Map';
import { Unit } from './classes/Unit';
class Square extends React.Component 
{

  render() {
    return (
      <rect size={this.props.size} x={this.props.x} y={this.props.y} width={this.props.size} height={this.props.size} 
      className="rect" style={{fill:this.props.color}} onClick = {this.props.handler} />
    );
  }
}

class Unitobj extends React.Component 
{

  render() {
    return (
      // <text key={this.props.id} x={this.props.x} y={this.props.y} style={{fill:this.props.color}}> {this.props.name} </text>
      <circle cx={this.props.x} cy={this.props.y} style={{fill:this.props.color}} stroke="black" r="10"/>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameboard : '',
      boardcontent :'',
      size : 35
    };
  }
  clickCase(one_case)
  {
    console.log('on est la deferfefe',one_case)
  }
  renderBoard(gameboard) 
  {
    let all_case = [];
    let color = ['#D6C59C','#ACF099','#C76D4E']
    for (let i = gameboard.board.length - 1; i >= 0; i--) 
    {
      let one_case = gameboard.board[i];
      let case_x = one_case.x*this.state.size;
      let case_y = one_case.y*this.state.size;
      let case_color = color[one_case.level]
      let id = case_x+''+case_y
      all_case.push(<Square key={id} size={this.state.size} x={case_x} y={case_y} color={case_color} handler={this.clickCase.bind(this,one_case)} />)  
    }
    for (let i = 0; i < this.props.gamestate.player1.army.length; i++)
    {
      let current_unit = this.props.gamestate.player1.army[i]
      let case_x = current_unit.x*this.state.size+this.state.size/2;
      let case_y = current_unit.y*this.state.size+this.state.size/2;
      let id = 'unit1'+case_x+''+case_y
      let name = current_unit.name;
      all_case.push(<Unitobj key={id} x={case_x} y={case_y} name={name} color="blue" />)
    }
    for (let i = 0; i < this.props.gamestate.player2.army.length; i++)
    {
      let current_unit = this.props.gamestate.player2.army[i]
      let case_x = current_unit.x*this.state.size+this.state.size/2;
      let case_y = current_unit.y*this.state.size+this.state.size/2;
      let id = 'unit2'+case_x+''+case_y
      let name = current_unit.name;
      all_case.push(<Unitobj key={id} x={case_x} y={case_y} name={name} color="red" />)
    }
    return all_case
  }
  startgame()
  {
    let gameboard = new GameBoard(12)
    this.setState({gameboard:gameboard})
    let value = this.renderBoard(gameboard)
    this.setState({boardcontent:value})
  }
  render() {
    return (
      <div>
        <button onClick={this.startgame.bind(this)}> Start cases : </button>
        <div>
          <svg height="800" width="500" >
            {this.state.boardcontent}
          </svg>
        </div>
      </div>
    );
  }
}

export default Board; 