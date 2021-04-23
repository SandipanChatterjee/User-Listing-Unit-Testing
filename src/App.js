import "./App.css";
import UserListing from "./Components/User/UserListing";
import React from "react";
import UserDetails from "./Components/UserDetails/UserDetails";

function App() {
  return (
    <div className="App">
      <UserListing />
      <UserDetails />
    </div>
  );
}

export default App;
