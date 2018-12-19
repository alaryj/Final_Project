import React from 'react';
import About from './components/about';
import Feature from './components/feature';
import Team from './components/team';
import Contact from './components/contact';
import Subscribe from './components/subscribe';
import Footer from './components/footer';

class Home extends React.Component {
  render() {
  	document.body.classList.remove('inner-page');
  	return (
  		<div>
  			{/* Navbar Section*/}
  			<nav className="navbar navbar-expand-lg  theme-nav fixed-top">
				<div className="container">
					<a className="navbar-brand" href={`${process.env.PUBLIC_URL}/`}><img src="assets/images/logo.png" alt="logo" /></a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainmenu"  aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"><i className="fa fa-align-justify" aria-hidden="true"></i></span>
					</button>
					<div className="collapse navbar-collapse" id="mainmenu">
						<ul className="navbar-nav ml-auto" id="mymenu">
							<li className="nav-item ">
								<a className="nav-link" href="#home" >Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#about" >Abou</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#feature" >Feature</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#team">team</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#contact">contact us</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

  			{/* Home One Section Start */}
			<section className="slide-bg" id="home">
				<div className="animation-circle">
					<i></i>
					<i></i>
					<i></i>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="d-flex-1">
								<div className="slide-text">
									<div>
										<h1>
										<span className="main-title">Where2?</span>
										<br/>The best way to decide where to eat
										</h1>
										<h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h4>
										<div className="slid-btn">
											<a href=""><img src="assets/images/app1.png" alt="app1" className="img-fluid" data-tilt data-tilt-perspective="50" data-tilt-speed="350" data-tilt-max="1.8"/></a>
											<a href=""><img src="assets/images/app2.png" alt="app2" className="img-fluid" data-tilt data-tilt-perspective="50" data-tilt-speed="350" data-tilt-max="1.8"/></a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="home-right">
								<div className="mobile-slid">
									<img src="assets/images/top-mobile.png" alt="top1" className="img-fluid"/>
								</div>
								<div className="profile-msg">
									<img src="assets/images/top2.png" alt="top2" className="img-fluid" />
								</div>
								<div className="awesome">
									<img src="assets/images/top3.png" alt="top3" className="img-fluid"/>
								</div>
								<div className="profile-1">
									<img src="assets/images/top4.png" alt="top4" className="img-fluid"/>
								</div>
								<div className="emoji">
									<img src="assets/images/top5.png" alt="top5" className="img-fluid"/>
								</div>
								<div className="profile-2">
									<img src="assets/images/top1.png" alt="top1" className="img-fluid"/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
  			{/* Home One Section End */}

			{/* About Component*/}
			<About />

			{/*Feature Component*/}
			<Feature />

			{/*Team Component*/}
			<Team />
			
			{/*download section*/}
			<section className="download-bg">
			   <div className="container">
			      <div className="row">
			         <div className="col-xl-3 display-flex">
			            <div className="footer-logo">
			               <img src="assets/images/footer-logo.png" alt="footer-logo" className="img-fluid"/>
			            </div>
			         </div>
			         <div className="col-xl-5 display-flex">
			            <div className="download-text">
			               <h3>Download the Where2? app today!</h3>
			            </div>
			         </div>
			         <div className="col-xl-4 display-flex">
			            <div className="download-img">
			               <ul>
			                  <li><img src="assets/images/app1.png" alt="foot-app" className="img-fluid"  data-tilt data-tilt-perspective="50" data-tilt-speed="350" data-tilt-max="1.8"/></li>
			                  <li><img src="assets/images/app2.png" alt="foot-app1" className="img-fluid"  data-tilt data-tilt-perspective="50" data-tilt-speed="350" data-tilt-max="1.8"/></li>
			               </ul>
			            </div>
			         </div>
			      </div>
			   </div>
			</section>
			{/*end download section*/}

			{/*Contact Component*/}
			<Contact />

			{/*Subscription Component*/}
			<Subscribe />

			{/*Footer Component*/}
			<Footer />

			{/*tap-top*/}
			<div className="tap-top">
				<div>
					<i className="fa fa-angle-up" aria-hidden="true"></i>
				</div>
			</div>
  		</div>
  	);
  }
}

export default Home;