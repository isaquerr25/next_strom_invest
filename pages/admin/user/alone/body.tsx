import { Box, Button,
	Divider,
	Flex, FormLabel,
	Icon, Image,
	Input, NumberDecrementStepper, Spinner, Table, TableCaption, Tbody, Td, Text, Th, Thead, Tr, useBoolean } from '@chakra-ui/react';
import { FormatMoney, FormatMoneyParse } from 'format-money-js';
import Router from 'next/router';
import { FC, MouseEventHandler, ReactElement, ReactNode, useEffect, useState} from 'react';
import { FaNotEqual, FaPlaneArrival, FaPlaneDeparture, FaPoll, FaRegChartBar } from 'react-icons/fa';
import { CgSandClock } from 'react-icons/cg';
import { SiClockify } from 'react-icons/si';
import Carousel from '../../../../components/utils/Carousel';
import { convertMoney } from '../../../../components/utils/convertMoney';
import { Loading } from '../../../../components/utils/loading';
import { useActiveStartStaffQuery,
	useAllCycleQuery,
	useAllDocumentsValidationQuery ,
	useAllMonthlyProfitQuery,
	useAllTransactionsQuery,
	useAllUsersQuery,
	useAlterDocumentMutation,
	useGetTypeTransactionMutation,
	useUpdateMonthlyProfitMutation,
	useUpdateTransactionMutation,
	useIdMonthlyProfitMutation,
	useCreateMonthlyProfitMutation,
	useUserInfoIdStaffMutation,
	useAllCycleByUserStaffMutation,
	useAllTransactionsByUserStaffMutation
} from '../../../generated/graphql';
import { ArrowForwardIcon, EmailIcon } from '@chakra-ui/icons';
import { PopMsg } from '../../../../components/utils/PopMsg';
import { useRouter } from 'next/router';
import { calculatorDays } from '../../../user/cycles/process/utils';
import { BsCashCoin, BsFillCalendarCheckFill } from 'react-icons/bs';
import { GiWallet } from 'react-icons/gi';
import DatePicker from 'react-datepicker';
import { addDays, addMonths } from 'date-fns';
import { Form, Formik,FormikHandlers } from 'formik';
import FormInput from '../../../../components/utils/formInput';
import { daysInMonth } from '../../../user/cycles/utils';
import { IoWalletOutline } from 'react-icons/io5';
import NumberFormat from 'react-number-format';
import 'react-datepicker/dist/react-datepicker.css';
import { MdOutlineFindReplace, MdOutlineTipsAndUpdates } from 'react-icons/md';
import { GrDocumentUpdate } from 'react-icons/gr';
import { TableCycle, TableTransfer } from './sheet';

interface stripType{
	props:{
		name:string
    email:string
    wallet:string
    document:string
    qDeposit:string
    allDeposit:string
    qWithdraw:string
    allWithdraw:string
    qInvest:string
    allInvest:string
    qCompleteInvest:string
    allCompleteInvest:string
    qCycleProcess:string
    allCycleProcess:string
    qCycleActive:string
    allCycleActive:string
    qCycleComplete:string
    allCycleComplete:string
    cash:string
	}
}

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

