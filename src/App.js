import React,{Component} from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Authentication from './Authentication';
import {auth} from './firebase';

class App extends Component {
  state={
    user:null,
  }

  unsubscribeFromAuth = null;

  componentDidMount=async ()=>{
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ user });
    });

  }
  componentWillUnmount=()=>{
    this.unsubscribeFromAuth();
  }
  render(){
    const {user} = this.state;
  return (
    <Router>
      <Switch>
      <Authentication user={user}/>
      </Switch>
    </Router>
  );
  }
}

export default App;
