import React,{ useEffect, useState,useCallback } from "react";
import Employee from "./components/Employee/Employee.js";
import Home from "./components/Home.js";
import AddEmployee from "./components/AddEmployee/AddEmployee.js";

const App=()=>{
  const [employee,setEmployee]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
  const [error,setError]=useState(null);
  const fetchHandler=useCallback(async()=>{
    setIsLoading(true);
    setError(null);
    try{
    const response=await fetch("http://localhost:8081/api/employee");
    if(!response.ok){
      throw new Error(response.status);
    }
    const data=await response.json();
    const emp=[];
    Object.keys(data).forEach(key => emp.push({id : data[key].id,
    firstName: data[key].firstName,lastName:data[key].lastName,email:data[key].email}));
    setEmployee(emp);
    }catch(error){
      setError(error.status);
      console.log("the error is"+error);
    }
    setIsLoading(false);
},[]);

useEffect(()=>{
    fetchHandler();
  },[fetchHandler]);

  const addEmployeeHandler=async (employee)=>{
    try{
    const response=await fetch("http://localhost:8081/api/employee",{
      method:'POST',
      mode: 'cors',
      body:JSON.stringify(employee),
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
      }
    });
    if(!response.ok){
      console.log(response.statusText);
      throw new error(response.statusText);
    }
    const data=await response.json();
    console.log(data);
  }catch(error){
    setError(error.message);
  }
    
  }
  let content = <p>Found no movies.</p>;

  if (employee.length > 0) {
    content = <Employee input={employee} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }
return(
  <React.Fragment>
    <section>
      <AddEmployee onAddEmployee={addEmployeeHandler}/>
    </section>
    <section>
      <button onClick={fetchHandler}>Click Me</button>
    </section>
    <section>{content}</section>
  </React.Fragment>
)
}

export default App;
                 