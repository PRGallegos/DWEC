function fetchCompletedTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos?completed=true')
        .then(response => response.json())
        .then(data => {
            const listaToDo = document.getElementById('todoList');
            listaToDo.innerHTML = '';

            data.forEach((todo, index) => {
                const listItem = document.createElement('li');
                listItem.textContent = todo.title;
                // Retraso para todos los elementos
                listItem.style.animationDelay = `${index * 0.1}s`; 
                listaToDo.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching to do`s:', error));
}
