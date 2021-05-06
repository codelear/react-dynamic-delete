import { Container } from "react-bootstrap";
import "./App.css";

function PanelDisplay(props)
{
    function deleteHandler(eventArgs)
    {
        console.log(eventArgs.target);
        props.onDelete(eventArgs.target.id);
    }

    return(
        <Container>
        {props.displayDetails.map(
            detail=>
        <div className="row m-3 p-3 bg-warning justify-content-center" key={detail.id} onClick={deleteHandler} id={detail.id}>
         {detail.info}
        </div>
        )}
        </Container>
    )
}

export default PanelDisplay;