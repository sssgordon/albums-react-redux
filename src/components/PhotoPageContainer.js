import React from "react";
import PhotoPage from "./PhotoPage";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setPhotos } from "../actions/photos";
import { getPhotosByAlbum } from "../actions/photos";

class PhotoPageContainer extends React.Component {
  componentDidMount() {
    this.props.getPhotosByAlbum(this.props.match.params.id);
  }

  render() {
    if (!this.props.photos) {
      return (
        <div>
          <p>Loading...</p>
          <Link to="/">Return to index</Link>
        </div>
      );
    } else {
      return (
        <div>
          <PhotoPage photos={this.props.photos} />
          <Link to="/">Return to index</Link>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    photos: state.photos
  };
};

export default connect(
  mapStateToProps,
  { setPhotos, getPhotosByAlbum }
)(PhotoPageContainer);
