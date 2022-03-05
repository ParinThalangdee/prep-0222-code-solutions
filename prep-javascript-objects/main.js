const person = { firstName: 'Parin', lastName: 'Thalangdee', hobby: 'cars' };
console.log('person: ', person);
var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's full name is:", fullName);
person.job = 'student';
console.log("The person's current job is:", person.job);
person.previousJob = 'sales';
console.log("The person's previous job is:", person.previousJob);
console.log('The complete person object:', person);
