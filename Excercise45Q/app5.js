//Stripping Names: 
var personName = "\t UZMA \n";
//name with while space
console.log("' " + personName + "'");
//name after stripping white space
console.log("'" + personName.trim() + "'");
var sentence = "hello my name is  ".concat(personName);
console.log("'with backtic \n'", sentence);
//console.log("hello my name is" + personName +) 
//$ (personName)
var sentence1 = "hello my name is" +
    personName +
    ".\n\n" +
    "bye.";
console.log("'wihout backtick and deouble eneter\n'", sentence1);
