// ------------------------------------------------------------------------------------
export class Square 
{
    constructor(x, y,level) 
    {
        this.x = x;
        this.y = y;
        this.level = level; // 1 - grass 2 - wall
        this.element = false ; // monster, player...
    }
}
// ------------------------------------------------------------------------------------
export class Fullmap
{
    constructor(name)
    {   
        this.name = name;
        this.cases = [];
    }
    /* Method */
    get_case_by_XY(x,y)
    {
        let array = this.cases
        let position;
        /* ------------------ */
        // TODO split array to increase speed
        for (var i = 0; i < array.length; i++) 
        {
            let current_case = array[i]
            if (current_case.x === x && current_case.y === y) 
            {
                return i
            }
        }
        return false
    }
}
