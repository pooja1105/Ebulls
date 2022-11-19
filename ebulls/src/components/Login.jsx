import React from "react";
import logo from "../img/logo.png";
import coin1 from "../img/coin1.png";
import coin2 from "../img/coin2.png";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import "../style/style.css";
import { Card, CardContent, Grid } from "@mui/material";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles({
  Back1: {
    backgroundColor: "black",
    height: "1021px",
    width: "100%",
    overflow: "hidden",
  },
  main: {
    paddingTop: "11.042vw",
  },
  coin1: {
    width: "48.021vw",
    height: "52.143vw",
  },
  grid1para: {
    fontSize: "1.042vw",
    color: "#ffff",
  },
  divpara1: {
    position: "relative",
    top: "-30.458vw",
    left: "13.781vw",
  },
  card: {
    width: "23.229vw",
    borderRadius: "3.083vw",
  },
  signin: {
    fontSize: "1.146vw",
    paddingTop: "0.644vw",
    paddingLeft: "1.719vw",
    color: "#434343",
  },
  pleaseenter: {
    color: "#898CA9",
    fontSize: "0.833vw",
    paddingTop: "0.056vw",
    paddingLeft: "1.875vw",
  },
  flex_item1: {
    display: "flex",
    gap: "1.146vw",
    paddingTop: "1.302vw",
    position: "relative",
    left: "8.860vw",
  },
  Email: {
    fontSize: "0.833vw",
    color: "#EAB73B",
  },
  number: {
    fontSize: "0.833vw",
    color: "#898CA9",
  },
  exampelemail: {
    paddingTop: "2.031vw",
    paddingLeft: "1vw",
  },
  exampelpassword: {
    paddingLeft: "1vw",
    paddingTop: "1.510vw",
  },
  input1: {
    width: "18.906vw",
    height: "3.177vw",
    borderRadius: "5.208vw",
    border: "1px solid #D1D1D1",
  },
  input2: {
    width: "18.906vw",
    height: "3.177vw",
    borderRadius: "5.208vw",
    border: "1px solid #D1D1D1",
  },
  checkboxdiv: {
    display: "flex",
    paddingTop: "1.510vw",
    gap: "0.465vw",
    paddingLeft: "1.281vw",
  },
  byname: {
    fontSize: "0.733vw",
  },
  flex2: {
    display: "flex",
    gap: "1.823vw",
    paddingLeft: "1.823vw",
    paddingTop: "2.031vw",
  },
  sbutton: {
    width: "10.052vw",
    height: "3.125vw",
    fontSize: "1.146vw",
    color: "#00000",
    borderRadius: "5.208vw",
    backgroundColor: "#EAB73B",
    border: "none",
  },
  forgot: {
    paddingTop: "1.1vw",
    fontSize: "0.833vw",
    color: "#898CA9",
  },
  flex3: {
    display: "flex",
    gap: "0.521vw",
    paddingLeft: "3.125vw",
    paddingTop: "1.527vw",
    color: "#898CA9",
    fontSize: "0.833vw",
  },
  coin2: {
    width: "35.990vw",
    height: "35.990vw",
    position: "relative",
    top: "-30vw",
    left: "25vw",
  },
  coin3: {
    width: "15.990vw",
    height: "35.990vw",
  },
  logo: {
    paddingLeft: "10.260vw",
    paddingTop: "1.33vw",
  },
  logo1: {
    width: "7.135vw",
    height: "1.510vw",
  },
  hshdds: {
  paddingLeft: "5vw"
  },
});

export default function Login() {
  const history = useHistory();

  const [email, setEmail] = useState(false);
  const [emailErr2, setemailErr2] = useState(false);
  const [passErr,setpassErr1]=useState(false);
  const [passLogin , setPassLogin]=useState(false);
  const [checked, setChecked] = useState(false);



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
    let regularpassExpression= /^(?=.*\d)(?=(.*\W){1})(?=.*[a-zA-Z])(?!.*\s).{1,15}$/
    if(regularpassExpression.test(item1))
    {
      console.warn("valide");
      setpassErr1(false);
      setPassLogin(true);
    }
    else{
      console.log("invalid");
      setpassErr1(true);
    }
  }
  const handleCheckBox = event => {
    if( event.target.checked ){
       setChecked(true);
    }
    else{
     
    }
  };
  function submitlogin(){
    if(passLogin === true && email === true ){
      history.push("/landing")
    }
    else{
      
      
    }
  
  }


  const classes = useStyles();
  return (
    <>
      <div className={classes.Back1}>
        <div className={classes.logo}>
          <img className={classes.logo1} src={logo} />
        </div>
        <Grid container className={classes.main}>
          <Grid item xs={6}>
            <div>
              <img src={coin1} className={classes.coin1} />
            </div>
            <div className={classes.divpara1}>
              <p className={classes.grid1para}>
                Buy, sell, and grow your crypto with Crypto,the platform <br />
                dedicated to every trader at every level.
              </p>
            </div>
          </Grid>
          <Grid className={classes.hshdds} item xs={6}>
            <Card className={classes.card}>
              <CardContent>
                <div>
                  <div>
                    <h1 className={classes.signin}>Sign in</h1>
                  </div>
                  <div>
                    <p className={classes.pleaseenter}>
                      Please enter your email and password
                    </p>
                  </div>
                </div>
                <div className={classes.flex_item1}>
                  <div>
                    <a className={classes.Email}>Email</a>
                  </div>
                  <div>
                    <Link to='/phone' className={classes.number}>Phone number</Link>
                  </div>
                </div>
                <div>
                  <div className={classes.exampelemail}>
                    <input
                      className={classes.input1}
                      placeholder="user@email.com"
                      onChange={emailHandler}
                    /> {" "}
                {emailErr2 ? (
                  <span
                    style={{ color: "red", position: "relative", top: "1vw" }}
                  >
                 Invalid Email Id
                  </span>
                ) : (
                  ""
                )}


                  </div>
                  <div className={classes.exampelpassword}>
                    <input
                     id="pass1"
                      className={classes.input2}
                      type="Password"
                      placeholder="Password"
                      onChange={passHandler}
                    /> <br/>{passErr ? <span className={classes.color} 
                  style={{ color: "red" }}>Invalid Password</span> : ""}
                  </div>
                </div>
                <div className={classes.checkboxdiv}>
                  <div>
                    <input type="checkbox" 
                       onChange={handleCheckBox}
                    />
                  </div>
                  <div>
                    <a className={classes.byname}>
                      By login.you agree to our
                      <span >
                        {" "}
                       <Link to='/terms' style={{ color: "skyblue" }}> Terms & Condition</Link>
                      </span>
                    </a>
                  </div>
                </div>
                <div className={classes.flex2}>
                  <div>
                    <button onClick={submitlogin} className={classes.sbutton}> SIGN IN</button>
                  </div>
                  <div className={classes.forgot}>
                    <Link to='/forgotpass' style={{color:'#898CA9'}}>Forgot password?</Link>
                  </div>
                </div>
                <div className={classes.flex3}>
                  <div>
                    <p>Don’t have a account yet ? </p>
                  </div>
                  <div>
                    <br />
                    <Link to='/signup' style={{ color: "#EAB73B" }}>Register</Link> 
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className={classes.coin2}>
              <img src={coin2} className={classes.coin3} />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
