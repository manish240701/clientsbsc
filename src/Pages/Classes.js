//dependencies
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

//components
import aboutusimg from "../assets/aboutusimg.jpg";

//css
import "./css/Classes.css";

//code
const Classes = () => {
    return (
        // classes
        <div className="classes-outer-container">
            <div className="classes-container ">
                <div className="about-us-outer-container pt-5 text-center">
                    <div className="container">
                        <h2 className="about-us-heading">CLASSES</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <img
                                    src={aboutusimg}
                                    alt="about us image"
                                    width="80%"
                                />
                            </div>
                            <div className="col-md-6 about-us-content">
                                <p>
                                    Easily integrate Firebase into your team's
                                    favorite tools. Trusted by the largest apps.
                                    Firebase helps teams from startups to global
                                    enterprises build & run successful apps.
                                    Release Apps Confidently. Customize Your
                                    App. Accelerate Development. Easily
                                    integrate Firebase into your team's favorite
                                    tools. Trusted by the largest apps. Firebase
                                    helps teams from startups to global
                                    enterprises build & run successful apps.
                                    Release Apps Confidently. Customize Your
                                    App. Accelerate Development.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fees-payment-container mb-5">
                <p>
                    Now students can pay their fees online through razorpay.
                    Fees receipts are sent to the mail
                </p>
                <h2>Pay fees online</h2>
                <br />
                <a href="https://manish240701.github.io/payments/">
                    <button className="payment-btn">Click Here</button>
                </a>
            </div>

            {/* achievements */}
            <div className="achievements-container">
                <h2 className="achievements-title">ACHIEVEMENTS</h2>

                <div className="row">
                    <div className="blogs column ">
                        <ul className="cards">
                            <Link
                                to="/classes/throwball"
                                className="cards_item"
                            >
                                <li>
                                    <div className="card">
                                        <div className="">
                                            <img
                                                src="https://lagatar24.com/wp-content/uploads/2022/02/Jharkhand-Womens-Throw-Ball-Team.jpg"
                                                alt=""
                                                width="100%"
                                            />
                                        </div>
                                    </div>
                                </li>
                            </Link>

                            <Link
                                to="/classes/volleyball"
                                className="cards_item"
                            >
                                <li>
                                    <div className="card">
                                        <div className="">
                                            <img
                                                src="https://i.cbc.ca/1.6065306.1654015216!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/van-ryk-kiera-210614-1180.jpg"
                                                alt=""
                                                width="100%"
                                            />
                                        </div>
                                    </div>
                                </li>
                            </Link>

                            <Link
                                to="/classes/volleyball"
                                className="cards_item"
                            >
                                <li>
                                    <div className="card">
                                        <div className="">
                                            <img
                                                src="https://i.cbc.ca/1.6065306.1654015216!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/van-ryk-kiera-210614-1180.jpg"
                                                alt=""
                                                width="100%"
                                            />
                                        </div>
                                    </div>
                                </li>
                            </Link>
                            <Link
                                to="/classes/volleyball"
                                className="cards_item"
                            >
                                <li>
                                    <div className="card">
                                        <div className="">
                                            <img
                                                src="https://i.cbc.ca/1.6065306.1654015216!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/van-ryk-kiera-210614-1180.jpg"
                                                alt=""
                                                width="100%"
                                            />
                                        </div>
                                    </div>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Classes;
