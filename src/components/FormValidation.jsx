import React, { Component } from 'react'

export class FormValidation extends Component {
    constructor(props){
        super(props)
        this.state={fname:"", lname:"", email:"", mobile:"", pass:""}
    }

    //
    updateHandler = (event) =>{
        const {fname, lname, email, mobile, pass, value} = event.target;
        this.setState({...this.state,[name]:value});

    } 
    //
    submitHandler = (event) =>{
        event.preventDefault();

    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                        <label htmlFor="">First Name:</label>
                        <input type="text" name="fname" onChange={this.updateHandler}/>
                        <br />
                        <label htmlFor="">Last Name:</label>
                        <input type="text" name="lname" onChange={this.updateHandler}/>
                        <br />
                        <label htmlFor="">Email:</label>
                        <input type="email" name="email" onChange={this.updateHandler}/>
                        <br />
                        <label htmlFor="">Mobile No.:</label>
                        <input type="text" name="mobile" onChange={this.updateHandler}/>
                        <br />
                        <label htmlFor="">Password:</label>
                        <input type="password" name="pass" onChange={this.updateHandler}/>
                        <br />
                        <input type="submit" value="submit"  />
                </form>
                
                
            </div>
        )
    }
}

export default FormValidation;
