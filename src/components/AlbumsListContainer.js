import React from "react";
import AlbumsList from "./AlbumsList";
import { connect } from "react-redux";
import { addAlbum } from "../actions/albums";
import { setAlbums } from "../actions/albums";
import { getAlbums } from "../actions/albums";

class AlbumsListContainer extends React.Component {
  componentDidMount() {
    this.props.getAlbums();
  }

  render() {
    if (!this.props.albums) {
      return <p>Loading...</p>;
    } else {
      return <AlbumsList albums={this.props.albums} />;
    }
  }
}

const mapStateToProps = state => {
  console.log("MAP STATE TO PROPS");
  return {
    albums: state.albums
  };
};

export default connect(
  mapStateToProps,
  { addAlbum, setAlbums, getAlbums }
)(AlbumsListContainer);
