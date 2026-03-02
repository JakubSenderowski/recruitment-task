import type { Order } from '../types/types';

function calculateRevenue(unitPrice: number, quantity: number) {
	return unitPrice * quantity;
}
export function calculateRevenueByCustomerType(orders: Order[]) {
	return orders.reduce(
		(acc, order) => {
			const revenue = calculateRevenue(order.unitPrice, order.quantity);
			if (order.customerType === 'returning') {
				acc.returning += revenue;
			} else {
				acc.new += revenue;
			}
			return acc;
		},
		{ returning: 0, new: 0 },
	);
}

export function calculateAverageDeliveryByCountry(orders: Order[]) {
	const grouped = orders.reduce(
		(acc, order) => {
			if (!acc[order.country]) {
				acc[order.country] = { totalDays: 0, count: 0 };
			}
			acc[order.country].totalDays += order.deliveryDays;
			acc[order.country].count += 1;
			return acc;
		},
		{} as Record<string, { totalDays: number; count: number }>,
	);
	const result: Record<string, number> = {};

	Object.keys(grouped).forEach((country) => {
		result[country] = Math.round((grouped[country].totalDays / grouped[country].count) * 10) / 10;
	});

	return result;
}

export function calculateCategoryRevenueByCountry(orders: Order[]) {
	const grouped = orders.reduce(
		(acc, order) => {
			const revenue = calculateRevenue(order.unitPrice, order.quantity);
			if (!acc[order.country]) {
				acc[order.country] = {};
			}
			if (!acc[order.country][order.category]) {
				acc[order.country][order.category] = 0;
			}
			acc[order.country][order.category] += revenue;
			return acc;
		},
		{} as Record<string, Record<string, number>>,
	);
	return grouped;
}
