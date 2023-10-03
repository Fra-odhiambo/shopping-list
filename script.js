function addItem() {
    const itemText = document.getElementById('item').value;
    if (itemText.trim() === '') {
      alert('Please enter an item.');
      return;
    }
  
    const shoppingList = document.getElementById('shopping-list');
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      ${itemText}
      <button onclick="removeItem(this)">Remove</button>
    `;
    shoppingList.appendChild(listItem);
  
    document.getElementById('item').value = '';
  }
  
  function removeItem(button) {
    const listItem = button.parentElement;
    const shoppingList = document.getElementById('shopping-list');
    shoppingList.removeChild(listItem);
  }