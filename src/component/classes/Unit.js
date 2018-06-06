import {getRandomInt} from '../../tools.js';
// Unitée sur la map 
export class Unit
{
    constructor(x,y, char) 
    {
        this.x = x 
        this.y = y
        this.char = char
    }
    // -----------------------------------------------------------------
}
// ---------------------------------------------------------------------
// personnage et ses characteristique
class Character 
{
    constructor(name,cost, strength, defense,movement, accuracy,dodge,  hp) 
    {
        this.name   =  name
        this.cost 		= 	cost;  
        this.strength	= 	strength;  
        this.defense	= 	defense;
        this.movement	= 	movement;  
        this.accuracy	= 	accuracy;
        this.dodge		= 	dodge;    
        this.hp			 = 	hp;
        this.hpmax      =  hp;
    }
    // ------------------------------------------------------------------
    // Atak method
    atak(unit_def)
    {
        // coup d'atak
        let damage;
        let modif = 0;
        if (this.strength * 2  === unit_def.defense)
        {
            modif += 2;
        }
        else if (this.strength / 2  === unit_def.defense)
        {
            modif -= 2;
        }
        else if (this.strength > unit_def.defense)
        {
            modif += 1;
        }
        else if (this.strength < unit_def.defense)
        {
            modif += -1;
        }
        // --------------------------------------------------------
        let result = getRandomInt(6) + modif
        if (result >= 4 )
        {
            damage = 1;
        } 
        else
        {
            damage = 0
        }
        unit_def.hp -= damage
        return 'lattaquant '+this.name+' à reussit à mettre '+damage+' à '+unit_def.name
    }
}
// --------------------------------------------------------------------
