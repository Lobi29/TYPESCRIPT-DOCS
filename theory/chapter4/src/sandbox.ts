// Class

class Person {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}


const person = new Person("chao lobi");

console.log(person.getName());

