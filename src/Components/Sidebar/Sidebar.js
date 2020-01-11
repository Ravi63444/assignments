import React from 'react';

import './Sidebar.css';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import BusinessCenterRoundedIcon from '@material-ui/icons/BusinessCenterRounded';
const Sidebar=()=>{
	return(
		<div className='side  shadow-5 '>
		<div className='icons mt5 tc'>
			<div className='pt2 category'>
				<img src='https://www.pikpng.com/pngl/m/264-2646969_png-file-svg-category-icon-png-white-transparent.png'
				width='20px' height='50%'/>
			</div>
			<div className='pt2 search'>
				<SearchRoundedIcon/>
			</div>
			<div className='pt2 business'>
				<BusinessCenterRoundedIcon/>
			</div>
				
		</div>
			
				
		</div>
		);
}

export default Sidebar;
/*import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Search from '@material-ui/icons/Search';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <div>
        <div className={classes.root}>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx({
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <List>
            <ListItem button key={1}>
              <ListItemIcon><AppsSharpIcon></AppsSharpIcon></ListItemIcon>
            </ListItem>
            <ListItem button key={1}>
              <ListItemIcon ><Search /></ListItemIcon>
            </ListItem>
            <ListItem button key={1}>
              <ListItemIcon><BusinessCenterOutlinedIcon /></ListItemIcon>
            </ListItem>
        </List>
      </Drawer>
      
    </div>
    </div>
  );
}*/