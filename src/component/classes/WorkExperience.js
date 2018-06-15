/*
Exemple : 
    Framework / Bibliothèques
        nodejs 2
        symphony 4

    Languages dev
        javascript 4
        html 6
*/
// ------------------------------------------------------------------------------------
export class WorkExperience 
{
    constructor(title, level, WorkCategory) 
    {
        this.title      = title     // Nodejs, javascript 
        this.level      = level    // x/10
        this.workcat    = WorkCategory    // x/10
    }
}

export class WorkCategory
{
    constructor(title, level, workcat) 
    {
        this.title      = title     // Nodejs, javascript 
    }
}
// ------------------------------------------------------------------------------------
/*
    TODO : Link with 
*/
export function generate_fake_data()
{
    let list_cat    = ['Languages dev',  'Framework / Bibliothèques']
    let cat_lang    = new WorkCategory(list_cat[0])
    let cat_fram    = new WorkCategory(list_cat[1])
    let array_exp   = []
    // ---------------------------------------
    // cat_lang
    array_exp.push(new WorkExperience('Javascript',9,cat_lang))
    array_exp.push(new WorkExperience('HTML/CSS',9,cat_lang))
    array_exp.push(new WorkExperience('PHP',8,cat_lang))
    array_exp.push(new WorkExperience('Python',7,cat_lang))
    array_exp.push(new WorkExperience('Java',5,cat_lang))
    array_exp.push(new WorkExperience('C++',4,cat_lang))
    array_exp.push(new WorkExperience('C',4,cat_lang))
    array_exp.push(new WorkExperience('C#',4,cat_lang))
    array_exp.push(new WorkExperience('ADA',2,cat_lang))
    // ---------------------------------------
    // cat_fram
    array_exp.push(new WorkExperience('Django',6,cat_fram))
    array_exp.push(new WorkExperience('Symfony',4,cat_fram))
    array_exp.push(new WorkExperience('JavaEE',4,cat_fram))
    array_exp.push(new WorkExperience('Java Android',4,cat_fram))
    array_exp.push(new WorkExperience('ReactJs',5,cat_fram))
    array_exp.push(new WorkExperience('AngularJs',6,cat_fram))
    array_exp.push(new WorkExperience('Bootstrap 3',6,cat_fram))
    array_exp.push(new WorkExperience('Wordpress',5,cat_fram))
    /* --------------------------------------- */
    let array_cat = [cat_fram,cat_lang]
    return [array_exp,array_cat]
}