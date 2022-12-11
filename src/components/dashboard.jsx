import React from 'react';
import { Link } from 'react-router-dom'

function Dashboard() {
    return(
        <div>
        <h2>Dashboard</h2>
        <Link to="/prefrences">Prefrences</Link>
        </div>
    );
}

export default Dashboard