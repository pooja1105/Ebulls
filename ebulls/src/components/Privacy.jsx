
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../style/AcNn.css';
import { makeStyles } from '@mui/styles';
import logo from '../img/logo.png';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import man from "../img/man.png";
import Footer from './Footer';


const useStyles = makeStyles({
    privacyfull: {
        paddingTop: "129px",
        paddingLeft: "10.313vw",

    },
    ptag: {
        fontSize: "16px",
        color: "#AAAAAA"

    },
    color: {
        color: "#EAB73B",
        fontSize: "35px"

    },
    intro1: {
        fontSize: "20px",
        color: "#FFFFFF"

    },
    color1: {
        color: "#EAB73B",
        fontSize: "18px"

    },
    back:{
        background: 'black',
    height: '1600px'
    }
});


const drawerWidth = 240;
const navItems = ['ABOUT US', 'OUR PROJECTS', 'CONTACT US', 'LOGIN'];


export default function Privacy(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>

            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <a href="">START NOW</a>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    const classes = useStyles();
  return (
<div>
            <div className={classes.back}>
                <Box sx={{ display: 'flex' }}>

                    <AppBar component="nav" color="transparent" elevation={0}>
                        <Toolbar>
                            <IconButton

                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { sm: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                            >
                                <img className='navlogo' src={logo} alt="" />
                            </Typography>
                            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                <button type='button' className='navbarButton'><span style={{color: "#EAB73B"}}>HOME</span></button>
                                <button type='button' className='navbarButton'>MARKET</button>
                                <button type='button' className='navbarButton'>EXCHANGE</button>
                                <button type='button' className='navbarButton'>STAKING</button>
                                <button type='button' className='navbarButton'>WALLET</button>
                                <button type='button' className='navbarButton'>ECOMMERCE</button>
                                <button type='button' className='navbarButton'>TRADING BOT</button>
                                <button type='button' className='navbarButton'>LAUNCHPAD</button>

                                <button type='button' className='navbarButton'>NET MARKETPLACE</button>
                                <NotificationsIcon style={{ color: 'white', width: '40px', height: '40px' }} />
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
                                display: { xs: 'block', sm: 'none' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                        >
                            {drawer}
                        </Drawer>

                    </Box>

                </Box>

                <div className={classes.privacyfull}>

                    <div>
                        <h1 className={classes.color}>Privacy Policy</h1>
                    </div>
                    <div>
                        <div>
                            <h2 className={classes.intro1}>1.INTRODUCTION</h2>
                        </div>
                        <div>
                            <p className={classes.ptag}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eget tortor tincidunt varius amet urna, faucibus dolor libero. Convallis lectus dui augue in mi <br />
                                vel lacus. Amet enim tincidunt ultricies magna amet volutpat, nec imperdiet. Iaculis odio tincidunt in quam.Lorem ipsum dolor sit amet, consectetur <br />
                                adipiscing elit. Ornare eget tortor tincidunt varius amet urna, faucibus dolor libero. Convallis lectus dui augue in mi vel lacus. Amet enim tincidunt ultricies <br />
                                magna amet volutpat, nec imperdiet. Iaculis odio tincidunt in quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eget tortor tincidunt <br />
                                varius amet urna, faucibus dolor libero. Convallis lectus dui augue in mi vel lacus. Amet enim tincidunt ultricies magna amet volutpat, nec imperdiet. Iaculis <br />
                                odio tincidunt in quam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eget tortor tincidunt varius amet urna, faucibus dolor libero. Convallis <br />
                                lectus dui augue in mi vel lacus. Amet enim tincidunt ultricies magna amet volutpat, nec imperdiet. Iaculis odio tincidunt in quam.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 className={classes.intro1}>2. DEFINITIONS</h2>
                    </div>
                    <div>
                        <div>
                            <h2 className={classes.color1}>Digital Asset</h2>
                        </div>
                        <div>
                            <p className={classes.ptag}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eget tortor tincidunt varius amet urna, faucibus dolor libero. Convallis lectus dui augue in mi vel <br />
                                lacus. Amet enim tincidunt ultricies magna amet volutpat, nec imperdiet. Iaculis odio tincidunt in quam.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2 className={classes.color1}>Personal Data</h2>
                        </div>
                        <div>
                            <p className={classes.ptag}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eget tortor tincidunt varius amet urna, faucibus dolor libero. Convallis lectus dui augue in mi vel <br />
                                lacus. Amet enim tincidunt ultricies magna amet volutpat, nec imperdiet. Iaculis odio tincidunt in quam.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2 className={classes.intro1}>3. WHAT PERSONAL DATA WE COLLECT</h2>
                        </div>
                        <div>
                            <p className={classes.ptag}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eget tortor tincidunt varius amet urna, faucibus dolor libero. Convallis lectus dui augue in mi vel <br />
                                lacus. Amet enim tincidunt ultricies magna amet volutpat, nec imperdiet. Iaculis odio tincidunt in quam. <br /> <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eget tortor tincidunt varius amet urna, faucibus dolor libero. Convallis lectus dui augue in mi <br />
                                vel lacus. Amet enim tincidunt ultricies magna amet volutpat, nec imperdiet. Iaculis odio tincidunt in quam.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2 className={classes.color1}>Individual customers:</h2>
                        </div>
                        <div>
                            <p className={classes.ptag}>
                                Email address <br />
                                Mobile phone number<br />
                                Full legal name (including former name, and names in local language)<br />
                                Nationality<br />
                                Passport number, or any government issued ID number<br />
                                Date of birth (“DOB”)<br />
                                Proof of identity (e.g. passport, driver’s license, or government-issued ID)<br />
                                Residential address<br />
                                Proof of residency<br />
                                Additional Personal Data or documentation at the discretion of our Compliance Team<br />

                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2 className={classes.color1}>Corporate customers:</h2>
                        </div>
                        <div>
                            <p className={classes.ptag}>
                                Corporate legal name (including the legal name in local language)<br />
                                Incorporation/registration Information<br />
                                Full legal name of all beneficial owners, directors, and legal representatives<br />
                                Address (principal place of business and/or other physical locations)<br />
                                Proof of legal existence
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>

  
  )
}
