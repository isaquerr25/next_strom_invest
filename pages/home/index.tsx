import {FooterModify} from '../../components/utils/footerModify';
import { HeaderMod } from '../../components/utils/headerTitle';
import {Nav} from '../../components/utils/navigate';
import TopBody from '../../components/pageComponents/home/_bodyStepOne';
import SplitWithImage from '../../components/pageComponents/home/_features';
import {BasicStatistics} from '../../components/pageComponents/home/_statistics';
import {GridBlurredBackdrop} from '../../components/pageComponents/home/_testimonials';
import {Contact} from '../../components/pageComponents/home/_contact';
import {Graphic} from '../../components/pageComponents/home/_graphicDev';
import Layout from '../../components/utils/layout';

const home = () =>{
	return(
		
		<Layout title={'Home'} navType={'home'} displayFooter={true}>
			<TopBody />
			<SplitWithImage/>
			<Graphic/>
			<GridBlurredBackdrop/>
			<BasicStatistics/>
			<Contact/>
		</Layout>
			
		
	);
};

export default home;