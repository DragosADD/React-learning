import React, { useContext } from "react";
import ReactDom from "react-dom";
import Card from "./Card";
import Button from "./Button";
import classes from "./Modal.module.css";
import { AvailableMeals } from "../Meals/AvailableMeals";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  // const tagHandler =()=>{
  //   ctx.functionsForSearch.removeModal()
  //   ctx.functionsForSearch.searhTag()
  // }
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>Image Details</h2>
      </header>
      <div className={classes.content}>
        <AvailableMeals />
      </div>
      <footer className={classes.actions}>
        <Button onConfirm={props.onConfirm}>Close</Button>
      </footer>
    </Card>
  );
};

export default function Modal(props) {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onConfirm={props.onConfirm}></Backdrop>,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}
