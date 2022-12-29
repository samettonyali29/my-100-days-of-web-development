for (let i = 0; i <10; i++) {
    console.log(i);
}

const users = ['Samet', 'Fulya', 'Tomris'];

for (const user of users) {
    console.log(user);
}

const loggedInUser = {
    name: 'Samet',
    age: 34,
    isAdmin: true
};

for (const propertyName in loggedInUser) {
    console.log(propertyName);
    console.log(loggedInUser[propertyName]);
}