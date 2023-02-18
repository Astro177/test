// blog page connection
document.getElementById('blogs-btn').addEventListener('click', function(){
  window.location.href = 'blogs.html';
});

// random color add
function getRandomColor() {
  let colorCode = "#"
  const hexes = "0123456789ABCDEF"
  for (let i = 0; i < 3; i++) {
    const a = hexes[Math.floor(Math.random() * hexes.length)]
    const b = hexes[Math.floor(Math.random() * hexes.length)]
    colorCode += a + b
  }
  return colorCode
}

const className = ".custom-hover"
const fallbackColor = "#fff"
const elements = document.querySelectorAll(className)

elements.forEach((el) => {
  // to add the colors
  el.addEventListener("mouseenter", (e) => {
    e.target.style.backgroundColor = getRandomColor()
  })

  // to reset the color
  el.addEventListener("mouseleave", (e) => {
    e.target.style.backgroundColor = fallbackColor
  })
})



// get inner-text function
function shapeText(id){
 const text = document.getElementById(id).innerText;
 return text;
}

// get input-value function
function shapeValue(id){
 const value = document.getElementById(id).value;
 if(!value  ){
  console.log(value);
 }
 else{
 return value;
}
}


// show result function
function showResults(shapeName, shapeArea){
  const container = document.getElementById('result-container');
  const tr = document.createElement("tr");
  tr.innerHTML = `
  <td>${serial}</td>
  <td>${shapeName}</td>
  <td>${shapeArea}cm<sup>2</sup><button class="btn btn-info rounded-xl hover:bg-violet-600 mx-3 converter">Convert to m<sup>2</sup></td> 
  `;
container.appendChild(tr);
}