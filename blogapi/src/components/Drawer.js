import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { NavLink } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import ForwardIcon from '@material-ui/icons/Forward';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ContactSupportSharpIcon from '@material-ui/icons/ContactSupportSharp';
import CallSharpIcon from '@material-ui/icons/CallSharp';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CloseIcon from '@material-ui/icons/Close';
const useStyles = makeStyles({
  list: {
    width: 250,
    backgroundColor: '#c8e3e3',
  },
  fullList: {
    width: 'auto',
    
  },
  
  
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
   left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
       <List>
            <ListItemIcon>
                <Button>
                <CloseIcon 
                color="primary"
                variant="filled"
                position="center"
                />
                </Button>
            </ListItemIcon>
            
      </List>
      <List>
        {['Register'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><HowToRegIcon 
            color="primary"
            variant="filled"
            /></ListItemIcon>
            <ListItemText><Button
						href="#"
						color="primary"
						variant="outlined"
						className={classes.link}
						component={NavLink}
						to="/register"
					>
						Register
					</Button></ListItemText> 
          </ListItem>
        ))}
      </List>
      <List>
        {['Login'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><ForwardIcon 
            color="primary"
            variant="filled"
            /></ListItemIcon>
            <ListItemText><Button
						href="#"
						color="primary"
						variant="outlined"
						className={classes.link}
						component={NavLink}
						to="/login"
					>
						Login
					</Button></ListItemText> 
          </ListItem>
        ))}
      </List>
      <List>
        {['Admin'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><AccountCircle 
            color="primary"
            variant="filled"
            /></ListItemIcon>
            <ListItemText><Button
						href="#"
						color="primary"
						variant="outlined"
						className={classes.link}
						component={NavLink}
						to="/admin"
					>
						Admin
					</Button></ListItemText> 
          </ListItem>
        ))}
      </List>
      
      <List>
        {['Logout'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><ExitToAppIcon 
            color="secondary"
            variant="filled"
            />
            </ListItemIcon>
            <ListItemText><Button
						href="#"
						color="primary"
						variant="outlined"
						className={classes.link}
						component={NavLink}
						to="/logout"
					>
						Logout
					</Button></ListItemText> 
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Statistics'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><LocationOnIcon
            color="primary"
               variant="filled" /></ListItemIcon>
            <ListItemText><Button
						href="#"
						color="primary"
						variant="outlined"
						className={classes.link}
						component={NavLink}
						to="/stats"
					>
						Statistics
					</Button></ListItemText>
          </ListItem>
        ))}
      </List>
      <List>
        {['Chart'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><LocationOnIcon
            color="primary"
               variant="filled" /></ListItemIcon>
            <ListItemText><Button
						href="#"
						color="primary"
						variant="outlined"
						className={classes.link}
						component={NavLink}s
						to="/bchart"
					>
						Chart
					</Button></ListItemText>
          </ListItem>
        ))}
      </List>
      <List>
        {['Support'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><ContactSupportSharpIcon
            color="primary"
            variant="filled"
            /></ListItemIcon>
            <ListItemText><Button
						href="#"
						color="primary"
						variant="outlined"
						className={classes.link}
						component={NavLink}
						to="/"
					>
						Support
					</Button></ListItemText>
          </ListItem>
        ))}
      </List>
      <List>
        {['Contact Us'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><CallSharpIcon 
            color="primary"
            variant="filled"/></ListItemIcon>
            <ListItemText><Button
						href="#"
						color="primary"
						variant="outlined"
						className={classes.link}
						component={NavLink}
						to="/"
					>
						Contact Us
					</Button></ListItemText>
          </ListItem>
        ))}
      </List>
      <List>
        {['About Us'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><LocationOnIcon
            color="primary"
               variant="filled" /></ListItemIcon>
            <ListItemText><Button
						href="#"
						color="primary"
						variant="outlined"
						className={classes.link}
						component={NavLink}
						to="/"
					>
						About Us
					</Button></ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
              <MenuIcon
               color="primary"
               variant="filled"
               >
              </MenuIcon>
              </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}