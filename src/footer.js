import Container from 'react-bootstrap/Container';
import Footer from 'react-bootstrap/Footerr';

function Menu() {
  return (
    <>
      
      <Footer className="bg-dark">
        <Container>
          <Footer.Brand href="#home">
            <img
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-bottom"
              alt="React Bootstrap logo"
            />
          </Footer.Brand>
        </Container>
      </Footer>
      <br />
      
    </>
  );
}

export default Menu;