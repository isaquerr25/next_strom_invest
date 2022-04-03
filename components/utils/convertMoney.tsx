import { FormatMoney } from 'format-money-js';

export const convertMoney = (value:number) => {

	const fm = new FormatMoney({ symbol: '$',decimals: 2 });
	return fm.from(value);
};
