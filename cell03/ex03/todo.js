window.onload = function() {
    document.getElementById('ft_list').innerHTML = Load();
}

function createList() {
    let newtext = prompt("Enter new task");
    if (newtext != "") {
        makeTask(newtext);
        Save();
    }
}

function makeTask(nt) {
    let child = document.createElement('div');
    child.id = "list";
    child.setAttribute("onclick", "deleteList(this)");
    child.textContent = nt;
    document.getElementById('ft_list').insertBefore(child, document.getElementById('ft_list').childNodes[0]);
}

function deleteList(ob) {
    if (confirm("Confirm removing task")) {
        ob.remove();
        Save();
    }
}

function Save() {
    const tasks = document.getElementById('ft_list').innerHTML;
    localStorage.setItem('taskList', tasks);
}

function Load() {
    return localStorage.getItem('taskList') || "";
}