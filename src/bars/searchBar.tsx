import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles, Theme, createStyles, fade } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles(
    {
    root: {
      flexGrow: 1,
    },
    search: {
      position: 'relative',
      borderRadius: 'theme.shape.borderRadius',
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      color: '#8E8E8E',
      zIndex: 1,
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      background: '#e0e0e0',
      borderRadius: '40px'
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '40ch',
        '&:focus': {
          width: '60ch',
        },
      },
    },
  }),
);

const SearchBar = () => {
  const classes = useStyles();

  return(
    <Grid container justify='center' className={classes.root}>
      <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search anythinhg here…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
    </Grid>
  )
}
export default SearchBar;