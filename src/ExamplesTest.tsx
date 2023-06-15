class Warrior {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    attack() {
        return `${this.name} attack with sword`;
    }
}

class Archer extends Warrior {
    attack() {
        return `${this.name} attack with bow`;
    }
}


export default Archer;