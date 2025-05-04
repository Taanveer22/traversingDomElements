console.log('connected 2');

// multiple element traverse via getElementsByClassName
const items = document.getElementsByClassName('li-items');
console.log(items);
console.log(typeof items);
console.log(Array.from(items));

for(let i = 0 ; i < items.length; i++){
    console.log(i);
    console.log(items[i]);
    console.log(items[i].textContent);

    let element = items[i];
    element.innerText = 'double';
    element.style.color = 'red';
}

// multiple element traverse via getElementsByTagName
const para = document.getElementsByTagName('p');
console.log(para);

for(let item of para){
    console.log(item);
    item.style.fontSize = '30px';
    item.style.color = 'blue';
}


// multiple element traverse via querySelectorAll
const topics = document.querySelectorAll('.topics');
console.log(topics);
for(let iterator of topics){
    console.log(iterator);
    console.log(iterator.textContent);
    iterator.style.backgroundColor = 'green'; 
}