const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#input-value");
const addTodo = document.querySelector("#todo-submit");
const todoLists = document.querySelector("#todo-list");

const showMsgAdd = document.createElement("p");
showMsgAdd.classList.add("show-msg-add");

const showMsgDel = document.createElement("p");
showMsgDel.classList.add("show-msg-del");

const showMsgIn = document.createElement("p");
showMsgIn.classList.add("show-msg-in");


const addTodoElement = (event) => {
    event.preventDefault();


    if (todoInput.value === "") {

        showMsgIn.innerHTML = "Please Write Something";
        showMsgIn.style.display = "block";
        todoForm.appendChild(showMsgIn);
        setTimeout(() => {
            showMsgIn.innerHTML = "";
            showMsgIn.style.display = "none";
        }, 1000)

    } else {
        const listElement = document.createElement("li");
        listElement.innerHTML = `
    <span> ${todoInput.value} </span>
    <span> <button class="btn" id="deleteButton"> <i class="fa fa-trash"> </i> </button> </span>
  `;
        listElement.classList.add("list-style");
        todoLists.appendChild(listElement);
        showMsgAdd.innerHTML = "Todo added successfully";
        showMsgAdd.style.display = "block";
        todoForm.appendChild(showMsgAdd);
        setTimeout(() => {
            showMsgAdd.innerHTML = "";
            showMsgAdd.style.display = "none";
        }, 1000);

        todoInput.value = "";


        const deletTodo = listElement.querySelector("#deleteButton");

        deletTodo.addEventListener("click", () => {
            listElement.remove();
            showMsgDel.innerHTML = "Todo deleted successfully";
            showMsgDel.classList.add("show-msg-del");
            showMsgDel.style.display = "block";
            todoForm.appendChild(showMsgDel);

            setTimeout(() => {
                showMsgDel.innerHTML = "";
                showMsgDel.style.display = "none";
            }, 1000);
        });

    }
}


todoForm.addEventListener("submit", addTodoElement);
