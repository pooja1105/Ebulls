import { Box, Card, CardContent, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, Toolbar, Typography } from '@mui/material';
import React from 'react';
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import EmojiObjectsSharpIcon from '@mui/icons-material/EmojiObjectsSharp';
import MilitaryTechSharpIcon from '@mui/icons-material/MilitaryTechSharp';
import { makeStyles } from '@mui/styles';
import PersonIcon from '@mui/icons-material/Person';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SavingsIcon from '@mui/icons-material/Savings';
import { useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import bitimg from '../img/bitimg.png';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import close from '../img/close.png';
import bitimg2 from '../img/bitimg2.png';
import bitimg3 from '../img/bitimg3.png';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import With1 from './With1';

const useStyles = makeStyles({
  card1: {
    position: 'relative',
    left: '300px',
    '@media(max-width: 1111px)': {
        position: 'relative',
        left: '250px'
    },
    '@media(max-width: 879px)': {
        position: 'relative',
        left: '230px'
    }
},
mainsidebar: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#ffff',
    paddingTop: '50px'
},
sidebaritems: {
    margin: '36px'
},
dashcolor1: {
color: "#EAB73B"
},
flexxx1: {
    display: "flex",
    gap: "25.333vw",
    paddingTop: "2.865vw",
    
    '@media (max-width:1250px)':{
        gap:"18vw"
                },
    '@media (max-width:990px)':{
    gap:"1vw"
            },'@media (max-width:750px)':{
                display: "contents"        },


},
btnflex1: {
display: "flex",
gap:"1vw"
},
depositbtn1: {
    width: "6.198vw",
    height: "2.604vw",
    fontSize: "0.833vw",
    border: "none",
    background: "#1C1C1C",
    color: "#9A9A9A"
},
depositbtn11: {
    width: "6.198vw",
    height: "2.604vw",
    fontSize: "0.833vw",
    border: "none",
    background: "#EAB73B",
    color: "#000000"
},
depositbtn21: {
    width: "10.313vw",
    height: "2.604vw",
    fontSize: "0.833vw",
    border: "none",
    background: "#1C1C1C",
    color: "#9A9A9A"
},
caaaard1: {
    width:"68.771vw",   
    '@media (max-width:1250px)':{
    width: "60vw"
    },
    '@media (max-width:850px)':{
      width: "55vw"
      },
      '@media (max-width:760px)':{
        width: "45vw"
        },
        '@media (max-width:620px)':{
          width: "35vw"
          },
},
maaaian1: {
paddingLeft: "2.760vw",
},
internaal1: {
    color: "#EAB73B",
    fontSize: "1.042vw",
},
uid1:{
    color: "#FFFFFF",
    fontSize: "0.833vw",

},
iiiinput1: {
    display:'flex',
    gap:'15vw',
    height: "2.604vw",
    width: "24.308vw",
    background: "#1E1E1E",
    border: "none",
    '@media (max-width:850px)':{
      width: "14vw"
      },
      '@media (max-width:760px)':{
        width: "10vw"
        },    
},
ccoin1: {
    color: "#FFFFFF",
    fontSize: "0.833vw",

},
ccoinenter1: {
    color: "#FFFFFF",
    fontSize: "0.625vw",
    height: "2.604vw",
    width: "24.308vw",
    background: "#1E1E1E",
    border: "none",
    '@media (max-width:850px)':{
      width: "14vw"
      },
      '@media (max-width:760px)':{
        width: "10vw"
        },
},
amouunt1: {
    color: "#FFFFFF",
    fontSize: "0.833vw",

},
amounttype1: {
    color: "#FFFFFF",
    fontSize: "0.833vw",
    height: "2.604vw",
    width: "24.308vw",
    background: "#1E1E1E",
    border: "none",
    fontSize: "0.625vw", 
    '@media (max-width:850px)':{
      width: "14vw"
      },
      '@media (max-width:760px)':{
        width: "10vw"
        },
},
cancelflex1: {
    textAlign: 'center',
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
},

toppp1: {
    paddingTop: "7vw"
},
internaal10: {
  color: "#EAB73B",
  fontSize: "0.833vw",
},
flex87: {
  display: "flex",
  gap: "7vw",
},
wiflex: {
  display: "flex",
  gap: "22.031vw",
  '@media (max-width:650px)':{
    display: "contents",
    },
},
internaal100: {
fontSize: "0.833vw",
},
imgimg:{
  paddingTop:'0.5vw',
  paddingLeft:'0.5vw',
  color:'#ffff'
},
dialogcard:{
 
  width:'20.104vw'
},
dialogbtn:{
  border:'none',
  backgroundColor:'transparent',
},
dialogh1:{
fontSize:'1.042vw',
color:'#EAB73B'
},
dialoginput:{
  width:'17.604vw',
  height:'40px',
  backgroundColor:'transparent',
  border:'1px solid #484848'
},
scoint:{
  paddingRight:'3vw'
},
wiijx: {
width: "5.469vw",
height: "1.250vw",
},

});



