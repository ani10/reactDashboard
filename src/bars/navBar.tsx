import React from "react";
import Drawer from '@material-ui/core/Drawer';
import HomeIcon from '@material-ui/icons/Home';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import FaceIcon from '@material-ui/icons/Face';
import SettingsIcon from '@material-ui/icons/Settings';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import { makeStyles, createStyles, useTheme, Theme } from "@material-ui/core/styles";
import { Divider, List, ListItem, Hidden, CssBaseline } from "@material-ui/core";


const drawerWidth = 64;

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      display: 'flex',
    },
    logo: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "white",
      color: "#ff8a65",
      minHeight: "64px",
      '&:hover': {
        color: "white"
      }

    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    menuButton: {
      minHeight: '64px',
      flexDirection: "column",
      color: "white"
    },
    list: {
      padding:0
    },
    listItemText: {
      fontSize: "9px"
    },
    drawerPaper: {
      width: drawerWidth,
      background: "#ff8a65",
      border: "none",
      boxShadow: "1px 0 13px 1px grey"
    },
  })
)

interface Props {
  window?: () => Window;
}

const NavBar = (props: Props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <List className={classes.list}>
        <ListItem button className={classes.logo}>
          <AcUnitIcon/>
        </ListItem>
        <ListItem button className={classes.menuButton}>
          <HomeIcon/>
          <div className={classes.listItemText}>
            Home
          </div>
        </ListItem>
        <ListItem button className={classes.menuButton}>
          <EqualizerIcon/>
          <div className={classes.listItemText}>
            Stats
          </div>
        </ListItem>
        <ListItem button className={classes.menuButton}>
          <FaceIcon/>
          <div className={classes.listItemText}>
            Users
          </div>
        </ListItem>        
        <ListItem button className={classes.menuButton}>
          <SettingsIcon/>
          <div className={classes.listItemText}>
            Settings
          </div>
        </ListItem>         
        <ListItem button className={classes.menuButton}>
          <ContactSupportIcon/>
          <div className={classes.listItemText}>
            Queries
          </div>
        </ListItem>       
      </List>
      <Divider />
    </div>
  );
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default NavBar;