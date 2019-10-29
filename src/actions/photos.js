export const SET_PHOTOS = "SET_PHOTOS";
export function setPhotos(photos) {
  console.log("SET PHOTOS!");
  return {
    type: SET_PHOTOS,
    payload: photos
  };
}

export function getPhotosByAlbum(id) {
  return function(dispatch) {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      .then(res => res.json())
      .then(data => {
        console.log("PHOTO DATA FETCHED!", data);
        dispatch(setPhotos(data));
        console.log("PHOTO DATA DISPATCHED!");
      });
  };
}
