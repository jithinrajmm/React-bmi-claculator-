

function Bmiscore ({bmi,bmitype}){
    // destriructuring props

    //const {bmi,bmitype} = props
    // we can simplify this, just pass the varibles directly to argument where the place of props argument
    return (
        
        <div className="shadow bg-white p-5 rounded text-center">
           <div>Your BMI score</div>
           <div className="row mt-2 justify-content-center">
               <div className="col-md-5 alert alert-primary">{bmi}</div>
           </div>
           <div className="h3 fs-9 fw-bold text-danger">
               {bmitype}

           </div>
           <div className="h5 text-dark"><q>you have to reduce <span className="text-danger">12 </span>kg</q></div>
         
     
        </div>
      
    )
}
export default Bmiscore;