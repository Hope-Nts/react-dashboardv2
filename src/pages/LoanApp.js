import React, { Component } from "react";
import styled from "styled-components";
import OtherStatistics from "../contentComponents/dashboardComponents/OtherStatisticsCard";
import { Row } from "simple-flexbox";

const CreditTabContainer = styled.div`
  background: var(--main-light-blue);
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 20px;

  .input-container: {
    width: 70%;
    margin-right: 20px;
  }

  .personal-info-labels-list {
    margin-left: -35px;
    li {
      display: inline;
      margin-right: 100px;
      list-style: none;
    }
  }

  .row2-labels-list {
    margin-left: -35px;
    li {
      display: inline;
      margin-right: 100px;
      list-style: none;
    }
  }

  .personal-info-list {
    margin-left: -40px;
    margin-bottom: 50px;
    li {
      display: inline;
      margin-right: 35px;
      list-style: none;
    }
  }

  .other-stats {
    margin-top: 20px;
  }

  .payment-label-list {
    margin-left: -100px;
    li {
      display: inline;
      margin: 0px 53px;
      list-style: none;
    }
  }

  .payment-input-list {
    margin-left: -40px;
    margin-bottom: 50px;
    li {
      display: inline;
      margin-right: 100px;
      list-style: none;
    }
  }
`;

const CardContainer = styled.div`
  background: var(--main-dark-blue);
  border-radius: 10px;
  padding: 20px;
  height: 85vh;
`;

const CalculateCreditButton = styled.button`
  margin: 10px 230px;
  font-weight: 900;
  background: var(--main-green);
  border-radius: 50px;
  border: none;
  padding: 15px 10px;
  color: #fff;
  width: 200px;
`;
const CalculateCreditForm = styled.form`
  input {
    width: 120px;
    background: #696969;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 5px;
  }

  select {
    background: var(--main-green);
    border-radius: 5px;
    padding: 7px;
    color: #fff;
    width: 135px;
  }
`;

/*patment indicates how late the payment was,
  bill amount references to the payment above by number(how much they owed for that month),
  payment amount is te amount that was paid to settle the bill amount */

class CreditTab extends Component {
  state = {
    firstName: "",
    lastName: "",
    age: 0,
    gender: "",
    housing: "",
    job: 1,
    creditAmount: 0,
    savingAccount: 0,
    checkingAccount: 0,
    duration: 0,
    purpose: "",
    prediction:"ss"
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  clickEvaluate=(event)=>{
    event.preventDefault();
    const { 
    age,
    gender,
    housing,
    job,
    creditAmount,
    savingAccount,
    checkingAccount,
    duration,
    purpose,prediction}=this.state;

    let link=`https://predictor23.herokuapp.com/predict`;
    const data=[
      { Age: age,
        Sex: gender,
        Job: job,//2
        Housing: housing,//free
        'Saving accounts': savingAccount, //little
        'Checking account': creditAmount,//little
        'Credit amount': checkingAccount,//4874
        Duration: duration,//24
        Purpose: purpose} ]; //car
        console.log(data)

      fetch('https://predictor23.herokuapp.com/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(r => r.json())
        .then(data => {
          // The response comes here
          console.log(data.prediction);
          this.setState({
            prediction:data.prediction==='[1]'?"Good Risk":"Bad Risk"
          });
        })
        .catch(error => {
          // Errors are reported there
          console.log(error);
        });
  }

  render() {
    const data = {
      newCredit: 54,
      length: 65,
      owed: 46,
      history: 26,
      creditUsed: 43,
      utilisation: 13,
      score: 655,
    };

    return (
      <CreditTabContainer>
        <Row>
          <div className="input-container" style={{ marginRight: "20px" }}>
            <CalculateCreditForm>
              <CardContainer>
                <ul className="personal-info-labels-list">
                  <li>Age</li>
                  <li style={{ marginLeft: "-10px" }}>Gender</li>
                </ul>

                <ul className="personal-info-list">
                  <li>
                    <input
                      name="age"
                      value={this.state.age}
                      onChange={this.handleChange}
                    />
                  </li>

                  <li>
                    <select
                      name="gender"
                      value={this.state.sex}
                      onChange={this.handleChange}
                    >
                      <option value={1}>Male</option>
                      <option value={2}>Female</option>
                      <option value={2}>Other</option>
                    </select>
                  </li>
                </ul>

                <ul className="row2-labels-list">
                  <li style={{ marginRight: "110px" }}>Housing</li>
                  <li style={{ marginRight: "140px" }}>Job</li>
                  <li>Credit Amount</li>
                  <li style={{ marginLeft: "-35px" }}>Saving Account</li>
                </ul>

                <ul className="personal-info-list">
                  <li>
                    <select
                      name="housing"
                      value={this.state.housing}
                      onChange={this.handleChange}
                    >
                      <option value={"own"}>Own</option>
                      <option value={"rent"}>Rent</option>
                      <option value={"free"}>Free</option>
                    </select>
                  </li>

                  <li>
                    <select
                      name="job"
                      value={this.state.job}
                      onChange={this.handleChange}
                    >
                      <option value={0}>Unskilled</option>
                      <option value={1}>Skilled</option>
                      <option value={2}>Highly-skilled</option>
                    </select>
                  </li>
                  <li>
                    <select
                      name="Credit Account"
                      value={this.state.creditAmount}
                      onChange={this.handleChange}
                    >
                      <option value={"little"}>little</option>
                      <option value={"moderate"}>moderate</option>
                      <option value={"quite rich"}>quite rich</option>
                      <option value={"rich"}>rich</option>
                    </select>
                  </li>

                  <li>
                    <select
                      name="savingAccount"
                      value={this.state.savingAccount}
                      onChange={this.handleChange}
                    >
                      <option value={"little"}>little</option>
                      <option value={"moderate"}>moderate</option>
                      <option value={"quite rich"}>quite rich</option>
                      <option value={"rich"}>rich</option>
                    </select>
                  </li>
                </ul>

                <ul className="payment-label-list">
                  <li>Checking Amount</li>
                  <li>Duartion *months</li>
                  <li>Purpose</li>
                </ul>

                <ul className="payment-input-list">
                <li>
                <input
                      name="checkingAccount"
                      value={this.state.checkingAccount}
                      onChange={this.handleChange}
                    />
                  </li>
                  <li>
                    <input
                      name="duration"
                      value={this.state.duration}
                      onChange={this.handleChange}
                    />
                  </li>
                  <li>
                    <select
                      name="purpose"
                      value={this.state.purpose}
                      onChange={this.handleChange}
                    >
                      <option value={"unskilled"}>car</option>
                      <option value={"skilled"}>furniture</option>
                      <option value={"radio/tv"}>radio/tv</option>
                      <option value={"domestic appliances"}>
                        domestic appliances
                      </option>
                      <option value={"repairs"}>repairs</option>
                      <option value={"education"}>education</option>
                      <option value={"business"}>business</option>
                      <option value={"vacation"}>vacation</option>
                    </select>
                  </li>
                </ul>

                <CalculateCreditButton onClick={this.clickEvaluate}>EVALUATE</CalculateCreditButton>
                <br />
                    <input
                      name="PREDICTION"
                      value={this.state.prediction}
                      onChange={this.handleChange}
                    />
             
              </CardContainer>
              <br />
            </CalculateCreditForm>
          </div>
          <OtherStatistics {...data} />
        </Row>
      </CreditTabContainer>
    );
  }
}

export default CreditTab;
