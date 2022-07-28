const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//var p1 = container.createElement("p");
//var text = container.createTextNode("Hey Im red!");
//p1.appendChild(text); 
//var element1 = container.getElementsByTagName("body")[0];
//element1.appendChild(p1);
//container.style.cssText = 'color: red';