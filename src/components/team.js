import React from 'react';
import OwlCarousel from 'react-owl-carousel';


class Team extends React.Component {
  render() {
    // OwlCarousel Option for Team Members
		const options = {
            0:{
                items:1
            },
            576:{
                items:2,
                margin:12
            },
            600:{
                items:2
            },
            767:{
                items:2
            },
            768:{
                items:2,
                margin:15
            },
            992:{
                items:3
            },
            1000:{
                items:3
            }
		};

    // Dynamic Team Members Easy to Update
    let data = [
        {name: 'Jamie Alary', designation:'developer', photo:'1.jpg', linkedin:'#', github:'#'},
        {name: 'Maria Gomez', designation:'devloper', photo:'2.jpg', linkedin:'#', github:'#'},
        {name: 'Zach Adriaens', designation:'developer', photo:'3.jpg', linkedin:'#', github:'#'},
        ];

    // Dynamic Team Members Data Loop
    let DataList = data.map((val, i) => {
        return (
            <div className="item" key={i}>
                <div className="team-box">
                    <div className="team-under-box">
                        <div className="team-under-box-button text-white">
                            <i className="fa fa-plus" aria-hidden="true"></i>
                        </div>
                        <img src={`assets/images/${val.photo}`} alt="1" className="img-fluid"/>
                        <div className="team-overlay">
                                <div className="social-icon">
                                    <ul >
                                    <li><a href={val.linkedin}  dangerouslySetInnerHTML={{ __html: '<i class="fa fa-linkedin" aria-hidden="true"></i>' }}></a></li>
                                    <li><a href={val.github}  dangerouslySetInnerHTML={{ __html: '<i class="fa fa-github" aria-hidden="true"></i>' }}></a></li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        );
    });
		
  	return (
        <section className="team-bg" id="team">
            <div className="animation-circle-inverse">
                <i></i>
                <i></i>
                <i></i>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="section-title">
                            <h2>The Team</h2>
                            <img src="assets/images/title-line.png" alt="title-line" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-md-12">
                           <OwlCarousel
                                className="team-slider-rtl owl-carousel owl-theme"
                                loop={true}
                                margin={30}
                                nav={false}
                                dots={false}
                                responsive={options}
                            >
                              {DataList}
                           </OwlCarousel>
                        <div className="col-md-12">
                            <div className="team-hover">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div  className="team-profile">
                                            <img src="assets/images/1.jpg" alt="1" className="img-fluid"/>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="d-flex-1">
                                            <div className="hover-text">
                                                <div className="team-close-btn">
                                                    <a dangerouslySetInnerHTML={{ __html: '<i class="fa fa-times" aria-hidden="true"></i>' }}></a>
                                                </div>
                                                <h3>Jamie Alary</h3>
                                                <h4 className="m-0 text-muted">Devloper & Designer</h4>
                                                <h5>PHP, Laravel, Cake , Wordpress, HTML5 </h5>
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  	);
  }
}


export default Team;