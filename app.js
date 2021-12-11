
let list=document.querySelectorAll('.navigation li');
function activeLink(){
    list.forEach((item)=>
    item.classList.remove('hoverd'));
    this.classList.add('hoverd');
    }
list.forEach((item)=>
item.addEventListener('mouseover',activeLink));