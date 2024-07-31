const traingleBox = document.querySelector(".traingle-generator");
const TRAINGLE_WIDTH = traingleBox.clientWidth;
const TRAINGLE_HEIGHT = traingleBox.clientHeight;

const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(tab => tab.classList.remove("active"));
    tab.classList.add("active");
    tabs.forEach(tab => {
      const target = tab.dataset.target;
      document.querySelector(`.${target}`).classList.remove("active");
    })
    const target = tab.dataset.target;
    document.querySelector(`.${target}`).classList.add("active");
  });
});

const getRandomXYValues = (min, max) => {
  const random = Math.floor(Math.random() * (max - min) + min);
  return random;
};

// const createClipPath = (x1, y1, x2, y2, x3, y3) => {
//   const clipPathFunction = `polygon(${x1}% ${y1}%, ${x2}% ${y2}%, ${x3}% ${y3}%)`;
//   return clipPathFunction;
// }

// const generateNewTraingle = () => {
//   let x1 = getRandomXYValues(0, 99);
//   let y1 = getRandomXYValues(0, 99);

//   let x2 = getRandomXYValues(0, 99);
//   let y2 = getRandomXYValues(0, 99);

//   let x3 = getRandomXYValues(0, 99);
//   let y3 = getRandomXYValues(0, 99);

//   if(x1 <= 20 && x2 <= 20 && x1 > x2){
//     if(x1 - x2 <= 20){
//       x2 = getRandomXYValues(80, 99);
//     }
//   }
//   else{
//     if(x2 - x1 <= 20){
//       x1 = getRandomXYValues(80, 99);
//     }
//   }

//   if(y1 <= 20 && y2 <= 20 && y1 > y2){
//     if(y1 - y2 <= 20){
//       y2 = getRandomXYValues(80, 99);
//     }
//   }
//   else{
//     if(y2 - y1 <= 20){
//       y1 = getRandomXYValues(80, 99);
//     }
//   }

//   const clipPath = createClipPath(x1, y1, x2, y2, x3, y3);
//   return clipPath;
// };

const setClipPathOnTraingle = (clipPathStyle) => {
  const traingleBox = document.querySelector(".the-traingle");
  traingleBox.style.clipPath = `${clipPathStyle}`;
};

const x1y1PointsGenerator = () => {
  const x1 = getRandomXYValues(0, 60);
  const y1 = getRandomXYValues(0, 60);

  const x2 = getRandomXYValues(0, 10);
  const y2 = getRandomXYValues(85, 99);

  const x3 = getRandomXYValues(85, 99);
  const y3 = getRandomXYValues(85, 99);

  const clipPathText = `polygon(${x1}% ${y1}%, ${x2}% ${y2}%, ${x3}% ${y3}%)`;

  const clipPathObject = {
    points: {
      x1, x2, x3, y1, y2, y3
    },
    clipPathText
  };

  return clipPathObject;
}

const x2y2PointsGenerator = () => {
  const x1 = getRandomXYValues(85, 99);
  const y1 = getRandomXYValues(85, 99);

  const x2 = getRandomXYValues(0, 99);
  const y2 = getRandomXYValues(0, 30);

  let x3 = getRandomXYValues(0, 10);
  let y3 = getRandomXYValues(0, 99);

  if(x3 >= y3){
    if(x3 - y3 <= 30){
      y3 = getRandomXYValues(70, 99);
    }
  }
  else{
    if(y3 - x3 <= 30){
      y3 = getRandomXYValues(70, 99);
    }
  }

  const clipPathText = `polygon(${x1}% ${y1}%, ${x2}% ${y2}%, ${x3}% ${y3}%)`;

  const clipPathObject = {
    points: {
      x1, x2, x3, y1, y2, y3
    },
    clipPathText
  };

  return clipPathObject;
}

const x3y3PointsGenerator = () => {
  const x1 = getRandomXYValues(0, 10);
  const y1 = getRandomXYValues(80, 100);

  const x2 = getRandomXYValues(70, 99);
  const y2 = getRandomXYValues(70, 99);

  const x3 = getRandomXYValues(50, 99);
  const y3 = getRandomXYValues(0, 60);

  const clipPathText = `polygon(${x1}% ${y1}%, ${x2}% ${y2}%, ${x3}% ${y3}%)`;

  const clipPathObject = {
    points: {
      x1, x2, x3, y1, y2, y3
    },
    clipPathText
  };

  return clipPathObject;
}

