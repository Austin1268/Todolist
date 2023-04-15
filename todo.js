var BtnSubmit = document.getElementById('btnsub');
BtnSubmit.addEventListener("click", addtask);  


var Btnaddborder = document.getElementById('btnewborder');

Btnaddborder.addEventListener("click",createborder );


function createborder() {
    var borderframe = document.createElement('div');
    borderframe.setAttribute('id', 'border-style');
    var parentElement = document.getElementById('borderframe');
    var todolist = document.querySelector('#ListBorder');
    borderframe.appendChild(todolist);
 
    parentElement.appendChild(borderframe);
}

function addtask() {
    if (IPTtext.value == "") {
        alert("請輸入代辦事項!")
    } else {
        var addBox = document.getElementById('addlist'); 
        var createli = document.createElement('li');
        var BtnDelete = document.createElement('button');
        var ADDlabel = document.createElement('label');

        BtnDelete.innerText = "刪除";  
        BtnDelete.addEventListener('click', function () {
            addBox.removeChild(createli);    
        });

        ADDlabel.innerText = IPTtext.value;

        addBox.append(createli);
        ADDlabel.append(BtnDelete);
        createli.prepend(ADDlabel);
    };

};