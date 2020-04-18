import React from 'react'

class AddInputs extends React.Component{
 
    state={
        name:'',
        job:'',
        id:''
    }
    handleChange= (input,value) =>
    {
        this.setState(
            {
                [input]:value
            }
        )
    }

    handleSubmit=(e)=>
    {
        e.preventDefault();
        console.log(this.state);
        this.props.AddNewEmp(this.state);
        this.setState({
        name:'',
        job:''
        })
    }

    render(){
        return(
<div>
    <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name</label> 
          <input type="text" className="form-control" id="name" value={this.state.name} onChange={e=>this.handleChange('name',e.target.value)}></input> 
        </div>
        <div>
          <label htmlFor="job">Job</label> 
          <input type="text" className="form-control" id="job"  value={this.state.job}  onChange={e=>this.handleChange('job',e.target.value)}></input> 
        </div>
        <div>
        <input type="submit" className="btn btn-primary"></input>
        </div>
    </form>
</div>
        )
    }
}

export default AddInputs;