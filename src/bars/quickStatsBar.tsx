import React from "react";
import { createStyles, makeStyles, Theme, Grid, Paper } from "@material-ui/core";
import * as quickStats from "../mockdata/quickStats.json";


const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      flexGrow: 1,
      margin: "64px 0 0 64px",
    },
    title: {
      color: "#ff8b64",
      fontSize: "24px"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      minHeight: "100px",
      minWidth: "140px"
    },
  })
)

const QuickStatusBar = () => {
  const classes = useStyles();
  const data = JSON.parse(JSON.stringify(quickStats)).default;

  for(const item in data.default){
    console.log(item)
  }
  return(
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container justify="flex-start" spacing={0}>
          {[1,2,9,3,23,4,43, 85, 34,84, 45].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper}>
                <div className={classes.title}>{value}</div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default QuickStatusBar;