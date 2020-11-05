import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import MyForm from './MyForm';
import styles from './mystyle.module.css'; 
class App extends Component {
  Avatar = (user) => {
    return (
      <img className="Avatar"
          src={this.props.user.avatarUrl}
          alt={this.props.user.name}
      />
    );
  }
  UserInfo = (user) => {
    return (
      <div className="UserInfo">
        <this.props.Avatar user={this.props.user} />
          <div className="UserInfo-name">
            {this.props.user.name}
          </div>
        </div>
    );
  }
  Comment = (props) =>  {
    return (
      <div className="Comment">
        <this.props.UserInfo user={this.props.author} />
        <div className="Comment-text">
          {this.props.text}
        </div>
        <div className="Comment-date">  
        </div>
      </div>
    );
  }
  // วิธีเรียกใช้ 
  //<this.hello surname={this.props.surname}/>
  hello = (props) => "Hello "+ props.surname;

  constructor(props) {
    super(props);
    this.state = {
      age: 23,
      blood : "B",
      year: 1997,
      favoritecolor: "red"
    };
  }
   shoot(a) {
    alert(a);
  }
  
  //ทำให้สามารถเปลี่ยนค่า constructor ในแท็กที่เรียกใช้ได้ ซึ่งจะทำให้ ฟังก์ชันที่เกี่ยวกับ prop ใช้งานไม่ได้
  /*
  static getDerivedStateFromProps(props, state) {
    return {blood: props.bld };
  }
  */

  //เมื่อเรียกใช้ (onClick)
  changeBlood = () => {
    if(this.state.blood === "B"){
      this.setState({blood: "B+"});
    }else{
      this.setState({blood: "B"})
    }
  }
  //render is required and will always be called
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1> {this.props.name} <this.hello surname={this.props.surname}/></h1>
        <h2> age  {this.state.age}</h2>
        <h2> blood group {this.state.blood}</h2>
        <h2> since  {this.state.year}</h2>
        </header>
        <h1 className={styles.bigblue}>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
        <button type="button" onClick={this.changeBlood} >Change color</button>
        <button onClick={() => this.shoot("Goal")}>Passing Arguments</button>
        <button onClick={this.shoot.bind(this, "Goal")}>Bind the event handler</button>
        <div><MyForm/></div>

        
      </div>
    );
  }
  //เปลี่ยนแปลงค่าหลังจาก render แล้ว 
  //the first method that is called when a component gets updated
  componentDidMount() {
    setTimeout(() => {
      this.setState({age: 19});
      this.setState({favoritecolor: "yellow"});
    }, 1000)
  }
  //React should continue with the rendering or not
  //Stop the component from rendering at any update
  shouldComponentUpdate() {
    return true;
  }

  // you can check what the values were before the update.
  // include the componentDidUpdate() method
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
    "Before the update, the favorite was " + prevState.favoritecolor;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
  }
  
}


export default App;
