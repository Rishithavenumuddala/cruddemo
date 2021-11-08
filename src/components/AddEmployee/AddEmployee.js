import React,{useRef} from "react";
import classes from "./AddEmployee.css";
const AddEmployee=(props)=>{
    const firstNameRef=useRef('');
    const lastNameRef=useRef('');
    const emailRef=useRef('');

    const submitHandler=(event)=>{

        const employee={
            firstName:firstNameRef.current.value,
            lastName:lastNameRef.current.value,
            email:emailRef.current.value,
        }

        props.onAddEmployee(employee);
    }
    return(
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='firstName'>FirstName</label>
        <input type='text' id='firstName' ref={firstNameRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='lastName'>LastName</label>
        <input type='text' id='lastName' ref={lastNameRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='date'>Email</label>
        <input type='email' id='email' ref={emailRef} />
      </div>
      <button>Add Movie</button>
    </form>
    )


}

export default AddEmployee;