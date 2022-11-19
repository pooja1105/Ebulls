import React from "react";
import logo from "../img/logo.png";
import reset from "../img/reset.png";
import coin2 from "../img/coin2.png";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import "../style/style.css";
import { Card, CardContent, Grid } from "@mui/material";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles({
  Backs1: {
    backgroundColor: "black",
    height: "1021px",
    width: "100%",
    overflow: "hidden",
  },
  mains: {
    paddingTop: "11.042vw",
  },
  coins1: {
    width: "48.021vw",
    height: "52.143vw",
  },
  grid1paras: {
    fontSize: "1.042vw",
    color: "#ffff",
  },
  divparas1: {
    position: "relative",
    top: "-30.458vw",
    left: "13.781vw",
  },
  cards: {
    width: "23.229vw",

    borderRadius: "3.083vw",
  },
  Reset: {
    fontSize: "1.146vw",
    paddingTop: "0.644vw",
    paddingLeft: "1.719vw",
    color: "#434343",
  },
  pleaseenters: {
    color: "#898CA9",
    fontSize: "0.833vw",
    paddingTop: "0.056vw",
    paddingLeft: "1.875vw",
  },

  exampelemails: {
    paddingTop: ".031vw",
    paddingLeft: "-2vw",
  },
  exampelpasswords: {
    paddingLeft: "1vw",
    paddingTop: "1.510vw",
  },
  inputs1: {
    width: "18.906vw",
    height: "3.177vw",
    borderRadius: "5.208vw",
    border: "1px solid #D1D1D1",
  },
  inputs2: {
    width: "18.906vw",
    height: "3.177vw",
    borderRadius: "5.208vw",
    border: "1px solid #D1D1D1",
  },
  inputs22: {
    width: "18.906vw",
    height: "3.177vw",
    borderRadius: "5.208vw",
    border: "1px solid #D1D1D1",
  },

  flexs2: {
    display: "flex",
    gap: "1.823vw",
    paddingLeft: "1.123vw",
    paddingTop: "2.031vw",
  },
  sbuttons: {
    width: "18.906vw",
    height: "3.177vw",
    fontSize: "1.146vw",
    color: "#00000",
    borderRadius: "5.208vw",
    backgroundColor: "#EAB73B",
    border: "none",
  },
  C00: {
    paddingLeft: "4vw",
    paddingTop: "7.729vw",
  },

  coins2: {
    width: "35.990vw",
    height: "35.990vw",
    position: "relative",
    top: "-30vw",
    left: "25vw",
  },
  coins3: {
    width: "15.990vw",
    height: "35.990vw",
  },
  logos: {
    paddingLeft: "10.260vw",
    paddingTop: "1.33vw",
  },
  logos1: {
    width: "7.135vw",
    height: "1.510vw",
  },
  pp: {
    fontSize: "0.833vw",
    paddingLeft: "1.875vw",
    paddingTop: "2.708vw",
  },
  pp1: {
    fontSize: "0.833vw",
    paddingLeft: "1.875vw",
    paddingTop: "0.781vw",
  },
});

export default function ResetPass() {
  const history = useHistory();

  const [passErr, setpassErr1] = useState(false);
  const [passLogin, setPassLogin] = useState(false);
  const [CpassErr, CsetpassErr] = useState(false);
  const [passwordErr, setpassErr] = useState(false);
  const [CpassLogin, CsetPassLogin] = useState(false);




  function submitlogin(){
    if(passLogin === true && CpassLogin === true ){
      history.push("/pass-reset")
    }
    else{
      
      
    }
  
  }
  function passHandler(e1) {
    let item1 = e1.target.value;
    let regularpassExpression =
      /^(?=.*\d)(?=(.*\W){1})(?=.*[a-zA-Z])(?!.*\s).{1,15}$/;
    if (regularpassExpression.test(item1)) {
      console.warn("valide");
      setpassErr1(false);
      setPassLogin(true);
    } else {
      console.log("invalid");
      setpassErr1(true);
    }
  }
  function passCHandler(e2) {
    let item2 = e2.target.value;
    let regularCpassExpression =
      /^(?=.*\d)(?=(.*\W){1})(?=.*[a-zA-Z])(?!.*\s).{1,15}$/;
    if (regularCpassExpression.test(item2)) {
      console.warn("valide");
      CsetpassErr(false);
      CsetPassLogin(true);
    } else {
      console.log("invalid");
      CsetpassErr(true);
    }
    var pw1 = document.getElementById("pass1").value;
    var pw2 = document.getElementById("c-pass").value;
    if (pw1 == "") {
      console.log("invalid");
      setpassErr(true);
    }
    if (pw2 == "") {
      console.log("invalid");
      CsetpassErr(true);
    }
    if (pw1 != pw2) {
      console.log("invalid");
      CsetpassErr(true);
    } else {
    }
  }




  const classes = useStyles();
  return (
    <>
      <div className={classes.Backs1}>
        <div className={classes.logos}>
          <img className={classes.logos1} src={logo} />
        </div>
        <Grid container className={classes.mains}>
          <Grid item xs={6}>
            <div>
              <img src={reset} className={classes.coins1} />
            </div>
            <div className={classes.divparas1}>
              <p className={classes.grid1paras}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Adipiscing <br />
                consequat aliquam, metus, ultrices sed. In felis consectetur sit
                elit <br />
                risus amet tempus lectus....
              </p>
            </div>
          </Grid>
          <Grid className={classes.C00} item xs={6}>
            <Card className={classes.cards}>
              <CardContent>
                <div>
                  <div>
                    <h1 className={classes.Reset}>Reset your password</h1>
                  </div>
                  <div>
                    <p className={classes.pleaseenters}>
                      Please reset your password
                    </p>
                  </div>
                </div>


                <div className={classes.pp}>
                  <div>
                    <p>New password</p>
                  </div>
                  <div>
                    <input 
                     id="pass1"
                    className={classes.inputs22} 
                    type="Password" 
                    onChange={passHandler}
                    />
                    <br />
                    {passErr ? (
                      <span className={classes.color} style={{ color: "red" }}>
                        Invalid Password
                      </span>
                    ) : (
                      ""
                    )}

                  </div>
                </div>


                <div className={classes.pp1}>
                  <div>
                    <p>Confirm password</p>
                  </div>
                  <div>
                    <input 
                    id="c-pass"
                    className={classes.inputs2} 
                    type="Password"
                    onChange={passCHandler}
                     />
                     {" "}
                    <br />
                    {CpassErr ? (
                      <span className={classes.color} style={{ color: "red" }}>
                        Confirm Password Not Match
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className={classes.flexs2}>
                  <div>
                    <button onClick={submitlogin} className={classes.sbuttons}>NEXT</button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className={classes.coins2}>
              <img src={coin2} className={classes.coins3} />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
