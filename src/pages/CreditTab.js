import React, { Component } from "react";
import styled from "styled-components";
import OtherStatistics from "../contentComponents/dashboardComponents/OtherStatisticsCard";

const CreditTabContainer = styled.div`
  background: var(--main-light-blue);
  width: cacl(100% - 300px);
  height: 100%;
  min-height: 100vh;
  padding: 20px;
  display: flex;

  .input-container: {
    flex: 3;
    margin-right: 20px;
  }

  .other-stats-container {
    flex: 1;
    margin-top: 25px;
  }

  .personal-info-labels-list {
    margin-left: -5px;
    li {
      display: inline;
      margin-right: 105px;
      list-style: none;
    }
  }

  .personal-info-list {
    margin-left: -40px;
    li {
      display: inline;
      margin-right: 35px;
      list-style: none;
    }
  }

  .payment-label-list {
    margin-left: -80px;
    li {
      display: inline;
      margin: 0px 60px;
      list-style: none;
    }
  }

  .payment-input-list {
    margin-left: -40px;
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
    limit_bal: "",
    sex: "",
    education: 0,
    marriage: 0,
    age: 0,
    pay_1: 0,
    pay_2: 0,
    pay_3: 0,
    pay_4: 0,
    pay_5: 0,
    pay_6: 0,
    billAmount1: 0,
    billAmount2: 0,
    billAmount3: 0,
    billAmount4: 0,
    billAmount5: 0,
    billAmount6: 0,
    paymentAmount1: 0,
    paymentAmount2: 0,
    paymentAmount3: 0,
    paymentAmount4: 0,
    paymentAmount5: 0,
    paymentAmount6: 0,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <CreditTabContainer>
        <div className="input-container" style={{ marginRight: "20px" }}>
          <h3>Please fill in your information</h3>
          <CalculateCreditForm>
            <CardContainer>
              <label>Credit balance limit</label>
              <br />
              <input
                name="limit_bal"
                value={this.state.limit_bal}
                onChange={this.handleChange}
              />

              <ul className="personal-info-labels-list">
                <li>Age</li>
                <li>Gender</li>
                <li>Education</li>
                <li style={{ marginLeft: "-10px" }}>Marital Status</li>
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
                    name="sex"
                    value={this.state.sex}
                    onChange={this.handleChange}
                  >
                    <option value={1}>Male</option>
                    <option value={2}>Female</option>
                  </select>
                </li>

                <li>
                  <select
                    name="education"
                    value={this.state.education}
                    onChange={this.handleChange}
                  >
                    <option value={1}>graduate school</option>
                    <option value={2}>university</option>
                    <option value={3}>hight school</option>
                  </select>
                </li>

                <li>
                  <select
                    name="marriage"
                    value={this.state.marriage}
                    onChange={this.handleChange}
                  >
                    <option value={1}>Married</option>
                    <option value={2}>Single</option>
                    <option value={3}>Other</option>
                  </select>
                </li>
              </ul>
            </CardContainer>
            <br />

            <CardContainer>
              <p>
                From the past 6 months(current one included, indicate the
                payment status for each
              </p>

              <h4>current month</h4>

              <ul className="payment-label-list">
                <li>Payment Status</li>
                <li>Bill Amount</li>
                <li>Paid AMount</li>
              </ul>

              <ul className="payment-input-list">
                <li>
                  <select
                    name="pay_1"
                    value={this.state.pay_1}
                    onChange={this.handleChange}
                  >
                    <option value={-2}>nothing due</option>
                    <option value={-1}>paid duly</option>
                    <option value={1}>1 month delay </option>
                    <option value={2}>2 months delay </option>
                    <option value={3}>3 months delay </option>
                    <option value={4}>4 months delay </option>
                    <option value={5}>5 months delay </option>
                    <option value={6}>6 months delay </option>
                    <option value={7}>7 months delay </option>
                    <option value={8}>8 months delay </option>
                    <option value={9}>9+ months delay </option>
                  </select>
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

              <h4>1 month ago</h4>
              <ul className="payment-label-list">
                <li>Payment Status</li>
                <li>Bill Amount</li>
                <li>Paid AMount</li>
              </ul>

              <ul className="payment-input-list">
                <li>
                  <select
                    name="pay_2"
                    value={this.state.pay_2}
                    onChange={this.handleChange}
                  >
                    <option value={-2}>nothing due</option>
                    <option value={-1}>paid duly</option>
                    <option value={1}>1 month delay </option>
                    <option value={2}>2 months delay </option>
                    <option value={3}>3 months delay </option>
                    <option value={4}>4 months delay </option>
                    <option value={5}>5 months delay </option>
                    <option value={6}>6 months delay </option>
                    <option value={7}>7 months delay </option>
                    <option value={8}>8 months delay </option>
                    <option value={9}>9+ months delay </option>
                  </select>
                </li>
                <li>
                  <input
                    name="billAmount2"
                    value={this.state.billAmount2}
                    onChange={this.handleChange}
                  />
                </li>
                <li>
                  <input
                    name="payAmount2"
                    value={this.state.paymentAmount2}
                    onChange={this.handleChange}
                  />
                </li>
              </ul>

              <h4>2 months ago</h4>
              <ul className="payment-label-list">
                <li>Payment Status</li>
                <li>Bill Amount</li>
                <li>Paid AMount</li>
              </ul>

              <ul className="payment-input-list">
                <li>
                  <select
                    name="pay_3"
                    value={this.state.pay_3}
                    onChange={this.handleChange}
                  >
                    <option value={-2}>nothing due</option>
                    <option value={-1}>paid duly</option>
                    <option value={1}>1 month delay </option>
                    <option value={2}>2 months delay </option>
                    <option value={3}>3 months delay </option>
                    <option value={4}>4 months delay </option>
                    <option value={5}>5 months delay </option>
                    <option value={6}>6 months delay </option>
                    <option value={7}>7 months delay </option>
                    <option value={8}>8 months delay </option>
                    <option value={9}>9+ months delay </option>
                  </select>
                </li>
                <li>
                  <input
                    name="billAmount3"
                    value={this.state.billAmount3}
                    onChange={this.handleChange}
                  />
                </li>
                <li>
                  <input
                    name="payAmount3"
                    value={this.state.paymentAmount3}
                    onChange={this.handleChange}
                  />
                </li>
              </ul>

              <h4>3 months ago</h4>

              <ul className="payment-label-list">
                <li>Payment Status</li>
                <li>Bill Amount</li>
                <li>Paid AMount</li>
              </ul>

              <ul className="payment-input-list">
                <li>
                  <select
                    name="pay_4"
                    value={this.state.pay_4}
                    onChange={this.handleChange}
                  >
                    <option value={-2}>nothing due</option>
                    <option value={-1}>paid duly</option>
                    <option value={1}>1 month delay </option>
                    <option value={2}>2 months delay </option>
                    <option value={3}>3 months delay </option>
                    <option value={4}>4 months delay </option>
                    <option value={5}>5 months delay </option>
                    <option value={6}>6 months delay </option>
                    <option value={7}>7 months delay </option>
                    <option value={8}>8 months delay </option>
                    <option value={9}>9+ months delay </option>
                  </select>
                </li>
                <li>
                  <input
                    name="billAmount4"
                    value={this.state.billAmount3}
                    onChange={this.handleChange}
                  />
                </li>
                <li>
                  <input
                    name="payAmount4"
                    value={this.state.paymentAmount3}
                    onChange={this.handleChange}
                  />
                </li>
              </ul>

              <h4>4 months ago</h4>

              <ul className="payment-label-list">
                <li>Payment Status</li>
                <li>Bill Amount</li>
                <li>Paid AMount</li>
              </ul>

              <ul className="payment-input-list">
                <li>
                  <select
                    name="pay_5"
                    value={this.state.pay_5}
                    onChange={this.handleChange}
                  >
                    <option value={-2}>nothing due</option>
                    <option value={-1}>paid duly</option>
                    <option value={1}>1 month delay </option>
                    <option value={2}>2 months delay </option>
                    <option value={3}>3 months delay </option>
                    <option value={4}>4 months delay </option>
                    <option value={5}>5 months delay </option>
                    <option value={6}>6 months delay </option>
                    <option value={7}>7 months delay </option>
                    <option value={8}>8 months delay </option>
                    <option value={9}>9+ months delay </option>
                  </select>
                </li>
                <li>
                  <input
                    name="billAmount5"
                    value={this.state.billAmount5}
                    onChange={this.handleChange}
                  />
                </li>
                <li>
                  <input
                    name="payAmount5"
                    value={this.state.paymentAmount5}
                    onChange={this.handleChange}
                  />
                </li>
              </ul>

              <h4>5 months ago</h4>

              <ul className="payment-label-list">
                <li>Payment Status</li>
                <li>Bill Amount</li>
                <li>Paid AMount</li>
              </ul>

              <ul className="payment-input-list">
                <li>
                  <select
                    name="pay_6"
                    value={this.state.pay_6}
                    onChange={this.handleChange}
                  >
                    <option value={-2}>nothing due</option>
                    <option value={-1}>paid duly</option>
                    <option value={1}>1 month delay </option>
                    <option value={2}>2 months delay </option>
                    <option value={3}>3 months delay </option>
                    <option value={4}>4 months delay </option>
                    <option value={5}>5 months delay </option>
                    <option value={6}>6 months delay </option>
                    <option value={7}>7 months delay </option>
                    <option value={8}>8 months delay </option>
                    <option value={9}>9+ months delay </option>
                  </select>
                </li>
                <li>
                  <input
                    name="billAmount6"
                    value={this.state.billAmount6}
                    onChange={this.handleChange}
                  />
                </li>
                <li>
                  <input
                    name="payAmount6"
                    value={this.state.paymentAmount6}
                    onChange={this.handleChange}
                  />
                </li>
              </ul>

              <CalculateCreditButton>CALCULATE CREDIT</CalculateCreditButton>
            </CardContainer>
          </CalculateCreditForm>
        </div>

        <div className="other-stats-container">
          <OtherStatistics />
        </div>
      </CreditTabContainer>
    );
  }
}

export default CreditTab;
