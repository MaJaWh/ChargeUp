import React from 'react';
import { Link } from 'react-router-dom'

function Dashboard() {
    return(
        <div>
        <Link to="/prefrences">Prefrences</Link>
        <h2>Dashboard</h2>
        </div>
    );
}

export default Dashboard