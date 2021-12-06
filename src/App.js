import { useEffect, useState } from 'react';
import { TableCrypto } from './components/TableCrypto';
import { getData } from './helper/getData';

import 'bootstrap/dist/css/bootstrap.min.css';
import { SearchCrypto } from './components/SearchCrypto';

const App = () => {
	const [crypto, setCrypto] = useState([]);

	useEffect(() => {
		const response = getData();

		response.then(({ data }) => setCrypto(data));
	}, []);

	return (
		<div className='container'>
			<div className='row'>
				<SearchCrypto />
				<TableCrypto crypto={crypto} />
			</div>
		</div>
	);
};

export default App;
