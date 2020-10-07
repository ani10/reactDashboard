export default interface ChartData {
  animationEnabled: boolean;
	exportEnabled: boolean;
			theme: string;
			title:{
				text: string;
			},
			axisY: {
				title: string;
				suffix: string
			},
			axisX: {
				title: string,
				prefix: string,
				interval: number
			},
			data: Array<DataFormat>
}
interface DataFormat {
  type: string,
  toolTipContent: string,
  dataPoints: Array<{x: number	, y:number}>
}
