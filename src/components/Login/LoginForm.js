import { useState } from "react";
import Form from './form';

const LoginForm=(props)=>{

    const [empFirstName,setEmpFirstName]=useState('');
    const [email,setEmail]=useState('');
    const [empLastName,setEmpLastName]=useState('');
    const [id,setId]=useState(3);
    const [isValid,setIsValid]=useState(true);
    const submitHandler=(event)=>{
        setId(id=>id+1);
        event.preventDefault();
        if(empFirstName.trim().length=== 0){
            setIsValid(false)
            return;
        }
        const emp={
            id:id,
            firstName:empFirstName,
            lastName:empLastName,
            email:email,
        }
        props.onFormSubmit(emp);
        setEmpFirstName("");
        setEmpLastName("");
        setEmail("");
       };
    return(
        <>
        <form onSubmit={submitHandler}>
            <Form isValid={isValid}>
            <div className="input">
                <label className="label">FirstName</label>
                <input type="text" value={empFirstName} onChange={e=>setEmpFirstName(e.target.value)}/>
            </div>
            <div className="input">
                <label className="label">LastName</label>
                <input type="text" value={empLastName} onChange={e=>setEmpLastName(e.target.value)} />
            </div>
            <div className="input">
                <label className="label">Email</label>
                <input type="text" value={email} onChange={e=>setEmail(e.target.value)} />
            </div>
            <div className="button">
                <button type="submit">Add Employee</button>
            </div>
            </Form>
        </form>
        </>
    );
};

export default LoginForm;

