import "./App.css";
import Form from "./components/Form";
import Bmiscore from "./components/Bmiscore";
import Bmilist from "./components/Bmilist";
import { useState } from "react";


function App() {
  // let bmi = 18;
  const [bmi, setbmi] = useState(0);
  const [bmitype, setBmiType] = useState("Not calculated");
  const [bmiPresent, setbmiPresent] = useState(false);
  const [bmirange, setbmirange] = useState(
    {
      underWeight : {low: ""},
      Normal : {low:'',high:''},
      overWeight : { low: "",high: " "},
      obesityOne : {low:' ',high: ''},
      obesityTwo : {low: "",high: ""},
      obesityThree : {high : ""}
    }
  );

  

  // console.log("jithin raj mm")
  // const changeValue = ()=>{
  //   // bmi = 19
  //   // instead of this we are using the function setbmi()
  //   // from useState 😊
  //   setbmi(bmi+1)

  // }

  // whenever we want to set the state we can call that function directly from
  // the button events
  //  <button onClick={()=>setbmi(120)}>click me guys</button>

  // taking value from form child component
  const formValues = (weightC, heightC) => 
  {
    let finalbmi = calculateBmi(weightC,heightC)
    setbmi(finalbmi)
    setBmiType(bmiTypeSelection(finalbmi))
    setbmiPresent(true)
    const range = 
    {
      underWeight : {low: claculateWeight(18.5,heightC)},
      Normal : {low:claculateWeight(18.5,heightC),high:claculateWeight(24.9,heightC)},
      overWeight : { low: claculateWeight(25,heightC),high: claculateWeight(29.9,heightC)},
      obesityOne : {low:claculateWeight(29,heightC),high:claculateWeight(34.9,heightC)},
      obesityTwo : {low: claculateWeight(34,heightC),high: claculateWeight(39.9,heightC)},
      obesityThree : {high : claculateWeight(40,heightC)}
    }
    setbmirange(range);
  };

  // this arrow function we can write in simple 
  // const calculateBmi=(weight,height)=>{
  //   return (weight/(height*height)).toFixed(2)
  // }

  const calculateBmi = (weight,height)=> (weight/(height*height)).toFixed(2);
  const claculateWeight = (bmivalue,height) => (bmivalue * height * height).toFixed(2);

  // find the bmtype using a function , and use if else to find the bmitype
  
  

  const bmiTypeSelection = (bmi) =>{
    if(bmi<18.5){
      return "Under weight";
    }
    else if(bmi>= 18.5 && bmi < 24.9 ){
      return "Normal"
    }
    else if (bmi>=24.9 && bmi < 29.9){
      return "Over Weight";

    }
    else if ( bmi>= 29.9 && bmi < 34.9 ){
      return "Obesity class I";
    }
    else if (bmi >= 34.9 && bmi < 39.9){
      return "Obesity class II";
    }
    else if (bmi >39.9){
      return "Obesity class III";
    }
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row p-2 justify-content-center">
          <Form getForm={formValues} />
          {/* disign form using bootstrap */}
        </div>
        {bmiPresent === true ?
        <div className="row justify-content-center">
          <div className="col col-12 col-md-5">
            <Bmiscore bmi={bmi} bmitype= {bmitype} />
          </div>
          <div className="col mt-2 col-12 col-md-7">
            <Bmilist range = {bmirange} bmi = {bmi}></Bmilist>
          </div>
        </div>: null}
      </div>
    </>
  );
}

export default App;
