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
// Company and formation
export class WorkCompany
{
    constructor(job_title,summary,startdate,enddate,company,workcat) 
    {
        this.job_title  = job_title 
        this.summary    = summary    // x/10
        this.startdate  = new Date(startdate)  
        this.enddate    = new Date(enddate)  
        this.company    = company    // x/10
        this.workcat    = workcat    // x/10
    }
}

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
    let list_cat    = ['<i class="fa fa-code"></i> Languages dev',  '<i class="fa fa-book"></i> Framework / Bibliothèques', '<i class="fa fa-industry"></i> Experiences Professionnelles', 'Experiences Professionnelles hors développement','<i class="fa fa-graduation-cap"></i>Formations','<i class="fa fa-app-store-ios"></i> Logiciels']
    let cat_lang    = new WorkCategory(list_cat[0])
    let cat_fram    = new WorkCategory(list_cat[1])
    let cat_company_info    = new WorkCategory(list_cat[2])
    let cat_company_OS      = new WorkCategory(list_cat[3])
    let cat_formation       = new WorkCategory(list_cat[4])
    let cat_sofware         = new WorkCategory(list_cat[5])
    let array_exp   = []
    // ---------------------------------------

    // ---------------------------------------
    // cat_lang
    array_exp.push(new WorkExperience('Javascript',9,cat_lang))
    array_exp.push(new WorkExperience('HTML/CSS',9,cat_lang))
    array_exp.push(new WorkExperience('PHP',8,cat_lang))
    array_exp.push(new WorkExperience('Python',6,cat_lang))
    array_exp.push(new WorkExperience('Java',6,cat_lang))
    array_exp.push(new WorkExperience('C++',4,cat_lang))
    array_exp.push(new WorkExperience('C',3,cat_lang))
    array_exp.push(new WorkExperience('C#',5,cat_lang))
    array_exp.push(new WorkExperience('ADA',3,cat_lang))
    // ---------------------------------------
    // cat_fram
    array_exp.push(new WorkExperience('Django',7,cat_fram))
    array_exp.push(new WorkExperience('Symfony',4,cat_fram))
    array_exp.push(new WorkExperience('Laravel',4,cat_fram))
    array_exp.push(new WorkExperience('JavaEE',4,cat_fram))
    array_exp.push(new WorkExperience('Java Android',4,cat_fram))
    array_exp.push(new WorkExperience('ReactJs',6,cat_fram))
    array_exp.push(new WorkExperience('ReactNative',4,cat_fram))
    array_exp.push(new WorkExperience('AngularJs',5,cat_fram))
    array_exp.push(new WorkExperience('Bootstrap 3',6,cat_fram))
    array_exp.push(new WorkExperience('Wordpress',6,cat_fram))
    array_exp.push(new WorkExperience('Magento',5,cat_fram))
    array_exp.push(new WorkExperience('Prestashop',5,cat_fram))
    array_exp.push(new WorkExperience('D3.js',7,cat_fram))
    array_exp.push(new WorkExperience('Qt',4,cat_fram))
    array_exp.push(new WorkExperience('jQuery, UI & Mobile',8,cat_fram))
    // ---------------------------------------
    // cat_company // job_title,summary,startdate,enddate,company,workca
    array_exp.push(new WorkCompany("Developpeur Web (Acutellement)","Accompagnement digital pour la transformation numérique d'un réseau d'agence immobilière. BackEnd avec Django + API REST avec un Front sous EmberJs et un  Front d'administration sous Django, D3js et ReactJs","2017-12","2018-07","Nitroserv",cat_company_info))
    array_exp.push(new WorkCompany("Developpeur Web","Développement de nouveaux modules pour un outil d’email marketing et maintenance applicative de cet outil","2017-07","2017-11","ID Nova",cat_company_info))
    array_exp.push(new WorkCompany("Developpeur Informatique (Alternance)","Développement de sites internets en utilisant divers Frameworks & CMS. Application mobile hybride, embarquée, native et desktop ainsi qu'une extension pour navigateur.","2016-06","2017-07","L2C2",cat_company_info))
    array_exp.push(new WorkCompany("Developpeur Informatique","Automatisation de tâches de supervision et de maintenance grâce à du javascript et à du langage « BATCH ». Amélioration de la visualisation des informations.","2016-04","2016-05","Spie",cat_company_info))
    array_exp.push(new WorkCompany("Technicien d’exploitation et de supervision","Maintenance et supervision de sites de productions et serveurs. Support par téléphone pour le support bas niveau, et rédaction de notes pour le suivi.","2016-01","2016-04","Spie",cat_company_info))
    array_exp.push(new WorkCompany("Développeur informatique (Stage)","Refonte d’une interface pour la gestion de parc de machines virtuelles pour l’intégrer dans un site essentiellement avec du JavaScript et avec la bibliothèque D3.js","2013-06","2013-08","Vates",cat_company_info))
    // ---------------------------------------
    // cat_company_OS 

    // ---------------------------------------
    // cat_formation 
    array_exp.push(new WorkCompany("BAC + 3 : Licence Professionnelle - Métier de l'informatique applique au web (MI-AW)","Analyse & programmation informatiqe","2016","2017","IUT 2 de Grenoble",cat_formation))
    array_exp.push(new WorkCompany("Formation musicale cursus guitare", "Ecole de musique","2014","2015","Music academy International",cat_formation))
    array_exp.push(new WorkCompany("BAC + 2 : DUT informatique","Analyse & programmation informatique (ADA, C, Java, PHP/HTML/CSS)","2012","2014","IUT 2 de Grenoble",cat_formation))
    array_exp.push(new WorkCompany("BAC : Sti électronique","Programmation de micro controlleur, ","2010","2012","Lycée Saint-marc à Nivolas-Vermelle",cat_formation))
    
    // ---------------------------------------
    // cat_sofware
    array_exp.push(new WorkExperience('Windows',10,cat_sofware))
    array_exp.push(new WorkExperience('Mac OS',9,cat_sofware))
    array_exp.push(new WorkExperience('Linux Debian & Ubuntu',6,cat_sofware))
    array_exp.push(new WorkExperience('Eclipse, NetBeans, Php Storm',4,cat_sofware))
    array_exp.push(new WorkExperience('Sublime Text',8,cat_sofware))
    array_exp.push(new WorkExperience('Git',4,cat_sofware))
    array_exp.push(new WorkExperience('Word, Excel, PowerPoint',6,cat_sofware))
    array_exp.push(new WorkExperience('Photoshopn InDesign',4,cat_sofware))
    array_exp.push(new WorkExperience('Logic pro X',8,cat_sofware))
    array_exp.push(new WorkExperience('Unity',4,cat_sofware))
    array_exp.push(new WorkExperience('Unreal Engine',2,cat_sofware))

    /* --------------------------------------- */
    let array_cat = [cat_sofware, cat_lang,  cat_fram,  cat_company_info, cat_company_OS, cat_formation]
    array_exp = sort_by_level(array_exp)
    return [array_exp,array_cat]
    /* --------------------------------------- */
    function sort_by_level(array)
    {
        let is_sort = false
        while (!is_sort) 
        {
            is_sort = true;
            for(let i=0 ; i < array.length-1 ; i++)
            {
                if(array[i].level > array[i+1].level)
                {
                    let save = array[i]
                    array[i] = array[i+1]
                    array[i+1] = save 
                    is_sort = false;
                }
            }
        }
        return array
    }
}

