toDoArray = [];

let form = document.getElementById('to-do-form');
let submitButton = document.getElementById("to-do-submit-button");
let totalListItems = document.getElementById("total-list-items");

// The count is adding an id that increments when a todo is created.
let count = 0;

let newToDoFunction = () => {
  let newToDoInput = document.createElement("li");
  let newToDoDate = document.createElement("p");

  newToDoInput.innerHTML += form[0].value;
  newToDoDate.innerHTML += form[1].value;

  newToDoInput.setAttribute("id", "list-items-" + count);

  document.querySelector(".list-item").appendChild(newToDoInput);
  document.querySelector(".list-item").appendChild(newToDoDate);
};

let total = () => {
  if (toDoArray.length >= 2) {
    totalListItems.innerHTML = `You have a total of ${toDoArray.length} todos left to complete`
  } else {
    totalListItems.innerHTML = `You have a total of ${toDoArray.length} todo left to complete`
  };
};

submitButton.addEventListener("click", function(event) {
  
  newToDoFunction();
  count ++;

  // The below combines the name and the date together in the one array
  input = form[0].value + ":" + " " + form[1].value;

  // input is then pushed into the toDo array
  toDoArray.push(input);
  let storage = localStorage.setItem("toDos", JSON.stringify(toDoArray));

  // The below calls the total function displaying and handling the total text.
  total();
  
  // Resets the form back to default
  event.preventDefault();
  form.reset();
});

