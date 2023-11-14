function CountListGroupItems() {
  var elements = document.getElementsByClassName('list-group-item');
  return elements.length;
}

function UpdateGroceryCount() {
    var count = CountListGroupItems();
    var groceryCount = document.getElementById('grocery-count');
    groceryCount.innerHTML = count;

}

function AddGroceryItem() {
    var item = document.getElementById('new-grocery-item').value;
    var list = document.getElementById('grocery-list');
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(item));
    list.appendChild(li);
    
    UpdateGroceryCount();
}

function ToggleLightBulb() {
    var s = document.getElementById("switch");
    var lightbulb = document.getElementById("lightbulb");
    if (s.checked) {
        lightbulb.style.color = "yellow";
    } else {
        lightbulb.style.color = "white";
    }
}