export const BodySetOne = () =>{

	const staffInfoGraph   = useActiveStartStaffQuery();
	const [userInfoIdStaff,] = useUserInfoIdStaffMutation();
	const [userCycleInfoIdStaff,] = useAllCycleByUserStaffMutation();
	const [userTransactionsInfoIdStaff,] = useAllTransactionsByUserStaffMutation();

	const [propsFind,SetPropsFind] = useState();


	const [propsFindUser,SetPropsFindUser] = useState<stripType>({props:{
		name:'',
		email:'',
		wallet:'',
		document:'',
		qDeposit:'',
		allDeposit:'',
		qWithdraw:'',
		allWithdraw:'',
		qInvest:'',
		allInvest:'',
		qCompleteInvest:'',
		allCompleteInvest:'',
		qCycleProcess:'',
		allCycleProcess:'',
		qCycleActive:'',
		allCycleActive:'',
		qCycleComplete:'',
		allCycleComplete:'',
		cash:''
	}});

	const [usePropsTableTransfer,SetPropsTableTransfer] = useState<typeTableTransfer>({prop:[{
		id:0,
		action:'',
		value:'',
		state:'',
		hash:'',
		createdAt:'',
		updatedAt:'',
		wallet:'',
	}]});

	const [usePropsTableCycle,SetPropsTableCycle] = useState<typeTableCycle>({prop:[{
		id:0,
		action:'',
		valueUSD:0,
		valueBTC:'',
		state:'',
		hash:'',
		createdAt:'',
		updatedAt:'',
	}]});


	const dataUser =  staffInfoGraph.data?.activeStartStaff;

	const [errorMsg, setErrorMsg] = useState('');

	const [finishDate, setFinishDate] = useState<Date|null>();

	const [popShow, setPopShow] = useBoolean(false);
	const [titleShow, setTitleShow] = useState('Error');
	const [popFunction, setPopFunction] = useState<()=>void>();
	const [popNameButton, setPopNameButton] = useState<string|null>();
	const [useCreateMonthly,] = useCreateMonthlyProfitMutation(); 


	useEffect(()=>{
		if (dataUser?.cyclesStart! == undefined && staffInfoGraph.loading == false){
			Router.push('/admin/login');
			console.log(dataUser?.cyclesStart!);
		}
	},[staffInfoGraph.loading]);

	const FormikFindUser= () => {

		type typesCycle = {
			id:string
		}
		const [UpdateMonthGraphql, ] = useIdMonthlyProfitMutation();

		return (
			<>
				<Formik
					initialValues={{id:'0'}}
					onSubmit={async (values: typesCycle, { setSubmitting, setErrors }) => {

						setSubmitting(true);
						const result = await userInfoIdStaff({variables:{
							id: Number(values.id),
						}});
						const resultCycle = await userCycleInfoIdStaff({variables:{
							id: Number(values.id),
						}});
						const resultTransaction = await userTransactionsInfoIdStaff({variables:{
							id: Number(values.id),
						}});
						setSubmitting(false);
						const valuesRequest = result.data?.userInfoIdStaff;
						const valuesRequestCycles = resultCycle.data?.allCycleByUserStaff;
						const valuesRequestTransaction = resultTransaction.data?.allTransactionsByUserStaff;

						if (valuesRequest != null) {
							setErrorMsg('Mês Encontrado');
							setTitleShow('Success');
							setPopShow.on();
							console.log(valuesRequest);

							SetPropsFindUser({props:{
								name:valuesRequest.name ?? '',
								email:valuesRequest.email ?? '',
								wallet:valuesRequest.wallet ?? '',
								document:valuesRequest.document ?? '',
								qDeposit:valuesRequest.qDeposit ?? '0',
								allDeposit:convertMoney(Number(valuesRequest.allDeposit)/100)?? '0',
								qWithdraw:valuesRequest.qWithdraw ?? '0',
								allWithdraw:convertMoney(Number(valuesRequest.allWithdraw)/100)?? '0',
								qInvest:valuesRequest.qInvest ?? '0',
								allInvest: convertMoney(Number(valuesRequest.allInvest)/100)?? '0',
								qCompleteInvest:valuesRequest.qCompleteInvest ?? '0',
								allCompleteInvest:convertMoney(Number(valuesRequest.allCompleteInvest)/100)?? '0',
								qCycleProcess:valuesRequest.qCycleProcess ?? '0',
								allCycleProcess:convertMoney(Number(valuesRequest.allCycleProcess)/100)?? '0',
								qCycleActive:valuesRequest.qCycleActive ?? '0',
								allCycleActive:convertMoney(Number(valuesRequest.allCycleActive)/100)?? '0',
								qCycleComplete:valuesRequest.qCycleComplete ?? '0',
								allCycleComplete:convertMoney(Number(valuesRequest.allCycleComplete)/100)?? '0',
								cash:convertMoney(Number(valuesRequest.cash ?? 0)/100)
							}}
							);

							SetPropsTableTransfer({prop:valuesRequestTransaction});
							SetPropsTableCycle({prop:valuesRequestCycles});//?

						} else {
							setErrorMsg('Não encontrou');
							setTitleShow('Error');
							setPopShow.on();
						}
					}}
				>
					{({ values,isSubmitting })  => (
						<Form>
							<Flex justifyContent={'center'} flexDirection={'column'} gap={3} bg='teal' alignItems={'center'}>
								<Text verticalAlign={'middle'} textAlign={'center'}
									justifyContent={'center'} h='30px' w={'100%'} alignItems={'center'}>Busque qual mês quer alterar*</Text>
								<Flex justifyContent={'center'} flexDirection={'row'} gap={3} bg='teal' alignItems={'center'}>
									<Text verticalAlign={'middle'} textAlign={'center'}
										justifyContent={'center'} h='30px' w={'30%'} alignItems={'center'}>ID Mês:</Text>
									<FormInput type="text" placeholder='0' name="id" inputIcon={IoWalletOutline} />
									<Button
										w={'30%'}
										bg={'blue.400'}
										color={'white'}
										_hover={{
											bg: 'blue.500',
										}}
										onClick={()=>{console.log('das');}}
										type="submit"
										leftIcon={isSubmitting ? <Spinner /> : <Icon as={MdOutlineFindReplace} />}
										disabled={isSubmitting}
									>
									Find
									</Button>
								</Flex>
							</Flex>
						</Form>
					)}

				</Formik>


			</>
		);
	};



	return(
		<>
			{(staffInfoGraph.loading)&& <Loading/>}
			{dataUser &&
			<Flex
				
				justifyContent={'center'}
				flexDirection='column'
				width={'100%'}

			>

				<Box
					width={'100%'}
					p={'10px'}
					display={'flex'}
					flexDirection='column'
					gap={5}
				>
					<Flex
						justifyContent={'center'}
						width={'100%'}
						display='inline-flex'
						flexWrap={'wrap'}
						gap={2}
						alignItems={'flex-start'}
						flexDirection='row'
					>

						<Box h='150px'  p='20px' bg='teal'  w={'full'} borderRadius={'15px'}
							display={'flex'}
							flexDirection='column'
							gap={2}
						>
							<FormikFindUser/>
						</Box>
					</Flex>
					<Divider color={'black'} w={'100%'} h='2px' bg={'black'} />
					{propsFindUser.props.name !='' &&
							<StripUser props={propsFindUser.props}/>
					}
					<Divider color={'black'} w={'100%'} h='2px' bg={'black'} />
					<Text marginBlock='20px' textAlign={'center'} color='black' fontSize='xl' fontWeight='black' w='100%'>
								Todos os Dados
					</Text>
					<Divider color={'black'} w={'100%'} h='2px' bg={'black'} />
					<Box w='100%' h='500px' overflow="scroll">
						{propsFindUser.props !=null &&
						<>
							<Text marginBlock='20px' textAlign={'center'} color='black' fontSize='xl' fontWeight='black' w='100%'>
								Tabela de Transferencias
							</Text>
							<TableTransfer prop={usePropsTableTransfer.prop}/>
						</>}
					</Box>
					<Divider color={'black'} w={'100%'} h='2px' bg={'black'} />
					<Box w='100%' h='500px' overflow="scroll">
						{propsFindUser.props !=null &&
							<>
								<Text marginBlock='20px' textAlign={'center'} color='black' fontSize='xl' fontWeight='black' w='100%'>
									Tabela de Cycles
								</Text>
								<TableCycle prop={usePropsTableCycle.prop}/>
							</>
						}
					</Box>
				</Box>
			</Flex>
			}
			<PopMsg
				nameButton={'OK'} title={titleShow} msg={errorMsg}
				display={popShow} hide={()=>{setPopShow.off();popFunction;}}
			/>
		</>
	);
};





