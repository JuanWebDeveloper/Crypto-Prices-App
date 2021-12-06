export const TableTitle = () => {
	const titles = ['#', 'Crypto', 'Price', 'Price Change', '24h Volume'];

	return (
		<thead>
			<tr>
				{titles.map((title, index) => (
					<th key={index}>{title}</th>
				))}
			</tr>
		</thead>
	);
};
