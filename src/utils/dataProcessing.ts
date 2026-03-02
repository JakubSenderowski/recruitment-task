import type { Order } from '../types/types';

export function calculateRevenueByCustomerType(orders: Order[]) {
	return orders.reduce(
		(acc, order) => {
			const totalRevenue = order.unitPrice * order.quantity;
			if (order.customerType === 'returning') {
				acc.returning += totalRevenue;
			} else {
				acc.new += totalRevenue;
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
		result[country] = grouped[country].totalDays / grouped[country].count;
	});

	return result;
}

export function calculateCategoryRevenueByCountry(orders: Order[]) {
	const grouped = orders.reduce(
		(acc, order) => {
			if (!acc[order.country]) {
				acc[order.country] = {};
			}
			if (!acc[order.country][order.category]) {
				acc[order.country][order.category] = 0;
			}
			acc[order.country][order.category] += order.quantity * order.unitPrice;
			return acc;
		},
		{} as Record<string, Record<string, number>>,
	);
	return grouped;
}
