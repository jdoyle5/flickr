import { connect } from 'react-redux';
import { clearErrors } from '../../actions/errors';
import { selectComments } from '../../reducers/selectors';
import { requestComments, postComment } from '../../actions/comment';
import CommentForm from './comment_form';
import { likePhoto, unlikePhoto } from '../../actions/like';


const mapStateToProps = state => ({
  comments: selectComments(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestComments: photoId => dispatch(requestComments(photoId)),
  postComment: comment => dispatch(postComment(comment)),
  likePhoto: photoId => dispatch(likePhoto(photoId)),
  unlikePhoto: photoId => dispatch(unlikePhoto(photoId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
