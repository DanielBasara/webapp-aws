import React from 'react'
import { useNavigate } from "react-router-dom";
import { EventLog } from './eventlog';

export const Main = () => {
    const navigate = useNavigate();
    return (
        <div>
            main
            <button onClick={() => { navigate("/login") }}>click here for back to login page</button>
            <EventLog></EventLog>
        </div >
    )
}
