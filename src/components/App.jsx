import React, {useState} from "react";
import Header from "./Header.jsx"
import TextArea from "./TextArea.jsx";
import Note from "./Note.jsx"
import Footer from "./Footer.jsx"


function App()
{
    const [notes, addNote] = useState([])

    function newNote(note)
    {
        addNote((prevVal)=>{
            return [...prevVal, note];
        })
    }

    function deleteNote(id)
    {
        addNote((prevVal)=>{
            return prevVal.filter((note, index)=>{
                return index != id;
            })
        })
    }

    return (
        <div>
            <Header />
            <TextArea onAdd={newNote}/>
            <div className="main container justify-content-center">
                <div className="row" style={{marginLeft: "6%"}}>
                    {notes.map((note, index)=>{
                        return <Note key={index} id={index} onDelete={deleteNote} title={note.title} content={note.content}/>
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;