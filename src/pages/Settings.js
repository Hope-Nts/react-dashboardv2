import React from "react";
import styled from "styled-components";
import { Row } from "simple-flexbox";

const SettingsTabContainer = styled.div`
  background: var(--main-light-blue);
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 20px;

  ul {
    li {
      list-style: none;
      margin-bottom: 20px;
    }
  }

  .top-left-container {
    border-top: 25px solid blue;
    display: flex;
  }
  .top-right-container {
    border-top: 25px solid var(--main-green);
  }
  .bottom-left-container {
    border-top: 25px solid yellow;
  }
  .bottom-right-container {
    border-top: 25px solid white;
  }

  .profile-info {
    flex: 1;
  }

  .profile-data {
    display: flex;
  }
  .user-info-labels {
    flex: 1;
  }
  .user-info {
    flex: 1;
  }
  .credentials {
    flex: 3;
  }

  .forum-activity {
    display: flex;
  }

  .description {
    flex: 3;
  }

  .dates {
    flex: 1;
  }

  .picture {
    img {
      border-radius: 50%;
      border: 1px solid white;
    }
  }
`;

const CardContainer = styled.div`
  background: var(--main-dark-blue);
  border-radius: 5px;
  padding: 5px 15px;
  width: 50%;
  height: 45vh;
`;

const SettingsTab = () => {
  return (
    <SettingsTabContainer>
      <div className="container">
        <Row>
          <CardContainer
            className="top-left-container"
            style={{ marginRight: "10px" }}
          >
            <div className="profile-info">
              <h2>Profile</h2>
              <div className="picture">
                <img
                  src="https://unsplash.com/photos/fTPUpUhiBSc"
                  alt=""
                  width="80"
                />
              </div>
            </div>
            <div className="credentials">
              <div>
                <p style={{ float: "right" }}>edit</p>
              </div>
              <br />
              <br />
              <div className="profile-data">
                <div className="user-info-labels">
                  <ul>
                    <li>Full Names</li>
                    <li>Email</li>
                    <li>Occupation</li>
                    <li>Created</li>
                  </ul>
                </div>
                <div className="user-info">
                  <ul>
                    <li>John F.Doe</li>
                    <li>JohnDoe@whatever.com</li>
                    <li>Enterpreneur</li>
                    <li>May 13th 2020</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContainer>
          <CardContainer
            className="top-right-container"
            style={{ float: "right" }}
          >
            <h2>Interface Settings</h2>
            <Row>
              <h4>Theme</h4>
            </Row>
            <Row>
              <h4>Font Size</h4>
            </Row>
          </CardContainer>
        </Row>
        <br />
        <Row>
          <CardContainer
            className="bottom-left-container"
            style={{ marginRight: "10px" }}
          >
            <h2>Activity</h2>
            <div className="forum-activity">
              <div className="description">
                <ul>
                  <li>JohnDoe Calculated Credit Score</li>
                  <li>JohnDoe applied for a home loan</li>
                  <li>JohnDoe made first mortgage payment</li>
                </ul>
              </div>
              <div className="dates">
                <ul>
                  <li>May 15th</li>
                  <li>May 21st</li>
                  <li>June 23rd</li>
                </ul>
              </div>
            </div>
          </CardContainer>
          <CardContainer
            className="bottom-right-container"
            style={{ float: "right" }}
          >
            <h2>Forum Activity</h2>
          </CardContainer>
        </Row>
      </div>
    </SettingsTabContainer>
  );
};

export default SettingsTab;
