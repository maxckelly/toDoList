storage = [];

localStorage.setItem('todos', JSON.stringify(storage));
const data = JSON.parse(localStorage.getItem('todos'));

let form = document.getElementById('to-do-form');
let submitButton = document.getElementById("to-do-submit-button");
let totalListItems = document.getElementById("total-list-items");
let crossIcon = document.getElementById("delete-icon");

// The count is adding an id that increments when a todo is created.
let count = 0;

let newToDoFunction = () => {
  let newToDoInput = document.createElement("li");
  let newToDoDate = document.createElement("p");

  newToDoInput.innerHTML += form[0].value;
  newToDoDate.innerHTML += form[1].value;
  crossIcon.innerHTML += `<i class="fas fa-times-circle", style="cursor:pointer"></i>`;

  newToDoInput.setAttribute("id", "list-items-" + count);
  
  document.querySelector(".list-item").appendChild(newToDoInput);
  document.querySelector(".list-item").appendChild(newToDoDate);
  document.querySelector(".list-item").appendChild(crossIcon);
};


let total = () => {
  if (storage.length >= 2) {
    totalListItems.innerHTML = `You have a total of ${storage.length} todos left to complete`
  } else {
    totalListItems.innerHTML = `You have a total of ${storage.length} todo left to complete`
  };
};


submitButton.addEventListener("click", function(event) {
  
  newToDoFunction();
  count ++;

  // The below combines the name and the date together in the one array
  input = form[0].value + ":" + " " + form[1].value;

  // input is then pushed into the toDo array
  storage.push(input);
  localStorage.setItem('todos', JSON.stringify(storage));
  // The below calls the total function displaying and handling the total text.
  total();

  data.forEach(item => {
    newLI(item)
  })
  
  // Resets the form back to default
  event.preventDefault();
  form.reset();
});

crossIcon.addEventListener("click", function(event) {

  let list = document.querySelector(".list-items");
  let toDo = document.querySelector(".list-item");
  
  list.removeChild(toDo);
  total();
  event.preventDefault();
});


