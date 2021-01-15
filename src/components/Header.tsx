import React from "react";
import { AppBar, Toolbar, Typography, Button, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  aboutMe: {
    marginLeft: 0,
  },
  pushRight: {
    flex: 1,
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar>
        <Button color="inherit" className={classes.menuButton} href="#page-top">
          <Typography className={classes.pushRight}>Devkot</Typography>
        </Button>
        <Button color="inherit" href="#about" className={classes.aboutMe}>
          <Typography className={classes.pushRight}>About</Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
};
