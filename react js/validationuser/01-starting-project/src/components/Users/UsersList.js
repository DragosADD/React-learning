import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

export default function UsersList(props) {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((el) => (
          <li key={el.id}>
            {el.name} ({el.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}
