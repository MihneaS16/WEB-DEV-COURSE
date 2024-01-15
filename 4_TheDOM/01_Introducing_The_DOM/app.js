// document object - entity point into the world of the DOM
//                 - it contains representations of all the content on a page. plus tons of useful methods and properties
// console.dir(document)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// SELECTING


// getElementById
// getElementByTagName
// getElementBYClassName

// DOES NOT WORK IN THE NON-WEB ENVIRONMENT
const banner = document.getElementById("banner");
console.log(banner);

// Elements are every single html.. well, "element" :) (h1, h2, img, a, p, etc.).
const allImages = document.getElementsByTagName("img");

for (let image of allImages) {
    console.log(image.src);
    // image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
}

const squareImages = document.getElementsByClassName("square");
console.log(squareImages);

for (let image of squareImages) {
    image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
}



// A newer, all-in-one method to select a single element

// querySelector - selects an elemet
// querySelectorAll - selects all elements => returns a collection of matching elements

document.querySelector("#banner"); // equivalent to getElementById
document.querySelectorAll("img"); // equivalent to getElementByTagName
document.querySelectorAll(".square"); // equivalent to getElementByClassName

document.querySelector("img"); // selects only the first element of type image
document.querySelector(".square") // selects only the first element with class "square"


const imageJava = document.querySelector('a[title="Java"]');
console.log(imageJava);

const links = document.querySelectorAll("p a");
for (let link of links) {
    console.log(link.href);
}



console.log('\n');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// MANIPULATING

// innerText

const p1 = document.querySelector('p').innerText;
console.log(p1);

// document.querySelector('p').innerText = 'lolololo';


// textContent

// textContent will return every element inside the given element
// for instance, if we take an element within the paragraph and set display to none for that element, it will still show up 
// when we call .textContent (which is not the case for .innerText).
console.log(document.querySelector('p').textContent);

const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK';
// }


//innerHTML

// it is going to give us the entirety of the markup contained within some element (full content, including the tag names)

const html = document.querySelector('p').innerHTML;
console.log(html);

// document.querySelector('h1').innerText = '<i>askdjas</i>';
document.querySelector('h1').innerHTML = '<i>Silkie Chickens</i>';
document.querySelector('h1').innerHTML += '<sup>meow</sup>';



console.log('\n');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ATTRIBUTES

document.querySelector('#banner').id = 'whoops';
document.querySelector('#whoops').id = 'banner';


console.log(document.querySelector('a').href);
const firstLink = document.querySelector('a');

console.log(firstLink.getAttribute('href'));
console.log(firstLink.getAttribute('id'));
console.log(firstLink.getAttribute('class'));
console.log(firstLink.getAttribute('title'));

firstLink.setAttribute('href', 'http://www.google.com');

const input = document.querySelector('input[type="text"]');
input.type = 'password';
input.setAttribute('type', 'color');



console.log('\n');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CHANGING STYLES
// javascript uses camelCase
// the style object does not contain styles from styles sheet (it will contain any inline styles)

const h1 = document.querySelector('h1');
console.log(h1.style);

// this is not advised since it adds the properties inline

// h1.style.color = 'blue';
// h1.style.fontSize = '3em';
// h1.style.border = '2px solid pink';

// for (let link of allLinks) {
//     link.style.color = 'cyan';
//     link.style.textDecorationColor = 'magenta';
//     link.style.textDecorationStyle = 'wavy';
// }

// this is not advised since it adds the properties inline

console.log(window.getComputedStyle(h1));
console.log(window.getComputedStyle(h1).fontSize);



console.log('\n');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ClassList - the better method for changing styles

const h2 = document.querySelector('h2');
console.log(h2.getAttribute('class'));

h2.setAttribute('class', 'purple');
h2.setAttribute('class', 'border'); // this will overwrite the purple class and the h2 class will only be set to border

let currentClasses = h2.getAttribute('class');
h2.setAttribute('class', `${currentClasses} purple`); // in order to set both border and purple as classes for h2

// there is an easier method to set multiple classes for a single object
console.log(h2.classList);
h2.classList.add('purple');
h2.classList.add('border');
h2.classList.add('greyBackground');

h2.classList.remove('purple'); // the classes can also be removed from the object

console.log(h2.classList.contains('purple'));

h2.classList.toggle('purple'); // this is used in order to toggle between the object having and not having a certain class - now h2 has the class 'purple' again
h2.classList.toggle('purple'); // now h2 does not have the class 'purple'
// example: the acordeon on google



console.log('\n');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TRAVERSING PARENT/CHILD/SIBLING
const firstBold = document.querySelector('b');
console.log(firstBold.parentElement); // this is used to move up to the parent element
console.log(firstBold.parentElement.parentElement);
console.log(firstBold.parentElement.parentElement.parentElement);

const paragraph = firstBold.parentElement;
console.log(paragraph.children);
console.log(paragraph.children[0]);

const squareImage = document.querySelector('.square');
squareImage.nextElementSibling.src = 'https://cdn.britannica.com/18/137318-050-29F7072E/rooster-Rhode-Island-Red-roosters-chicken-domestication.jpg';



console.log('\n');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Append and AppendChild

// appendChild
const newImage = document.createElement('img');
newImage.src = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg';
// at this point, we have the image and the source and we just need to append (add) it to the page
document.body.appendChild(newImage);
newImage.classList.add('square');

const newH3 = document.createElement('h3');
newH3.innerText = 'I AM NEW!';
document.body.appendChild(newH3);

// append
const p = document.querySelector('p');
p.append('I was appended here!! ', 'meow');
p.prepend('I was prepended here!! ');

// insertAdjacentElement
const newH2 = document.createElement('h2');
newH2.append("Are adorable chickens");
document.querySelector('h1').insertAdjacentElement('afterend', newH2);



console.log('\n');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// removeChild and remove

// removeChild
const firstLi = document.querySelector('li');
const ul = firstLi.parentElement;
ul.removeChild(firstLi);

// remove
const img = document.querySelector('img');
// img.parentElement.removeChild(img);
img.remove();
