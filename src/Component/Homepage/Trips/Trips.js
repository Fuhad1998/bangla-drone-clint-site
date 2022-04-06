import React from 'react';
import img from "../../../Drone-img/New folder/young-man-is-walking-in-forestal-park-with-his-drone-682x1024.jpg"
import './Trips.css'

const Trips = () => {
    return (
        <div className='container ' >
            <div className='row trips-div'>
                <div className='col-xs-12 col-sm-12 col-md-6'>
                    <img className='Trips-img' style={{width: "300px"}} src={img} alt="" />
                </div>
                <div className='col-xs-12 col-sm-12 col-md-6'>
                    <h1>TIPS & ARTICLE</h1>
                    <h2>HOW TO START A DRONE PHOTOGRAPHY</h2>
                    <h6>Never has it been so easy to capture aerial images of some of the world’s most stunning (and sometimes hard to reach) places. The drone—a sky-high flying, unmanned camera—is undoubtedly the wildest photography development in recent memory. Almost like a remote-controlled toy for the photo obsessed, drones are as much fun as they are revolutionary.</h6>
                </div>
            </div>
        </div>
    );
};

export default Trips;