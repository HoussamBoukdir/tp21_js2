import Etudiant from "./Etudiant.js";
class Stagiaire1 extends Etudiant{
    constructor(nom, age, stage){
        super(nom, age);
        this.stage=stage;
    }
    info(){
        return`Stagiaire ${super.info()} stage=${this.stage}`
    }
}

    let S1=new Stagiaire1("ahmed", 20, "Full stack");
    console.log(S1.info());
    
    