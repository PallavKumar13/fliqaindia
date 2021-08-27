import React from 'react'
import './logodesign.css'
import { Helmet } from "react-helmet";

export default function LogoDesign() {
    return (
        <>
            <div>
                <Helmet>
                    <title> Logo Design </title>
                    <meta name="description" content="Make your own brand identity through us. Start your design now" />
                </Helmet>
                <div className="logo">
                    <div className="logo-content">
                        <h1>What is Logo design ?</h1>
                        <p>Logo tells the story of your brand. It enhances your brand image and speaks to your audience.
                            Logo design makes the frist impression for you in your working environment. Gives your
                            business and brand an identity and projects a professional image. It creates memorable visuals
                            to the outside world and build loyalty.
                        </p>
                    </div>
                    <div className="button-grp">
                        <button type="button" class="btn btn-outline-success m-2">Start designing</button>
                        <button type="button" class="btn btn-outline-dark m-2">Get a quote</button>
                    </div>
                </div>
            </div>
        </>
    )
}