const btn = document.querySelector(".new-traingle-btn");
btn.addEventListener("click", () => {
  const clipPathPhase1Object = x1y1PointsGenerator();
  const { clipPathText: clipPathPhase1 } = clipPathPhase1Object;
  // const { clipPathText: clipPathPhase2 } = x2y2PointsGenerator();
  // const { clipPathText: clipPathPhase3 } = x3y3PointsGenerator();

  // const phases = [clipPathPhase1, clipPathPhase2, clipPathPhase3];

  // const randomPhase = Math.floor(Math.random() * phases.length);
  // setClipPathOnTraingle(phases[randomPhase]);
  setClipPathOnTraingle(clipPathPhase1); // For testing only !! Remove
  x1y1ProblemGenerator(clipPathPhase1Object);
})

const percentageToPixel = (percentage) => {
  return (percentage * 16) / 100;
}

const PixelToCM = (pixel) => {

}

const traingleSide1 = document.querySelector(".side1");
const traingleSide2 = document.querySelector(".side2");
const traingleSide3 = document.querySelector(".side3");

const traingleSide1TextWidth = traingleSide1.clientWidth;
const traingleSide2TextWidth = traingleSide2.clientWidth;
const traingleSide3TextWidth = traingleSide3.clientWidth;

const traingleSide1TextHeight = traingleSide1.clientHeight;
const traingleSide2TextHeight = traingleSide2.clientHeight;
const traingleSide3TextHeight = traingleSide3.clientHeight;

const x1y1ProblemGenerator = (clipPath) => {
  const SIDES = 3;
  const randomMissingSide = Math.floor(Math.random() * SIDES);
  console.log(randomMissingSide);
  const { points, clipPathText } = clipPath;
  const { x1, x2, x3, y1, y2, y3 } = points;

  // Side 1
  const side1XWidth = x1 > x3 ? x1 - x3 : x3 - x1;
  const side1YWidth = y1 > y3 ? y1 - y3 : y3 - y1;
  const side1XPosition = x1 + (side1XWidth / 2);
  const side1YPosition = y1 + (side1YWidth / 2);
  traingleSide1.style.left = `${side1XPosition - ((traingleSide1TextWidth / 2) / 2)}%`;
  traingleSide1.style.top = `${side1YPosition - (traingleSide1TextHeight / 2)}%`;

  // Side 2
  const side2XWidth = x2 > x3 ? x2 - x3 : x3 - x2;
  const side2YWidth = y2 > y3 ? y2 - y3 : y3 - y2;
  const side2XPosition = x2 + (side2XWidth / 2);
  let side2YPosition = "";
  if(y2 > y3){
    side2YPosition = y3 + (side2YWidth / 2);
  }
  else{
    side2YPosition = y2 + (side2YWidth / 2);
  }
  traingleSide2.style.left = `${side2XPosition - ((traingleSide2TextWidth / 2) / 2)}%`;
  traingleSide2.style.top = `${side2YPosition}%`;

  // Side 3
  const side3XWidth = x1 > x2 ? x1 - x2 : x2 - x1;
  const side3YWidth = y1 > y2 ? y1 - y2 : y2 - y1;
  let side3XPosition = "";
  if(x1 > x2){
    side3XPosition = x2 + (side3XWidth / 2);
  }
  else{
    side3XPosition = x1 + (side3XWidth / 2);
  }
  const side3YPosition = y1 + (side3YWidth / 2);
  traingleSide3.style.left = `${side3XPosition - (traingleSide3TextWidth / 2)}%`;
  traingleSide3.style.top = `${side3YPosition - ((traingleSide3TextHeight / 2) / 2)}%`;

  const { side1: side1LineWidth, side2: side2LineWidth, side3: side3LineWidth } = setPointsLineWidth(clipPath);

  switch(randomMissingSide){
    case 0:
      traingleSide1.innerHTML = "??";
      traingleSide2.innerHTML = side2LineWidth;
      traingleSide3.innerHTML = side3LineWidth;
      x1y1ProblemsSolution(side2LineWidth, side3LineWidth)
      break;
      case 1:
      traingleSide1.innerHTML = side1LineWidth;
      traingleSide2.innerHTML = "??";
      traingleSide3.innerHTML = side3LineWidth;
      x1y1ProblemsSolution(side1LineWidth, side3LineWidth)
      break;
    case 2: 
      traingleSide1.innerHTML = side1LineWidth;
      traingleSide2.innerHTML = side2LineWidth;
      traingleSide3.innerHTML = "??";
      x1y1ProblemsSolution(side1LineWidth, side2LineWidth)
      break;
  }


}

const setPointsLineWidth = (clipPathObject) => {
  const { points, clipPathText } = clipPathObject;
  const { x1, x2, x3, y1, y2, y3 } = points;

  const side1LineWidth = x1 > x3 ? x1 - x3 : x3 - x1;
  const side2LineWidth = x2 > x3 ? x2 - x3 : x3 - x2;
  const side3LineWidth = y1 > y2 ? y1 - y2 : y2 - y1;

  return {
    side1: side1LineWidth,
    side2: side2LineWidth,
    side3: side3LineWidth
  };
}