interface typeBlock{
	action?:string
	value?:number
	state:string
	hash?:string
	createdAt?:string
	updatedAt?:string
	wallet?:string
	userId?:string
	user_name?:string
	user_wallet?:string
	id:number
	email?: string;
};


const TableMoth = () => {

	const allMothGraph = useAllMonthlyProfitQuery();
	const dataMoth = allMothGraph.data?.allMonthlyProfit;
	return (
		<Box
			overflowY="auto"

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
						<Th>Finish Moth</Th>
						<Th>% Profit</Th>
					</Tr>
				</Thead>
				<Tbody>
					{	(dataMoth!=null &&  dataMoth!=undefined )&&
						dataMoth.map( (compose) =>{

							let color = 'black';

							return(
								<Tr color={color} key={compose.id}>
									<Td textColor={color}>{compose.id}</Td>
									<Td textColor={color}>{compose.finishDate}</Td>
									<Td textColor={color}>{(compose.profit ?? 0)/100 ?? 0}%</Td>
								</Tr>
							);}
						)
					}
				</Tbody>

			</Table>
		</Box>
	);
};

const calculator= (beginDate:Date|null,finishDate:Date|null| undefined, valueUSD:string|null) => {

	if(beginDate == null ||finishDate == null||finishDate == undefined  || valueUSD == null){

		return '$0.00';

	}else{

		const percenterProfit = 0.04;

		let valuePrice = Number(valueUSD.replace(/[\$]|[,]/g,''));
		let valueStart = Number(valueUSD.replace(/[\$]|[,]/g,''));

		let  startDate = beginDate;

		while( startDate <= finishDate ) {
			const dayMoth = daysInMonth(startDate.getMonth(),startDate.getFullYear());

			if(startDate.getMonth() == finishDate.getMonth() && startDate.getFullYear() == finishDate.getFullYear() &&
				beginDate.getMonth() == finishDate.getMonth() && beginDate.getFullYear() == finishDate.getFullYear()){

				valuePrice += valuePrice * (((dayMoth - beginDate.getDate())+(finishDate.getDate() - dayMoth)) * (percenterProfit /dayMoth));

			}
			else if(startDate == beginDate){
				valuePrice += valuePrice * (dayMoth - beginDate.getDate())* (percenterProfit /dayMoth);
			}
			else if(startDate.getMonth() == finishDate.getMonth() && startDate.getFullYear() == finishDate.getFullYear()){
				console.log('a');
				valuePrice += valuePrice * (dayMoth - finishDate.getDate())* (percenterProfit /dayMoth);
			}else{
				valuePrice += valuePrice * percenterProfit ;
			}
			startDate = addMonths(new Date(startDate), 1);

		}

		valuePrice -= valueStart;
		const fm = new FormatMoney({ symbol: '$',decimals: 2 });
		return fm.from(valuePrice);

	}
};

