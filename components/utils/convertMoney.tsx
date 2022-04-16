import { FormatMoney } from 'format-money-js';

export const convertMoney = (value:number) => {

	const fm = new FormatMoney();
	const values:string = fm.from(value,{ symbol: '$',decimals: 2 }).toString();
	return values;
	
};
