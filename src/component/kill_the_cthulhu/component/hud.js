import React from 'react';
import {Hero} from './../classes/hero';
// ------------------------------------------------------------------------------------
// MAIN COMPONENT 
const width_multiplicator = 14;

class Uihud extends React.Component 
{
    constructor(props) 
    {
        super(props);
        this.state = {
          selected_hero  : '',
          hp_max : 0,
          hp : 0,
        };
    }
    componentDidMount()
    {
        let hero = new Hero('Cartman',12)
        this.setState({hp_max:hero.hp*width_multiplicator})
        this.setState({hp:hero.hp*width_multiplicator})
        this.setState({selected_hero:hero})
        this.props.callback(hero)
    }
    take_damage()
    {
        let hero = this.state.selected_hero
        hero.hp = hero.hp-1
        this.setState({hp:hero.hp*width_multiplicator})
        this.setState({selected_hero:hero})
    }
    render()
    {
        return(
            <div>
                <p> Vie restante de {this.state.selected_hero.name} : {this.state.hp} /{this.state.hp_max} </p>
                <svg width="400px" height="100px">
                    <rect x='1' y='20' width={this.state.hp_max} height="30px" fill='none' stroke="black"/>
                    <rect x='1' y='20' width={this.state.hp}  height="30px" fill='red' stroke="black"/>
                </svg>
            </div>
        )
    }
}

export default Uihud;