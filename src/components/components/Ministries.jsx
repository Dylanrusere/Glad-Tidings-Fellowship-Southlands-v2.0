import React from 'react'
import './Components.css';
import sermonOne from "../assets/images/home-1.jpg";
import { Link } from "react-router-dom";

export const Ministries = () => {
  return (
    <div>
        <div className="ministries_container">
            <div className="overall_container">
                <p className="overall_headings latest_sermons_head">Our Ministries</p>
                <p className="latest_sermon_sub_par">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repellat 
                    dignissimos tenetur ex, dicta inventore ipsum est, quia vel adipisci officia 
                    a consequuntur. Dicta eos eaque minus natus maiores reprehenderit?<br />
                    <span>Be Blessed</span>
                </p>

                <div className="ministries_grid_container">
                    <div className="latest_sermons_card">
                        <div className="card_image_container">
                            <img src={sermonOne} alt="Card" className="card_image" />
                            <div className="card_overlay"></div>
                        </div>
                        <div className="card_content_container ministries_card">
                            <h3 className="card_heading">Children`s Church</h3>
                            <h3 className="card_preacher"></h3>
                            <p className="card_date">Catch Phrase of the ministry</p>
                            <p className="card_date">- Scripture</p>
                            <Link to="children"  className="card_button ministries_btn">
                            Learn More
                            </Link>
                        </div>
                    </div>
                    <div className="latest_sermons_card">
                        <div className="card_image_container">
                            <img src={sermonOne} alt="Card" className="card_image" />
                            <div className="card_overlay"></div>
                        </div>
                        <div className="card_content_container ministries_card">
                            <h3 className="card_heading">Choir</h3>
                            <h3 className="card_preacher"></h3>
                            <p className="card_date">Catch Phrase of the ministry</p>
                            <p className="card_date">- Scripture</p>
                            <Link to="choir"  className="card_button ministries_btn">
                            Learn More
                            </Link>
                        </div>
                    </div>
                    <div className="latest_sermons_card">
                        <div className="card_image_container">
                            <img src={sermonOne} alt="Card" className="card_image" />
                            <div className="card_overlay"></div>
                        </div>
                        <div className="card_content_container ministries_card">
                            <h3 className="card_heading">Homegroups</h3>
                            <h3 className="card_preacher"></h3>
                            <p className="card_date">Catch Phrase of the ministry</p>
                            <p className="card_date">- Scripture</p>
                            <Link to="homegroups"  className="card_button ministries_btn">
                            Learn More
                            </Link>
                        </div>
                    </div>
                    <div className="latest_sermons_card">
                        <div className="card_image_container">
                            <img src={sermonOne} alt="Card" className="card_image" />
                            <div className="card_overlay"></div>
                        </div>
                        <div className="card_content_container ministries_card">
                            <h3 className="card_heading">Ladies Fellowship</h3>
                            <h3 className="card_preacher"></h3>
                            <p className="card_date">Catch Phrase of the ministry</p>
                            <p className="card_date">- Scripture</p>
                            <Link to="ladies"  className="card_button ministries_btn">
                            Learn More
                            </Link>
                        </div>
                    </div>
                    <div className="latest_sermons_card">
                        <div className="card_image_container">
                            <img src={sermonOne} alt="Card" className="card_image" />
                            <div className="card_overlay"></div>
                        </div>
                        <div className="card_content_container ministries_card">
                            <h3 className="card_heading">Men`s Fellowship</h3>
                            <h3 className="card_preacher"></h3>
                            <p className="card_date">Catch Phrase of the ministry</p>
                            <p className="card_date">- Scripture</p>
                            <Link to="men"  className="card_button ministries_btn">
                            Learn More
                            </Link>
                        </div>
                    </div>
                    <div className="latest_sermons_card">
                        <div className="card_image_container">
                            <img src={sermonOne} alt="Card" className="card_image" />
                            <div className="card_overlay"></div>
                        </div>
                        <div className="card_content_container ministries_card">
                            <h3 className="card_heading">Youth Ministry</h3>
                            <h3 className="card_preacher"></h3>
                            <p className="card_date">Catch Phrase of the ministry</p>
                            <p className="card_date">- Scripture</p>
                            <Link to="youth"  className="card_button ministries_btn">
                            Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
