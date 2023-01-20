import {Person} from './Person';

export class Student extends Person{
    public name:string;

    constructor(){
        super()
        this.name="";
    }
    get Name():string{
        return this.name;
    }
    set Name(value:string){
        this.name=value;
     }
}