const drawerWidth = 260;

export default function WithdrawC() {

const [phoneErr, setPhoneErr] = useState(false);
const [phone, setphone] = useState(false);

function phonenumber1() {
  let phone = document.getElementById("phone1").value;
  let regex = /^[0-9]{1,}$/;
  if (regex.test(phone)) {
    setPhoneErr(false);
    setphone(true);
  } else {
    setPhoneErr(true);
  }
}

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    console.log(open)
  };

  const handleClose = () => {
    setOpen(false);
    console.log(open)
  };
  return (
    <div style={{ background: "black" }}>
      <Grid container>
        <Grid item xs={12}>
          <With1 />
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
                    <Link to='/staking' style={{color:'#ffff'}}><SavingsIcon /> Staking</Link>
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
                  <button className={classes.depositbtn11}>Withdraw</button>
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
                            style={{ color: "#9A9A9A" }}
                            className={classes.internaal100}
                          >
                            Flat
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className={classes.allflex1}>
                      <div>
                        <div>
                          <p className={classes.uid1}>Coin</p>
                        </div>
                        <div>
                          <div
                            className={classes.iiiinput1}
                            onClick={handleClickOpen}
                          >
                            <div className={classes.imgimg}>
                              <img className={classes.wiijx} src={bitimg} />
                            </div>
                            <div className={classes.imgimg}>
                              <ArrowDropDownIcon />
                            </div>
                          </div>
                          <Dialog
                              open={open}
                              onClose={handleClose}
                              aria-labelledby="alert-dialog-title"
                              aria-describedby="alert-dialog-description"
                            >
                              <Card
                                className={classes.dialogcard}
                                style={{ backgroundColor: "#202020" }}
                              >
                                <CardContent>
                                  <div>
                                    <div >
                                    <DialogActions>
                                      <div className={classes.scoint}>
                                        <h1 className={classes.dialogh1}>Select coin to deposit</h1>
                                      </div>
                                      
                                        <div>
                                          <button onClick={handleClose} className={classes.dialogbtn}>
                                            <CloseIcon />
                                          </button>
                                        </div>
                                      </DialogActions>
                                    </div>
                                    <div>
                                      <input className={classes.dialoginput} type="text" placeholder="Select coin name" />
                                    </div>
                                    <div className={classes.dialogimgdiv}>
                                    <br/>
                                      <img src={bitimg}/><br/><br/>
                                      <img src={bitimg2}/><br/><br/>
                                      <img src={bitimg3}/><br/><br/>
                                      <img src={bitimg}/><br/><br/>
                                      <img src={bitimg2}/><br/><br/>
                                      <img src={bitimg3}/><br/><br/>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </Dialog>
                        </div>
                        <div>
                          <p className={classes.ccoin1}>Send to</p>
                        </div>
                        <div>
                          <input
                            className={classes.ccoinenter1}
                            type="text"
                            placeholder="Enter Address"
                          />
                        </div>
                        <div>
                          <p className={classes.amouunt1}>Amount</p>
                        </div>
                        <div>
                          <input
                            id="phone1"
                            className={classes.amounttype1}
                            type="text"
                            placeholder="Enter Your Amount"
                            onChange={phonenumber1}
                          />{" "}
                          {phoneErr ? (
                            <span style={{ color: "red" }}>
                              Please enter your amount
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                        <div>
                          <div>
                            <p style={{ color: "#9A9A9A" }}>Your balance</p>
                          </div>
                          <div>
                            <p style={{ color: "#9A9A9A" }}>0</p>
                          </div>
                        </div>
                        <div className={classes.cancelflex1}>
                          <div>
                           <Link to='/withcrypto'> <button className={classes.Withbtn1}>
                              Withdraw
                            </button></Link>
                          </div>
                        </div>
                      </div>
                      <div className={classes.toppp1}>
                        <div>
                          <h1 className={classes.innnnternal1}>FAQ</h1>
                        </div>
                        <div>
                          <pre className={classes.ploas1}>
                            How to Withdraw Crypto Step-by-step Guide{" "}
                            <ArrowDropDownIcon /> <br />
                            Crypto Withdrawal Fees on ebulls{" "}
                            <ArrowDropDownIcon /> <br />
                            Why Has My Withdrawal Not Arrived?{" "}
                            <ArrowDropDownIcon /> <br />
                            How to Find My Transaction ID (TxID)?{" "}
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
      <br /><br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
