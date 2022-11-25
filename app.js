// Add Close btn to each to do list element
let myLi=document.querySelectorAll("li");
for(var i=0 ; i<myLi.length;i++){
    let span=document.createElement("span");
    let text=document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(text);
    myLi.appendChild(span);
}
// click on close btn to hide the list item
let close=document.getElementsByClassName("close");
for(var i=0;i<close.length;i++){
    close[i].onclick=function(){
        let div=this.parentElement;
        div.style.display="none";
    }
}
// Add checked when click on an list element

let list = document.querySelector('ul');
list.addEventListener('click',function(ev){
    if(ev.target.tagName==='LI'){
        ev.target.classList.toggle('checked');
    }
},false); 

// create a list item when clicking on the add btn
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  
  }
// create a list item when hit enter
document.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      newElement();
    }
  }); 