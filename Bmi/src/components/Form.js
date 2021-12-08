import "../App.css";
import { useState } from "react";

function Form({ getForm }) {
  const [weight, setweight] = useState("");
  const [height, setheight] = useState("");
  const [Alert, setAlert] = useState(false);

  const onsubmit = (event) => {
    event.preventDefault();

    if (isNaN(weight) || isNaN(height)) {
      setAlert(true);
    } else {
      setAlert(false);
      getForm(weight, height);
      setweight("")
      setheight("")
    }
  };

  // insted of this function we assigned function in inputelement
  // const onchangeWeight=(event)=>{
  //     event.preventDefault();
  //     setweight(event.target.value)
  //     console.log(event.target.value)

  // }
  // creating a fuction for geting the values and pass to another component
  // this function is called from the form

  // this function is used to check the codition and display element
  // based on some values
  // representtion of this function is called in jsx with variable {errorMessage}
  // const onSubmitForm= (event)=>{
  //     event.preventDefault();
  //     if (isNaN(weight) || isNaN(height)){
  //         setAlert(true)
  //     }
  //     else{
  //         setAlert(false)
  //     }
  // }
  // let errorMessage;
  // if (Alert){
  //     errorMessage = <div className="alert alert-danger mt-4" role="alert">Please enter numbers only</div>
  // }
  // else{
  //     errorMessage = "";
  // }

  // ternary operator

  let error = <div className="alert alert-danger">this is not a number</div>;

  return (
    <div className="shadow col-md-4 p-3 mb-5 mt-5 bg-white rounded">
      <h1 className="text-center text-dark"> BMI calculator</h1>
      {/* <* onSubmit={onSubmitForm}>*/}
      <form onSubmit={onsubmit}>
        <div className="row">
          <div className="col col-sm-6 text-center">
            <input
              type="text"
              className="form-control text-center"
              id="exampleInputPassword1"
              placeholder="Weight(kg)"
              required
              value = {weight}
              onChange={(event) => {
                setweight(event.target.value);
              }}
            />
          </div>
          <div className="col col-12 col-sm-6 text-center">
            <input
              type="text"
              className="form-control text-center"
              id="exampleInputPassword1"
              placeholder="Height(m)"
              required
              value={height}
              onChange={(event) => {
                setheight(event.target.value);
              }}
            />
          </div>
          <div className="row mt-2">
            <div className="col col-sm-12 d-flex justify-content-center">
              <input type="submit" className="btn btn-dark text-white" />
            </div>
          </div>
        </div>
      </form>
      {/* this is one mehode to display the element based on the condition */}
      {/* {Alert == true && <div className="alert alert-danger mt-4" role="alert">please enter the number</div> } */}

      {/* another way to display element based on the conditions 
        For this we have to write a function */}

      {/* {errorMessage} */}

      {/* ternary operation */}
      {/* ternary operaton if tha condition evaluate true its provide the first value
        if it is false it provide the second value */}

      {Alert === true ? error : ""}
    </div>
  );
}

export default Form;
