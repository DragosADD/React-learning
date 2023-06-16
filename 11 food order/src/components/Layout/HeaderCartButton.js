import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HearderCartButton.module.css";
import CartContext from "../store/CartContext";

export default function HeaderCartButton(props) {
  const ctx = useContext(CartContext);

  const numberOfCartItems = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}
