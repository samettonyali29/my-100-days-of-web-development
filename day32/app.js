let age = 34;
let userName = "Samet";
let hobbies = ["Sports", "Cooking", "Reading"];
let job = {
    title: "Developer",
    place: "Gümüşhane",
    salary: 20000
};

let totalAdultYears;
function calculateAdultYears(userAge){
    return userAge - 18
}

totalAdultYears = calculateAdultYears(age);
alert(totalAdultYears)

age = 45;
totalAdultYears = calculateAdultYears(age);
alert(adultYears)

let person = {
    name: "Samet",
    greet() {
        alert("Hello!");
    }
};

person.greet();