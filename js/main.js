// let dropdown_toggel_home=document.querySelector('.dropdown_toggel_home');
// // let dropdown_home=document.querySelector('.dropdown_home');
// dropdown_toggel_home.addEventListener('click',()=>{
//         if (dropdown_home.className==="dropdown_home") {
//             dropdown_home.classList.add('dropdown_active_home');
//         }else{
//             dropdown_home.classList.remove('dropdown_active_home');
//         }
// });

// let dropdown_toggel_forms=document.querySelector('.dropdown_toggel_forms');
// // let dropdown_forms=document.querySelector('.dropdown_forms');
// dropdown_toggel_forms.addEventListener('click',()=>{
//     if (dropdown_forms.className==="dropdown_forms") {
//         dropdown_forms.classList.add('dropdown_active_forms');
//     }else{
//         dropdown_forms.classList.remove('dropdown_active_forms');
//     }
// });


// let dropdownToggel=document.querySelectorAll('.dropdownToggel');
// let dropdown=document.querySelectorAll('.dropdown');
// dropdownToggel.forEach((value,index)=>{
//     value.addEventListener('click',()=>{
//         dropdown.forEach((item)=>)
//         if(dropdown.item(index).className==='dropdown'){
//             dropdown.item(index).classList.add('dropdown_active');
//             value.classList.add('dropdown_active_color');
//         }else{
//             dropdown.item(index).classList.remove('dropdown_active');
//             value.classList.remove('dropdown_active_color');
//         }
//     });
// });


// let dropdownToggel = document.querySelectorAll('.dropdownToggel');
// let dropdown = document.querySelectorAll('.dropdown');
// dropdownToggel.forEach((value, index) => {
//     value.addEventListener('click', () => {
// إزالة الفئة النشطة من جميع العناصر
//         dropdown.forEach((item) => item.classList.remove('dropdown_active'));
//         dropdownToggel.forEach((item) => item.classList.remove('dropdown_active_color'));
// إضافة الفئة النشطة للعنصر الذي تم النقر عليه
//         if(dropdown.item(index).className==='dropdown'){
//             dropdown.item(index).classList.add('dropdown_active');
//             value.classList.add('dropdown_active_color');
//         }else{
//             dropdown.item(index).classList.add('dropdown');
//             dropdown.item(index).classList.remove('dropdown_active');
//             value.classList.remove('dropdown_active_color');
//         }
//     });
// });

// dropDown toggel dashboard sidebar
// let dropdownToggel = document.querySelectorAll('.dropdownToggel');
// let dropdown = document.querySelectorAll('.dropdown');
// let svg_down=document.querySelectorAll('.svg_down');
// dropdownToggel.forEach((value, index) => {
//     value.addEventListener('click', () => {
//         // التحقق مما إذا كان العنصر نشطًا بالفعل
//         if (dropdown.item(index).classList.contains('dropdown_active')) {
//             dropdown.item(index).classList.remove('dropdown_active');
//             value.classList.remove('dropdown_active_color');
            
//         } else {
//             // إزالة الفئة النشطة من جميع العناصر
//             dropdown.forEach((item) => item.classList.remove('dropdown_active'));
//             dropdownToggel.forEach((item) => item.classList.remove('dropdown_active_color'));
//             // إضافة الفئة النشطة للعنصر الذي تم النقر عليه
//             dropdown.item(index).classList.add('dropdown_active');
//             value.classList.add('dropdown_active_color');
//         }
//     });
// });


let dropdownToggel = document.querySelectorAll('.dropdownToggel');
let dropdown = document.querySelectorAll('.dropdown');
dropdownToggel.forEach((value, index) => { 
    value.addEventListener('click', () => {
        if (dropdown.item(index).classList.contains('dropdown_active')) {
            dropdown.item(index).classList.remove('dropdown_active');
            value.classList.remove('dropdown_active_color');
            let currentSvg = value.querySelector('.svg_down');
            if (currentSvg) {
                currentSvg.remove();
            }
            let newSvg = document.createElement('i');
            newSvg.setAttribute('class', 'bi bi-chevron-down svg_down');
            value.appendChild(newSvg);
        } else {
            dropdown.forEach((item) => item.classList.remove('dropdown_active'));
            dropdownToggel.forEach((item) => {
                item.classList.remove('dropdown_active_color');
                let currentSvg = item.querySelector('.svg_down');
                if (currentSvg) {
                    currentSvg.remove();
                }
                let newSvg = document.createElement('i');
                newSvg.setAttribute('class', 'bi bi-chevron-down svg_down');
                item.appendChild(newSvg);
            });
            dropdown.item(index).classList.add('dropdown_active');
            value.classList.add('dropdown_active_color');
            let currentSvg = value.querySelector('.svg_down');
            if (currentSvg) {
                currentSvg.remove();
            }
            let newSvg = document.createElement('i');
            newSvg.setAttribute('class', 'bi bi-chevron-up svg_down');
            value.appendChild(newSvg);
        }
    });
});


