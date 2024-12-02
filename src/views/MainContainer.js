import { makeStyles } from "@material-ui/core/styles";
import Hero from "../components/Hero";
import Panels from "../components/Panels";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Info from "../components/Info";
import Nosotros from "../components/Nosotros";

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundImage: "url(/assets/images/rm380-06.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed", // Esto hace que el fondo se mantenga quieto
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  fondo: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: "16px",
    margin: "2rem auto",
    width: "90%",
    maxWidth: "1200px",
    position: "relative", // Necesario para la superposición
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
  },
}));

const MainContainer = () => {
  const classes = useStyles();

  return (
    <div id="inicio" className={classes.body}>
      <Navbar />
      <Info />
      <div id="probar" className={classes.fondo}>
        <Hero />
        <Panels />
      </div>
      <Nosotros />
      <Footer />
    </div>
  );
};

export default MainContainer;
