import React, { Component } from "react";
import {Card, Row} from "react-bootstrap";
import "./post.css";

class Post extends Component{
    render(){
        return(
            <div>
                <h3>POST component</h3>
           
                <Row>
                {this.props.list1.map((vals, index)=>{ 
                return(
                    
                        <Card id="myCard" style={{ width: '18rem' }} key={vals.id}>
                        <Card.Img variant="top" src={vals.myImage} height="200px" width="200px" />
                        <hr />
                                <Card.Body>
                                            <Card.Title><b>id:</b> {index + 1}</Card.Title>
                                            <Card.Text><b>postName:</b> {vals.postName}</Card.Text>
                                            <Card.Text><b>postDesc:</b> {vals.postDesc}</Card.Text>
                                            <Card.Text><b>postAuthor:</b> {vals.author}</Card.Text>
                                            <Card.Text><b>Date:</b> {vals.date}</Card.Text> 
                                </Card.Body>
                        </Card>
                    )
                })}
                </Row>
             
            </div>
        )
    }
}

export default Post;