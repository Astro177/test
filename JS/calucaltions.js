let serial = 0;
// triangle area calculation
document.getElementById("triangle-area").addEventListener("click", function(){
    serial += 1;
    const shapeName = shapeText('first-shape');
    const triangleB = shapeValue('triangle-first');
    const triangleH = shapeValue('triangle-second');
    const triangleArea = (0.5 * parseInt(triangleB) * parseInt (triangleH)).toFixed(2);
    
    showResults(shapeName, triangleArea);
});
// rectangle area calculation
document.getElementById("rectangle-area").addEventListener("click", function(){
    serial += 1;
    const shapeName = shapeText('second-shape');
    const rectangleW = shapeValue('rectangle-first');
    const rectangleL = shapeValue('rectangle-second');
    const rectangleArea = (parseInt(rectangleW) * parseInt (rectangleL)).toFixed(2);

   showResults(shapeName, rectangleArea);
});
// parallelogram area calculation
document.getElementById("parallelogram-area").addEventListener("click", function(){
    serial += 1;
    const shapeName = shapeText('third-shape');
    const parallelogramB = shapeValue('parallelogram-first');
    const parallelogramH = shapeValue('parallelogram-second');
    const parallelogramArea = (parseInt(parallelogramB) * parseInt (parallelogramH)).toFixed(2);

   showResults(shapeName, parallelogramArea);
});
// rhombus area calculation
document.getElementById("rhombus-area").addEventListener("click", function(){
    serial += 1;
    const shapeName = shapeText('fourth-shape');
    const rhombusD1 = shapeText('rhombus-first');
    const rhombusD2 = shapeText('rhombus-second');
    const rhombusArea = (0.5 * parseInt(rhombusD1) * parseInt (rhombusD2)).toFixed(2);

   showResults(shapeName, rhombusArea);
});
// pentagon area calculation
document.getElementById("pentagon-area").addEventListener("click", function(){
    serial += 1;
    const shapeName = shapeText('fifth-shape');
    const pentagonP = shapeText('pentagon-first');
    const pentagonB = shapeText('pentagon-second');
    const pentagonArea = (0.5 * parseInt(pentagonP) * parseInt (pentagonB)).toFixed(2);

   showResults(shapeName, pentagonArea);
});
// ellipse area calculation
document.getElementById("ellipse-area").addEventListener("click", function(){
  serial += 1;
  const shapeName = shapeText('sixth-shape');
  const ellipseA = shapeText('ellipse-first');
  const ellipseB = shapeText('ellipse-second');
  const ellipseArea =(3.14 * parseInt(ellipseA) * parseInt (ellipseB)).toFixed(2);

 showResults(shapeName, ellipseArea);
});

