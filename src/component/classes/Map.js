// ------------------------------------------------------------------------------------
class Case 
{
    constructor(x, y,level) 
    {
        this.x = x;
        this.y = y;
        this.level = level;
    }
}
// ------------------------------------------------------------------------------------
class Map
{
    constructor(name)
    {   
        this.name = name;
        this.cases = [];
    }
}
// ------------------------------------------------------------------------------------
export class GameBoard 
{
    constructor(nb_case) 
    {
    	let board = []
        for (var y = 0; y < nb_case; y++)
        {
        	for (var x =0;x < nb_case; x++)
        	{
                let randomint = Math.floor(Math.random() * Math.floor(3));
        		let new_case = new Case(x,y,randomint)
        		board.push(new_case)
        	}
        }
        this.board = board;
    }
}
// ------------------------------------------------------------------------------------