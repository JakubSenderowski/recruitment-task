export type Order = {
	orderId: string;
	timestamp: string;
	country: string;
	city: string;
	lat: number;
	lon: number;
	category: string;
	subcategory: string;
	product: string;
	quantity: number;
	unitPrice: number;
	paymentMethod: 'card' | 'paypal' | 'blik';
	customerType: 'returning' | 'new';
	device: 'mobile' | 'desktop' | 'tablet';
	deliveryDays: number;
};

export type Meta = {
	currency: 'EUR';
	generatedAt: string;
	source: string;
};

export type DataFile = {
	meta: Meta;
	orders: Order[];
};
