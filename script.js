const contents=document.querySelectorAll('.content')
const listItems=document.querySelectorAll('nav ul li')


listItems.forEach((item, idx)=>{
    item.addEventListener('click',()=>{
        hideAllcontents()
        hideAllItems()

        item.classList.add('active')
       contents[idx].classList.add('show')
    })
})


function hideAllcontents(){
    contents.forEach(content => content.classList.remove('show'))
}

function hideAllItems(){
    listItems.forEach(item =>item.classList.remove('active'))
}