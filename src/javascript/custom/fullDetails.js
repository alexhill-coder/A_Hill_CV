// This file retrieves the other componants neccessary to create the various sections of the resume.
import Experience from './experience';
import Education from './education';
import resumeDetails from './resume';
import Skills from './skills';

// Imports the card bootstrap componant.
import Card from 'react-bootstrap/Card';

// This file does most of the work by using the map function to ensure every item in the resumedetails object
// is inserted onto the page.
function Fulldetails() {

  // Provides all the information neccessary to create an item from the work experience section.
  function createWorkExperience(list) {
    return (
    <Experience key={list.id} id={list.id} name={list.name} position={list.position} startDate={list.startDate} 
    endDate={list.endDate} summary={list.summary} highlights={list.highlights} source={list.url} alt={list.alt}/>
    )
  }

  // Provides all the information neccessary to create an item from the education section.
  function createEducation(list) {
    return (
    <Education key={list.id} id={list.id} area={list.area} institution={list.institution} startDate={list.startDate} 
    endDate={list.endDate} details={list.details} highlights={list.highlights} source={list.url} alt={list.alt}/>
    )
  }

  // Provides all the information neccessary to create an item from the certificates section.
  function createCertificate(list) {
    return (

      <a key={list.id} href={list.webAddress}>
      <Card.Img className="certificateImage" variant="top" src={list.url} alt={list.name}/>
      </a>

    )
  }

  // Provides all the information neccessary to create an image from the skills section.
  function createSkills(list) {
    return (
    <Skills key={list.id} id={list.id} source={list.source} alt={list.alt} name={list.name}/>
    )
  }

  // This section builds the second card on the site containing the previous experience and education.
  return (
    <div>
        <Card>
            <Card.Body>
                <Card.Title><i className="fa fa-user-circle" aria-hidden="true"></i>  About</Card.Title>
                <hr/>
                <Card.Text>
                    {resumeDetails.basics.summary}
                </Card.Text>
                <Card.Title className='mt-5'><i className="fa fa-code" aria-hidden="true"></i>  Skills</Card.Title>
                <hr/>
                {/* As these sections are likerly to change they were created with the intention of using map functions to
                build sections based off the information in the resumedetails object. */}
                <div className='iconGrid'>
                    {resumeDetails.skills.map(createSkills)}
                </div>
                <Card.Title className='mt-5'><i className="fa fa-building-o" aria-hidden="true"></i>  Work Experience</Card.Title>
                <hr/>
                {resumeDetails.work.map(createWorkExperience)}
                <Card.Title className='mt-5'><i className="fa fa-graduation-cap" aria-hidden="true"></i>  Education</Card.Title>
                <hr/>
                {resumeDetails.education.map(createEducation)}
                <Card.Title className='mt-5'><i className="fa fa-certificate" aria-hidden="true"></i>  Certificates</Card.Title>
                <hr/>
                <div className='certificate'>
                  {resumeDetails.certificates.map(createCertificate)}
                </div>
            </Card.Body>
        </Card>
    </div>
  );
}

// This is then exported to the details file. 
export default Fulldetails;