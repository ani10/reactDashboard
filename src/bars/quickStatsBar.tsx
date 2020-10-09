/* eslint-disable array-callback-return */
import React from "react";
import { createStyles, makeStyles, Theme, Grid, Box, Card } from "@material-ui/core";
import * as quickStats from "../mockdata/quickStats.json";
import QuickStat from "../interfaces/QuickStat";
import ArrowDropDownSharpIcon from '@material-ui/icons/ArrowDropDownSharp';
import ArrowDropUpSharpIcon from '@material-ui/icons/ArrowDropUpSharp';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: "100vw"
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
      position: "fixed",
      width: "100%",
      whiteSpace: "nowrap",
      overflowX: "scroll",
      zIndex: 999
    },
    cardStat: {
      display: "inline-block",
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: "100px",
      width: "150px",
    },
    cardAddStats: {
      position: "fixed",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      right: 0,
      textAlign: 'center',
      fontWeight: "bold",
      height: "100px",
      width: "112px",
      borderRadius: 0,
      zIndex: 1000
    },
    anchor: {
      color: "#ff8b64",
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
    <Box>
    <Grid container className={classes.root}>
      <div  className={classes.quickStatRoot}>
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
        <Card classes={{root: classes.cardStat}}></Card> 
      </div> 
      <Card className={classes.cardAddStats}>
           <a className={classes.anchor} href="#"> + Add more Stats </a>
      </Card>
    </Grid>
    </Box>
  );
}

export default QuickStatusBar;