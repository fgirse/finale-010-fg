/* eslint-disable no-undef */
import React, {useEffect} from 'react';
import $ from 'jQuery';
import jQuery from 'jQuery';
//import audio from'../components/Light/js/audiojs/audio.min'


const Timeliner = () => {

	

		useEffect(() => {
			window.jQuery = require('../components/Light/js/jquery/jquery-1.7.1.min');
			window.myTimeline = require('../components/Light/js/jquery.timeline.js');
			

			
			


			 });


		
			
			(function($) {
				
				// GLOBAL VARS
				var preload, container, tl, vidRoll, imgRoll, readBt, viewport, images, milestones, content, bar, track, dragger, marksAmount, fadeInDelay;
				
				
				// CLASS CONSTRUCTOR / INIT FUNCTION
				$.myTimeline = function() {
					
					
					//SETUP VARS
					preload = $('.preload');
					container = $('#timeline_container');
					tl = $('#timeline');
					vidRoll = $('.video_rollover');
					imgRoll = $('.image_rollover');
					readBt = $('.readmore');
					viewport = $('#timeline .viewport');
					images = $('#timeline .viewport .images');
					milestones = $('#timeline .milestones');
					content = $('#timeline .milestones .content');
					bar = $('#timeline .scrollbar');
					track = $('#timeline .scrollbar .track');
					dragger = $('#timeline .scrollbar .track .dragger');
					marksAmount = $('.marks > div').length;
					fadeInDelay = parseInt(tl.attr("data-fadeInDelay"));
					
					
					//CONFIG ALL ELEMENTS SIZES AND POSITIONS BASED ON HTML ATTRIBS
					container.css("width", tl.attr("data-width"));
					container.css("height", tl.attr("data-height"));
					images.css("width", tl.attr("data-imagesWidth"));
					viewport.css("height", tl.attr("data-imagesHeight"));
					content.css("width", tl.attr("data-contentWidth"));
					milestones.css("height", tl.attr("data-contentHeight"));
					bar.css("top", tl.attr("data-imagesHeight") - tl.attr("data-draggerHeight"));
					track.css("height", tl.attr("data-draggerHeight"));
					dragger.css("height", tl.attr("data-draggerHeight"));
			
					
					//PRELOAD & GLOBAL FADE IN
					preload.delay(fadeInDelay - 500).animate({ opacity:0 }, 500, 'easeOutQuad');
					container.delay(fadeInDelay).animate({ opacity:1 }, 1000, 'easeOutQuad');
			
					
					//HTML5 AUDIO PLAYER 
					audiojs.events.ready(function() {
						var as = audiojs.createAll({
							autoplay: true,
							loop: true,
						});
						audio.prettyPaused = 0;
					});
					
					
					//PRETTYPHOTO LIGHTBOX GALLERY
					$('a[data-rel]').each(function() {
						$(this).attr('rel', $(this).data('rel'));
					});
					$("a[rel^='prettyPhoto']").prettyPhoto({social_tools:false});
					
					
					//TIPSY - TOOLTIP
					readBt.tipsy({ gravity: 'w', fade: true, offset: 5 });
					
					
					//IMAGE ROLLOVER ICON
					imgRoll.append("<span></span>");
					imgRoll.hover(function(){
						$(this).children("span").stop(true, true).fadeIn(600);
					},function(){
						$(this).children("span").stop(true, true).fadeOut(200);
					});
					
					
					//VIDEO ROLLOVER ICON
					vidRoll.append("<span></span>");
					vidRoll.hover(function(){
						$(this).children("span").stop(true, true).fadeIn(600);
					},function(){
						$(this).children("span").stop(true, true).fadeOut(200);
					});
					
					
					//VIDEO THUMB STOPS MUSIC ON CLICK (IF PLAYING)
					{/*vidRoll.click(function() {
						if (audio.playing) {
							audio.prettyPaused = 1;
							audio.pause();
						} else {
							audio.prettyPaused = 0;
						}
					});*/}
					
					
					//START DRAG IMAGES FUNCTION
					startDrag(images);
					
					
					//SCROLLBAR MILESTONES MARKS
					for ( var i = 0; i < marksAmount; i++ ) {
						current = $('#m'+i);
						current.stop(true, true)
							.delay(fadeInDelay + 500)
							.animate({ left:current.attr("data-xpos"), opacity:1 }, 700 + 100*i, 'easeOutQuad')
							.show()
							.tipsy({ gravity: 's', fade: true, offset: 3, fallback: current.attr("data-label") });
					};
					
					
					//INIT SCROLLBAR
					tl.tinyscrollbar({
						wheel: 20,
						mouseWheel: tl.attr("data-mouseWheel"),
						size: tl.attr("data-width"),
						draggerWidth: tl.attr("data-draggerWidth")
					});
					
					
				} // END OF CLASS CONSTRUCTOR
				
				
			
				//DRAG FUNCTION
				function startDrag(i) {
					var leftLimit = 0;
			
					i.draggable({
						axis: "x",
							
						start: function(_event, ui) {
							if (ui.position != undefined) {
								leftLimit = ui.position.left;
							}
						},
						
						drag: function(event, ui) {
							leftLimit = ui.position.left;
							var rightLimit = i.width() - container.width();							
							if (ui.position.left < 0 && ui.position.left * -1 > rightLimit) leftLimit = rightLimit * -1;
							if (ui.position.left > 0) leftLimit = 0;
							ui.position.left = leftLimit;
								
							content.css("left", leftLimit * ratio);				//MOVE CONTENT
							dragger.css("left", leftLimit * -ratioDragger);		//MOVE DRAGGER
							
							iScroll = -leftLimit;								//VALUE FOR MOUSE WHEEL -tinyscroll.js
							iScroll2 = -(content.position().left);				//VALUE FOR MOUSE WHEEL -tinyscroll.js
						}
					});
			
					i.addClass("drag_icon");
				};
			
				//STOP DRAG FUNCTION
				function stopDrag(i) {
					i.draggable("destroy");
					i.css("cursor", "default");
				};
			
				
			})(jQuery);                                                                                                                 
	
	; [];

	return (
	<>
	   
    
<section id="timeline">
	<div className="container mx-auto">


		
		{/* PRELOAD */}
		<div className="absolute top-[220px] left-[450px]">
			<img src="/preloader.gif" alt="Ladesymbol" />
		</div>
		
		
		{/*TIMELINE CONTAINER */}
		<div id="ml-[-480px] bg-orange-500 absolute top-[50px] left-[50%]">

			
			{/*} TIMELINE */}
			<div id="timeline" 
				data-fadeInDelay="3000"
				data-width="952"
				data-height="450"
				data-imagesWidth="3400"
				data-imagesHeight="265"
				data-contentWidth="1670"
				data-contentHeight="174"
				data-draggerWidth="59"
				data-draggerHeight="21"
				data-mouseWheel="1"
			>

					
					{/* VIEWPORT - IMAGES */}
					<div className="h-[100vh] overflow-hidden relative bg-[url('/background.jpg')] bg-no-repeat bg-cover"> cover;


						<div className="absolute p-0 m-0">
							<img src="/Hero.png" height="90" width="135" alt="Illustration"/> 
							<img src="/content_img_2.png" alt="" />
							<img src="/content_img_3.png" height="75" width="135" alt="" />
							<img src="/content_img_4.png" height="75" width="135" alt="" />
							<img src="/content_img_5.png" height="75" width="135" alt="" />
							<img src="/content_img_6.jpg" height="75" width="135" alt="" />
						</div>
					</div>
					
					
					{/* SCROLLBAR (EDIT CSS FOR STYLING) */}
					<div className="scrollbar">
						<div className="track">
						
							{/*  MILESTONES MARKS */}
							<div className="opacity-0 ciursor-pointer hidden absolute w-[13px] h-[21px] left-[]600px bg-[url('/scrollbar_mark.png')] bg-no-repeat bg-contain">
							

								<div id="m0" className="mark" datas="360" data-label="MARCH 2018"></div>
								<div id="m1" className="mark" datas="520" data-label="2005"></div>
								<div id="m2" className="mark" datas="700" data-label="2020 - PARTNERS"></div>
								<div id="m3" className="mark" datas="810" data-label="2021"></div>
							</div>
							
							<div className="dragger"></div>
						</div>
					</div>
					
					
					{/* MILESTONES */}
					<div className="relative overflow-hidden borde8 border-green-600">
					
						<div className="absolute">
							
							{/* MILESTONE SAMPLE 1 (FIRST) */}
							<div className="float-left p[0px 0px 0px] m-[14px 0px 0px 20px]">
								<div className="bg-blue-600 c200">										<span className="text-yellow-5ext-[1.33rem]  font-black">SEPTEMBER 2017 - EROEFFNUNG</span>
									<span className=" ml-2 text-[1em] text-slate-400 font-black">Michael Schreck und Volker Schneider eröffnen in Hommage an eine typische Kiezkneipe auf St. Pauli - in der Altstadt <strong>den Rettungsanker - Freiburg</strong><br/> </span>
								</div>
							</div>
							
							{/* MILESTONE SAMPLE 2 */}
							<div className="float-left p[0px 0px 0px] m-[14px 0px 0px 20px]">
								<div className="c125">
									<span className="date ">SEPTEM2018 - Ein Jahr Rettungsanker</span>
									<span className="date">2018</span>
									<span className="txt">Der Retungsanker hat sich in der Freiburger<br/><br/>Knepipenszene voll etabliert</span>
									<span className="thumb"><a href="#extended_text1" data-rel="prettyPhoto" title=""><img src="images/read_more.png" alt="" className="readmore" title="READ MORE" /></a></span>
									
									<div id="extended_text1" className						="hidden">	{/* SAMPLE OF HIDDEN DIV WITH EXTENDED CONTENT */}
										<p className=" text-[1.33r font-black" ><strong>Sample of extended content opened with lightbox</strong><br/><br/>
										Lorem ipsum dolor sit ametnsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip <a href="http://www.themeforest.net" target="_blank" rel="noreferrer">sample of external link</a>. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
									</div>
								</div>
							</div>
							
							{/* MILESTONE SAMPLE 3 */}
							<div  className="float-left h-[150px] px 0px 0px 10px]	m-[14px 0px 0px 50px] border-l-2 border-[#505050]">
								<div className="c125">
									<span className="date text-[1.m]  font-black">SEPTEMBER 2019</span>
									<span className="txt text-[1reext-slate-400 font-black">Ut enim ad minim veniam, quis nostrud exercitation ullamco.</span>
									<span className="date text-[1.m]  font-black"><br/>NOVEMBER 2019</span>
									<span className="txttext-[1em]t-slate-400 font-black">Duis aute irure dolor in voluptate velit esse.</span>
								</div>
							</div>
							
							{/* MILESTONE SAMPLE 4 */}
						<div className="float-left h-[150px] px 0px 0px 10px]	m-[14px 0px 0px 50px] border-l-2 border-[#505050]">

								<div className="c125">
									<span className="text-yellow-4text-[1.33rem]  font-black">2020 - 20 YEARS<br/>ANNIVERSARY VIDEO</span>
									<span className="thumb"><a href="http://vimeo.com/24492485" data-rel="prettyPhoto" title="20 Years Anniversary Video" className="video_rollover"><img src="images/video_sample_thumb.png" alt="" /></a></span>
									<span className="thumb_description">Short video description</span>
								</div>
							</div>
							
							{/* MILESTONE SAMPLE 5 */}
							<div className="float-left h-[150px] px 0px 0px 10px]	m-[14px 0px 0px 50px] border-l-2 border-[#505050]">
								<div className="c150">
									<span className="date text-[1.33rem]  font-black">2021</span>
									<span className="txt text-[1rem] text-slate-400 font-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
									<span className="big_link"><a href="images/gallery_sample_02.jpg" data-rel="prettyPhoto[sample_gallery]" title="Gallery sample 01"> IMAGE GALLERY</a></span>
									
									<div className="hidden">	{/* SAMPLE OF HIDDEN GALLERY ITEMS */}
										<a href="images/gallery_sample_01.jpg" data-rel="prettyPhoto[sample_gallery]" title="Gallery sample 02"></a>
										<a href="images/gallery_sample_03.jpg" data-rel="prettyPhoto[sample_gallery]" title="Gallery sample 03"></a>
									</div>
									
								</div>
							</div>
							
							{/* MILESTONE SAMPLE 6 */}
							<div className="float-left h-[150px] px 0px 0px 10px]	m-[14px 0px 0px 50px] border-l-2 border-[#505050]">
								<div className="c125">
									<span className="date">2022 - WPA PARTNERS</span>
									<span className="txt text-[1rem] text-slate-400 font-black">Sample of external links:</span>
									<span className="link"><br/><a href="http://themeforest.net/user/pezflash" target="_blank" rel="noreferrer">www.envato.com</a></span>
									<span className="link"><a href="http://themeforest.net/user/pezflash" target="_blank" rel="noreferrer">www.themeforest.net</a></span>
									<span className="link"><a href="http://themeforest.net/user/pezflash" target="_blank" rel="noreferrer">www.codecanyon.net</a></span>
								</div>
							</div>
							
							{/* MILESTONE SAMPLE 7 */}
							<div className="float-left h-[150px] px 0px 0px 10px]	m-[14px 0px 0px 50px] border-l-2 border-[#505050]">
								<div className="c225">
									<span className="date ">2023 - WIDE COLUMN SAMPLE</span>
									<span><img src="/LogoNeu.png" height="3vw" width="3vw" alt="logo" /></span>
									<span className="txt">Ut enim ad minim veniam, quis nostrud exercit ullamco. Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </span>	
									<span className="thumb"><a href="#extended_text2" data-rel="prettyPhoto" title=""><img src="images/read_more.png" alt="" className="readmore" title="READ MORE" /></a></span>
									
									<div id="extended_text2" className="hidden">	{/* SAMPLE OF HIDDEN DIV WITH EXTENDED CONTENT */}
										<p><strong>Sample of extended content opened with lightbox</strong><br/><br/>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip <a href="http://www.themeforest.net" target="_blank" rel="noreferrer">sample of external link</a>. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
									</div>
								</div>
							</div>
							
							{/* MILESTONE SAMPLE 8 */}
							<div className="float-left h-[150px] px 0px 0px 10px]	m-[14px 0px 0px 50px] border-l-2 border-[#505050]">
								<div className="c125">
									<span className="date">2024 - PRESENT</span>
									<span className="thumb"><a href="images/gallery_sample_01.jpg" data-rel="prettyPhoto[sample_gallery2]" title="10 Years Anniversary Video" className="image_rollover"><img src="images/image_sample_thumb.png" alt="" /></a></span>
									<span className="thumb_description">Image description</span>
									
									<div className="hidden">	{/* SAMPLE OF HIDDEN GALLERY ITEMS */}
										<a href="/gallery_sample_02.jpg" data-rel="prettyPhoto[sample_gallery2]" title="Gallery sample 02"></a>
										<a href="gallery_sample_03.jpg" data-rel="prettyPhoto[sample_gallery2]" title="Gallery sample 03"></a>
									</div>
								</div>
							</div>
							
						</div> {/* end content */}
						
					</div> {/* end milestones */}
					
					
					{/* AUDIO PLAYER */}
					<div className="audio_player">
						<audio src="mp3/music.mp3" preload="auto"></audio>
					</div>
									
			
			</div> {/* end timeline */}
			
			
			{/* SHADOW */}
			<div className="shadow">
				<img src="/shadow.png" alt="" />
			</div>
		
		
		</div> {/* end timeline container */}

	</div>
	</section>

</>


  )
}
export default Timeliner