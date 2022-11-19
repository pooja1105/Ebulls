import React from "react";
import { makeStyles } from "@mui/styles";
import PersonIcon from "@mui/icons-material/Person";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SavingsIcon from "@mui/icons-material/Savings";
import {
  Box,
  Card,
  CardContent,
  Divider,
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
import DashboardSharpIcon from "@mui/icons-material/DashboardSharp";
import With1 from "./With1";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { border } from "@mui/system";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles({
  flex1: {
    display: "flex",
    paddingLeft: "2vw",
    paddingTop: "7vw",
    gap: "44.323vw",
    "@media (max-width: 1260px)": {
      display: "contents",
    },
  },
  flex2: {
    display: "flex",
    gap: "1vw",
  },
  button1: {
    width: "10.313vw",
    height: "2.604vw",
    fontSize: "0.833vw",
    background: "#202020",
    border: "none",
    color: "#9A9A9A",
    borderRadius: "0.260vw",
  },
  button2: {
    width: "10.313vw",
    height: "2.604vw",
    fontSize: "0.833vw",
    background: "#202020",
    border: "none",
    borderRadius: "0.260vw",
    color: "#9A9A9A",
  },
  Staking: {
    color: "#EAB73B",
    fontSize: "1.354vw",
  },
  main: {
    paddingLeft: "2.708vw",
    color: "#ffff",
  },
  a1: {
    color: "#9A9A9A",
    fontSize: "0.729vw",
  },
  a2: {
    color: "#FFFFFF",
    fontSize: "0.573vw",
  },
  a3: {
    color: "#4ED46C",
  },
  a4: {
    color: "#EAB73B",
  },
  stakingdetails: {
    fontSize: "1.042vw",
    color: "#EAB73B",
  },
  p1: {
    fontSize: "0.729vw",
    color: "#9A9A9A",
  },
  p2: {
    fontSize: "0.625vw",
    color: "#FFFF",
  },
  mainsidebar: {
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontSize: "0.833vw",
    lineHeight: "1.042vw",
    color: "#ffff",
    paddingTop: "2.604vw",
  },
  sidebaritems: {
    margin: "1.875vw",
  },
  dashcolor1: {
    color: "#EAB73B",
  },

  box: {
    width: "19.063vw",
    height: "2.396vw",
    display: "flex",
    background: "#1E1E1E",
    gap: "12.417vw",
    // paddingTop:'1.354vw',
    "@media (max-width: 1350px)": {
      gap: "6.417vw",
    },
  },
  padding: {
    paddingTop: "1vw",
  },
  textcolor: {
    color: "#9A9A9A",
    fontSize: "0.729vw",
  },
  textcolor2: {
    color: "#4ED46C",
    fontSize: "0.729vw",
  },
  btnlast: {
    width: "9.583vw",
    height: "2.500vw",
    background: "#EAB73B",
    fontSize: "0.729vw",
    border: "none",
    color: "#FFFFFF",
    borderRadius: "5.208vw",
    
  },

  days: {
    display: "flex",
    gap: "1.042vw",
  },
  day1: {
    color: "#9A9A9A",
    background: "#9A9A9A",
    width: "3.425vw",
    fontSize: "0.521vw",
    height: "1.250vw",
    backgroundColor:'transparent',
    border:'1px solid #9A9A9A'
  },
  duratiiion: {
    color: "#FFFFFF",
    width: "3.125vw",
    height: "1.094vw",
    fontSize: "0.729vw",
  },
  locck: {
    color: "#FFFFFF",
    width: "5.729vw",
    height: "1.094vw",
    fontSize: "0.729vw",
  },
  divv1: {
    width: "20.833vw",
    height: "3.125vw",
    color: "#9A9A9A",
    background: "#1E1E1E",
    display: "flex",
    
  },
  teexxxt: {
    fontSize: "0.729vw",
  },
  percent: {
    display: "flex",
    gap: "1.042vw",
  },
  percent1: {
    fontSize: "0.521vw",
    background: "#9A9A9A",
    color: "#9A9A9A",
    width: "3.125vw",
    height: "1.250vw",
    backgroundColor:'transparent',
    border:'1px solid #9A9A9A'
  },
  bttc: {
    display: "flex",
    paddingTop: "3vw ",
    gap: "0.625vw",
  },
  aa: {
    color: "#9A9A9A",
    width: "3.542vw",
    fontSize: "0.729vw",
    height: "1.094vw",
  },
  aaa: {
    fontSize: "0.729vw",
    width: "0.521vw",
    height: "1.094vw",
    color: "#FFFFFF",
  },
  btcc1: {
    color: "#EAB73B",
    fontSize: "0.729vw",
    width: "1.458vw",
    height: "1.094vw",
  },
  flleex: {
    display: "flex",
    gap: "0.677vw", 
  },
  readd: {
    fontSize: "0.729vw",
    width: "22.865vw",
    height: "1.094vw",
    color: "#8E8E8E",
  },
  
  agree: {
    paddingLeft: "26.250vw",
    "@media (max-width: 850px)": {
        paddingLeft: "6.250vw",
        paddingTop:'1vw'
      },
      "@media (max-width: 580px)": {
        paddingLeft: "1.250vw",
        paddingTop:'1vw'
      },
  },
  btnlastdiv:{
    paddingLeft:'5vw',
    paddingTop:'1vw'
  },
  ssss: {
    paddingTop: "3vw",
  },
  transinput:{
    backgroundColor:'transparent',
    border:'1px solid #8E8E8E',
    width:'15px',
    height:'15px',
    background:'#9A9A9A'
  }

});

const drawerWidth = 260;

export default function Stack() {
  const history = useHistory();
  const classes = useStyles();
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
                    <div className={classes.sidebaritems}>
                      <AccountBalanceIcon /> Banking
                    </div>
                    <div className={classes.sidebaritems}
                    style={{ color: "#EAB73B" }}>
                      <SavingsIcon style={{ color: "#EAB73B" }}/> Staking
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
            <div className={classes.flex1}>
              <div>
              <h1 className={classes.Staking}>Staking</h1>
              </div>
              <div className={classes.flex2}>
                <div>
                <Link to="/staking"><button className={classes.button2}>Staking</button></Link>
                </div>
                <div>
                  <button className={classes.button1}>Staking History</button>
                </div>
              </div>
            </div>
            <div className={classes.main}>
              <Card style={{ background: "black" }}>
                <CardContent>
                  <div>
                    <div className={classes.ssss}>
                      <h1 className={classes.stakingdetails}>
                        Staking Details
                      </h1>
                    </div>
                    <div>
                      <Divider />
                    </div>
                    <div>
                      <h1 className={classes.duratiiion}>Duration</h1>
                    </div>
                    <div className={classes.days}>
                      <div>
                        <button className={classes.day1}>15 Days</button>
                      </div>
                      <div>
                        <button className={classes.day1}>30 Days</button>
                      </div>
                      <div>
                        <button className={classes.day1}>60 Days</button>
                      </div>
                      <div>
                        <button className={classes.day1}>90 Days</button>
                      </div>
                    </div>
                    <br /> <br />
                    <div>
                      <h1 className={classes.locck}>Locked Amount</h1>
                    </div>
                    <div className={classes.divv1}>
                      <div className={classes.teexxxt}>Enter Amount</div>
                      <div>     </div>
                    </div>
                    <br />
                    <div className={classes.percent}>
                      <div>
                        <button className={classes.percent1}>25%</button>
                      </div>
                      <div>
                        <button className={classes.percent1}>50%</button>
                      </div>
                      <div>
                        <button className={classes.percent1}>75%</button>
                      </div>
                      <div>
                        <button className={classes.percent1}>100%</button>
                      </div>
                    </div>
                    <div className={classes.bttc}>
                      <div className={classes.aa}>Available:</div>
                      <div className={classes.aaa}>0</div>
                      <div className={classes.btcc1}>BTC</div>
                    </div>

                    <div className={classes.agree}>
                    <div className={classes.flleex}>
                    <div style={{color: "FFFFF"}}>
                     <input type='checkbox' className={classes.transinput}/>
                    </div>
                    <div>
                        <p className={classes.readd}>I have read and agree to the <span style={{color: '#EAB73B'}}>EBull Staking Service Agreement.</span></p>
                    </div>
                    </div>

                      <div className={classes.btnlastdiv}>
                        <button className={classes.btnlast}>Confirm</button>
                      </div>
                    </div>

                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Box>
      </Grid>
      <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <br />          <br />
      <br />
      <br />
      <br />  <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
