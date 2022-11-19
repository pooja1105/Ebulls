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
    dashcolor: {
color: "#EAB73B"
    },
    flexxx: {
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
    btnflex: {
    display: "flex",
    gap:"1vw"
    },
    depositbtn: {
        width: "6.198vw",
        height: "2.604vw",
        fontSize: "0.833vw",
        border: "none",
        background: "#1C1C1C",
        color: "#9A9A9A"
    },
    depositbtn1: {
        width: "6.198vw",
        height: "2.604vw",
        fontSize: "0.833vw",
        border: "none",
        background: "#EAB73B",
        color: "#000000"
    },
    depositbtn2: {
        width: "10.313vw",
        height: "2.604vw",
        fontSize: "0.833vw",
        border: "none",
        background: "#1C1C1C",
        color: "#9A9A9A"
    },
    caaaard: {
        width:"68.771vw",   
        '@media (max-width:1250px)':{
        width: "50vw"
        },
    },
    maaaian: {
paddingLeft: "2.760vw",
    },
    internaal: {
        color: "#EAB73B",
        fontSize: "1.042vw",
    },
    uid:{
        color: "#FFFFFF",
        fontSize: "0.833vw",

    },
    iiiinput: {
        color: "#FFFFFF",
        fontSize: "0.625vw",
        height: "2.604vw",
        width: "24.308vw",
        background: "#1E1E1E",
        border: "none",
    },
    ccoin: {
        color: "#FFFFFF",
        fontSize: "0.833vw",

    },
    ccoinenter: {
        color: "#FFFFFF",
        fontSize: "0.625vw",
        height: "2.604vw",
        width: "24.308vw",
        background: "#1E1E1E",
        border: "none",
    },
    amouunt: {
        color: "#FFFFFF",
        fontSize: "0.833vw",

    },
    amounttype: {
        color: "#FFFFFF",
        fontSize: "0.833vw",
        height: "2.604vw",
        width: "24.308vw",
        background: "#1E1E1E",
        border: "none",
        fontSize: "0.625vw", 
    },
    cancelflex: {
        paddingTop:"2vw",
        display: "flex",
        gap: "1vw",
    },
    btncancel: {
        height: "3.125vw",
        width: "11.042vw",
        fontSize: "1.042vw",
        borderRadius: "5.208vw",
        background: "#202020",
        color: "#9A9A9A",
        border: "none",

    },
    transferbtn: {
        height: "3.125vw",
        width: "11.042vw",
        background: "#EAB73B",
        color: "#000000",
        fontSize: "1.042vw",
        borderRadius: "5.208vw",
        border: "none",
    },
    innnnternal: {
        color: "#EAB73B",
        fontSize: "0.938vw",
    },
    ploas: {
        fontSize: "0.729vw",
        color: "#939393",
    },
    allflex: {
    display: "flex",
    gap: "11vw",
    },

    toppp: {
        paddingTop: "7vw"
    },

})

const drawerWidth = 260;



