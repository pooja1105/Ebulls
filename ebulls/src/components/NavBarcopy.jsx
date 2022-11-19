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
import '../style/NNNNavbarC.css';
import logo from '../img/logo.png';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import man from "../img/man.png";
import { Link } from 'react-router-dom';


const drawerWidth = 240;
const navItems = ['ABOUT US', 'OUR PROJECTS', 'CONTACT US', 'LOGIN'];

export default function NavBarcopy(props) {
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
    <div className='navbarbackground' style={{backgroundImage:'black'}}>
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
                    <Box sx={{ display: { xs: 'none', sm: 'block' }, background:'black' }}>
                    <button type='button' className='navbarButton'><span style={{color: "#EAB73B"}}>HOME</span></button>
                    <Link to='/withdrawc'><button type='button' className='navbarButton'>MARKET</button></Link>
                    <button type='button' className='navbarButton'>EXCHANGE</button>
                    <button type='button' className='navbarButton'>STAKING</button>
                    <button type='button' className='navbarButton'>WALLET</button>
                    <button type='button' className='navbarButton'>ECOMMERCE</button>
                    <button type='button' className='navbarButton'>TRADING BOT</button>
                    <button type='button' className='navbarButton'>LAUNCHPAD</button>

                    <button type='button' className='navbarButton'>NET MARKETPLACE</button>
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
        </div>
   
  );
}
