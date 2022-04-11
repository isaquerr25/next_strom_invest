import { FormatMoney } from 'format-money-js';

export const convertMoney = (value:number) => {

	const fm = new FormatMoney({ symbol: '$',decimals: 2 });
	const values:string = fm.from(value).toString();
	return values;
};
