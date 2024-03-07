// Get references to HTML elements
const inputBx = document.getElementById('inputBx');
const list = document.getElementById('list');

// Function to add a new task
function addItem() {
    // Get the task from the input field
    const taskText = inputBx.value.trim();

    // Check if the input field is not empty
    if (taskText !== '') {
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Add click event listener to mark task as done
        listItem.addEventListener('click', function() {
            this.classList.toggle('done');
        });

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.addEventListener('click', function(event) {
            // Prevent the click event from bubbling up to the list item
            event.stopPropagation();
            // Remove the list item
            listItem.remove();
        });

        // Append the delete button to the list item
        listItem.appendChild(deleteButton);

        // Append the new list item to the list
        list.appendChild(listItem);

        // Clear the input field
        inputBx.value = '';
    }
}

// Event listener for adding a task when Enter key is pressed
inputBx.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addItem();
    }
});
