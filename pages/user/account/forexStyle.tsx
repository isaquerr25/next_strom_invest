const Forexy = require('forexy');


const currency = async (pair) => {
	const forex = new Forexy();
	try {
		let result = await forex.get(pair).then((rate) => rate);
		console.log(
			`\nCurrency ${pair} rate is ${result}
      \ttimestamp:${Date(forex.timestamp)}
      \tpair:${forex.pair}  
      \trate:${forex.rate}         
      \tfulldata:${JSON.stringify(forex.fulldata)}
      `
		);
	} catch (err) {
		console.error(`Error: ${err}`);
	}
};

currency('USD NZD');
