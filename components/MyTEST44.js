import { findDOMNode } from "react-dom"
import React from 'react'
import { useEffect } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import jQuery from 'jquery'
import jsdom from'jsdom'

const window = []

$ = require('jquery')(new jsdom.JSDOM().windows);

export default function MTEST44(){
    useEffect(() => {

<>
    	<Script type="text/javascript" src="/html8/js/jquery/jquery-2.2.2.min.js"></Script >
		<Script type="text/javascript" src="/html8/js/vendors/vendors.js"></Script >
		<Script type="text/javascript" src="/html8/js/jquery.timeline.js"></Script >
		<Script type="text/javascript" src="/html8/js"></Script >
		
         

       

    
       </>
      }, [])    



  return (
    
    <>
    <html>

	<head>
		
	    <Script>
			{
			window["GUARDIO_SENSOR_CONF"] = {"click":true}
			}
		</Script>

		{/* METAS */}        
	
		<meta charset="utf-8"/>
		<title>History Timeline Rettungsanker</title>
	<meta name="description" content="jQuery Plugin for building timelines"/>
		<meta name="keywords" content="jQuery timeline, History timeline, Company timeline, Web timeline, timeline script, JQuery Timeline Plugin, Interactive timeline maker, Codecanyon, Themeforest timeline, Codecanyon timeline"/>
		<meta name="robots" content="index, follow"/>
		<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1"/>
		
		{/* CSS */}
	      <link rel="stylesheet" href="../html8/css/jquery.timeline.css" media="all"/>

		{/* ANALYTICS */}
		</head>
	
  



	<body className="dark-demo fullwidth-demo" cz-shortcut-listen="true">



			{/* TIMELINE WRAPPER */}
			<div id="mytimeline" className="timeline-wrapper dark shadow" style={{marginTop: 1 + 'vw', marginLeft: 'auto', marginRight: 'auto', width: 1200 + 'px', height: 550 + 'px'}}>
				
					
				{/* TIMELINE */}
				<div className="timeline" style={{opacity: '1'}}>

						{/* VIEWPORT - IMAGES */}
						{/* NOTE: BETTER SPLIT IMAGES FOR SITE SPEED, BUT YOU CAN USE JUST ONE FULL IMAGE FOR ALL */}
						{/* YOU CAN WRAP IMAGES INSIDE HREFS, FOR OPENING LIGHTBOX, LIKE THE SAMPLE BELOW */}
						<div className="viewport" style={{height: 265 + 'px'}}>
							<div className="images ui-draggable ui-draggable-handle drag_icon" style={{width: 3400 + 'px', left: 0 + 'px'}}>
								<img src="/content_img_1.png" alt=""/>
								<img src="/content_img_2.png" alt=""/>
								<img src="/content_img_3.png" alt=""/>
								<a href="https://vimeo.com/30138314" data-rel="prettyPhoto" className="video_bt" title="Marcel Breuer retrospective"/>
								<img src="/content_img_4.png"/>
								<img src="/content_img_5.png" alt=""/>
								<img src="/content_img_6.jpg" alt=""/>
							</div>
						</div>

						{/* SCROLLBAR (VIEW PLUGIN OPTIONS FOR STYLING) */}
						<div className="scrollbar" style={{top: 244 + 'px', width: 1536 + 'px'}}>
							<div className="track" style={{height: 21 +'px', width: 1536 + 'px'}}>
							
								{/* MARKS */}
								{/* NOTE: MANUALLY POSITION (PERCENT %) EACH MARK WITH data-xpos ATTRIB */}
								<div className="marks">
									<div data-xpos="32%" data-label="MARCH 1992" original-title="" style={{display: 'block', left: 32 + '%', opacity: '1'}}></div>
									<div data-xpos="52%" data-label="2005" original-title=""       style={{display: 'block', left: 52 + '%', opacity: '1'}}></div>
									<div data-xpos="70%" data-label="2006 - PARTNERS" original-title=""   style={{display: 'block', left: 70 + '%', opacity: '1'}}></div>
									<div data-xpos="81%" data-label="2010" original-title=""  style={{display: 'block', left: 81 + '%', opacity: '1'}}></div>
								</div>
								
								{/* DRAGGER */}
								<div className="dragger" style={{height: 21 + 'px', left: 0 + 'px', width: 70 +'px'}}><img src="/scrollbar_dragger.png" alt=""/></div>
							</div>
						</div>

						{/* MILESTONES */}
						<div className="milestones" style={{height: 215 + 'px'}}>						
							<div className="content" style={{width: 3902 +'px', left: '0px'}}>
								
								{/* MILESTONE SAMPLE 1 */}
								<div className="column">
									<div className="c200">
										<span className="date" style={{color: 'rgb(41, 158, 196)'}}>1910-1929: ART NOUVEAU</span>
										<span className="txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit, <strong>sed do eiusmod tempor incididunt</strong> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.<br/><br/>Ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate pariatur. </span>
									</div>
								</div>
								
								{/* MILESTONE SAMPLE 2 */}
									{/* MILESTONE SAMPLE 2 */}
									<div className="column">
									<div className="c125">
										<span className="date">1935</span>
										<span className="txt">Ut enim ad minim veniam, quis nostrud exercitation ullamco.<br/><br/>Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </span>
										<span className="thumb"><a href="#extended_text1" data-rel="prettyPhoto" title=""><img src="/html8/images/read_more.png" alt="" className="readmore" original-title="READ MORE"/></a></span>
										
										<div id="extended_text1" className="hidden">	{/* SAMPLE OF HIDDEN DIV WITH EXTENDED CONTENT */}
											<p><strong>Sample of extended content opened with lightbox</strong><br/><br/>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip <a href="http://www.themeforest.net" target="_blank">sample of external link</a>. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br/><br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium fuga asperiores veritatis cum illum consequuntur magnam excepturi! Fugiat, quod ut ex soluta facere voluptatibus officiis facilis sapiente. Voluptatibus, libero itaque!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, maiores delectus perspiciatis non libero odit dolor beatae. <br/><br/></p>
										</div>
									</div>
								</div>
								
								{/* MILESTONE SAMPLE 3 */}
								<div className="column">
									<div className="c125">
										<span className="date" style={{color: 'rgb(41, 158, 196)'}}>MARCH 1946</span>
										<span className="txt">Ut enim ad minim veniam, quis nostrud exercitation ullamco.</span>
										<span className="date" style={{color: 'rgb(41, 158, 196)'}}><br/>NOVEMBER 1949</span>
										<span className="txt">Duis aute irure dolor in voluptate velit esse.</span>
									</div>
								</div>
								
								{/* MILESTONE SAMPLE 4 */}
								<div className="column">
									<div className="c125">
										<span className="date" style={{color: 'rgb(41, 158, 196)'}}>1957 - 20 YEARS<br/>VITRA MUSEUM VIDEO</span>
										<span className="thumb"><a href="https://vimeo.com/112938835" data-rel="prettyPhoto" className="video_bt" title="Alvar Aalto at Vitra Design Museum"><img src="/video_sample_thumb.png" alt=""/><span></span></a></span>
										<span className="thumb_description">Alvar Aalto. Vitra Museum</span>
									</div>
								</div>
								
								{/* MILESTONE SAMPLE 5 */}
								<div className="column">
									<div className="c150">
										<span className="date" style={{color: 'rgb(41, 158, 196)'}}>1970</span>
										<span className="txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, corporis asperiores reprehenderit incidunt consequatur iusto.</span>
										<span className="boxed_link"><a href="/gallery_sample_02.jpg" data-rel="prettyPhoto[sample_gallery]" title="Gallery sample 01" style={{color: 'rgb(41, 158, 196)'}}>&gt; IMAGE GALLERY</a></span>
										
										<div className="hidden">	{/* SAMPLE OF HIDDEN GALLERY ITEMS */}
											<a href="/gallery_sample_01.jpg" data-rel="prettyPhoto[sample_gallery]" title="Gallery sample 02"></a>
											<a href="/gallery_sample_03.jpg" data-rel="prettyPhoto[sample_gallery]" title="Gallery sample 03"></a>
										</div>
										
									</div>
								</div>
								
								{/* MILESTONE SAMPLE 6 */}
								<div className="column">
									<div className="c125">
										<span className="date" style={{color: 'rgb(41, 158, 196)'}}>1995 - VITRA AWARDS</span>
										<span className="txt">Sample of external links:</span>
										<span className="link"><br/><a href="https://themeforest.net/user/pezflash" target="_blank">www.envato.com</a></span>
										<span className="link"><a href="https://themeforest.net/user/pezflash" target="_blank">www.themeforest.net</a></span>
										<span className="link"><a href="https://themeforest.net/user/pezflash" target="_blank">www.codecanyon.net</a></span>
									</div>
								</div>

								{/* MILESTONE SAMPLE 7 */}
								<div className="column">
									<div className="c225">
										<span className="date" style={{color: 'rgb(41, 158, 196)'}}>2010 - WIDE COLUMN SAMPLE</span>
										<span><img src="images/logos.png" alt=""/></span>
										<span className="txt">Ut enim ad minim veniam, quis nostrud exercit ullamco. Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </span>	
										<span className="thumb"><a href="#extended_text2" data-rel="prettyPhoto" title=""><img src="images/read_more.png" alt="" className="readmore" original-title="READ MORE"/></a></span>
										
										<div id="extended_text2" className="hidden">	{/*SAMPLE OF HIDDEN DIV WITH EXTENDED CONTENT */}
											<p><strong>Sample of extended content opened with lightbox</strong><br/><br/>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip <a href="http://www.themeforest.net" target="_blank">sample of external link</a>. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br/><br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium fuga asperiores veritatis cum illum consequuntur magnam excepturi! Fugiat, quod ut ex soluta facere voluptatibus officiis facilis sapiente. Voluptatibus, libero itaque!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, maiores delectus perspiciatis non libero odit dolor beatae. <br/><br/></p>
										</div>
									</div>
								</div>
								
								
								{/* MILESTONE SAMPLE 8 */}
								<div className="column">
									<div className="c125">
										<span className="date" style={{color: 'rgb(41, 158, 196)'}}>2016 - PRESENT</span>
										<span className="thumb"><a href="/gallery_sample_01.jpg" data-rel="prettyPhoto" className="image_bt" title="Image description"><img src="/image_sample_thumb.png" alt=""/><span></span></a></span>
										<span className="thumb_description">Image description</span>
									</div>
								</div>

								{/* MILESTONE SAMPLE 9 */}
								<div className="column">
									<div className="c200">
										<span className="date" style={{color: 'rgb(41, 158, 196)'}}>1910-1929: ART NOUVEAU</span>
										<span className="txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit, <strong>sed do eiusmod tempor incididunt</strong> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.<br/><br/>Ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate pariatur. </span>
									</div>
								</div>
								
								{/* MILESTONE SAMPLE 10 */}
								<div className="column">
									<div className="c125">
										<span className="date" style={{color: 'rgb(41, 158, 196)'}}>1935</span>
										<span className="txt">Ut enim ad minim veniam, quis nostrud exercitation ullamco.<br/><br/>Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </span>
										<span className="thumb"><a href="#extended_text1" data-rel="prettyPhoto" title=""><img src="/html8/images/read_more.png" alt="" className="readmore" original-title="READ MORE"/></a></span>
										
										<div id="extended_text1" className="hidden">	{/* SAMPLE OF HIDDEN DIV WITH EXTENDED CONTENT */}
											<p><strong>Sample of extended content opened with lightbox</strong><br/><br/>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip <a href="http://www.themeforest.net" target="_blank">sample of external link</a>. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br/><br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium fuga asperiores veritatis cum illum consequuntur magnam excepturi! Fugiat, quod ut ex soluta facere voluptatibus officiis facilis sapiente. Voluptatibus, libero itaque!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, maiores delectus perspiciatis non libero odit dolor beatae. <br/><br/></p>
										</div>
									</div>
								</div>
								
								{/* MILESTONE SAMPLE 11 */}
								<div className="column">
									<div className="c125">
										<span className="date" style={{color: 'rgb(41, 158, 196)'}}>MARCH 1946</span>
										<span className="txt">Ut enim ad minim veniam, quis nostrud exercitation ullamco.</span>
										<span className="date" style={{color: 'rgb(41, 158, 196)'}}><br/>NOVEMBER 1949</span>
										<span className="txt">Duis aute irure dolor in voluptate velit esse.</span>
									</div>
								</div>
								
								{/* MILESTONE SAMPLE 12 */}
								<div className="column">
									<div className="c125">
										<span className="date" style={{color: 'rgb(41, 158, 196)'}}>1957 - 20 YEARS<br/>VITRA MUSEUM VIDEO</span>
										<span className="thumb"><a href="https://vimeo.com/112938835" data-rel="prettyPhoto" className="video_bt" title="Alvar Aalto at Vitra Design Museum"><img src="/video_sample_thumb.png" alt=""/><span></span></a></span>
										<span className="thumb_description">Alvar Aalto. Vitra Museum</span>
									</div>
								</div>
								
								{/* MILESTONE SAMPLE 13 */}
								<div className="column">
									<div className="c150">
										<span className="date" style={{color: 'rgb(41, 158, 196)'}}>1970</span>
										<span className="txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, corporis asperiores reprehenderit incidunt consequatur iusto.</span>
										<span className="boxed_link"><a href="images/gallery_sample_02.jpg" data-rel="prettyPhoto[sample_gallery]" title="Gallery sample 01" style={{color: 'rgb(41, 158, 196)'}}>&gt; IMAGE GALLERY</a></span>
										
										<div className="hidden">	{/* SAMPLE OF HIDDEN GALLERY ITEMS */}
											<a href="/gallery_sample_01.jpg" data-rel="prettyPhoto[sample_gallery]" title="Gallery sample 02"></a>
											<a href="/gallery_sample_03.jpg" data-rel="prettyPhoto[sample_gallery]" title="Gallery sample 03"></a>
										</div>
										
									</div>
								</div>
								
								{/* MILESTONE SAMPLE 14 */}
								<div className="column">
									<div className="c125">
										<span className="date" style={{color: 'rgb(41, 158, 196)'}}>1995 - VITRA AWARDS</span>
										<span className="txt">Sample of external links:</span>
										<span className="link"><br/><a href="https://themeforest.net/user/pezflash" target="_blank">www.envato.com</a></span>
										<span className="link"><a href="https://themeforest.net/user/pezflash" target="_blank">www.themeforest.net</a></span>
										<span className="link"><a href="https://themeforest.net/user/pezflash" target="_blank">www.codecanyon.net</a></span>
									</div>
								</div>
								
								{/* MILESTONE SAMPLE 15 */}
								<div className="column">
									<div className="c225">
										<span className="date" style={{color: 'rgb(41, 158, 196)'}}>2010 - WIDE COLUMN SAMPLE</span>
										<span><img src="/logos.png" alt=""/></span>
										<span className="txt">Ut enim ad minim veniam, quis nostrud exercit ullamco. Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </span>	
										<span className="thumb"><a href="#extended_text2" data-rel="prettyPhoto" title=""><img src="/html8/images/read_more.png" alt="" className="readmore" original-title="READ MORE"/></a></span>
										
										<div id="extended_text2" className="hidden">	{/* SAMPLE OF HIDDEN DIV WITH EXTENDED CONTENT */}
											<p><strong>Sample of extended content opened with lightbox</strong><br/><br/>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip <a href="http://www.themeforest.net" target="_blank">sample of external link</a>. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br/><br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium fuga asperiores veritatis cum illum consequuntur magnam excepturi! Fugiat, quod ut ex soluta facere voluptatibus officiis facilis sapiente. Voluptatibus, libero itaque!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, maiores delectus perspiciatis non libero odit dolor beatae. <br/><br/></p>
										</div>
									</div>
								</div>
								
								{/* MILESTONE SAMPLE 16 */}
								<div className="column">
									<div className="c200">
										<span className="date" style={{color: 'rgb(41, 158, 196)'}}>1910-1929: ART NOUVEAU</span>
										<span className="txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit, <strong>sed do eiusmod tempor incididunt</strong> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.<br/><br/>Ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate pariatur. </span>
									</div>
								</div>
								
								{/* MILESTONE SAMPLE 17 */}
								<div className="column">
									<div className="c125">
										<span className="date" style={{color: 'rgb(41, 158, 196)'}}>1935</span>
										<span className="txt">Ut enim ad minim veniam, quis nostrud exercitation ullamco.<br/><br/>Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </span>
										<span className="thumb"><a href="#extended_text1" data-rel="prettyPhoto" title=""><img src="/html8/images/read_more.png" alt="" className="readmore" original-title="READ MORE"/></a></span>
										
										<div id="extended_text1" className="hidden">	{/* SAMPLE OF HIDDEN DIV WITH EXTENDED CONTENT */}
											<p><strong>Sample of extended content opened with lightbox</strong><br/><br/>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip <a href="http://www.themeforest.net" target="_blank">sample of external link</a>. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br/><br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium fuga asperiores veritatis cum illum consequuntur magnam excepturi! Fugiat, quod ut ex soluta facere voluptatibus officiis facilis sapiente. Voluptatibus, libero itaque!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, maiores delectus perspiciatis non libero odit dolor beatae. <br/><br/></p>
										</div>
									</div>
								</div>
								
								{/* MILESTONE SAMPLE 18 */}
								<div className="column">
									<div className="c125">
										<span className="date" style={{color: 'rgb(41, 158, 196)'}}>2016 - PRESENT</span>
										<span className="thumb"><a href="/gallery_sample_01.jpg" data-rel="prettyPhoto" className="image_bt" title="Image description"><img src="/image_sample_thumb.png" alt=""/><span></span></a></span>
										<span className="thumb_description">Image description</span>
									</div>
								</div>

							</div>	{/* END CONTENT */}
						</div> {/* END MILESTONES */}
						<div className="preload" style={{display: 'none'}}></div>				
					</div> {/* END TIMELINE */}
					</div>  {/*-- END TIMELINE WRAPPER */}

					{/* LOAD PLUGIN ON DOCUMENT READY */}

			
<Script>
{




$(function() {
	 

window.jQuery = require('/public/html8/js/jquery/jquery-2.2.2.min.js');
window.Timeline = require('/public/html8/js/jquery.timeline');

	$("#mytimeline").timelineSlider()
	
})
	

}
</Script>

			
		

	

				</body>




	</html>
   

</>
	)
	}	

