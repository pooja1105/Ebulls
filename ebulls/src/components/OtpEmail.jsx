import React from "react";
import logo from "../img/logo.png";
import securitttty from "../img/Otpphone.png";
import coin2 from "../img/coin2.png";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import "../style/style.css";
import { Card, CardContent, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  Back91: {
    backgroundColor: "black",
    height: "1021px",
    width: "100%",
    overflow: "hidden",
  },
  logo9: {
    paddingLeft: "10.260vw",
    paddingTop: "1.33vw",
  },
  logo91: {
    width: "7.135vw",
    height: "1.510vw",
  },
  main9: {
    paddingTop: "11.042vw",
  },
  coin91: {
    width: "48.021vw",
    height: "52.143vw",
  },
  grid1para9: {
    fontSize: "1.042vw",
    color: "#ffff",
  },
  divpara91: {
    position: "relative",
    top: "-30.458vw",
    left: "11.581vw",
  },
  card9: {
    width: "23.229vw",
    height: "31.198vw",
    borderRadius: "3.083vw",
  },
  firstimg: {
    paddingTop:"-1vw",
  },
  security: {
    fontSize: "1.146vw",
    paddingTop: "0.644vw",
    paddingLeft: "1.719vw",
    color: "#434343",
  },
  pleaseenter9: {
    color: "#898CA9",
    fontSize: "0.833vw",
    paddingTop: "0.056vw",
    paddingLeft: "1.875vw",
  },
  ssss: {
    paddingLeft: "1.927vw",
    paddingTop: "1vw"
  },
  inputtts1: {
    width: "18.906vw",
    height: "3.177vw",
    borderRadius: "5.208vw",
    border: "1px solid #D1D1D1",
  },
  phonetext: {
    color: "#898CA9",
    height: "1.250vw",
    width: "13.333vw",
    fontSize: "0.833vw",
  },
  codeverify: {
    paddingLeft: "1.927vw",
    paddingTop: "1vw"
  },
  swiitch: {
    color: "#EAB73B",
    width: "11.354vw",
    height: "1.250vw",
    fontSize: "0.833vw",

  },
  jdsgy: {
    paddingLeft: "1.927vw",
    paddingTop: "2vw"
  },
  nextbtn: {
    width: "18.906vw",
    height: "3.125vw",
    borderRadius: "5.208vw",
    background: "#EAB73B",
    border: "none",
    fontSize: "1.146vw",
    color: "#000000",
  },
  bigcard: {
    paddingTop: "8vw",
    paddingLeft: "2vw",
  },
  coin211112: {
    paddingLeft: "26vw",
  },
  coin0093: {
    width: "15.990vw",
    height: "35.990vw",
    position: "relative",
    top: "-29.042vw",
  },
});


export default function OtpEmail() {
    const [phoneErr, setPhoneErr] = useState(false);
  const [phone, setphone] = useState(false);

  function phonenumber() {
    let phone = document.getElementById("phone").value;
    let regex = /^[0-9]{6}$/;
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
      <div className={classes.Back91}>
        <div className={classes.logo9}>
          <img className={classes.logo91} src={logo} />
        </div>
        <Grid container className={classes.main9}>
          <Grid item xs={6}>
            <div className={classes.firstimg}>
              <img src={securitttty} className={classes.coin91} />
            </div>
            <div className={classes.divpara91}>
              <p className={classes.grid1para9}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing <br/>
              consequat aliquam, metus, ultrices sed. In felis consectetur sit elit <br/>
              risus amet tempus lectus....
              </p>
            </div>
          </Grid>
          <Grid className={classes.bigcard} item xs={6}>
            <Card className={classes.card9}>
              <CardContent>
                <div>
                  <div>
                    <h1 className={classes.security}>Security verification</h1>
                  </div>
                  <div>
                    <p className={classes.pleaseenter9}>
                      To secure your account, please complete the <br />
                      following verification.
                    </p>
                  </div>
                </div>

                <div className={classes.ssss}>
                  <div>
                    <p className={classes.phonetext}>
                      Email verification code
                    </p>
                  </div>

                  <div>
                    <input
                      id="phone"
                      className={classes.inputtts1}
                      onChange={phonenumber}
                    />{" "}
                    {phoneErr ? (
                      <span style={{ color: "red" }}>
                        Enter the 6-digit code sent to......
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className={classes.codeverify}>
                <Link to='/otp-phone'> <p className={classes.swiitch}>
                    Swith to Mobile verification.
                  </p></Link>
                </div>
                <div className={classes.jdsgy}>
                <Link to='/reset-pass'> <button className={classes.nextbtn}>NEXT</button></Link>
                </div>
              </CardContent>
            </Card>
            <div className={classes.coin211112}>
              <img src={coin2} className={classes.coin0093} />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
