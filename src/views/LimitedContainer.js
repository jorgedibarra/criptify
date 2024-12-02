import { makeStyles } from "@material-ui/core/styles";
import Hero from "../components/Hero";
import LimitedPanels from "../components/limited/LimitedPanels";

const useStyles = makeStyles(() => ({
  body: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    position: "relative", // Necesario para la superposición
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
}));

const LimitedContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <Hero />
      <LimitedPanels />
    </div>
  );
};

export default LimitedContainer;
