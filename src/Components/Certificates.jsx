import React from 'react'
import '../Styles/certificates.scss'
import {BsArrowUpRight} from 'react-icons/bs'
import {SiFreecodecamp, SiUdemy} from 'react-icons/si'
import {FaHackerrank} from 'react-icons/fa6'
const Certificates = () => {
  return (
    <section id="certificates">
        <div className="box">
            <h2>Certificates</h2>
            <div className="cards">
                <div className="card">
                    <div className="logo">
                        <SiFreecodecamp/>
                        <p>freeCodeCamp</p>
                    </div>
                    <div className="info">
                        <h4>Responsive Web Design</h4>
                        <p className='colorText'>freeCodeCamp</p>
                        <p>HTML-CSS-Responsive Design</p>
                    </div>
                    <div className="btn">
                        <a href="https://freecodecamp.org/certification/fcc7a2fa9dc-c357-4da6-a63e-32014141ae93/responsive-web-design">
                            <button>View Certificate <BsArrowUpRight/></button>
                        </a>
                    </div>
                </div>
                <div className="card card2">
                     <div className="logo">
                        <FaHackerrank/>
                        <p>HackerRank</p>
                    </div>
                    <div className="info">
                        <h4>Core Java Course </h4>
                        <p className='colorText'>HackerRank</p>
                        <p>Core Java</p>
                    </div>
                    <div className="btn">
                        <a href="https://www.hackerrank.com/certificates/f9d8f3b82e1d">
                            <button>View Certificate <BsArrowUpRight/></button>
                        </a>
                    </div>
                </div>
                <div className="card card3">
                     <div className="logo">
                        <SiUdemy />
                        <p>Udemy</p>
                    </div>
                    <div className="info">
                        <h4>JavaScript Course</h4>
                        <p className='colorText'>Udemy</p>
                        <p>JavaScript-ES6-DOM</p>
                    </div>
                    <div className="btn">
<<<<<<< HEAD
                        <a href="ude.my/UC-8d91dde7-5c7c-41b8-9a0a-87da022bbb22">
=======
                        <a href="https://ude.my/UC-8d91dde7-5c7c-41b8-9a0a-87da022bbb22">
>>>>>>> d40ba46 (fix design)
                            <button>View Certificate <BsArrowUpRight/></button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Certificates
