import React,{Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import LoanAppTab from "./pages/LoanApp";
import CreditTab from "./pages/CreditTab";
import CreditReportTab from "./pages/CreditReport";
import HelpTab from "./pages/Help";
import SettingsTab from "./pages/Settings";
import SignIn from "./pages/SignIn";
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
      {/* <Route exact path="/signin" component={SignIn} />
      <Route exact path="/" component={LandingPage} />
      <Route path="/creditTab" component={CreditTab} />
      <Route path="/loanApp" component={LoanAppTab} />
      <Route path="/creditReport" component={CreditReportTab} />
      <Route path="/help" component={HelpTab} />
      <Route path="/settings" component={SettingsTab} /> */}
      <Authentication user={user}/>
      </Switch>
    </Router>
  );
  }
}

export default App;
