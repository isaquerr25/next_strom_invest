import {FooterModify} from '../../components/utils/footerModify';
import { HeaderMod } from '../../components/utils/headerTitle';
import {Nav} from '../../components/utils/navigate';
import TopBody from './bodyStepOne';
import SplitWithImage from './features';
import BasicStatistics from './statistics';
import {GridBlurredBackdrop} from './testimonials';
import {Contact} from './contact';
import {Graphic} from './graphicDev';

const home = () =>{
	return(
		<>
			<HeaderMod title='Home' />
			<Nav/>
			<TopBody/>
			<SplitWithImage/>
			<Graphic/>
			<GridBlurredBackdrop/>
			<BasicStatistics/>
			<Contact/>
			<FooterModify/>
		</>
	);
};

export default home;