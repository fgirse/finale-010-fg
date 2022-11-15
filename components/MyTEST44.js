import { findDOMNode } from "react-dom";
import React from 'react';
import { useEffect } from 'react';
import Head from 'next/head';

import Script from 'next/Script'
import jQuery from 'jquery';
import $ from 'jquery';
import '../components/loader';


export default function MyTEST44(){
  useEffect(() => {

    <>
       {/* SCRIPTS */}
<Script src="/html9/js/jquery/jquery-2.2.2.min.js" strategy="lazyOnload"></Script>

<Script src="/html9/js/vendors/vendors.js" strategy="lazyOnload"></Script>
<Script src="/html9/js/jquery.timeline.js" strategy="lazyOnload"></Script>

    
        // START THE TIMELINE


      
window.jQuery = require('../public/html9/js/jquery/jquery-2.2.2.min');
window.Timeline = require('../public/html9/js/jquery.timeline.js');
window.Vendors = require('../public/html9/js/vendors/vendors.js');


window.jQuery("#mytimeline").timelineSlider({





    });
  
        
    
    
    
        
      </>
    }, []);
return(
<>

<Head>

		{/* METAS */}
		<meta charset="utf-8"/>
		<title>Rettungsanker History Timeline</title>
		<meta name="description" content="jQuery Plugin for building timelines"/>
		<meta name="keywords" content=""/>
		<meta name="robots" content="index, follow"/>
		<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1"/>
		
      {/* CSS*/}
		<link rel="stylesheet" href="/html9/css/jquery.timeline.css" type="text/css" media="all"/>
		
	</Head>

  

  <div id="mytimeline" className="timeline-wrapper shadow" style={{width: 'auto', height: '560px'}}>
  
    
  {/* TIMELINE*/}
    <div className="timeline" style={{opacity: '1'}}>
  
      {/* VIEWPORT - IMAGES*/}
      {/* NOTE: BETTER SPLIT IMAGES FOR SITE SPEED, BUT YOU CAN USE JUST ONE FULL IMAGE FOR ALL*/}
      {/* YOU CAN WRAP IMAGES INSIDE HREFS, FOR OPENING LIGHTBOX, LIKE THE SAMPLE BELOW*/}
        <div className="viewport"style={{height: '265px'}} >
          <div className="images ui-draggable ui-draggable-handle drag_icon" style={{width: '6400px', left: '0px'}}>
            
                   <img src="/02_sample_content_images.jpg" alt=""/>
      
          </div>
        </div>
  
      {/* SCROLLBAR (VIEW PLUGIN OPTIONS FOR STYLING)*/}
        <div className="scrollbar" style={{width: '6360px', top: '244px'}} >
          <div className="track" style={{width: '6360px', height: '21px'}}>
          {/*} DRAGGER */}
                  <div className="dragger" style={{height: '51px', left: '0px, width: 90px'}}><img src="/scrollbar_dragger.png" alt=""/></div>
                </div>
              </div>
              </div>
              </div>
  
          {/* MARKS*/}
          {/* NOTE: MANUALLY POSITION (PERCENT %) EACH MARK WITH data-xpos ATTRIB*/}
            <div className="marks">
              <div data-xpos="10" style={{display: 'block', left: '10%', opacity: '1'}}  original-title=""></div>
              <div data-xpos="27" style={{display: 'block', left: '27%', opacity: '1'}}  original-title=""></div>
              <div data-xpos="50" style={{display: 'block', left: '50%', opacity: '1'}}  origginal-title="" alt=""/></div>
          
      
        
  
      {/* MILESTONES*/}
        <div className="milestones" style={{height: '215px', borderTop: '4px solid gray'}}>						
          <div className="content" style={{width: '6164px', left: '0px'}}>
            
          {/* MILESTONE SAMPLE 1*/}
            <div className="column">
              <div className="c200">
                <span className="date" >1959</span>
                <span className="txt">Foundation of HAL Allergy (Haarlems Allergenen Laboratorium BV)</span>
              </div>
            </div>
            
          
          {/* MILESTONE SAMPLE 3*/}
            <div className="column">
              <div className="c200">
                <span className="date" >1966</span>
                <span className="txt">Introduction of the first commercially available house-dust mite extract to combat house dust mite allergy</span>
              </div>
            </div>
            
              <div className="column">
              <div className="c200">
                <span className="date" >1986</span>
                <span className="txt">Introduction of allergoid (glutaraldehyde modified) subcutaneous immunotherapy (SCIT) for grasses</span>
              </div>
            </div>
            
          {/* MILESTONE SAMPLE 4*/}
            <div className="column">
              <div className="c125">
                <span className="date" >1995</span>
                <span className="txt">Introduction of SLIT product B.E.S.T. (buccal, enteral, sublingual) immunotherapy (SLIT)</span>
              </div>
            </div>
        
            
          {/* MILESTONE SAMPLE 6*/}
            <div className="column">
              <div className="c125">
                <span className="date" >1998</span>
                <span className="txt">Introduction of SCIT bee and wasp venoms</span>
              </div>
            </div>
            
            {/* MILESTONE SAMPLE 6*/}
            <div className="column">
              <div className="c125">
                <span className="date" >2001</span>
                <span className="txt"> Introduction of allergoid (glutaraldehyde modified) subcutaneous immunotherapy (SCIT) for house dust mite allergy</span>
              </div>
            </div>
            
            {/* MILESTONE SAMPLE 6*/}
            <div className="column">
              <div className="c125">
                <span className="date" >2009</span>
                <span className="txt">State-of-the-art facilities built at Leiden’s Bio Science Park, meeting Good Manufacturing Practice (GMP)</span>
              </div>
            </div>
            
            {/* MILESTONE SAMPLE 6*/}
            <div className="column">
              <div className="c125">
                <span className="date" >2016</span>
                <span className="txt">Completion of first-in-human SCIT in peanut allergic patients</span>
              </div>
            </div>
            
            {/* MILESTONE SAMPLE 6*/}
            <div className="column">
              <div className="c125">
                <span className="date" >2018</span>
                <span className="txt">First company to achieve marketing authorizations for SLIT birch and tree products from the German authorities according to Therapy Allergen Ordinance </span>
              </div>
            </div>
            
      
  
    
          {/* MILESTONE SAMPLE 6*/}
            <div className="column">
              <div className="c125">
                <span className="date" >2019</span>
                <span className="txt">Completion of pivotal phase I study with SCIT peanut</span>
                <br/>
                <span className="date" >2019</span>
                  <span className="txt"> HAL Allergy’s anniversary: 60 years of research, development and production of causal treatments</span>
              </div>
            </div>
            
  ----------------------------
          </div>	{/*} END CONTENT*/}
        </div>{/* END MILESTONES*/}
  
    
  
  
  <div className="preload"></div>
  {/* END TIMELINE WRAPPER*/}
 
    </>
 
)
}
		

  



			
