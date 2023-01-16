// Retrieves bootstrap componants to create elements within a grid. 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Retrieves the completed about section and the full resume details section.
import About from './about'
import Fulldetails from './fullDetails';

// Provides the grid in which the information is contained within. 
function Resume() {

  return (
    <div>
      <Container className='text-black'>
          <Row>
              {/* With the page made up of 12 columns altering the numbers enables the cards page width/position to
              be easily determined.  */}
              <Col sm={4}>
                  <About />
              </Col>
              <Col sm={8}>
                <Fulldetails />
              </Col>
          </Row>
      </Container>
    </div>
  );
}

// This is then exported to the app file.
export default Resume;