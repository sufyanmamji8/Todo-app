// let input = document.getElementById('todo');
// let text = document.querySelector('.text');
// let deleteAllButton = document.getElementById('btn2');

// function add() {
//     if (input.value === "") {
//         alert('please enter a todo to continue!');
//     } else {
//         let newElement = document.createElement("li");
//         newElement.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i> <i class="fa-regular fa-pen-to-square"></i>`;
//         text.appendChild(newElement);
//         input.value = "";
        

//         newElement.querySelector('.fa-trash').addEventListener('click', function () {
//             newElement.remove();

      
//         });
        
//         newElement.querySelector('.fa-pen-to-square').addEventListener('click', function () {
//             let edit = prompt('Edit your task or todo:', newElement.firstChild.textContent.trim());
//             if (edit !== null && edit !== "") {
//                 newElement.firstChild.textContent = edit + " ";
       
    
        
//     })
// }


// function deleteAllTodos() {
//     text.innerHTML = "";
// }

// deleteAllButton.addEventListener('click', deleteAllTodos);

let input = document.getElementById('todo');
let text = document.querySelector('.text');
let deleteAllButton = document.getElementById('btn2');

function add() {
    if (input.value === "") {
        alert('please enter a todo to continue!');
    } else {
        let newElement = document.createElement("li");
        newElement.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i> <i class="fa-regular fa-pen-to-square"></i>`;
        text.appendChild(newElement);
        input.value = "";
        
        newElement.querySelector('.fa-trash').addEventListener('click', function () {
            newElement.remove();
        });
        
        newElement.querySelector('.fa-pen-to-square').addEventListener('click', function () {
            let edit = prompt('Edit your task or todo:', newElement.firstChild.textContent.trim());
            if (edit !== null && edit !== "") {
                newElement.firstChild.textContent = edit + " ";
            }
        });
    }
}

function deleteAllTodos() {
    text.innerHTML = "";
}

deleteAllButton.addEventListener('click', deleteAllTodos);

