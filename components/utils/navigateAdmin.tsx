import {
	Box,
	Flex,
	Text,
	IconButton,
	Button,
	Stack,
	Collapse,
	Icon,
	Link,
	Popover,
	PopoverTrigger,
	PopoverContent,
	useColorModeValue,
	useBreakpointValue,
	useDisclosure,
	Image,
} from '@chakra-ui/react';
import {
	HamburgerIcon,
	CloseIcon,
	ChevronDownIcon,
	ChevronRightIcon,
} from '@chakra-ui/icons';

import {
	FiHome,
	FiTrendingUp,
	FiCompass,
	FiStar,
	FiSettings,
	FiMenu,
	FiBox,
	FiLogOut,
	FiChevronDown,
	FiBell,
} from 'react-icons/fi';
import {
	FaMoneyBill,
	FaBitcoin,
	FaChartLine,
	FaUserAlt,
	FaCompass,
	FaVoteYea,
	FaStreetView
} from 'react-icons/fa';
import { IconType } from 'react-icons';
import { ReactText } from 'react';



interface NavItem {
	label: string;
	subLabel?: string;
	children?: Array<NavItem>;
	href?: string;
	icon?: IconType;
}
import { useLogoutMutation } from '../generated/graphql';
import { roundToNearestMinutes } from 'date-fns';
import Router from 'next/router';
import { GrDocumentUser } from 'react-icons/gr';
import { GiMammoth } from 'react-icons/gi';
import { MdOutlineEmail } from 'react-icons/md';
const NAV_ITEMS: Array<NavItem> = [
	{ href: '/admin/user' , label: 'Home', icon: FiHome },
	{ href: '/admin/user/planilha' , label: 'Planilhas', icon: FaMoneyBill },
	{ href: '/admin/user/cycles' , label: 'Validate Cycles', icon: FaCompass },
	{ href: '/admin/user/document' , label: 'Validate Document', icon: GrDocumentUser },
	{ href: '/admin/user/withdraw' , label: 'Requests Withdraw', icon: FaVoteYea },
	{ href: '/admin/user/moth' , label: 'Moth Profit', icon: GiMammoth },
	{ href: '/admin/user/alone' , label: 'Info User', icon: FaStreetView },
	{ href: '/admin/user/email' , label: 'Emails', icon: MdOutlineEmail },
];




export function NavLogin() {
	const { isOpen, onToggle } = useDisclosure();
	const [Logout,] = useLogoutMutation();
 	return (
		<Box>
			<Flex
				bg={useColorModeValue('white', 'gray.800')}
				color={useColorModeValue('gray.600', 'white')}
				minH={'60px'}
				py={{ base: 2 }}
				px={{ base: 4 }}
				borderBottom={1}
				borderStyle={'solid'}
				borderColor={useColorModeValue('gray.200', 'gray.900')}
				align={'center'}>
				<Flex
					flex={{ base: 1, md: 'auto' }}
					ml={{ base: -2 }}
					display={{ base: 'flex', md: 'none' }}>
					<IconButton
						onClick={onToggle}
						icon={
							isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
						}
						variant={'ghost'}
						aria-label={'Toggle Navigation'}
					/>
				</Flex>
				<Flex	 flex={{ base: 1 }}  justify={{ base: 'center', md: 'start' }}>
					{/* <Text
						textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
						fontFamily={'heading'}
						color={useColorModeValue('gray.800', 'white')}>
						Logo
					</Text> */}
					<Image
						width={'150px'}
						minWidth={'150px'}
						minHeight={'55px'}
						src='./logo.png'
						alt='Tempest Invest'
					/>
					<Flex display={{ base: 'none', md: 'flex' }} ml={10}>
						<DesktopNav />
					</Flex>
				</Flex>
				<Stack
					flex={{ base: 1, md: 0 }}
					justify={'flex-end'}
					direction={'row'}
					spacing={6}>
					<Button
						as={'a'}
						fontSize={'sm'}
						fontWeight={400}
						variant={'link'}
						onClick={()=>{Logout;Router.push('/home');}}
						paddingBlock={3}
						bg='red'
						borderRadius={50}
						color='white'
						cursor={'pointer'}
					>

						<Icon
							
							mr="1"
							fontSize="16"
							_groupHover={{
								color: 'white',
							}}
							as={FiLogOut}
						/>
					</Button>
				</Stack>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
		</Box>
	);
}

