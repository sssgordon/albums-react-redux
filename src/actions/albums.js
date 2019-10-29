export const SET_ALBUM = "SET_ALBUM";
export function setAlbums(albums) {
  console.log("SET ALBUM!");
  return {
    type: SET_ALBUM,
    payload: albums
  };
}

export const ADD_ALBUM = "ADD_ALBUM";
export function addAlbum(id, title) {
  console.log("ADD ALBUM!");
  return {
    type: ADD_ALBUM,
    payload: {
      id,
      title
    }
  };
}

export function getAlbums() {
  return function(dispatch, getState) {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then(res => res.json())
      .then(data => {
        console.log("ALBUM DATA FETCHED!", data);
        dispatch(setAlbums(data));
        console.log("ALBUM DATA DISPATCHED!", getState());
      });
  };
}
