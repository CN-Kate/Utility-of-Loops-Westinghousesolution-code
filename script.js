

let students = ["Damien", "Kayla", "Manny", "Sariyah", "Yahaida", "Alexandra", "Jasmine", "Jeremy", "Angel", "Aaron"]

// INSTRUCTIONS: Below this line, use array index positions and bracket notation to print EACH of the 10 names in the students array above to the console. 


// console.log(students[0])
// console.log(students[1])
// console.log(students[2])
// console.log(students[3])
// console.log(students[4])
// console.log(students[5])
// console.log(students[6])
// console.log(students[7])
// console.log(students[8])
// console.log(students[9])


//CODE ALONG Solution:

for (let student of students) {
  console.log(student)
}

//CODE IT SOLO: Can you use a for of loop to pring "Hi there [student name]!" to the console for each name? Hint: you'll need to use string concatenation. 


for (let student of students) {
  console.log("Hi there " + student+ "!")
}