export default (state = [], action) => {
  console.log("ALBUM REDUCER!", action);
  switch (action.type) {
    case "ADD_ALBUM":
      return [{ ...action.payload }, ...state];
    case "SET_ALBUM":
      return action.payload.map(album => ({ ...album }));

    default:
      return state;
  }
};
