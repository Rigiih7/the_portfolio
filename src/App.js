//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import { Button, Card, CardGroup,Form,InputGroup } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function App() {
    const [avatarURL, setAvatarURL] = useState();
    const [avatar1URL, setAvatar1URL] = useState ();
    const [githubUsername, setGitHubUsername] = useState();
    const [githubUsername1, setGitHubUsername1] = useState();
    const [repoData, setRepoData] = useState();
    const [repoData1, setRepoData1] = useState();
    
    const handleSubmit = async (event) => {
      event.preventDefault();
    };
    
  async function repoDataURL() {
    //Get repo data about github user
    await fetch("https://api.github.com/users/Rigiih7/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(36, result);
          const list = result.map((item) => (
            <div className="text-center">
              <a target="_blank" href={item.svn_url}>
                {item.name}
              </a>
            </div>
          ));
          setRepoData(list);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  async function repoData1URL() {
    //Get repo data about github user
    await fetch("https://api.github.com/users/TamaraLumumba/repos")
      .then((res1) => res1.json())
      .then(
        (result1) => {
          console.log(36, result1);
          const list = result1.map((item1) => (
            <div className="text-center">
              <a target="_blank" href={item1.svn_url}>
                {item1.name}
              </a>
            </div>
          ));
          setRepoData1(list);
        },
        (error) => {
          console.log(error);
        }
      );
  }


    useEffect(() => {
      fetch("https://api.github.com/users/Rigiih7")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setAvatarURL(result.avatar_url);
          setGitHubUsername(result.login);
        },
        (error) => {
          console.log(error);
        }
      );

      fetch("https://api.github.com/users/TamaraLumumba")
      .then((res1) => res1.json())
      .then(
        (result1) => {
          console.log(result1);
          setAvatar1URL(result1.avatar_url); // Fix: Use result1 for the second user
          setGitHubUsername1(result1.login); // Fix: Use result1 for the second user
    },
    (error) => {
      console.log(error);
    }
  );

    }, []);
    return (
    <div className='App w-100 min-vh-100 justify-content-center align-items-center d-flex flex-column'>
    <CardGroup>
    <Card style={{ width: '18rem' }} className='mb-3 p-4 card-spacing border-5'>
      <Card.Img variant="top" src={avatarURL} />
      <Card.Body>
        <Card.Title>
          {githubUsername}
        </Card.Title>  
        <Button variant="secondary" onClick = {repoDataURL}>List my repositories!</Button>
      </Card.Body>
      {repoData}
    </Card>
    <Card style={{ width: '18rem' }} className='mb-3 p-4 card-spacing border-5'>
      <Card.Img variant="top" src={avatar1URL} />
      <Card.Body>
        <Card.Title>
          {githubUsername1}
        </Card.Title>
        
        <Button variant="secondary" onClick = {repoData1URL}>List my repositories1!</Button>
      </Card.Body>
      {repoData1}
      </Card> 
      </CardGroup>
    <Card style={{ width: '50rem' }}>
      <Card.Img variant="top" src="images/contributions.png"/>
      <Card.Body>
        <Card.Title>GitHub worth Estimate</Card.Title>
        

        <InputGroup className="mb-4 d-flex justify-content-center align-items-center">
        <InputGroup.Text id="basic-addon1" >@</InputGroup.Text>
        <Form.Control
          className='custom-input'
          placeholder="GitHub Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>



                <Button variant="secondary"> $ Calculate worth</Button>
      </Card.Body>
    </Card>
    </div>
    
    
   


  );

}
export default App;