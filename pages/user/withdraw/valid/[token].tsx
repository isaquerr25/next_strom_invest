import { useRouter } from 'next/router';
import { useValidWithdrawMutation } from '../../../generated/graphql';
import {useEffect, useState} from 'react';
import { Loading } from '../../../../components/utils/loading';
import { PopMsg } from '../../../../components/utils/PopMsg';
import { useBoolean } from '@chakra-ui/react';
import Router from 'next/router';


// const TokenWithdrawConfirms = () =>{

//  	const [errorMsg, setErrorMsg] = useState('');
// 	const [popShow, setPopShow] = useBoolean(false);
// 	const [titleShow, setTitleShow] = useState('Error');


// 	const [UseValidWithdraw,] = useValidWithdrawMutation();
// 	const router = useRouter();
// 	console.log(router.query);
// 	console.log(router.query.token);
// 	useEffect( ()=>{
	
// 		async function fetchData() {

// 			const newToken:any = new String( router.query.token);
// 			console.log(router.query);
// 			const result = await UseValidWithdraw({variables:{token:newToken}});
// 			const errors = result.data?.validWithdraw;
// 			if (errors?.field=='success') {
// 				setErrorMsg('Withdrawal confirmed and sent to our billing team to be processed.');
// 				setTitleShow('Success');
// 				setPopShow.on();
// 			} else {
// 				setErrorMsg(errors?.message  ?? '');
// 				setTitleShow('Error');
// 				setPopShow.on();
// 			}
// 		}
// 		fetchData();
// 	},[router.query.token]);



// 	return (
// 		<>
// 			{errorMsg=='' && <Loading/>}
// 			<PopMsg title={titleShow} msg={errorMsg} display={popShow} hide={()=>{Router.push('/user');}}/>
// 		</>
  
// 	);
  
// };



const Post = () => {
	const router = useRouter();
	const { token } = router.query;
	const [errorMsg, setErrorMsg] = useState('');
	const [popShow, setPopShow] = useBoolean(false);
	const [titleShow, setTitleShow] = useState('Error');


	const [UseValidWithdraw,] = useValidWithdrawMutation();



	useEffect( ()=>{
	
		async function fetchData() {

			const newToken:any = new String(token);
			console.log(token);
			console.log(newToken);

			const result = await UseValidWithdraw({variables:{token:token}});
			const errors = result.data?.validWithdraw;
			if (errors?.field=='success') {
				setErrorMsg('Withdrawal confirmed and sent to our billing team to be processed.');
				setTitleShow('Success');
				setPopShow.on();
			} else {
				setErrorMsg(errors?.message  ?? '');
				setTitleShow('Error');
				setPopShow.on();
			}
		}
		if(token != undefined){
			fetchData();
		}
	},[token]);

	return (
		<>
			{errorMsg=='' && <Loading/>}
			<PopMsg title={titleShow} msg={errorMsg} display={popShow} hide={()=>{Router.push('/user');}}/>
		</>

	);
};


export default Post;