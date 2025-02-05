window.onload = function() {
    document.getElementById('ft_list').innerHTML = Load();
}

function createList() {
    let newtext = prompt("Enter new task");
    if (newtext != null && newtext != "") {
      makeTask(newtext);
      Save();
    }
}
function makeTask(nt) {
    let child = document.createElement('div');
    child.id = "list";
    child.setAttribute("onclick", "deleteList(this)");
    child.textContent = nt;
    document.getElementById('ft_list').insertBefore(child,document.getElementById('ft_list').childNodes[0]);
}
function deleteList(ob) {
    if(confirm("Confirm removing task")) {
        ob.remove();
        Save();
    }
}
  
function Save() {
    document.cookie = "list=" + encodeURIComponent(document.getElementById('ft_list').innerHTML);
}
function Load() {
    let raw_extract = document.cookie.split(';');
    let mid_extract = raw_extract[0];
    return decodeURIComponent(mid_extract.substring(5));
}