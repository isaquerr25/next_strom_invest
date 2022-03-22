
import { Box ,Flex,Heading, Text} from '@chakra-ui/react';
import {
	Area,
	AreaChart,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	XAxis,
	YAxis
} from 'recharts';


export const dataGraphic = [
	{'name':'Dez-19', 'Capital Growth%': 4 ,'amt' : 1},
	{'name':'Jan-20', 'Capital Growth%': 8.16 ,'amt' : 2},
	{'name':'Fev-20', 'Capital Growth%': 12.48 ,'amt' : 3},
	{'name':'Mar-20', 'Capital Growth%': 16.96 ,'amt' : 2000},
	{'name':'Apr-20', 'Capital Growth%': 21.65 ,'amt' : 2000},
	{'name':'May-20', 'Capital Growth%': 26.5 ,'amt' : 2000},
	{'name':'Jun-20', 'Capital Growth%': 26.5 ,'amt' : 2000},
	{'name':'Jul-20', 'Capital Growth%': 36.8 ,'amt' : 2000},
	{'name':'Aug-20', 'Capital Growth%': 42.3 ,'amt' : 2000},
	{'name':'Set-20', 'Capital Growth%': 60.1 ,'amt' : 2000},
	{'name':'Out-20', 'Capital Growth%': 60.1,'amt' : 2000},
	{'name':'Nov-20', 'Capital Growth%': 60.1 ,'amt' : 2000},
	{'name':'Dez-20', 'Capital Growth%': 66.5 ,'amt' : 2000},
	{'name':'Jan-21', 'Capital Growth%': 73.1 ,'amt' : 2000},
	{'name':'Fev-21', 'Capital Growth%': 80 ,'amt' : 2000},
	{'name':'Mar-21', 'Capital Growth%': 87.2 ,'amt' : 2000},
	{'name':'Apr-21', 'Capital Growth%': 94.7 ,'amt' : 2000},
	{'name':'May-21', 'Capital Growth%': 102.5 ,'amt' : 2000},
	{'name':'Jun-21', 'Capital Growth%': 110.6 ,'amt' : 2000},
	{'name':'Jul-21', 'Capital Growth%': 119.1 ,'amt' : 2000},
	{'name':'Aug-21', 'Capital Growth%': 120.99 ,'amt' : 2000},
	{'name':'Set-21', 'Capital Growth%': 136.99 ,'amt' : 2000},
	{'name':'Out-21', 'Capital Growth%': 146.27 ,'amt' : 2000},
	{'name':'Nov-21', 'Capital Growth%': 157.33 ,'amt' : 2000},
	{'name':'Dez-22', 'Capital Growth%': 177.2 ,'amt' : 2000},
	{'name':'Jan-22', 'Capital Growth%': 177.2 ,'amt' : 2000},
	{'name':'Fev-22', 'Capital Growth%': 188.3 ,'amt' : 2000},
	{'name':'Mar-22', 'Capital Growth%': 199.8 ,'amt' : 2000},
	{'name':'Apr-22', 'Capital Growth%': 211.8 ,'amt' : 2000},

];

export const datacc = [
	['Year', 'Sales', 'Expenses'],
	['2013', 1000, 400],
	['2014', 1170, 460],
	['2015', 660, 1120],
	['2016', 1030, 540],
];

const data = [
	{
		'name': 'Page A',
		'uv': 4000,
		'amt': 2400
	},
	{
		'name': 'Page B',
		'uv': 3000,
		'amt': 2210
	},
	{
		'name': 'Page C',
		'uv': 2000,
		'amt': 2290
	},
	{
		'name': 'Page D',
		'uv': 2780,
		'amt': 2000
	},
	{
		'name': 'Page E',
		'uv': 1890,
		'amt': 2181
	},
	{
		'name': 'Page F',
		'uv': 2390,
		'amt': 2500
	},
	{
		'name': 'Page G',
		'uv': 3490,
		'amt': 2100
	}
];

const CustomTooltip = ({ active, payload, label }) => {
	if (active && payload && payload.length) {
		return (
			<div className="custom-tooltip">
				<Box bg='white' padding={'2'} borderRadius={'md'}>
					<p className="label">{` ${label}`}</p>
					<Text color={'green'} fontStyle='bold'>{`Profit:${payload[0].value}%`}</Text>
				</Box>
			</div>
		);
	}

	return null;
};

export function Graphic() {
	return (
		<Flex alignItems={'center'} justifyContent={'center'}>
			<Box width='80%' height='100%'>
				<Heading>Monthly evolution of our profitability. Making compound interest. 💸</Heading>
				<ResponsiveContainer width='100%' maxHeight='80%' minHeight={200}>
					<AreaChart data={dataGraphic}
						margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
						<defs>
							<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
								<stop offset="95%" stopColor="#8884d8" stopOpacity={0.1}/>
							</linearGradient>
						</defs>
						<CartesianGrid  strokeDasharray="1 1" />
						<XAxis dataKey="name" />
						<Tooltip content={<CustomTooltip />}/>
						<Area type="monotone" dataKey="Capital Growth%" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
					</AreaChart>
				</ResponsiveContainer>
			</Box>
		</Flex>
	);
}