const showSolutionButton = document.querySelector(".solution-button");
const solutionBox = document.querySelector(".solution");

showSolutionButton.addEventListener("click", () => {
  showSolutionButton.classList.toggle("clicked");
  if(showSolutionButton.classList.contains("clicked")){
    showSolutionButton.innerHTML = "Hide solution";
    solutionBox.classList.add("show");
  }
  else{
    showSolutionButton.innerHTML = "Show solution";
    solutionBox.classList.remove("show");
  }
});


const x1y1ProblemsSolution = (a, b) => {
  const aValue = document.querySelector(".a-value");
  const bValue = document.querySelector(".b-value");

  const solutionSettingAValue = document.querySelector(".setting-a-value");
  const solutionSettingBValue = document.querySelector(".setting-b-value");

  const power2A = document.querySelector(".solving-a-value");
  const power2B = document.querySelector(".solving-b-value");

  const APlusB = document.querySelector(".solving-a-plus-b");

  const sqrtValue = document.querySelector(".solving-sqrt-a-b");

  aValue.innerHTML = a;
  bValue.innerHTML = b;

  solutionSettingAValue.innerHTML = a;
  solutionSettingBValue.innerHTML = b;

  const power2AValue = Math.pow(a, 2);
  const power2BValue = Math.pow(b, 2);

  const power2APlusPower2B = power2AValue + power2BValue; 

  power2A.innerHTML = power2AValue;
  power2B.innerHTML = power2BValue;

  APlusB.innerHTML = power2APlusPower2B;
  sqrtValue.innerHTML = Math.sqrt(power2APlusPower2B);
}


// Path
const pathCanvas = document.querySelector(".grid-wrapper");
const CANVAS_WIDTH = pathCanvas.clientWidth;
const CANVAS_HEIGHT = pathCanvas.clientHeight;
const pathCanvasGridPoint = document.querySelector(".box");
const pathCanvasBoxes = document.querySelectorAll(".box");
const pathCanvasGrids = document.querySelectorAll(".grid");
const BOX_WIDTH = pathCanvasGridPoint.getBoundingClientRect().width;
const pathCanvasPointBox = document.querySelector(".point-circle");
const POINT_CIRCLE_HEIGHT = pathCanvasPointBox.clientHeight;
const TOTAL_EMPTY_BOX_LEFT = 1;
const TOTAL_EMPTY_BOX_Right = 1;
const TOTAL_EMPTY_BOXES = TOTAL_EMPTY_BOX_LEFT + TOTAL_EMPTY_BOX_Right;
const TOTAL_BOXES_PER_GRID = document.querySelector(".grid").children.length - TOTAL_EMPTY_BOXES;
// const drawingLine = document.querySelector(".the-line");
const circles = document.querySelectorAll(".point-circle");
const submitAnswerButton = document.querySelector(".submit-answer");
const popupAnswer = document.querySelector(".popup");
const clearGraphPointsButton = document.querySelector(".clear-points-btn");

const correctAnswerPopup = document.querySelector(".popup-result-correct-answer");
const wrongAnswerPopup = document.querySelector(".popup-result-wrong-answer");

let collectedPoints;
let solutionPoints;

// const MAX_POINTS = 2;
// let counter = 0;
// let firstCircleClicked;
// let activePoints = [];
// let pointGrid;
// circles.forEach((circle, index) => {
//   circle.addEventListener("click", () => {
//     counter++;
//     circle.classList.add("active");
//     activePoints.push(circle);
//     pointGrid = activePoints[0].closest(".grid");
//     if(counter == 2){
//       pointGrid = activePoints[counter - 1].closest(".grid");
//       counter = 0;
//     }
//     if(activePoints.length == 3){
//       activePoints[0].classList.remove("active");
//       activePoints = [activePoints[1], activePoints[2]] 
//     }
//     // const pointGrid = activePoints[0].closest(".grid");
//     const currentPoint = circle;
//     drawLine(pointGrid, currentPoint);
//   });
// });
// const lineEl = document.querySelector(".drawing-line");
const svgEl = document.querySelector(".svg-line-el");
const svgLine = document.getElementById("svg-line");

const setSvgActualLine = (x1, y1, x2, y2) => {
  const strokeColor = "#673ab7";
  const strokeWidth = 3;
  const actualLine = `<line class="actual-line" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${strokeColor}" stroke-width="${strokeWidth}" marker-start="url(#start-arrow)" marker-end="url(#end-arrow)" />`;
  
  // hide placeholder line
  svgLine.setAttribute("stroke", "#0000");
  
  // draw actual line
  svgEl.innerHTML += actualLine;
  
  const activeCircles = document.querySelectorAll(".point-circle.active");
  activeCircles.forEach(circle => circle.classList.add("scale-down"));
}

