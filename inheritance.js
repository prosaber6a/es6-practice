class Parent {
    constructor () {
        this.father = "Schwerznegger";
    }
}

class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
    }
    getFullName() {

        return this.name + " " + this.father;
    }
}

const baby = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby);
console.log(baby.getFullName());
console.log(baby2);