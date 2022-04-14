import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Router from 'next/router';
import styles from '../styles/Home.module.css';
import {useEffect} from 'react';



const Home = () => {
	useEffect(()=>{Router.push('/admin/login');},[]);
	
	return (<></>);
};

export default Home;