const drawPlaceholderLine = (x1, y1) => {
  pathCanvas.addEventListener("mousemove", e => {
    const rect = pathCanvas.getBoundingClientRect();
    const point2_X = e.clientX - rect.left;
    const point2_Y = e.clientY - rect.top;

    svgLine.setAttribute("x1", x1);
    svgLine.setAttribute("y1", y1);
    svgLine.setAttribute("x2", point2_X);
    svgLine.setAttribute("y2", point2_Y);
    svgLine.setAttribute("stroke", "#00000082");
  });
};

// const drawLine = (offsetLeft, offsetTop) => {
//   const totalMarginX = offsetLeft * BOX_WIDTH;
//   const totalMarginY = offsetTop * BOX_WIDTH;

//   // Point 1
//   const point1total_X_Percentage = (totalMarginX / 600) * 100;
//   const point1total_Y_Percentage = (totalMarginY / 600) * 100;

//   //                     done
//   //                   -point 1-  -point 2- -point 3- -point 4- -point 5-       
//   // clip-path: polygon(10% 10%,  20%  20%, 80%  80%, 79%  81%, 9%  11%);

//   // to set point 2 we need the point 3
//   // and then point 2 is the half of the distance between point 1 and 3
  
//   // getting point 3 from mouse move 
//   const totalCanvasMargin_X = pathCanvas.offsetLeft;
//   const totalCanvasMargin_Y = pathCanvas.offsetTop;
//   pathCanvas.addEventListener("mousemove", e => {
//     const mouse_X = e.clientX;
//     const mouse_Y = e.clientY;

//     const point3Total_X_Margin = mouse_X - totalCanvasMargin_X;
//     const point3Total_Y_Margin = mouse_Y - totalCanvasMargin_Y;

//     const point3total_X_Percentage = (+point3Total_X_Margin / CANVAS_WIDTH) * 100;
//     const point3total_Y_Percentage = (+point3Total_Y_Margin / CANVAS_HEIGHT) * 100;

//     // Point 2
//     const point2total_X_MarginPercentage = point1total_X_Percentage > point3total_X_Percentage ? (point1total_X_Percentage - point3total_X_Percentage) / 2 : (point3total_X_Percentage - point1total_X_Percentage) / 2;
//     const point2total_Y_MarginPercentage = point1total_Y_Percentage > point3total_Y_Percentage ? (point1total_Y_Percentage - point3total_Y_Percentage) / 2 : (point3total_Y_Percentage - point1total_Y_Percentage) / 2;
    
//     const point2total_X_Percentage = point2total_X_MarginPercentage + point1total_X_Percentage;
//     const point2total_Y_Percentage = point2total_Y_MarginPercentage + point1total_Y_Percentage;

//   //                     done       done      done     
//   //                   -point 1-  -point 2- -point 3- -point 4- -point 5-       
//   // clip-path: polygon(10% 10%,  20%  20%, 80%  80%, 79%  81%, 9%  11%);

//   const point4total_X_Percentage = point3total_X_Percentage - 1;
//   const point4total_Y_Percentage = point3total_Y_Percentage + 1;

//   const point5total_X_Percentage = point1total_X_Percentage - 1;
//   const point5total_Y_Percentage = point1total_Y_Percentage + 1;

//   //                     done       done      done      done      done
//   //                   -point 1-  -point 2- -point 3- -point 4- -point 5-       
//   // clip-path: polygon(10% 10%,  20%  20%, 80%  80%, 79%  81%, 9%  11%);

//   console.log("Point 1 (x): ", point1total_X_Percentage, "%");
//   console.log("Point 1 (y): ", point1total_Y_Percentage, "%");
//   console.log("------------------------------");
//   console.log("Point 2 (x): ", point2total_X_Percentage, "%");
//   console.log("Point 2 (y): ", point2total_Y_Percentage, "%");
//   console.log("------------------------------");
//   console.log("point 3 (x): ", point3total_X_Percentage, "%");
//   console.log("point 3 (y): ", point3total_Y_Percentage, "%");
//   console.log("------------------------------");
//   console.log("point 4 (x): ", point4total_X_Percentage, "%");
//   console.log("point 4 (y): ", point4total_Y_Percentage, "%");
//   console.log("------------------------------");
//   console.log("point 5 (x): ", point5total_X_Percentage, "%");
//   console.log("point 5 (y): ", point5total_Y_Percentage, "%");
//   console.log("------------------------------");

//   // Set Clip Path
//   const point1 = `${point1total_X_Percentage}% ${point1total_Y_Percentage}%`;
//   const point2 = `${point2total_X_Percentage}% ${point2total_Y_Percentage}%`;
//   const point3 = `${point3total_X_Percentage}% ${point3total_Y_Percentage}%`;
//   const point4 = `${point4total_X_Percentage}% ${point4total_Y_Percentage}%`;
//   const point5 = `${point5total_X_Percentage}% ${point5total_Y_Percentage}%`;

