import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
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
import Button from '@mui/material/Button';
import logo from '../img/logo.png';
import "../style/NavBar.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import man from "../img/man.png";
import FAQ from "../img/faqs.png";
import Footer from './Footer';


const drawerWidth = 240;
const navItems = ['ABOUT US', 'OUR PROJECTS', 'CONTACT US', 'LOGIN'];



const useStyles = makeStyles({
    backgroundFaq: {
        background: "#0000",
       height:'1600px'

    },
    imgF: {
        height: "15.417vw",
        width: "23.125vw",

    },
    imgdiv:{
        paddingTop: "19.188vw",
        paddingLeft: "10.417vw",
    },
    grid1:{
        paddingLeft:"12.854vw",
        paddingTop:"15vw",
    }

  });

export default function FAQs(props) {
    const classes = useStyles();

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
   

  return (
    <div className={classes.backgroundFaq}>
       <div className='navbarbackground11aa'>
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
                        <img className='navlogo11aa' src={logo} alt="" />
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <button type='button' className='navbarButton11aa'><span style={{color: "#EAB73B"}}>HOME</span></button>
                    <button type='button' className='navbarButton11aa'>MARKET</button>
                    <button type='button' className='navbarButton11aa'>EXCHANGE</button>
                    <button type='button' className='navbarButton11aa'>STAKING</button>
                    <button type='button' className='navbarButton11aa'>WALLET</button>
                    <button type='button' className='navbarButton11aa'>ECOMMERCE</button>
                    <button type='button' className='navbarButton11aa'>TRADING BOT</button>
                    <button type='button' className='navbarButton11aa'>LAUNCHPAD</button>

                    <button type='button' className='navbarButton11aa'>NET MARKETPLACE</button>
                        <NotificationsIcon style={{color:'white', width:'40px', height:'40px' }} />
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
        
        <Grid container > 
        <Grid xs={6} className={classes.grid1} >
            <h1 style={{color:"#EAB73B",fontSize: "35px"}}>FAQs</h1>
        <Accordion style={{background:'#AAAAAA', color:"white"}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        style={{background:'#202020',}}
      >
        <Typography>1- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eget tortor tincidunt</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eget tortor tincidunt varius amet urna, faucibus dolor libero. Convallis lectus dui augue in mi vel lacus. Amet enim tincidunt ultricies magna amet volutpat, nec imperdiet. Iaculis odio tincidunt in quam.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion style={{background:'#AAAAAA', color:"white"}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        style={{background:'#202020',}}
      >
        <Typography>2- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eget tortor tincidunt</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eget tortor tincidunt varius amet urna, faucibus dolor libero. Convallis lectus dui augue in mi vel lacus. Amet enim tincidunt ultricies magna amet volutpat, nec imperdiet. Iaculis odio tincidunt in quam.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion  style={{background:'#AAAAAA', color:"white"}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        style={{background:'#202020',}}
      >
        <Typography>3- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eget tortor tincidunt</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eget tortor tincidunt varius amet urna, faucibus dolor libero. Convallis lectus dui augue in mi vel lacus. Amet enim tincidunt ultricies magna amet volutpat, nec imperdiet. Iaculis odio tincidunt in quam.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion style={{background:'#AAAAAA', color:"white"}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        style={{background:'#202020',}}
      >
        <Typography>4- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eget tortor tincidunt</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eget tortor tincidunt varius amet urna, faucibus dolor libero. Convallis lectus dui augue in mi vel lacus. Amet enim tincidunt ultricies magna amet volutpat, nec imperdiet. Iaculis odio tincidunt in quam.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion style={{background:'#AAAAAA', color:"white"}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        style={{background:'#202020',}}
      >
        <Typography>5- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eget tortor tincidunt</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eget tortor tincidunt varius amet urna, faucibus dolor libero. Convallis lectus dui augue in mi vel lacus. Amet enim tincidunt ultricies magna amet volutpat, nec imperdiet. Iaculis odio tincidunt in quam.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion style={{background:'#AAAAAA', color:"white"}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        style={{background:'#202020',}}
      >
        <Typography>6- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eget tortor tincidunt</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare eget tortor tincidunt varius amet urna, faucibus dolor libero. Convallis lectus dui augue in mi vel lacus. Amet enim tincidunt ultricies magna amet volutpat, nec imperdiet. Iaculis odio tincidunt in quam.
        </Typography>
      </AccordionDetails>
    </Accordion>
    
    </Grid>
    <Grid xs={6} >
        <div className={classes.imgdiv}>
 <img  className={classes.imgF} src={FAQ} />
 </div>

    </Grid>
    </Grid>
    </div>
    <div>
        <Footer />
    </div>
    
  </div>
  
  );
}
