let btn = document.querySelector(".btn");
btn.addEventListener("click", add_Todo);

function add_Todo() {
    let text = document.querySelector(".input").value;
    let todos = document.querySelector(".todos");
    if (text) {
        let newElement = document.createElement("div");
        newElement.textContent = text;
        newElement.classList.add("todo_item")
        todos.appendChild(newElement);  
        document.querySelector(".input").value = "";
    }
}
