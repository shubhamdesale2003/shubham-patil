import React,{useRef} from "react";
import "../Styles/contact.scss";
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaListCheck, FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import  emailjs from '@emailjs/browser';
import toast from 'react-hot-toast'
const Contact = () => {

  const serviceID = import.meta.env.VITE_service_id;
  const templateID = import.meta.env.VITE_template_id;
  const publickey = import.meta.env.VITE_public_key;
  const form = useRef();

  const sendEmail = (e)=>{
    e.preventDefault();
    emailjs.sendForm(serviceID,templateID,form.current,publickey).then(()=>{
      toast.success("Message Sent!")
      e.target.reset()
    },
    (error)=>{
      toast.error(error.text ||"failed to send message!")
      console.log(error);
      
    }
  )
  }
  return (
    <section id="contact">
      <h2>Contact</h2>
      <section className="box">
        <section>
          <div>
            <MdAttachEmail />
            <div className="msg">
              <h4>Email</h4>
              <h5>shubhamhanumantpatil@gmail.com</h5>
            </div>
          </div>
          <div>
            <FaPhoneAlt />
            <div className="msg">
              <h4>Phone</h4>
              <h5>91+ 8010094863</h5>
            </div>
          </div>
          <div>
            <FaLocationDot />
            <div className="msg">
              <h4>Location</h4>
              <h5>Pune ,India</h5>
            </div>
          </div>
          <div>
            <FaGithub />
            <div className="msg">
              <h4>GitHub</h4>
              <h5>github.com/shubhamdesale2003</h5>
            </div>
          </div>
          <div>
            <LuLinkedin />
            <div className="msg">
              <h4>LinkedIn</h4>
              <h5>linkedin.com/in/Shubham-Desale12</h5>
            </div>
          </div>
        </section>
        <section>
            <div>
                <form ref={form} onSubmit={sendEmail}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name" required placeholder="enter name"/>
                    <label htmlFor="name">Your Email</label>
                    <input type="email" name="email" required placeholder="enter email"/>
                    <label htmlFor="msg">Message</label>
                    <textarea name="message" required placeholder="message..."></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
      </section>
    </section>
  );
};

export default Contact;
