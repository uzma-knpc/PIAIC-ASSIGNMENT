//Stripping Names: 
let personName:string="\t UZMA \n"
//name with while space
console.log("' "+ personName + "'")
//name after stripping white space
console.log("'" + personName.trim() +"'")
let sentence:string=`hello my name is  ${personName}`;
console.log("'with backtic \n'",sentence)
//console.log("hello my name is" + personName +) 
//$ (personName)
let sentence1:string="hello my name is" +
personName +
".\n\n" + 
"bye.";
console.log("'wihout backtick and deouble eneter\n'",sentence1)