import React from 'react';
import ReactDOM from 'react-dom';
import {Hero} from './../classes/hero';
// ------------------------------------------------------------------------------------
// MAIN COMPONENT 
class Uihud extends React.Component 
{
    constructor(props) 
    {
        super(props);
        this.state = {
          selected  : '',
          hp_max : 40,
          hp : 40,

        };
    }
    init_hero()
    {
        let hero = new Hero('Cartman',12)
        this.setState({})

    }
    componentDidMount()
    {
        console.log('aze')
        document.addEventListener("keydown", this.movement, false);
    }
    movement(e)
    {
        e.stopPropagation();
        var key = "";
        if      (e.key =="ArrowLeft")  { key = "left";   this.move_char;  }
        else if (e.key =="ArrowUp")    { key = "top";    this.move_char;  }
        else if (e.key =="ArrowDown")  { key = "bot" ;   this.move_char;  }       
        else if (e.key =="ArrowRight") { key = "right";  this.move_char;  } 
        console.log(key)
    }
    move_char(key)
    {
        console.log('lol',key)
    }
    render()
    {
        return(
            <div>
                <svg width="100px" height="40px">
                    <rect x='0' y='0' width={this.props.hp_max} height="40px" fill='transparent' stroke="black"/>
                    <rect x='0' y='0' width={this.props.hp}  height="40px" fill='red' stroke="black"/>
                </svg>
            </div>
        )
    }
}

export default Uihud;