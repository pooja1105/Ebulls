import React from "react";
import logo from "../img/logo.png";
import coin2 from "../img/coin2.png";
import { makeStyles } from "@mui/styles";
import "../style/style.css";
import { useState } from "react";
import register1 from "../img/1register.png";
import { Card, CardContent, Grid } from "@mui/material";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles({
  Back22: {
    backgroundColor: "black",
    height: "1021px",
    width: "100%",
    overflow: "hidden",
  },
  main11: {
    paddingTop: "5.042vw",
  },
  main12: {
    paddingTop: "11.042vw",
  },
  coin11: {
    width: "48.021vw",
    height: "52.143vw",
  },
  grid1para11: {
    fontSize: "1.042vw",
    color: "#ffff",
  },
  divpara111: {
    position: "relative",
    top: "-30.458vw",
    left: "13.781vw",
  },
  card11: {
    width: "23.229vw",
    borderRadius: "3.083vw",
  },
  Register11: {
    fontSize: "1.146vw",
    paddingTop: "0.644vw",
    paddingLeft: "1.719vw",
    color: "#434343",
  },
  pleaseenter11: {
    color: "#898CA9",
    fontSize: "0.833vw",
    paddingTop: "0.056vw",
    paddingLeft: "1.875vw",
  },

  exampelemail11: {
    paddingTop: "1vw",
    paddingLeft: "1vw",
  },
  exampelpassword11: {
    paddingLeft: "1vw",
    paddingTop: "-1.5vw",
  },
  exampelCpassword11: {
    paddingLeft: "1vw",
    paddingTop: "1vw",
  },
  exampelnumber1: {
    paddingLeft: "1vw",
    paddingTop: "1vw",
  },

  input111: {
    width: "18.906vw",
    height: "3.177vw",
    borderRadius: "5.208vw",
    border: "1px solid #D1D1D1",
  },
  input222: {
    width: "18.906vw",
    height: "3.177vw",
    borderRadius: "5.208vw",
    border: "1px solid #D1D1D1",
  },

  flex22: {
    textAlign: "center",
    paddingTop: "2.031vw",
  },
  sbutton11: {
    width: "10.052vw",
    height: "3.125vw",
    fontSize: "1.146vw",
    color: "#00000",
    borderRadius: "5.208vw",
    backgroundColor: "#EAB73B",
    border: "none",
  },

  flex333: {
    display: "flex",
    gap: "0.521vw",
    paddingLeft: "5.125vw",
    paddingTop: "1.127vw",
    color: "#898CA9",
    fontSize: "0.833vw",
  },
  coin222: {
    width: "35.990vw",
    height: "35.990vw",
    position: "relative",
    top: "-30vw",
    left: "25vw",
  },
  coin333: {
    width: "15.990vw",
    height: "35.990vw",
  },
  logo111: {
    paddingLeft: "10.260vw",
    paddingTop: "1.33vw",
  },
  logo112: {
    width: "7.135vw",
    height: "1.510vw",
  },
  list1: {
    top: "-2.354vw",
    left: "0.208vw",
    height: "3.178vw",
    width: "3.198vw",
    border: "none",
  },
  exampelemail1: {
    paddingTop: "2.031vw",
    paddingLeft: "1vw",
  },
  input11: {
    width: "15.906vw",
    height: "3.177vw",
    borderRadius: "5.208vw",
    border: "1px solid #D1D1D1",
  },
});

export default function Register() {
  const history = useHistory();
  const [email, setEmail] = useState(false);
  const [emailErr2, setemailErr2] = useState(false);
  const [passErr, setpassErr1] = useState(false);
  const [passLogin, setPassLogin] = useState(false);
  const [CpassErr, CsetpassErr] = useState(false);
  const [CpassLogin, CsetPassLogin] = useState(false);
  const [passwordErr, setpassErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [phone, setphone] = useState(false);
  const [select, setSelect] = useState(false);

  function submitlogin(){
    if(passLogin === true && email === true && CpassLogin===true && select === true && phone === true ){
      history.push("/")
    }
    else{
      console.log(passLogin,email,CpassLogin,select,phone)
      
    }
  
  }
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

  function selectcode() {
    let a = document.getElementById("Country").value;
    if (a == "Select") {
      setSelect(false);
    } else if (a == "91") {
      setSelect(true);
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
      <div className={classes.Back22}>
        <div className={classes.logo111}>
          <img className={classes.logo112} src={logo} />
        </div>
        <Grid container>
          <Grid item xs={6} className={classes.main11}>
            <div>
              <img src={register1} className={classes.coin11} />
            </div>
            <div className={classes.divpara111}>
              <p className={classes.grid1para11}>
                Buy, sell, and grow your crypto with Crypto,the platform <br />
                dedicated to every trader at every level.
              </p>
            </div>
          </Grid>
          <Grid item xs={6} className={classes.main12}>
            <Card className={classes.card11}>
              <CardContent>
                <div>
                  <div>
                    <h1 className={classes.Register11}>Register</h1>
                  </div>
                  <div>
                    <p className={classes.pleaseenter11}>
                      Register your e-bulls account
                    </p>
                  </div>
                </div>

                <div>
                  <div className={classes.exampelemail11}>
                    <input
                      className={classes.input111}
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

                  <div className={classes.exampelemail1}>
                    <div style={{ display: "flex" }}>
                      <div>
                        <select
                          className={classes.list1}
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
                          className={classes.input11}
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
                  
                  <br />

                  <div className={classes.exampelpassword11}>
                    <input
                      id="pass1"
                      className={classes.input222}
                      type="Password"
                      placeholder="Password"
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
                  <div className={classes.exampelCpassword11}>
                    <input
                      id="c-pass"
                      className={classes.input222}
                      type="Password"
                      placeholder="Confirm Password"
                      onChange={passCHandler}
                    />{" "}
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

                <div className={classes.flex22}>
                  <div>
                    <button onClick={submitlogin} className={classes.sbutton11}>Register</button>
                  </div>
                </div>
                <div className={classes.flex333}>
                  <div>
                    <p>Alredy have a account ? </p>
                  </div>
                  <div>
                    <br />
                    <Link to='/' style={{ color: "#EAB73B" }}>Sign In</Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className={classes.coin222}>
              <img src={coin2} className={classes.coin333} />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
