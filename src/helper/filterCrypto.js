export const filterCrypto = (crypto, search) =>
	crypto.filter((crypto) => crypto.name.toLowerCase().includes(search.toLowerCase()) || crypto.symbol.toLowerCase().includes(search.toLowerCase()));
