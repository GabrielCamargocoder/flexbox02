var itemMenu = document.querySelectorAll ('.item-menu')

function selectLink(){
     
    itemMenu.forEach((item) =>
        item.classList.remove('ativo')
    )
        this.classList.add('ativo')

}

itemMenu.forEach((item)=>
    item.addEventListener('click',selectLink)
)

//Menu Expandir

 var btnExpand = document.querySelector('#btn-expand')

 var menuAside = document.querySelector('.menu-lateral')

 btnExpand.addEventListener('click', function(){
        menuAside.classList.toggle('expandir')
 }
)