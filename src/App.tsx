import { RevenueByCustomerType } from './components/RevenueByCustomerType';
import { AverageDeliveryTime } from './components/DeliveryTimeByCountry';
import { RevenueByCategoryPerCountry } from './components/RevenueByCountry';
function App() {
	return (
		<div>
			<RevenueByCustomerType />
			<AverageDeliveryTime />
			<RevenueByCategoryPerCountry />
		</div>
	);
}

export default App;
