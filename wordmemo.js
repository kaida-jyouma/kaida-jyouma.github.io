var bk = 0;
var lst = localStorage;
function keyact(){
    switch (event.keyCode) {
        case 13:
            if (bk === 17 || bk === 16){
                wordset();
            }else{
                search();
            }
            break;
        default:
            none;
    }
    bk = event.keyCode;
}
function wordset(){
    if (document.getElementById('setword').value === ""){
        window.alert("fill out form...");
    }else{
        lst.setItem(document.getElementById('setword').value, document.getElementById('setdes').value);
    }document.getElementById('setword').value = "";
    document.getElementById('setdes').value = "";
    
}
/*function search(){
    var sword = document.getElementById('findword').value;
    localstorage.getItem(sword);
*/
function search(){
    var sword = document.getElementById('findword').value;
    if (sword === ""){
        sessionStorage.clear();
    }else{
        sessionStorage.setItem("src", sword);
    }
}
function none(){
    
}