//Name Cases: Store a person’s name in a variable, and then 
//print that person’s name in lowercase, uppercase, and titlecase.
const Name2:string="uzma"
console.log("LowerCase;",Name2.toLowerCase())
console.log("UpperCase;",Name2.toUpperCase())
Name2.replace(/\b\w/g,Name2.toUpperCase())
console.log("TitleCase;",Name2)

