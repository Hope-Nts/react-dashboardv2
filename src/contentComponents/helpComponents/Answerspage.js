import React,{Component} from "react";
import styled from "styled-components";
import ReplyPost from "./PostWithReply";
import Comment from "./CommentComponent";
import { firestore } from '../../firebase';
import { collectIdsAndDocs } from '../../utilities';
import { withRouter } from 'react-router-dom';
import withUser from '../../withUser';

const HelpTabContainer = styled.div`
  background: var(--main-light-blue);
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 10px 10%;
  display: flex;

  .post-container {
    flex: 3;
  }

  .link-container {
    flex: 1;
  }
`;

class AnswersPage extends Component {
  state = { post: null, comments: [],content:null };

  get postId() {
    return this.props.match.params.id;
  }

  get postRef() {
    return firestore.doc(`posts/${this.postId}`);
  }

  get commentsRef() {
    return this.postRef.collection('comments');
  }

  unsubscribeFromPost = null;
  unsubscribeFromComments = null;

  componentDidMount = async () => {
    this.unsubscribeFromPost = this.postRef.onSnapshot(snapshot => {
      const post = collectIdsAndDocs(snapshot);
      this.setState({ post });
    });

    this.unsubscribeFromComments = this.commentsRef.onSnapshot(snapshot => {
      const comments = snapshot.docs.map(collectIdsAndDocs);
      const cl=comments.length
      this.setState({ comments });
      this.postRef.update({comments:cl})
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromPost();
    this.unsubscribeFromComments();
  };

  createComment = comment => {
    const { user } = this.props;
    this.commentsRef.add({
      ...comment,
      user
    });
  };

  render() {
    const { post, comments } = this.state;
  return (
    <HelpTabContainer>
      <div className="post-container">
        <h1>Post</h1>
       {post && <ReplyPost {...post} onCreate={this.createComment} />}
        <h3>Comments/Replies</h3>
        {comments.map(comment => <Comment {...comment} key={comment.id} />)}
      </div>
    </HelpTabContainer>
  );
  }
};

export default withRouter(withUser((AnswersPage)));
