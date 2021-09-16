import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import faridPic from "../images/farid.jpg"
import "./about.css"
import 'bootstrap/dist/css/bootstrap.css';

const About = () => {

    const history = useHistory();

    const callAboutPage = async () => {
        try {
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: 'application/json',
                    "Content-Type": "application/json"

                },
                credentials: "include"
            });
            const data = await res.json();
            console.log(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);
            history.push('/login');

        }
    }
    useEffect(() => {
        callAboutPage();

    }, []);


    return (
        <>
            <div className="container emp-profile">
                <form method="GET">
                    <div className="row">
                        <div className="col-md-4">

                            <img className="imgsize" src={faridPic} alt="farid" />


                        </div>
                        <div className="col-md-6">
                            <div className="profile-head" />
                            <h5>Farid Zaman</h5>
                            <h6>Web Developer...</h6>
                            <p className="profile-rating mt-3 mb-5">RANKINGS | <span> 1/10</span></p>
                            <div>


                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab"
                                            href="#home" data-toggle="tab" aria-controls="home" role="tab" aria-selected="true">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab"
                                            href="#profile" role="tab" aria-controls="profile" aria-selected="true">Timeline</a>
                                    </li>



                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <input type="text" className="profile-edit-tn" name="btnAddMore"
                                value="Edit Profile" />
                        </div>
                    </div>
                    <div className="row">
                        {/*left side url*/}
                        <div className="col-md-4">
                            <p> WorkLink </p>
                            <a href="https://www.facebook.com/farid.zaman.319/" target="farid">GOOGLE</a>
                            <br />
                            <a href="https://www.facebook.com/farid.zaman.319/" target="farid">GOOGLE</a>
                            <br />
                            <a href="https://www.facebook.com/farid.zaman.319/" target="farid">GOOGLE</a>
                        </div>
                        {/*right side url*/}
                        <div className="col-md-8 pl-5 about-info">
                            <div className="tab-content profile-tab" id="myTabContent"></div>
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label> User ID </label>
                                    </div>
                                    <div className="col-md-6">
                                        <label> +3932949328 </label>
                                    </div>
                                    <div className="col-md-6">
                                        <label> User Name </label>
                                    </div>
                                    <div className="col-md-6">
                                        <label> +3932949328 </label>
                                    </div>
                                    <div className="col-md-6">
                                        <label> User ID </label>
                                    </div>
                                    <div className="col-md-6">
                                        <label> +3932949328 </label>
                                    </div>
                                    <div className="col-md-6">
                                        <label> User Name </label>
                                    </div>
                                    <div className="col-md-6">
                                        <label> +3932949328 </label>
                                    </div>
                                </div>

                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label> Exprience </label>
                                    </div>
                                    <div className="col-md-6">
                                        <label> Expart </label>
                                    </div>
                                    <div className="col-md-6">
                                        <label> Hourly Rate </label>
                                    </div>
                                    <div className="col-md-6">
                                        <label> 12$/hr </label>
                                    </div>
                                    <div className="col-md-6">
                                        <label> User ID </label>
                                    </div>
                                    <div className="col-md-6">
                                        <label> Total Project </label>
                                    </div>
                                    <div className="col-md-6">
                                        <label> 20 </label>
                                    </div>
                                    <div className="col-md-6">
                                        <label> +3932949328 </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default About;
