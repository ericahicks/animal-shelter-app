export class Dog {
    name: string;
    breed: string;
    age: number;

    constructor(name="Spot", breed="lab", age=3) {
        this.name = name;
        this.breed = breed;
        this.age = age;
    }
}