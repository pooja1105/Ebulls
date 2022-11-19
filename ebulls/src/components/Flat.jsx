import {
  Box,
  Card,
  CardContent,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import DashboardSharpIcon from "@mui/icons-material/DashboardSharp";
import EmojiObjectsSharpIcon from "@mui/icons-material/EmojiObjectsSharp";
import MilitaryTechSharpIcon from "@mui/icons-material/MilitaryTechSharp";
import { makeStyles } from "@mui/styles";
import PersonIcon from "@mui/icons-material/Person";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SavingsIcon from "@mui/icons-material/Savings";
import NavWith from "./NavWith";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles({
  card1: {
    position: "relative",
    left: "300px",
    "@media(max-width: 1111px)": {
      position: "relative",
      left: "250px",
    },
    "@media(max-width: 879px)": {
      position: "relative",
      left: "230px",
    },
  },
  mainsidebar: {
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#ffff",
    paddingTop: "50px",
  },
  sidebaritems: {
    margin: "36px",
  },
  dashcolor1: {
    color: "#EAB73B",
  },
  flexxx1: {
    display: "flex",
    gap: "25.333vw",
    paddingTop: "2.865vw",

    "@media (max-width:1250px)": {
      gap: "18vw",
    },
    "@media (max-width:990px)": {
      gap: "1vw",
    },
    "@media (max-width:750px)": {
      display: "contents",
    },
  },
  btnflex1: {
    display: "flex",
    gap: "1vw",
  },
  depositbtn1: {
    width: "6.198vw",
    height: "2.604vw",
    fontSize: "0.833vw",
    border: "none",
    background: "#1C1C1C",
    color: "#9A9A9A",
  },
  depositbtn11: {
    width: "6.198vw",
    height: "2.604vw",
    fontSize: "0.833vw",
    border: "none",
    background: "#EAB73B",
    color: "#000000",
  },
  depositbtn21: {
    width: "10.313vw",
    height: "2.604vw",
    fontSize: "0.833vw",
    border: "none",
    background: "#1C1C1C",
    color: "#9A9A9A",
  },
  caaaard1: {
    width: "68.771vw",
    "@media (max-width:1250px)": {
      width: "60vw",
    },
    "@media (max-width:850px)": {
      width: "55vw",
    },
    "@media (max-width:760px)": {
      width: "45vw",
    },
    "@media (max-width:620px)": {
      width: "35vw",
    },
  },
  maaaian1: {
    paddingLeft: "2.760vw",
  },
  internaal1: {
    color: "#EAB73B",
    fontSize: "1.042vw",
  },
  uid1: {
    color: "#FFFFFF",
    fontSize: "0.833vw",
  },
  iiiinput1: {
    color: "#FFFFFF",
    fontSize: "0.625vw",
    height: "2.604vw",
    width: "24.308vw",
    background: "#1E1E1E",
    border: "none",
    "@media (max-width:860px)": {
      width: "8vw",
    },
    "@media (max-width:760px)": {
      width: "10vw",
    },
    "@media (max-width:1256px)": {
      width: "16vw",
    },
    
  },
  ccoin1: {
    color: "#FFFFFF",
    fontSize: "0.833vw",
  },
  ccoinenter1: {
    color: "#FFFFFF",
    fontSize: "0.625vw",
    height: "2.344vw",
    width: "7.240vw",
    background: "#1E1E1E",
    border: "none",
    "@media (max-width:850px)": {
      width: "14vw",
    },
    "@media (max-width:760px)": {
      width: "10vw",
    },
  },
  cancelflex1: {
    textAlign: "center",
    paddingTop:'2.188vw'
  },

  Withbtn1: {
    height: "2.500vw",
    width: "9.583vw",
    background: "#EAB73B",
    color: "#000000",
    fontSize: "1.042vw",
    borderRadius: "5.208vw",
    border: "none",
  },
  innnnternal1: {
    color: "#EAB73B",
    fontSize: "0.938vw",
  },
  ploas1: {
    fontSize: "0.729vw",
    color: "#939393",
  },
  allflex1: {
    display: "flex",
    gap: "11vw",
    "@media (max-width:860px)": {
      gap: "2vw",
    },
  },

  toppp1: {
    paddingTop: "7vw",
  },
  internaal10: {
    fontSize: "0.833vw",
    color: "#9A9A9A",
  },
  flex87: {
    display: "flex",
    gap: "7vw",
  },
  wiflex: {
    display: "flex",
    gap: "22.031vw",
    "@media (max-width:650px)": {
      display: "contents",
    },
  },
  internaal100: {
    fontSize: "0.833vw",
  },

  currency: {
    fontSize: "1.042vw",
  },
  depoppp: {
    fontSize: "0.625vw",
    color: "#939393",
  },
  radio: {
display: "flex",
  },
  biggg: {
fontSize: '0.938vw',
color: "#FFFFFF"
  },
  dialogradio:{
    paddingTop:'1.188vw'
  }

});


const drawerWidth = 260;

export default function Flat() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div style={{ background: "black" }}>
      <Grid container>
        <Grid item xs={12}>
          <NavWith />
        </Grid>
        <Drawer
          className={classes.sidebar}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              background: `linear-gradient(152.97deg, #3d3c38 0%, #000000 100%)`,
              position: "absolute",
              top: "200px",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <List style={{ color: "#DDE2FF" }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon style={{ color: "#9FA2B4" }}>
                  <div className={classes.mainsidebar}>
                    <div
                      className={classes.sidebaritems}
                      style={{ color: "#EAB73B" }}
                    >
                      <DashboardSharpIcon style={{ color: "#EAB73B" }} />{" "}
                      Dashboard
                    </div>
                    <div className={classes.sidebaritems}>
                      <PersonIcon /> Profile
                    </div>
                    <div className={classes.sidebaritems}>
                      <PrivacyTipIcon />
                      Security
                    </div>
                    <div className={classes.sidebaritems}>
                      <ContactMailIcon /> KYC Idendification
                    </div>
                    <div className={classes.sidebaritems}>
                      <AccountBalanceIcon /> Banking
                    </div>
                    <div className={classes.sidebaritems}>
                     <Link to="/staking" style={{color:'#ffff'}}> <SavingsIcon /> Staking</Link>
                    </div>
                  </div>
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            height: "100%",
          }}
          id="midback"
        >
          <div>
            <div className={classes.flexxx1}>
              <div>
                <h1 className={classes.dashcolor1}>Dashboard</h1>
              </div>
              <div className={classes.btnflex1}>
                <div>
                  <button className={classes.depositbtn1}>Deposit</button>
                </div>
                <div>
                 <Link to='/withdrawc'><button className={classes.depositbtn11}>Withdraw</button></Link> 
                </div>
                <div>
                  <Link to='/transfer'><button className={classes.depositbtn1}>Transfer</button></Link>
                </div>
                <div>
                  <button className={classes.depositbtn21}>
                    Transaction History
                  </button>
                </div>
              </div>
            </div>
            <div>
              <Card
                className={classes.caaaard1}
                style={{ backgroundColor: "#111010" }}
              >
                <CardContent>
                  <div className={classes.maaaian1}>
                    <div className={classes.wiflex}>
                      <div>
                        <h1 className={classes.internaal1}>WithDraw</h1>
                      </div>
                      <div className={classes.flex87}>
                        <div>
                          <h1 className={classes.internaal10}>Crypto</h1>
                        </div>
                        <div>
                          <h1
                            style={{ color: "#EAB73B" }}
                            className={classes.internaal100}
                          >
                            Flat
                          </h1>
                        </div>
                      </div>
                    </div>
                    <br/>

                    <div className={classes.allflex1}>
                      <div>
                        <div>
                          <h1 style={{ color: "#EAB73B" }} className={classes.currency}>
                            1-Select Currency
                          </h1>
                        </div>
                        <br/>
                        <div>
                          <p className={classes.uid1}>Currency</p>
                        </div>
                        <div>
                          <input
                            className={classes.iiiinput1}
                            type="text"
                            placeholder="EUR    Euro"
                          />
                        </div>
                        <div>
                          <p className={classes.ccoin1}>Withdraw to</p>
                        </div>
                        <div>
                          <input
                            className={classes.ccoinenter1}
                            type="text"
                            placeholder="Recommended"
                          />
                        </div>
