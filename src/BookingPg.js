import React from 'react';
import './Booking.css';

// react Icons
import { TbPlug } from "react-icons/tb";
import { IoBusOutline } from "react-icons/io5";
import { FaBottleWater } from "react-icons/fa6";
import { LiaMobileSolid } from "react-icons/lia";
import { PiPhoneDisconnectLight } from "react-icons/pi";
import { GiStreetLight } from "react-icons/gi";
import { BsUsbDrive } from "react-icons/bs";

// carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// material Ui
import EastIcon from '@mui/icons-material/East';
// json
import images from './Coupon'
import { Container } from '@mui/material';

// react bootstrap
import button from 'react-bootstrap/button';



const BookingPg = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2.5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

 
  return (
    <>
    <div className='bookingBus'>
      <div className='bookingFirst'>
        <ul className='bookingList'>
          <li><a><b>Home</b></a></li> 
          <div className='symbol'>
        <img src='../redBusImg/greater-than.png'/>
        </div>
          <li>Bus Tickets </li> 
           <div className='symbol'>
        <img src='../redBusImg/greater-than.png'/>
        </div>
          <li> places </li>  
          <div className='symbol'>
        <img src='../redBusImg/greater-than.png'/>
        </div>
        </ul>  
        <p><b>Places</b></p>
      </div>
     
      <div className='bookingSecond'>
        <div className='bookingPlace'>
          <p> <b>from</b> <EastIcon className='arrowIcon'/> <b>to</b> </p>
        </div>
       <div className='bookingDate'>
        <div className='symbol'><img src='../redBusImg/less-than.png'/></div>
          <span>date</span>
          <div className='symbol'>
          <img src='../redBusImg/greater-than.png'/>
          </div>
          <button className='modifyBtn'>Modify</button>
        </div>
      </div> 


      <div className='container'>
        <div className='row'>
            <div className='col filter'>
                <div>
                  <h4>FILTERS</h4>
                </div>
                <div><img src='../redBusImg/bus-location.png' className='aminityIcon'/>Live Tracking</div>

                <div>
                  <h5>DEPARTURE TIME</h5>
                  <form>
                    <input type='checkbox' id='6am' value="time" name='mrng'/>
                    <label for='6am'><img src='../redBusImg/sun-rise.png' className='filIcon'/>Before 6am (0) </label><br/>
                    
                    <input type='checkbox' id='mor' value="time" name='noon'/>
                    <label for='mor'><img src='../redBusImg/noon.png' className='filIcon'/>6am to 12pm (0) </label><br/>

                    <input type='checkbox' id='afternoon' value="time" name='eve'/>
                    <label for='afternoon'><img src='../redBusImg/sunset.png' className='filIcon'/>12pm to 6pm (0) </label><br/>
                    
                    <input type='checkbox' id='6pm' value="time" name='night'/>
                    <label for='6pm'><img src='../redBusImg/eve.png' className='filIcon'/>After 6pm (0) </label><br/>
                  </form>
                </div>
                <div>
                  <form>
                    <h5>BUS TYPES</h5>
                    <input type='checkbox' id='seater' value="busType" name='seat'/>
                    <label for='seater'> SEATER (0) </label><br/>
                    <input type='checkbox' id='sleeper' value="busType" name='sleep'/>
                    <label for='sleeper'> SLEEPER (0) </label><br/>
                    <input type='checkbox' id='ac' value="busType" name='ac'/>
                    <label for='ac'> AC (0) </label><br/>
                    <input type='checkbox' id='non-ac' value="busType" name='non-ac'/>
                    <label for='non-ac'> NON AC (0) </label><br/>
                  </form>
                </div>
                <div>
                  <h5>SEAT AVAILABILITY</h5>
                  <form>
                    
                  <input type='checkbox' id='single' value="seatAvail" name='single'/>
                    <label for='single'> SINGLE SEAT (0) </label><br/>
                  </form>
                </div>

                <div>
                  <h5>ARRIVAL TIME</h5>
                  <form>
                    <input type='checkbox' id='earlyMor' value="time" name='mrng'/>
                    <label for='earlyMor'><img src='../redBusImg/sun-rise.png' className='filIcon'/>Before 6am (0) </label><br/>
                    
                    <input type='checkbox' id='noon' value="time" name='noon'/>
                    <label for='noon'><img src='../redBusImg/noon.png' className='filIcon'/>6am to 12pm (0) </label><br/>

                    <input type='checkbox' id='evening' value="time" name='evening'/>
                    <label for='evening'><img src='../redBusImg/sunset.png' className='filIcon'/>12pm to 6pm (0) </label><br/>
                    
                    <input type='checkbox' id='night' value="time" name='night'/>
                    <label for='night'><img src='../redBusImg/eve.png' className='filIcon'/>After 6pm (0) </label><br/>
                  </form>
                </div>

                <div>
                  <h5>AMINITY</h5>
                  <div>
                    <button className='aminityBtns'><img src='../redBusImg/bottle.png' className='aminityIcon'/>
                     Water Bottle (0)</button>
                     <br/>
                    <button className='aminityBtns'><img src='../redBusImg/blanket.png' className='aminityIcon'/>Blankets (0)</button><br/>
                    <button className='aminityBtns'><TbPlug /> Charging Point (0)</button><br/>
                    <button className='aminityBtns'><img src='../redBusImg/busTrack.png' className='aminityIcon'/>Track My Bus (0)</button><br/>
                    <button className='aminityBtns'><img src='../redBusImg/sos.png' className='aminityIcon'/>Emergency Contact Number (0)</button><br/>
                    <button className='aminityBtns'><img src='../redBusImg/sheet.png' className='aminityIcon'/> Bed Sheet (0)</button> 

                    

                  </div>
                </div>
            </div>
            <div className='col buses'>
              <div className='carousel'>
              <Carousel responsive={responsive}> 
                  {
                    images && images.map((picture, i) =>{
                    console.log(picture);
                    return(
                      <div key={i} className='couponsCnt'>
                        <img src={picture} alt='' className='coupons'/>
                      </div>
                    )})
                    
                  }
                 </Carousel>    
              </div>
            </div>
        </div>

      </div>
      

    </div>
    </>
  )
}

export default BookingPg