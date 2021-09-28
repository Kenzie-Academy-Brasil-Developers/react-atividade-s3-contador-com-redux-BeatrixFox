import { useDispatch } from "react-redux";
import { addNumber, subNumber } from "../../store/modules/counter/actions";
import { Container } from "./style";
import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    width: `${100}px`,
  },
}));

export const CounterButton = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Container>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<FiArrowUpCircle />}
        onClick={() => dispatch(addNumber(1))}
      >
        UP
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<FiArrowDownCircle />}
        onClick={() => dispatch(subNumber(1))}
      >
        DOWN
      </Button>
    </Container>
  );
};

export default CounterButton;
