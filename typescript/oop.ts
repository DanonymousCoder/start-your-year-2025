class Animal {
	public name: string;

	constructor(name: string | undefined) {
		if (!name) {
			this.name = "Unknown"
		} else {
			this.name = name
		}
	}
}

const newAnimal = new Animal(undefined);
console.log(newAnimal);