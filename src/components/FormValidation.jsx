import React, { Component } from 'react';
import {Form, Row, Col} from "react-bootstrap";

import "./form.css";

export class FormValidation extends Component {
    constructor(props){
        super(props)
        this.state={fname:"", lname:"", mailCheck:"", mobile:"", pass:"", errMsgFN:"", errMsgLN:"", errMsgMail:"", errMsgMob:"", errMsgPass:""}
    }

    //synthetic event
    updateHandler = (event) =>{
        const {name, value} = event.target;
        console.log("name===>",event.target.value);
        this.setState({...this.state,[name]:value});
    } 

    //fname validation
    handleFName = () =>{
        this.setState({errMsgFN:""});

        let nameRegex=/^[a-zA-Z ]+$/;
        if(this.state.fname===""){
            this.setState({errMsgFN: "*Can't be empty !!"});  
            return false; 
            
        }else if(nameRegex.test(this.state.fname)===false){
            this.setState({errMsgFN: "*Should be alphabet only !!"});
            return false;

        }else{
            return true;
        }
    }

    //lname validation
    handleLName = () =>{
        this.setState({errMsgLN:""});

        let nameRegex=/^[a-zA-Z ]+$/;
        if(this.state.lname===""){
            this.setState({errMsgLN: "*Can't be empty !!"});
            return false;
            
        }else if(nameRegex.test(this.state.lname)===false){
            this.setState({errMsgLN: "*Should be alphabet only !!"});
            return false;

        }else{
            return true;
        }
    }

    //email validation
    handleMail = () =>{
        this.setState({errMsgMail:""});

        let mailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
        if(this.state.mailCheck ===""){
            this.setState({errMsgMail: "*Can't be empty !!"});
            return false;

        }else if(mailRegex.test(this.state.mailCheck)==false){
            this.setState({errMsgMail: "*Invalid Email !!"});
            return false;

        }else{
            return true;
        }
    }

    //Mobile validation
    handleMobile = () =>{
        this.setState({errMsgMob:""});

        let mobRegex = /^[6-9][0-9]{9}$/;
        if(this.state.mobile === ""){
            this.setState({errMsgMob: "*Can't be empty !!"});
            return false;
            
        }else if(mobRegex.test(this.state.mobile)===false){
            this.setState({errMsgMob: "*Should Only --Number, Start with 6-9 and ==10 !!"});
            return false;

        }else{
            return true;
        }
    }

     //Mobile validation
     handlePass = () =>{
        this.setState({errMsgPass:""});

        let passRegex=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
        if(this.state.pass === ""){
            this.setState({errMsgPass: "*Can't be empty !!"});
            return false;
            
        }else if(passRegex.test(this.state.pass)==false){
            this.setState({errMsgPass: "*Should contain -- Capital, Small, Special Symbol only !!"});
            return false;

        }else if(this.state.pass.length < 5 || this.state.pass.length > 12  ){
            this.setState({errMsgPass: "*Should contain atleast 5 and atmost 12 chars !!"});
            return false;

        }else{
            return true;
        }
    }

    //
    submitHandler = (event) =>{
        event.preventDefault();
        if(this.handleFName===true && this.handleLName===true && this.handleMail===true && this.handleMobile===true && this.handlePass===true ){
            alert("Congratulations !!");
        }else{
            alert("Invalid Entries :((");
        }
        
    }

    render() {
        return (
            <div className='myForm'>
                <Form onSubmit={this.submitHandler}>
                    <Row>
                        <Col md={2}>
                            <label htmlFor="">First Name:</label>
                        </Col>
                        <Col md={6}>
                            <Form.Control type="text" name="fname" placeholder="First Name" onChange={this.updateHandler} onBlur={this.handleFName}/>
                        </Col>
                        <Col>
                        {this.state.errMsgFN!=='' && 
                            <p style={{color:'red'}}> {this.state.errMsgFN} </p>}
                        </Col>
                    </Row>
                        <br />
                    <Row>
                        <Col md={2}>
                            <label htmlFor="">Last Name:</label>
                        </Col>
                        <Col md={6}>
                            <Form.Control type="text" placeholder="Last Name" name="lname" onChange={this.updateHandler} onBlur={this.handleLName}/>
                        </Col>
                        <Col>
                        {this.state.errMsgLN!=='' && 
                            <p style={{color:'red'}}> {this.state.errMsgLN} </p>}
                        </Col>
                    </Row>
                        <br />
                    <Row>
                        <Col md={2}>
                            <label>Email:</label>
                        </Col>
                        <Col md={6}>
                            <Form.Control type="email" name="mailCheck" placeholder="Email" onChange={this.updateHandler} onBlur={this.handleMail}/>
                        </Col>
                        <Col>
                        {this.state.errMsgMail!=='' && 
                            <p style={{color:'red'}}> {this.state.errMsgMail} </p>}
                        </Col>
                    </Row>
                        <br />
                    <Row>
                        <Col md={2}>
                            <label htmlFor="">Mobile Number:</label>
                        </Col>
                        <Col md={6}>
                            <Form.Control type="text" name="mobile" placeholder="Mobile Number" onChange={this.updateHandler} onBlur={this.handleMobile}/>
                        </Col>
                        <Col>
                        {this.state.errMsgMob!=='' && 
                            <p style={{color:'red'}}> {this.state.errMsgMob} </p>}
                        </Col>
                    </Row>
                        <br />
                    <Row>
                        <Col md={2}>
                            <label htmlFor="">Password</label>
                        </Col>
                        <Col md={6}>
                            <Form.Control type="password" name="pass" placeholder="Password" onChange={this.updateHandler} onBlur={this.handlePass}/>
                        </Col>
                        <Col>
                        {this.state.errMsgPass!=='' && 
                            <p style={{color:'red'}}> {this.state.errMsgPass} </p>}
                        </Col>
                    </Row>
                        <br />
                    <Form.Control type="submit" value="submit" onClick={this.submitHandler}/>
                </Form>                
            </div>
        )
    }
}

export default FormValidation;
