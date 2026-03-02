import { RevenueByCustomerType } from './components/RevenueByCustomerType';
import { AverageDeliveryTime } from './components/DeliveryTimeByCountry';
import { RevenueByCategoryPerCountry } from './components/RevenueByCountry';
import './utils/chartConfig';
function App() {
	return (
		<div className='dashboard'>
			<h1 className='dashboard-title'>Analytics Dashboard</h1>
			<div className='charts-grid'>
				<div className='chart-card large'>
					<RevenueByCategoryPerCountry />
				</div>
				<div className='chart-card small'>
					<RevenueByCustomerType />
				</div>
				<div className='chart-card full'>
					<AverageDeliveryTime />
				</div>
			</div>
		</div>
	);
}

export default App;
