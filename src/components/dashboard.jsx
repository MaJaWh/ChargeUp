import React from 'react';
import { NavDropdown, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Header from '../components/Header';
import Footer from './Footer'
import Map from '../components/Map'


function Dashboard() {
    let user = JSON.parse(localStorage.getItem("user-info"));
    const history = useNavigate();
    function logOut() {
      localStorage.clear();
      history.push("/Login");
    }
    return(
        <>
        <div>
            <Link to="/prefrences">Prefrences</Link>
            <h2>Dashboard</h2>
            <Nav>
                <NavDropdown title="user name">
                    <NavDropdown.Item>onclick={logOut}Logout</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </div><div>
                <Header />
                <Map />
                <Footer />
            </div>
            </>
    );
}

export default Dashboard