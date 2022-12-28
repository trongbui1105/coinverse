import { Container, makeStyles, Typography } from "@material-ui/core";
import Carousel from "./Carousel";
import bannerImage from "assets/images/banner.jpg";

const useStyles = makeStyles((theme) => ({
  banner: {
    // backgroundImage: `url(${bannerImage})`,
    backgroundColor: "#FCF7FE",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}));

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Fira Code",
            }}
          >
            Trending Coins
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}

export default Banner;
