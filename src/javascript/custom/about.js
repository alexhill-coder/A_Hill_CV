// This uses the bootstrap card to create the first section of the page containing the photo, location & contact.
import Card from 'react-bootstrap/Card';

// The image is imported from the images folder and inserted onto the page. 
import portrait from '../../images/portrait.png';

// Brings in the object containing all the details for the website. 
import resumeDetails from './resume';

// Created a function that creates an icon link that will be automatically applied once added to the object above.  
import Iconlink from './iconLinks';

// This function provides the style/data contained in the first card providing the contact details.
function About() {

    // The function provides the required information in order to create a working icon link.
    function createIcon(list) {
        return (
        <Iconlink key={list.id} url={list.url} class={list.class} />
        )
    }

    // As most of this information won't need to be changed anytime soon the information is linked directly 
    // to the object database.
    return (
      <div>
            <Card className='text-center'>
                <Card.Img id='portrait' className="mx-auto" variant="top" src={portrait} />
                <Card.Body>
                    <Card.Title className='titleName'>{resumeDetails.basics.name}</Card.Title>
                    <Card.Title className='jobName'>{resumeDetails.basics.label}</Card.Title>
                    <hr />
                    <Card.Text className='aboutText'>
                        <i className="fa fa-map-marker me-2" aria-hidden="true"></i>
                        {resumeDetails.basics.location.city + ", " + 
                        resumeDetails.basics.location.region + ", " + resumeDetails.basics.location.countryCode}
                    </Card.Text>
                    <Card.Text className='aboutText'>
                        <i className="fa fa-envelope me-2" aria-hidden="true"></i>
                        <a href={"mailto:" + resumeDetails.basics.email}>{resumeDetails.basics.email}</a>
                    </Card.Text>
                    <hr />
                    {/* This is the most complicated part of this section as it will dynamically create icon buttons 
                    using the information from the database object. This enables adding more social links in the future
                    while only needing to add a few lines to the database object. */}
                    <Card.Text className='iconSize'>
                        {resumeDetails.basics.profiles.map(createIcon)}
                    </Card.Text>
                    <hr />
                    <Card.Title className='aboutText'>
                        {resumeDetails.basics.contactinfo}
                    </Card.Title>
                </Card.Body>
           </Card>
      </div>
    );
  }

//  This completed section is now exported to the details file. 
export default About;