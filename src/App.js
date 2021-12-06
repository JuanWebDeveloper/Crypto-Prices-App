import { useEffect, useState } from 'react';
import { TableCrypto } from './components/TableCrypto';
import { getData } from './helper/getData';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	const [crypto, setCrypto] = useState([]);

	useEffect(() => {
		const response = getData();

		response.then(({ data }) => setCrypto(data));
	}, []);

	return (
		<div className='container'>
			<div className='row'>
				<TableCrypto crypto={crypto} />
			</div>
		</div>
	);
};

export default App;
