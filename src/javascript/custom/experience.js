// Imports the card bootstrap componant.
import Card from 'react-bootstrap/Card';

// Goes through the resume object and creates the work experience section of the site.
function Experience(props) {

    // Creates a list using the highlights array of the work experience section of the resume object.
    function createList(list) {
        return (
        <li key={list.id}>{list.content}</li>
        )
    }

    return (

        <div>
            {props.source === "" ? null : <Card.Img className='education mt-5 mb-4' src={props.source} alt={props.alt}/>}
            <Card.Text className={props.source === "" ? "mt-5" : ""}>
                <b>{props.position}, {props.name}</b>
            </Card.Text>
            <Card.Text>
                {props.startDate} - {props.endDate}
            </Card.Text>
            <Card.Text>
                {props.summary}
            </Card.Text>
            <ul>
                {props.highlights.map(createList)}
            </ul>
        </div>
    );
  }

// This is then exported to the full details file. 
export default Experience;