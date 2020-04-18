import React from 'react';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import EmployeeDataMagangement from './EmployeeDataMagangement.css';
import './bootstrap.min.css';

const DisplayEmp = ({empData,DeleteEmpData}) =>{
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
    <TableBody>{empData.map((eachEmp)=>(
    <TableRow key={eachEmp.id}>
    <TableCell>{eachEmp.name}</TableCell>
    <TableCell>{eachEmp.job}</TableCell>
    <TableCell>
    {empData.length} ?  
        return(<div>
            <input type="button" onClick={()=>DeleteEmpData(eachEmp.id)} className="btn btn-primary" value="Delete"></input>
        </div>): null;
    </TableCell>
</TableRow>))}
    </TableBody>
    </Table></TableContainer>);
}

export default DisplayEmp;