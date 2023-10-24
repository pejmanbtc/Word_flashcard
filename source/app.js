
let word = document.getElementById('word');
let mean = document.getElementById('mean');
let btn = document.getElementById('btn');
let table = document.getElementById('vocab');

// Load data from local storage on page load
document.addEventListener('DOMContentLoaded', () => {
    // Check if local storage has data
    if (localStorage.getItem('vocabData')) {
        table.innerHTML = localStorage.getItem('vocabData');
    }
});

btn.addEventListener('click', e => {
    if (word.value && mean.value) {
        // Append data to the table
        table.innerHTML += 
        `<tr>
            <td>${word.value}</td>
            <td>${mean.value}<span class="delete-item">&#10005</span></td>
        </tr>
        `;

        // Save the updated table HTML to local storage
        localStorage.setItem('vocabData', table.innerHTML);

        word.value = '';
        mean.value = '';
    }
    else {
        window.alert('Some fields remained empty!');
    }
});

table.addEventListener('click', e => {
    if (e.target.classList.contains('delete-item')) {
        // Remove the clicked row from the table
        e.target.parentElement.parentElement.style.display = 'none';

        // Update local storage after deletion
        localStorage.setItem('vocabData', table.innerHTML);
    }
});
