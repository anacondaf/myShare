import React, { useState, useEffect } from "react";
import MetisMenu from "@metismenu/react";
import { CSSTransition } from "react-transition-group";
import { Pagination } from "@material-ui/lab";

import Icon from "@mdi/react";
import {
	mdiTagTextOutline,
	mdiCalendar,
	mdiCommentMultipleOutline,
	mdiArrowRight,
	mdiMagnify,
} from "@mdi/js";

//custom css
import "./homepage.style.css";
// import MetisMenu css
import "metismenujs/dist/metismenujs.css";

function Homepage() {
	//state that holds start() / stop() of menu action
	let [start, setStart] = useState(false);

	let topbarMobile;
	let canChangeOpacity = true;

	// Initial state
	var scrollPos = 0;

	let handleScroll = (e) => {
		if (768 <= window.innerWidth && window.innerWidth < 992) {
			// detects new state and compares it with the new one
			if (document.body.getBoundingClientRect().top > scrollPos) {
				topbarMobile.classList.add("hide-and-seek");
			} else {
				topbarMobile.classList.remove("hide-and-seek");
			}
			scrollPos = document.body.getBoundingClientRect().top;
		}
	};

	useEffect(() => {
		topbarMobile = document.querySelector(".topbar-mobile");
		window.addEventListener("scroll", handleScroll);

		window.addEventListener("resize", function (e) {
			if (
				768 <= window.innerWidth &&
				window.innerWidth < 992 &&
				canChangeOpacity
			) {
				topbarMobile.classList.add("hide-and-seek");
				canChangeOpacity = false;
			}

			if (window.innerWidth >= 992) {
				setStart(true);
				console.log(window.innerWidth);
			} else setStart(false);
		});
	});

	//event that trigger sidemenu animation
	const toggleMenu = (e) => {
		setStart(!start);
		/* NOTE:
		 * I bring down the case of childNode(m1,m2,m3) in hamburger menu
		 * from 3 cases to 2 cases
		 * ---------------------------------------------------------------------
		 * #Case 1: The HTML collection return array of length 3 which
		 * must be a burger-menu is clicked, so that the array contains 3 child
		 *
		 * #Case 2: The HTML collection return array of length 2 which must be
		 * a parent Node of burger menu, so that the array contains the burger menu
		 * (as the child of its parent) and <a> element
		 *
		 */
		let HTMLCollection = e.target.parentNode.childNodes;
		let hamburgerChildren;

		switch (HTMLCollection.length) {
			case 2:
				hamburgerChildren = HTMLCollection[1].childNodes;

				hamburgerChildren.forEach((child, index) => {
					if (index === 0) {
						child.classList.toggle("rotate1");
					}

					if (index === 1) {
						child.classList.toggle("active");
					}

					if (index === 2) {
						child.classList.toggle("rotate3");
					}
				});

				break;

			case 3:
				hamburgerChildren = HTMLCollection;

				hamburgerChildren.forEach((child, index) => {
					if (index === 0) {
						child.classList.toggle("rotate1");
					}

					if (index === 1) {
						child.classList.toggle("active");
					}

					if (index === 2) {
						child.classList.toggle("rotate3");
					}
				});

				break;
		}
	};

	return (
		<>
			{/* Topbar start */}
			<div className="topbar-mobile">
				<div className="logo">
					<a href="index.html">
						<img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="img" />
					</a>

					<div className="hamburger-menu" onClick={toggleMenu}>
						<div id="m1"></div>
						<div id="m2"></div>
						<div id="m3"></div>
					</div>
				</div>
			</div>
			{/* Topbar end */}

			{/* Leftside menu start */}
			<CSSTransition in={start} timeout={300} classNames="navbar" unmountOnExit>
				<div className="left side-menu">
					<div class="slimscroll-menu" id="remove-scroll">
						<div className="logo">
							<a href="index.html">
								<img
									src={process.env.PUBLIC_URL + "/images/logo.png"}
									alt="img"
								/>
							</a>
							<p class="text-muted">
								Specialize: Information System University:
							</p>
						</div>
						{/* SIDE-MENU */}
						<div id="sidebar-menu">
							<MetisMenu>
								<li>
									<a href="index.html">
										<span>Home</span>
									</a>
								</li>
								<li className="">
									<a className="has-arrow" href="javascript: void(0);">
										<span>Chủ đề</span>
									</a>

									<ul className="nav-second-level collapse">
										<li>
											<a href="index.html">System Architect</a>
										</li>
										<li>
											<a href="index.html">Design Pattern</a>
										</li>
										<li>
											<a href="index.html">DevOps</a>
										</li>
										<li>
											<a href="index.html">Computer Networking</a>
										</li>
										<li>
											<a href="index.html">Javascript</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="index.html">
										<span>Tâm đắc nhất</span>
									</a>
								</li>
								<li>
									<a href="index.html">
										<span>About me</span>
									</a>
								</li>
							</MetisMenu>
							<div class="copyright-box">
								<p>2020 © myShare.</p>
							</div>
						</div>
					</div>
					<div class="clearfix"></div>
				</div>
			</CSSTransition>

			{/* Leftside menu end */}

			{/* Page wrapper start */}
			<div className="page-wrapper">
				{/* !------News and stories section------ */}
				<section id="introduction">
					<div className="container">
						<div className="row">
							<h2>
								<span>News and Stories</span>
							</h2>

							<p class="subtitle text-muted">
								Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
								consequat ipsum, nec sagittis sem nibh id elit. Proin gravida
								nibh vel velit auctor Aenean sollicitudin, adipisicing elit sed
								lorem quis bibendum auctor.
							</p>
						</div>
					</div>
				</section>
				{/* ------News and stories section end -------! */}

				<section className="posts">
					{/* !-----Container------- */}
					<div class="container">
						<div class="row">
							{/* !----Content----- */}
							<div className="col-xl-8">
								{/* !-----Post------ */}
								<article class="post">
									<div class="post-header">
										<h2 class="post-title">
											<a href="index.html">
												Beautiful Day With Friends In Paris
											</a>
										</h2>
										<ul class="post-meta">
											<li>
												<Icon clasName="mdi" path={mdiCalendar} />
												<a href="#">July 03, 2019</a>
											</li>
											<li>
												<Icon clasName="mdi" path={mdiTagTextOutline} />
												<a href="index.html">Branding</a>,
												<a href="index.html">Design</a>
											</li>
											<li>
												<Icon clasName="mdi" path={mdiCommentMultipleOutline} />{" "}
												<a href="index.html">3 Comments</a>
											</li>
										</ul>
									</div>

									<div class="post-preview">
										<a href="index.html">
											<img
												src="http://zoyothemes.com/blogezy/images/blog/blog-1.jpg"
												alt=""
												class="img-fluid rounded"
											/>
										</a>
									</div>

									<div class="post-content">
										<p>
											Whether an identity or campaign, we make your brand
											visible, relevant and effective by placing the digital at
											the center of its ecosystem, without underestimating the
											power of traditional media. Whether an identity or
											campaign, we make your brand visible.
										</p>
									</div>

									<div>
										<a href="index.html" class="btn btn-outline-custom">
											Read More
											<Icon path={mdiArrowRight} />
										</a>
									</div>
								</article>

								{/* -----Post end------! */}

								{/* !-----Post------ */}
								<article class="post">
									<div class="post-header">
										<h2 class="post-title">
											<a href="index.html">
												Nature valley with cooling environment
											</a>
										</h2>
										<ul class="post-meta">
											<li>
												<Icon clasName="mdi" path={mdiCalendar} />{" "}
												<a>May 03, 2020</a>
											</li>
											<li>
												<Icon clasName="mdi" path={mdiTagTextOutline} />{" "}
												<a href="index.html">Branding</a>,{" "}
												<a href="index.html">Design</a>
											</li>
											<li>
												<Icon clasName="mdi" path={mdiCommentMultipleOutline} />{" "}
												<a href="index.html">3 Comments</a>
											</li>
										</ul>
									</div>

									<div class="post-preview">
										<a href="index.html">
											<img
												src="http://zoyothemes.com/blogezy/images/blog/blog-2.jpg"
												alt=""
												class="img-fluid rounded"
											/>
										</a>
									</div>

									<div class="post-content">
										<p>
											Whether an identity or campaign, we make your brand
											visible, relevant and effective by placing the digital at
											the center of its ecosystem, without underestimating the
											power of traditional media. Whether an identity or
											campaign, we make your brand visible.
										</p>
									</div>

									<div>
										<a href="index.html" class="btn btn-outline-custom">
											Read More <Icon path={mdiArrowRight} />
										</a>
									</div>
								</article>
								{/* -----Post end------! */}

								{/* !-----Post------ */}
								<article class="post">
									<div class="post-header">
										<h2 class="post-title">
											<a href="index.html">
												Elegant, Simple &amp; Minimalist Blog Made With Love
											</a>
										</h2>
										<ul class="post-meta">
											<li>
												<Icon clasName="mdi" path={mdiCalendar} />{" "}
												<a href="#">June 01, 2019</a>
											</li>
											<li>
												<Icon clasName="mdi" path={mdiTagTextOutline} />{" "}
												<a href="index.html">Branding</a>,{" "}
												<a href="index.html">Design</a>
											</li>
											<li>
												<Icon clasName="mdi" path={mdiCommentMultipleOutline} />{" "}
												<a href="index.html">5 Comments</a>
											</li>
										</ul>
									</div>

									<div class="post-preview">
										<a href="index.html">
											<img
												src="http://zoyothemes.com/blogezy/images/blog/blog-3.jpg"
												alt=""
												class="img-fluid rounded"
											/>
										</a>
									</div>

									<div class="post-content">
										<p>
											Whether an identity or campaign, we make your brand
											visible, relevant and effective by placing the digital at
											the center of its ecosystem, without underestimating the
											power of traditional media. Whether an identity or
											campaign, we make your brand visible.
										</p>
									</div>

									<div>
										<a href="index.html" class="btn btn-outline-custom">
											Read More <Icon path={mdiArrowRight} />
										</a>
									</div>
								</article>
								{/* -----Post end------! */}

								{/* !-----Post------ */}
								<article class="post">
									<div class="post-header">
										<h2 class="post-title">
											<a href="index.html">
												15 Best Healthy and Easy Salad Recipes
											</a>
										</h2>
										<ul class="post-meta">
											<li>
												<Icon path={mdiCalendar} /> <a>October 20, 2019</a>
											</li>
											<li>
												<Icon path={mdiTagTextOutline} />{" "}
												<a href="index.html">Branding</a>,{" "}
												<a href="index.html">Design</a>
											</li>
											<li>
												<Icon path={mdiCommentMultipleOutline} />{" "}
												<a href="index.html">200K Comments</a>
											</li>
										</ul>
									</div>

									<div class="post-preview">
										<a href="index.html">
											<img
												src="http://zoyothemes.com/blogezy/images/blog/blog-4.jpg"
												alt=""
												class="img-fluid rounded"
											/>
										</a>
									</div>

									<div class="post-content">
										<p>
											Whether an identity or campaign, we make your brand
											visible, relevant and effective by placing the digital at
											the center of its ecosystem, without underestimating the
											power of traditional media. Whether an identity or
											campaign, we make your brand visible.
										</p>
									</div>

									<div>
										<a href="index.html" class="btn btn-outline-custom">
											Read More <Icon path={mdiArrowRight} />
										</a>
									</div>
								</article>
								{/* -----Post end------! */}

								{/* !-----Pagination------ */}
								<Pagination
									count={10}
									shape="rounded"
									showFirstButton
									showLastButton
								/>
								{/* ------Pagination end-------!*/}
							</div>

							<div class="col-xl-4">
								<div class="sidebar">
									{/* !--------Search widget------- */}
									<aside class="widget widget_search">
										<form>
											<input
												class="form-control pr-5"
												type="search"
												placeholder="Search..."
											/>
											<button class="search-button" type="submit">
												<Icon className="mdi-in-button" path={mdiMagnify} />
											</button>
										</form>
									</aside>

									<aside class="widget about-widget">
										<div class="widget-title">About Me</div>

										<div class="text-center">
											<img
												src="http://zoyothemes.com/blogezy/images/photo.jpg"
												alt="About Me"
												class="rounded-circle"
											/>

											<p>
												Quis vero phasellus hac nullam, in quam vitae duis
												adipiscing mauris leo, laoreet eget at quis, ante
												vestibulum vivamus vel. Sapien lobortis, eget orci purus
												amet pede, consectetur neque risus.
											</p>
										</div>
									</aside>

									<aside class="widget about-widget">
										<div class="widget-title">Subscribe &amp; Follow</div>

										<ul class="socials">
											<li>
												<a href="http://facebook.com">
													<i class="fab fa-facebook-f"></i>
												</a>
											</li>
											<li>
												<a href="http://twitter.com">
													<i class="fab fa-twitter"></i>
												</a>
											</li>
											<li>
												<a href="http://instagram.com">
													<i class="fab fa-instagram"></i>
												</a>
											</li>
										</ul>
									</aside>

									{/* --------Search widget end--------! */}

									{/* Categories widget */}
									<aside class="widget widget_categories">
										<div class="widget-title">Categories</div>
										<ul>
											<li>
												<a href="index.html">System Design</a> (10)
											</li>
											<li>
												<a href="index.html">Design Patterns</a> (08)
											</li>
											<li>
												<a href="index.html">DevOps</a> (02)
											</li>
											<li>
												<a href="index.html">Computer Networking</a> (3)
											</li>
											<li>
												<a href="index.html">Javascript</a> (15)
											</li>
										</ul>
									</aside>

									{/* Recent entries widget */}
									<aside class="widget widget_recent_entries_custom">
										<div class="widget-title">
											I love them most | Tâm đắc nhất
										</div>
										<ul>
											<li class="clearfix">
												<div class="wi">
													<a href="index.html">
														<img
															src="https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1139&q=80"
															alt=""
															class="img-fluid"
														/>
													</a>
												</div>
												<div class="wb">
													<a href="index.html">Beautiful Day With Friends..</a>{" "}
													<span class="post-date">Jun 15, 2019</span>
												</div>
											</li>
											<li class="clearfix">
												<div class="wi">
													<a href="index.html">
														<img
															src="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
															alt=""
															class="img-fluid"
														/>
													</a>
												</div>
												<div class="wb">
													<a href="index.html">Nature valley with cooling..</a>{" "}
													<span class="post-date">Jun 10, 2019</span>
												</div>
											</li>
											<li class="clearfix">
												<div class="wi">
													<a href="index.html">
														<img
															src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1052&q=80"
															alt=""
															class="img-fluid"
														/>
													</a>
												</div>
												<div class="wb">
													<a href="index.html">
														15 Best Healthy and Easy Salad..
													</a>{" "}
													<span class="post-date">Jun 8, 2019</span>
												</div>
											</li>
										</ul>
									</aside>

									{/* Text widget */}
									<aside class="widget widget-preface">
										<div class="widget-title">Preface</div>

										<div className="language-portion en">
											<p class="text-muted text-widget-des">
												Hi devs! Do you feel confused or complicated when
												learning programming? We learn something like DevOps,
												Networking, System Architect, etc... but they contain a
												huge theory and only text, hmmm. So that I write blog to
												guide and share you what I studied with my voice in
												order to make things clearest and easiest to understand.
												If you have comment please feel free to send me by
												following email and facebook!
											</p>
											<img
												src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"
												alt="img"
											/>
										</div>

										<div className="language-portion vi">
											<p class="text-muted text-widget-des">
												{`Chào anh em! Học code và lập trình mệt và rắc rối rồi
												chán bỏ mẹ, không muốn đụng tới. Nhưng lỡ coi bộ phim
												hacker thấy cũng ngầu ngầu nên quay lại code tiếp :v.
												Rồi chưa kể tới lúc học DevOps, System Architect,
												Networking, Linux Commands,... toàn là lý thuyết suôn và
												khô khan ~~~ cơ mà tập làm quen đi :> Mình hiểu điều đó
												nên mở blog để chia sẻ những điều mình học(làm được) và
												đọc được với cách hiểu của mình(bao dễ hiểu và bao xịn,
												vì nó là cái mình tiếp thu bằng suy nghĩ của mình mà).
												Anh em ủng hộ và góp ý qua email hay facebook cho mình
												nha!(link bên dưới)`}
											</p>
											<img
												src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png"
												alt="img"
											/>
										</div>

										<div className="communicate"></div>
									</aside>

									{/* Archives widget */}
									<aside class="widget">
										<div class="widget-title">Archives</div>

										<ul>
											<li>
												<a href="index.html">March 2019</a> (40)
											</li>
											<li>
												<a href="index.html">April 2019</a> (08)
											</li>
											<li>
												<a href="index.html">May 2019</a> (11)
											</li>
											<li>
												<a href="index.html">Jun 2019</a> (21)
											</li>
										</ul>
									</aside>

									{/* Tags widget */}
									<aside class="widget widget_tag_cloud">
										<div class="widget-title">Tags</div>
										<div class="tagcloud">
											<a href="index.html">System Architect</a>
											<a href="index.html">Cloud Computing</a>
											<a href="index.html">NodeJS</a>
											<a href="index.html">Azure</a>
											<a href="index.html">Computer Network</a>
											<a href="index.html">Docker</a>
										</div>
									</aside>
								</div>
							</div>
						</div>
						{/* ----Content end-----! */}
					</div>
					{/* ------Container end-----! */}
				</section>
			</div>

			{/* Page wrapper end */}
		</>
	);
}

export default Homepage;
