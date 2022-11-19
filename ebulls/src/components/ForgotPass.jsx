import React from "react";
import logo from "../img/logo.png";
import forgotpass from "../img/1forgot11.png";
import coin2 from "../img/coin2.png";
import { makeStyles } from "@mui/styles";
import "../style/style.css";
import { useState } from "react";
import { Card, CardContent, Grid } from "@mui/material";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles({
  Back21: {
    backgroundColor: "black",
    height: "1021px",
    width: "100%",
    overflow: "hidden",
  },
  main21: {
    paddingTop: "11.042vw",
  },
  hdhdgfh: {
    position: "relative",
    top:"-7vw"

  },

  coin122: {
    width: "48.021vw",
    height: "52.143vw",
  },
  logo21: {
    paddingLeft: "10.260vw",
    paddingTop: "1.33vw",
  },
  logo112: {
    width: "7.135vw",
    height: "1.510vw",
  },
  grid1para21: {
    fontSize: "1.042vw",
    color: "#ffff",
  },
  divpara21: {
    position: "relative",
    top: "-38.458vw",
    left: "13.781vw",
  },
  card01: {
    width: "23.229vw",
    height: "31.198vw",
    borderRadius: "3.083vw",
  },

  Forgot01: {
    fontSize: "1.146vw",
    paddingTop: "0.644vw",
    paddingLeft: "1.719vw",
    color: "#434343",
  },
  pleaseenter01: {
    color: "#898CA9",
    fontSize: "0.833vw",
    paddingTop: "0.056vw",
    paddingLeft: "1.875vw",
  },
  flex_item01: {
    display: "flex",
    gap: "1.146vw",
    paddingTop: "1.302vw",
    position: "relative",
    left: "8.860vw",
  },
  Email01: {
    fontSize: "0.833vw",
    color: "#898CA9",
  },
  number01: {
    fontSize: "0.833vw",
    color: "#EAB73B",
  },
  input121: {
    width: "14.906vw",
    height: "3.177vw",
    borderRadius: "5.208vw",
    border: "1px solid #D1D1D1",
  },
  exampelemail121: {
    paddingTop: "2.031vw",
    paddingLeft: "1vw",
  },
  list00: {
   
    top: "-2.354vw",
    left: "0.208vw",
    height: "3.178vw",
    width: "3.198vw",
    border: "none",
  },
  flex02: {
    display: "flex",
    gap: "1.823vw",
    paddingLeft: "1.123vw",
    paddingTop: "2.031vw",
  },
  sbutton01: {
    width: "18.906vw",
    height: "3.177vw",
    fontSize: "1.146vw",
    color: "#000000",
    borderRadius: "5.208vw",
    backgroundColor: "#EAB73B",
    border: "none",
  },
  CC: {
    paddingLeft: "4vw",
  },
  coin002: {
    width: "35.990vw",
    height: "35.990vw",
    position: "relative",
    top: "-30vw",
    left: "25vw",
  },
  coin03: {
    width: "15.990vw",
    height: "35.990vw",
  },
});

export default function ForgotPass() {
  const history = useHistory();
  const [select, setSelect] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [phone, setphone] = useState(false);



  function selectcode() {
    let a = document.getElementById("Country").value;
    if (a == "Select") {
      setSelect(false);
    } else if (a == "91") {
      setSelect(true);
    }
  }
  function submitlogin(){
    if(select === true && phone === true){
      history.push("/otp-phone")
    }
    else{  
    }
  }

  function phonenumber() {
    let phone = document.getElementById("phone").value;
    let regex = /^[6-9]{1}[0-9]{9}$/;
    if (regex.test(phone)) {
      setPhoneErr(false);
      setphone(true);
    } else {
      setPhoneErr(true);
    }
  }
  const classes = useStyles();
  return (
    <>
      <div className={classes.Back21}>
        <div className={classes.logo21}>
          <img className={classes.logo112} src={logo} />
        </div>
        <Grid container className={classes.main21}>
          <Grid item xs={6}>
            <div className={classes.hdhdgfh}>
              <img src={forgotpass} className={classes.coin122} />
            </div>
            <div className={classes.divpara21}>
              <p className={classes.grid1para21}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing <br/>
              consequat aliquam, metus, ultrices sed. In felis consectetur sit elit <br/>
              risus amet tempus lectus....
              </p>
            </div>
          </Grid>
          <Grid className={classes.CC} item xs={6}>
            <Card className={classes.card01}>
              <CardContent>
                <div>
                  <div>
                    <h1 className={classes.Forgot01}>Forgot password</h1>
                  </div>
                  <div>
                    <p className={classes.pleaseenter01}>
                      Please enter your email and password
                    </p>
                  </div>
                </div>
                <div className={classes.flex_item01}>
                  <div>
                    <Link to='/forgot-email' style={{color:" #898CA9"}} className={classes.Email01}>Email</Link>
                  </div>
                  <div>
                    <a className={classes.number01}>Phone number</a>
                  </div>
                </div>
                <div>

                <div className={classes.exampelemail121}>
                    <div style={{ display: "flex" }}>
                      <div>
                        <select
                          className={classes.list00}
                          name=""
                          id="Country"
                          onChange={selectcode}
                        >
                          <option value="Select">Select</option>
                          <option value="91">+91</option>
                        </select>
                      </div>
                      <div>
                        <input
                          id="phone"
                          className={classes.input121}
                          placeholder="           9359040624"
                          onChange={phonenumber}
                        />{" "}
                        {phoneErr ? (
                          <span style={{ color: "red" }}>
                            Enter valid phone number
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={classes.flex02}>
                  <div>
                    <button onClick={submitlogin} className={classes.sbutton01}> SUBMIT</button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className={classes.coin002}>
              <img src={coin2} className={classes.coin03} />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
