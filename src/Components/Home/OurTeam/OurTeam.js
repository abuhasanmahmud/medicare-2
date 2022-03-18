import React from 'react';
import './OurTeam.css'
import reportWebVitals from './../../../reportWebVitals';
const OurTeam = () => {
    return (
        <div className="p-5" style={{backgroundColor:"#DEE0DF"}}>
           <div className="row container p-3 d-flex align-items-center">
               <div className="col-lg-8 col-md-6 col-sm-12  ">
                   <p>Dr. Stephanie <span>Wosniack</span></p>
                   <h1>OUR TEAM</h1>
                   <p>Dr. Stephanie Wosniack is is dedicated to providing her patients with the best possible care. We at MediCare are focused on helping you. After receiving successful care for various aches and pains over the years, Dr. Woshiack found her calling to help others get well.</p>
                   <img className="img-fluid " src="https://i.ibb.co/pzfqHJp/signature.png" alt=""/>
               </div>

               <div className="col-lg-4 col-md-6 col-sm-12">
                   <img className="img-fluid" src="https://i.ibb.co/54DYGKG/doktorka.png" alt=""/>
               </div>
           </div>
        </div>
    );
};

export default OurTeam;