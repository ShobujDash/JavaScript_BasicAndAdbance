// document.createElement()
// append
// prepend
// remove

// const todoList = document.querySelector(".todo-list");


// const newTodoItem = document.createElement("li")
// // const newTodoItemText = document.createTextNode("Teach Students")
// // newTodoItem.append(newTodoItemText);
// newTodoItem.textContent = "Teach Students"
// // todoList.append(newTodoItem)
// todoList.prepend(newTodoItem)

// console.log(newTodoItem)







// const todo1 = document.querySelector(".todo-list li")
// todo1.remove()
// console.log(todo1)






// before
// after
const newTodoItem = document.createElement("li")
newTodoItem.textContent = "Teach Students"
const todoList = document.querySelector(".todo-list");
// todoList.before(newTodoItem)
todoList.after(newTodoItem)












