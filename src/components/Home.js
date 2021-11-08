import LoginForm from "./Login/LoginForm";
import { useState } from "react";
import Employee from "./Employee/Employee";

const DUMMY_EMPLOYEES = [
    {
      id:"1",
      firstName:"Venumuddala",
      lastName:"Rishitha",
      email:"r@gmail.com"
    },
    {
        id:"2",
        firstName:"Venumuddala",
        lastName:"Rishitha",
        email:"r@gmail.com"

    }
];
const Home=()=>{

    const [employees,setEmployees]=useState(DUMMY_EMPLOYEES);
     const onSubmitHandler=(employee)=>{
        setEmployees(prevEmp=>{
            return [employee,...prevEmp]
        });
        
    }

    return(
    <>
        <div>
            <LoginForm onFormSubmit={onSubmitHandler}/>
            <div>
                <h2>Employees</h2>
            </div>
            <Employee input={employees}/>
        </div>

    </>);

    }

export default Home;