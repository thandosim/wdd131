const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const li = document.createElement('li');
const deleteButton = document.createElement('button');

button.addEventListener("click", function() {
    if (input.value.trim() !== '') {
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        input.value = '';
        input.focus(); // to return focus to the inout so that the user can go directly to enter then next chapter.
    } else {
        input.focus();        
    }
});

deleteButton.addEventListener('click', function() {
    list.removeChild(li);
    input.focus();
});