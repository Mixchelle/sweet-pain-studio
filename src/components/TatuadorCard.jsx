import React, { useState } from 'react';
import { tatuadores } from '../data/tatuadores';
import { useParams } from 'react-router-dom';
import { Instagram, Whatsapp } from 'react-bootstrap-icons';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


import '../styles/Card.css';

const TatuadorPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  

  const { id } = useParams();
  const tatuador = tatuadores.find(tatuador => tatuador.id === parseInt(id));
  if (!tatuador) {
    return <div>Tatuador não encontrado</div>;
  }

  const handleImageClick = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };
  

  return (
    <div >
      <img className="perfil" src={tatuador.fotoPerfil} alt="Foto do tatuador" />
      <h2>{tatuador.nome}</h2>
      <div className="icon">
        <a className="i" target="_blank" href={`https://www.instagram.com/${tatuador.instagram}`} rel="noreferrer">
          <Instagram size={24} />
        </a>
        <a className="ia" target="_blank"  href={`https://api.whatsapp.com/send?phone=/${tatuador.whatsapp}&text=oi`} rel="noreferrer">
          <Whatsapp size={24} />
        </a>
      </div>
      <h3>Trabalhos feitos</h3>
      <div className="book">
  {tatuador.tatuagens.map((tatuagem, index) => (
    <img
      key={index}
      className="tatuagem"
      src={tatuagem}
      alt={`Tatuagem ${index + 1}`}
      onClick={() => handleImageClick(index)}
    />
  ))}
</div>
{isOpen && (
  <Lightbox
    mainSrc={tatuador.tatuagens[photoIndex]}
    nextSrc={tatuador.tatuagens[(photoIndex + 1) % tatuador.tatuagens.length]}
    prevSrc={tatuador.tatuagens[(photoIndex + tatuador.tatuagens.length - 1) % tatuador.tatuagens.length]}
    onCloseRequest={() => setIsOpen(false)}
    onMovePrevRequest={() => setPhotoIndex((photoIndex + tatuador.tatuagens.length - 1) % tatuador.tatuagens.length)}
    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % tatuador.tatuagens.length)}
  />
)}

    </div>
  );
};

export default TatuadorPage;
