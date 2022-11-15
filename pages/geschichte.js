import React from 'react';
import dynamic from 'next/dynamic'
import Head from "next/head";

const TimelineSlider = dynamic(
    () => import('../components/MyTEST44'),
    { loading: () => <p className='text-red-600  text-center text-[3rem]'>Daten werden geladen</p>, ssr: false }
);

export default function Index() {
    return (
        <div>
            <Head>
                <title>Test</title>
                <link href="/html9/css/jquery.timeline.css" rel="stylesheet" type="text/css" key="test"/>
		
            </Head>
            <TimelineSlider/>
        </div>
    );
}