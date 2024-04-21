#! usr/bin/env node

import inquirer from "inquirer";

let todo: string[] = [];
let condition = "Add";

console.log("\n*****Todo CRUD App*****\n");

while (condition != "Exit") {
  let askTodo = await inquirer.prompt([
    {
      name: "options",
      type: "list",
      choices: ["Add", "Delete", "Update", "Read", "Exit"],
      message: "Choose the Action to be Performed ",
    },
  ]);

  condition = askTodo.options;

  if (condition == "Add") {
    let addNew = await inquirer.prompt([
      {
        name: "newTodo",
        type: "input",
        message: "Enter Your Todo: ",
      },
    ]);

    todo.push(addNew.newTodo);
    console.log("Added Sucessfully");
    console.log(todo);
    console.log("\n\n");
  } else if (condition == "Update") {
    let update = await inquirer.prompt([
      {
        name: "previous",
        type: "input",
        message: "Enter todo that needs to be updated: ",
      },
      {
        name: "update",
        type: "input",
        message: "Enter new todo: ",
      },
    ]);
    let index = todo.indexOf(update.previous);
    if (index != -1) {
      todo[index] = update.update;
      console.log(todo);
      console.log("\n\n");
    } else {
      console.log("Todo not found!\n\n");
    }
  } else if (condition == "Delete") {
    let deleteTodo = await inquirer.prompt([
      {
        name: "deleteTodo",
        type: "input",
        message: "Enter todo that needs to be deleted: ",
      },
    ]);
    let index = todo.indexOf(deleteTodo.deleteTodo);
    if (index != -1) {
      todo.splice(index, 1);
      console.log("Todo Deleted!");
      console.log(todo);
      console.log("\n\n");
    } else {
      console.log("Todo not found!\n\n");
    }
  } else if (condition == "Read") {
    console.log(todo);
    console.log("\n\n");
  }
}
