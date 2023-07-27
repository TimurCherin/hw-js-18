const users = [
    { name: "Timur", age: 13, eyeColor: "blue", gender: "male", isActive: true, email: "wwwtima.cherin@gmail.com" },
    { name: "Dany", age: 12, eyeColor: "brown", gender: "male", isActive: false, email: "wwwdany.kyruha@gmail.com" },
    { name: "Yulia", age: 39, eyeColor: "grey", gender: "female", isActive: true, email: "wwwyulia.cherina@gmail.com" },
    { name: "Diana", age: 10, eyeColor: "green", gender: "female", isActive: false, email: "wwwdiana.cherina@gmail.com" },
    { name: "Artem", age: 21, eyeColor: "blue", gender: "male", isActive: true, email: "wwwartem.ivahnenko@gmail.com" },
];
const names = users.map(user => user.name);
console.log(names);
const eyeColors = users.filter(user => user.eyeColor === "blue");
console.log(eyeColors);
const genders = users.filter(user => user.gender === "male").map(user => user.name);
console.log(genders);
const notActive = users.filter(user => user.isActive === false).map(user => user.name);
console.log(notActive);
const findEmail = users.find(user => user.email === "wwwtima.cherin@gmail.com").name;
console.log(findEmail);
const filterAge = users.filter(user => user.age > 0 && user.age < 18).map(user => user.name);
console.log(filterAge);
