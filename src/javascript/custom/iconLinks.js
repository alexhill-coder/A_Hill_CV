// Creates a functional icon button using information from the resume databse object.
function Iconlink(props) {
    return (
        <a key={props.id} target="_blank" rel="noreferrer" href={props.url}>
        <i className={props.class} aria-hidden="true"></i>
        </a>
    );
  }

// This item is exported to the about file.
export default Iconlink;