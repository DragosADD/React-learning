import React, { useState, Fragment } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  function giveIntputsinApp(input) {
    setUsersList((prevState) => {
      return [...prevState, input];
    });
  }
  return (
    <Fragment>
      <AddUser addInputs={giveIntputsinApp}></AddUser>
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
