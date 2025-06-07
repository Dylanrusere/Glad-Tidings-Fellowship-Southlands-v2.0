import React from 'react';
import './Components.css';

export const ContactComp = () => {
  return (
    <div className="contact_comp_section">
      <div className="overall_contact_container">
        <div className="contact_head_container">
          <p className="contact_get overall_headings" data-aos="fade-right" data-aos-duration="1000">
            Get In Touch
          </p>
          <p className="contact_brief" data-aos="fade-right" data-aos-duration="2000">
            We would love to hear from you! Whether you have questions about our ministries, upcoming events, or simply need someone to pray with, our doors—and hearts—are always open.
            <br />Reach out today and let's walk this faith journey together.
          </p>
        </div>
      </div>

      <div className="big_contact_container">
        <div className="contact_container">
          <div className="contact_form">
            <p className="send_msg overall_headings" data-aos="fade-right" data-aos-duration="1000">
              Send A Message
            </p>
            <form>
              <div className="first_form">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  id="name"
                  required
                  data-aos="slide-up"
                  data-aos-duration="2000"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  data-aos="slide-up"
                  data-aos-duration="2500"
                />
              </div>

              <div className="second_form">
                <input
                  type="number"
                  name="number"
                  placeholder="Mobile Number"
                  id="number"
                  required
                  data-aos="slide-up"
                  data-aos-duration="3000"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  data-aos="slide-up"
                  data-aos-duration="2500"
                />
              </div>

              <textarea
                name="message"
                placeholder="Message"
                id="message"
                rows="4"
                required
                data-aos="slide-up"
                data-aos-duration="3500"
              ></textarea>

              <button type="submit">
                Send <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>

          <div className="contact_details">
            <div className="contact_info_head overall_headings">Contact Information</div>
            <p className="location" data-aos="slide-up" data-aos-duration="1000">
              <i className="fa-solid fa-location-dot"></i> <a href="">7417 Southlands Park</a>
            </p>
            <p className="phone_number" data-aos="slide-up" data-aos-duration="1500">
              <i className="fa-solid fa-phone"></i> +(263) 86 0009 889 12
            </p>
            <p className="email_address" data-aos="slide-up" data-aos-duration="2000">
              <i className="fa-solid fa-envelope"></i>{' '}
              <a href="mailto:info@gtfsouthlands.org">info@gtfsouthlands.org</a>
            </p>
            <p className="worling_hours" data-aos="slide-up" data-aos-duration="2500">
              <i className="fa-solid fa-clock"></i> Open 24hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
