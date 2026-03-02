import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import data from '../data.json';
import { calculateCategoryRevenueByCountry } from '../utils/dataProcessing';
import type { Order } from '../types/types';

export function RevenueByCategoryPerCountry() {
	const categoryRevenue = calculateCategoryRevenueByCountry(data.orders as Order[]);
	const sorted = Object.entries(categoryRevenue).sort(
		(a, b) =>
			Object.values(b[1]).reduce((sum, val) => sum + val, 0) -
			Object.values(a[1]).reduce((sum, val) => sum + val, 0),
	);
	const countries = sorted.map(([country]) => country);
	const categories = [...new Set(countries.flatMap((country) => Object.keys(categoryRevenue[country])))];
	const series = categories.map((category) => ({
		name: category,
		data: countries.map((country) => categoryRevenue[country][category] || 0),
	}));

	const options = {
		chart: {
			type: 'column',
		},
		title: {
			text: 'Category revenue per country',
		},
		xAxis: {
			categories: countries,
		},
		yAxis: {
			title: {
				text: null,
			},
			labels: {
				format: '{value} EUR',
			},
		},
		tooltip: {
			valueSuffix: ' EUR',
		},
		plotOptions: {
			column: {
				stacking: 'normal',
			},
		},
		series: series,
	};
	return <HighchartsReact highcharts={Highcharts} options={options} />;
}
