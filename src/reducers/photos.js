export default (state = [], action) => {
  console.log("PHOTOS REDUCER!");
  switch (action.type) {
    case "SET_PHOTOS":
      return action.payload.map(photo => ({ ...photo }));
    default:
      return state;
  }
};
