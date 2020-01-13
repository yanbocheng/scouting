import React from 'react';
import HeatMap from 'react-heatmap-grid';
//from https://www.npmjs.com/package/react-heatmap-grid
var dataThing=[ 18,   83,   40,   84,   30,   57,   14,
  8 ,   51,   92,   72,    2,   11,
 50,   76,   24,   33,   23,   86,   66,
 94,   32,   98,   68,   21,   89,   77,
 36,    9,   46,   34,   54,   97,   58,
 87,   59,   48,   49,   38,    7,   19,
 67,   75,   55,   73,   56,   74,   15,
  5,   64,   96,   44,   71,   91,   39,13,   41,   47,    4,   88,   43,   10,
 31,   82,   99,   81,   53,   22,   12,
 60,   63,   28,   78,   17,   35,   37,
 80,   26,   20,    1,  100,   69,   16,
  6,   42,   62,   93,   65,    3,   29,
 79,   61,   27,   70,   52,   90,   25,
 98,   41,   64,   18,   57,   49,   48,
 68,   90,   44,   45 ,  97 ,  95 ,  70,
  5,   43  ,  6  , 53 ,  52 ,  37 ,  28,
  3  , 34 ,  92 ,  77  , 54  ,  8  , 46,
 85 ,  22  , 58 ,  89 ,  40 ,  65 ,  31,
 56 ,  62 ,  30,   50 ,  26,   16 ,  72,
 80 ,  35 ,  69 ,  71,   36 ,  38 ,  23,
 32  , 86 , 100 ,   1 ,  29 ,  12 ,  25,
 19  , 99 ,  14 ,  11  , 83  , 42  , 75,
 24  , 74 ,  33   , 7  , 63,   66 ,  61,78];
const xLabels = new Array(24).fill(0).map((_, i) => `${i}`);
 
// Display only even labels
const xLabelsVisibility = new Array(24)
  .fill(0)
  .map((_, i) => (i % 2 === 0 ? true : false));
 
const yLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var i=0;
const data = new Array(yLabels.length)
  .fill(0)
  .map(() =>
  new Array(xLabels.length).fill(0).map(()=>(dataThing[i,i++]))
  );

class HeatMapp extends React.Component{

  render(){
    return(
      <div style={{ fontSize: "13px" }}>
      <HeatMap
        xLabels={xLabels}
        yLabels={yLabels}
        xLabelsLocation={"bottom"}
        xLabelsVisibility={xLabelsVisibility}
        xLabelWidth={60}
        data={data}
        squares
        onClick={(x, y) => console.log(x,y,dataThing[x+y]+"%")}
        cellStyle={(background, value, min, max, data, x, y) => ({
          background: `rgb(0, 151, 230, ${1 - (max - value) / (max - min)})`,
          fontSize: "11.5px",
          color: "#000"
        })}
        cellRender={value => value && `${value}%`}
      />
    </div>
  );
  }
    
    
}
export default HeatMapp;

 

