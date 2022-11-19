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
  Back2: {
    backgroundColor: "black",
    height: "1021px",
    width: "100%",
    overflow: "hidden",
  },
  main1: {
    paddingTop: "11.042vw",
  },
  coin1: {
    width: "48.021vw",
    height: "52.143vw",
  },
  grid1para1: {
    fontSize: "1.042vw",
    color: "#ffff",
  },
  divpara11: {
    position: "relative",
    top: "-30.458vw",
    left: "13.781vw",
  },
  card1: {
    width: "23.229vw",
    borderRadius: "3.083vw",
  },
  signin1: {
    fontSize: "1.146vw",
    paddingTop: "0.644vw",
    paddingLeft: "1.719vw",
    color: "#434343",
  },
  pleaseenter1: {
    color: "#898CA9",
    fontSize: "0.833vw",
    paddingTop: "0.056vw",
    paddingLeft: "1.875vw",
  },
  flex_item11: {
    display: "flex",
    gap: "1.146vw",
    paddingTop: "1.302vw",
    position: "relative",
    left: "8.860vw",
  },
  Email1: {
    fontSize: "0.833vw",
    color: "#EAB73B",
  },
  number1: {
    fontSize: "0.833vw",
    color: "#898CA9",
  },
  exampelemail1: {
    paddingTop: "2.031vw",
    paddingLeft: "1vw",
  },
  exampelpassword1: {
    paddingLeft: "1vw",
    paddingTop: "1.510vw",
  },
  input11: {
    width: "15.906vw",
    height: "3.177vw",
    borderRadius: "5.208vw",
    border: "1px solid #D1D1D1",
  },
  input22: {
    width: "18.906vw",
    height: "3.177vw",
    borderRadius: "5.208vw",
    border: "1px solid #D1D1D1",
  },
  checkboxdiv1: {
    display: "flex",
    paddingTop: "1.510vw",
    gap: "0.465vw",
    paddingLeft: "1.281vw",
  },
  byname1: {
    fontSize: "0.733vw",
  },
  flex22: {
    display: "flex",
    gap: "1.823vw",
    paddingLeft: "1.823vw",
    paddingTop: "2.031vw",
  },
  sbutton1: {
    width: "10.052vw",
    height: "3.125vw",
    fontSize: "1.146vw",
    color: "#00000",
    borderRadius: "5.208vw",
    backgroundColor: "#EAB73B",
    border: "none",
  },
  forgot1: {
    paddingTop: "1.1vw",
    fontSize: "0.833vw",
    color: "#898CA9",
  },
  flex33: {
    display: "flex",
    gap: "0.521vw",
    paddingLeft: "3.125vw",
    paddingTop: "1.527vw",
    color: "#898CA9",
    fontSize: "0.833vw",
  },
  coin22: {
    width: "35.990vw",
    height: "35.990vw",
    position: "relative",
    top: "-30vw",
    left: "25vw",
  },
  coin33: {
    width: "15.990vw",
    height: "35.990vw",
  },
  logo11: {
    paddingLeft: "10.260vw",
    paddingTop: "1.33vw",
  },
  logo12: {
    width: "7.135vw",
    height: "1.510vw",
  },
  list: {
    height: '3.177vw',
    width: '3.198vw',
    border: 'none'
  },
   
});

export default function Phone() {
  const history = useHistory();
  const [select,setSelect]=useState(false);
  const [phoneErr,setPhoneErr]=useState(false);
  const [phone,setphone]=useState(false);
  const [passErr,setpassErr1]=useState(false);
  const [passLogin , setPassLogin]=useState(false);
  const [checked, setChecked] = useState(false);


  function selectcode(){
    let a = document.getElementById("Country").value;
    if(a == "Select"){
      setSelect(false);
    }
    else if(a == "91"){
      setSelect(true);
    }
  }

  function phonenumber(){
    let phone = document.getElementById("phone").value;
    let regex = /^[6-9]{1}[0-9]{9}$/
    if(regex.test(phone)){
     setPhoneErr(false)
     setphone(true)
    }
    else{
      setPhoneErr(true)
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
    if(passLogin == true && phone == true ){
      history.push("/landing")
    }
    else{
      
      
    }
  
  }


  const classes = useStyles();
  return (
    <>
      <div className={classes.Back2}>
        <div className={classes.logo11}>
          <img className={classes.logo12} src={logo} />
        </div>
        <Grid container className={classes.main1}>
          <Grid item xs={6}>
            <div>
              <img src={coin1} className={classes.coin1} />
            </div>
            <div className={classes.divpara11}>
              <p className={classes.grid1para1}>
                Buy, sell, and grow your crypto with Crypto,the platform <br />
                dedicated to every trader at every level.
              </p>
            </div>
          </Grid>
          <Grid item xs={6}>
            <Card className={classes.card1}>
              <CardContent>
                <div>
                  <div>
                    <h1 className={classes.signin1}>Sign in</h1>
                  </div>
                  <div>
                    <p className={classes.pleaseenter1}>
                      Please enter your email and password
                    </p>
                  </div>
                </div>
                <div className={classes.flex_item11}>
                  <div>
                    <Link to='' className={classes.Email1}>Email</Link>
                  </div>
                  <div>
                  <a  className={classes.number}>Phone number</a>
                  </div>
                </div>
                <div>
                  <div className={classes.exampelemail1}>
                  <div style={{display:'flex'}}>
                    <div>
                    <select className={classes.list} name="" id="Country" onChange={selectcode}>
                    <option value="Select">Select</option>
                       <option value="+91">+91</option>

                      </select>
                    </div>
                    <div>
                    <input
                     id="phone"
                      className={classes.input11}
                      placeholder= "           9359040624"
                      onChange={phonenumber}
                    /> {phoneErr?<span style={{ color: "red",}}>Enter valid phone number</span>:""}
                    </div>
                  </div>
                  </div>
                  
                  <div className={classes.exampelpassword1}>
                    <input
                    id="pass1"
                      className={classes.input22}
                      type="Password"
                      placeholder="Password"
                      onChange={passHandler}
                    /> <br/>{passErr ? <span className={classes.color} 
                  style={{ color: "red" }}>Invalid Password</span> : ""}

                  </div>
                </div>
                <div className={classes.checkboxdiv1}>
                  <div>
                    <input type="checkbox" 
                    onChange={handleCheckBox}
                    />
                  </div>
                  <div>
                    <a className={classes.byname1}>
                      By login.you agree to our
                      <span style={{ color: "skyblue" }}>
                        {" "}
                        <Link to='/terms' style={{ color: "skyblue" }}> Terms & Condition</Link>
                      </span>
                    </a>
                  </div>
                </div>
                <div className={classes.flex22}>
                  <div>
                    <button className={classes.sbutton1} onClick={submitlogin} > SIGN IN</button>
                  </div>
                  <div className={classes.forgot1}>
                    <Link to='/forgotpass' style={{color:'#898CA9'}}>Forgot password?</Link>
                  </div>
                </div>
                <div className={classes.flex33}>
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
            <div className={classes.coin22}>
              <img src={coin2} className={classes.coin33} />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
 } 
