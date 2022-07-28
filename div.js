//data from index
const container = document.querySelector('#container');

//content
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

//p1
const p1 = document.createElement('p');
p1.classList.add('p');
p1.textContent = 'Hey Im red!';
p1.style.cssText = 'red';
content.appendChild(p1);

// h3
const h3_1 = document.createElement('h3');
h3_1.textContent = 'Im blue h3!';
h3_1.style.cssText = 'blue';
content.appendChild(h3_1);
// div
const div1 = document.createElement('div');
div1.setAttribute('style', 'background: pink;border:1px solid black;');
div1.classList.add('content'); 
content.appendChild(div1);
    //h1

    var h1_1 = document.createElement("div"); 
    div1.appendChild(h1_1);
    //p
    var p2 = document.createElement("p");
    div1.appendChild(p2);
    h1_1.textContent = 'Im a div!';
    p2.textContent = 'ME TOO!';

