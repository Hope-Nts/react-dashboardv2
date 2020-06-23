import React,{Component} from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Authentication from './Authentication';
import { AuthProvider } from "./Auth";
class App extends Component {
  render(){
  return (
    <AuthProvider>
    <Router>
      <Switch>
      <Authentication />
      </Switch>
    </Router>
  </AuthProvider>
  );
  }
}

export default App;
