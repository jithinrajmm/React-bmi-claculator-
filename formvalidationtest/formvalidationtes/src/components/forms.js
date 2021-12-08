import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Form() {
  const [length,setLength] = useState('10');
  console.log("this is from length❤❤",length)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    if (data){
      console.log(data);
    }
    
    reset();
    console.log(watch())
  };
 

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <h1 for="exampleInputEmail1">Fill The Form</h1>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
            {...register("name", {
              required: "Please enter the name",
              pattern: {
                value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                message: "name should be characters",
              },
              minLenght: {
                value: 4,
                message: "length should be greater than 4",
              },
            })}
            onKeyUp={() => {
              trigger("name");
            }}
          />
          {errors.name && (
            <small id="emailHelp" className="form-text text-left text-danger">
              {errors.name.message}
            </small>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Please enter age"
            {...register("age", {
              required: "the age is mandatory",
              min: { value: 18, message: "the age should be greater than 18" },
              max: { value: 80, message: "the age should be lessthan 80" },
              pattern:{value:/^[0-9]*$/,message:"only digits are allowed"}
            })}
            onKeyUp={() => {
              trigger("age");
            }}
          />
          {errors.age && (
            <small id="emailHelp" className="form-text text-left text-danger">
              {errors.age.message}
            </small>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Please enter phone Number"
            {...register("phonenumber", {
              required: "the phone number is mandatory",
              pattern: {
                value: /^(\+\d{1,3}[- ]?)?\d*$/,
                message: "no a valid mobile number",
              },
            })}
           
            onKeyUp = {(event)=>{
              trigger("phonenumber")
              setLength((event.target.value).length)
            }}
        
          />
          {/* {errors.phonenumber && (
            <small id="emailHelp" className="form-text text-left text-danger">
              {errors.phonenumber.message}
            </small>
          )} */}
          {errors.phonenumber ? <small id="emailHelp" className="form-text text-left text-danger">
              {errors.phonenumber.message}
            </small>: length<10 ?  <small id="emailHelp" className="form-text text-left text-danger">
              the number shoulb be 10 digits you gave {length}
            </small>: length>10 ?  <small id="emailHelp" className="form-text text-left text-danger">
              the number should be 10 you gave {length}
            </small>: null }
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Please enter Your Email"
            autoComplete='off'
            {...register("email", {
              required: "the email is madatory",
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "not a valid message",
              },
            })}
            onKeyUp={() => {
              trigger("email");
            }}
          />
          {errors.email && (
            <small id="emailHelp" className="form-text text-left text-danger">
              {errors.email.message}
            </small>
          )}
        </div>
        <div class="form-group">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            {...register("message", {
              required: "the message is mandatory",
              minLength: {
                value: 10,
                message: "message should be 10 characters",
              },
              maxLength: {
                value: 18,
                message: "the message should be 18 characters",
              },
            })}
            onKeyUp = {()=>{
                trigger("message")
            }}
          ></textarea>
          {errors.message &&  <small id="emailHelp" className="form-text text-left text-danger">
           {errors.message.message}
          </small>}
         
        </div>

        <button type="submit" className="btn btn-block btn-outline-dark">
          Submit
        </button>
      </form>
    </>
  );
}
