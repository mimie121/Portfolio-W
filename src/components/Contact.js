
import { useState } from "react";
import contactImg from "../assets/img/contact-img.svg";

const Contact = () => {
  const [message, setMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    const formData = new FormData(event.target);
    formData.append("access_key", "676804ab-acf8-4566-ad3f-6b9f77471d60");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setMessage("Message sent successfully!");
        event.target.reset();
      } else {
        setMessage("Failed to submit form. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div id="connect" className="contact-container">

      <div className="image-container">
        <img className="contact-image" src={contactImg} alt="Contact Us"/>
      </div>
      <div className="form-container">
        <form onSubmit={onSubmit}>
          <h2>Get in Touch</h2>
          <div className='input-row'>
          <input type="text" name="first_name" placeholder="First Name" required className="input-field" />
          <input type="text" name="last_name" placeholder="Last Name" required className="input-field" />
          </div>
         
         <div className='input-row'>
         <input type="email" name="email" placeholder="Your Email" required className="input-field" />
         <input type="tel" name="phone" placeholder="Phone No." required className="input-field" />
         </div>
          <textarea name="message" placeholder="Your Message" required className="textarea-field"></textarea>
          <button type="submit" className="submit-button">Send </button>
        </form>
        {message && <p className="message-text">{message}</p>}
      </div>
      
     
    </div>
  );
};

export default Contact;
