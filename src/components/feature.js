import React from 'react';


class Feature extends React.Component {
  render() {
		
  	return (
        <section className="theme-bg feature" id="feature">
           <div className="container">
              <div className="animation-circle-inverse">
                 <i></i>
                 <i></i>
                 <i></i>
              </div>
              <div className="row">
              
              {/* TITLE */}
                 <div className="col-md-12 text-center">
                    <div className="section-title">
                       <h2 className="text-white">Find your next meal</h2>
                       <img src="assets/images/white-line.png" alt="white-line" className="img-fluid"/>
                    </div>
                 </div>

               {/* LEFT SIDE API CALL */}
                 <div className="col-lg-6 col-sm-6">
                    <div className="future-box">
                       <div className="future-timeline">
                       API Call and results
                        <form>
                           <div className="form-row">
                              <div className="form-group col-md-6">
                                 <label for="inputZip"><h2>Enter your zip code</h2></label>
                                 <input type="text" className="form-control" id="inputZip"></input>
                              </div>
                           </div>
                        </form>
                       </div>
                    </div>
                 </div>

                 {/* RIGHT/RESULTS SIDE */}
                 <div className="col-lg-6 col-sm-6">
                    <div className="future-box">
                       <div className="future-timeline-right">
                           RESULTS GO HERE
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>
  	);
  }
}


export default Feature;