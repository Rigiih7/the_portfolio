import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Sidebar from './sidebar.js';
import './App.css';

const Section = ({ title, content, image, imageLeft }) => {
  return (
    <Row className="align-items-center my-5">
      <Col md={12} className="section-title-container">
        <h2 className="fw-bold">{title}</h2>
      </Col>
      {imageLeft && (
        <Col md={6}>
          <img src={image} alt={title} className="img-fluid rounded" />
        </Col>
      )}
      <Col md={6}>
        <p>{content}</p>
      </Col>
      {!imageLeft && (
        <Col md={6}>
          <img src={image} alt={title} className="img-fluid rounded" />
        </Col>
      )}
    </Row>
  );
};

const ProjectSection = ({ projects }) => {
  return (
    <Container>
      <h2 className="fw-bold text-center">Projects</h2>
      {projects.map((project, index) => (
        <Row className="align-items-center my-4" key={index}>
          {index % 2 === 0 ? (
            // Even index: Image on the right, title+paragraph on the left
            <>
              <Col md={6}>
                <h3 className="fw-bold">{project.title}</h3>
                <p>{project.description}</p>
              </Col>
              <Col md={6} className="text-center">
                <img src={project.image} alt={project.title} className="img-fluid rounded" />
              </Col>
            </>
          ) : (
            // Odd index: Image on the left, title+paragraph on the right
            <>
              <Col md={6} className="text-center">
                <img src={project.image} alt={project.title} className="img-fluid rounded" />
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
      image: "/spotcash.jpg"
    },
    {
      title: "SpotPay",
      description: "SpotPay is a creative payment solution to make simple, easy payments.",
      image: "/spotpay.jpg"
    },
    {
      title: "EDMS",
      description: "The system streamlines document storage, sharing, and accessibility.",
      image: "/edms.jpg"
    }
  ];

  return (
    <div className="app-container d-flex">
      <Router>
        <Sidebar />
      </Router>

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
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="social-icon mx-3">
              <FaLinkedin size={30} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon mx-3">
              <FaTwitter size={30} />
            </a>
            <a href="mailto:your-email@example.com" className="social-icon mx-3">
              <FaEnvelope size={30} />
            </a>
          </Col>
          </Row>




          <Section title="About Me" content="Experienced Solutions Architect specializing in AWS Cloud, DevOps, and backend development." image="/about.jpg" imageLeft={true} />
          <Section title="Skills" content="Proficient in Java, Spring Boot, AWS, CI/CD pipelines, and cloud security." image="/skills.jpg" imageLeft={false} />
          <Section title="Tech Stack" content="Expertise in AWS (EC2, S3, IAM), Docker, Kubernetes, Terraform, and modern DevOps practices." image="/techstack.jpg" imageLeft={true} />

          <ProjectSection projects={projects} />

          <Section title="Certifications" content="AWS Cloud Practitioner Certified, pursuing Solutions Architect Associate." image="/certifications.jpg" imageLeft={true} />
          <Section title="Contact Me" content="Reach out for collaboration opportunities via LinkedIn or email." image="/contact.jpg" imageLeft={false} />
        </Container>
      </div>
    </div>
  );
}

export default App;
