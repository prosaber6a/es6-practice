const firstName = "Justin";
const lastName = "TimberLake";
const age = 10;
const fullName = firstName + " " + lastName + " is a good boy and he will be " + 10+10 + " years old after 10 years.";
console.log(fullName);

// Template String
const fullName2 = `${firstName} ${lastName} is a good boy and he will be ${10+10} years old after 10 years.`;
console.log(fullName2);

const multiline = "I love you\n"
                    + "I miss you\n"
                    + "I need you";
console.log(multiline);

const multiline2 = `    I love you
I miss you
I need you`;
console.log(multiline2);