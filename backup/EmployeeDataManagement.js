import React from 'react';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import EmployeeDataMagangement from './EmployeeDataMagangement.css';
import './bootstrap.min.css';

class EmployeeDataManagement extends React.Component{
    constructor(props){
        super(props);
this.state={
employeeData:[{
    name:'',
    job:''
}]
}

this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bin(this);
}

    handleChange=(e)=>{
this.setState({
    [e.target.name] : e.target.value
});


handleSubmit=(e)=>{
    this.setState({
        employeeData : this.state
    })  
}
console.log(e.target.name);
}
    render(){
        return (<div>
            <div><Header/></div>
            <div><EmployeeTable employeeData ={this.employeeData}/></div>
            <div><AddEmployee handleChange={this.handleChange} handleSubmit={this.handleSubmit}/></div>
            </div>
            ); 
    }
}

function Header(){
    return(<div className="empHeader"> Add an employee with a name and a job to the table.</div>
    );
}

function EmployeeTable(employeeData){
    return(
<TableContainer>
    <Table>
    <TableHead>
        <TableRow className="thead-dark">
            <TableCell><strong>Name</strong></TableCell>
            <TableCell><strong>Job</strong></TableCell>
            <TableCell><strong>Remove</strong></TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
<TableRow>
</TableRow>
    </TableBody>
    </Table>

</TableContainer>);
}


function AddEmployee({handleChange,handleSubmit}){
    return(<form  onSubmit={handleSubmit}>  
        <div className="form-group">    
<label htmlFor="name">Name</label>
<input type="text" className="form-control" id="name" onChange={handleChange}></input>
</div>
<div className="form-group">
<label htmlFor="job" >Job</label>
<input type="text" className="form-control"  id="job" onChange={handleChange}></input>
</div>
<input type="button" value="Submit" className="btn btn-primary"></input>
</form>
    );
}

export default EmployeeDataManagement;