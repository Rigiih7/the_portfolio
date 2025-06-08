import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import CustomNavbar from './Navbar';
import { Element } from 'react-scroll';
import './App.css';

const Section = ({ title, content, image, imageLeft, id }) => {
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
            <p>{content}</p>
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
        <h2 className="fw-bold text-center">Projects</h2>
        {projects.map((project, index) => (
          <Row className="align-items-center my-4" key={index}>
            {index % 2 === 0 ? (
              <>
                <Col md={6}>
                  <h3 className="fw-bold">{project.title}</h3>
                  <p>{project.description}</p>
                </Col>
                <Col md={6} className="text-center">
                  <img src={project.image} alt={project.title} style={{ width: '250px', height: 'auto' }} className="rounded" />
                </Col>
              </>
            ) : (
              <>
                <Col md={6} className="text-center">
                  <img src={project.image} alt={project.title} style={{ width: '250px', height: 'auto' }} className="rounded" />
                </Col>
                <Col md={6}>
                  <h3 className="fw-bold">{project.title}</h3>
                  <p>{project.description}</p>
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
      description: "SpotCash is a Tangazoletu Mobile Banking platform used by more than 70 financial institutions in Kenya.",
      image: "images/project4.png"
    },
    {
      title: "SpotPay",
      description: "SpotPay is a creative payment solution to make simple, easy payments.",
      image: "/images/project4.png"
    },
    {
      title: "EDMS",
      description: "The system streamlines document storage, sharing, and accessibility.",
      image: "images/project6.png"
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
            content="Experienced Solutions Architect specializing in AWS Cloud, DevOps, and backend development."
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

          <Section
            id="contact"
            title="Contact Me"
            content="Reach out for collaboration opportunities via LinkedIn or email."
            image="/contact.jpg"
            imageLeft={false}
          />
        </Container>
      </div>
    </div>
  );
}

export default App;
