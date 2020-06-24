import React, { Component } from "react";
import { firestore, auth } from '../../firebase';
import styled from "styled-components";
import Picture from "../../navigationComponents/sidebar/Logo.png";

const MainContainer = styled.div`
  background: var(--main-dark-blue);
  border-radius: 10px;
  padding: 20px 30px;
  margin: 20px 0px 20px 0px;
  width: 100%;
  display: flex;
  .content {
    padding-top: 10px;
    flex: 5;
  }

  .picture {
    flex: 1;
  }

  .spacer {
    display: inline-block;
    width: 10px;
  }

  .message {
    width: 80%;
    padding-bottom: 5px;
    margin-top: -15px;
    border-bottom: 2px solid #fff;
  }
`;

const QuestionPostButton = styled.button`
  background: var(--main-green);
  border-radius: 30px;
  padding: 10px 30px;
  border: none;
  color: #fff;
  font-weight: 900;
  display: inline-block;
  cursor: pointer;
`;

const QuestionPostForm = styled.form`
  textarea {
    padding: 5px;
    font-size: 1.25em;
    width: 90%;
    height: 80px;
    outline: none;
    resize: none;
    color: #fff;
    background: var(--main-dark-blue);
    border: none;

    ::placeholder {
      font-family: Helvetica;
      font-size: 1.3em;
      border-bottom: 1px solid grey;
    }
  }
`;

class QuestionForm extends Component {
  state = { title: '', content: '' };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { title, content } = this.state;
    const { uid, displayName, email, photoURL } = auth.currentUser || {};

    const post = {
      title,
      content,
      user: {
        uid,
        displayName,
        email,
        photoURL,
      },
      favorites: 0,
      comments: 0,
      createdAt: new Date(),
    }

    firestore.collection('posts').doc().set(post);

    this.setState({ title: '', content: '' });
  };
  render() {
    const { title, content } = this.state;
    return (
      <MainContainer>
        <div className="picture">
          <img src={auth.currentUser.photoURL || Picture} alt="" width="80" />
        </div>
        <div className="content">
          <QuestionPostForm>
          <textarea
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={this.handleChange}
        />
        <textarea
          type="text"
          name="content"
          placeholder="What would you like to know?"
          value={content}
          onChange={this.handleChange}
        />
          </QuestionPostForm>
          <div style={{ float: "right" }}>
            <QuestionPostButton onClick={this.handleSubmit}>Ask</QuestionPostButton>
          </div>
        </div>
      </MainContainer>
    );
  }
}

export default QuestionForm;
