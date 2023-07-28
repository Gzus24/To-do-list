
let input = document.querySelector('input');
const btn = document.querySelector('.add');
let ul = document.createElement('ul');
let section = document.querySelector('section');
section.appendChild(ul);
ul.classList.add('ul')

btn.addEventListener('click', addList);

function addList(){
    const inputVal = document.querySelector('.input').value;
    let li = document.createElement('li');
    ul.appendChild(li);
    li.classList.add('li');
    li.textContent = inputVal;
    let odd = document.querySelectorAll('.li:nth-child(odd)');
    odd.forEach(e => e.style.background = '#001C30');
        li.onclick =()=> {
            ul.removeChild(li);
         }
}