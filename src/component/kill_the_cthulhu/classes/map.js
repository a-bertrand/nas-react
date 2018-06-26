// ------------------------------------------------------------------------------------
export class Square 
{
    constructor(x, y,level) 
    {
        this.x = x;
        this.y = y;
        this.level = level;
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
}
