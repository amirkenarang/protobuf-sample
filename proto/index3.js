const Schema = require("./person_pb");

const person = new Schema.Person();
person.setFirstName("Amir");
// ... Add other properties

console.log("First Name is: " + person.getFirstName());
