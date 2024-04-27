//js code to force the x-overflow to not happen

// Get all elements with overflow
const overflowElements = document.querySelectorAll('*');

// Loop through each element
overflowElements.forEach(element => {
  // Check if the element has overflow
  if (window.getComputedStyle(element).overflowX !== 'visible') {
    // Set overflow-x to hidden
    element.style.overflowX = 'hidden';
  }
});