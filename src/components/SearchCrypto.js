import React from 'react';

export const SearchCrypto = ({ setSearch }) => {
	return (
		<input
			type='text'
			placeholder='Search a Crypto'
			className='form-control bg-dark text-light border-0 mt-4 py-3 text-center'
			onChange={(e) => setSearch(e.target.value)}
		/>
	);
};
