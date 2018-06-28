export class Character 
{
    constructor(name, hp, type) 
    {
	  this.name		= 	name;
	  this.hp		=	hp;
	  this.type		=	type; // type : monster - hero
	  this.position =	[0,0];
	}
}