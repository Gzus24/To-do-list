
function Todo (){
    const input = document.querySelector('input');
    const btn = document.querySelector('.add');
    const ul = document.createElement('ul');
    const section = document.querySelector('section');
    section.appendChild(ul);

    this.setTask = function(){
        btn.onclick =()=>{
            let chore = input.value
            let li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = chore;
                li.onclick = ()=>{
                    ul.removeChild(li);
                }
                this.setOddColor()
        };
        }
    
        this.setOddColor = function(){
            let oddLi = document.querySelectorAll('li:nth-child(odd)');
            oddLi.forEach(e => e.style.background = '#001C30')
        }
        
    }

let list = new Todo();
list.setTask();