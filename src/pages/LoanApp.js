import React, { Component } from "react";
import styled from "styled-components";
import OtherStatistics from "../contentComponents/dashboardComponents/OtherStatisticsCard";

const LoanAppTabContainer = styled.div`
  background: var(--main-light-blue);
  width: cacl(100% - 300px);
  height: 100%;
  min-height: 100vh;
  padding: 30px;
  display: flex;
`;

const LoanAppContainer = styled.div`
  background-color: var(--main-dark-blue);
  padding: 10px;
  border-radius: 15px;
  flex: 2;
  margin-right: 10px;
`;

const LoanAppButton = styled.button`
  margin: 10px 230px;
  font-weight: 900;
  background: var(--main-green);
  border-radius: 50px;
  border: none;
  padding: 15px 10px;
  color: #fff;
  width: 200px;
`;
const LoanApplicationForm = styled.form`
  .text-input {
    width: 120px;
    background: #696969;
    color: #fff;
    margin: 0px;
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 3px;
  }

  input::placeholder {
    color: #fff;
  }

  select {
    background: var(--main-green);
    border-radius: 5px;
    padding: 3px;
    color: #fff;
    width: 135px;
  }

  label {
    margin-right: 10px;
  }

  ul {
    list-style: none;
    li {
      margin: 0px 0px 10px 0px;
    }
  }

  .file-input {
    color: transparent;
    width: 200px;
  }

  .file-input::-webkit-file-upload-button {
    visibility: hidden;
  }

  .file-input::before {
    content: "Upload";
    color: #fff;
    display: inline-block;
    background: var(--main-green);
    border: none;
    border-radius: 5px;
    padding: 5px 8px;
    white-space: nowrap;
    cursor: pointer;
  }
  .file-input:active {
    outline: 0;
  }
  .file-input:active::before {
    background: var(--main-green);
  }
`;

class LoanAppTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      gender: "",
      age: "",
      cellPhone: "",
      telePhone: "",
      emailAddress: "",
      postalAddress: "",
      residentialAddress: "",
      idNo: "",
      maritalStatus: "",
      nextOfKin: "",
      repaymentHistory: "",
      existingLoans: "",
      proofOfIncome: "",
      bankStatement: "",
      photoIdentification: "",
    };
  }

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
      <LoanAppTabContainer>
        <LoanAppContainer>
          <LoanApplicationForm>
            <ul>
              <li>
                <input
                  name="firstName"
                  className="text-input"
                  placeholder="First Name"
                  onChange={(e) => this.handleChange(e)}
                />
              </li>
              <li>
                <input
                  name="lastName"
                  className="text-input"
                  placeholder="Last Name"
                  onChange={(e) => this.handleChange(e)}
                />
              </li>
              <li>
                <input
                  name="gender"
                  className="text-input"
                  placeholder="Gender"
                  onChange={(e) => this.handleChange(e)}
                />
              </li>
              <li>
                <input
                  name="age"
                  className="text-input"
                  placeholder="Age"
                  onChange={(e) => this.handleChange(e)}
                />
              </li>
              <li>
                <input
                  name="cellPhone"
                  className="text-input"
                  placeholder="CellPhone"
                  onChange={(e) => this.handleChange(e)}
                />
              </li>
              <li>
                <input
                  name="telephone"
                  className="text-input"
                  placeholder="Telephone"
                  onChange={(e) => this.handleChange(e)}
                />
              </li>
              <li>
                <input
                  name="emailAddress"
                  className="text-input"
                  placeholder="Email Address"
                  onChange={(e) => this.handleChange(e)}
                />
              </li>
              <li>
                <input
                  name="posatalAddress"
                  className="text-input"
                  placeholder="Postal Address"
                  onChange={(e) => this.handleChange(e)}
                />
              </li>
              <li>
                <input
                  name="residentialAddress"
                  className="text-input"
                  placeholder="Residential Address"
                  onChange={(e) => this.handleChange(e)}
                />
              </li>
              <li>
                <input
                  name="idNo"
                  className="text-input"
                  placeholder="ID No#"
                  onChange={(e) => this.handleChange(e)}
                />
              </li>
              <li>
                <input
                  placeholder="Next Of Kin"
                  className="text-input"
                  onChange={(e) => this.handleChange(e)}
                />
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
              <li>
                <label>Repayment Histoy</label>
                <input
                  type="file"
                  className="file-input"
                  id="myfile"
                  name="myfile"
                />
              </li>
              <li>
                <label for="myfile">Repayment Histoy</label>
                <input
                  type="file"
                  className="file-input"
                  id="myfile"
                  name="myfile"
                />
              </li>
              <li>
                <label for="myfile">Existing Loan(Upload Documentation)</label>
                <input
                  type="file"
                  className="file-input"
                  id="myfile"
                  name="myfile"
                />
              </li>
              <li>
                <label for="myfile">Three Month PaySlip</label>
                <input
                  type="file"
                  className="file-input"
                  id="myfile"
                  name="myfile"
                />
              </li>
              <li>
                <label for="myfile">
                  1 Year Bank Statement (Self Employed Only)
                </label>
                <input
                  type="file"
                  className="file-input"
                  id="myfile"
                  name="myfile"
                />
              </li>
              <li>
                <label for="myfile">Photo Identification</label>
                <input
                  type="file"
                  className="file-input"
                  id="myfile"
                  name="myfile"
                />
              </li>
            </ul>
            <LoanAppButton>APPLY</LoanAppButton>
          </LoanApplicationForm>
        </LoanAppContainer>
        <div style={{ flex: 1, marginTop: "20px" }}>
          <OtherStatistics {...data} />
        </div>
      </LoanAppTabContainer>
    );
  }
}

export default LoanAppTab;
