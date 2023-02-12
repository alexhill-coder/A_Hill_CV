// Imports the card bootstrap componant.
import Card from 'react-bootstrap/Card';

// Goes through the resume object and creates the education section of the site.
function Education(props) {

    // Creates a list using the highlights array of the education section of the resume object.
    function createList(list) {
        return (
        <li key={list.id}>{list.content}</li>
        )
    }

    // This section is used to go through the resumeDetails object and create a section for each previous education mentioned. 
    return (

        <div>
            <Card.Img className='education mt-5 mb-4' src={props.source} alt={props.alt}/>
            <Card.Text>
                <b>{props.area}, {props.institution}</b>
            </Card.Text>
            <Card.Text>
                {props.startDate} - {props.endDate}
            </Card.Text>
            <Card.Text>
                {props.details}
            </Card.Text>
                <ul>
                    {props.highlights.map(createList)}
                </ul>
        </div>
    );
  }

// This is then exported to the full details file.  
export default Education;