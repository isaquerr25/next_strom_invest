import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Icon, ModalFooter, Button, Text } from '@chakra-ui/react';
import { VscError } from 'react-icons/vsc';
import { GrValidate } from 'react-icons/gr';
import { BsBasket, BsPatchQuestion } from 'react-icons/bs';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { FaRegCheckCircle } from 'react-icons/fa';

interface typePopup {
  display: boolean;
  hide: () => void;
  title: string;
  msg: string;
  nameButton?: string|null;
}

export function PopMsg({title,msg,display,hide,nameButton}:typePopup) {



	return (
		<>
			<Modal  onClose={hide} isOpen={display} isCentered>
				<ModalOverlay />
				<ModalContent 
					borderColor={'teal'}
					style={{border: '4px solid teal'}} 
					bg={'black'}
					color={'teal'}
				>
					<ModalHeader>{title}</ModalHeader>
					<ModalCloseButton />
					<ModalBody display={'flex'} flexDirection='column' minH={'100px'} gap={5} width='100%' justifyContent='center' alignItems={'center'}>
						{title==='Success' && <Icon alignItems={'center'}  boxSize={'20'} as={FaRegCheckCircle} color='green' stroke='green' />}
						{title==='Payment' && <Icon alignItems={'center'}  boxSize={'20'} as={BsBasket} color='teal.500'  stroke='teal.500' />}
						{(title!='Success' && title!='Payment')  && <Icon alignItems={'center'}  boxSize={'20'} as={VscError} color='red' stroke='red' />}
						<Text fontWeight={'bold'}>
							{msg}
						</Text>
					</ModalBody>
					<ModalFooter  display={'flex'} flexDirection='column'  justifyContent='center' alignItems={'center'}>
						<Button   colorScheme='teal' variant='outline' onClick={hide}>{nameButton ?? 'Close'}</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}