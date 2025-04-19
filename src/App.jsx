import React, { useState } from 'react';
import './App.css';
import profileImage from './assets/Image (2).png';
import projectImage from './assets/project1.png';
import second from './assets/project 2.png';
import third from './assets/project 3.png';
import fourth from './assets/project 4.png';
import fifth from './assets/project 5.png';
import sixth from './assets/project 6.png';
import { Container } from "react-bootstrap";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope, FaArrowUpRightFromSquare } from "react-icons/fa6";

function App() {
  const [isWhiteTheme, setIsWhiteTheme] = useState(false);

  const toggleTheme = () => {
    setIsWhiteTheme(!isWhiteTheme);
  };

  return (
    <div className={isWhiteTheme ? "light-mode" : "dark-mode"}>
      <div className="hero-section min-vh-100 d-flex flex-column align-items-center justify-content-center position-relative px-3 overflow-hidden">
        <div className="position-absolute top-0 end-0 p-3 z-3">
          <div className="d-flex flex-wrap gap-2 justify-content-end">
            <button className="btn btn-success rounded-pill shadow-sm px-4 fw-semibold">Hire Me</button>
            <a
              href="https://drive.google.com/file/d/1G6DSiyu2Pd8wY9BahXrAV2u4Ggzrrc6qhajxEvvIN7s/preview"
              className="btn btn-outline-light rounded-pill shadow-sm px-4 fw-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-download me-2"></i> Resume
            </a>
            <button className="btn btn-outline-warning rounded-circle shadow-sm" onClick={toggleTheme}>
              <i className={isWhiteTheme ? "fas fa-moon" : "fas fa-sun"}></i>
            </button>
          </div>
        </div>

        <div className="text-center mt-5 pt-5 animate__animated animate__fadeInDown">
          <img src={profileImage} alt="Hira Mithani" className="rounded-circle border border-success border-4 shadow" style={{ width: '140px', height: '140px', objectFit: 'cover' }} />
          <div className="mt-2 text-success fs-4">
            <i className="fas fa-code fa-lg"></i>
          </div>
        </div>

        <p className="mt-3 text-center fs-5">
          Hello World! My name is <span className="text-success fw-bold hira-animation">Hira Mithani</span>
        </p>
        <h1 className="fw-bold text-center display-4 text-uppercase animate__animated animate__fadeIn">
          Front-End Web Developer
        </h1>
        <p className="text-secondary text-center w-100 w-md-75 px-2 fs-6 fw-light mt-2">
          As a web developer, I turn ideas into dynamic, user-friendly applications. With a deep passion for technology, I build robust systems that address complex problems and deliver creative, efficient solutions.
        </p>

        <div className="d-flex flex-wrap justify-content-center gap-3 mt-4 px-2">
          {[
            { icon: "fab fa-github", label: "GitHub", link: "https://github.com/hira-mithani" },
            { icon: "fab fa-html5 text-danger", label: "HTML" },
            { icon: "fab fa-css3-alt text-primary", label: "CSS" },
            { icon: "fab fa-js text-warning", label: "JavaScript" },
            { icon: "fab fa-react text-info", label: "React" },
          ].map((tech, index) => (
            <a
              key={index}
              href={tech.link || "#"}
              target={tech.link ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="btn btn-outline-light rounded-pill px-4 py-2 shadow-sm fw-semibold d-flex align-items-center gap-2"
            >
              <i className={tech.icon}></i> {tech.label}
            </a>
          ))}
        </div>

        <div className="mt-5 animate__animated animate__bounce animate__infinite">
          <i className="fas fa-angle-double-down fa-2x text-secondary"></i>
        </div>
      </div>

      {/* Projects */}

      <section className="projects-section bg-black text-white py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-3 text-success">My Work</h2>
          <h3 className="text-center mb-4 fs-1">My Latest Projects</h3>
          <div className="row g-4">
            {[
              { img: third, title: "Crypto Website", desc: "Created a responsive crypto website using HTML5, CSS3, and Bootstrap5.", link: "https://crypto-website-pi-brown.vercel.app/" },
              { img: second, title: "Green Garden Website", desc: "Developed a responsive multi-page site using HTML5, CSS3, and Bootstrap5.", link: "https://greens-garden.vercel.app/" },
              { img: sixth, title: "Medical Website", desc: "Designed a clean, multi-page medical website using HTML5, CSS3, and Bootstrap5.", link: "https://medico-website.vercel.app/" },
              { img: projectImage, title: "Cartzilla Website", desc: "Multi-page e-commerce website with Add to Cart and API features.", link: "https://cartzilla-website-zeta.vercel.app/" },
              { img: fourth, title: "PRICEOYE Website", desc: "Built a React app with Redux Toolkit, Tailwind CSS, and MUI.", link: "https://price-website-ashen.vercel.app/" },
              { img: fifth, title: "Medico Dashboard", desc: "Developed a dynamic dashboard with React, Bootstrap5, and MUI.", link: "https://medical-website-six-snowy.vercel.app/" },
            ].map((project, index) => (
              <div className="col-md-4" key={index}>
                <div className="card bg-dark text-white h-100 shadow">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img src={project.img} className="card-img-top" alt={project.title} />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{project.title}</h5>
                    <p className="card-text">{project.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}

      <section className="services-section bg-dark text-white py-5">
        <div className="container">
          <p className="text-center fw-bold fs-3 text-success mb-2">My Services</p>
          <h2 className="text-center fw-bold mb-4 fs-2">How Can I Help Your Business</h2>
          <div className="row g-4 justify-content-center">
            {[
              { icon: "fas fa-mobile-alt fa-2x mb-3 text-info", title: "Responsive Web Design", desc: "I create websites that look great on all devices." },
              { icon: "fas fa-code fa-2x mb-3 text-warning", title: "HTML, CSS & JavaScript", desc: "I use clean and modern code to build interactive websites." },
              { icon: "fab fa-github fa-2x mb-3 text-light", title: "GitHub", desc: "I use Git and GitHub for version control and collaboration." },
            ].map((service, index) => (
              <div className="col-md-4" key={index}>
                <div className="service-card border rounded p-4 text-center h-100">
                  <i className={service.icon}></i>
                  <h5 className="fw-semibold">{service.title}</h5>
                  <p className="text-muted">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}

      <section id="contact" className="contact-section">
      <div className="contact-background">
        <Container className="text-center text-white">
          <p className="text-success fw-bold fs-3">Contact</p>
          <h2 className="fw-bold fs-2">Did you like my work ?</h2>
          <p>Get in touch & follow my social networks!</p>

          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" className="link-card">
              <FaLinkedin className="icon" />
              <span>Linkedin</span>
              <FaArrowUpRightFromSquare className="arrow" />
            </a>

            <a href="https://instagram.com" target="_blank" className="link-card">
              <FaInstagram className="icon" />
              <span>Instagram</span>
              <FaArrowUpRightFromSquare className="arrow" />
            </a>

            <a href="https://github.com" target="_blank" className="link-card">
              <FaGithub className="icon" />
              <span>GitHub</span>
              <FaArrowUpRightFromSquare className="arrow" />
            </a>

            <a href="mailto:hira.mithani1.xwave@gmail.com" className="link-card">
              <FaEnvelope className="icon" />
              <span>E-mail</span>
              <FaArrowUpRightFromSquare className="arrow" />
            </a>
          </div>
        </Container>
      </div>
    </section>
 

    </div>
  );
}

export default App;
