let storage = localStorage.getItem('todos');

if(!storage){
  localStorage.setItem('todos', JSON.stringify([]));
  storage = localStorage.getItem('todos')
};

storage = JSON.parse(storage)

let form = document.getElementById('to-do-form');
let submitButton = document.getElementById("to-do-submit-button");
let totalListItems = document.getElementById("total-list-items");
let list = document.querySelector(".list-items");
let count = 1;

let newToDoFunction = () => {
  
  let data = JSON.parse(localStorage.getItem("todos"));
  
  data.forEach((todo) => {

    let div = document.createElement('div');

    div.innerHTML = 
    `
    <li>${todo.title}</li>
    <p>${todo.date}</p>
    <i class="fas fa-times-circle delete", style="cursor:pointer", id="todo-${count}"></i>
    `
    console.log(todo)
    div.setAttribute("id", "list-items-" + count);
    count++;
    
    document.querySelector(".list-items").appendChild(div);
  })
};

newToDoFunction();

let total = (array) => {
  if (storage.length >= 2) {
    totalListItems.innerHTML = `You have a total of ${storage.length} todos left to complete`
  } else {
    totalListItems.innerHTML = `You have a total of ${storage.length} todo left to complete`
  };
};

total();

submitButton.addEventListener("click", function(event) {

  // The below grabs the value of the form 
  let input = {
    title: form[0].value,
    date: form[1].value,
    index: count
  };
  
  // input is then pushed into the toDo array
  storage.push(input);
  localStorage.setItem('todos', JSON.stringify(storage));

  // Resets the form back to default
  form.reset();
});


list.addEventListener('click', function (event) {
  let id = event.target.id;

  // target the item div
  let targetItem = event.target.parentElement;

  let idOfTargetItem = targetItem.id;
  // The below is getting the last character off "list-items-" + count
  let indexOfItem  = idOfTargetItem[idOfTargetItem.length -1];

  // Goes through the storage and matches with the id above and returns the object
  let itemInStorage = storage.find( item => {
    item.index === indexOfItem
  })

  // Which is then removes the item from storage. 
  storage.splice(storage.indexOf(itemInStorage), 1)

  localStorage.setItem('todos', JSON.stringify(storage));
});

