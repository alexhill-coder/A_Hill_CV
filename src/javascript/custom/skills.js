// Imports the card bootstrap componant. 
import Card from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

// Each skill information from the database object is provided here one by one creating a new skill image icon
function Skills(props) {

  const skillName = props.name;

  const renderSkillName = (props) => (
    <Tooltip id="button-tooltip" {...props}>
    {skillName}
    </Tooltip>
  )

  return (
    <OverlayTrigger placement='top' overlay={renderSkillName}>
    <Card.Img className="skills" variant="top" src={props.source} alt={props.alt} />
    </OverlayTrigger>
                
  );
}

// This is then exported to the full details file.
export default Skills;