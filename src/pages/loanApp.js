import React, { Component } from "react";
import styled from "styled-components";
import OtherStatistics from "../contentComponents/dashboardComponents/OtherStatisticsCard";

const LoanAppTabContainer = styled.div`
  background: var(--main-light-blue);
  width: cacl(100% - 300px);
  height: 100%;
  min-height: calc(100vh - 70px);
  padding: 20px;
  display: flex;

  input {
    border-bottom: 2px solid #fff;
  }
`;

const LoanAppContainer = styled.div`
  background-color: var(--main-dark-blue);
  padding: 10px;
  border-radius: 15px;
  flex: 2;
  margin-right: 10px;

  .inputArea {
    margin-top:5px;
    width: 250px;
    color: #fff;
    padding: 5px;
    width: 250px;
    height: 30px;
    background-color: transparent;
    border: none;
  
    ::placeholder {
      
    }
  
`;

const FileUpload = styled.div`
  label {
    color: grey;
  }

  .file-input {
    background-color: green;
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
          <form>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}>
                <input
                  name="firstName"
                  className="inputArea"
                  placeholder="First Name"
                  onChange={(e) => this.handleChange(e)}
                />

                <input
                  name="lastName"
                  className="inputArea"
                  placeholder="Last Name"
                  onChange={(e) => this.handleChange(e)}
                />
                <input
                  name="gender"
                  className="inputArea"
                  placeholder="Gender"
                  onChange={(e) => this.handleChange(e)}
                />
                <input
                  name="age"
                  className="inputArea"
                  placeholder="Age"
                  onChange={(e) => this.handleChange(e)}
                />
                <input
                  name="cellPhone"
                  className="inputArea"
                  placeholder="CellPhone"
                  onChange={(e) => this.handleChange(e)}
                />
                <input
                  name="telephone"
                  className="inputArea"
                  placeholder="Telephone"
                  onChange={(e) => this.handleChange(e)}
                />
                <input
                  name="emailAddress"
                  className="inputArea"
                  placeholder="Email Address"
                  onChange={(e) => this.handleChange(e)}
                />

                <input
                  name="posatalAddress"
                  className="inputArea"
                  placeholder="Postal Address"
                  onChange={(e) => this.handleChange(e)}
                />
                <input
                  name="residentialAddress"
                  className="inputArea"
                  placeholder="Residential Address"
                  onChange={(e) => this.handleChange(e)}
                />
                <input
                  name="idNo"
                  className="inputArea"
                  placeholder="ID No#"
                  onChange={(e) => this.handleChange(e)}
                />
                <input
                  className="inputArea"
                  placeholder="Marital Status"
                  onChange={(e) => this.handleChange(e)}
                />
                <input
                  className="inputArea"
                  placeholder="Next Of Kin"
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
              <div style={{ flex: 1 }}>
                <FileUpload>
                  <label for="myfile">Repayment Histoy</label>
                  <input
                    className="file-input"
                    type="file"
                    id="myfile"
                    name="myfile"
                  />
                </FileUpload>
                <FileUpload>
                  <label for="myfile">Repayment Histoy</label>
                  <input
                    className="file-input"
                    type="file"
                    id="myfile"
                    name="myfile"
                  />
                </FileUpload>
                <FileUpload>
                  <label for="myfile">
                    Existing Loan(Upload Documentation)
                  </label>
                  <input
                    className="file-input"
                    type="file"
                    id="myfile"
                    name="myfile"
                  />
                </FileUpload>
                <FileUpload>
                  <label for="myfile">Three Month PaySlip</label>
                  <input
                    className="file-input"
                    type="file"
                    id="myfile"
                    name="myfile"
                  />
                </FileUpload>
                <FileUpload>
                  <label for="myfile">
                    1 Year Bank Statement (Self Employed Only)
                  </label>
                  <input
                    className="file-input"
                    type="file"
                    id="myfile"
                    name="myfile"
                  />
                </FileUpload>

                <FileUpload>
                  <label for="myfile">Photo Identification</label>
                  <input
                    className="file-input"
                    type="file"
                    id="myfile"
                    name="myfile"
                  />
                </FileUpload>
              </div>
            </div>
          </form>
        </LoanAppContainer>
        <div style={{ flex: 1, marginTop: "20px" }}>
          <OtherStatistics {...data} />
        </div>
      </LoanAppTabContainer>
    );
  }
}

export default LoanAppTab;
