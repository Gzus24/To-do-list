
const input = document.querySelector('input');
const btn = document.querySelector('.add');
const ul = document.createElement('ul');
const section = document.querySelector('section');
section.appendChild(ul);

function ToDo (chore){
    this.chore = chore;

    this.setTask = function(){
        const li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = chore;
        li.onclick =()=>{
            ul.removeChild(li);
        }
    };
    this.setOddColor = function(){
        let odd = document.querySelectorAll('li:nth-child(odd)');
        odd.forEach(e => e.style.background = '#001C30')
    }
}

btn.onclick = ()=>{
    const inputVal = document.querySelector('.input').value;
    let task = new ToDo(inputVal);
    task.setTask();
    task.setOddColor();
}