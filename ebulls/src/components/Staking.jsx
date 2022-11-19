
import React from 'react'
import { makeStyles,  } from '@mui/styles';
import PersonIcon from '@mui/icons-material/Person';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SavingsIcon from '@mui/icons-material/Savings';
import { Box, Card, CardContent, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, Toolbar, Typography } from '@mui/material';
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import With1 from './With1';
import { Link, useHistory } from "react-router-dom";




const useStyles = makeStyles({
    flex1:{
        display:'flex',
        paddingLeft: "3vw",
        paddingTop: "7vw",
        gap:'44.323vw',
        '@media (max-width: 1260px)' : {
            display:'contents'
          }
    },
    flex2:{
        display:'flex',
        gap:'1vw'
    },
    button1:{
        width:'10.313vw',
        height:'2.604vw',
        fontSize:'0.833vw',
        background:'#EAB73B',
        border:'none',
        borderRadius:'0.260vw'
    },
    button2:{
        width:'10.313vw',
        height:'2.604vw',
        fontSize:'0.833vw',
        background:'#202020',
        border:'none',
        borderRadius:'0.260vw',
        color:'#ffff'
    },
    Staking:{
        color:'#EAB73B',
        fontSize:'1.354vw'
    },
    main:{
        paddingLeft:'2.708vw',
        color:'#ffff'
    },
    a1:{
color:'#9A9A9A',
fontSize:'0.729vw'
    },
    a2:{
color:'#FFFFFF',
fontSize:'0.573vw'
    },
    a3:{
        color:'#4ED46C'
    },
a4:{
color:'#EAB73B'
},
stakingdetails:{
    fontSize:'1.042vw',
    color:'#EAB73B'
},
p1:{
fontSize:'0.729vw',
color:'#9A9A9A'
},
p2:{
    fontSize:'0.625vw',
color:'#FFFF'
},
mainsidebar: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontSize: '0.833vw',
    lineHeight: '1.042vw',
    color: '#ffff',
    paddingTop: '2.604vw'
},
sidebaritems: {
    margin: '1.875vw',
    
},
dashcolor1: {
color: "#EAB73B"
},

box:{
    width:'19.063vw',
    height:'2.396vw',
    display:'flex',
    background:'#1E1E1E',
    gap:'12.417vw',
    // paddingTop:'1.354vw',
    '@media (max-width: 1350px)' : {
        gap:'6.417vw',
      }
},
padding:{
    paddingTop:'1vw',
},
textcolor:{
color:'#9A9A9A',
fontSize:"0.729vw"
},
textcolor2:{
color:'#4ED46C',
fontSize:'0.729vw'
},
btnlast:{
width:"9.583vw",
height:'2.500vw',
background:'#EAB73B',
border:'none',
borderRadius:'5.208vw'
},
btnlastdiv:{
    paddingTop:'1.354vw',
    paddingLeft:'6.292vw'
},
hajsap: {
paddingTop: "1vw",
},

})


const drawerWidth = 260;


export default function Staking() {
    const history = useHistory();
    const classes = useStyles();
  return (
    <div style= {{background: "black"}}>
    <Grid container>
    
    <Grid item  xs={12}>
  <With1/>
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
                     
                    >
                       <Link to="/withdrawc" style={{color:'#ffff'}}><DashboardSharpIcon />{" "}
                      Dashboard </Link> 
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
                    <div className={classes.sidebaritems} >
                      <AccountBalanceIcon /> Banking
                    </div>
                    <div className={classes.sidebaritems} style={{ color: "#EAB73B" }}>
                      <SavingsIcon style={{ color: "#EAB73B" }} /> Staking
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

<div >
<div className={classes.flex1}>
    <div>
        <h1 className={classes.Staking}>Staking</h1>
    </div>
    <div className={classes.flex2}>
        <div>
            <button className={classes.button2}>Staking</button>
        </div>
        <div>
            <button className={classes.button1}>Staking History</button>
        </div>
    </div>
</div>
<div className={classes.main}>
    <Card 
    style={{background:"black"}}
    >
        <CardContent>
            <div className={classes.hajsap}>
                <div>
                    <h1 className={classes.stakingdetails}>Staking Details</h1>
                </div>
                <div>
                    <Divider />
                </div>
                <div>
                    <pre className={classes.a1}>Duration :    <span className={classes.a2}> 30 Days</span></pre>
                    <pre className={classes.a1}>Amount :    <span className={classes.a2}> 10.5526 <span className={classes.a4}> BNB</span></span></pre>
                    <pre className={classes.a1}>Est.APY :     <span className={classes.a3}> 23.47%</span></pre>
                    <pre className={classes.a1}>Est.Interest :   <span className={classes.a2}> 150 <span className={classes.a4}> BNB</span></span></pre>

                </div>
                <br /> <br />
                <div>
                    <h1 className={classes.a1}>Summary</h1>
                </div>
                <div>
                    <pre className={classes.p1}>Stake Date                   <span className={classes.p2}> 2022-06-21 16:30</span></pre>
                    <pre className={classes.p1}>Value Date                   <span className={classes.p2}> 2022-06-21 06:30</span></pre>
                    <pre className={classes.p1}>Interested Period                      <span className={classes.p2}> 1 Day</span></pre>
                    <pre className={classes.p1}>Interested End Date         <span className={classes.p2}> 2022-07-21 06:30</span> </pre>
                    <pre className={classes.p1}>Redemption Period                     <span className={classes.p2}>  1 Day</span></pre>
                    <pre className={classes.p1}>Redemption Date              <span className={classes.p2}> 2022-07-21 06:30</span></pre>

                </div>
                <br />
                <div className={classes.padding}>
                <div className={classes.box}>
                    <div>
                        <p className={classes.textcolor}>Est.APY</p>
                    </div>
                    <div>
                        <p className={classes.textcolor2}>23.47%</p>
                    </div>
                </div>
                </div>
                <div className={classes.padding}>
                <div className={classes.box}>
                    <div>
                        <p className={classes.textcolor}>Est.Interest</p>
                    </div>
                    <div>
                        <p className={classes.textcolor2}>0 BNB</p>
                    </div>
                </div>
                </div>
                <div className={classes.btnlastdiv}>
                <Link to="/stack"> <button className={classes.btnlast}>Staking Close</button></Link> 
                </div>

            </div>
        </CardContent>
    </Card>
</div>
        
</div>

    
    </Box>
    </Grid>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> <br/> <br/> <br/> <br/> <br/><br/><br/><br/><br/>
    </div>
    
  )
}