//   // if point 1 y > point 3 y => reverse points
//   // then point 1 = point 3 && point 3 = point 1
//   // if(point1total_Y_Percentage > point3total_Y_Percentage){
//     // lineEl.style.clipPath = `polygon(${point3}, ${point2}, ${point1}, ${point4}, ${point5})`;
//   // }
//   // else{
//     lineEl.style.clipPath = `polygon(${point1}, ${point2}, ${point3}, ${point4}, ${point5})`;
//   // }
//   });
// };

const drawPoints = (points) => {
  circles.forEach(circle => {
    circle.classList.remove("active");
  });
  let x1, y1, x2, y2;
  points.forEach(point => {
    const pathCanvasRect = pathCanvas.getBoundingClientRect();

    point.point.classList.add("active");
    const point1GridBox = points[0].pointGridBox;

    // Query the Point and set 'active-circle' Class on its Parent to get it's position in the grid
    const point1ActiveCirclePosition = point1GridBox.querySelector(".box .point-circle.active");
    point1ActiveCirclePosition.parentElement.classList.add("active-circle");
    
    // get the active grid where point is placed over boxes for top margins
    point1GridBox.classList.add("active-grid");
    // Total number of boxes before the active circle element where the point
    const boxesInGrid = point1GridBox.querySelectorAll(".box");
    const gridsInWrapper = document.querySelectorAll(".grid-boxes .grid");

    let marginX = "";
    let marginY = "";

    // Active Circle
    boxesInGrid.forEach((box, index) => {
      if(box.classList.contains("active-circle")){
        marginX = index + 1;
      }
    });

    // Active Grid
    gridsInWrapper.forEach((grid, index) => {
      if(grid.classList.contains("active-grid")){
        marginY = index + 1;
      }
    });

    x1 = marginX * BOX_WIDTH; // - 1 deduce the border from each box
    y1 = marginY * (BOX_WIDTH - 1);
    
    if(points.length == 1){
      drawPlaceholderLine(x1, y1);
    }
    else{
      const point2 = points[1].eventObject;
      x2 = point2.clientX - pathCanvasRect.left;
      y2 = point2.clientY - pathCanvasRect.top;

      setSvgActualLine(x1, y1, x2, y2);
      const point1Coordinates = points[0].point.parentElement.getAttribute("coordinates");
      const point2Coordinates = points[1].point.parentElement.getAttribute("coordinates");

      collectedPoints = collectCanvasDrawnPoints(point1Coordinates, point2Coordinates);
    }
  });
}

const collectCanvasDrawnPoints = (point1Coordinates, point2Coordinates) => {
  return [point1Coordinates, point2Coordinates];
};

let points = [];
let counter = 0;
// const setPointsWhenClick = () => {

// };
circles.forEach(circle => {
  circle.addEventListener("click", e => {
    counter++;
    const pointObject = {
      point: circle,
      pointGridBox: circle.closest(".grid"),
      eventObject: e
    };
    points.push(pointObject);
    if(counter >= 3){
      points = [points[1], points[2]];
    }
    if(counter == 2){
      // enable sumbit answer
      submitAnswerButton.classList.remove("disabled");
    }
    drawPoints(points);
  });
});

clearGraphPointsButton.addEventListener("click", e => {
  e.preventDefault();
  counter = 0;
  points = [];
  circles.forEach(circle => circle.classList.remove("active"));
  pathCanvasBoxes.forEach(box => box.classList.remove("active-circle"));
  pathCanvasGrids.forEach(grid => grid.classList.remove("active-grid"));
  const lines = Array.from(svgEl.children);
  lines.forEach(line => {
    if(line.classList.contains("actual-line")){
      line.remove();
    }
  });
}); 

