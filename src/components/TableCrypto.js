import { TableTitle } from './TableTitle';
import { CryptoRow } from './CryptoRow';
import { filterCrypto } from '../helper/filterCrypto';

export const TableCrypto = ({ crypto, search }) => {
	const filteredCrypto = filterCrypto(crypto, search);

	return (
		<table className='table table-dark mt-4 table-hover'>
			<TableTitle />
			<CryptoRow crypto={filteredCrypto} />
		</table>
	);
};
