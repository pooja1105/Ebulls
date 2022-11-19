import * as React from "react";
import "../style/notifi.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import logo from "../img/logo.png";
import man from "../img/man.png";
import Footer from "./Footer";
import { Avatar } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const useStyles = makeStyles({
  notiifull: {
    paddingTop: "129px",
    paddingLeft: "10.313vw",
  },
  noticolor: {
    color: "#EAB73B",
    fontSize: "35px",
  },
  boxxxing: {
    width: "66.771vw",
    height: "6.927vw",
    color: "white",
    background: "#202020",
  },
  biggbox: {
    paddingLeft: "10.260vw",
  },

  h3deposit: {
    fontSize: "0.938vw",
  },
  plorem: {
    fontSize: "0.729vw",
    color: "#AAAAAA",
  },
  paddingdiv: {
    paddingLeft: "2.865vw",
    paddingTop: "0.833vw",
  },
  biggbox1: {
    paddingTop: "1vw",
  },
});

const drawerWidth = 240;
const navItems = ["ABOUT US", "OUR PROJECTS", "CONTACT US", "LOGIN"];

export default function Notification(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}></Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <a href="">START NOW</a>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const classes = useStyles();

  return (
    <div>
      <div className="navbarbackground111">
        <Box sx={{ display: "flex" }}>
          <AppBar component="nav" color="transparent" elevation={0}>
            <Toolbar>
              <IconButton
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                <img className="navlogo111" src={logo} alt="" />
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <button type="button" className="navbarButton111">
                <span style={{color: "#EAB73B"}}>HOME</span>
                </button>
                <button type="button" className="navbarButton111">
                  MARKET
                </button>
                <button type="button" className="navbarButton111">
                  EXCHANGE
                </button>
                <button type="button" className="navbarButton111">
                  STAKING
                </button>
                <button type="button" className="navbarButton111">
                  WALLET
                </button>
                <button type="button" className="navbarButton111">
                  ECOMMERCE
                </button>
                <button type="button" className="navbarButton111">
                  TRADING BOT
                </button>
                <button type="button" className="navbarButton111">
                  LAUNCHPAD
                </button>

                <button type="button" className="navbarButton111">
                  NET MARKETPLACE
                </button>
                <NotificationsIcon
                  style={{ color: "white", width: "40px", height: "40px" }}
                />
                <img src={man} />
              </Box>
            </Toolbar>
          </AppBar>

          <Box component="nav">
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
        </Box>
        <div className={classes.notiifull}>
          <div>
            <h1 className={classes.noticolor}>Notifications</h1>
          </div>
        </div>

        <div className={classes.biggbox}>
          <div className={classes.boxxxing}>
            <div className={classes.paddingdiv}>
              <h3 className={classes.h3deposit}>
                Deposit/Buy crypto and get $10 cashback!
              </h3>
              <p className={classes.plorem}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                eget tortor tincidunt varius amet urna, faucibus dolor libero.
                Convallis lectus dui augue in mi vel <br />
                lacus. Amet enim tincidunt ultricies magna amet volutpat, nec
                imperdiet. Iaculis odio tincidunt in quam.
              </p>
            </div>
          </div>

          <div className={classes.biggbox1}>
            <div className={classes.boxxxing}>
              <div className={classes.paddingdiv}>
                <h3 className={classes.h3deposit}>
                  Deposit/Buy crypto and get $10 cashback!
                </h3>
                <p className={classes.plorem}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare eget tortor tincidunt varius amet urna, faucibus dolor
                  libero. Convallis lectus dui augue in mi vel <br />
                  lacus. Amet enim tincidunt ultricies magna amet volutpat, nec
                  imperdiet. Iaculis odio tincidunt in quam.
                </p>
              </div>
            </div>
          </div>

          <div className={classes.biggbox1}>
            <div className={classes.boxxxing}>
              <div className={classes.paddingdiv}>
                <h3 className={classes.h3deposit}>
                  Deposit/Buy crypto and get $10 cashback!
                </h3>
                <p className={classes.plorem}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare eget tortor tincidunt varius amet urna, faucibus dolor
                  libero. Convallis lectus dui augue in mi vel <br />
                  lacus. Amet enim tincidunt ultricies magna amet volutpat, nec
                  imperdiet. Iaculis odio tincidunt in quam.
                </p>
              </div>
            </div>
          </div>

          <div className={classes.biggbox1}>
            <div className={classes.boxxxing}>
              <div className={classes.paddingdiv}>
                <h3 className={classes.h3deposit}>
                  Deposit/Buy crypto and get $10 cashback!
                </h3>
                <p className={classes.plorem}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare eget tortor tincidunt varius amet urna, faucibus dolor
                  libero. Convallis lectus dui augue in mi vel <br />
                  lacus. Amet enim tincidunt ultricies magna amet volutpat, nec
                  imperdiet. Iaculis odio tincidunt in quam.
                </p>
              </div>
            </div>
          </div>
          
          <div className={classes.biggbox1}>
            <div className={classes.boxxxing}>
              <div className={classes.paddingdiv}>
                <h3 className={classes.h3deposit}>
                  Deposit/Buy crypto and get $10 cashback!
                </h3>
                <p className={classes.plorem}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare eget tortor tincidunt varius amet urna, faucibus dolor
                  libero. Convallis lectus dui augue in mi vel <br />
                  lacus. Amet enim tincidunt ultricies magna amet volutpat, nec
                  imperdiet. Iaculis odio tincidunt in quam.
                </p>
              </div>
            </div>
          </div>

          <div className={classes.biggbox1}>
            <div className={classes.boxxxing}>
              <div className={classes.paddingdiv}>
                <h3 className={classes.h3deposit}>
                  Deposit/Buy crypto and get $10 cashback!
                </h3>
                <p className={classes.plorem}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare eget tortor tincidunt varius amet urna, faucibus dolor
                  libero. Convallis lectus dui augue in mi vel <br />
                  lacus. Amet enim tincidunt ultricies magna amet volutpat, nec
                  imperdiet. Iaculis odio tincidunt in quam.
                </p>
              </div>
            </div>
          </div>

          <div className={classes.biggbox1}>
            <div className={classes.boxxxing}>
              <div className={classes.paddingdiv}>
                <h3 className={classes.h3deposit}>
                  Deposit/Buy crypto and get $10 cashback!
                </h3>
                <p className={classes.plorem}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare eget tortor tincidunt varius amet urna, faucibus dolor
                  libero. Convallis lectus dui augue in mi vel <br />
                  lacus. Amet enim tincidunt ultricies magna amet volutpat, nec
                  imperdiet. Iaculis odio tincidunt in quam.
                </p>
              </div>
            </div>
          </div>
          <div className={classes.biggbox1}>
            <div className={classes.boxxxing}>
              <div className={classes.paddingdiv}>
                <h3 className={classes.h3deposit}>
                  Deposit/Buy crypto and get $10 cashback!
                </h3>
                <p className={classes.plorem}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare eget tortor tincidunt varius amet urna, faucibus dolor
                  libero. Convallis lectus dui augue in mi vel <br />
                  lacus. Amet enim tincidunt ultricies magna amet volutpat, nec
                  imperdiet. Iaculis odio tincidunt in quam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