const setCoordinatesOnGridBoxes = () => {
  const grids = Array.from(document.querySelectorAll(".grid"));

  const gridHalf_1 = grids.slice(0, grids.length / 2);
  const gridHalf_2 = grids.slice((grids.length / 2), grids.length - 1);

  // Half 1
  gridHalf_1.forEach((grid, gridIndex) => {
    const parts = Array.from(grid.querySelectorAll(".box"));
    
    // Half 1 - Part 1
    const part_1_BoxesSliced = parts.slice(0, 11);
    let part_1_Start_X = -10;
    let part_1_Start_Y = 10 - gridIndex;
    part_1_BoxesSliced.forEach(box => {
      box.setAttribute("coordinates", `(${part_1_Start_X++}, ${part_1_Start_Y})`);
    });

    // Half 1 - Part 2
    const part_2_BoxesSliced = parts.slice(11, parts.length - 1);
    let part_2_Start_X = 0;
    let part_2_Start_Y = 10 - gridIndex;
    part_2_BoxesSliced.forEach(box => {
      box.setAttribute("coordinates", `(${part_1_Start_X++}, ${part_1_Start_Y})`);
    });
  });

  // Half 2
  gridHalf_2.forEach((grid, gridIndex) => {
    const parts = Array.from(grid.querySelectorAll(".box"));
    
    // Half 2 - Part 1
    let part_1_Start_X = -10;
    let part_1_Start_Y = (-1 - gridIndex);
    const part_1_BoxesSliced = parts.slice(0, 11);
    part_1_BoxesSliced.forEach(box => {
      box.setAttribute("coordinates", `(${part_1_Start_X++}, ${part_1_Start_Y})`);
    });
    
    // Half 2 - Part 2
    let part_2_Start_X = 1;
    let part_2_Start_Y = (-1 - gridIndex);
    const part_2_BoxesSliced = parts.slice(11, parts.length - 1);
    part_2_BoxesSliced.forEach(box => {
      box.setAttribute("coordinates", `(${part_2_Start_X++}, ${part_2_Start_Y})`);
    });
  });

}
setCoordinatesOnGridBoxes();

const solveGraphingLineEquation = (rise, run, runSign, ySign, yNumber) => {
  let line_X1 = 0; // add 1 if y in minus
  const line_Y1 = yNumber;
  
  const line_X2 = run;
  let line_Y2;

  // if(ySign == "-")
  //   line_X1 += 1;

  if(ySign == "+" && runSign == "+"){
    line_Y2 = yNumber + rise;
  }
  else if(ySign == "-" && runSign == "+"){
    line_Y2 = (yNumber - rise) * -1;  
  }
  else if(ySign == "+" && runSign == "-"){
    line_Y2 = yNumber - rise;
  }
  else{
    line_Y2 = (yNumber + rise) * -1;
  }

  // Debug
  // const finalLine = `(${line_X1}, ${ySign == "+" ? "" : ySign}${line_Y1}) ||| (${line_X2}, ${line_Y2})`;
  // console.log(finalLine);

  return{
    equation: {
      rise, run, runSign, ySign, yNumber
    },
    point1: {
      x1: line_X1,
      y1: `${ySign == "+" ? "" : ySign}${line_Y1}`
    },
    point2: {
      x1: line_X2,
      y1: line_Y2
    }
  }
};

const GCDCommonFactor = (arr1, arr2) => {
  let commonFactor = "";
  arr1.forEach(number => {
    arr2.forEach(n => {
      if(n === number)
        commonFactor = n;
    });
  });

  return commonFactor;
};

const findGCD = (number1, number2) => {
  const number1Factors = [];
  const number2Factors = [];
  for(let i = 1; i <= 10; i++){
    if(number1 % i === 0){
      number1Factors.push(i);
    }
    if(number2 % i === 0){
      number2Factors.push(i);
    }
  }

  // console.log(`${number1} Factors are: ${number1Factors}`);
  // console.log(`${number2} Factors are: ${number2Factors}`);
  // console.log("Common Factor: ", GCDCommonFactor(number1Factors, number2Factors));
  const commonFactor = GCDCommonFactor(number1Factors, number2Factors);
  return commonFactor;
};

findGCD(1, 8);

const createGraphingLineEquation = () => {
  const equationFraction = document.querySelector(".fraction");
  const lineBetween = equationFraction.querySelector(".line-between");

  // rise, run, runSign, ySign, yNumber
  const maxYNumber = 10;

  const signs = ["+", "-"];
  const runSign = signs[Math.floor(Math.random() * signs.length)];
  const ySign = signs[Math.floor(Math.random() * signs.length)];
  
  const yNumber = getRandomXYValues(1, 10);
  const yNumberEl = document.querySelector(".yNumber");
  yNumberEl.innerHTML = yNumber;

  const riseUpMin = 1;
  const riseUpMax = maxYNumber - yNumber;
  
  let rise = getRandomXYValues(riseUpMin, riseUpMax);
  let run = getRandomXYValues(1, 10);
  
  const riseEl = document.querySelector(".rise");
  const runEl = document.querySelector(".run");
  if(rise.toString() === run.toString()){
    equationFraction.style.display = "none";
    rise = 1;
    run = 1;
  }
  else{
    equationFraction.style.display = "flex";

    const commonFactor = findGCD(rise, run);
    if(commonFactor == 1){
      rise = rise;
      run = run;
    }
    else{
      rise = rise / commonFactor;
      run = run / commonFactor;
    }

    if(run == 1){
      lineBetween.style.display = "none";
      runEl.style.display = "none";
    }
    else{
      lineBetween.style.display = "block";
      runEl.style.display = "block";
    }
  }
  
  riseEl.innerHTML = rise;
  runEl.innerHTML = run;

  const runSignEl = document.querySelector(".runSign");
  runSignEl.innerHTML = runSign == "+" ? "" : "&minus;";
  
  const ySignEl = document.querySelector(".ySign");
  ySignEl.innerHTML = ySign == "-" ? "&minus;" : ySign;

  return solveGraphingLineEquation(rise, run, runSign, ySign, yNumber);
}

