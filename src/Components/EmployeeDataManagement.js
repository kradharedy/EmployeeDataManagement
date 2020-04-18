import React from 'react';
import EmployeeDataMagangement from './EmployeeDataMagangement.css';
import './bootstrap.min.css';
import  AddEmployee from './AddEmployee.js';
import AddInputs from  './AddInputs.js';
import DisplayEmp from './DisplayEmp.js';

class EmployeeDataManagement extends React.Component{
    state={empData:
        [{
            name:'yy',
            job:'bb',
        id:'1'}]
    }
    DeleteEmpData=(id)=>{
        const empData = this.state.empData.filter(emp =>
            {
                return emp.id !== id;
            })
            this.setState(
                {     empData 
                }
            )}
        AddNewEmp=(NewEmp)=>{
                NewEmp.id = Math.random();
                let empData = {...this.state.empData,NewEmp}
                this.setState(
                    {
                        empData
                    }
                );
                
            }
    render(){
        return(<div>
            <DisplayEmp empData={this.state.empData}></DisplayEmp>
<AddEmployee empData={this.state.empData} DeleteEmpData={this.DeleteEmpData}/>
<AddInputs AddNewEmp={this.AddNewEmp}></AddInputs>
console.log("aloo");
</div>
        );
    }
}

export default EmployeeDataManagement;