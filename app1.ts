import inquirer from "inquirer";
let friend=  await inquirer.prompt ([{
    name: "name",
    type:"string",
    message:"Enter ur frient name"
}])
if(friend.name=='uzma'|| friend.name=='imran') {
console.log(friend,"is your frient");
} else {
    console.log(friend,"is not your friend")
}