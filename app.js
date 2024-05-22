let input = document.getElementById('todo')
let text = document.querySelector('.text')

function add(){
    if(input.value === ""){
        alert('please enter a todo to continue!')
    }else{
        let newElement = document.createElement("li")
        newElement.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newElement)
        input.value = ""
        newElement.querySelector('i').addEventListener('click' , function remove() {
            newElement.remove()
            
        })
    }
}


