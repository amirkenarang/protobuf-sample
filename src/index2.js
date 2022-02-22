const Schema = require("./employees_pb");
const fs = require("fs");

const hussein = new Schema.Employee();
hussein.setId(1001);
hussein.setName("Hussein");
hussein.setSalary(1001);

const ahmed = new Schema.Employee();
ahmed.setId(1002);
ahmed.setName("Ahmed");
ahmed.setSalary(9000);

const rick = new Schema.Employee();
rick.setId(1003);
rick.setName("Rick");
rick.setSalary(5000);

const employees = new Schema.Employees();
employees.addEmployees(hussein);
employees.addEmployees(ahmed);
employees.addEmployees(rick);

const binary = employees.serializeBinary();

console.log("binary: " + binary);
fs.writeFileSync("binary_data", binary);

const employees2 = Schema.Employees.deserializeBinary(binary);
console.log("deserializeBinary: ", employees2.toString());
