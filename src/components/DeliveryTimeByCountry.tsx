import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import data from '../data.json';
import { calculateAverageDeliveryByCountry } from '../utils/dataProcessing';
import type { Order } from '../types/types';

export function AverageDeliveryTime() {
	const deliveryData = calculateAverageDeliveryByCountry(data.orders as Order[]);
	const sorted = Object.entries(deliveryData).sort((a, b) => a[1] - b[1]);
	const countries = sorted.map(([country]) => country);
	const values = sorted.map(([, value]) => value);
	const options = {
		chart: {
			type: 'bar',
		},
		title: {
			text: 'Average delivery time (Country)',
		},
		xAxis: {
			title: {
				text: null,
			},

			categories: countries,
		},
		yAxis: {
			title: {
				text: null,
			},
			labels: {
				format: '{value} days',
			},
		},
		plotOptions: {
			bar: {
				dataLabels: {
					enabled: true,
					format: '{y} days',
				},
			},
		},
		series: [
			{
				name: 'Delivery days',
				data: values,
			},
		],
	};
	return <HighchartsReact highcharts={Highcharts} options={options} />;
}
