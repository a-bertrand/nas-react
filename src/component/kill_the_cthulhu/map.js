import React from 'react';
import ReactDOM from 'react-dom';
import {Fullmap, Square} from  './classes/map'
// ------------------------------------------------------------------------------------
// MAIN COMPONENT 
class UImap extends React.Component 
{
    constructor(props) 
    {
        super(props);
        this.state = {
          case_width : 45,
          index:0,
          boardcontent : '',
          currentmap : [],
        };
    }
    create_default_map()
    {
        // Case = x; y; level; element;
        let full_map = new Fullmap('default')
        let how_many = 16
        for (var i=0; i <  how_many; i++ )
        { 
            for(var j=0; j <  how_many; j++ )   
            {   
                let square = new Square (j,i,0)
                if(i==0 || i== how_many -1)     {square.level =  2;} // valeur de la case : 0 -> vide 1 -> herbe 2-> mur etc... 
                else if (j != how_many/2  && j != 4 &&  i == how_many/2) {square.level =  2;}
                else if ( j != how_many-2 && j != 2 && j != 4 &&  i == how_many/4) {square.level =  2;}
                else if(j==0 || j== how_many -1){square.level =  2;}
                else
                {
                    square.level =  1;
                }
                full_map.cases.push(square)
            }
        }
        this.setState({currentmap:full_map})
        return full_map;
    }
    generate_map()
    {
        let current_map = this.create_default_map()
    	let all_case = [];
        let case_width = this.state.case_width
        for (var i = 0; i < current_map.cases.length; i++) 
        {
            let current_case = current_map.cases[i]
            let x = current_case.x * case_width
            let y = current_case.y * case_width
            if (current_case.level == 2)
            {
                all_case.push(<Case key={i} x={x} y={y} width_case={case_width} fill={require('./assets/image/wall.jpeg')} />)
            }
            else
            {
                all_case.push(<Case key={i} x={x} y={y} width_case={case_width} fill={require('./assets/image/grass.jpeg')}/>)
            }
        }
    	this.setState({boardcontent:all_case})
    }
    render() 
    {
        return (
	        <div>
                <div>
                    <button onClick={this.generate_map.bind(this)}> Start game </button>
                </div>
                <div>

                    <svg className="map" height="750" width="750"  >
                        {this.state.boardcontent}
                    </svg>
                </div>
	        </div>
        )
    }
}
export default UImap;
// ------------------------------------------------------------------------------------
class Case extends React.Component 
{
	render() 
    {
        return (
            //<rect className='map_case' x={this.props.x} y={this.props.y} width={this.props.width_case} height={this.props.width_case} stroke="black" fill={this.props.fill} />
            <image class="carre" x={this.props.x} y={this.props.y} width={this.props.width_case} height={this.props.width_case} xlinkHref={this.props.fill}></image>
      )
    }
}