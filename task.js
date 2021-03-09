const menu = `TASK MANAGER 

What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"MEW" - add Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;

const tasks =[`Charge Macbook`, `Master Javascript`];

let showTasks = "";

let userInput = prompt(menu);

while(userInput !=="CLOSE"){
    if (userInput === "TASKS"){
        for (task of tasks){
            showTasks += `${task}\n`;
        }
        alert(showTasks);
        showTasks = "";
    } else if(userInput === "NEW"){
        newTask =prompt(`Please enter the new task:`);
        alert(`"${newTask}" has been added!`);
        tasks.push(newTask)
    } 
    userInput = prompt(menu);
    
}

alert(`Thank you for using Task Manager`);