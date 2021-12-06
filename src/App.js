import { useEffect, useState } from 'react';
import { SearchCrypto } from './components/SearchCrypto';
import { TableCrypto } from './components/TableCrypto';
import { getData } from './helper/getData';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	const [crypto, setCrypto] = useState([]);
	const [search, setSearch] = useState('');

	useEffect(() => {
		const response = getData();

		response.then(({ data }) => setCrypto(data));
	}, []);

	return (
		<div className='container'>
			<div className='row'>
				<SearchCrypto setSearch={setSearch} />
				<TableCrypto crypto={crypto} search={search} />
			</div>
		</div>
	);
};

export default App;
