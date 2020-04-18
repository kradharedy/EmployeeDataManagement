import React from 'react'

 const AddEmployee = ({empData,DeleteEmpData})=>{
     console.log("test.."+empData+".."+empData.length)
    const AddedEmp = empData.length ? (empData.map(emp=>{
    return(<div  key={emp.id}>
        <h1>hello</h1>
            <span onClick={()=>DeleteEmpData(emp.id)}>{emp.name}</span>
        </div>)}
    )) : (<h1>no data</h1>)

    return(
    <div>{AddedEmp}</div>
    )
}

export default AddEmployee;