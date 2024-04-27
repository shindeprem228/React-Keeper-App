import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';

function Header()
{
    return (
        <header style={{padding: "10px"}}>
            <h1 style={{color: "white"}}><HighlightIcon /> Notes Keeper</h1>
        </header>
    );
}

export default Header;