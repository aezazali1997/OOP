export class Person {
 
    private personality:string;
    constructor(){
        this.personality="Mystery";
    }
    AskQuestion(answer:number){
        switch(answer){
            case 1: this.personality='Extravert'; break;
            case 2: this.personality='Introvert'; break;
            default: this.personality='you are still a mystery'; break;
            
        }
    }
    GetPersonality():string{
        return this.personality;
    }
}