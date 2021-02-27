import { useRouter} from 'next/router'
import {
  makeStyles,
  Hidden,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Avatar,
  Divider,
  Typography,
  Button,
  Icon,
} from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';
import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';
import { AccountCircle } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 240,
  },
  desktopDrawer: {
    width: 240,
    top: 56,
    height: 'calc(100% - 64px)',
    borderRight: 'none',
  },
  avatar: {
    cursor: ' pointer',
    width: 24,
    height: 24,
  },
  listItem: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: theme.spacing(3),
  },
  listItemText: {
    fontSize: 14,
  },
}));

const primaryMenu = [
  { id: 1, label: 'Início', path: '/', icon: HomeIcon },
  { id: 2, label: 'Em alta', path: '/trendding', icon: Whatshot },
  { id: 3, label: 'Inscrições', path: 'subscriptions', icon: Subscriptions },
];

const secondaryMenu = [
  { id: 1, label: 'Biblioteca', icon: VideoLibrary },
  { id: 2, label: 'Histórico', icon: History },
];



function NavBar() {
  const classes = useStyles();
  const router = useRouter()

  const isSelected = (item) => {
    return router.pathname === item.path
  }

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <List>
        {primaryMenu.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem
              key={item.id}
              button
              classes={{ root: classes.listItem }}
              selected={isSelected(item)}
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(item) && '#f44336' }} />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.ListItemText,
                }}
                primary={item.label}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider/>
      <List>
        {secondaryMenu.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem
              key={item.id}
              button
              classes={{ root: classes.listItem }}
              selected={isSelected(item)}
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(item) && '#f44336' }} />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.ListItemText,
                }}
                primary={item.label}
              />
            </ListItem>
          );
        })}
      </List>
      <Box mx={4} my={2}>
        <Typography>
          Faça Login para curtir videos, comentar e se inscrever
        </Typography>
        <Box>
          <Button
          variant="outlined"
          color="secondary"
          startIcon={<AccountCircle />}
          >
            Fazer Login
          </Button>
        </Box>
      </Box>

    </Box>
  );

  return (
    <div>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </div>
  );
}

export default NavBar