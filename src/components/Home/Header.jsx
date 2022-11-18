import * as React from 'react';
import PropTypes from 'prop-types';
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
import { Link, useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux';
import { unSetUserToken } from '../../features/auth/authSlice';
import { removeToken } from '../../services/LocalStorageService';
const drawerWidth = 220;
const navItems = ['Home', 'Login','Register'];

function Header(props) {

  const dispatch = useDispatch()
  const { window } = props;
  const navigate= useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
const handleLogout = () => {
    dispatch(unSetUserToken({access_token:null}))
    removeToken()
    navigate("/login")

}
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        CWS
      </Typography>
      <Divider />
      <List>
       
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          {
            !props.data.access_token && <>
            <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} component={Link} to="/login">
              <ListItemText primary="Login" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} component={Link} to="/register">
              <ListItemText primary="Register" />
            </ListItemButton>
          </ListItem>
            </>
          }
          {
            props.data.access_token && <>
            <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} component={Link} onClick={handleLogout}>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
            </>
          }
       
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 4, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{display:{sx:'block',sm:'none'},marginLeft:4}}>
         {
          !props.data.access_token && <>
           <Button sx={{fontSize:11,marginLeft:0.5}} variant="contained" color="secondary"  size="small" component={Link} to="/login">Login</Button>
          <Button sx={{fontSize:11,marginLeft:2}} variant="contained" color='success' size="small" component={Link} to="/register">Register</Button>
          </>
         }
         {
          props.data.access_token && <>
          <Button sx={{fontSize:11,marginLeft:0.5}} variant="contained" color="secondary"  size="small" component={Link} to="/dahsboard">Profile</Button>
          <Button sx={{fontSize:11,marginLeft:2}} variant="contained" color='success' size="small" component={Link} to="/course">Course</Button>
          
          </>
         }

          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' },ml:5 }}
          >
            CWS
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' },mr:5 }}>
          <Button sx={{fontSize:16,marginRight:1.8}} variant="contained" color="secondary" component={Link} to="/">Home</Button>
          {
            !props.data.access_token && <>
            <Button sx={{fontSize:16,marginRight:1.8}} variant="contained" color="primary" component={Link} to="/login">Login</Button>
          <Button sx={{fontSize:16,marginRight:1.8}} variant="contained" color="success" component={Link} to="/register">Register</Button>
            </>
          }
          {
            props.data.access_token && <>
             <Button sx={{fontSize:16,marginRight:1.8}} variant="contained" color="primary" component={Link} to="/course">Course</Button>
          <Button sx={{fontSize:16,marginRight:1.8}} variant="contained" color="success" component={Link} to="/dahsboard">Dashboard</Button>
          <Button sx={{fontSize:16,marginRight:1.8}} variant="contained" style={{backgroundColor:"black"}} component={Link} onClick={handleLogout}>Logout</Button>
            </>
          }
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
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;