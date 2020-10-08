import React from "react";
import { createStyles, makeStyles, Theme, Grid, Paper, Box, Card } from "@material-ui/core";
import * as quickStats from "../mockdata/quickStats.json";
import QuickStat from "../interfaces/QuickStat";
import ArrowDropDownSharpIcon from '@material-ui/icons/ArrowDropDownSharp';
import ArrowDropUpSharpIcon from '@material-ui/icons/ArrowDropUpSharp';
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      flexGrow: 1,
    },
    triangleIndicator:{
      fontSize: '20px',
      verticalAlign: 'middle'
    },
    cardCategory: {
      color: "grey",
      fontSize: "14px",
      fontWeight: 700
    },
    cardtotal: {
      color: "#ff8b64",
      fontSize: "24px"
    },
    cardHigh: {
      fontSize: "8px",
      margin:"0 2px 0 1px"
    },
    cardLow: {
      fontSize: "8px",
      margin:"2px"
    },
    upArrow:{
      color: 'green'
    },
    downArrow: {
      color: 'red'
    },
    quickStatRoot: {
      display: "flex",
      flexDirection: "row",
    },
    cardStat: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: "100px",
      width: "150px",
    },
    paperAddStats: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: "#ff8b64",
      fontWeight: "bold",
      height: "100px",
      width: "112px",
      borderRadius: 0,
      justifyContent: "center"
    }
  })
)

const QuickStatusBar: React.FC = () => {
  const classes = useStyles();
  let data = JSON.parse(JSON.stringify(quickStats)).default;
  let categories: Array<string> = [];
  let totals: Array<number> = [];
  let highs: Array<number> = [];
  let lows: Array<number> = [];

  data.map((item: QuickStat) => {
    categories.push(item.category);
    totals.push(item.total);
    highs.push(item.high);
    lows.push(item.low)
  })
  
  return(
    <Box marginTop="64px">
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Paper classes={{root: classes.quickStatRoot}} square={true}>
          {data.map((item : QuickStat, index: number = 0) => {
            index++;
            return(
              <Card classes={{root: classes.cardStat}} key={index} square={true}>
                <div className={classes.cardCategory}>{item.category}</div>
                <div className={classes.cardtotal}>{item.total}</div>
                  <ArrowDropUpSharpIcon className={classes.upArrow} fontSize='small' classes={{fontSizeSmall: classes.triangleIndicator}}></ArrowDropUpSharpIcon><span className={classes.cardHigh}>{item.high}</span>
                  <ArrowDropDownSharpIcon className={classes.downArrow} fontSize='small' classes={{fontSizeSmall: classes.triangleIndicator}}></ArrowDropDownSharpIcon><span className={classes.cardLow}>{item.low}</span>
              </Card>
            )
          })}
          {/* <Grid container spacing={0}>
            {totals.map((value: number) => (
              <Grid key={value} item>
                <Paper className={classes.paper}>
                  <div className={classes.cardtotal}>{value}</div>
                </Paper>
              </Grid>
            ))}
          </Grid> */}
      </Paper> 
        <Paper component='span' className={classes.paperAddStats}>
          + Add more Stats
        </Paper>
      </Grid>
    </Grid>
    </Box>
  );
}

export default QuickStatusBar;