import { TableTitle } from './TableTitle';
import { CryptoRow } from './CryptoRow';

export const TableCrypto = ({ crypto }) => {
	return (
		<table className='table table-dark mt-4 table-hover'>
			<TableTitle />
			<CryptoRow crypto={crypto} />
		</table>
	);
};
