import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';



function TextArea(props)
{
    const [isExpanded, setExpanded] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event)
    {
        const{value, name} = event.target;

        setNote((prevVal)=>{
            if(name === "title")
            {
                return {
                    title: value,
                    content: prevVal.content
                }
            }
            else if(name === "content")
            {

                return {
                    title: prevVal.title,
                    content: value
                }
            }
        })
    }

    function addNote(event)
    {
        props.onAdd(note);
        event.preventDefault();
        setNote({
            title: "",
            content: ""
        })
    }

    function expand()
    {
        setExpanded(true);
    }

    return (
        <div className="container">
            <form className="note mx-auto">
                {isExpanded && <input onChange={handleChange} className="input" type="text" placeholder="Title" name="title" value={note.title}/>}
                <textarea onClick={expand} onChange={handleChange} className="textarea" placeholder="Content" rows={isExpanded? "3" : "1"}name="content" value={note.content}/>

                {isExpanded && <Zoom in={true}><Fab onClick={addNote} className=""><AddIcon /></Fab></Zoom>}
            </form>
        </div>
    )
}

export default TextArea;