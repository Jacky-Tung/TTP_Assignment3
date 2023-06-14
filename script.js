// Select the section with an id of container without using querySelector.
const one = document.getElementById("container");
console.log(one.id);

// Select the section with an id of container using querySelector.
const two = document.querySelector("#container");
console.log(two.id);

// Select all of the list items with a class of "second".
const three = document.querySelectorAll(".second");
three.forEach((ele) => {
  console.log(ele.textContent);
});

// Select a list item with a class of third,
// but only the list item inside of the ol tag.
const four = document.querySelector("ol").querySelector(".third");
console.log(four.textContent + ", " + four.parentElement.tagName);

// Give the section with an id of container the text "Hello!".
// one.textContent = 'Hello!';

// Add the class main to the div with a class of footer.
const footer = document.querySelector('.footer');
footer.classList.add('main');
document.querySelector('.main').textContent = "main";

// Remove the class main on the div with a class of footer.
footer.classList.remove('main');

// Create a new li element.
const listEle = document.createElement('li');

// Give the li the text "four".
listEle.textContent = "four";

//  Append the li to the ul element.
document.querySelector('ul').appendChild(listEle); 

//  Loop over all of the lis inside the ol tag and give them a background color of "green".
document.querySelector('ol').querySelectorAll('li').forEach(liEle => {liEle.style.backgroundColor = 'green'})

//  Remove the div with a class of footer.
footer.parentNode.removeChild(footer)