const updateSolution = (equationObject) => {
  
  // Clone Original Equation
  const orignalEquation = document.querySelector(".equation");
  const popupQuestionEquation = document.querySelector(".popup-question-equation");
  const equationCloned = orignalEquation.cloneNode(true);
  popupQuestionEquation.innerHTML = "";
  popupQuestionEquation.appendChild(equationCloned);

  const yNumberEl = popupQuestionEquation.querySelector(".yNumber");
  const riseEl = popupQuestionEquation.querySelector(".rise");
  const runEl = popupQuestionEquation.querySelector(".run");
  const runSignEl = popupQuestionEquation.querySelector(".runSign");
  const ySignEl = popupQuestionEquation.querySelector(".ySign");

  const solutionRunsign = equationObject.equation.runSign == "+" ? "" : "-";
  const solutionYsign = equationObject.equation.ySign == "+" ? "" : "-";

  yNumberEl.innerHTML = equationObject.equation.yNumber;
  riseEl.innerHTML = equationObject.equation.rise;
  runEl.innerHTML = equationObject.equation.run;
  runSignEl.innerHTML = solutionRunsign;
  ySignEl.innerHTML = equationObject.equation.ySign;

  const step1 = document.querySelector(".popup-solution-step-1");
  const step1Text = `<p>The point where <span class="math-sign-font">𝑥</span>= 0. Here, <span class="math-sign-font">𝑦</span>= ${solutionYsign}${equationObject.equation.yNumber}, so the y-intercept is <span class="point-solution-highlight">(0, ${solutionYsign}${equationObject.equation.yNumber})</span>.</p>`;
  step1.innerHTML = step1Text;


  // Clone Fraction Numbers - Step 2
  const originalFraction = document.querySelector(".riseRunLine");
  const fractionCloned = originalFraction.cloneNode(true);
  const solutionFractionElement = document.querySelector(".rise-run-line-fraction-wrapper");
  solutionFractionElement.innerHTML = "";
  fractionCloned.querySelector(".fraction").style.display = "flex";
  fractionCloned.querySelector(".line-between").style.display = "block";
  fractionCloned.querySelector(".run").style.display = "block";
  solutionFractionElement.appendChild(fractionCloned);
  const step2 = document.querySelector(".rise-run-line-solution-text");
  let step2Text = "";
  if(equationObject.equation.runSign == "+"){
    step2Text = `. Meaning a <span>rise</span> of ${equationObject.equation.rise} for every ${equationObject.equation.run} points of run.`;
  }
  else{
    step2Text = `. Meaning a <span>fall</span> of ${equationObject.equation.rise} for every ${equationObject.equation.run} points of run.`;
  }
  step2.innerHTML = step2Text;

  // Step 3
  const step3 = document.querySelector(".popup-solution-step-3");
  const step3Text = `<p>Using the slope from the y-intercept, the point <span class="point-solution-highlight">(${equationObject.point2.x1}, ${equationObject.point2.y1})</span> is found.</p>`;
  step3.innerHTML = step3Text;
  
  // Step 4
  const step4 = document.querySelector(".popup-solution-step-4");
  const step4Text = `<p>
    Plot 
    <span class="point-solution-highlight">(0, ${equationObject.point1.y1})</span>
    <span class="math-sign-font">&</span>
    <span class="point-solution-highlight">(${equationObject.point2.x1}, ${equationObject.point2.y1})</span>
  </p>`;
  step4.innerHTML = step4Text;

}

