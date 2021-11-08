import "./Employee.css";
const Employee=(props)=>{
    return(
    <div className="employees">FirstName LastName Email
        {
        props.input.map(emp=>(
                <>
                <div className="employee-coloumn"> 
                    <div className="employee-coloumn__description">
                        key={emp.id}<br></br>
                        {emp.firstName}<br></br>
                        {emp.lastName}<br></br>
                        {emp.email}<br></br>
                    </div>
                </div>
                </>
            ))

        }
    </div>)



}

export default Employee;