const DesktopNav = () => {
	const linkColor = useColorModeValue('gray.600', 'gray.200');
	const linkHoverColor = useColorModeValue('gray.800', 'white');
	const popoverContentBgColor = useColorModeValue('white', 'gray.800');

	return (
		<Stack direction={'row'} spacing={4}>
			{NAV_ITEMS.map((navItem) => (
				<Box key={navItem.label}>
					<Popover trigger={'hover'} placement={'bottom-start'}>
						<PopoverTrigger>
							<Link
								display={'inline-flex'}
								p={2}
								href={navItem.href ?? '#'}
								fontSize={'sm'}
								fontWeight={500}
								color={linkColor}
								_hover={{
									textDecoration: 'none',
									color: linkHoverColor,
								}}>
								{navItem.icon && (
									<Icon
										mr="1"
										fontSize="16"
										_groupHover={{
											color: 'white',
										}}
										as={navItem.icon}
									/>
								)}
								 {navItem.label }
							</Link>
						</PopoverTrigger>

						{navItem.children && (
							<PopoverContent
								border={0}
								boxShadow={'xl'}
								bg={popoverContentBgColor}
								p={4}
								rounded={'xl'}
								minW={'sm'}>
								<Stack>
									{navItem.children.map((child) => (
										<DesktopSubNav key={child.label} {...child} />
									))}
								</Stack>
							</PopoverContent>
						)}
					</Popover>
				</Box>
			))}
		</Stack>
	);
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
	return (
		<Link
			href={href}
			role={'group'}
			display={'block'}
			p={2}
			rounded={'md'}
			_hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
			<Stack direction={'row'} align={'center'}>
				<Box>
					<Text
						transition={'all .3s ease'}
						_groupHover={{ color: 'blue.400' }}
						fontWeight={500}>
						{label}
					</Text>
					<Text fontSize={'sm'}>{subLabel}</Text>
				</Box>
				<Flex
					transition={'all .3s ease'}
					transform={'translateX(-10px)'}
					opacity={0}
					_groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
					justify={'flex-end'}
					align={'center'}
					flex={1}>
					<Icon color={'blue.400'} w={5} h={5} as={ChevronRightIcon} />
				</Flex>
			</Stack>
		</Link>
	);
};

const MobileNav = () => {
	return (
		<Stack
			bg={useColorModeValue('white', 'gray.800')}
			p={4}
			display={{ md: 'none' }}>
			{NAV_ITEMS.map((navItem) => (
				<MobileNavItem key={navItem.label} {...navItem} />
			))}
		</Stack>
	);
};

const MobileNavItem = ({ label, children, href,icon }: NavItem) => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Stack spacing={4} onClick={children && onToggle}>
			<Flex
				py={7}
				as={Link}
				href={href ?? '#'}
				justify={'space-between'}
				align={'center'}
				_hover={{
					textDecoration: 'none',
				}}>
				<Text
					fontWeight={600}
					color={useColorModeValue('gray.600', 'gray.200')}>
					{icon && (
						<Icon
							mr="1"
							fontSize="16"
							_groupHover={{
								color: 'white',
							}}
							as={icon}
						/>
					)}
					{' '+label }
				</Text>
				{children && (
					<Icon
						as={ChevronDownIcon}
						transition={'all .25s ease-in-out'}
						transform={isOpen ? 'rotate(180deg)' : ''}
						w={6}
						h={6}
					/>
				)}
			</Flex>

			<Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
				<Stack
					mt={2}
					pl={4}
					borderLeft={1}
					borderStyle={'solid'}
					borderColor={useColorModeValue('gray.200', 'gray.700')}
					align={'start'}>
					{children &&
						children.map((child) => (
							<Link key={child.label} py={2} href={child.href}>
								{child.label}
							</Link>
						))}
				</Stack>
			</Collapse>
		</Stack>
	);
};
