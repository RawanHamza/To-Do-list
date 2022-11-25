# Introduction

TO Do list is developed using HTML, CSS, JavaScript. 

#Code

Click the close button to hide the list item:
```
let close=document.getElementsByClassName("close");
for(var i=0;i<close.length;i++){
    close[i].onclick=function(){
        let div=this.parentElement;
        div.style.display="none";
    }
}
```

Check the list item when yoy click it

```
let list = document.querySelector('ul');
list.addEventListener('click',function(ev){
    if(ev.target.tagName==='LI'){
        ev.target.classList.toggle('checked');
    }
},false);
```

To add a list item when you click enter:

```
document.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      newElement();
    }
  }); 
  ```
