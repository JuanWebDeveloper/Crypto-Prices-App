import { useEffect, useState } from 'react';
import { TableCrypto } from './components/TableCrypto';
import { getData } from './helper/getData';

const App = () => {
	const [crypto, setCrypto] = useState([]);

	useEffect(() => {
		const response = getData();

		response.then(({ data }) => setCrypto(data));
	}, []);

	return (
		<div>
			<h1>Cripto Prices</h1>
			<TableCrypto crypto={crypto} />
		</div>
	);
};

export default App;
