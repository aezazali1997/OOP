import {Person} from './Person'
import readline from 'readline-sync';
import {Student} from './Student';

const main = ()=>{
    let input;

    input = readline.question('Type 1 if you would like to talk to others\nType 2 if you would like to keep to yourself\n')
    const person = new Person();

    person.AskQuestion(+input);

    console.log('you are : ',person.GetPersonality())


    let name = readline.question('What is your name?');
    const student = new Student();
    student.Name=name;

    console.log('Your name is ',student.Name + ' and your personality type is ',student.GetPersonality());

}

main()