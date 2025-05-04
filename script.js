console.log('connected');

// single element traverse

const title = document.getElementById('title');
console.log(title);
title.innerText = 'js dom power showing by text change';
title.style.color = 'red';

const title2 = document.querySelector('#title-2');
console.log(title2);
title2.textContent = 'text change by textContext';
title2.style.color = 'green';

// querySelector always select the 1st item only
const li = document.querySelector('.li-items');
console.log(li);
console.log(li.innerText);
li.style.backgroundColor = 'teal';

const p = document.querySelector('p');
console.log(p);
console.log(p.textContent);
p.style.backgroundColor = 'yellow';