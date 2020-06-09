import React from 'react';
import { connect } from 'react-redux';
import * as mapDispatchToProps from 'actions';
import { makeStyles } from '@material-ui/core/styles';
import {
  IconButton,
  Tooltip,
  AppBar,
  Typography,
  Toolbar,
  Button,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import LightIcon from '@material-ui/icons/Brightness7';
import DarkIcon from '@material-ui/icons/Brightness4';
import { isDarkSelector } from 'selectors/theme';
import { APP_TITLE } from 'config';

const useStyles = makeStyles(theme => ({
  account: {
    color: 'white',
    marginRight: 10,
  },
  balance: {
    color: 'white',
    marginRight: 10,
  },
}));

function Component({ toggleTheme, isDark, address, balance }) {
  const classes = useStyles();
  const isLoggedIn = Boolean(address);

  return (
    <AppBar position="fixed" color="inherit">
      <Toolbar color="inherit">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          className={'flex flex--justify-center flex--grow'}
        >
          {APP_TITLE}
        </Typography>

        <Button color="secondary">
          {isLoggedIn ? (
            <>
              <div className={classes.account}>{address}</div>{' '}
              <div className={classes.balance}>{balance}</div>{' '}
              <div>Sign Out</div>{' '}
            </>
          ) : (
            <div>Connect Polkadot Account</div>
          )}
        </Button>

        <Tooltip title="Toggle light/dark theme">
          <IconButton
            onClick={toggleTheme}
            color="inherit"
            aria-label="Toggle light/dark theme"
          >
            {isDark ? <LightIcon /> : <DarkIcon />}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}

const mapStateToProps = state => {
  const {} = state;
  return {
    isDark: isDarkSelector(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
