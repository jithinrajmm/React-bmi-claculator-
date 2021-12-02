import React from "react";
export default function Bmilist({range,bmi}) {

  console.log(bmi,"this is the bmi vlue access from the bmi list");
  
  
  const border = {
    border: "2px solid red"
  }
 

  return (
    <>
      <div className="text-center shadow-sm rounded">
        <ul className="list-group">
          <li className="list-group-item">
            <div className="row">
              <div className="col col-md-4 fw-bold">Type</div>
              <div className="col col-md-4 fw-bold">BMI</div>
              <div className="col col-md-4 fw-bold">WEIGHT</div>
            </div>
          </li>

          <li className="list-group-item">
            <div className="row" style={bmi<18.5 ? border : null}>
              <div className="col col-md-4">UnderWeight</div>
              <div className="col col-md-4 ">&lt; 18.5</div>
              <div className="col col-md-4 ">{range.underWeight.low}</div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row" style = {bmi <25 && bmi >18.5 ? border : null }>
              <div className="col col-md-4 "> Normal</div>
              <div className="col col-md-4 ">18.5 - 24.9 </div>
              <div className="col col-md-4 ">{range.Normal.low} - {range.Normal.high}</div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row" style = {bmi <30 && bmi > 25 ? border : null}>
              <div className="col col-md-4 "> Over Weight</div>
              <div className="col col-md-4 "> 25 - 29.5</div>
              <div className="col col-md-4 ">{range.overWeight.low}-{range.overWeight.high}</div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row" style={bmi < 35 && bmi <30 ? border: null}>
              <div className="col col-md-4 "> Obesity Class I</div>
              <div className="col col-md-4 ">30 - 34.9 </div>
              <div className="col col-md-4 ">{range.obesityOne.low}-{range.obesityOne.high}</div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row" style= {bmi < 45 && bmi >35 ? border: null}>
              <div className="col col-md-4 "> Obesity Class II</div>
              <div className="col col-md-4 "> 35 - 44.9</div>
              <div className="col col-md-4 ">{range.obesityTwo.low}- {range.obesityTwo.high}</div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="row" style={bmi >45 ? border : null }>
              <div className="col col-md-4 "> Obesity Class III</div>
              <div className="col col-md-4 "> &gt; 45</div>
              <div className="col col-md-4 ">{range.obesityThree.high}</div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
