import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import CustomNavbar from './Navbar';
import Footer from './Footer';
import { Element } from 'react-scroll';
import './App.css';
import ContactForm from './contactForm';

const Section = ({ title, content, image, imageLeft, id, className }) => {
  return (
    <Element name={id} className="my-5">
      <Row className="align-items-center">
        <Col md={12} className="section-title-container">
          <h2 className="fw-bold">{title}</h2>
        </Col>
        {imageLeft && (
          <Col md={6} className="text-center">
            <img src={image} alt={title} className="img-fluid section-image" />
          </Col>
        )}
        <Col md={6}>
          {Array.isArray(content) ? (
            <ul className="skills-list">
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
             <p className={className}>{content}</p>
          )}
        </Col>
        {!imageLeft && (
          <Col md={6} className="text-center">
            <img src={image} alt={title} className={`img-fluid ${title === "About Me" ? "rounded-image" : ""}`} />
          </Col>
        )}
      </Row>
    </Element>
  );
};




const ProjectSection = ({ projects }) => {
  return (
    <Element name="projects" className="my-5">
      <Container>
        <div className="section-title-container">
          <h2 className="fw-bold">Projects</h2>
        </div>

        {projects.map((project, index) => (
          <Row className="align-items-center my-4" key={index}>
            {index % 2 === 0 ? (
              <>
                <Col xs={12} md={6} className="order-1 order-md-1">
                  <h3 className="fw-bold">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </Col>
                <Col xs={12} md={6} className="text-center order-2 order-md-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '250px', height: 'auto' }}
                    className="rounded"
                  />
                </Col>
              </>
            ) : (
              <>
                <Col xs={12} md={6} className="text-center order-2 order-md-1">
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '250px', height: 'auto' }}
                    className="rounded"
                  />
                </Col>
                <Col xs={12} md={6} className="order-1 order-md-2">
                  <h3 className="fw-bold">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </Col>
              </>
            )}
          </Row>
        ))}
      </Container>
    </Element>
  );
};







function App() {
  const githubUsername = 'Rigiih7';
  const [avatarURL, setAvatarURL] = useState('');
  const [repoCount, setRepoCount] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [publicGists, setPublicGists] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}`);
        if (!response.ok) throw new Error("User not found");
        const data = await response.json();
        setAvatarURL(data.avatar_url);
        setRepoCount(data.public_repos);
        setFollowers(data.followers);
        setFollowing(data.following);
        setPublicGists(data.public_gists);
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchGitHubData();
  }, []);

  const projects = [
    {
      title: "Spotcash Mobile Banking System",
      description: "SpotCash is Tangazoletu’s mobile banking platform used by over 70 licensed financial institutions in Kenya, including banks, microfinance institutions, and SACCOs. I have been part of the development team, maintaining the codebase, implementing new features, and fixing bugs.",
      image: "images/spotCash.png"
    },
    {
      title: "SmartTeller",
      description: 
      "SmarteTeller is  a Multitenant system that helps banking activities form opening till in the morning, normal bank transactions like deposit and withdrawal, opening accounts and closing till in the evening. I had a chance to start the backend of this project from scratch and sharpened my skills in java sspringboot ( spring security, jwt authentication and rest APIs development)",
      image: "/images/SmartTeller.jpeg"
    },
    {
      title: "LOOP USSD",
      description: "I’ve had the opportunity and honor to serve as the Solutions Architect responsible for designing the Loop USSD solution. My responsibilities include defining API requirements, guiding developers, creating Technical Requirement Specifications (TRS), and designing API invocation flows. The supported services span user onboarding, top-ups, bill payments, loan management, goal savings, investments, peer-to-peer money transfers, and balance inquiries.",
      image: "images/project6.png"
    },
    {
      title: "Loop API Sandbox",
      description: "The Loop API Sandbox is a secure testing environment for third-party integrations with Loop’s digital banking services. As the Solutions Architect, I’m responsible for validating and onboarding APIs, ensuring they meet business and technical requirements. I also oversee the implementation of security measures, including a signature service that generates unique request signatures to authenticate and protect every API call.",
      image: "images/APIsandbox.png"
    }
  ];

  return (
    <div className="app-container d-flex flex-column">
      <CustomNavbar />
      <div className="content-container">
        <Container className="mt-5">
          <Row className="text-center align-items-center text-white py-5 rounded" style={{
            backgroundImage: "url('images/contributions.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
            <Col>
              <img src={avatarURL} alt="GitHub Avatar" className="rounded-circle mb-3" style={{ width: '100px', border: '3px solid white' }} />
              <h2>@{githubUsername}</h2>
              <p>Public Repositories: <strong>{repoCount}</strong></p>
              <p>Followers: <strong>{followers}</strong> | Following: <strong>{following}</strong></p>
              <p>Public Gists: <strong>{publicGists}</strong></p>
            </Col>
          </Row>

          <Row className="text-center my-4">
            <Col>
              <a href="https://github.com/Rigiih7" target="_blank" rel="noopener noreferrer" className="social-icon mx-3">
                <FaGithub size={30} />
              </a>
              <a href="https://www.linkedin.com/in/brian-mwirigi/" target="_blank" rel="noopener noreferrer" className="social-icon mx-3">
                <FaLinkedin size={30} />
              </a>
              <a href="https://x.com/_Mwirigih" target="_blank" rel="noopener noreferrer" className="social-icon mx-3">
                <FaXTwitter size={30} />
              </a>
              <a href="mailto:mwirigihbrian@gmail.com" className="social-icon mx-3">
                <FaEnvelope size={30} />
              </a>
            </Col>
          </Row>
          <section id="home"></section>
          <Section
            id="about"
            title="About Me"
            className="project-description"
            content="I’m an experienced Solutions Architect with a strong focus on AWS Cloud, DevOps, and backend development. I design scalable, secure systems and lead technical implementations that bridge infrastructure and software. With a passion for automation, cloud-native architecture, and clean backend design, I help teams build reliable, future-proof digital solutions."
            image="images/aboutMe.jpeg"
            imageLeft={true}
          />
          <Section
            id="skills"
            title="Skills"
            content={[
              "Programming Languages: Java, Python (Django), JavaScript",
              "Frameworks & Libraries: Spring Boot, React.js",
              "Cloud & DevOps: AWS (EC2, S3, IAM, Lambda), Docker, Kubernetes, Terraform, CI/CD",
              "Databases: MySQL, PostgreSQL, Oracle",
              "Other Technologies: Git, REST APIs, Microservices"
            ]}
            image="/images/skills1.png"
            imageLeft={false}
          />

          <ProjectSection projects={projects} />
<Element name="contact">
  <ContactForm />
</Element>

        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default App;
