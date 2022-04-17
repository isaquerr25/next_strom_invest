import { Box, Table, TableCaption, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { convertMoney } from '../../../../utils/convertMoney';
import { calculatorDays } from '../../../user/cycle/process/utils';



interface typeTableTransfer{
	prop:{
			__typename?: any
			id: number
			action: string
			value: any
			state: string
			hash?: string | null | undefined
			createdAt?: any
			updatedAt?: any
			wallet?: string | null | undefined
	}[] | null | undefined
}
export const TableTransfer = ({prop}:typeTableTransfer) => (
	<Box
		


		css={{
			'&::-webkit-scrollbar': {
				width: '4px',
				height: '8px',
			},
			'&::-webkit-scrollbar-track': {
				width: '6px',
				height: '2px',
			},
			'&::-webkit-scrollbar-thumb': {
				background: 'gray',
				borderRadius: '14px',
			},
		}}
	>
		<Table
			variant='striped'
			colorScheme='teal'
			display={''}
		>
			<TableCaption></TableCaption>
			<Thead>
				<Tr>
					<Th>id</Th>
					<Th>action</Th>
					<Th>Valor</Th>
					<Th>state</Th>
					<Th>hash</Th>
					<Th>Criado Em:</Th>
					<Th>Ultima Atualização</Th>
					<Th>wallet</Th>
				</Tr>
			</Thead>
			<Tbody>
				{	prop &&
						prop.map( (compose) =>{

							let color = 'black';


							if (compose.state == 'CANCEL'){
								color = 'red';
							}else if (compose.state == 'COMPLETE'){
								color = 'green';
							}
							return(
								<Tr key={compose.id}>
									<Td >{compose.id}</Td>
									<Td >{compose.action}</Td>
									<Td >{convertMoney(Number(compose.value)/100)?? '0'}</Td>
									<Td >{compose.state}</Td>
									<Td >{compose.hash}</Td>
									<Td >{compose.createdAt}</Td>
									<Td >{compose.updatedAt}</Td>
									<Td >{compose.wallet}</Td>
								</Tr>
							);}
						)
				}
			</Tbody>

		</Table>
	</Box>
);


interface typeTableCycle{
  prop:{
    __typename?: 'CycleAll' | undefined;
    id: number;
    action: string;
    valueUSD: number;
    valueBTC: string;
    finalValueUSD?: number | null | undefined;
    finalValueBTC?: string | null | undefined;
    state?: string | null | undefined;
    beginDate?: string | null | undefined;
    finishDate?: string | null | undefined;
    createdAt?: string | null | undefined;
    updatedAt?: string | null | undefined;
    hash?: string | null | undefined;


  }[] | null | undefined
}


export const TableCycle = ({prop}:typeTableCycle) => (
	<Box
		css={{
			'&::-webkit-scrollbar': {
				width: '4px',
				height: '8px',
			},
			'&::-webkit-scrollbar-track': {
				width: '6px',
				height: '2px',
			},
			'&::-webkit-scrollbar-thumb': {
				background: 'gray',
				borderRadius: '14px',
			},
		}}
	>
		<Table
			variant='striped'
			colorScheme='teal'
			display={''}
		>
			<TableCaption></TableCaption>
			<Thead>
				<Tr>
					<Th>ID</Th>
					<Th>action</Th>
					<Th>Valor em USD</Th>
					<Th>Valor em BTC</Th>
					<Th>Valor Final em USD</Th>
					<Th>Valor Final em BTC</Th>
					<Th>Estado Atual</Th>
					<Th>Data de Começo</Th>
					<Th>Data de Finalização</Th>
					<Th>Criado Em</Th>
					<Th>Ultima Atualização</Th>
					<Th>hash</Th>
				</Tr>
			</Thead>
			<Tbody>
				{	prop &&
						prop.map( (compose) =>{

							let color = 'black';


							if (compose.state == 'CANCEL'){
								color = 'red';
							}else if (compose.state == 'COMPLETE'){
								color = 'green';
							}


							return(
								<Tr key={compose.id}>
									<Td>{compose.id}</Td>
									<Td>{compose.action}</Td>
									<Td>{convertMoney(Number(compose.valueUSD)/100)?? '0'}</Td>
									<Td>{compose.valueBTC}</Td>
									<Td>{convertMoney(Number(compose.finalValueUSD)/100)?? '0'}</Td>
									<Td>{compose.finalValueBTC}</Td>
									<Td>{compose.state}</Td>
									<Td>{compose.beginDate}</Td>
									<Td>{compose.finishDate}</Td>
									<Td>{compose.createdAt}</Td>
									<Td>{compose.updatedAt}</Td>
									<Td>{compose.hash}</Td>
								</Tr>
							);}
						)
				}
			</Tbody>

		</Table>
	</Box>
);
