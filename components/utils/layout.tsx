import Head from 'next/head';
import React from 'react';
import { FooterModify } from './footerModify';
import { HeaderMod } from './headerTitle';
import { Nav as NavHome } from './navigate';
import { NavLogin as NavAdm } from './navigateAdmin';
import { NavLogin as NavLogin} from './navigateLogin';
import  logo from './logo_median.png';

interface TypeLayout{
  title:string
  navType:'home'|'user'|'admin'
  displayFooter:boolean
}

const Layout:React.FC<TypeLayout> = ({title,navType,displayFooter,children}) =>{
	return(
		<>
			<Head>
				<link  rel="icon" type="image/png" href="/favicon/logo_median.png" />
			</Head>
			<HeaderMod title={title} />
			{navType=='home' && <NavHome/>}
			{navType=='admin' && <NavAdm/>}
			{navType=='user' && <NavLogin/>}
			{children}
		  {displayFooter &&	<FooterModify/>}
		</>
	);
};

export default Layout;