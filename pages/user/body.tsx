import { Box, Button, Flex, Text } from '@chakra-ui/react';

export const BodySetOne = () =>{
	return(
		<>
			<Flex
				alignItems={'center'}
				justifyContent={'center'}
			>
				<Box>
					<Flex
						alignItems={'center'}
						justifyContent={'center'}
						width={'100%'}
						display='inline-flex'
						flexWrap={'wrap'}
						gap={2}

					>
						<Block
							title={'Balance'}
							value={'$98789,57'}
							subTitle={ () =>(
								<Button
									size='md'
									pt={4}
									pb={4}
									pr={8}
									pl={8}
									borderRadius={10}
									bg='#358960'
								>
									Deposit
								</Button>)
							}
						/>
					</Flex>
				</Box>
				<Box>
				</Box>
			</Flex>
		</>
	);
};

interface typeBlock{
	value:string
	title:string
	subTitle: () => JSX.Element
};

const Block = ({value,title,subTitle}:typeBlock) =>(

	<Flex
		direction={'column'}
		align={'center'}
		pt={2}
		pb={2}
		pr={75}
		pl={75}
		bg='#1e4cff'
		borderRadius={5}
	>
		<Text color='white' fontSize='2xl' fontWeight='black' >
			{title}
		</Text>
		<Text color='white' fontSize='4xl' fontWeight='black'>
			{value}
		</Text>
		{subTitle}

	</Flex>
);