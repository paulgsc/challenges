// Create array to store all the elements to be appended to root
const myElements = [];

const header = document.createElement("header");
myElements.push(header);
const headerDiv = document.createElement("div");
const leftH3 = document.createElement("h3");
const centerH3 = document.createElement("h3");
const rightH3 = document.createElement("h3");
headerDiv.append(leftH3, centerH3, rightH3);
header.appendChild(headerDiv);
leftH3.textContent = "Light-bright Colour Changing Circles";
centerH3.textContent = "reset colour";
rightH3.textContent = "reset all";
header.classList.add("header-class");
headerDiv.classList.add("header-container");
rightH3.classList.add("right-h3");

// create elements for the bulbs
const mainContent = document.createElement("main");
myElements.push(mainContent);
const bulbSection = document.createElement("section");
const bulbDivs = new Array(513).fill().map((_, idx) => {
  const bulbDiv = document.createElement("div");
  bulbDiv.classList.add("bulb", `bulb-child-${idx}`);
  return bulbDiv;
});
bulbSection.classList.add("bulb-container");
bulbSection.append(...bulbDivs);
mainContent.classList.add("main-content");
mainContent.appendChild(bulbSection);
// Find the element with id "root"
const rootElement = document.getElementById("root");

// Check if the "root" element exists before appending the content
if (rootElement) {
  rootElement.append(...myElements);
} else {
  console.error('Elmeent with id "root" not found');
}
