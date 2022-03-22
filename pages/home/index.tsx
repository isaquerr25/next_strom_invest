import FooterModify from '../utils/footerModify';
import { HeaderMod } from '../utils/headerTitle';
import WithSubnavigation from '../utils/navigate';
import TopBody from './bodyStepOne';
import SplitWithImage from './features';
import BasicStatistics from './statistics';
import TestimonialCard from './testimonials';
import Contact from './contact';
import {Graphic} from './graphicDev';

const home = () =>{
	return(
		<>
			<HeaderMod title='Home' />
			<WithSubnavigation/>
			<TopBody/>
			<SplitWithImage/>
			<Graphic/>
			<TestimonialCard/>
			<BasicStatistics/>
			<Contact/>
			<FooterModify/>
		</>
	);
};

export default home;