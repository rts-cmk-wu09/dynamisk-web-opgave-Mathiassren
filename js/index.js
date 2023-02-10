document.addEventListener("DOMContentLoaded", function() {

  // Create a div element to be the container of the section
const section = document.createElement("div");
section.style.backgroundColor = "white";
section.style.width = "741px";
section.style.height = "537px";

// Create an h1 element
const header = document.createElement("h1");
header.textContent = "Find out how we can save your time in Backpacking in Europe";

// Create a p element
const paragraph = document.createElement("p");
paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet id eget scelerisque amet etiam in sit commodo. Pretium ut duis orci pulvinar pretium id consectetur. ";

// Create a button element
const button = document.createElement("button");
button.textContent = "Explore";
button.style.color = "white";
button.style.fontSize = "18px";
button.style.backgroundColor = "#F78065";
button.style.border = "none"
button.style.width = "250px"
button.style.height = "65px"

// Append the h1, p and button elements to the section
section.appendChild(header);
section.appendChild(paragraph);
section.appendChild(button);

// Finally, append the section to the body of the document
document.body.appendChild(section);


}) // DOMContentLoaded slut