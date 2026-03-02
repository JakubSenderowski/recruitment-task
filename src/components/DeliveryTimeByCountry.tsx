import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import data from '../data.json';
import { calculateAverageDeliveryByCountry } from '../utils/dataProcessing';
import type { Order } from '../types/types';

export function AverageDeliveryTime() {
	const averageTime = calculateAverageDeliveryByCountry(data.orders as Order[]);
	const options = {
		chart: {
			type: 'bar',
		},
		title: {
			text: 'Average delivery time (Country)',
		},
		xAxis: {
			categories: Object.keys(averageTime),
		},
		series: [
			{
				name: 'Delivery days',
				data: Object.values(averageTime),
			},
		],
	};
	return <HighchartsReact highcharts={Highcharts} options={options} />;
}
