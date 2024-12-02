/* eslint-disable @next/next/no-img-element */
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { getTranslations as t } from "../../locales";

const useStyles = makeStyles((theme) => ({
  heroTitle: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: '#300346',
    marginTop: 35,
  },
  heroSubTitle: {
    color: '#300346',
  },
}));

export default function Hero() {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" component="main" className={classes.heroContent}>
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        className={classes.heroTitle}
      >
        {"Dale Mayor Seguridad a tus Archivos"}
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        component="p"
        className={classes.heroSubTitle}
      >
        {t('sub_title')}
        <br />
      </Typography>
    </Container>
  );
}
