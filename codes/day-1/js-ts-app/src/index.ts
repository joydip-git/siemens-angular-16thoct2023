//1. object-literal syntax
/*
var trainerObj = {
    trainerName: 'joydip',
    id: 1,
    subject: 'Angular',
    show: function () {
        return `
            Name:${this.trainerName},
            Id:${this.id}, 
            Subject:${this.subject}
        `
    }
}
*/
//2. constructor function
/*
function trainer(name: string, id: number, subject: string) {
    this.trainerName = name
    this.trainerId = id
    this.trainerSubject = subject
    this.show = function () {
        return `
            Name:${this.trainerName},
            Id:${this.trainerId}, 
            Subject:${this.trainerSubject}
        `
    }
}

const joydipTrainer = new trainer('joydip', 1, 'Angular')
*/

//3. class, constructor, extends and super keywords

class Person {
    _name: string;
    _id: number;
    constructor(_name: string, _id: number) {
        this._name = _name
        this._id = _id
    }
    show(): string {
        return `${this._name}, ${this._id}`
    }
}
class Trainee extends Person {

    _project: string;
    constructor(_name: string, _id: number, _project: string) {
        super(_name, _id)
        this._project = _project
    }
    show(): string {
        return `${super.show()}, ${this._project}`
    }
}
class Trainer extends Person {
    //all memnbers are by default public

    /*
    private _trainerName: string;
    private _trainerId: number;
    private _trainerSubject: string;

    constructor(_trainerName: string, _trainerId: number, _trainerSubject: string) {
        this._trainerName = _trainerName
        this._trainerId = _trainerId
        this._trainerSubject = _trainerSubject
    }*/

    constructor(_name: string, _id: number, public _trainerSubject: string) {
        super(_name, _id)
    }

    /*
    get trainerName() {
        return this._trainerName
    }
    set trainerName(value: string) {
        this._trainerName = value
    }
    get trainerId() {
        return this._trainerId
    }
    set trainerId(value: number) {
        this._trainerId = value
    }
    get trainerSubject() {
        return this._trainerSubject
    }
    set trainerSubject(value: string) {
        this._trainerSubject = value
    }
    */
    show() {
        return `${super.show()}, ${this._trainerSubject}`
    }
}

const anilTrainer = new Trainer("Anil", 2, 'React JS')
console.log(anilTrainer._name)
anilTrainer._trainerSubject = 'Node JS'

console.log(anilTrainer.show())