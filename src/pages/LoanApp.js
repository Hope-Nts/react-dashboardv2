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
    job: "",
    creditAmount: 0,
    savingAccount: 0,
    checkingAccont: 0,
    duration: 0,
    purpose: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

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
                  <li>First Name</li>
                  <li>Last Name</li>
                  <li>Age</li>
                  <li style={{ marginLeft: "-10px" }}>Gender</li>
                </ul>

                <ul className="personal-info-list">
                  <li>
                    <input
                      name="firstName"
                      value={this.state.age}
                      onChange={this.handleChange}
                    />
                  </li>

                  <li>
                    <input
                      name="lastName"
                      value={this.state.age}
                      onChange={this.handleChange}
                    />
                  </li>

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
                    </select>
                  </li>
                </ul>

                <ul className="personal-info-labels-list">
                  <li>Housing</li>
                  <li>Job</li>
                  <li>Credit Amount</li>
                  <li style={{ marginLeft: "-10px" }}>Saving Account</li>
                </ul>

                <ul className="personal-info-list">
                  <li>
                    <input
                      name="firstName"
                      value={this.state.age}
                      onChange={this.handleChange}
                    />
                  </li>

                  <li>
                    <input
                      name="lastName"
                      value={this.state.age}
                      onChange={this.handleChange}
                    />
                  </li>

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
                      name="checkingAmount"
                      value={this.state.age}
                      onChange={this.handleChange}
                    />
                  </li>
                  <li>
                    <input
                      name="billAmount1"
                      value={this.state.billAmount1}
                      onChange={this.handleChange}
                    />
                  </li>
                  <li>
                    <input
                      name="payAmount1"
                      value={this.state.paymentAmount1}
                      onChange={this.handleChange}
                    />
                  </li>
                </ul>

                <CalculateCreditButton>EVALUATE</CalculateCreditButton>
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
