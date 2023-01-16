// Imports the card bootstrap componant. 
import Card from 'react-bootstrap/Card';

// Each skill information from the database object is provided here one by one creating a new skill image icon
function Skills(props) {
  return (
    
    <Card.Img key={props.id} className="skills" variant="top" src={props.source} alt={props.alt} />
                
  );
}

// This is then exported to the full details file.
export default Skills;