interface Props{
	value?: string
	onClick?:MouseEventHandler
	placeholder?:Date|undefined
}

const CalenderCustomInput:FC<Props> = ({ placeholder ,value, onClick }) => (

	<Input
		w='125px'
		id='calender-input'
		type='text'
		value={value}
		onClick={onClick}
		colorScheme='transparent'
		color='black'
		alignItems='center'
		bg='white'
		borderRadius={10}
		borderColor='blackAlpha.500'
		name='finishDate'
	/>

);




const StripUser =({props}:stripType )=>(
	<Flex flexDirection={'column'} gap={5} w='100%'  m={'10px'} p={'25px'} borderRadius='25px'>
		<Box  display={'flex'} flexDirection='column' gap={2} borderRadius='25px'  p={'20px'} boxShadow={'lg'} bg={'gray.400'}>
			<Text fontWeight={'bold'} fontSize={'lg'}>Usuário</Text>
			<Flex  gap={5} w='100%' justifyContent={'space-around'}>
				<Text>Nome:{props.name}</Text>
				<Text>Email:{props.email}</Text>
			</Flex>
			<Divider />
			<Flex    gap={5} w='100%' justifyContent={'space-around'} >
				<Text>Wallet:{props.wallet}</Text>
				<Text>Document:{props.document}</Text>
			</Flex>
		</Box>

		<Box display={'flex'} flexDirection='column' gap={2} borderRadius='25px'  p={'20px'} boxShadow={'lg'} bg={'gray.400'}>
			<Text fontWeight={'bold'} fontSize={'lg'}>Tranaferências</Text>
			<Flex  gap={5} w='100%' justifyContent={'space-around'}>
				<Text>Q\Deposit:{props.qDeposit}</Text>
				<Text>Valor Deposit:{props.allDeposit}</Text>
			</Flex>
			<Divider />
			<Flex    gap={5} w='100%' justifyContent={'space-around'} >
				<Text>Q\Withdraw:{props.qWithdraw}</Text>
				<Text>Valor Withdraw:{props.allWithdraw}</Text>
			</Flex>
			<Divider />
			<Flex    gap={5} w='100%' justifyContent={'space-around'} >
				<Text>Q\Invest:{props.qInvest}</Text>
				<Text>Valor Invest:{props.allInvest}</Text>
			</Flex>
			<Divider />
			<Flex    gap={5} w='100%' justifyContent={'space-around'} >
				<Text>Q\Complete Invest:{props.qCompleteInvest}</Text>
				<Text>Valor Complete Invest:{props.allCompleteInvest}</Text>
			</Flex>
		</Box>


		<Box display={'flex'} flexDirection='column' gap={2} borderRadius='25px'  p={'20px'} boxShadow={'lg'} bg={'gray.400'}>
			<Text fontWeight={'bold'} fontSize={'lg'}>Cycle</Text>
			<Flex    gap={5} w='100%' justifyContent={'space-around'} >
				<Text>Q\Cycle Process:{props.qCycleProcess}</Text>
				<Text>Valor Cycle Process:{props.allCycleProcess}</Text>
			</Flex>
			<Divider />
			<Flex    gap={5} w='100%' justifyContent={'space-around'} >
				<Text>Q\Cycle Complete:{props.qCycleComplete}</Text>
				<Text>Valor Cycle Complete:{props.allCycleComplete}</Text>
			</Flex>
			<Divider />
			<Flex    gap={5} w='100%' justifyContent={'space-around'} >
				<Text>Q\Cycle Active:{props.qCycleActive}</Text>
				<Text>Valor Cycle Active:{props.allCycleActive}</Text>
			</Flex>
			<Divider />
			<Flex    gap={5} w='100%' justifyContent={'space-around'} >
				<Text  fontWeight={'bold'} fontSize={'lg'}>Cash:{props.cash}</Text>
			</Flex>
		</Box>

	</Flex>
);

const TableTransactionUser =()=>{

};

const TableCycleUser =()=>{

};