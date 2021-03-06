import React from 'react';
import Modal from 'react-modal';
import PhotoShowContainer from './photo_show_container';
import { Link } from 'react-router-dom';
import CommentFormContainer from '../comments/comment_form_container';

class PhotoTagIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOn: false
    };
    this.modalClose = this.modalClose.bind(this);
    this.modalOpen = this.modalOpen.bind(this);
  }

  modalOpen() {
    this.setState({
      modalOn: true
    });
  }

  modalClose() {
    this.setState({
      modalOn: false
    });
    this.props.clearComments();
  }

  render() {
    const { photo } = this.props;
    return (
      <div>
        <div className="tile">
          <div className="username-display">
            <div className="photo-index-user">
              <Link to={`/users/${photo.owner_id}/photos`}>
                <img src={photo.user_photo}/>
              </Link>
            </div>
            <div className="photo-index-username">
              <Link to={`/users/${photo.owner_id}/photos`}
                className="username">{photo.username}
              </Link>
            </div>
          </div>
          <a onClick={() => this.modalOpen()}>
            <img key={photo.id} src={ photo.img_url }/>
          </a>
        </div>

        <Modal
          isOpen={ this.state.modalOn }
          onRequestClose={ this.modalClose }
          backDropClosesModal={ true }
          className={"modal-photo-show"}
          overlayClassName={"photo-show-overlay"}
          >

          <PhotoShowContainer photo={photo} modalClose={this.modalClose}/>

          <button className="close-modal-x">
            <i className="fa fa-times"
            onClick={ this.modalClose }
            aria-hidden="true"></i></button>

        </Modal>
      </div>
    );
  }

}

export default PhotoTagIndexItem;
