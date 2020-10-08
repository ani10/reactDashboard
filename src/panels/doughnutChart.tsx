import React from "react";
import CanvasJSReact from "../canvasjs.react";
import * as DATA from "../mockdata/pieChartData.json";
import ChartData from "../interfaces/ChartData";
import { makeStyles, createStyles, Theme, Card } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => 
createStyles(
    {
      root: {
        flexGrow: 1,
        boxShadow: "1px 0 13px 1px grey",
        padding: "10px"
      },
    }
  )
);

const CanvasJSChart = CanvasJSReact.CanvasJSChart;
const DoughnutChart: React.FC =() => {
  const classes = useStyles();
  const options: ChartData = JSON.parse(JSON.stringify(DATA)).default;
  return (
    <Card className={classes.root}>   
      <CanvasJSChart options = {options}/>
    </Card>
  );
}
export default DoughnutChart;