import React from 'react';
import axios from 'axios';

class Feature extends React.Component {
   constructor(props) {
      super(props)
      this.handleCityClick=this.handleCityClick.bind(this)
   }
   handleCityClick(event) {
      event.preventDefault()
      const cityBox=document.getElementById("inputCity")
      const city=cityBox.value.trim()
      var queryURL="http://api.yelp.com/v3/businesses/search?location=" +city+ "&categories=restaurants,all"
      console.log(queryURL);
      var APIkey="bdxKjR7q5yPBHwPNcwezseUiBn5JCzzUTdUphmzssOrwUnHAtn2yZIvRUyCA2GTMCDfpVBuo8bXcajx8G0LGtCcI-q2cb9wyPLmk3xoRLxcRYHCYog6ooh986dg3XHYx";
      var headers={"Authorization":"Bearer "+APIkey, "access-control-allow-origin" : "*"}
      axios.get(queryURL,{headers})
      .then(function(results){
         var restaurants=results.data
         console.log(restaurants)
      })
      .catch(function(error){
         // to do: handle the error
         console.log(error)
      })
   }
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
                        <form>
                           <div className="form-row">
                              <div className="form-group col-md-12">
                                 <div className="city col-md-6">
                                    <input type="text" className="form-control" id="inputCity" placeholder="Enter Your City"></input>
                                    <button onClick={this.handleCityClick} type="submit">Submit</button>
                                 </div>       
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