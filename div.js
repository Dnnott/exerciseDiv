//data from index
const container = document.querySelector('#container');

//content
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

//p1
const p1 = document.createElement('p');
p1.classList.add('p1');
p1.textContent = 'Hey Im red!';
p1.style.cssText = 'color: red;';
content.appendChild(p1);

// h3
const h3_1 = document.createElement('h3');
h3_1.classList.add('h3');
h3_1.textContent = 'Im blue h3!';
h3_1.style.cssText = 'color: blue;';
content.appendChild(h3_1);

// div
const div1 = document.createElement('div');
var div1Style = div1.style;
div1Style.setProperty('border','1px solid black');
div1.style.backgroundColor = 'pink';
div1.classList.add('div1'); 
content.appendChild(div1);

    //h1
    const h1_1 = document.createElement('h1');
    h1_1.classList.add('h1_1');
    h1_1.textContent = 'Im a div!';
    div1.appendChild(h1_1);
    
    //p
    const p2 = document.createElement('p');
    p2.classList.add('p2');
    p2.textContent = 'ME TOO!';
    div1.appendChild(p2);

    h1_1.textContent = 'Im a div!';
    p2.textContent = 'ME TOO!';

