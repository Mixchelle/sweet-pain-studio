import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { Card, Container, Row, Col, Carousel, InputGroup } from 'react-bootstrap';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { BsFillHouseFill } from 'react-icons/bs';
import { tatuadores } from '../data/tatuadores';
import Logo from '../components/logo';
import Formulario from './Form.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css';

const Home = () => {
  const [googleMapLoaded, setGoogleMapLoaded] = useState(false);

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => setGoogleMapLoaded(true);
      document.head.appendChild(script);
    };

    loadGoogleMapsScript();
  }, []);

  const renderGoogleMap = () => {
    if (googleMapLoaded) {
      const containerStyle = {
        width: '100%',
        height: '400px',
      };

      const center = {
        lat: -27.595747,
        lng: -48.545628,
      };

      return (
        <div style={containerStyle}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
          >
            <Marker position={center} />
          </GoogleMap>
        </div>
      );
    }

    return null;
  };

  return (
    <Container className="mt-4">
      <Row>
     <Logo />
      </Row>
      <Row>
        <Col>
          <Carousel className="container_card">
            {tatuadores.map((tatuador) => (
              <Carousel.Item key={tatuador.id} className="carousel">
                <Link to={`/tatuadores/${tatuador.id}`}>
                  <Card className="card">
                    <img className="card-img" alt="" src={tatuador.fotoPerfil} />
                    <Card.Body>
                      <Card.Title >{tatuador.nome}</Card.Title>
                      <Card.Text>
                        <a className="icons" href={`https://instagram.com/${tatuador.instagram}`} target="_blank" rel="noopener noreferrer">
                          <FaInstagram />
                        </a>
                      </Card.Text>
                      <Card.Text>
                        <a className="icons" href={`https://wa.me/${tatuador.whatsapp}`} target="_blank" rel="noopener noreferrer">
                          <FaWhatsapp />
                        </a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
      <Formulario />
      <Col>
          <InputGroup className="end">
            <h3><BsFillHouseFill /> Endereço:</h3>
            <p className="address">Galeria Santo Antônio, Rua do Imperador, nº 264, sobreloja sala 10</p>
          </InputGroup>
          {renderGoogleMap()}
        </Col>
    </Container>
  );
};

export default Home;
