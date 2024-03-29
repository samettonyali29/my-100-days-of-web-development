const job = {
    title: 'Developer',
    location: 'New York',
    salary: 50000,
};

console.log(new Date().toISOString());

const job2 = {
    title: 'Cook',
    location: 'Gümüşhane',
    salary: 35000,
};

class Job {
    constructor(jobTitle, place, salary) {
        this.title = jobTitle;
        this.location = place;
        this.salary = salary;
    }

    describe() {
        console.log(`I'am a ${this.title}, I work in ${this.location},
         and I earn ${this.salary}`);
    }
}

const developer = new Job('Developer', 'New York', 50000);
const cook = new Job('Cook', 'Gümüşhane', 35000);
console.log(developer);

developer.describe();
cook.describe();