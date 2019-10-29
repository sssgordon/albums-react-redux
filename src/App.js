import React from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import AlbumsListContainer from "./components/AlbumsListContainer";
import { Route } from "react-router-dom";
import PhotoPageContainer from "./components/PhotoPageContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Route exact path="/" component={AlbumsListContainer} />
        <Route exact path="/albums/:id" component={PhotoPageContainer} />
      </div>
    </Provider>
  );
}

export default App;
