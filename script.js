
const input = document.querySelector('input');
const btn = document.querySelector('.add');
const ul = document.createElement('ul');
const section = document.querySelector('section');
section.appendChild(ul);

const toDo = {
    setTask: function(chore){
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = chore;
            li.onclick = ()=>{
                ul.replaceChild(li);
            }
    },
    setOddColor: function(){
        let oddLi = document.querySelectorAll('li:nth-child(odd)');
        oddLi.forEach(e => e.style.background = '#001C30')
    }
}

btn.onclick = ()=>{
    const inputVal = input.value;
    toDo.setTask(inputVal);
    toDo.setOddColor();
}