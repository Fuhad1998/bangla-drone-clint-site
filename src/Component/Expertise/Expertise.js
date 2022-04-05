import React from "react";
import img from "../../Drone-img/young-man-operating-flying-drone-260nw-684125701.jpg";

const Expertise = () => {
  return (
    <div className="row bg-dark">
      <div className="col-xs-12 col-sm-12 col-md-6 ">
        <h1 className="text-white pt-5">Our Expertise</h1>
        <h1 className="text-white">WE ARE PROFESSIONAL IN THE FIELD AERIAL & DRONE</h1>
        <h4 className="text-white">COMMERCIAL VIDEOGRAPHY</h4>
        <h6 className="text-white">Lorem ipsum dolor sit consectetur adipisicing .</h6>
        <h6 className="text-white">Veniam earum eos tempore tenetur excepturi.</h6>
        <h4 className="text-white">360 VIRTUAL REALITY</h4>
        <h6 className="text-white">Lorem ipsum dolor sit amet, consectetur fugiat!</h6>
         <h6 className="text-white">adipisicing elit. Nisi itaque quibusdam tenetur</h6>
         <h6 className="text-white"> sit consectetur voluptatem assumenda voluptas</h6>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6">
        <img style={{height: "600px", width: "660px"}} src={img} alt="" />
      
      </div>
    </div>
  );
};

export default Expertise;
