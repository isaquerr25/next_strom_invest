import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Icon, ModalFooter, Button, Text } from '@chakra-ui/react';
import { VscError } from 'react-icons/vsc';
import { GrValidate } from 'react-icons/gr';
import { BsBasket, BsPatchQuestion } from 'react-icons/bs';

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
				<ModalContent>
					<ModalHeader>{title}</ModalHeader>
					<ModalCloseButton />
					<ModalBody display={'flex'} flexDirection='column' minH={'100px'} gap={5} width='100%' justifyContent='center' alignItems={'center'}>
						{title==='Success' && <Icon alignItems={'center'}  boxSize={'20'} as={GrValidate} color='green' />}
						{title==='Payment' && <Icon alignItems={'center'}  boxSize={'20'} as={BsBasket} color='teal.500' />}
						{(title!='Success' && title!='Payment')  && <Icon alignItems={'center'}  boxSize={'20'} as={VscError} color='red' />}
						<Text>
							{msg}
						</Text>
					</ModalBody>
					<ModalFooter  display={'flex'} flexDirection='column'  justifyContent='center' alignItems={'center'}>
						<Button onClick={hide}>{nameButton ?? 'Close'}</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}