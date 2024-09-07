let manager=document.querySelector('.manager');
let manager_name=document.querySelector('.manager_name');
let emploeey=document.querySelector('.emploeey');
let emploeey_name=document.querySelector('.emploeey_name');
manager.addEventListener('click',()=>{
    manager.classList.add('active');
    manager_name.classList.add('active_color');
    emploeey.classList.remove('active');
    emploeey_name.classList.remove('active_color');
})
emploeey.addEventListener('click',()=>{
    emploeey.classList.add('active');
    emploeey_name.classList.add('active_color');
    manager.classList.remove('active');
    manager_name.classList.remove('active_color');
})