var itemMenu = document.querySelectorAll ('.item-menu')



//Menu Expandir

 var btnExpand = document.querySelector('#btn-expand')

 var menuAside = document.querySelector('.menu-lateral')

 btnExpand.addEventListener('click', function(){
        menuAside.classList.toggle('expandir')
 }
)