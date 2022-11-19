import React from 'react';
import logo from "../img/logo.png";
import forggot from "../img/1forgot11.png"
import coin2 from "../img/coin2.png";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import "../style/style.css";
import { Card, CardContent, Grid } from "@mui/material";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles({

  Back021: {
    backgroundColor: "black",
    height: "1021px",
    width: "100%",
    overflow: "hidden",
  },
  main021: {
    paddingTop: "11.042vw",
  },
  coin0122: {
    width: "48.021vw",
    height: "52.143vw",
  },
  logo021: {
    paddingLeft: "10.260vw",
    paddingTop: "1.33vw",
  },
  logo0112: {
    width: "7.135vw",
    height: "1.510vw",
  },
  grid1para021: {
    fontSize: "1.042vw",
    color: "#ffff",
  },
  divpara021: {
    position: "relative",
    top: "-37.458vw",
    left: "13.781vw",
  },
  card001: {
    width: "23.229vw",
    height: "31.198vw",
    borderRadius: "3.083vw",
  },

  Forgot001: {
    fontSize: "1.146vw",
    paddingTop: "0.644vw",
    paddingLeft: "1.719vw",
    color: "#434343",
  },
  pleaseenter001: {
    color: "#898CA9",
    fontSize: "0.833vw",
    paddingTop: "0.056vw",
    paddingLeft: "1.875vw",
  },
  flex_item001: {
    display: "flex",
    gap: "1.146vw",
    paddingTop: "1.302vw",
    position: "relative",
    left: "8.860vw",
  },
  Email001: {
    fontSize: "0.833vw",
    color: "#EAB73B",
  },
  number001: {
    fontSize: "0.833vw",
    color: "#898CA9",
  },
  input0121: {
    width: "18.906vw",
    height: "3.177vw",
    borderRadius: "5.208vw",
    border: "1px solid #D1D1D1",
  },
  exampelemail0121: {
    paddingTop: "2.031vw",
    paddingLeft: "1vw",
  },
  list000: {
    position: "relative",
    top: "-2.354vw",
    left: "0.208vw",
    height: "1.094vw",
    width: "3.198vw",
    border: "none",
  },
  flex002: {
    display: "flex",
    gap: "1.823vw",
    paddingLeft: "1.123vw",
    paddingTop: "2.031vw",
  },
  sbutton001: {
    width: "18.906vw",
    height: "3.177vw",
    fontSize: "1.146vw",
    color: "#000000",
    borderRadius: "5.208vw",
    backgroundColor: "#EAB73B",
    border: "none",
  },
  CC0: {
    paddingLeft: "4vw",
  },
  coin0002: {
    width: "35.990vw",
    height: "35.990vw",
    position: "relative",
    top: "-30vw",
    left: "25vw",
  },
  coin003: {
    width: "15.990vw",
    height: "35.990vw",
  },
  pooja: {
    position: "relative",
    top:"-7vw"
  },

});

export default function ForgotEmail() {
  const history = useHistory();
  const [email, setEmail] = useState(false);
  const [emailErr2, setemailErr2] = useState(false);



  function emailHandler(e) {
    let item = e.target.value;
    let regularExpression = /^[a-z0-9._+\-\']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/;
    if (regularExpression.test(item)) {
      console.log("valid");
      setEmail(true);
      setemailErr2(false);
    } else {
      console.log("invalid");
      setEmail(false);
      setemailErr2(true);
    }
  }
  function submitlogin(){
    if(email === true){
      history.push("/otp-email")
    }
    else{  
    }
  }


    const classes = useStyles();
  return (
    <>
      <div className={classes.Back021}>
        <div className={classes.logo021}>
          <img className={classes.logo0112} src={logo} />
        </div>
        <Grid container className={classes.main021}>
          <Grid item xs={6}>
            <div className={classes.pooja}>
              <img src={forggot} className={classes.coin0122} />
            </div>
            <div className={classes.divpara021}>
              <p className={classes.grid1para021}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing <br/>
              consequat aliquam, metus, ultrices sed. In felis consectetur sit elit <br/>
              risus amet tempus lectus....
              </p>
            </div>
          </Grid>
          <Grid className={classes.CC0} item xs={6}>
            <Card className={classes.card001}>
              <CardContent>
                <div>
                  <div>
                    <h1 className={classes.Forgot001}>Forgot password</h1>
                  </div>
                  <div>
                    <p className={classes.pleaseenter001}>
                      Please enter your email and password
                    </p>
                  </div>
                </div>
                <div className={classes.flex_item001}>
                  <div>
                    <a className={classes.Email001}>Email</a>
                  </div>
                  <div>
                    <Link to='/forgotpass' className={classes.number001}>Phone number</Link>
                  </div>
                </div>
                <div>
                  <div className={classes.exampelemail0121}>
                    <input
                      className={classes.input0121}
                      placeholder="Enter email address"
                      onChange={emailHandler}
                    />{" "}
                    {emailErr2 ? (
                      <span
                        style={{
                          color: "red",
                          position: "relative",
                          top: "1vw",
                        }}
                      >
                        Invalid Email Id
                      </span>
                    ) : (
                      ""
                    )}
                    
                  </div>
                </div>
                <div className={classes.flex002}>
                  <div>
                    <button onClick={submitlogin} className={classes.sbutton001}> SUBMIT</button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className={classes.coin0002}>
              <img src={coin2} className={classes.coin003} />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
   
  );
}
