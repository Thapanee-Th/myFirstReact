import React, { Component } from 'react';
import './App.css';
//Add an event handler in the onChange attribute, and let the event handler update the state object:
class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
           username: '' ,
           age: null,
           errormessage: '',
           description: 'The content of a textarea goes in the value attribute',
           mycar: 'Volvo'
        };
    }
    //event handler in the onSubmit attribute
    mySubmitHandler = (event) => {
        //event.preventDefault() to prevent the form from actually being submitted.
        event.preventDefault();
        // validation when the form gets submitted
        let age = this.state.age;
        if (!Number(age)) {
            alert("Your age must be a number");
        }
     //   alert("You are submitting " + this.state.username);
    }
    myChangeHandler = (event) => {
        //Multiple Input Fields 
        //To access the fields in the event handler 
        //use the event.target.name and event.target.value syntax
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';
        //Validating Form Input
        
        if (nam === "age") {
            if (val != "" && !Number(val)){
                err = <strong>Your age must be a number</strong>
                //alert("Your age must be a number");
            } 
        }
        this.setState({errormessage: err});
        this.setState({[nam]: val});
        //get access to the field value by using the event.target.value syntax
        //this.setState({username: event.target.value});
    }
    render() {
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
          };
        let header = '';
        //Display the header only if username is defined
        if (this.state.username) {
        header = <h1>Hello {this.state.username} {this.state.age}</h1>;
        } else {
            header = '';
        }
      return (
        <form onSubmit={this.mySubmitHandler}>
       {header}
        <p style={mystyle}>Enter your name:</p>
        <input
          type='text'
          name='username'
          //adding event handlers in the onChange attribute
          onChange={this.myChangeHandler}
        />
        <p style={{backgroundColor: "lightblue"}}>Enter your age:</p>
        <input 
        type ='text'
        name = 'age'
        onChange={this.myChangeHandler}/>
        <input type='submit'></input>
        
        {this.state.errormessage}
        <br/>
        <textarea value={this.state.description} />
        <br/>
        <select value={this.state.mycar}>
            <option value="Ford">Ford</option>
            <option value="Volvo">Volvo</option>
            <option value="Fiat">Fiat</option>
        </select>
        </form>
      );
    }
  }

  export default MyForm;