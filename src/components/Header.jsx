import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import maquina from '../images/art.png';
import { tatuadores } from '../data/tatuadores';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Header.css'

function Header() {
  return (
    <div>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <h3>
           
        </h3>
        <Nav className="mr-auto" id="t">
          <ul>
            {tatuadores.map((tatuador) => (
              <li key={tatuador.id}>
                <Nav.Link href={`/tatuadores/${tatuador.id}`} rel="noreferrer" testid="linkedin-icon">
                  {tatuador.nome}
                </Nav.Link>
              </li>
            ))}
          </ul>
       
          </Nav>
        
        </Navbar.Collapse>
        <Nav.Link href={`/`}  rel="noreferrer" testid="linkedin-icon">
        <div className="logo">
          <img className='maquina' src={maquina} alt="" />
         Home
        </div>
        </Nav.Link>
      </Navbar>
    </div>
  );
}

export default Header;