const drawCorrectLineOnGraph = (point1, point2) => {
  const clonedGraph = pathCanvas.cloneNode(true);
  const clonedGraphParent = document.querySelector(".popup-path-clone");
  clonedGraphParent.appendChild(clonedGraph);
  clonedGraph.classList.add("no-hover");

  // Remove drawn points & lines 
  clonedGraph.querySelectorAll(".point-circle").forEach(circle => circle.classList.remove("active"));
  clonedGraph.querySelectorAll(".svg-line-el .actual-line").forEach(line => line.remove());

  const point1El = clonedGraph.querySelector(`[coordinates="${point1}"] .point-circle`);
  const point2El = clonedGraph.querySelector(`[coordinates="${point2}"] .point-circle`);

  const pointClasses = ["active", "scale-down"];

  point1El.classList.add(...pointClasses);
  point2El.classList.add(...pointClasses);

  point1El.parentElement.classList.add("active-circle-1");
  point1El.parentElement.parentElement.classList.add("active-grid-1");

  point2El.parentElement.classList.add("active-circle-2");
  point2El.parentElement.parentElement.classList.add("active-grid-2");

  const point1BoxesInGrid = clonedGraph.querySelectorAll(".active-grid-1 .box");
  const point1BridsInWrapper = clonedGraph.querySelectorAll(".grid-boxes .grid");
  
  const point2BoxesInGrid = clonedGraph.querySelectorAll(".active-grid-2 .box");
  const point2BridsInWrapper = clonedGraph.querySelectorAll(".grid-boxes .grid");

  let point1MarginX = "";
  let point1MarginY = "";
  
  let point2MarginX = "";
  let point2MarginY = "";

  // Point 1
  point1BoxesInGrid.forEach((box, index) => {
    if(box.classList.contains("active-circle-1")){
      point1MarginX = index + 1;
    }
  });

  point1BridsInWrapper.forEach((grid, index) => {
    if(grid.classList.contains("active-grid-1")){
      point1MarginY = index + 1;
    }
  });

  // Point 2
  point2BoxesInGrid.forEach((box, index) => {
    if(box.classList.contains("active-circle-2")){
      point2MarginX = index + 1;
    }
  });

  // Active Grid
  point2BridsInWrapper.forEach((grid, index) => {
    if(grid.classList.contains("active-grid-2")){
      point2MarginY = index + 1;
    }
  });

  const x1 = point1MarginX * BOX_WIDTH;
  const y1 = point1MarginY * (BOX_WIDTH - 1);
  const x2 = point2MarginX * BOX_WIDTH;
  const y2 = point2MarginY * (BOX_WIDTH - 1);

  const correctSvgLine = clonedGraph.querySelector("#svg-line");

  correctSvgLine.setAttribute("x1", x1)
  correctSvgLine.setAttribute("y1", y1)
  correctSvgLine.setAttribute("x2", x2)
  correctSvgLine.setAttribute("y2", y2)
  correctSvgLine.setAttribute("stroke", "#673ab7")
  correctSvgLine.setAttribute("marker-start", "url(#start-arrow)")
  correctSvgLine.setAttribute("marker-end", "url(#end-arrow)")
  // marker-start="url(#start-arrow)" marker-end="url(#end-arrow)"

}

const comparePointsAndShowResult = (collectedPoints, solutionPoints) => {
  if(collectedPoints.length > 0 && solutionPoints.length > 0){
    // console.log("Collected Points: ", collectedPoints);
    // console.log("Solution: ", solutionPoints);
    const collectedPoint_1 = collectedPoints[0]
    const collectedPoint_2 = collectedPoints[1];

    const solutionPoint_1 = solutionPoints[0];
    const solutionPoint_2 = solutionPoints[1];

    if(collectedPoint_1 == solutionPoint_1 && collectedPoint_2 == solutionPoint_2){
      // console.log("Correct Answer!");
      correctAnswerPopup.classList.add("active");
      wrongAnswerPopup.classList.remove("active");
    }
    else{
      console.log("Wrong Answer!");
      // popupAnswer.classList.add("active");
      correctAnswerPopup.classList.remove("active");
      wrongAnswerPopup.classList.add("active");
      drawCorrectLineOnGraph(solutionPoint_1, solutionPoint_2);
    }
  }
  else{
    console.log("Something Missing!");
  }
}

const newProblemButton = document.querySelector(".new-problem-button");
newProblemButton.addEventListener("click", e => {
  e.preventDefault();
  createGraphingLineEquation();

  const equationObject = createGraphingLineEquation();

  const solutionPoint1 = `(${equationObject.point1.x1}, ${equationObject.point1.y1})`;
  const solutionPoint2 = `(${equationObject.point2.x1}, ${equationObject.point2.y1})`;
  
  solutionPoints = [solutionPoint1, solutionPoint2];

  submitAnswerButton.addEventListener("click", () => {
    comparePointsAndShowResult(collectedPoints, solutionPoints);
  });

  updateSolution(equationObject);
})

document.addEventListener("DOMContentLoaded", () => {
  newProblemButton.click();
});

const closePopupButton = document.querySelector(".popup-close-button");
closePopupButton.addEventListener("click", () => {
  popupAnswer.classList.remove("active");
});

const tab2ShowSolutionButton = document.querySelector(".wrong-answer-show-solution-btn");
tab2ShowSolutionButton.addEventListener("click", () => {
  wrongAnswerPopup.classList.remove("active");
  setTimeout(() => {
    popupAnswer.classList.add("active");
  }, 300);
});

