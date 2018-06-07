import { Unit } from './Unit';
import { GameBoard} from './Map';
// ------------------------------------------------------------------------------------
export class Player 
{
    constructor(ident) 
    {
        this.ident =  ident; // 1 ou 2 
        this.army = [];
        this.life = 20;
    }
    add_unit_to_army(unit)
    {
        this.army.push(unit)
    }
    generate_random_army()
    {
        let random_name = ['jean','azeaze','qsdfsdf','xcvwxcv','dvfv','xqwxqwx','2422',',jh,ghn','xcvbxcbean','pef'];
        for (var i = 0; i < 4; i++) 
        {
            let new_unit = new Unit(getRandomInt(12),getRandomInt(12),random_name[getRandomInt(10)],getRandomInt(10),getRandomInt(10),getRandomInt(10),getRandomInt(10),getRandomInt(10),getRandomInt(10),getRandomInt(10))
            this.army.push(new_unit)
        }
        function getRandomInt(max) 
        {
            return Math.floor(Math.random() * Math.floor(max));
        }
    }
}

