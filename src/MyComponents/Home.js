import React from 'react'
import './home.css';
import { Helmet } from "react-helmet";
export default function Home() {
  return (
    <>
      <Helmet>
        <title>FliqaIndia: Photography, Videography and Graphic Design related creative platform </title>
        <meta name="description" content=" Personalised platforms for Photography, Videography with Graphics. One of the leading platforms in the creative domain."/>
      </Helmet>
      <div className="home">
        <div className="list">
          <div className="list-grp">
            <div className="list-item  ">
              <a href="#" className="list-link" ><img src="/weddingphotography.png" /><p>WeddingPhotography</p></a>
            </div>
            <div className="list-item">
              <a href="#" className="list-link" ><img src="/preweddingshoot.png" /><p>PreWeddingShoot</p></a>
            </div>
            <div className="list-item">
              <a href="#" className="list-link"><img src="/beachphotography.png" /><p>BeachPhotography</p></a>
            </div>
            <div className="list-item">
              <a href="#" className="list-link"><img src="/portfolio.png" /><p>PortFolioShoot</p></a>
            </div>
            <div className="list-item">
              <a href="#" className="list-link"><img src="/drone.png" /><p>DroneService</p></a>
            </div>
            <div className="list-item">
              <a href="#" className="list-link"><img src="/graphicdesign.png" /><p>GraphicDesign</p></a>
            </div>
          </div>
        </div>
        <div className="content container-fluid">
          <div className="content-box text-center">
            <h1>About Us</h1>
            <p><a href="#">Fliqaindia</a> for everyone</p>
            <p>With this belief, we at <a href="#">Fliqaindia</a> started our journey 5 years ago with
              the belief that everyone has the right to quality photography to help
              them better capture and conserve their special moments. We have been appreciated and recommended by StartUp India, StartUp
              Bengal, Imagesbazaar and Digital India for our novel initiative. We
              have partnered with Canvera to give you the best service possible. We
              are also trusted by Justdial, WedMEGood, Shaadisaga, weddingwire
              and so many well known events organisers.</p>
          </div>
        </div>
      </div>
    </>
  )
}
