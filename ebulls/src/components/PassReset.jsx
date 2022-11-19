import React from "react";
import logo from "../img/logo.png";
import { Card, CardContent, Grid } from "@mui/material";
import "../style/style.css";
import { makeStyles } from "@mui/styles";
import fullimg from "../img/fullimg.png";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles({
  lasstiimg: {
    backgroundColor: "black",
    height: "1021px",
    width: "100%",
    overflow: "hidden",
  },
  logo85: {
    paddingLeft: "10.260vw",
    paddingTop: "1.33vw",
  },
  logo81: {
    width: "7.135vw",
    height: "1.510vw",
  },
  pass11098: {
    fontSize: "1.563vw",
  },
  login11098: {
    fontSize: "1.042vw",
  },
  btnn11098: {
    background: "#EAB73B",
    borderRadius: "5.208vw",
    width: "18.906vw",
    height: "2.604vw",
    fontSize: "1.146vw",
    border: "none",
  },

  lassstText: {
    color: "#FFFFFF",
    textAlign: "center",
    bottom: "35.250vw",
    position: "relative",
  },
  img155: {
    width: "100vw",
    height: "53.177vw",
  },
});

export default function PassReset() {
  const history = useHistory();
  const classes = useStyles();

  return (
    <>
      <div className={classes.lasstiimg}>
        <div className={classes.logo85}>
          <img className={classes.logo81} src={logo} />
        </div>
        <Grid container className={classes.maaain}>
          <Grid item xs={12}>
            <img className={classes.img155} src={fullimg} />
            <div className={classes.lassstText}>
              <h1 className={classes.pass11098}>Password Change</h1>
              <p className={classes.login11098}>
                Please login with the new password
              </p>
              <Link to='/'><button className={classes.btnn11098}>Login</button></Link>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
