import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props)
{
    function deleteNote()
    {
        props.onDelete(props.id)
    }
    return(
        <div id={props.id} className="col-md-3 card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.content}</p>
                <button style={{marginLeft: "75%"}} className="btn btn-outline-danger" onClick={deleteNote}> <DeleteIcon /> </button>
            </div>
        </div>
    ) ;
}

export default Note;