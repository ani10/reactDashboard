import React from "react";
import CanvasJSReact from "../canvasjs.react";
import * as DATA from "../mockdata/lineChartData.json";
import ChartData from "../interfaces/ChartData";
import { makeStyles, createStyles, Theme, Card } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => 
createStyles(
    {
      root: {
        flexGrow: 1,
        maxWidth: 1000,
        marginLeft: 90,
        boxShadow: "1px 0 13px 1px grey",
        padding: "10px"
      },
    }
  )
);
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const LineChart: React.FC = () => {
  const classes = useStyles();
  const options: ChartData = JSON.parse(JSON.stringify(DATA)).default;
  return (
  <Card className={classes.root}>
    <CanvasJSChart options = {options}
      /* onRef={ref => this.chart = ref} */
    />
    {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
  </Card>
  );
}

export default LineChart;