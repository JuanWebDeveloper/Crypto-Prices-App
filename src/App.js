import { useEffect } from 'react';

import { getData } from './helper/getData';

const App = () => {
	useEffect(() => {
		const response = getData();

		response.then(({ data }) => console.log(data));
	}, []);

	return (
		<div>
			<h1>Cripto Prices</h1>
		</div>
	);
};

export default App;
