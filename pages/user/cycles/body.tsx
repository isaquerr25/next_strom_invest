import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Icon, Image, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Spinner, Text, useBoolean } from '@chakra-ui/react';
import { addDays, addMonths } from 'date-fns';
import { Field,  Form, Formik } from 'formik';
import Router from 'next/router';
import React, { FC, forwardRef, MouseEventHandler, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { GiWallet } from 'react-icons/gi';
import { IoWalletOutline } from 'react-icons/io5';
import FormInput from '../../../components/utils/formInput';
import { Loading } from '../../../components/utils/loading';
import { PopMsg } from '../../../components/utils/PopMsg';
import {validateUSD,validateEmail} from '../../../components/utils/validateInputs';
import { useCreateCycleMutation, useUserInfoDocumentQuery } from '../../generated/graphql';
import { daysInMonth } from './utils';
import { FormatMoney } from 'format-money-js';
import { BsCashCoin } from 'react-icons/bs';
import { ForexRow } from '../forextoRow';
import { convertMoney } from '../../../components/utils/convertMoney';

export const BodyCycle= () =>{

	/* -------------------------------------------------------------------------- */
	/*         NOTE Create table near like that ../../components/image/ta         */
	/* -------------------------------------------------------------------------- */

	const userInfoGraph   = useUserInfoDocumentQuery();
	const dataUser =  userInfoGraph.data?.userInfoDocument;

	useEffect(()=>{
		if (dataUser?.name! == undefined && userInfoGraph.loading == false){
			Router.push('/home/login');
			console.log(dataUser?.name!	);
		}
	},[userInfoGraph.loading]);


	return(

		<Flex

			flexWrap={'wrap'}
			justifyContent={'center'}
			gap={2}
			p={2}
		>
			
			{userInfoGraph.loading && <Loading/>}
			{dataUser &&
			<>
				<Flex
					boxShadow='xl'
					width={{base:'full',md:'65%'}}
					minW={'200px'}

					flexDirection="column"
					gap={5}
					bg='black'
					borderRadius={10}
					paddingInline={'15px'}
					paddingBlock={'15px'}
				>
					<Text color='teal' fontSize={'2xl'}>
						Create Cycle Invest
					</Text>
					<Text color='teal'>
					All fields below are mandatory
					</Text>



					<Box>
						<Flex alignItems={'center'} gap={1}>
							<Text color='teal'>Trading Amount:</Text>
							<Text color='green.300' fontSize={'xl'}>{convertMoney(dataUser.valuePrice/100)}</Text>
						</Flex>
						<FormikInputs/>
					</Box>

				</Flex>



				<Flex
					boxShadow='xl'
					flexDirection={'column'}
					w='auto'
					bg='black'
					borderRadius={10}
					minW={'275px'}
					p={5}

					gap={5}
					flex={1}
				>
					<DescriptionAndRestriction/>

				</Flex>
			</>
			}
		</Flex>

	);
};

function FormikInputs() {

	type typesCycle = {
		value:''
		beginDate:Date
		finishDateInput:Date
	}
	const [cycleGraphql, ] = useCreateCycleMutation();
	const [finishDate, setFinishDate] = useState<Date|null>();

	const [errorMsg, setErrorMsg] = useState('');
	const [popShow, setPopShow] = useBoolean(false);
	const [titleShow, setTitleShow] = useState('Error');

	const [popFunction, setPopFunction] = useState<()=>void>();
	const [popNameButton, setPopNameButton] = useState<string|null>();
	const [cycleGraph, setCycleGraph] = useState<typesCycle>({

		value:'',
		beginDate:(addDays(new Date(),+1)),
		finishDateInput:(addDays(new Date(),+15)),
	});

	return (
		<>
			<Formik
				initialValues={cycleGraph}
				onSubmit={async (values: typesCycle, { setSubmitting, setErrors }) => {
					setSubmitting(true);
					const valuePrice = Number(values.value.replace(/[\$]|[,]/g,''));

					if(valuePrice >= 5000){
						const result = await cycleGraphql({variables:{

							valueUSD: valuePrice,
							beginDate: values.beginDate,
							finishDate: finishDate

						}});
						setSubmitting(false);
						const errors = result.data?.createCycle[0];

						if (errors?.message=='success') {
							setErrorMsg('File sent for process');
							setTitleShow('Success');
							setPopShow.on();
						} else {
							setErrorMsg(errors?.message  ?? '');
							setTitleShow('Error');
							setPopShow.on();
						}

					}else{
						setErrorMsg('Value under 50 dollars');
						setTitleShow('Error');
						setPopShow.on();
					}
				}}
			>
				{({ values,isSubmitting })  => (
					<Form  >
						<Flex flexDirection={'column'} gap={3}>

							<Box>
								<Text color='teal'>Amount</Text>
								<FormInput type="number" placeholder='0' name="value" inputIcon={IoWalletOutline} />
							</Box>
							<Flex h={'100px'} gap={3}>
								<Box>
									<Text  color='teal' htmlFor='datePicker'>Date Close Cycle</Text>
									<DatePicker
										wrapperClassName="datePicker"
										name='finishDateInput'
										selected={finishDate}
										onChange={(date) => setFinishDate(date)}
										minDate={addDays(new Date(),+15)}
										maxDate={addMonths(new Date(), 12)}
										withPortal
										customInput={<CalenderCustomInput />}
									/>
								</Box>
								<Box height={'100%'} alignItems='center' justifyContent={'center'}>
									<Text color='teal' fontSize={'lg'} >Profit Finish Cycle:</Text>

									<Text color='teal' display={'flex'} alignItems='center'  h={'50px'} fontSize={'xl'} >{calculator(values.beginDate,finishDate,values.value)}</Text>

								</Box>
							</Flex>
							<Flex justifyContent={'space-between'} gap={1}>
								<Button
									variant='outline'
									colorScheme='teal'
									w={{Base:'50%',sm:'70%'}}
									onClick={()=>{console.log('das');}}
									type="submit"
									leftIcon={isSubmitting ? <Spinner /> : <Icon as={GiWallet} />}
									disabled={isSubmitting}
								>
								Cycle Invest
								</Button>
								<Button
									variant='outline'
									colorScheme='orange'
									
									onClick={()=>{Router.push('/user/cycles/process');}}
									type="button"
									leftIcon={<Icon as={BsCashCoin} />}
								>
									<Text fontSize={'12px'}>
										See all Cycles in Process
									</Text>
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
}

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







const DescriptionAndRestriction = () =>(
	<>
		<Text fontSize={'xl'} color='teal'>
			Important Information
		</Text>
		<Text  color='teal'>
			Please fill in the required fields below
		</Text>
		<Text color='teal'>
			Minimum in account is 50 USD
		</Text>
		<Text color='teal'>
			To make a new investment cycle, the money must already be in account
		</Text>
		<Text color='teal'>
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
}
const CalenderCustomInput:FC<Props> = ({ value, onClick }) => (

	<Input
		w='125px'
		id='calender-input'
		type='text'
		value={value}
		placeholder='00/00/0000'
		onClick={onClick}
		colorScheme='transparent'
		color='white'
		alignItems='center'
		bg='black'
		borderRadius={10}
		borderColor='teal.500'
		
	/>

);