export default function Transfer() {


const [phoneErr, setPhoneErr] = useState(false);
const [phone, setphone] = useState(false);
const [UIDErr, setUIDErr] = useState(false);
const [UID, setUID] = useState(false);

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
      function phonenumber() {
        let phone = document.getElementById("phone").value;
        let regex = /^[6-9]{1}[0-9]{9}$/;
        if (regex.test(phone)) {
            setUIDErr(false);
            setUID(true);
        } else {
            setUIDErr(true);
        }
      }


    const classes = useStyles();
  return (

    <div style= {{background: "black"}}>
    <Grid container>
    
    <Grid item  xs={12}>
    <With1 />
    </Grid>
    <Drawer className={classes.sidebar}
    sx={{
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    background: `linear-gradient(152.97deg, #3d3c38 0%, #000000 100%)`,
    position: 'absolute',
    top: '200px',
    },
    }}
    variant="permanent"
    anchor="left"
    >
   
    <List style={{ color: '#DDE2FF' }}>
   
    <ListItem disablePadding >
    <ListItemButton>
    <ListItemIcon style={{ color: '#9FA2B4' }}>
    <div className={classes.mainsidebar}>
   <div className={classes.sidebaritems} style={{ color: '#EAB73B' }} >
    <DashboardSharpIcon style={{ color: '#EAB73B' }} /> Dashboard
    </div>
   <div className={classes.sidebaritems}>
    <PersonIcon /> Profile
    </div>
    <div className={classes.sidebaritems}>
    <PrivacyTipIcon />Security
    </div>
    <div className={classes.sidebaritems}>
    <ContactMailIcon /> KYC Idendification
    </div>
    <div className={classes.sidebaritems}>
    <AccountBalanceIcon /> Banking
    </div>
    <div className={classes.sidebaritems}>
    <Link to="/staking" style={{color:'#ffff'}}><SavingsIcon /> Staking</Link>
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
    flexGrow: 1, p: 3,
    height: '100%'
    }} id='midback'>

<div>
<div className={classes.flexxx}>

    <div>
<h1 className={classes.dashcolor}>Dashboard</h1>
    </div>
    <div className={classes.btnflex}>
        <div><button className={classes.depositbtn}>Deposit</button></div>
       <div> <Link to='/withdrawc'><button className={classes.depositbtn}>Withdraw</button></Link></div>
        <div><Link to='/transfer'><button className={classes.depositbtn1}>Transfer</button></Link></div>
        <div><button className={classes.depositbtn2}>Transaction History</button></div>
    </div>

</div>
<div>
    <Card className={classes.caaaard} style= {{   backgroundColor: "#111010",}}>
        <CardContent>
            <div className={classes.maaaian}>  
               
                <div>
                    <h1 className={classes.internaal}>Internal Transfer</h1>
                </div>
                {/* divider */}
                <div className={classes.allflex}>

                    <div>
                        
                        <div>
                            <p className={classes.uid}>UID</p>
                        </div>
                        <div>
                           <input 
                            id="phone"
                           className={classes.iiiinput} type="text" 
                           placeholder='Enter Your UID' 
                           onChange={phonenumber}
                           />{" "}
                        {UIDErr ? (
                          <span style={{ color: "red" }}>
                          Please enter valid UID
                          </span>
                        ) : (
                          ""
                        )}
                        </div>
                        <div>
                            <p className={classes.ccoin}>Coin Name</p>
                        </div>
                        <div>
                          <select name="" id="" className={classes.ccoinenter}>
                            <option value="">Enter Your Coin Name</option>
                          </select>
                        </div>
                        <div>
                            <p className={classes.amouunt}>Amount</p>
                        </div>
                        <div>
                           <input 
                           id="phone1"
                           className={classes.amounttype} type="text"
                            placeholder='Enter Your Amount' 
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
                        <div className={classes.cancelflex}>
                           
                            <div>
                                <button className={classes.btncancel}>Cancel</button>
                            </div>
                            <div>
                            <Link to='/staking'><button className={classes.transferbtn}>Transfer Now</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className={classes.toppp}>
                        <div>
                            <h1 className={classes.innnnternal}>Internal Transfer</h1>
                        </div>
                        <div>
                            <p className={classes.ploas}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                                Pharetra consectetur lacus odio sed condimentum <br />
                                pretium. Nunc, proin nibh egestas nunc. Egestas <br />
                                sodales elementum proin rutrum vestibulum convallis <br />
                                 sollicitudin suspendisse. Urna, auctor a tincidunt <br />
                                  scelerisque risus urna, ut.</p>
                        </div>
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>
</div>
</div>
    
    </Box>
    </Grid>
    <br/> <br/> <br/> <br/> <br/> <br/> <br/><br/> <br/> <br/> <br/> <br/> <br/> <br/><br/><br/><br/><br/><br/><br/><br/>
    </div >
 
  )
}