<div className={classes.dialogradio}>
<div className={classes.radio} style={{accentColor:'#EAB73B'}}>
<input 
type="Radio" 
checked="checked"
/>
<p className={classes.biggg}>Bank Transfer (SEPA) 
<br/>
<span style={{color: "#9A9A9A"}}>Channel Suspended</span></p>
</div>
<div className={classes.radio}>
<input 
type="Radio"  
/>
<p className={classes.biggg}>Bank Card (Visa/MC)<br/>
  <span style={{color: "#9A9A9A"}}>1.8% Transaction Fee</span></p>
</div>
</div>
                        <div className={classes.cancelflex1}>
                          <div>
                          <Link to='/transfer'><button className={classes.Withbtn1}>
                              Continue
                            </button></Link>
                          </div>
                          <br/>
                        <div>
                      <p className={classes.depoppp}>The deposit with card service is powered by Bifinity UAB <br/>
                      (Company Registration Number: 305595206, registered office <br/>
                      address: Didžioji g. 18, Vilnius, Lithuania).</p>
                        </div>
                        </div>
                      </div>
                      <div className={classes.toppp1}>
                        <div>
                          <h1 className={classes.innnnternal1}>FAQ</h1>
                        </div>
                        <div>
                          <pre className={classes.ploas1}>
                            How long does the withdrawal take?                     {" "}
                            <ArrowDropDownIcon /> <br />
                            Do card withdrawals work for all cards?                {" "}
                            <ArrowDropDownIcon /> <br />
                            List of Supported Issuing Countries for Fiat
                            Withdrawal <ArrowDropDownIcon /> <br />
                            <br />
                            We do not support withdrawing EUR to Binance Visa      {" "}
                            <br />
                            card. You can transfer EUR from your Spot Wallet to    {" "}
                            <br />
                            Funding Wallet and it will be immediately be <br />
                            available for use. Please follow the steps here.       {" "}
                            <ArrowDropDownIcon /> <br />
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>

                  <br />
                  <br />
                  <br />
                </CardContent>
              </Card>
            </div>
          </div>
        </Box>
      </Grid>
      <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
