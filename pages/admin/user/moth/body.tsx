import { Box, Button,
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
	useCreateMonthlyProfitMutation
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


export const BodySetOne = () =>{
	const [idMonthlyValue,SetidMonthlyValue] = useState({
		id:0,
		profit:0,
		finishDate:new Date()
	});

	const [UseGetTypeTransaction,] = useGetTypeTransactionMutation();
	const [UseUpdateMonthlyProfit,] = useUpdateMonthlyProfitMutation();

	const staffInfoGraph   = useActiveStartStaffQuery();

	const [propsFind,UsePropsFind] = useState({
		id:0,
		profit:0,
		finishDate:new Date()
	});
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


	useEffect(()=>{
		console.log('propsFind ',propsFind);
		setFinishDate(propsFind.finishDate);

	},[propsFind]);


	const FormikFindMoth = () => {

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
						const result = await UpdateMonthGraphql({variables:{
							id: Number(values.id),
						}});
						setSubmitting(false);
						const errors = result.data?.idMonthlyProfit;

						if (errors != null) {
							setErrorMsg('Mes Encontrado');
							setTitleShow('Success');
							setPopShow.on();
							console.log(errors);
							UsePropsFind({
								id:errors.id,
								profit:Number(errors.profit)/100,
								finishDate: new Date(errors.finishDate)
							});


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



	const FormikInputs =() => {
		type typesCycle = {
			id:string|number
			profit:string|number
			finishDate:Date
		}
		
		
		return (
			<>
				<Formik
					initialValues={propsFind}
					onSubmit={async (values: typesCycle, { setSubmitting, setErrors }) => {
						setSubmitting(true);
						
						const result = await UseUpdateMonthlyProfit({variables:{
							id: Number(values.id),
							profit: Math.round(Number(values.profit)*100),
							finishDate: new Date(finishDate!)
						}});

						console.log(values);
						setSubmitting(false);
						const errors = result.data?.updateMonthlyProfit[0];
						console.log('errors');
						console.log(errors);
						if (errors?.message=='success') {
							setErrorMsg('File sent for process');
							setTitleShow('Success');
							setPopShow.on();
						} else {
							setErrorMsg(errors?.message  ?? '');
							setTitleShow('Error');
							setPopShow.on();
						}

					}}
				>

					{({ values,isSubmitting })  => (
						<Form  >
							<Flex flexDirection={'column'} gap={1} bg='teal' w='100%'>
								<Text w='100%'  textAlign={'center'} alignItems={'center'} fontSize={'lg'} fontWeight='bold'>
									Atualizar Lucro Do mês
								</Text>
								<Box display={'flex'} flexDirection={'column'} gap={2}>
									<Flex gap={2}>
										<Text>ID Mês: </Text>
										<Text> {propsFind.id}</Text>
									</Flex>
									<FormLabel>Lucro%:</FormLabel>
									<Text fontWeight={'bold'} color={'blackAlpha.500'} fontSize={'sm'}>Ex:4.5 = 4.5%</Text>
									<FormInput type="text" name="profit" inputIcon={IoWalletOutline} />
								</Box>
								<Flex h={'100px'} gap={3}>
									<Box>
										<FormLabel  htmlFor='finishDate'>Date Close Cycle</FormLabel>
										<DatePicker
											wrapperClassName="finishDate"
											name='finishDate'
											selected={finishDate}
											onChange={(date) => setFinishDate(date)}
											withPortal
											customInput={<CalenderCustomInput />}
										/>
									</Box>

								</Flex>
								<Flex justifyContent={'space-between'}>
									<Button
										w={'100%'}
										bg={'blue.400'}
										color={'white'}
										_hover={{
											bg: 'blue.500',
										}}
										onClick={()=>{console.log('das');}}
										type="submit"
										leftIcon={isSubmitting ? <Spinner /> : <Icon as={MdOutlineTipsAndUpdates} color='white'/>}
										disabled={isSubmitting}
									>
									Atualizar
									</Button>
								</Flex>
							</Flex>
						</Form>
					)}

				</Formik>
				<PopMsg
					nameButton={'popNameButton'} title={titleShow} msg={errorMsg}
					display={popShow} hide={()=>{setPopShow.off();popFunction;}}
				/>

			</>
		);
	};



	const FormikNewMoth =() => {

		type typesCycle = {
			priceMoth:string|number
			finishDate:Date
		}
		return (
			<>
				<Formik
					initialValues={{priceMoth:'',finishDate:new Date()}}
					onSubmit={async (values: typesCycle, { setSubmitting, setErrors }) => {
						setSubmitting(true);
						const result = await useCreateMonthly({variables:{
							profit: Math.round(Number(values.priceMoth)*100),
							finishDate: new Date(finishDate!)
						}});

						console.log(values);
						
						const errors = result.data?.createMonthlyProfit[0];
						console.log('errors');
						console.log(errors);
						if (errors?.message=='success') {
							setErrorMsg('File sent for process');
							setTitleShow('Success');
							setPopShow.on();
						} else {
							setErrorMsg(errors?.message  ?? '');
							setTitleShow('Error');
							setPopShow.on();
						}
						setSubmitting(false);
					}}
				>

					{({ values,isSubmitting })  => (
						<Form >
							<Flex justifyContent={'space-between'} flexDirection={'column'} bg='teal' h='415px' w='100%'>
								<Box  bg='teal' h='250px' display={'flex'} flexDirection='column' justifyContent={'space-between'}>
									<Text w='100%'  textAlign={'center'} alignItems={'center'} fontSize={'lg'} fontWeight='bold'>Adicionar nome Lucro do Mês</Text>
									<Box>
										<FormLabel>Lucro%:</FormLabel>
										<Text fontWeight={'bold'} color={'blackAlpha.500'} fontSize={'sm'}>Ex:4.5 = 4.5%</Text>
										<FormInput type="text" name="priceMoth" inputIcon={IoWalletOutline} />
									</Box>
									<Flex h={'100px'} gap={3}>
										<Box>
											<FormLabel  htmlFor='finishDate'>Data De fechamento do Ciclo</FormLabel>
											<DatePicker
												wrapperClassName="finishDate"
												name='finishDate'
												selected={finishDate}
												onChange={(date) => setFinishDate(date)}
												withPortal
												customInput={<CalenderCustomInput />}
											/>
										</Box>

									</Flex>
								</Box>
							
								<Flex justifyContent={'space-between'}>
									<Button
										mb={'10px'}
										w={'100%'}
										bg={'blue.400'}
										color={'white'}
										_hover={{
											bg: 'blue.500',
										}}
										onClick={()=>{console.log('das');}}
										type="submit"
										leftIcon={isSubmitting ? <Spinner /> : <Icon as={BsFillCalendarCheckFill} />}
										disabled={isSubmitting}
									>
									Criar Novo Lucro do Mês
									</Button>
								</Flex>
							</Flex>
						</Form>
					)}

				</Formik>
				<PopMsg
					nameButton={'popNameButton'} title={titleShow} msg={errorMsg}
					display={popShow} hide={()=>{setPopShow.off();popFunction;}}
				/>

			</>
		);
	};


	return(
		<>
			{(staffInfoGraph.loading)&& <Loading/>}
			{dataUser &&
			<Flex
				alignItems={'center'}
				justifyContent={'center'}
				flexDirection='column'
				width={'100%'}

			>

				<Box width={'100%'} p={'10px'}>
					<Flex
						justifyContent={'center'}
						width={'100%'}
						display='inline-flex'
						flexWrap={'wrap'}
						gap={2}
						alignItems={'flex-start'}
						flexDirection='row'
						
					>

					
						<Box h='450px' p='20px' bg='teal'  w={{md:'full',lg:'450px'}} borderRadius={'25px'} 
							display={'flex'}
							flexDirection='column'
							gap={2}
						>
							<FormikFindMoth/>
							<FormikInputs/>
						</Box>
						<Box p='20px' bg='teal' h='450px' w={{md:'full',lg:'350px'}} borderRadius={'25px'}>
							<FormikNewMoth/>
						</Box>
						
						



					</Flex>
					<Text marginBlock='20px' textAlign={'center'} color='black' fontSize='xl' fontWeight='black' w='100%'>
								Todos os Meses
					</Text>
					<TableMoth />
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
		const fm = new FormatMoney();
		return fm.from(valuePrice,{ symbol: '$',decimals: 2 });

	}
};


const DescriptionAndRestriction = () =>(
	<>
		<Text fontSize={'xl'}>
			Important Information
		</Text>
		<Text >
			Please fill in the required fields below
		</Text>
		<Text>
			Minimum in account is 50 USD
		</Text>
		<Text>
			To make a new investment cycle, the money must already be in account
		</Text>
		<Text>
			* After the end of each cycle, the money will return to your account
			with the additional profit generated over time. <br/>
			* The forecast value is an approximation of how much profit you will receive.
			Since it will only be counted at the end of the cycle.<br/>
			* Minimum time per cycle is 15 days.<br/>
			* the actual start date starts from the activation of the cycle.
		</Text>
	</>

);

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
