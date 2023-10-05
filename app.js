const input = document.querySelector('.input');
const addButton = document.querySelector('.btn');
const list = document.querySelector('ul');

addButton.onclick = addItem;
input.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    addItem();
  }
});

window.addEventListener('load', function() {
  const savedItems = localStorage.getItem('items');
  if (savedItems) {
    list.innerHTML = savedItems;
    attachDeleteListeners();
    attachCompleteListeners();
  }
});

function addItem() {
  let inputValue = input.value.trim();
  if (inputValue !== '') {
    inputValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    const newItem = document.createElement('li');
    newItem.innerHTML = `${inputValue} <button class="delete">x</button>`;
    list.appendChild(newItem);
    input.value = '';
    input.focus();
    saveItemsToLocalStorage();
    attachDeleteListeners();
    attachCompleteListeners();
  }
}

function saveItemsToLocalStorage() {
  localStorage.setItem('items', list.innerHTML);
}

function attachDeleteListeners() {
  const deleteButtons = document.querySelectorAll('.delete');
  deleteButtons.forEach(function(button) {
    button.onclick = function() {
      button.parentElement.remove();
      saveItemsToLocalStorage();
    };
  });
}

function attachCompleteListeners() {
  const items = document.querySelectorAll('li');
  items.forEach(function(item) {
    item.onclick = function() {
      item.classList.toggle('completed');
      saveItemsToLocalStorage();
    };
  });
}