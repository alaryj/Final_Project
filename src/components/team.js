import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import $ from 'jquery';

class Team extends React.Component {

    showTeamDetails(i)
    {
        $('.team-box').hide(1000);
        $('.team-hover-'+i).show(1000);
        $('.team-hover-'+i).fadeIn("slow");
    }
    closeTeamDetails()
    {
        $(".team-hover").hide(1000);
        $('.team-box').show(1000);
        $('.team-box').fadeIn("slow");
    }

  render() {
    // OwlCarousel Option for Team Members
		const options = {
	     0:{
            items:1,
            margin:5,
        },
        600:{
            items:1,
            margin:5,
        },
        768:{
            items:2,
        },
        992:{
            items:3,
        },
        1000:{
            items:3,
        }
		};

    // Dynamic Team Members Easy to Update
    let data = [
        {name: 'Jamie Alary', designation:'Designer', photo:'1.jpg', linkedin:'https://www.linkedin.com/in/james-alary/', github:'https://github.com/alaryj', skills:'A guru of many, but master of none', bio:"My life all started north of the Toronto area in Ontario, Canada. As a young Canadian living on the frozen tundra, I quickly learned how to wrestle polar bears and seals, and I learned how to build igloos. My family moved to the U.S. while I was still young and settled in the Denver area. Since moving to Colorado, I have been able to travel the country hockey referee, working in minor pro and college leagues."},
        {name: 'Maria Gomez', designation:'Designer', photo:'2.jpg', linkedin:'https://www.linkedin.com/in/maria-gomez-25b90b127/', github:'https://github.com/mgomez15', skills:'In progress...', bio:'Maria is so cool'},
        {name: 'Zach Adriaens', designation:'Designer', photo:'3.jpg', linkedin:'https://www.linkedin.com/in/zacharyadriaens/', github:'https://github.com/zadriaens', skills:'Big game hunting', bio:"I was Born and raised in the Mile High City. I graduated from Northglenn High school in 2004, and attended Colorado State University, getting my BA in Communications studies in 2009. I'm an avid Bigfoot hunter, and enjoy big game hunting on the Serengeti during my down time. When I'm not tackling big projects out in the bush, I enjoy spending my time with my girlfriend and friends. I also enjoy watching movies, playing video games and reading comic books. I am currently attending coding boot-camp at the University of Denver. I hope to one day learn all there is to know about fullstack, so I can bring the world to it's knees in my never-ending attempt to take over humanity."},
    ];

    // Dynamic Team Members Data Loop
    let DataList = data.map((val, i) => {
        return (
            <div className="item" key={i}>
                <div className={`team-box`}>
                    <div className="team-under-box">
                        <div className="team-under-box-button text-white" onClick={() => this.showTeamDetails(i)}>
                            <i className="fa fa-plus" aria-hidden="true"></i>
                        </div>
                        <img src={`assets/images/${val.photo}`} alt="1" className="img-fluid"/>
                        <div className="team-overlay">
                            <div className="social-icon">
                                <ul >
                                  <li><a href={val.linkedin} target="_blank" dangerouslySetInnerHTML={{ __html: '<i class="fa fa-linkedin" aria-hidden="true"></i>' }}></a></li>
                                  <li><a href={val.github} target="_blank" dangerouslySetInnerHTML={{ __html: '<i class="fa fa-github" aria-hidden="true"></i>' }}></a></li>
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
                            <h2>Meet Our Team</h2>
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

                        {data.map((value, index) =>    
                            <div className="col-md-12" key={index}>
                                <div className={`team-hover team-hover-${index}`}>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div  className="team-profile">
                                                <img src={`assets/images/${value.photo}`} alt="1" className="img-fluid"/>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="d-flex-1">
                                                <div className="hover-text">
                                                    <div className="team-close-btn" onClick={this.closeTeamDetails}>
                                                        <a dangerouslySetInnerHTML={{ __html: '<i class="fa fa-times" aria-hidden="true"></i>' }}></a>
                                                    </div>
                                                    <h3>{value.name}</h3>
                                                    <h4 className="m-0 text-muted">{value.designation}</h4>
                                                    <h5 className="m-1">{value.skills}</h5>
                                                    <p className="m-2">{value.bio}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
  	);
  }
}


export default Team;